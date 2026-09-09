import { MarketingPage } from '@/components/MarketingPage';
import { sitemap_en_html } from '@/content/sitemap-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('en', 'sitemap');

export default function EnSitemapPage() {
  return <MarketingPage locale="en" variant="sitemap" html={sitemap_en_html} />;
}
