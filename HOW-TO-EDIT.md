# How to edit this portfolio

## Which file does what

| File | What lives there |
| --- | --- |
| `src/data/portfolio.ts` | Your words: name, email, projects, skills, education, activities. **Start here for most changes.** |
| `src/routes/index.tsx` | The home page |
| `src/routes/about.tsx` | The About page |
| `src/routes/skills.tsx` | The Skills page |
| `src/routes/education.tsx` | The Education page |
| `src/routes/projects.tsx` | The Projects page |
| `src/routes/activities.tsx` | The Activities page |
| `src/routes/__root.tsx` | The top menu bar and the footer (shared by every page) |
| `src/styles.css` | Colours, fonts and spacing |
| `src/components/PageHero.tsx` | The big faded word behind each page title |

## Run it on your own computer

1. Install Node.js (LTS) from https://nodejs.org
2. Open a terminal in this folder
3. Install the packages: `npm install`
4. Start the preview: `npm run dev`
5. Open the web address it prints (usually http://localhost:5173)

Edit a file, save it, and the browser updates by itself.

## Common changes

- **Change your email** — `src/data/portfolio.ts`, the `EMAIL` line at the top.
- **Add or remove a project** — `src/data/portfolio.ts`, the `projects` list. Copy an
  existing block, paste it below, and change the words inside the quotation marks.
- **Change the colours** — `src/styles.css`, the `:root` block near the top.
- **Change the fonts** — the `<link>` tag in `src/routes/__root.tsx`, plus the font
  names in `src/styles.css`.
- **Rewrite a sentence** — open the page's own file (see the table above) and edit the
  text between the quotation marks or angle brackets.

Keep quotation marks, commas and curly braces exactly where they are — those hold the
page together.

## Deploying it

When it looks right, you can host it free on Netlify, Vercel or GitHub Pages: build with
`npm run build` and publish the `dist` folder (or let the host run the build for you).
