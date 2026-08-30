# Website Architecture

## Current stack

The site is intentionally kept as a lightweight static website:

- HTML pages
- CSS stylesheets
- Vanilla JavaScript
- Local brand assets
- Google Fonts

## Current runtime entry points

- `index.html` — primary single-page site
- `privacy.html` — privacy page
- `terms.html` — terms page
- `script.js` — primary interaction, language and form behavior
- `i18n-polish.js` — small translation fallback for the contact submit button

## Refactoring rule

Do not introduce a framework or restructure the application solely for cleanliness. Any future refactor must preserve the existing visual and behavioral output unless an intentional design change is being made.
