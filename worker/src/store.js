// Persistence for captured art-note requests (Cloudflare KV).
//
// Records are stored for later transactional purposes (e.g. the future SMS
// delivery of the remaining two notes) and self-delete after RETENTION_DAYS.

// 90-day retention window for captured requests.
const RETENTION_SECONDS = 90 * 24 * 60 * 60;

export function makeRequestId() {
  // crypto.randomUUID is available in the Workers runtime.
  return crypto.randomUUID();
}

// Persist one captured request. Returns the record written.
export async function storeRequest(env, record) {
  const stored = {
    ...record,
    storedAt: new Date().toISOString(),
  };
  await env.ART_REQUESTS.put(`request:${record.id}`, JSON.stringify(stored), {
    expirationTtl: RETENTION_SECONDS,
  });
  return stored;
}
