# Current Context: Cadance Marketing Site

## Current State
The site is a static, multi‑page marketing site hosted on GitHub Pages:
- Teacher‑focused homepage at [index.html](index.html)
- Publishers rights‑holder page at [publishers/index.html](publishers/index.html)
- White Label offering at [white-label.html](white-label.html)
- Safety redirect at [publishers.html](publishers.html) → /publishers/

Design system and layout are implemented in [styles.css](styles.css) with mobile‑first tokens, grids, and components. Progressive enhancement JavaScript now runs via [script.js](script.js), but all pages remain fully usable without JS.

## Recent Changes
- Parallax architecture and interludes (progressive enhancement):
  - Implemented .parallax‑panel with decorative background layers, overlay scrim, and foreground content
  - Motion disabled for prefers‑reduced‑motion; smooth rAF updates via [initParallax()](script.js:1)
- Collapsible content system:
  - Two‑level details/summary folds for “Music we seek” (Publishers) and “Dance styles we support” (Home)
  - Plus‑to‑X indicator: brand‑colored “+” that rotates 45° to an “X” when open; center‑pivot; spacing tuned
  - Consolidated Screenshots sections into collapsible panels on Home and Publishers, including iPad image
- Homepage content updates:
  - Hero image: cadance_hero_30_comp.webp
  - New testimonial section with star ratings
  - Interstitials:
    - First interstitial: cadance_hero_13_comp.webp with heading “Indespensible slow downer” and subhead “Top of the line, pro-quality audio library lets you bend the beats to your needs.”
    - Final interstitial: cadance_hero_15_comp.webp with heading “Everything you need, nothing you don't” and subhead “Oversized controls, simple navigation, easy repeats, brilliant tempo control. And now with much better access to your music. Still has zero fluff.”
  - White Label teaser moved below the final interstitial
  - CTA updated to “Download the free beta” → https://testflight.apple.com/join/SuapC2X5
  - Removed prior “Join the waitlist” section
- Publishers updates:
  - Hero image: cadance_hero_23_comp.webp
  - “Music we seek” now top‑level fold with categorized sub‑folds
- White Label updates:
  - Hero image: cadance_hero_32_comp.webp
  - Interlude uses cadance_hero_12_comp.webp centered
  - Removed static footer note “Contact: info@cadance.music”
- Global navigation and header:
  - Heavier, larger nav text; baseline aligned with logo; reduced header height/whitespace
  - Increased spacing between wordmark and navigation; slight wordmark drop for visual alignment
- Footers (all pages):
  - Simplified to left‑aligned copyright only
- Email unification:
  - All mailto references consolidated to info@cadance.music

## Next Steps
- Per‑page Open Graph images: update OG/Twitter meta to match final hero choices for each page
- Copy polish:
  - Review spelling on “Indespensible slow downer” (suggest “Indispensable slow‑downer”)
  - Tone consistency across interstitials and teaser
- Visual QA:
  - Header/logo baseline across common browsers and 320/768/1280 breakpoints
  - Reduced‑motion behavior verification
  - Parallax smoothness under iOS Safari
- Performance:
  - Confirm lazy loading on non‑hero images; ensure no CLS; validate fetchpriority usage on heroes
- Deployment:
  - Commit/push to main and verify GH Pages + HTTPS on cadance.music

## Technical Status
- Static, GitHub Pages‑compatible, no frameworks or external dependencies
- Progressive enhancement JS now in use via [script.js](script.js) for parallax; site remains usable with JS disabled
- All images sized; non‑hero images lazy‑loaded; no external fonts