import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'https://alfakit.by';
const DEFAULT = 'ru';

const PAGES = {
  ru: [
    ['', 1.0],
    ['modules.html', 0.7],
    ['faq', 0.8],
    ['next', 0.7],
    ['smart', 0.8],
    ['sitemap', 0.4],
  ],
  en: [
    ['', 1.0],
    ['modules.html', 0.7],
    ['faq', 0.8],
    ['next', 0.7],
    ['smart', 0.8],
    ['sitemap', 0.4],
  ],
  be: [
    ['', 0.5],
    ['modules.html', 0.4],
  ],
};

function loc(lang, page) {
  const prefix = lang === DEFAULT ? '' : `/${lang}`;
  if (!page) return prefix ? `${HOST}${prefix}/` : `${HOST}/`;
  return `${HOST}${prefix}/${page}`;
}

function hreflangFor(page) {
  const langs = page === '' || page === 'modules.html' ? ['ru', 'en', 'be'] : ['ru', 'en'];
  return langs;
}

const entries = Object.entries(PAGES).flatMap(([lang, pages]) =>
  pages.map(([page, priority]) => {
    const alts = hreflangFor(page);
    return [
      '  <url>',
      `    <loc>${loc(lang, page)}</loc>`,
      ...alts.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${loc(alt, page)}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc('ru', page)}" />`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  }),
);

writeFileSync(
  resolve(root, 'public/sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n'),
  'utf8',
);
console.log(`sitemap.xml — ${entries.length} urls`);
