# Cadance Website Update Brief — v4 Release

**Date:** 2026-04-29
**Audience:** Website maintenance agent
**Scope:** Update [cadance.music](https://cadance.music) to reflect the Cadance 4.x release (Day Passes, Free tier repositioning, curated playlists, Patron Directory removal, new blog posts, FAQ refresh).

---

## 1. Overview of what changed in Cadance 4

Cadance 4 is the first fully native iOS/iPadOS release. The product model has shifted significantly from v3:

| Area | v3 (previous) | v4 (current) |
|---|---|---|
| **Free tier** | Time/feature-limited "free to try" model | **Class Planning mode** — unlimited browsing, playlist editing, and 15-second track previews. No sustained playback. |
| **Paid access** | Monthly/annual subscriptions only | **Day Passes** (pay-per-teaching-day) + Subscriptions |
| **Onboarding gift** | None | **14 free Day Passes** on signup, non-expiring |
| **Curated content** | None | **33 pre-installed curated playlists** (Cadance Resources) |
| **Patron Directory** | Shown as a benefit | **Removed** |
| **Platform** | Flutter (iOS + Android) | Native iOS/iPadOS + Apple Watch |

The website must be updated to align with this new reality so that prospective users arrive at the App Store with accurate expectations.

---

## 2. Day Passes — the headline change

### 2.1 What a Day Pass is

- **One Day Pass = one full calendar day of unrestricted Patron-level access.**
- Day Passes **never expire** — they sit in the user's account until activated.
- A Day Pass is automatically **activated on the first track played past the 15-second preview threshold** on a given day (or manually from Settings).
- Once activated, the pass covers every feature until midnight local time — no further prompts, no mid-class interruptions.
- Day Passes sync across iPhone and iPad via iCloud.

### 2.2 The 14 free Day Passes for new users

- Every new install receives **14 non-expiring Day Passes** as a welcome gift.
- For a once-a-week teacher, 14 passes last roughly **3.5 months**.
- For a 2-day-per-week teacher, roughly **7 weeks**.
- For a full-time 5-day teacher, roughly **3 weeks**.
- This means new users can fully evaluate Cadance in a real teaching context before spending anything.

### 2.3 Day Pass purchase options (in-app)

| Pack | Passes | Price (USD) | Per-pass |
|---|---|---|---|
| Single | 1 | $1.99 | $1.99 |
| 5-pack | 5 | $7.99 | $1.60 |
| 10-pack | 10 | $14.99 | $1.50 |
| 20-pack | 20 | $24.99 | $1.25 |

The 20-pack is intentionally priced at the same monthly cost as the Patron subscription, but because passes never expire, it represents several months of teaching for infrequent teachers.

### 2.4 The 10-second activation window

When the user plays a track past 15 seconds, a banner appears:

> **"Activating Day Pass in 10s"** — with a "Don't use a pass" button.

Users can cancel activation during the countdown. If they cancel, playback enters "Preview Mode" where every track resets after 15 seconds — no passes are consumed. When the user is ready to teach, they can manually activate from **Settings → Day Passes → Activate a Day Pass Now**.

### 2.5 Website copy angle

Key phrases the website should use (and be consistent about):

- **"Pay only for the days you teach."**
- **"Day Passes never expire."**
- **"14 free passes to get started."**
- **"Activate when you're ready to teach, not when you buy."**
- **"Syncs across your iPhone and iPad via iCloud."**

Avoid the word "credits" or "tokens" — the product language is **Day Pass**.

---

## 3. Free tier = Class Planning mode

### 3.1 What Free users can do without spending anything

The Free tier in v4 is a **first-class product experience** aimed at class preparation and music discovery. It is NOT a crippled trial.

Unlimited, no Day Pass required:

- Browse the full Apple Music library (including DRM/cloud tracks)
- Browse all 33 curated Cadance Resources playlists
- Search and use "More Like This" discovery
- Create, edit, rename, re-order, and import playlists
- Import Apple Music playlists as editable Custom Playlists
- Build playlist collages, organize folders, manage Favorites
- **Preview any track for 15 seconds** (including Apple Music catalog tracks)
- Use the metronome for 15 seconds per start
- Browse from Apple Watch (15-second ceiling applies to playback)

### 3.2 What requires a Day Pass (or subscription)

Anything that crosses the 15-second mark:

- Sustained track playback (past 15 seconds)
- Sustained metronome (past 15 seconds)
- Teaching Lock stays engaged (locks are tied to active playback)

This is the **single gate** for the Day Pass model. There is no double-gating — every feature is visible and functional up to 15 seconds, and a Day Pass unlocks everything beyond that boundary.

### 3.3 Why this matters for marketing

- Teachers can fully evaluate Cadance's tempo control and interface **before paying anything**.
- Studio admins and class planners who don't play music in class may never need to activate a Day Pass.
- Class prep at home or on the bus is genuinely free — you only pay on the days you actually teach.

---

## 4. Curated Cadance Resources playlists

### 4.1 What's new

Cadance 4 ships with **33 pre-installed curated playlists**, delivered via a hosted catalog (no download required — they appear automatically under **Music Playlists → Cadance Resources** in the app).

### 4.2 Playlist categories

**Featured samplers (Cadance music creator community):**

- Caleb Fawcett Sampler
- David Plumpton Sampler
- Lisa Harris Sampler
- Nate Fifield Sampler
- Rob Thaller Sampler
- Søren Bebe Sampler

**Hip-Hop series:**

- Hip-Hop (general)
- Hip-Hop Teens
- Hip-Hop Kids

**Extraordinary Groups** — purpose-built playlists for accessible / adaptive dance programs:

- **Parkinson's series** (4 playlists): Big Band Jazz Era, Classic Rock & Soul, Modern & Pop Anthems, Honky Tonk Stride (Country & Western)
- **Alzheimer's & Dementia series** (4 playlists): The Grande Ole Memories, The Golden Era (1940s–50s), The Silver Screen & Soul (1960s–70s), The Folk & Country Revival
- **Autism Spectrum series** (4 playlists): Junior Explorers, Teen & Adult Groove, Cinematic & World Rhythms, The Bluegrass Social
- **Heart Health series** (4 playlists): The Classical Waltz, The Modern Ballroom, Soft Rock & Easy Listening, The Country Heartbeat
- **MS & Stroke series** (4 playlists): Classic Grooves (70s–80s), Modern Momentum (90s–Present), Global & Electronic Beats, Red Dirt Recovery
- **Proactive Aging series** (4 playlists): Global Groove (Cultural Dance), The Retro Revival, The Modern Momentum (2010s–Present), Silver Spurs

**Apple Music partner playlists** — curated selections featured from Apple Music's own catalog.

### 4.3 Website copy suggestions

- "33 curated playlists, ready to teach."
- "Designed for every community — from kids' hip-hop to Dance for Parkinson's."
- "No setup. Open the app, pick a playlist, start teaching."
- "Content grows over time — hosted updates deliver new playlists automatically."

The Extraordinary Groups collection is a significant competitive differentiator. Consider a dedicated section or blog post highlighting Cadance's commitment to accessible dance programs.

---

## 5. Remove the Patron Directory

### 5.1 What to remove

- Any **Patron Directory** page, section, or link.
- Any mention of "Patron Directory" as a subscription benefit on pricing pages.
- Any promotional copy that positions subscribers as appearing "in the directory."
- Any bio-submission form or CMS schema for directory entries (if present).

### 5.2 What to replace it with

Reframe the Patron tier around the **in-app features** it actually delivers:

- Apple Music catalog **streaming** (non-downloaded tracks playable via MusicKit)
- Future pro workflows (deep links, notes export, set lists — roadmap)
- Highest-tier teaching tool access

Do not introduce any new directory-style feature. The tier is about software capability, not social listing.

### 5.3 Migration note

If the site previously collected directory entries (names, photos, bios), archive the data rather than publish it. Any subscriber who submitted a bio under the v3 model should receive a one-time email letting them know the directory has been retired and their info will not be published.

---

## 6. Subscription tiers — no price changes, minor positioning updates

### 6.1 Current tier pricing (unchanged)

| Tier | Monthly | Annual |
|---|---|---|
| **Spark** | $4.99 | $49.99 |
| **Artist** | $12.99 | $129.99 |
| **Patron** | $24.99 | $249.99 |

### 6.2 Positioning update

Each tier card on the pricing page should now be framed around **teaching frequency**:

- **Free + Day Passes** — "I teach occasionally or plan at home." *(Buy passes as needed; first 14 free.)*
- **Spark** — "I teach regularly with my own music library." *(Ongoing access, local and imported files, Watch companion, metronome, Delay Start.)*
- **Artist** — "I use Apple Music songs downloaded to my device." *(Spark + DRM/MusicKit playback of downloaded tracks.)*
- **Patron** — "I stream the full Apple Music catalog in class." *(Artist + streaming non-downloaded catalog tracks.)*

### 6.3 Remove any "free trial" messaging

v4 no longer uses a 7-day or 14-day free trial paradigm. The 14 free Day Passes replace trials as the "try before you buy" mechanism. Any "Start your free trial" CTAs should be replaced with either:

- **"Download Cadance — 14 free Day Passes included"** (primary)
- **"See pricing"** (secondary)

---

## 7. Blog posts to create

Four new blog posts are recommended for the v4 launch. Each is designed to speak to a specific audience segment the marketing team has identified.

### 7.1 "Introducing Day Passes: Pay only for the days you teach"

**Audience:** Prospective users comparing Cadance to competitors; infrequent teachers.
**Key points:**
- Explain the Day Pass model in plain language.
- Contrast with monthly subscriptions — no lock-in, no wasted months.
- Explain the 14 free passes and that they never expire.
- Include the 10-second activation window so readers know they can cancel.
- Mention iCloud cross-device sync.
- CTA: Download Cadance on the App Store.

**Suggested length:** 500–800 words.

### 7.2 "What's new in Cadance 4"

**Audience:** Existing v3 users; existing subscribers; press/reviewers.
**Key points:**
- Fully native iOS rebuild (faster, more responsive, better battery).
- 33 curated playlists pre-installed.
- Show Artist's Catalog — explore any artist directly from track detail.
- iPad Bluetooth remote with large studio-scale overlay.
- Teaching Lock — prevents accidental screen taps during class.
- Enhanced Apple Watch control.
- Class Planning mode (Free tier) for unlimited browsing/editing.
- Day Passes replace the old free trial.
- **Removed:** Patron Directory (not a real user benefit).

**Suggested length:** 600–1,000 words with screenshots.

### 7.3 "Dance for every community: The Extraordinary Groups collection"

**Audience:** Therapeutic dance teachers, accessibility-focused studios, press/PR, dance medicine practitioners.
**Key points:**
- Cadance 4 ships with 24 playlists across 6 Extraordinary Groups series:
  - Parkinson's Disease
  - Alzheimer's & Dementia
  - Autism Spectrum (Junior / Teen & Adult / Cinematic / Bluegrass)
  - Heart Health
  - MS & Stroke recovery
  - Proactive Aging
- Each series is curated for the specific cognitive, rhythmic, and emotional needs of the audience.
- Playlists are delivered automatically via the hosted catalog — no setup.
- Include a quote or short testimonial from an adaptive-dance teacher if available.

**Suggested length:** 700–1,000 words. Consider pairing with a short video.

### 7.4 "Class Planning mode: how to use Cadance for free"

**Audience:** Prospective users who are skeptical of paid apps; studio admins who plan but don't teach; music researchers.
**Key points:**
- Free tier is a genuine product, not a crippled trial.
- What you can do without paying: browse Apple Music, create playlists, import from Apple Music, organize Favorites, 15-second previews.
- Recommended Class Planning workflow: listen to 15-second previews → favorite → organize into a class playlist → activate a Day Pass only on teaching day.
- Include screenshots of the playlist editor and search.

**Suggested length:** 500–700 words.

---

## 8. FAQ rewrite

The FAQ page should be rewritten to align with the v4 model. Below is a recommended structure with draft answers.

### 8.1 Questions to REMOVE (no longer accurate for v4)

- Anything about free trial duration ("How long is the free trial?")
- Anything about the Patron Directory ("How do I submit my bio?", "When does my bio appear?")
- Anything about Android support ("Is Cadance available on Android?") — v4 is iOS-only, but see 8.3 below for Android handling
- Anything about the old flat feature list per tier — see new tier positioning

### 8.2 Questions to ADD / REWRITE

**Q: How does Cadance pricing work?**
A: Cadance uses a **Day Pass** model combined with optional subscriptions. New users get **14 free Day Passes** on install. One Day Pass = one full day of unrestricted access to every feature. Day Passes never expire. You can also subscribe for unlimited ongoing access: Spark ($4.99/month), Artist ($12.99/month), or Patron ($24.99/month). Pay only for the days you teach.

**Q: What can I do with Cadance for free?**
A: The Free tier (also called **Class Planning mode**) includes unlimited browsing of Apple Music, all 33 curated Cadance Resources playlists, playlist creation and editing, Apple Music playlist import, Favorites, search and discovery, and **15-second previews** of any track. Sustained playback past 15 seconds requires a Day Pass or subscription.

**Q: What happens when I play a track past 15 seconds?**
A: A banner appears telling you a Day Pass will activate in 10 seconds. You can cancel if you're just sampling music, or let it activate to unlock the full teaching day. Once activated, you have unrestricted access until midnight local time — no further prompts, no interruptions during class.

**Q: Do Day Passes expire?**
A: No. Day Passes never expire. They stay in your account until you activate them. Buy a 20-pack once, use them whenever you teach over the next several months.

**Q: Do Day Passes sync between my iPhone and iPad?**
A: Yes, via iCloud. Sign into the same iCloud account on both devices and your balance, activation status, and purchase history stay in sync automatically.

**Q: What's in the curated Cadance Resources playlists?**
A: 33 pre-installed playlists including Hip-Hop Kids and Hip-Hop Teens, six Artist Samplers from the Cadance music creator community, five Apple Music partner playlists, and the Extraordinary Groups collection — purpose-built playlists for Parkinson's, Alzheimer's & Dementia, Autism Spectrum, Heart Health, MS & Stroke recovery, and Proactive Aging programs.

**Q: Which subscription tier is right for me?**
A: If you teach occasionally, Day Passes alone are usually cheapest. If you teach several days a week with your own music library, Spark ($4.99/month) is the best value. If you use Apple Music tracks downloaded to your device, choose Artist ($12.99/month). If you stream from the full Apple Music catalog in class, choose Patron ($24.99/month).

**Q: Can I subscribe AND buy Day Passes?**
A: Yes. A Day Pass temporarily unlocks Patron-tier access regardless of your current subscription. For example, a Spark subscriber can buy a Day Pass to access Apple Music streaming for a one-off workshop without upgrading their subscription.

**Q: What if I run out of Day Passes mid-class?**
A: That won't happen. Once a Day Pass activates, you have unrestricted access until midnight. Cadance will never interrupt a class. The only check happens at the 15-second mark on your first sustained track of the day — well before any class begins.

**Q: Is Cadance available on Android?**
A: Not currently. Cadance 4 is a fully native iOS/iPadOS app, optimized for Apple's audio, MusicKit, and Apple Watch integration. We're focused on delivering the best possible experience on Apple devices. Android support is not on the near-term roadmap.

**Q: What devices does Cadance support?**
A: iPhone and iPad running iOS/iPadOS 17 or later. Apple Watch companion support with enhanced remote control in v4. Works with Bluetooth remotes for presentation-style class control from anywhere in the studio.

**Q: How do I get started?**
A: Download Cadance from the App Store. You'll receive 14 free Day Passes. Explore the curated playlists, import your Apple Music library, and activate your first pass when you're ready to teach a real class.

**Q: What happened to the Patron Directory?**
A: The Patron Directory has been retired in Cadance 4. Our focus is delivering the best in-app teaching tools rather than operating a separate directory listing. Your subscription tier now reflects the software features you access directly in Cadance.

**Q: I was a subscriber before v4 — does anything change for me?**
A: Your subscription continues uninterrupted with no price change. You have unrestricted access as before. The Day Pass system is an additional option for free users; existing subscribers don't need Day Passes.

**Q: How do I support the developer?**
A: Buying Day Passes, subscribing to any tier, or simply leaving a review on the App Store all help enormously. Cadance is built by a small team focused on real teaching workflows.

### 8.3 Existing questions to KEEP (but spot-check for accuracy)

- Any question about specific features (tempo control, Watch, metronome, etc.) — verify feature descriptions still match v4 behavior.
- Any question about playback quality, tempo without pitch shift, or ZTX — unchanged.
- Any question about Apple Music library access — still accurate, but mention the new per-tier routing rules.
- Any contact/support question — verify email addresses and support hours.

---

## 9. Pricing page layout suggestion

Recommended structure for the updated `/pricing` page:

1. **Hero:** "Pay only for the days you teach. 14 free Day Passes included."
2. **Day Pass card** (featured / larger card):
   - "One pass = one teaching day. Never expires."
   - Four pack options with prices.
   - "14 free Day Passes on signup."
3. **Subscription cards** (three side-by-side):
   - Spark / Artist / Patron with teaching-frequency positioning (see 6.2).
4. **Comparison table:** Free (Class Planning) vs Day Pass vs Spark vs Artist vs Patron — features × tiers grid.
5. **FAQ teaser:** 3–4 key Day Pass questions with "See full FAQ" link.
6. **CTA:** "Download on the App Store."

---

## 10. Homepage hero messaging

Update the homepage hero to reflect the Day Pass model:

**Recommended hero copy:**

> **"Music control built for dance teachers."**
> Teach with full-featured tempo control, 33 curated playlists, and tools designed for the studio. Start with 14 free Day Passes — no subscription required.
>
> [Download on the App Store]

**Avoid:**
- "Start your free trial" (no longer accurate)
- "14-day free trial" (replaced by 14 Day Passes, which is a different model)
- Any mention of the Patron Directory

---

## 11. Suggested update order

1. **Immediate / blocking:** Remove Patron Directory references everywhere.
2. **Immediate / blocking:** Update pricing page to reflect Day Passes + new tier positioning.
3. **Immediate / blocking:** Remove "free trial" CTAs from hero and feature pages.
4. **Soon:** Publish the four new blog posts, starting with "Introducing Day Passes."
5. **Soon:** Rewrite FAQ per section 8.
6. **Soon:** Add Cadance Resources curated playlists section or page.
7. **Post-launch:** Add screenshots/video for the Extraordinary Groups blog post.

---

## 12. Reference sources

The definitive in-app product behavior is documented in:

- [`plans/free_tier_usage_limit_brainstorm.md`](../plans/free_tier_usage_limit_brainstorm.md) — Day Pass model design
- [`plans/day_pass_implementation_plan.md`](../plans/day_pass_implementation_plan.md) — implementation details, pricing, cross-device sync
- [`plans/subscription_feature_matrix.md`](../plans/subscription_feature_matrix.md) — tier-by-tier feature breakdown
- [`tool/cadance_resources_admin/catalog_source.json`](../tool/cadance_resources_admin/catalog_source.json) — full list of curated playlists

If any website copy needs to reference specific behaviors (e.g. exact countdown duration, exact pass prices, exact pack sizes), check these source documents first — they are the authoritative product specification.

---

## 13. Tone and voice guidelines

Cadance's primary audience is dance teachers, many of whom are over 50. The website voice should:

- **Be direct.** Avoid marketing jargon and buzzwords.
- **Respect the reader's time.** Short paragraphs, clear headings.
- **Center the teacher's workflow.** "Teach Tuesday and Thursday" rhetoric, not "consumer music streaming" rhetoric.
- **Honor accessibility.** Larger type, high contrast, readable on iPad in a studio environment.
- **Be confident, not desperate.** Cadance is a serious professional tool. Avoid discount-chasing language.

Recurring phrases that should appear consistently across the site:

- "Pay only for the days you teach."
- "Day Passes never expire."
- "Class Planning mode."
- "Extraordinary Groups."
- "Native iOS/iPadOS + Apple Watch."

---

End of brief.
