// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Startovací Hub Klecany — sub-site of OSA at klecany.osa2.cz.
// Subdomain deploy: no base path, so withBase() helper is a no-op.
export default defineConfig({
  site: 'https://klecany.osa2.cz',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
