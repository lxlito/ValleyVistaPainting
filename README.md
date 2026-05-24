# Valley Vista Painting — Marketing Website

A premium, award-style marketing site for **Valley Vista Painting**, a residential
and commercial painting contractor. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

> The Crown Standard in Painting.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run start      # serve production build
npm run typecheck  # TypeScript type-check only
npm run lint       # Next.js lint
```

Node 18.17+ is required (Next 14 baseline).

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom theme (`tailwind.config.ts`)
- **Framer Motion** for scroll-triggered + entrance animations (respects `prefers-reduced-motion`)
- **next/font** self-hosting Poppins (400/500/600/700/800)
- **lucide-react** icons
- Per-page metadata, Open Graph, sitemap, robots, and JSON-LD `LocalBusiness`
  structured data
- No backend required — all content lives in typed objects under `/lib/data/`

---

## Project structure

```
app/
  layout.tsx              # Root layout: fonts, metadata, JSON-LD, Header/Footer
  page.tsx                # Home — composes the 8 section components
  globals.css             # Tailwind base/components/utilities + custom utilities
  services/page.tsx       # Services detail page
  work/page.tsx           # Filterable portfolio + lightbox + before/after
  about/page.tsx          # Story, values, credentials
  contact/page.tsx        # Quote form + contact details
  api/quote/route.ts      # Stubbed POST endpoint (logs to console)
  sitemap.ts              # sitemap.xml
  robots.ts               # robots.txt
  not-found.tsx           # 404

components/
  Header.tsx, Footer.tsx, MobileNav.tsx
  Logo.tsx                # Inline SVG fallback for the V-monogram
  Button.tsx              # Magnetic button (gold/navy/outline/ghost)
  SectionHeading.tsx      # Eyebrow + headline + gold rule
  Reveal.tsx              # Framer Motion scroll-in wrapper
  StatCounter.tsx         # Animated number counters
  ServiceCard.tsx, ProjectCard.tsx
  TestimonialSlider.tsx, ProcessTimeline.tsx
  Lightbox.tsx, BeforeAfter.tsx
  QuoteForm.tsx           # Multi-field form w/ validation + success state
  CrownIcon.tsx           # Small crown accent used throughout
  home/                   # Hero, TrustBar, ServicesOverview, WhyValleyVista,
                          # FeaturedProjects, ProcessSection, TestimonialsSection, CTABand

lib/
  data/
    business.ts           # Name, phone, email, license #, service area
    services.ts           # Six service cards + detail copy
    projects.ts           # Portfolio entries + filter list
    testimonials.ts       # Slider quotes
    stats.ts              # Trust bar counters
    process.ts            # 4-step process timeline
    values.ts             # "Why Valley Vista" pillars
    nav.ts                # Header/Footer nav links
  utils.ts                # cn() classname helper

public/
  README.md               # Notes on where to drop logo/favicon/og/images
```

---

## Editing content

All copy and structured content is in **`lib/data/`** as typed TypeScript objects.
You don't need to touch the components or pages to change wording.

| What to edit                 | File                          |
| ---------------------------- | ----------------------------- |
| Business name, phone, email, license # | `lib/data/business.ts`  |
| Services (cards + bullets)   | `lib/data/services.ts`        |
| Projects (gallery)           | `lib/data/projects.ts`        |
| Testimonials                 | `lib/data/testimonials.ts`    |
| Trust-bar stats              | `lib/data/stats.ts`           |
| Process timeline             | `lib/data/process.ts`         |
| "Why us" value pillars       | `lib/data/values.ts`          |
| Top nav / footer links       | `lib/data/nav.ts`             |

Every placeholder is marked `// TODO: replace`.

---

## Swapping the logo and images

The site ships with an **inline SVG fallback** of the V-monogram (with the gold
crown + brush stroke) in `components/Logo.tsx`. This means the project runs and
looks good out of the box without any image assets.

When you have the real raster logo:

1. Place `logo.png` in `/public/logo.png`.
2. In `components/Logo.tsx`, replace the SVG block with:
   ```tsx
   import Image from "next/image";
   <Image src="/logo.png" alt="Valley Vista Painting" width={56} height={64} priority />
   ```
3. Drop `favicon.ico`, `apple-touch-icon.png`, and `og.png` (1200×630) into `/public/`.

For project photography, replace the Unsplash URLs in `lib/data/projects.ts` and
`lib/data/services.ts` with local paths like `/images/lakeside-exterior.jpg` and
place the files in `public/images/`. Allowed remote hosts are configured in
`next.config.js` (`images.unsplash.com`, `plus.unsplash.com`) — add yours if needed.

---

## Wiring the quote form to email

Today, `POST /api/quote` validates the payload and logs it to the server console.
To send real email, replace the body of `app/api/quote/route.ts`. Two easy
options:

### Resend (recommended)

```bash
npm install resend
```

```ts
// app/api/quote/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();
  await resend.emails.send({
    from: "Valley Vista <quotes@valleyvistapainting.com>",
    to: ["hello@valleyvistapainting.com"],
    subject: `New quote request — ${data.name}`,
    text: JSON.stringify(data, null, 2),
  });
  return Response.json({ ok: true });
}
```

Set `RESEND_API_KEY` in a `.env.local` file.

### Formspree (no backend)

Replace `fetch("/api/quote", …)` in `components/QuoteForm.tsx` with your
Formspree endpoint, e.g. `https://formspree.io/f/YOUR_ID`.

---

## Design system

Tokens live in `tailwind.config.ts` and CSS variables in `app/globals.css`.

| Token        | Value      | Usage                          |
| ------------ | ---------- | ------------------------------ |
| `navy`       | `#1B2A4A`  | Primary brand, dark sections   |
| `cream`      | `#F5EBD8`  | Page background                |
| `cream-light`| `#FBF6EC`  | Card surfaces                  |
| `gold`       | `#C9A24B`  | Accent (links, buttons, rules) |
| `charcoal`   | `#13203B`  | Body text                      |
| `muted`      | `#8A8F9C`  | Placeholders / secondary text  |

Utility classes worth knowing:

- `bg-gold-gradient` — the brushed gold gradient used on buttons and rules.
- `.eyebrow` — small uppercase tracked label (used everywhere above headings).
- `.gold-rule` — the short gold underline below section headings.
- `.gold-text` — text rendered with the gold gradient via background-clip.
- `.link-underline` — animated gold underline on hover.

Motion respects `prefers-reduced-motion` via a global CSS rule plus
Framer Motion's `useReducedMotion()` in interactive components.

---

## Accessibility

- Semantic HTML (`header`, `main`, `footer`, `nav`, `section`, `article`).
- Skip-to-main link on every page.
- Visible focus ring (`:focus-visible`) using the gold token.
- All interactive controls have `aria-label` / `aria-pressed` / `role` where appropriate.
- Reduced-motion friendly animations.
- Color contrast for body and CTA pairings meets WCAG AA on cream and navy backgrounds.

---

## SEO

- Per-page `Metadata` (titles use the template `%s · Valley Vista Painting`).
- Open Graph + Twitter card meta in the root layout.
- `JSON-LD` `LocalBusiness` block injected in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` produce `sitemap.xml` and `robots.txt` at build time.
- Set the real `business.url` in `lib/data/business.ts` so `metadataBase` and the
  sitemap point at the production domain.

---

## License

Proprietary — Valley Vista Painting.
