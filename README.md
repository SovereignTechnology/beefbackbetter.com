# beefbackbetter.com

Marketing site for **Beef Back Better** 🇸🇻 — Salvadoran grass-fed beef.

A bilingual (Spanish 🇪🇸 / English 🇬🇧) single-page site built with
[Astro](https://astro.build). It tells people where to find the stand at the
local farmers markets and how to order large quantities (quarter cow and up)
for delivery.

- **Spanish (default):** `/`
- **English:** `/en/`

## Editing content

**You usually only need to edit one file:**
[`src/i18n/content.ts`](./src/i18n/content.ts).

It holds all the text, the three farmers markets, the large-order tiers,
prices/weights, payment methods, FAQ entries and contact details — with
Spanish and English side by side. Search it for `TODO` to find everything
that still needs your real information.

### Photos

Source photos live in [`src/assets/`](./src/assets/) and are imported by the
components, so Astro optimizes them at build time (responsive AVIF/WebP):

| File | Used for |
| --- | --- |
| `src/assets/hero-cow.webp` | Hero background (`src/components/Hero.astro`) |
| `src/assets/cattle-grazing.webp` | About section (`src/components/About.astro`) |
| `src/assets/logo.png` | Header & footer logo |
| `public/images/og.jpg` | Social share preview (1200×630, served as-is) |

To swap a photo, replace the file (keep the name) or update the import in the
component.

## Develop locally

```bash
npm install      # first time only
npm run dev      # start a local server at http://localhost:4321
```

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the built site locally |

Requires Node 18+ (see [`.nvmrc`](./.nvmrc) — Node 22).

## Project structure

```
src/
  i18n/content.ts      ← all editable text & data (start here)
  assets/              ← source photos & logo (optimized at build time)
  layouts/Layout.astro ← <head>, meta tags, fonts, structured data
  components/          ← Header, Hero, Markets, Stores, LargeOrders, About,
                          Faq, Contact, WhatsAppFloat, Footer
  pages/index.astro    ← Spanish "/"
  pages/en/index.astro ← English "/en/"
  styles/global.css    ← design tokens & base styles
public/                ← favicon, robots.txt, CNAME, og.jpg
```

## Deployment (Cloudflare Pages)

The site deploys to [Cloudflare Pages](https://pages.cloudflare.com)
(configured in [`wrangler.toml`](./wrangler.toml)) and is served at
<https://beefbackbetter.sovit.xyz>:

```bash
npm run deploy   # astro build && wrangler pages deploy
```

When the site moves to its production home at `beefbackbetter.com`, update
`site` in [`astro.config.mjs`](./astro.config.mjs) and the `Sitemap:` line in
[`public/robots.txt`](./public/robots.txt).

### Legacy: GitHub Pages

A GitHub Actions workflow
([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)) can still
deploy to GitHub Pages, but its automatic trigger is disabled in favor of
Cloudflare Pages — it only runs manually via *workflow_dispatch*. See the
comments in the workflow file to re-enable it.

## License

[MIT](./LICENSE).
