# Portfolio Website — Addo Michael Obiri

This repository hosts a single-page developer portfolio built with React, Vite, and Tailwind CSS. It was adapted from a design starter and cleaned of Figma-specific tooling so it works as a standard Vite app.

## Development

Run locally with npm (Windows recommended):

```bash
npm install
npm run dev
```

The dev server starts on port `8443` by default and supports hot reload.

## Project structure (key files)

- `src/main.tsx` — app entry, mounts `src/App.tsx`
- `src/App.tsx` — main UI and content (hero, projects, about, process, footer)
- `src/index.css` — global tokens and Tailwind imports
- `src/assets/` — images and static assets
- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite config (minimal, React + Tailwind)

## Where to edit content

- Change copy, case studies, and social links in `src/App.tsx`.
- Update colors/tokens in `src/index.css` (accent, background, foreground).
- Replace the portrait at `src/assets/profilePic/MIKE.jpeg` or swap the import in `src/App.tsx`.

## Notes

- A TypeScript image declaration file (`src/images.d.ts`) is included to allow importing `.jpeg/.png` files.



