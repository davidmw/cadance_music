// POST /request-art handler.
//
// Pipeline: parse → validate → Turnstile → store (KV) → email the two
// email-channel .cadnote files. Storage happens before the email so the
// request is captured even if delivery fails; the email uses waitUntil so the
// user gets a fast response while the send completes.

import { verifyTurnstile } from "./turnstile.js";
import { storeRequest, makeRequestId } from "./store.js";
import { sendArtEmail } from "./email.js";
import { isValidEmail, normalizePhone, json } from "./util.js";

export async function handleRequestArt(request, env, ctx) {
  const origin = request.headers.get("Origin") || "";

  // Parse the body as JSON (the page posts application/json).
  let body;
  try {
    body = await request.json();
  } catch (_) {
    return json(env, origin, { ok: false, error: "Invalid request body." }, 400);
  }

  const name = typeof body["full-name"] === "string" ? body["full-name"].trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const turnstileToken = typeof body["cf-turnstile-response"] === "string" ? body["cf-turnstile-response"] : "";
  const smsConsent = body["sms-consent"] === true || body["sms-consent"] === "on";
  const honeypot = typeof body.company === "string" ? body.company : "";

  // Honeypot: a real user never fills the hidden "company" field. Pretend to
  // succeed so bots learn nothing, but store/send nothing.
  if (honeypot) {
    return json(env, origin, { ok: true });
  }

  // Validate required fields.
  if (!name) {
    return json(env, origin, { ok: false, error: "Please enter your full name.", field: "full-name" }, 400);
  }
  if (!isValidEmail(email)) {
    return json(env, origin, { ok: false, error: "Please enter a valid email address.", field: "email" }, 400);
  }

  // Optional phone, only meaningful with SMS consent. Present-but-invalid is a
  // validation error so the user can fix it; absent is fine.
  const phone = normalizePhone(body.phone);
  if (phone === false) {
    return json(env, origin, {
      ok: false,
      error: "Please enter your phone number with country code (e.g. +61 412 345 678), or leave it blank.",
      field: "phone",
    }, 400);
  }

  // Turnstile (spam control).
  const remoteIp = request.headers.get("CF-Connecting-IP") || undefined;
  const human = await verifyTurnstile(env.TURNSTILE_SECRET, turnstileToken, remoteIp);
  if (!human) {
    return json(env, origin, { ok: false, error: "Verification failed. Please try again." }, 403);
  }

  // Capture the request for later transactional purposes.
  const record = {
    id: makeRequestId(),
    name,
    email,
    phone, // null when not provided
    smsConsent,
    submittedAt: new Date().toISOString(),
    // Which channel carries which notes (email now; SMS reserved).
    deliveredByEmail: ["Jazz Dancer With Links", "Prodigal Son With Links"],
    reservedForSms: ["Ballet 5th With Links", "Ballet pair With Links"],
    emailStatus: "pending",
  };
  try {
    await storeRequest(env, record);
  } catch (err) {
    console.error("KV store failed:", err);
    return json(env, origin, { ok: false, error: "Could not save your request. Please try again." }, 500);
  }

  // Send the fulfilment email in the background; respond immediately.
  const emailPromise = sendArtEmail(env, { name, email })
    .then(async (messageId) => {
      await env.ART_REQUESTS.put(
        `request:${record.id}`,
        JSON.stringify({ ...record, emailStatus: "sent", emailMessageId: messageId }),
        { expirationTtl: 90 * 24 * 60 * 60 }
      );
    })
    .catch(async (err) => {
      console.error("Email send failed:", err && err.code, err && err.message);
      await env.ART_REQUESTS.put(
        `request:${record.id}`,
        JSON.stringify({ ...record, emailStatus: "failed", emailError: String(err && err.code || err) }),
        { expirationTtl: 90 * 24 * 60 * 60 }
      ).catch(() => {});
    });
  ctx.waitUntil(emailPromise);

  return json(env, origin, { ok: true, message: "Your request is in. Watch your inbox for the note files." });
}
