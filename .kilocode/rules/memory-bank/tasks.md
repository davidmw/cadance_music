# Repetitive Tasks: Cadance for Publishers

## JavaScript Cleanup Task
**Last identified:** 2025-08-09
**Status:** Pending
**Files to modify:**
- `/script.js` - Remove legacy tab functionality and unused code

**Description:**
The current script.js contains extensive legacy code from the original tab-based interface that is no longer used in the single-page design. This creates unnecessary bundle size and potential confusion.

**Steps:**
1. Analyze script.js to identify which functions are actually used
2. Remove all tab-related functionality (showTab, tab event handlers)
3. Remove FAQ functionality (not present in current design)
4. Remove unused contact methods and download agreement functionality
5. Keep only essential functionality like smooth scrolling and accessibility features
6. Test that site still functions correctly without the removed code
7. Consider removing script.js entirely if no essential functionality remains

**Important considerations:**
- Site must continue to work without JavaScript (progressive enhancement)
- Verify that accessibility features are preserved
- Test on mobile and desktop after cleanup
- Ensure no console errors are introduced

**Expected outcome:**
- Reduced bundle size
- Cleaner, more maintainable codebase
- No functional impact on current single-page design
- Improved performance

## Asset Update Task
**Description:** Process for updating brand assets and screenshots

**Files to modify:**
- Image files in repository root
- `/index.html` - Update src attributes and dimensions if needed

**Steps:**
1. Replace image files with same filenames to maintain links
2. Update width/height attributes in HTML if dimensions change
3. Verify alt text is still appropriate
4. Test loading performance and layout stability
5. Commit changes with descriptive message

**Important considerations:**
- Always maintain width/height attributes to prevent layout shift
- Optimize images before committing
- Test on various screen sizes after updates