import type { ReactNode } from 'react';
import { MarketingScripts } from '@/components/MarketingScripts';
import { MarketingShell } from '@/components/MarketingShell';
import { HtmlMain } from '@/components/HtmlMain';
import type { Locale } from '@/lib/i18n';
import { LangAttr } from '@/components/LangAttr';

type Variant = 'home' | 'modules';

type Props = {
  locale: Locale;
  variant: Variant;
  html: string;
  jsonLd?: string | null;
  langRoot?: boolean;
};

export function MarketingPage({ locale, variant, html, jsonLd, langRoot = false }: Props) {
  return (
    <>
      <LangAttr lang={locale === 'be' ? 'be' : locale} />
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      ) : null}
      <MarketingShell locale={locale} variant={variant} langRoot={langRoot}>
        <HtmlMain html={html} />
      </MarketingShell>
      <MarketingScripts locale={locale} langRoot={langRoot} />
    </>
  );
}
