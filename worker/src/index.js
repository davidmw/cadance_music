// Entry point: routing + CORS for the request-art form backend.
//
// Routes:
//   OPTIONS /request-art   → CORS preflight
//   POST    /request-art   → handle the form submission
//   GET     /health        → liveness probe
//
// Everything is progressive and fail-safe: the marketing page works without
// JS, so this endpoint only ever sees genuine, user-initiated submissions.

import { handleRequestArt } from "./requestArt.js";
import { handleAdmin } from "./admin.js";
import { corsHeaders, json } from "./util.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    // CORS preflight.
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(env, origin, true),
      });
    }

    if (url.pathname === "/health") {
      return json(env, origin, { ok: true, service: "cadance-art-request" });
    }

    // Token-protected read-only admin views.
    if (url.pathname.startsWith("/admin/")) {
      return handleAdmin(request, env, ctx);
    }

    if (url.pathname === "/request-art") {
      if (request.method !== "POST") {
        return json(env, origin, { ok: false, error: "Method not allowed" }, 405);
      }
      return handleRequestArt(request, env, ctx);
    }

    return json(env, origin, { ok: false, error: "Not found" }, 404);
  },
};
