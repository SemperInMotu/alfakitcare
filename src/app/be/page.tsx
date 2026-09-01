import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { be_home_html } from '@/content/be-home';

export const metadata = buildPageMetadata('be', 'home');

export default function BeHomePage() {
  return <MarketingPage locale="be" variant="home" html={be_home_html} />;
}
