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
prices/weights, payment methods and contact details — with Spanish and English
side by side. Search it for `TODO` to find everything that still needs your
real information.

### Photos

Drop image files in `public/images/` and reference them by path:

| File | Used for | Suggested size |
| --- | --- | --- |
| `hero.jpg` | Hero background (uncomment the `background-image` lines in `src/components/Hero.astro`) | 2000×1200, < 400 KB |
| `og.jpg` | Social share preview — then set `ogImage` in `src/layouts/Layout.astro` | 1200×630 |

Until real photos are added, the hero uses a warm gradient, so nothing looks
broken.

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
  i18n/content.ts     ← all editable text & data (start here)
  layouts/Layout.astro ← <head>, meta tags, fonts
  components/          ← Header, Hero, Markets, LargeOrders, About, Contact, Footer
  pages/index.astro    ← Spanish "/"
  pages/en/index.astro ← English "/en/"
  styles/global.css    ← design tokens & base styles
public/                ← favicon, robots.txt, CNAME, images
```

## Deployment (GitHub Pages)

This repo ships a GitHub Actions workflow
([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)) that builds
and deploys to GitHub Pages on every push to `main`.

To turn it on:

1. **Repo → Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Point DNS for `beefbackbetter.com` at GitHub Pages:
   - Apex `A` records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - (Optional) `www` `CNAME` → `sovITxyz.github.io`
3. In **Settings → Pages → Custom domain**, enter `beefbackbetter.com`
   (the [`public/CNAME`](./public/CNAME) file already sets this) and enable
   **Enforce HTTPS**.

> Not using a custom domain yet? The site assumes it lives at the domain root.
> If you instead serve it at `https://sovITxyz.github.io/beefbackbetter.com/`,
> set `base: '/beefbackbetter.com'` in `astro.config.mjs` and remove
> `public/CNAME`.

## License

[MIT](./LICENSE).
