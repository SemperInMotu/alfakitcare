'use client';

import { usePathname } from 'next/navigation';
import { MarketingPage } from '@/components/MarketingPage';
import { notFoundHtml } from '@/content/sitemap-page';

function localeFromPath(pathname: string): 'en' | 'ru' {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru';
}

export function NotFoundView() {
  const pathname = usePathname() || '/';
  const locale = localeFromPath(pathname);
  return <MarketingPage locale={locale} variant="sitemap" html={notFoundHtml(locale)} />;
}
