# Addo Michael Obiri — Software Developer Portfolio

Professional single-page portfolio built with React, Vite, and Tailwind CSS. This repository is a lightweight, production-ready frontend that showcases selected projects, biography, and a developer-focused process narrative.

---

Key points

- Purpose: Present Addo Michael Obiri as a software engineer with concise case studies, technical skills, and contact actions.
- Architecture: Static single-page React application, served by Vite in development and suitable for static hosting in production.
- Opinionated defaults: Tailwind CSS for utilities, React 19, and TypeScript-ready project structure.

---

Tech stack

- React 19
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript (optional — project is configured to accept .ts/.tsx files)

---

Quick start

1. Install dependencies (Windows — npm):

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

---

Project structure (high level)

- `src/App.tsx` — main UI: hero, selected projects, about, process, footer. Primary place to edit copy and project entries.
- `src/index.css` — global tokens and Tailwind import; change color tokens and fonts here.
- `src/assets/` — images and static assets (portrait, case study images).
- `vite.config.ts` — Vite build/dev configuration.
- `package.json` — scripts and dependencies.

---

Editing content

- Case studies, copy, and social links live in `src/App.tsx`.
- Theme tokens (accent/background/foreground) are defined in `src/index.css`.
- Replace the portrait file in `src/assets/profilePic/MIKE.jpeg` or update the import in `src/App.tsx`.

TypeScript and images

If you use TypeScript and import images directly, ensure there is a declaration file such as `src/images.d.ts` (this repo includes one) with declarations for `.jpg`, `.jpeg`, `.png`, `.svg`, etc.

Deployment

- Host as static files on platforms like Vercel, Netlify, or GitHub Pages. Use the generated `dist/` from `npm run build`.
- Example: connect the repository to Vercel and set the build command to `npm run build` and the output directory to `dist`.

Notes and recommendations

- This repository was cleaned of Figma Make tooling; it now behaves as a regular Vite project.
- `package-lock.json` is the canonical lockfile for npm in this workspace.
- If you plan to store large binary files, re-enable Git LFS and add an appropriate `.gitattributes` file.

Contact

Addo Michael Obiri — michaelobiri022@gmail.com

