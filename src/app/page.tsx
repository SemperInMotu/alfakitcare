import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { en_home_html, en_home_jsonLd } from '@/content/en-home';

export const metadata = buildPageMetadata('en', 'home');

export default function HomePage() {
  return (
    <MarketingPage
      locale="en"
      variant="home"
      html={en_home_html}
      jsonLd={en_home_jsonLd}
      langRoot
    />
  );
}
