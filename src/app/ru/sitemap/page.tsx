import { MarketingPage } from '@/components/MarketingPage';
import { sitemap_ru_html } from '@/content/sitemap-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('ru', 'sitemap');

export default function RuSitemapPage() {
  return <MarketingPage locale="ru" variant="sitemap" html={sitemap_ru_html} />;
}
