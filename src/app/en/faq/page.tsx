import { MarketingPage } from '@/components/MarketingPage';
import { faqJsonLd, faqPageHtml } from '@/content/faq-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('en', 'faq');

export default function EnFaqPage() {
  return (
    <MarketingPage locale="en" variant="faq" html={faqPageHtml('en')} jsonLd={faqJsonLd('en')} />
  );
}
