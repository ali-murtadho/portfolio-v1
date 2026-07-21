# Portfolio (Next.js) — Minimal scaffold

## Quick start

1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Build + static export: `npm run export` (output goes to `out/`)

## Where to put assets
Copy your CV and images to `public/assets/`:
- `public/assets/profile.jpg`
- `public/assets/CV_Ali-Murtadho_June_2026.pdf`
- project images as `public/assets/project-xxx.png`

## Next steps I can do for you
- Extract text from your `cv/` PDF/DOCX and populate the pages.
- Add a Projects page with screenshots and external links.
- Add SEO, social preview images, and contact form integration.
 
## Deploy

Recommended quick deploys:

- Vercel: push this `site/` folder to a Git repo and import in Vercel.
- GitHub Pages: run `npm run export` then push `out/` to `gh-pages` branch.

Example commands to build and preview the static export:
```bash
cd site
npm install
npm run export
# Serve the out/ folder e.g. with a simple static server
npx serve out
```
