# Cadance "Request dance-art notes" Worker

Standalone backend for the static marketing site's [`/forms/request-art/`](../forms/request-art/index.html) page. It captures the form submission for later transactional purposes and emails the two email-channel `.cadnote` files to the requester.

This Worker is **separate** from the Cadance iOS app's `cadance-init` Worker (which lives in the iOS app repo). This one serves the public website only.

## What it does

`POST /request-art`:

1. Parse the JSON body from the static form.
2. Honeypot check (hidden `company` field) — silently drop bots.
3. Validate full name + email; validate the optional phone (E.164-ish) only when present.
4. Verify the Cloudflare **Turnstile** token (server-side).
5. Store the request in the `ART_REQUESTS` KV namespace (90-day TTL).
6. Email the two email-channel notes (`Jazz Dancer`, `Prodigal Son`) as attachments via the **Cloudflare Email Service** `send_email` binding, using `ctx.waitUntil` so the user gets a fast response.

The other two notes (`Ballet 5th`, `Ballet pair`) are reserved for the future **SMS** channel; the captured phone + consent support that later.

## Endpoints

| Method | Path           | Description                        |
| ------ | -------------- | ---------------------------------- |
| POST   | `/request-art` | Handle a form submission.          |
| GET    | `/health`      | Liveness probe.                    |
| OPTIONS| `/request-art` | CORS preflight.                    |

CORS is restricted to `ALLOWED_ORIGIN` (the live site) for browser calls.

## Setup (one-time)

```bash
cd worker
npm install
```

### Create the KV namespace

```bash
npx wrangler kv namespace create ART_REQUESTS
npx wrangler kv namespace create ART_REQUESTS --preview
```

Paste the returned `id` / `preview_id` into [`wrangler.toml`](wrangler.toml).

### Enable Cloudflare Email Service + onboard the sender domain

The `[[send_email]]` binding requires Email Service to be enabled on the
account and the sender domain (`cadance.music`) onboarded, otherwise
`env.EMAIL` is null at runtime. Do this in the Cloudflare dashboard
(**Email → Email Service**), and add the DNS records it generates at the
domain's DNS provider (Hover) for authentication/deliverability.

### Set secrets

```bash
# Turnstile secret key (server-side verification). The matching *site key*
# is public and goes in the page markup.
npx wrangler secret put TURNSTILE_SECRET
```

### Deploy

```bash
npx wrangler deploy
```

The Worker publishes to `https://cadance-art-request.<subdomain>.workers.dev`.

### Reading captured requests (KV)

`wrangler kv key` commands operate on **local** storage by default and return
empty even when the deployed Worker has written data. Always pass `--remote`:

```bash
# List captured requests (production namespace)
npx wrangler kv key list --namespace-id=<ART_REQUESTS_id> --remote

# Read one record
npx wrangler kv key get "request:<uuid>" --namespace-id=<ART_REQUESTS_id> --remote
```

Each record carries `name`, `email`, `phone`, `smsConsent`, `emailStatus`
(`pending`/`sent`/`failed`), `emailMessageId` or `emailError`, and `submittedAt`.

### Email sending

Requires the sender domain onboarded to Cloudflare Email Service. If the
dashboard's "Onboard Domain" dropdown is empty (common right after a zone goes
active), enable it via the CLI instead:

```bash
npx wrangler email sending enable cadance.music
npx wrangler email sending dns get cadance.music   # verify cf-bounce MX/SPF/DKIM
```


## Local dev

```bash
npx wrangler dev
```

Note: the local simulator logs emails instead of sending them, and binary
attachments (`.cadnote`) can't be serialized locally — test the attachment
path against the deployed Worker.

## Testing

```bash
curl -X POST https://<worker-url>/request-art \
  -H "Content-Type: application/json" \
  -H "Origin: https://cadance.music" \
  -d '{
    "full-name": "Test User",
    "email": "you@example.com",
    "phone": "+61 412 345 678",
    "sms-consent": true,
    "cf-turnstile-response": "<token>"
  }'
```
