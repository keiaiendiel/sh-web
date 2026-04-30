// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Startovací Hub Klecany — operated by OSA II, z.s.
// Currently deployed to GitHub Pages at https://keiaiendiel.github.io/sh-web/
// for public preview. When DNS to startovacihub.cz is ready, change `site` to
// 'https://startovacihub.cz' and remove the `base` line below. The withBase()
// helper in src/utils/url.ts auto-adapts; tokens.css needs a one-line find/
// replace from /sh-web/fonts/ to /fonts/.
export default defineConfig({
  site: 'https://keiaiendiel.github.io',
  base: '/sh-web/',
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
