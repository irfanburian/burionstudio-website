# CSS cleanup — 2026-08-31

Removed legacy/empty compatibility layers that are no longer needed after the homepage redesign:
- `css/footer-mobile-polish.css` was an empty placeholder; footer styles already live in `footer-polish.css`.
- `css/responsive-fixes.css` duplicated global/mobile sizing safeguards now covered by `stability.css` and the redesign responsive rules.
- Removed unused custom properties from `css/redesign-v1.css`.

The remaining CSS layers are intentionally retained because they still contain active component-specific styling or production safeguards.
