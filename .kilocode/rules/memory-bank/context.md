# Current Context: Cadance Marketing Site

## Current State
The site is a static, multi‑page marketing site hosted on GitHub Pages:
- Teacher‑focused homepage at [index.html](index.html)
- Publishers rights‑holder page at [publishers/index.html](publishers/index.html)
- White Label offering at [white-label.html](white-label.html)
- Tempo Notes at [tempo-notes.html](tempo-notes.html)
- Privacy policy at [privacy.html](privacy.html)
- FAQ at [faq.html](faq.html)
- Safety redirect at [publishers.html](publishers.html) → /publishers/

Design system split across [styles.base.css](styles.base.css), [styles.layout.css](styles.layout.css), [styles.components.css](styles.components.css), and [styles.parallax.css](styles.parallax.css). Progressive enhancement JavaScript runs via [script.js](script.js) for parallax and selectable personas; pages remain fully usable without JS.

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
  - Footer navigation added (Home → Publishers → Tempo Notes → White Label → FAQ → Privacy) with left‑aligned copyright
- Email:
  - Current mailto references use info.rondo@cadance.music; unification to info@cadance.music may be done in a future pass

- 2025-08-17 — UI polish and content updates:
  - Homepage CTAs: changed hero CTA label to “Try the BarreNotes sequel”; duplicated CTA under “Everything you need, nothing you don’t”; centered headings/subheads and CTA buttons on hero and bottom interlude.
  - Personas visuals: heavier label weight in both default and selected states; centered labels; solid rounded borders. Default uses tinted background with near‑white text; selected uses near‑white background, dark text to match page background, brand red border, and a large overlapping checkmark. Introduced CSS token --brand-red (#E8131A).
  - Dance styles (Home): reduced vertical spacing under expanded categories; inset details text.
  - Publishers “Music we will spotlight”: converted one‑line bullets to paragraphs; matched inset and spacing to Home.
  - Heading update: “Designed for every kind of dance teacher” → “Roles that can benefit from Cadance”.
  - Mailto note: current addresses use info.rondo@cadance.music; unify to info@cadance.music in a future pass if required.

### 2025-08-17 — Personas messaging and CSS modularization
- Home personas (“Roles that can benefit from Cadance”):
  - Header default: “You should consider auditioning Cadance”; dynamic when selections > 0: “You have X reasons to audition Cadance” via [initSelectablePersonas()](script.js:98).
  - Subheader added: “This fidget toy provides you with a convenient count”.
  - Items switched to singular; appended additional items; CTA “Tell Cadance what I need” composes email body with selected options plus trailing “One more thing I would love:”; added secondary CTA “Try Cadance”.
  - Increased spacing and two-button layout via [styles.components.css](styles.components.css:1) rule for #personas .actions.
- CSS split:
  - Created [styles.base.css](styles.base.css), [styles.layout.css](styles.layout.css), [styles.components.css](styles.components.css), [styles.parallax.css](styles.parallax.css).
  - Updated pages to load in order: base → layout → components → parallax.
  - Deprecated [styles.css](styles.css); removed from page references (file scheduled for deletion).

### 2025-08-18 — Tempo Notes features guide, footer nav, header stability
- Tempo Notes:
  - Added second interlude hero using cadance_hero_34.webp
  - Introduced “Cadance features guide” section with placeholders: “Importing music”, “How favorites work,” “Mastering repeats”
  - Moved “My tempo changing demonstration” into the features guide and renamed to “Tempo changing demonstration.”
- Footer:
  - Added footer navigation across all pages and created new pages [privacy.html](privacy.html) and [faq.html](faq.html)
  - Reordered footer nav: Home, Publishers, Tempo Notes, White Label, FAQ, Privacy
- Header/nav (mobile):
  - Stabilized header height and prevented vertical/horizontal movement under touch via CSS changes in [styles.layout.css](styles.layout.css)
    (min-width: 0 on .primary-nav; overflow-y: hidden; overscroll-behavior: contain; touch-action: pan-y; tightened spacing; removed extra margin-left on mobile)
- Personas:
  - Inserted “Wedding / first dance tutor” and “Ballroom / social dance” after “Rehearsal director” on [index.html](index.html)
- Email CTA:
  - “Tell Cadance what I need” now uses mailto:info.rondo@cadance.music

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

### 2025-08-20 — Social previews (.webp) and testimonial refinements
- Social previews: Per-page Open Graph/Twitter meta updated to absolute 1200×630 WebP assets on production domain:
  - Home / FAQ / Privacy → https://cadance.music/og_home_1200x630.webp
  - Publishers → https://cadance.music/og_publishers_1200x630.webp
  - White Label → https://cadance.music/og_white_label_1200x630.webp
  - Tempo Notes → https://cadance.music/og_tempo_1200x630.webp
- Targeted social preview assets present at repo root: og_home_1200x630.webp, og_publishers_1200x630.webp, og_white_label_1200x630.webp, og_tempo_1200x630.webp
- Testimonials (Home):
  - Cards: key phrases link to full view (Anneliese: “always there and reliable”; Rosemary: “having a pianist”); removed “Read full testimonial”; author line simplified to name only.
  - Modals: titles set to those phrases and colored teal; stars gold to match cards; footers show name + role/URL stacked, no dash, tight spacing.
- CSS: styles.components.css updated with .testimonial-title color (teal), modal star color (gold), and compact modal footer spacing.
### 2025-08-20 — Social previews (.webp) and testimonial refinements
- Social previews: Per-page Open Graph/Twitter meta updated to absolute 1200×630 WebP assets on production domain:
  - Home / FAQ / Privacy → https://cadance.music/og_home_1200x630.webp
  - Publishers → https://cadance.music/og_publishers_1200x630.webp
  - White Label → https://cadance.music/og_white_label_1200x630.webp
  - Tempo Notes → https://cadance.music/og_tempo_1200x630.webp
- New social assets added at repo root: og_home_1200x630.webp, og_publishers_1200x630.webp, og_white_label_1200x630.webp, og_tempo_1200x630.webp
- Testimonial updates (Home):
  - Cards: key phrases link to full view (Anneliese: “always there and reliable”; Rosemary: “having a pianist”); removed “Read full testimonial”; author line shows name only.
  - Modals: titles set to those phrases and colored teal; stars gold to match cards; footers show “Name” then role/URL on next line, no dash, tightened spacing.
- CSS: styles.components.css updated for modal title teal (.testimonial-title), modal star color gold, and compact modal footer spacing.

### 2025-08-21 — Navigation simplification
- Top navigation simplified to page links only; identical on all pages: Home, Music Makers, Tempo Notes, Contact.
- Brand wordmark now links to the page URL (no in‑page anchors).
- Footer navigation unchanged structurally but "Publishers" label renamed to "Music Makers" across all pages: Home → Music Makers → Tempo Notes → White Label → FAQ → Privacy.
- aria-current applied on the appropriate link per page (Home/Index, Music Makers/Publishers, Tempo Notes, White Label, FAQ, Privacy).

### 2025-08-22 — SEO improvements: Meta keywords and comprehensive favicon implementation
- Meta keywords added to all 6 HTML pages with targeted, audience-specific keywords:
  - Home: Dance teacher focused (dance music app, tempo control, ballet music app, dance studio app, etc.)
  - Publishers: Rights holder focused (music licensing, album artwork permissions, record label partnerships, etc.)
  - White Label: Organization focused (white label dance app, custom branded music app, dance studio branding, etc.)
  - Tempo Notes: Resource focused (dance music resources, tempo control tutorial, dance app features, etc.)
  - Privacy: Privacy focused (privacy policy, data protection, no tracking, GDPR compliance, etc.)
  - FAQ: Support focused (Cadance FAQ, dance app questions, dance teacher support, etc.)
- Comprehensive favicon implementation:
  - Created multiple favicon sizes from cadance_Icon.png: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png (180x180), android-chrome-192x192.png, android-chrome-512x512.png
  - Added site.webmanifest for PWA support with theme colors and display settings
  - Updated all HTML pages with complete favicon link sets including proper relative paths for subdirectory pages
  - Replaced single cadance_Icon.png references with comprehensive multi-size favicon links
- SEO verification: Confirmed favicon display in browser tabs and meta keywords presence across all pages