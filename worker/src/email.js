// Build + send the fulfilment email with the two email-channel .cadnote
// files attached, via the Cloudflare Email Service `send_email` binding.
//
// Message size: the two files total ~1.5 MB raw → ~2.0 MB base64, well under
// the 5 MiB message cap. The two larger notes are reserved for the SMS channel.

// Workers-safe base64 encode for binary content (btoa is byte-oriented and
// unavailable for ArrayBuffer directly).
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const CHUNK = 0x8000; // avoid argument-list limits on large files
  let binary = "";
  for (let i = 0; i < bytes.length; i += CHUNK) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
  }
  return btoa(binary);
}

// Fetch a public .cadnote URL and return a base64 attachment object.
async function fetchAttachment(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Attachment fetch failed (${res.status}) for ${url}`);
  const filename = decodeURIComponent(url.split("/").pop());
  return {
    content: arrayBufferToBase64(await res.arrayBuffer()),
    filename,
    type: "application/octet-stream",
    disposition: "attachment",
  };
}

function buildHtml(name) {
  const safeName = escapeHtml(name);
  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#16181d;max-width:36rem;margin:0 auto;line-height:1.55">
    <h1 style="font-size:1.35rem;line-height:1.3">Your Cadance dance-art notes</h1>
    <p>Hi ${safeName},</p>
    <p>Thanks for requesting the hand-drawn Cadance notes. Two are attached as
    <code>.cadnote</code> files:</p>
    <ul>
      <li><strong>Jazz Dancer with links</strong></li>
      <li><strong>Prodigal Son with links</strong></li>
    </ul>
    <p><strong>To add them to your Teacher Notebook:</strong> open this email on your
    iPhone or iPad, tap an attached <code>.cadnote</code> file, then choose
    <strong>Open in Cadance</strong>. The note imports into your notebook with its
    themed music links intact.</p>
    <p>Don't have Cadance yet?
      <a href="https://apps.apple.com/us/app/cadance/id6748429968">Download it free on the App Store</a>.</p>
    <p>The remaining two notes (Ballet 5th and Ballet pair) are delivered separately.</p>
    <p style="color:#5b6472;font-size:0.9rem">— Cadance Music<br>
    Art by <a href="https://www.a-z-a-r.com">Rinat Zaripov</a>.</p>
  </div>`;
}

function buildText(name) {
  return [
    `Hi ${name},`,
    "",
    "Thanks for requesting the hand-drawn Cadance notes. Two are attached as .cadnote files:",
    "- Jazz Dancer with links",
    "- Prodigal Son with links",
    "",
    "To add them to your Teacher Notebook: open this email on your iPhone or iPad,",
    "tap an attached .cadnote file, then choose Open in Cadance.",
    "",
    "Don't have Cadance yet? Download it free: https://apps.apple.com/us/app/cadance/id6748429968",
    "",
    "The remaining two notes (Ballet 5th and Ballet pair) are delivered separately.",
    "",
    "— Cadance Music",
    "Art by Rinat Zaripov: https://www.a-z-a-r.com",
  ].join("\n");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Send the fulfilment email. Returns the provider message id.
export async function sendArtEmail(env, { name, email }) {
  const [att1, att2] = await Promise.all([
    fetchAttachment(env.ART_EMAIL_URL_1),
    fetchAttachment(env.ART_EMAIL_URL_2),
  ]);

  const result = await env.EMAIL.send({
    to: { email, name },
    from: env.EMAIL_FROM,
    subject: "Your Cadance dance-art notes",
    html: buildHtml(name),
    text: buildText(name),
    attachments: [att1, att2],
  });
  return result.messageId;
}
