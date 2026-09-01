import { MarketingPage } from '@/components/MarketingPage';
import { buildPageMetadata } from '@/lib/metadata';
import { ru_modules_html } from '@/content/ru-modules';

export const metadata = buildPageMetadata('ru', 'modules');

export default function RuModulesPage() {
  return <MarketingPage locale="ru" variant="modules" html={ru_modules_html} />;
}
