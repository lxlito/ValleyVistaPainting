# /public — static assets

Drop the following files in this directory:

- `logo.png` — the Valley Vista V-monogram (used in the header/footer). The site
  currently renders an inline SVG fallback in `components/Logo.tsx` so it works out of
  the box; swap to `<Image src="/logo.png" />` once you've placed the file.
- `favicon.ico` — generated from the same V-monogram.
- `apple-touch-icon.png` — 180×180 PNG of the logo on a navy background.
- `og.png` — 1200×630 social share image (logo + tagline on cream).
- `images/` — project photography. Currently the site references royalty-free
  Unsplash URLs as placeholders (configured in `next.config.js`). Replace the URLs
  in `lib/data/projects.ts` and `lib/data/services.ts` with local paths like
  `/images/your-project.jpg` when you're ready.
