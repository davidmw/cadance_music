// Admin endpoints (token-protected, read-only).
//
// GET /admin/requests  → list captured art-note requests, newest first.
//
// Auth: send the shared admin token either as
//   - an `X-Admin-Token: <token>` header, or
//   - a `?token=<token>` query param (handy for viewing in a browser).
//
// Set the token once with:  npx wrangler secret put ADMIN_TOKEN
// This is a single-operator convenience view, not multi-user auth — the token
// is the gate, so keep it private and rotate it if it is ever shared.

import { json } from "./util.js";

// Timing-safe string comparison to avoid leaking the token via early-exit.
function safeEqual(a, b) {
  const enc = new TextEncoder();
  const ba = enc.encode(String(a));
  const bb = enc.encode(String(b));
  if (ba.length !== bb.length) return false;
  return crypto.subtle.timingSafeEqual(ba, bb);
}

function unauthorized(env, origin) {
  return json(env, origin, { ok: false, error: "Unauthorized." }, 401);
}

export async function handleAdmin(request, env, ctx) {
  const url = new URL(request.url);
  const origin = request.headers.get("Origin") || "";

  const provided =
    request.headers.get("X-Admin-Token") || url.searchParams.get("token") || "";
  if (!env.ADMIN_TOKEN || !provided || !safeEqual(provided, env.ADMIN_TOKEN)) {
    return unauthorized(env, origin);
  }

  if (url.pathname === "/admin/requests") {
    return listRequests(env, origin);
  }

  return json(env, origin, { ok: false, error: "Not found" }, 404);
}

async function listRequests(env, origin) {
  try {
    // At this volume a single page is plenty; KV list returns up to 1000 keys.
    const { keys } = await env.ART_REQUESTS.list({ prefix: "request:" });

    const records = await Promise.all(
      keys.map(async ({ name }) => {
        const raw = await env.ART_REQUESTS.get(name);
        if (!raw) return null;
        try {
          return JSON.parse(raw);
        } catch (_) {
          return null;
        }
      })
    );

    const cleaned = records
      .filter(Boolean)
      .sort((a, b) => new Date(b.submittedAt || b.storedAt || 0) - new Date(a.submittedAt || a.storedAt || 0))
      .map((r) => ({
        id: r.id,
        name: r.name,
        email: r.email,
        phone: r.phone ?? null,
        smsConsent: r.smsConsent === true,
        submittedAt: r.submittedAt || r.storedAt || null,
        emailStatus: r.emailStatus || "unknown",
        emailMessageId: r.emailMessageId || null,
        emailError: r.emailError || null,
        deliveredByEmail: r.deliveredByEmail || [],
        reservedForSms: r.reservedForSms || [],
      }));

    return json(env, origin, { ok: true, count: cleaned.length, requests: cleaned });
  } catch (e) {
    return json(env, origin, { ok: false, error: "Could not list requests." }, 500);
  }
}
