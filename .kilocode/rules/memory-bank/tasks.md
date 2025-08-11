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