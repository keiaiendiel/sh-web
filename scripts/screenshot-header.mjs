/* Pixel-precise header snapshot tool.
   Usage: node scripts/screenshot-header.mjs <label> [path]
   Outputs:
     _tmp/header-<label>-desktop.png   (1200px viewport)
     _tmp/header-<label>-mobile.png    (375px viewport)
     _tmp/header-<label>-desktop.json  ({ brand: {x,y,w,h}, glyph: {x,y,w,h}, wordmark: {x,y,w,h} })
     _tmp/header-<label>-mobile.json   (same)
*/
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const label = process.argv[2] || 'snap';
const urlPath = process.argv[3] || '/sh-web/faq/';
const base = `http://localhost:4323${urlPath}`;
const outDir = path.resolve('_tmp');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const devices = [
  { name: 'desktop', viewport: { width: 1200, height: 240 }, dpr: 2 },
  { name: 'mobile',  viewport: { width: 375,  height: 240 }, dpr: 3 },
];

for (const d of devices) {
  const ctx = await browser.newContext({
    viewport: d.viewport,
    deviceScaleFactor: d.dpr,
  });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  /* Force overlay header into is-stuck (light) state so before/after are
     deterministic regardless of IntersectionObserver timing. */
  await page.evaluate(() => {
    const h = document.querySelector('.hub-header--overlay');
    if (h) h.classList.add('is-stuck');
  });
  await page.waitForTimeout(200);

  const brand = await page.locator('.hub-header__brand').first();
  await brand.waitFor({ state: 'visible' });

  // crop header bar only
  const bar = page.locator('.hub-header__bar').first();
  const barBox = await bar.boundingBox();
  const padding = 8;
  const clip = {
    x: Math.max(0, barBox.x - padding),
    y: Math.max(0, barBox.y - padding),
    width: barBox.width + padding * 2,
    height: barBox.height + padding * 2,
  };

  const shot = path.join(outDir, `header-${label}-${d.name}.png`);
  await page.screenshot({ path: shot, clip });

  // collect geometry of brand + children
  const geometry = await page.evaluate(() => {
    const round = (v) => Math.round(v * 100) / 100;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: round(r.x), y: round(r.y), w: round(r.width), h: round(r.height), bottom: round(r.bottom), top: round(r.top) };
    };
    const brand = document.querySelector('.hub-header__brand');
    const glyph = document.querySelector('.hub-header__glyph');
    const glyphSvg = glyph?.querySelector('svg');
    const wordmark = document.querySelector('.hub-header__wordmark');
    const logo = document.querySelector('.hub-header__logo');
    const logoSvg = logo?.querySelector('svg');
    return {
      brand: rect(brand),
      glyph: rect(glyph),
      glyphSvg: rect(glyphSvg),
      wordmark: rect(wordmark),
      logo: rect(logo),
      logoSvg: rect(logoSvg),
    };
  });

  await writeFile(
    path.join(outDir, `header-${label}-${d.name}.json`),
    JSON.stringify(geometry, null, 2)
  );

  await ctx.close();
}

await browser.close();
console.log(`✓ snapshots written to ${outDir} with label "${label}"`);
