# Stabilization Notes — 2026-08-30

## Verified

- `index.html` uses `script.js` and `i18n-polish.js` as deferred scripts.
- `site-polish-v2.js` was unused and removed.
- Responsive overrides were consolidated in `responsive-fixes.css` while preserving the latest mobile hero and projects behavior.
- Contact form uses a client-side `mailto:` flow; there is no website-side submission endpoint.
- Language preference is stored in `localStorage` under `burionLanguage`.
- The site declares EN/TR/RU UI content and dynamically updates document title and description.
- Privacy and Terms pages exist and reference the brand favicon/app icon.
- `robots.txt` points to the public sitemap.

## Follow-up refactor candidates

1. Split the large translation object out of `script.js` into dedicated content files.
2. Reconcile the static hreflang URLs with the actual client-side language mechanism.
3. Consolidate remaining standalone polish stylesheets only after visual regression checks.
4. Add a lightweight automated smoke-test workflow before introducing larger structural changes.

These are deliberately deferred until the current site behavior is considered stable.
