// Shared helpers: JSON responses + CORS.

// Build CORS headers. Only the configured site origin may call the API from a
// browser; anything else gets no CORS grant (the request still works via curl,
// which is fine — CORS is a browser control, not auth).
export function corsHeaders(env, origin, preflight = false) {
  const allowed = env.ALLOWED_ORIGIN || "";
  const headers = {
    "Access-Control-Allow-Origin": origin === allowed ? allowed : "null",
    "Vary": "Origin",
  };
  if (preflight) {
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
    headers["Access-Control-Max-Age"] = "86400";
  }
  return headers;
}

// JSON response with CORS applied.
export function json(env, origin, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(env, origin),
    },
  });
}

// RFC 5322-ish email sanity check. Deliberately simple — the authoritative
// validation is the mailbox provider accepting the message; this just rejects
// obvious junk before we spend an email.
export function isValidEmail(value) {
  if (typeof value !== "string") return false;
  const v = value.trim();
  if (v.length < 3 || v.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Loose international phone check for the OPTIONAL SMS-consent field.
// Accepts E.164-ish input (leading +, digits, spaces, dashes, parentheses).
// Returns null when empty (field is optional), otherwise the trimmed value or
// false when present but clearly invalid.
export function normalizePhone(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  if (!v) return null;
  // Must start with + and contain only phone-legal characters, 7–16 digits.
  if (!/^\+[0-9 ().-]{6,20}$/.test(v)) return false;
  const digits = v.replace(/[^0-9]/g, "");
  if (digits.length < 7 || digits.length > 15) return false;
  return v;
}
