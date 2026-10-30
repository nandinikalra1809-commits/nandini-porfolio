 Webpage audit

Review of the personal profile page in this folder (`index.html`, `style.css`, `script.js`).

## What the page includes

- A document title in the browser tab
- One main heading (`h1`) in the hero area
- An **About** section with placeholder biography and contact details
- A **Skills** section written as an unordered list
- A **Projects** section with three linked project items
- External styles in `style.css` (no `style=""` attributes in the HTML)
- Client-side behavior in `script.js`: current year, mobile nav, theme toggle, and active-section highlighting

## Accessibility

- Skip link is present for keyboard users
- Navigation is labeled and can be opened with a button on small screens
- Theme toggle exposes `aria-pressed` and updates its label
- Headings follow a single `h1`, then `h2` section titles
- Color contrast is stronger in light mode; dark mode should still be checked after you replace placeholder copy

## Placeholders to replace

Search the project for the word `PLACEHOLDER`. At minimum, replace:

- Your name (title, heading, header brand, footer)
- Short introduction and About paragraphs
- Email address
- Skill names
- Project titles, descriptions, and URLs

Until those are replaced, the page is structurally complete but not ready to publish as a real profile.

## Visual and layout notes

- The layout is a single-column profile with card-style sections
- Header wraps on smaller screens; the nav collapses behind a Menu button below 720px
- Typography uses Fraunces for headings and Source Sans 3 for body text, loaded from Google Fonts
- Dark mode is stored in `localStorage` under `profile-theme`

## JavaScript review

- Script is loaded at the end of `body` and wrapped in an IIFE
- Missing elements are guarded with null checks
- Scroll listener is passive
- No third-party JavaScript libraries

## Suggested next edits

1. Replace every `PLACEHOLDER` with real details
2. Point project links at live demos or GitHub repositories
3. Add a resume or LinkedIn link if you want a fuller contact row
4. Recheck contrast after any color changes
5. Open `index.html` in a browser and test: nav links, Menu on a narrow viewport, and Dark mode
