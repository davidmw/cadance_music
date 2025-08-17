# Repetitive Tasks: Cadance Marketing Site

## JavaScript Cleanup Task
**Last performed:** 2025-08-11  
**Status:** Completed  
**Files to modify:**
- `/script.js` — Remove legacy tab functionality and unused code

**Description:**  
Legacy UI code from the original single-page/tabbed interface has been removed. The site is fully functional without JavaScript. `script.js` is retained only as a placeholder for future progressive enhancement and is not referenced by any page.

**Steps (for future audits):**
1. Review `script.js` and confirm only placeholder comments remain.
2. Verify no `<script>` tags are present in:
   - [`index.html`](index.html:1)
   - [`white-label.html`](white-label.html:1)
   - [`publishers/index.html`](publishers/index.html:1)
3. Confirm no console errors on load and navigation.
4. Validate that all interactions (anchors, navigation, focus) work with JS disabled.
5. If new enhancements are introduced, ensure progressive enhancement and no hard dependency on JS.

**Important considerations:**
- The site must continue to work without JavaScript (progressive enhancement).
- Preserve accessibility: keyboard navigation, focus-visible, skip link.
- Test on mobile and desktop after any changes.
- Maintain zero external script requests.

**Expected outcome:**
- Clean, maintainable codebase with no unused JS.
- No functional impact on the static multi-page site.
- Improved performance and reliability.


## Asset Update Task
**Description:** Process for updating brand assets and screenshots.

**Files to modify:**
- Image files in repository root
- Pages using images:
  - [`index.html`](index.html:1)
  - [`white-label.html`](white-label.html:1)
  - [`publishers/index.html`](publishers/index.html:1)

**Steps:**
1. Replace image files with the same filenames to maintain links, or update `src` attributes where needed.
2. If dimensions change, update `width`/`height` attributes in HTML to prevent layout shift.
3. Verify alt text remains accurate and descriptive per image context.
4. Confirm non-hero images use `loading="lazy"` and `decoding="async"`.
5. Test layout stability and performance at 320/768/1280px.
6. Commit changes with a descriptive message (include file list and purpose).

**Important considerations:**
- Always maintain `width`/`height` attributes to prevent layout shift.
- Optimize images before committing.
- Keep filenames descriptive (iPhone..., iPad..., cadance_...).
- Ensure WCAG AA contrast and accessible alt text.

**Expected outcome:**
- Updated visuals with no regressions in performance or layout.
- Consistent rendering across pages and breakpoints.
## UI Polish: CTAs, Personas, Folds, Publishers Spotlight
**Last performed:** 2025-08-17  
**Status:** Completed  
**Files to modify:**
- [`index.html`](index.html:1) — Hero CTA label; duplicate CTA under bottom interlude; personas heading rename
- [`styles.css`](styles.css:1) — CTA centering rules; personas-grid default/selected states; --brand-red token; folds spacing/inset for Home (#dance-styles) and Publishers (#styles); large overlapping checkmark
- [`publishers/index.html`](publishers/index.html:1) — Replace UL/LI within “Music we will spotlight” with paragraphs

**Steps:**
1. Update hero CTA label in [`index.html`](index.html:61) to “Try the BarreNotes sequel”; duplicate same CTA under the “Everything you need, nothing you don’t” interlude, inside the container, above the subhead.
2. Center hero and bottom interlude headings/subheads and CTA buttons by adding rules in [`styles.css`](styles.css:1):
   - `.section-hero .hero-copy { text-align: center; }`
   - `.section-hero .hero-copy .actions { display: flex; justify-content: center; }`
   - `.parallax-panel--interlude .parallax-fg .container { text-align: center; }`
   - `.parallax-panel--interlude .parallax-fg .container .actions { display: flex; justify-content: center; }`
3. Personas visuals in [`styles.css`](styles.css:311):
   - Add token `--brand-red: #E8131A;` under `:root`.
   - Default state `.personas-grid li`: solid border, tinted background (`var(--surface)`), centered label (`display: grid; place-items: center;`), near-white text (`var(--text)`), heavier weight (700).
   - Selected state `.personas-grid li[aria-checked="true"]`: near-white background (`var(--text)`), dark text (`var(--bg)`), 2px solid `var(--brand-red)`, weight 800, large overlapping checkmark via `::after` positioned at top-right and colored `var(--brand-red)`.
4. Folds spacing and inset:
   - Home: In [`styles.css`](styles.css:870), for `#dance-styles .folds details`: remove extra bottom padding and ensure last child has no bottom margin; inset description text with `padding-left: var(--space-2); margin-top: 0.25rem;`.
   - Publishers: Mirror the same rules for `#styles .folds details` and `#styles .folds details > p`.
5. Publishers spotlight bullets to paragraphs in [`publishers/index.html`](publishers/index.html:101):
   - Replace one-line `<ul><li>…</li></ul>` under each category with a single `<p>…</p>` to match Home style.

**Important considerations:**
- Accessibility: preserve semantic headings, focus-visible, and adequate contrast.
- Progressive enhancement: personas selection is keyed off `aria-checked="true"`; optional JS can toggle state later without breaking no-JS.
- Consistency: shared inset/spacing for Home and Publishers; CTA alignment consistent across hero and interlude.

**Expected outcome:**
- CTAs centered at top and bottom of the home page.
- Personas controls: heavier labels, centered text, solid rounded borders; clear default/selected visuals with brand-red checkmark.
- Folds in Home and Publishers: compact spacing, inset descriptions with no trailing whitespace.
- Publishers “Music we will spotlight” uses paragraphs instead of bullets, visually matching Home.