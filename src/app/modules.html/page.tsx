import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { en_modules_html } from '@/content/en-modules';

export const metadata = buildPageMetadata('en', 'modules');

export default function ModulesPage() {
  return <MarketingPage locale="en" variant="modules" html={en_modules_html} />;
}
