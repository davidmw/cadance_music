# v3 release: website copy + IA updates (proposal for discussion)

## Messaging rules for v3 (site-wide)

**Core positioning (from App Store description):**

- Cadance is built by a dancer, for dance teachers.
- Cadance is available on iPhone, iPad, and Apple Watch.
- Cadance is **free to download**.
- Cadance does **not** include music and does **not** sell music (bring your own).
- Cadance can play music from:
  - Apple Music Library
  - Local files
  - Apple Music subscription (tier-gated)

**Subscription + tiers (must replace the current honor-system model):**

- Free (BarreNotes-compatible)
- Spark (adds: local file import/play, metronome, delay start, Apple Watch support)
- Artist (adds: DRM-protected music + playback of downloaded Apple Music tracks)
- Patron (adds: direct streaming of Apple Music albums/playlists without downloading)

**Feature baseline (Free / BarreNotes-compatible):**

- Tempo control
- Repeats (up to 4)
- Duck / temporary mute
- Class timers / clock

**Offer language:**

- Remove “1-month free trial” and “free month” language.
- Replace with: “first two months discounted” + “monthly or annual”.

**Pricing display:**

- Keep explicit USD prices on the website for Spark / Artist / Patron.
- Add a Free tier card showing $0.
- Keep the existing “local pricing may vary” note so the App Store remains the source of truth for currency.

## Global fixes to apply everywhere

### 1) Remove interview CTA + artwork

- Remove the entire interview teaser block on the homepage hero: [`index.html`](../index.html:161).
- Remove any dependency on the social preview asset if it becomes unused (optional cleanup): [`og_juno_interview_1200x630.webp`](../og_juno_interview_1200x630.webp).

### 2) Eliminate “honor system” and “all tiers include all features” claims

These statements will be actively misleading under v3 gating:

- “Same Cadance features in every tier” on pricing hero: [`pricing/index.html`](../pricing/index.html:95).
- “All features included” + “tiers are an honor system”: [`pricing/index.html`](../pricing/index.html:143).
- CTAs linking to the old anchor: [`index.html`](../index.html:453), [`reddit/index.html`](../reddit/index.html:278), [`barrenotes/index.html`](../barrenotes/index.html:294).

Proposal: replace with a **feature-by-tier breakdown** and a neutral CTA label like “Compare tiers”.

### 3) Replace “no streaming required” with Apple Music-compatible wording

Current site copy explicitly says streaming subscriptions aren’t needed, which conflicts with “Artist/Patron” Apple Music subscription support:

- Homepage hero note: [`index.html`](../index.html:178).
- Reddit landing hero note: [`reddit/index.html`](../reddit/index.html:82).
- BarreNotes landing hero note: [`barrenotes/index.html`](../barrenotes/index.html:82).
- Reddit FAQ: [`reddit/index.html`](../reddit/index.html:297).

Proposal: globally shift to:

- “Works with your owned music and Apple Music. Some Apple Music features require a paid tier and an Apple Music subscription.”

### 4) Replace “free month / free trial” language with “free to download + discounted first two months”

Occurrences to remove/replace:

- Pricing trial note and FAQ: [`pricing/index.html`](../pricing/index.html:140), [`pricing/index.html`](../pricing/index.html:172).
- Homepage hero note: [`index.html`](../index.html:177).
- Reddit/BarreNotes hero CTA + note: [`reddit/index.html`](../reddit/index.html:79), [`barrenotes/index.html`](../barrenotes/index.html:79).
- Blog pricing paragraph: [`blog/why-cadance-is-a-subscription/index.html`](../blog/why-cadance-is-a-subscription/index.html:119).

Also update the Patron Directory wording about “trial period”: [`patrons/index.html`](../patrons/index.html:99).

## Page-by-page proposed changes

### Home: [`index.html`](../index.html:1)

**Hero headline/subhead**

- Replace current hero headline with App Store opening:
  - H1: “Finally, a Music Player That Understands Dance Teachers.”
  - Subhead: compress the “Tired of endlessly scrolling…” framing into 1–2 lines.

**Remove interview promo**

- Delete the teaser card block: [`index.html`](../index.html:161).

**Update the hero footnotes**

- Replace “Enjoy a full month…” and “no streaming…” with:
  - “Free to download. Start with the Free (BarreNotes-compatible) tier.”
  - “Paid plans unlock advanced teaching tools. First two months discounted.”
  - “Bring your own music: Apple Music Library, local files, and Apple Music subscription (tier dependent).”

**Update the interlude CTA**

- Replace the “honor system” CTA link: [`index.html`](../index.html:453).
  - New CTA label: “Compare tiers & features →”
  - New anchor target: something like `pricing/#tiers` or `pricing/#compare`.

**SEO/structured data**

- Homepage meta description and JSON-LD currently emphasize “requiring music ownership” and should be rewritten to match v3: [`index.html`](../index.html:7), [`index.html`](../index.html:69).

### Pricing: [`pricing/index.html`](../pricing/index.html:1)

**Primary objective:** make pricing page the canonical truth for tiers + gating.

Proposed structure:

1) Hero: “Pricing & plans” + one-line statement that *tiers unlock features* (not honor system): [`pricing/index.html`](../pricing/index.html:95).
2) Four tier cards: Free + Spark + Artist + Patron.
3) “What each plan unlocks” section: feature-to-tier mapping.
4) Offer note: “All plans monthly or annual; first two months discounted; local pricing varies.”
5) FAQ updated to reflect free tier + Apple Music tiers.

**Tier card copy (match App Store)**

- Free:
  - “Fully BarreNotes compatible”
  - Include: HQ tempo control + dance-teacher controls for owned music from device library.
- Spark:
  - Adds: local file import/play, metronome, delay start, Apple Watch.
- Artist:
  - Adds: DRM-protected music + playback of downloaded Apple Music tracks.
- Patron:
  - Adds: direct streaming of Apple Music albums/playlists without downloading.

**Replace the honor-system highlight box**

- Remove: [`pricing/index.html`](../pricing/index.html:143).
- Replace with:
  - “Bring your own music” disclaimer.
  - “Why tiers exist” explanation (gating is about advanced pro tools + Apple Music capabilities).

### Reddit landing: [`reddit/index.html`](../reddit/index.html:1)

- Replace CTA “Start Your Free Month Now”: [`reddit/index.html`](../reddit/index.html:79).
  - New: “Download Cadance free” or “Get Cadance free”.
- Replace the two hero notes (trial + no streaming): [`reddit/index.html`](../reddit/index.html:81).
- Replace “honor system” secondary CTA: [`reddit/index.html`](../reddit/index.html:278).
- Rewrite FAQ question:
  - Replace “Do I need Spotify / Apple Music?” answer: [`reddit/index.html`](../reddit/index.html:297).
  - New intent: “Apple Music is optional. Cadance works great with owned music. Artist/Patron tiers add Apple Music subscription features.”

### BarreNotes landing: [`barrenotes/index.html`](../barrenotes/index.html:1)

- Replace CTA “Start Your Free Month Now”: [`barrenotes/index.html`](../barrenotes/index.html:79).
- Replace hero notes (trial + no streaming): [`barrenotes/index.html`](../barrenotes/index.html:81).
- Replace “honor system” secondary CTA: [`barrenotes/index.html`](../barrenotes/index.html:294).
- Consider adding one short line under “What’s new vs BarreNotes?” clarifying:
  - “Free tier is BarreNotes-compatible; paid tiers unlock modern tools and Apple Music support.”

### FAQ: [`faq.html`](../faq.html:1)

Key updates:

- “How can I try Cadance?” should mention free tier (not “cancel during the first month”): [`faq.html`](../faq.html:108).
- “What professional features…” currently says “require music ownership”; rewrite to reflect:
  - Free tier = BarreNotes-compatible
  - Advanced features = subscription tiers
  - Apple Music subscription support = tier-gated
  - “Bring your own music; Cadance does not sell music”
  - Source: [`faq.html`](../faq.html:113).

Add/replace questions (minimal set):

- “Is Cadance free?”
- “What does each tier unlock?”
- “Do I need an Apple Music subscription?”

### Subscription explainer blog post: [`blog/why-cadance-is-a-subscription/index.html`](../blog/why-cadance-is-a-subscription/index.html:1)

This post currently contradicts feature gating:

- “Our subscriptions aren’t about locking features behind tiers”: [`blog/why-cadance-is-a-subscription/index.html`](../blog/why-cadance-is-a-subscription/index.html:110).

Proposal for the replacement framing:

- Keep the sustainability argument.
- Add a transparent “Why tiers exist” section:
  - “Free keeps BarreNotes compatibility available to everyone.”
  - “Paid tiers fund pro-grade tools and ongoing platform maintenance.”
  - “Apple Music capabilities differ by tier because the underlying technical and licensing constraints differ.”

Also update free-trial wording: [`blog/why-cadance-is-a-subscription/index.html`](../blog/why-cadance-is-a-subscription/index.html:119).

### Partners: [`partners.html`](../partners.html:1)

This line conflicts with Apple Music support:

- “streaming platforms cannot provide”: [`partners.html`](../partners.html:203).

Proposal: revise to focus on **Cadance-specific teaching workflows** (tempo control, repeats, delay start, etc.), not “streaming can’t”.

### Musicians page: [`publishers/index.html`](../publishers/index.html:1)

The page is heavily “music ownership” framed. With Apple Music support, we should adjust claims to stay credible:

- Keep the core idea: Cadance teachers are high-intent music users.
- Update any absolute statements like “streaming simply cannot provide” to more nuanced wording (Cadance’s pro teaching tools + reliability still create demand for music).
- Consider adding a short note: “Cadance supports Apple Music at higher tiers; many teachers still keep owned libraries for offline reliability and studio workflows.”

Start review around: [`publishers/index.html`](../publishers/index.html:146).

### Partnership program: [`partnership.html`](../partnership.html:1)

This page mentions “Spotify, Apple Music” as platforms for an artist audience, which is fine, but we should:

- Ensure the partnership narrative doesn’t rely on “streaming is useless” absolutes.
- Keep the value prop focused on education market + exposure + optional co-marketing.

Start review around: [`partnership.html`](../partnership.html:145).

### Patron Directory: [`patrons/index.html`](../patrons/index.html:1)

- Update “completed their trial period” to language that matches v3 offer model: [`patrons/index.html`](../patrons/index.html:99).
  - Example: “after your Patron subscription is active” or “after your discounted intro period (if applicable)”.

### How To / Tempo Notes / Music Training: confirm no conflicts

These pages currently don’t reference pricing/trial/streaming; likely no copy changes needed, but keep an eye on any “owned music only” messaging if added later:

- [`how-to.html`](../how-to.html:1)
- [`tempo-notes.html`](../tempo-notes.html:1)
- [`music-training.html`](../music-training.html:1)

## Proposed pricing-feature breakdown (for the pricing page)

If you want a compact table-like section (HTML-friendly), I suggest grouping by capability:

**Music sources**

- Apple Music Library (owned music on device): Free+
- Local file import/play: Spark+
- Downloaded Apple Music tracks (DRM): Artist+
- Streaming Apple Music albums/playlists: Patron+

**Teaching tools**

- Tempo control: Free+
- Repeats (up to 4): Free+
- Delay Start: Spark+
- Metronome: Spark+
- Duck: Free+
- Class timers / clock: Free+
- Apple Watch support: Spark+

## Discussion decisions (pick before implementation)

1) Should the website include the exact USD prices currently shown, or should it be price-agnostic and defer entirely to the App Store?
   - Current prices are hard-coded in tier cards: [`pricing/index.html`](../pricing/index.html:104).

2) Confirm whether Repeat and Duck are available in Free (BarreNotes-compatible) or start at Spark.
   - Decision: Repeats + Duck + Timers are Free.

3) Confirm whether Apple Watch support is Spark+ only (per App Store text) or should be mentioned as “available” more broadly.
