import { MarketingPage } from '@/components/MarketingPage';
import { smartJsonLdRu, smart_ru_html } from '@/content/smart-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('ru', 'smart');

export default function RuSmartPage() {
  return <MarketingPage locale="ru" variant="smart" html={smart_ru_html} jsonLd={smartJsonLdRu} />;
}
