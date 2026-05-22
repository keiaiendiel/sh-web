/* OpenGraph share card generator (1200×630).

   Brand text card per `public/og/default.png` redesign. Renders via Playwright
   Chromium against the running dev server (so Atyp Special WOFF2 resolves
   from /sh-web/fonts/). No outline-to-path tricks — live font, real glyphs.

   Usage:
     pnpm dev      # (separate terminal, port 4323)
     node scripts/generate-og.mjs

   Output:
     public/og/default.png   (1200×630 raster, ~50-80 KB)
*/
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEV = 'http://localhost:4323';
const FONT_MEDIUM = `${DEV}/sh-web/fonts/AtypText-Special-Medium.woff2`;
const FONT_BOLD   = `${DEV}/sh-web/fonts/AtypText-Special-Bold.woff2`;

/* Brand palette mirrors src/styles/tokens.css (--hue: 240). */
const PALETTE = {
  cream:    '#f7f4ef',
  plumDeep: 'hsl(240 41% 13%)',
  plum:     'hsl(240 39% 27%)',
  rose:     'hsl(284 30% 70%)',
};

/* Hand-tuned ribbon bezier for 1200×630 OG canvas. Sweeps from upper-right
   inward, then loops out to the bottom-right corner, never crossing the
   left text zone (x < 720). Plum stroke, 56px (heavy), round caps. */
const RIBBON_PATH = 'M 1180 80 C 920 140, 800 320, 980 460 C 1120 570, 1280 540, 1240 720';

const html = `<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Atyp Special';
    src: url('${FONT_MEDIUM}') format('woff2');
    font-weight: 400 500;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Atyp Special';
    src: url('${FONT_BOLD}') format('woff2');
    font-weight: 600 700;
    font-style: normal;
    font-display: block;
  }
  html, body { margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: ${PALETTE.cream};
    font-family: 'Atyp Special', system-ui, sans-serif;
    color: ${PALETTE.plum};
    position: relative;
    overflow: hidden;
    /* very subtle warm vignette so the cream doesn't feel flat */
    background-image:
      radial-gradient(120% 80% at 0% 0%, hsl(240 39% 27% / 0.04), transparent 60%),
      radial-gradient(80% 60% at 100% 100%, hsl(284 30% 70% / 0.12), transparent 70%);
  }

  /* Ribbon under content. Type zone (left 60% of canvas) stays clean. */
  .ribbon {
    position: absolute; inset: 0;
    pointer-events: none;
  }
  .ribbon path {
    fill: none;
    stroke: ${PALETTE.plum};
    stroke-width: 56;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.85;
  }

  /* BrandLogo at top-left. Height tuned so the wordmark optical density
     matches a poster, not a header chip. */
  .brand {
    position: absolute;
    top: 72px; left: 80px;
    display: block;
    height: 64px;
    width: auto;
    color: ${PALETTE.plumDeep};
  }

  /* Type stack, anchored bottom-left for editorial poster feel. */
  .stack {
    position: absolute;
    left: 80px; right: 80px;
    bottom: 92px;
    max-width: 760px;
  }

  .eyebrow {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${PALETTE.plumDeep};
    opacity: 0.55;
    margin: 0 0 18px 0;
  }

  .headline {
    font-size: 88px;
    font-weight: 700;
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: ${PALETTE.plumDeep};
    margin: 0 0 18px 0;
  }

  .hook {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: ${PALETTE.plum};
    margin: 0;
  }
  .hook .sep { color: ${PALETTE.rose}; margin: 0 10px; font-weight: 700; }

  /* Bottom hairline for editorial closure, plum at 12% alpha. */
  .rule {
    position: absolute;
    left: 80px; right: 80px; bottom: 60px;
    height: 1px;
    background: hsl(240 39% 27% / 0.18);
  }

  .meta {
    position: absolute;
    left: 80px; right: 80px; bottom: 28px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: ${PALETTE.plumDeep};
    opacity: 0.6;
  }
</style>
</head>
<body>

  <svg class="ribbon" viewBox="0 0 1200 630" preserveAspectRatio="none" aria-hidden="true">
    <path d="${RIBBON_PATH}" />
  </svg>

  <!-- BrandLogo: same SVG paths as src/components/BrandLogo.astro -->
  <svg class="brand" viewBox="0 0 2048 280" fill="currentColor" aria-hidden="true">
    <path d="M206.507,233.228l0,-178.794l-93.366,0l-102.127,178.794l195.493,0Z"/>
    <path d="M303.622,178.568l-36.295,7.407c4.506,30.14 30.788,49.807 68.836,49.807c37.547,0 67.084,-22.732 67.084,-53.383c0,-68.708 -94.868,-46.742 -94.868,-79.691c0,-11.238 10.513,-19.412 26.032,-19.412c17.272,0 28.285,10.472 31.039,25.797l36.295,-7.407c-4.255,-29.118 -29.036,-49.807 -66.082,-49.807c-36.045,0 -64.33,22.732 -64.33,52.872c0,66.154 94.868,44.188 94.868,78.669c0,11.494 -11.514,20.944 -29.036,20.944c-19.524,0 -30.788,-9.961 -33.542,-25.797Z"/>
    <path d="M414.505,131.827l26.032,0l0,50.318c0,34.226 16.521,51.084 52.065,51.084l15.269,0l0,-30.395l-15.269,0c-12.516,0 -18.273,-5.875 -18.273,-18.646l0,-52.361l33.542,0l0,-30.395l-33.542,0l0,-49.551l-33.792,10.728l0,38.824l-26.032,0l0,30.395Z"/>
    <path d="M584.969,98.877c-33.041,0 -54.318,17.879 -57.822,40.612l33.542,7.663c2.253,-12.516 11.014,-19.923 24.531,-19.923c12.015,0 21.026,6.13 21.026,15.836c0,6.896 -4.005,9.961 -12.015,10.472l-21.026,2.043c-24.03,2.554 -49.812,12.26 -49.812,42.4c0,23.243 18.022,37.802 42.052,37.802c17.272,0 31.79,-7.663 40.801,-18.646l0,16.091l33.792,0l0,-83.267c0,-34.737 -23.78,-51.084 -55.069,-51.084Zm-27.785,96.293c0,-7.663 6.007,-12.771 15.77,-14.048l21.777,-2.554c5.507,-0.766 9.262,-1.533 11.514,-3.32l0,2.81c0,15.836 -14.768,30.395 -32.541,30.395c-10.263,0 -16.521,-5.364 -16.521,-13.282Z"/>
    <path d="M699.611,118.545l0,-17.113l-33.792,0l0,131.797l33.792,0l0,-73.816c0,-22.732 21.026,-35.503 48.31,-25.797l0,-32.694c-19.024,-6.13 -37.296,2.299 -48.31,17.624Z"/>
    <path d="M756.432,131.827l26.032,0l0,50.318c0,34.226 16.521,51.084 52.065,51.084l15.269,0l0,-30.395l-15.269,0c-12.516,0 -18.273,-5.875 -18.273,-18.646l0,-52.361l33.542,0l0,-30.395l-33.542,0l0,-49.551l-33.792,10.728l0,38.824l-26.032,0l0,30.395Z"/>
    <path d="M861.553,167.33c0,38.824 29.787,68.453 69.086,68.453c39.299,0 69.086,-29.629 69.086,-68.453c0,-38.824 -29.787,-68.453 -69.086,-68.453c-39.299,0 -69.086,29.629 -69.086,68.453Zm35.044,0c0,-20.944 14.768,-36.78 34.042,-36.78c19.524,0 34.042,15.836 34.042,36.78c0,21.2 -14.518,37.036 -34.042,37.036c-19.274,0 -34.042,-15.836 -34.042,-37.036Z"/>
    <path d="M1105.343,101.432l-34.793,97.06l-34.793,-97.06l-36.546,0l51.064,131.797l38.047,0l51.064,-131.797l-34.042,0Z"/>
    <path d="M1202.458,98.877c-33.041,0 -54.318,17.879 -57.822,40.612l33.542,7.663c2.253,-12.516 11.014,-19.923 24.531,-19.923c12.015,0 21.026,6.13 21.026,15.836c0,6.896 -4.005,9.961 -12.015,10.472l-21.026,2.043c-24.03,2.554 -49.812,12.26 -49.812,42.4c0,23.243 18.022,37.802 42.052,37.802c17.272,0 31.79,-7.663 40.801,-18.646l0,16.091l33.792,0l0,-83.267c0,-34.737 -23.78,-51.084 -55.069,-51.084Zm-27.785,96.293c0,-7.663 6.007,-12.771 15.77,-14.048l21.777,-2.554c5.507,-0.766 9.262,-1.533 11.514,-3.32l0,2.81c0,15.836 -14.768,30.395 -32.541,30.395c-10.263,0 -16.521,-5.364 -16.521,-13.282Z"/>
    <path d="M1278.303,167.33c0,38.824 29.787,68.453 69.086,68.453c27.534,0 51.064,-15.07 62.077,-41.889l-31.039,-10.983c-5.757,13.537 -17.272,21.455 -31.039,21.455c-19.274,0 -34.042,-15.836 -34.042,-37.036c0,-20.944 14.768,-36.78 34.042,-36.78c13.767,0 25.281,7.663 31.039,21.2l31.039,-10.983c-11.014,-26.819 -34.543,-41.889 -62.077,-41.889c-39.299,0 -69.086,29.629 -69.086,68.453Z"/>
    <path d="M1424.485,85.34l33.542,0l30.288,-40.867l-37.547,0l-26.283,40.867Zm5.006,147.888l33.792,0l0,-131.797l-33.792,0l0,131.797Z"/>
    <path d="M1565.41,233.228l35.795,0l0,-73.306l81.101,0l0,73.306l35.795,0l0,-178.794l-35.795,0l0,73.306l-81.101,0l0,-73.306l-35.795,0l0,178.794Z"/>
    <path d="M1743.882,101.432l0,76.115c0,34.737 25.281,58.236 60.575,58.236c35.044,0 60.575,-23.499 60.575,-58.236l0,-76.115l-33.792,0l0,76.115c0,16.091 -11.264,26.819 -26.783,26.819c-15.77,0 -26.783,-10.728 -26.783,-26.819l0,-76.115l-33.792,0Z"/>
    <path d="M1965.909,98.877c-17.021,0 -31.039,6.896 -41.051,18.135l0,-72.795l-33.792,0l0,189.011l33.792,0l0,-15.581c10.012,11.238 24.03,18.135 41.051,18.135c35.294,0 62.077,-29.629 62.077,-68.453c0,-38.824 -26.783,-68.453 -62.077,-68.453Zm-41.051,68.453c0,-20.944 14.768,-36.78 34.042,-36.78c19.524,0 34.042,15.836 34.042,36.78c0,21.2 -14.518,37.036 -34.042,37.036c-19.274,0 -34.042,-15.836 -34.042,-37.036Z"/>
  </svg>

  <div class="stack">
    <h1 class="headline">Bydlení a coworking,<br/>jak má vypadat</h1>
    <p class="hook">Od kapsle po byt 5+kk <span class="sep">&middot;</span> Od 3 000 Kč měsíčně</p>
  </div>

  <div class="rule"></div>
  <div class="meta">
    <span>startovacihub.cz</span>
    <span>Klecany &middot; 15 minut od metra Kobylisy</span>
  </div>

</body>
</html>`;

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1, // 1:1 — OG raster is rendered at exact 1200×630
});
const page = await ctx.newPage();

/* Navigate to dev server first so cross-origin font fetches are same-origin
   when setContent reuses the document. */
await page.goto(`${DEV}/sh-web/`, { waitUntil: 'domcontentloaded' });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await document.fonts.ready;
  // Force load both weights so first paint includes them.
  await document.fonts.load('500 30px "Atyp Special"');
  await document.fonts.load('700 88px "Atyp Special"');
});
await page.waitForTimeout(200);

const outPath = path.resolve('public/og/default.png');
await page.screenshot({
  path: outPath,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
  type: 'png',
});

await browser.close();
console.log(`✓ OG card written to ${outPath}`);
