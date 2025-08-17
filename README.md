# Cadance Marketing Site — Teachers, White Label, Publishers

A fast, static, mobile‑first site for the Cadance app. Purpose: 
- Sell Cadance to dance teachers (homepage)
- Offer a White Label option for organizations
- Provide a transparent permissions flow for rights holders (Publishers)

- Live domain: https://cadance.music/
- Tech stack: Static HTML/CSS (no frameworks, no build tools), minimal/no JS
- Hosting: GitHub Pages (root publishing), custom domain cadance.music

## Repository Structure

- Site entry: `index.html` (teacher‑focused homepage)
- Secondary pages:
  - `white-label.html` (organizations and institutions)
  - `publishers/index.html` (rights‑holder permissions page)
  - `publishers.html` (stub redirect to `/publishers/`)
  - `tempo-notes.html` (Tempo Notes resources and feature guides)
- Styles: Split CSS:
  - `styles.base.css` — tokens, reset, typography, utilities
  - `styles.layout.css` — header, nav, sections, hero, footer, breakpoints
  - `styles.components.css` — buttons, grids, cards, personas, folds, testimonials, modals, resource cards
  - `styles.parallax.css` — parallax panels, overlay scrim, CTA centering
- JavaScript: `script.js` (progressive enhancement: parallax panels and selectable personas; imported as type="module"; pages remain fully usable without JS)
- Assets: screenshots and brand images in repo root
  - `cadance_Icon.png` (favicon 32×32)
  - `cadance_word_d.svg` (brand wordmark)
  - App images: `iPhoneLockScreen.png`, `iPhoneFav.png`, `iPhoneDetails.png`, `iPhoneDetails2.png`, `iPadVerticalLibrary.png`
- GitHub Pages: `CNAME`, `.nojekyll`

## Local Development

No build step required. Open `index.html` directly in a browser, or serve locally with any static server.

Then visit http://localhost:8080 (or your chosen port).

## Information Architecture

- Home — `index.html`
  - Hero: clear value for teachers, single primary CTA (Join Waitlist)
  - Features grid: speed, class control, reliability, organization, focus, heritage
  - Who it’s for: freelancers, studio staff, company instructors, competition teams, online instructors
  - Screenshots gallery: existing assets with proper alt, lazy loading, async decoding
  - White Label teaser section linking to `white-label.html`
  - Contact strip with mailto CTAs
- White Label — `white-label.html`
  - For studios, companies, training programs, universities, outreach
  - Value pillars: brand consistency, simple rollout, priority coordination, built for teaching
  - Process: email → scope proposal → confirm & coordinate
  - Primary CTA: mailto
- Publishers — `publishers/index.html`
  - Rights‑holder permission flow with scope, process, and transparency
  - Uses existing content, moved from the former homepage
  - CTA: mailto
- Optional redirect safety — `publishers.html`
  - Meta refresh to `/publishers/` to preserve incoming links

## Navigation and Linking

- Header on all pages
  - Home (or logo), Features (anchor on home), White Label, Publishers, Tempo Notes, Contact (mailto)
- Footer on all pages
  - Brand text, © year, links to White Label and Publishers
- Anchor offsets are handled via CSS `scroll-margin-top` for header height

## Styles and Components

- CSS is modular:
  - `styles.base.css`: design tokens, reset, container, typography, links, focus, skip link, section base, reduced motion
  - `styles.layout.css`: header/navigation, section spacing, hero layout, footer, themed backgrounds, breakpoints, header/logo baseline tweaks
  - `styles.components.css`: buttons, features/benefits grids, cards, personas (aria-checked selection visuals), folds (plus‑to‑X), testimonials + modal, resource cards
  - `styles.parallax.css`: parallax panels (CSS variable amplitude), overlay scrim, card centering, CTA centering
- Mobile‑first with media queries at 600px and 1024px
- Focus‑visible styles and reduced‑motion support

## Accessibility and Performance

- Semantic landmarks and skip link to `#main`
- Focus-visible outlines, keyboard navigable header and footer
- Reduced motion respected
- No external fonts or scripts
- Images include width/height to prevent layout shift
- Non‑hero images use `loading="lazy"` and `decoding="async"`
- CSS smooth scrolling and safe‑area padding for mobile

## SEO and Social

Per‑page meta in each HTML head:

- Home (`index.html`)
  - Title: Cadance — The music app for dance teachers
  - Description: Fast access, class‑friendly controls, rock‑solid playback. Keep the class moving.
  - OG/Twitter image: `iPadVerticalLibrary.png`
- Publishers (`publishers/index.html`)
  - Title: Feature your album in Cadance — Product photography and store listings
  - Description: Transparent, controlled, revocable permissions. Proper credit.
  - OG/Twitter image: `iPhoneLockScreen.png`
- White Label (`white-label.html`)
  - Title: Cadance White Label — For studios and organizations
  - Description: Consistent brand experience, simple rollout, and priority coordination.
  - OG/Twitter image: `iPhoneDetails.png`
- Tempo Notes (`tempo-notes.html`)
  - Title: Cadance Tempo Notes — Music resources and feature guides
  - Description: Curated music education resources and Cadance feature notes.
  - OG/Twitter image: `cadance_hero_33.webp`

## CTAs and Contacts

- Join Waitlist (general): `info.rondo@cadance.music`
- White Label (enterprise): `info.rondo@cadance.music`
- Publishers (rights holders): `info.rondo@cadance.music`

All CTAs are mailto links with helpful subjects.

## Deployment on GitHub Pages

Pages is configured for root publishing from the `main` branch with custom domain `cadance.music`.

Checklist:
1) Ensure `CNAME` contains exactly:
   ```
   cadance.music
   ```
2) Ensure `.nojekyll` exists (empty file).
3) In GitHub repo Settings → Pages:
   - Source: Deploy from a branch
   - Branch: main / root
   - Custom domain: cadance.music
   - Enforce HTTPS: enabled

Pushing to `main` updates the live site after GitHub Pages rebuilds.

## Maintenance Workflow

- Update content:
  - Teacher homepage copy in `index.html`
  - White Label copy in `white-label.html`
  - Publishers copy in `publishers/index.html`
- Update styles/tokens: edit `styles.base.css` (tokens), `styles.layout.css` (structure), `styles.components.css` (UI components), `styles.parallax.css` (effects)
- Update images: replace files or update `src`/`width`/`height` attributes in HTML
- JavaScript: referenced for progressive enhancement (parallax, selectable personas). The site remains fully functional without JS.

## QA Checklist before commit

- View at 320px, 768px, 1280px (no horizontal scroll; balanced layout)
- Keyboard navigation: skip link to `#main`; visible focus states
- Motion off check: `@media (prefers-reduced-motion: reduce)` produces no unexpected animations
- Images have `width`/`height`; non‑hero images lazy‑load
- Meta/OG/Twitter present and correct per page; favicons resolve
- No external font/network requests
- All mailto links open with correct address and subject
- Cross‑links: header/footer links work among Home, White Label, and Publishers

## Troubleshooting

- Custom domain not active: verify `CNAME`, DNS A records, and HTTPS enforcement in GitHub Pages Settings
- Stale assets: CDN may cache; perform a hard refresh or bump asset filename if needed
- 404 after deploy: confirm Pages branch/source and that `index.html` is at repo root
- Redirects: `publishers.html` should forward to `/publishers/`

## Changelog

- 2025‑08‑11
  - Replaced single‑page rights‑holder site with teacher‑focused `index.html`
  - Created `publishers/index.html` with migrated permissions content
  - Added `white-label.html` for organizations and institutions
  - Added `publishers.html` meta refresh to `/publishers/`
  - Extended `styles.css` with features/personas/teaser components
  - Removed legacy JS usage (pages no longer reference `script.js`)
- 2025‑08‑17
  - Home
    - Hero CTA label changed to “Try the BarreNotes sequel” (kept TestFlight URL).
    - Duplicated the same CTA under the “Everything you need, nothing you don’t” interlude.
    - Centered hero and bottom interlude headings/subheads and CTA buttons.
  - Personas (Home → “Roles that can benefit from Cadance”)
    - Heavier label weight in both states (default/selected), centered labels, solid rounded border.
    - Default: tinted background, near‑white text.
    - Selected: near‑white background, dark text to match page background, brand red border, large overlapping checkmark.
    - Added CSS token --brand-red and updated .personas-grid styles using aria-checked="true" for selection styling.
  - Dance styles (Home → “Dance styles we support”)
    - Reduced excess vertical spacing after expanded categories.
    - Inset details text; compact spacing while preserving readability.
  - Publishers (“Music we will spotlight”)
    - Converted one‑line bullet lists to paragraphs to match Home style.
    - Applied matching inset and spacing rules for expanded categories.
  - Tempo Notes
    - Added `tempo-notes.html` with link‑only resource cards (open in new tab) and a “Coming soon” placeholder for “My tempo changing demonstration”.
    - Wired hero image to `cadance_hero_33.webp` and added “Tempo Notes” to the header navigation on all pages.

- 2025‑08‑17 — CSS modularization and Personas messaging (phase 2)
  - Split monolithic CSS into modular files loaded in order:
    1) styles.base.css — tokens, reset, typography, utilities
    2) styles.layout.css — header/nav, sections, hero, footer, breakpoints, themed backgrounds
    3) styles.components.css — buttons, grids/cards, personas, folds, testimonials, modals, resource cards
    4) styles.parallax.css — parallax panels, overlay scrim, CTA centering
  - Updated all pages to load the new stylesheets and deprecated styles.css
  - Personas (Home → “Roles that can benefit from Cadance”):
    - Header default “You should consider auditioning Cadance”; dynamic when selections > 0 → “You have X reasons to audition Cadance”
    - Added subheader “This fidget toy provides you with a convenient count”
    - Converted items to singular; appended additional items; primary CTA composes selected options in mail body followed by “One more thing I would love:”
    - Added secondary CTA “Try Cadance”; increased spacing above CTAs; two‑button layout with responsive wrapping
  - Documentation and Memory Bank updated to reflect CSS split and personas enhancements
