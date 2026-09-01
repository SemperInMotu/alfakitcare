import { existsSync, renameSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'out');

const pairs = [
  ['modules.html.html', 'modules.html'],
  ['ru/modules.html.html', 'ru/modules.html'],
  ['be/modules.html.html', 'be/modules.html'],
];

for (const [from, to] of pairs) {
  const src = join(out, from);
  const dest = join(out, to);
  if (!existsSync(src)) {
    console.warn('skip (missing):', from);
    continue;
  }
  if (existsSync(dest)) unlinkSync(dest);
  renameSync(src, dest);
  const txt = join(out, from.replace('.html', '.txt'));
  if (existsSync(txt)) unlinkSync(txt);
  console.log('fixed:', to);
}
