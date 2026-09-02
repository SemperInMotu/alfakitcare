# ALFAKIT Care — alfakit.by

Next.js 15 static site (App Router, `output: 'export'`) for GitHub Pages.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → out/
npm run extract  # re-sync body HTML from legacy *.html (if edited manually)
```

## Structure

```
src/app/           Next.js routes (/, /ru, /be, /modules.html, …)
src/components/    Shell, client scripts (parallax, reveal, lang detect)
src/content/       Extracted <main> HTML per locale (generated)
public/            assets, analytics demos, CNAME, en/ redirects
```

Marketing content is still HTML strings in `src/content/` — edit legacy `index.html` / `ru/index.html` then run `npm run extract`, or edit the `.ts` files directly.

Analytics dashboards remain static HTML in `public/analytics/` (noindex).

## Deploy

Repo: [github.com/vitalikus/alfakitcare](https://github.com/vitalikus/alfakitcare)

GitHub Actions (`.github/workflows/deploy.yml`) builds `out/` and publishes to Pages. Custom domain: `alfakit.by` via `public/CNAME`.

**GitHub → Settings → Pages:** Source = **GitHub Actions**, Custom domain = `alfakit.by`, Enforce HTTPS.

Legacy Vite files (`vite.config.js`, root `index.html`, …) are kept for reference until removed.
