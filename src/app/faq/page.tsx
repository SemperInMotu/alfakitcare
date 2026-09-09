import { MarketingPage } from '@/components/MarketingPage';
import { faqJsonLd, faqPageHtml } from '@/content/faq-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('ru', 'faq');

export default function FaqPage() {
  return (
    <MarketingPage locale="ru" variant="faq" html={faqPageHtml('ru')} jsonLd={faqJsonLd('ru')} />
  );
}
