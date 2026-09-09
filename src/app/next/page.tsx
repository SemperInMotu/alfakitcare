import { MarketingPage } from '@/components/MarketingPage';
import { nextJsonLdRu, next_ru_html } from '@/content/next-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('ru', 'next');

export default function NextPage() {
  return <MarketingPage locale="ru" variant="next" html={next_ru_html} jsonLd={nextJsonLdRu} />;
}
