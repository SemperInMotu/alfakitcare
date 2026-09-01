import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

const pages = [
  'index.html',
  'modules.html',
  'ru/index.html',
  'ru/modules.html',
  'be/index.html',
  'be/modules.html',
  'en/index.html',
  'en/modules.html',
  'analytics/index.html',
  'analytics/ceo.html',
  'analytics/cfo.html',
  'analytics/transport.html',
  'analytics/shareholders.html',
  'analytics/sales-team.html',
  'analytics/sales-manager.html',
  'analytics/ru/index.html',
  'analytics/ru/ceo.html',
  'analytics/ru/cfo.html',
  'analytics/ru/transport.html',
  'analytics/ru/shareholders.html',
  'analytics/ru/sales-team.html',
  'analytics/ru/sales-manager.html',
  'analytics/be/index.html',
  'analytics/be/ceo.html',
  'analytics/be/cfo.html',
  'analytics/be/transport.html',
  'analytics/be/shareholders.html',
  'analytics/be/sales-team.html',
  'analytics/be/sales-manager.html',
];

export default defineConfig({
  root,
  server: {
    host: '0.0.0.0',
    port: 5180,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5180,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [
          page.replace(/\.html$/, '').replace(/\//g, '-'),
          resolve(root, page),
        ]),
      ),
    },
  },
});
