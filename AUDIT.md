# Burion Studio — Site Audit

## Pass 05 — 2026-09-01

### Findings
- Multiple CSS layers had accumulated over the redesign iterations, creating cascade drift.
- Legacy `brand-statement` and `build-card` rules remain in the base stylesheet even though the active HTML uses the carousel-based What We Build component.
- `selected-work-premium-v2.css` was present but not linked by `index.html`; it has been removed.
- Section spacing had competing values across the base, redesign, Apple pass, and component styles.
- The current typography pairing is coherent: DM Sans for UI/body and Playfair Display for editorial emphasis.

### Changes
- Added `css/site-audit-v1.css` as one final normalization layer for page rhythm.
- Standardized section padding at desktop/mobile breakpoints.
- Prevented legacy build-card rules from affecting the active What We Build carousel.
- Removed the unused Selected Work stylesheet.
- Standardized interaction timing while preserving reduced-motion behavior.
- Kept content, project cards, carousel mechanics, navigation and brand assets intact.

### Deliberately unchanged
- No wholesale CSS rewrite.
- No font swap.
- No image replacement or generated artwork.
- No content rewrite.
