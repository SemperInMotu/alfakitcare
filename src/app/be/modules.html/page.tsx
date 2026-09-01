import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { be_modules_html } from '@/content/be-modules';

export const metadata = buildPageMetadata('be', 'modules');

export default function BeModulesPage() {
  return <MarketingPage locale="be" variant="modules" html={be_modules_html} />;
}
