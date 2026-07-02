// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, sitemap and Open Graph tags.
  // Deployed to Cloudflare Pages at this subdomain; change to
  // https://beefbackbetter.com when it becomes the production home.
  site: 'https://beefbackbetter.sovit.xyz',
  integrations: [
    sitemap({
      // Emit xhtml:link hreflang alternates in the sitemap so search
      // engines pair "/" (es) with "/en/".
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
  build: {
    // Emit /es/ and /en/ as folders with index.html for clean URLs.
    format: 'directory',
    // One-page site: inline the page CSS to remove the render-blocking
    // stylesheet request (font files are still separate cacheable assets).
    inlineStylesheets: 'always',
  },
});
