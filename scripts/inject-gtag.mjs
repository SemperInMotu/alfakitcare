import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const marker = 'G-TDBTSK7WHY';

const snippet = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TDBTSK7WHY"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TDBTSK7WHY');
  </script>
`;
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function walkHtml(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkHtml(p, files);
    else if (name.endsWith('.html')) files.push(p);
  }
  return files;
}

for (const file of walkHtml(root)) {
  let html = readFileSync(file, 'utf8');
  if (html.includes(marker)) {
    console.log('skip:', file);
    continue;
  }
  if (!html.includes('<head>')) {
    console.warn('no <head>:', file);
    continue;
  }
  html = html.replace('<head>', `<head>\n${snippet}`);
  writeFileSync(file, html);
  console.log('updated:', file);
}
