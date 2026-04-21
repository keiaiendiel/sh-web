// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: @astrojs/react was scaffolded but removed here to keep dist clean.
// Add back with `pnpm astro add react` if we need a client island that
// truly requires React components (e.g., a complex form).
// Deploy target for now: GitHub Pages at https://keiaiendiel.github.io/osa-web/
// When DNS cuts over to osa2.cz, flip `site` back to 'https://osa2.cz' and
// remove the `base` line below. Canonical + sitemap URLs track `site`.
export default defineConfig({
  site: 'https://keiaiendiel.github.io',
  base: '/osa-web/',
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