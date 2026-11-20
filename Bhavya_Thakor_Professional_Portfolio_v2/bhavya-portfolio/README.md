# Bhavya Thakor — Portfolio

A responsive React + TypeScript portfolio built with Vite.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
Import this project or upload the project folder. Vercel should detect Vite automatically.

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Editing the portfolio
Most content is in `src/data/portfolio.ts`. Update the profile, projects, research, publications, recognition and interests there.

Replace `public/images/portrait-placeholder.svg` with a real portrait named `portrait.jpg`, then set `portrait` in `src/data/portfolio.ts` to `/images/portrait.jpg`.

Only add verified achievements, dates, roles and contact details. Certificate entries currently indicate that certificates were received; add issuer names or credential links only after checking the original certificates.
