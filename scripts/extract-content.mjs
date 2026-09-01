/**
 * Extracts <main> inner HTML from legacy Vite HTML pages into src/content/*.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const pages = [
  { file: 'index.html', key: 'en/home', locale: 'en' },
  { file: 'modules.html', key: 'en/modules', locale: 'en' },
  { file: 'ru/index.html', key: 'ru/home', locale: 'ru' },
  { file: 'ru/modules.html', key: 'ru/modules', locale: 'ru' },
  { file: 'be/index.html', key: 'be/home', locale: 'be' },
  { file: 'be/modules.html', key: 'be/modules', locale: 'be' },
];

function extractMain(html) {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) throw new Error('No <main> found');
  return match[1].trim();
}

function extractJsonLd(html) {
  const match = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i,
  );
  return match ? match[1].trim() : null;
}

function fixPaths(html, locale) {
  let out = html;
  const prefix = locale === 'en' ? '' : `/${locale}`;

  out = out
    .replace(/\bhref="index\.html#/g, `href="${prefix || '/'}#`)
    .replace(/\bhref="index\.html"/g, `href="${prefix || '/'}"`)
    .replace(/\bhref="\.\.\/index\.html#/g, `href="${prefix || '/'}#`)
    .replace(/\bhref="\.\.\/index\.html"/g, `href="${prefix || '/'}"`)
    .replace(/\bhref="modules\.html"/g, `href="${prefix}/modules.html"`)
    .replace(/\bhref="\.\.\/modules\.html"/g, 'href="/modules.html"')
    .replace(/\bhref="ru\/modules\.html"/g, 'href="/ru/modules.html"')
    .replace(/\bhref="be\/modules\.html"/g, 'href="/be/modules.html"')
    .replace(/\bhref="ru\/"/g, 'href="/ru/"')
    .replace(/\bhref="be\/"/g, 'href="/be/"')
    .replace(/\bhref="assets\//g, 'href="/assets/')
    .replace(/\bsrc="assets\//g, 'src="/assets/')
    .replace(/action="https:\/\/formsubmit\.co\/info@alfakit\.by"/g, (m) => m);

  if (locale === 'en') {
    out = out.replace(
      /name="_next" value="https:\/\/alfakit\.by\/\?sent=1#contact"/,
      'name="_next" value="https://alfakit.by/?sent=1#contact"',
    );
  } else {
    out = out.replace(
      new RegExp(
        `name="_next" value="https://alfakit\\.by/${locale}/\\?sent=1#contact"`,
      ),
      `name="_next" value="https://alfakit.by/${locale}/?sent=1#contact"`,
    );
  }

  return out;
}

const outDir = join(root, 'src', 'content');
mkdirSync(outDir, { recursive: true });

for (const { file, key, locale } of pages) {
  const html = readFileSync(join(root, file), 'utf8');
  const main = fixPaths(extractMain(html), locale);
  const jsonLd = extractJsonLd(html);
  const varName = key.replace('/', '_').replace('-', '_');

  const body = `// Auto-generated from ${file} — run: npm run extract
export const ${varName}_html = ${JSON.stringify(main)};
${jsonLd ? `export const ${varName}_jsonLd = ${JSON.stringify(jsonLd)};` : `export const ${varName}_jsonLd = null;`}
`;

  writeFileSync(join(outDir, `${key.replace('/', '-')}.ts`), body);
  console.log('wrote', key);
}
