#!/usr/bin/env node
// One-shot: optimize newly-imported Hub vizualizace in-place to match the
// migrate-hub-images.mjs standard (jpeg q=80 mozjpeg, max-edge 1600).
//
// Targets: public/images/hub/{aerial,exterior,interior}/* — only files that
// currently exceed `sizeLimit` are re-encoded. Idempotent.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = path.resolve(import.meta.dirname, '..');
const targets = [
  'public/images/hub/aerial',
  'public/images/hub/exterior',
  'public/images/hub/interior',
  'public/images/hub/hero',
];
const sizeLimit = 600 * 1024; // 600 KB — anything bigger gets re-encoded.
const maxEdge = 1600;
const quality = 80;

let total = 0;
let saved = 0;

for (const dir of targets) {
  const abs = path.join(repoRoot, dir);
  const entries = await fs.readdir(abs).catch(() => []);
  for (const f of entries) {
    if (!/\.(jpe?g|png)$/i.test(f)) continue;
    const inFile = path.join(abs, f);
    const stat = await fs.stat(inFile);
    if (stat.size <= sizeLimit) continue;
    // Always re-encode to JPEG (mozjpeg). If the input was .png, we rename
    // the file to .jpg so extension matches content; caller must update refs.
    const isPng = /\.png$/i.test(f);
    const outName = isPng ? f.replace(/\.png$/i, '.jpg') : f;
    const outFile = path.join(abs, outName);
    const tmp = outFile + '.tmp';
    await sharp(inFile)
      .rotate()
      .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(tmp);
    const newStat = await fs.stat(tmp);
    if (isPng) await fs.unlink(inFile);
    await fs.rename(tmp, outFile);
    const before = (stat.size / 1024).toFixed(0);
    const after = (newStat.size / 1024).toFixed(0);
    const renamed = isPng ? `  →  ${outName}` : '';
    console.log(`  ${dir}/${f}  ${before} KB → ${after} KB${renamed}`);
    total += stat.size;
    saved += stat.size - newStat.size;
  }
}

console.log(`\nTotal scanned: ${(total / 1024 / 1024).toFixed(1)} MB`);
console.log(`Saved:         ${(saved / 1024 / 1024).toFixed(1)} MB`);
