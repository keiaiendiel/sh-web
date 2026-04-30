#!/usr/bin/env node
// Migrate Hub renders into public/images/hub/.
// Source A: ../../12 Startovaci Hub/image/  (raw photos, includes 2D-MAP.jpeg, indoor/, outdoor/)
// Source B: ../vpd-web/public/images/zamer-vpd/  (already-optimized hub-* renders)
// Target:   public/images/hub/{exterior,interior,masterplan.jpg}
//
// All output is JPEG at quality 80, max edge 1600 px (masterplan 1800 px).

import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = path.resolve(import.meta.dirname, '..');
const srcRaw   = path.resolve(repoRoot, '../../12 Startovaci Hub/image');
const srcVpd   = path.resolve(repoRoot, '../vpd-web/public/images/zamer-vpd');
const outRoot  = path.resolve(repoRoot, 'public/images/hub');
const outExt   = path.join(outRoot, 'exterior');
const outInt   = path.join(outRoot, 'interior');

await fs.mkdir(outExt, { recursive: true });
await fs.mkdir(outInt, { recursive: true });

async function optimize(inFile, outFile, { maxEdge = 1600, quality = 80 } = {}) {
  await sharp(inFile)
    .rotate()                                // honour EXIF orientation
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outFile);
  const { size } = await fs.stat(outFile);
  console.log(`  ${path.basename(outFile)}  ${(size / 1024).toFixed(0)} KB`);
}

console.log('Masterplan...');
await optimize(path.join(srcRaw, '2D-MAP.jpeg'), path.join(outRoot, 'masterplan.jpg'), { maxEdge: 1800 });

console.log('Indoor (raw → public/images/hub/interior/...):');
const indoorEntries = await fs.readdir(path.join(srcRaw, 'indoor'));
let i = 1;
for (const f of indoorEntries.sort()) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const slug = `interior-${String(i).padStart(2, '0')}.jpg`;
  await optimize(path.join(srcRaw, 'indoor', f), path.join(outInt, slug));
  i++;
}

console.log('Outdoor (raw → public/images/hub/exterior/...):');
const outdoorEntries = await fs.readdir(path.join(srcRaw, 'outdoor'));
i = 1;
for (const f of outdoorEntries.sort()) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const slug = `exterior-${String(i).padStart(2, '0')}.jpg`;
  await optimize(path.join(srcRaw, 'outdoor', f), path.join(outExt, slug));
  i++;
}

console.log('VPD-web hub-* (sibling repo):');
const vpdNames = [
  ['hub-courtyard-trees.jpg', outExt],
  ['hub-courtyard-night.jpg', outExt],
  ['hub-renovated-building.jpg', outExt],
  ['hub-street-daytime.jpg', outExt],
  ['hub-street-sunset.jpg', outExt],
  ['hub-market-evening.jpg', outInt],
  ['hub-market-daytime.jpg', outInt],
  ['hub-market-people.jpg', outInt],
];
for (const [name, dir] of vpdNames) {
  await optimize(path.join(srcVpd, name), path.join(dir, name));
}

console.log('Done.');
