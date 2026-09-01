import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'https://alfakit.by';

/* /analytics/* stays out: those demo dashboards are noindex. */
const pages = ['', 'modules.html'];
const locales = ['en', 'ru', 'be'];
const url = (lang, page) => `${HOST}${lang === 'en' ? '' : `/${lang}`}/${page}`;

const entries = locales.flatMap((lang) =>
  pages.map((page) =>
    [
      '  <url>',
      `    <loc>${url(lang, page)}</loc>`,
      ...locales.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url(alt, page)}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}" />`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${page === '' ? '1.0' : '0.7'}</priority>`,
      '  </url>',
    ].join('\n'),
  ),
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
