import { MarketingPage } from '@/components/MarketingPage';
import { smartJsonLdEn, smart_en_html } from '@/content/smart-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('en', 'smart');

export default function EnSmartPage() {
  return <MarketingPage locale="en" variant="smart" html={smart_en_html} jsonLd={smartJsonLdEn} />;
}
