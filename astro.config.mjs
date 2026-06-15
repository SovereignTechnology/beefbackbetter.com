// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, sitemap and Open Graph tags.
  // Deployed to Cloudflare Pages at this subdomain; change to
  // https://beefbackbetter.com when it becomes the production home.
  site: 'https://beefbackbetter.sovit.xyz',
  integrations: [sitemap()],
  build: {
    // Emit /es/ and /en/ as folders with index.html for clean URLs.
    format: 'directory',
  },
});
