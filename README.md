# Cadance for Publishers — Marketing Site

A fast, static, mobile‑first site for music industry partnerships. Purpose: obtain written permission from rights holders to feature album artwork on Cadance App Store/Play Store product pages and related promotional surfaces.

- Live domain: https://cadance.music/
- Tech stack: Static HTML/CSS/JS (no build tools, no frameworks)
- Hosting: GitHub Pages (root publishing)

## Repository Structure
- Site: [index.html](index.html), [styles.css](styles.css), [script.js](script.js)
- Assets: screenshots and brand images in repo root
- GitHub Pages: [CNAME](CNAME), [.nojekyll](.nojekyll)

## Local Development
No build step is required. Open [index.html](index.html) directly in a browser, or serve locally:

Then visit http://localhost:8080

## Content and Accessibility
- Single-page IA: Hero, Why Partner, Transparency, Process, Showcase, Contact, Footer
- Semantic landmarks and a “Skip to content” link (to #main)
- System font stack; no external fonts
- Fluid type via [css.clamp()](styles.css:1), responsive layout via [css.@media(min-width: 600px)](styles.css:1) and [css.@media(min-width: 1024px)](styles.css:1)
- Reduced motion respected via [css.@media(prefers-reduced-motion: reduce)](styles.css:1)
- All images include width/height to prevent layout shift; non-hero images use loading="lazy" and decoding="async"

Copy lives in [index.html](index.html). Update section text there, keeping heading hierarchy (one h1, then h2).

## SEO, Social, Icons
Head tags in [index.html](index.html) include:
- Viewport and description via [html.meta](index.html:1)
- Open Graph/Twitter tags via [html.meta](index.html:1) referencing cadance_app_showcase.png
- Canonical and favicon via [html.link](index.html:1)
- Theme color via [html.meta](index.html:1)
- JS is loaded with [html.script defer](index.html:1)

Favicons:
- [cadance_Icon.png](cadance_Icon.png) (32×32)
- [cadance_icon_symbol.png](cadance_icon_symbol.png) (optional alternative)

## Deploying on GitHub Pages
Pages is configured for root publishing from the main branch with custom domain cadance.music.

Checklist:
1) Ensure [CNAME](CNAME) contains exactly:
   cadance.music
2) Ensure [.nojekyll](.nojekyll) exists (empty file).
3) In GitHub repo Settings → Pages, set:
   - Source: Deploy from a branch
   - Branch: main / root
   - Custom domain: cadance.music
   - Enforce HTTPS: enabled

Pushing to main will update the live site after GitHub Pages rebuilds.

## DNS for cadance.music (Apex)
Configure A records at your DNS provider:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Notes:
- If your provider supports ALIAS/ANAME, you may point the apex to the GitHub Pages host for automatic IP updates.
- DNS propagation can take time; confirm with your provider and then verify in GitHub Pages Settings that HTTPS is active.

## Maintenance Workflow
- Update content: edit [index.html](index.html) (keep ids and headings intact).
- Update styles/tokens: edit [styles.css](styles.css) (prefer token updates over ad‑hoc colors).
- Update images: replace files or update src in [index.html](index.html). Keep width/height attributes.
- Record decisions: update [memory.json](memory.json) and [MEMORY.md](MEMORY.md) with any durable changes (sections, copy, tokens, assets).

## QA Checklist before commit
- View at 320px, 768px, 1280px (no horizontal scroll, balanced layout)
- Keyboard navigation: skip link (#main) and visible focus states via [css.:focus-visible](styles.css:1)
- Motion off check: [css.@media(prefers-reduced-motion: reduce)](styles.css:1) has no unexpected animations
- Images have width/height; non-hero images lazy-load
- Meta/OG/Twitter present; canonical and favicons resolve
- No external font/network requests

## Troubleshooting
- Custom domain not active: verify [CNAME](CNAME), DNS A records, and HTTPS enforcement in GitHub Pages Settings
- Stale assets: CDN may cache; perform a hard refresh or bump asset filename if needed
- 404 after deploy: confirm Pages branch/source and that [index.html](index.html) is at repo root

## Contact
For artwork permission inquiries: partnerships@cadance.music
