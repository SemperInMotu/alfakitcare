import { MarketingPage } from '@/components/MarketingPage';
import { nextJsonLdEn, next_en_html } from '@/content/next-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('en', 'next');

export default function EnNextPage() {
  return <MarketingPage locale="en" variant="next" html={next_en_html} jsonLd={nextJsonLdEn} />;
}
