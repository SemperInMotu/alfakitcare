import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { ru_home_html, ru_home_jsonLd } from '@/content/ru-home';

export const metadata = buildPageMetadata('ru', 'home');

export default function HomePage() {
  return <MarketingPage locale="ru" variant="home" html={ru_home_html} jsonLd={ru_home_jsonLd} />;
}
