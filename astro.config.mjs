// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Startovací Hub Klecany — operated by OSA II, z.s. at startovacihub.cz.
// Standalone domain deploy: no base path, so withBase() helper is a no-op.
export default defineConfig({
  site: 'https://startovacihub.cz',
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
