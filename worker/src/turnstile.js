// Cloudflare Turnstile server-side verification.
// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Returns true when the token is valid. Fails CLOSED (returns false) on any
// network/parse error so a Turnstile outage blocks submissions rather than
// opening the endpoint to abuse — this is a public, unauthenticated form.
export async function verifyTurnstile(secret, token, remoteIp) {
  if (!secret || !token) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true;
  } catch (_) {
    return false;
  }
}
