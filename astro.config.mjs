// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, sitemap and Open Graph tags.
  // If you deploy somewhere other than the custom domain, change this.
  site: 'https://beefbackbetter.com',
  integrations: [sitemap()],
  build: {
    // Emit /es/ and /en/ as folders with index.html for clean URLs.
    format: 'directory',
  },
});
