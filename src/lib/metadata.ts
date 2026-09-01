import type { Metadata } from 'next';
import type { Locale } from './i18n';
import { SITE_URL, localePath, modulesPath } from './i18n';

type PageKind = 'home' | 'modules';

const META: Record<Locale, Record<PageKind, { title: string; description: string }>> = {
  en: {
    home: {
      title: 'ALFAKIT Care — IBM Domino & HCL Notes support · PROLOG / ALFAKIT TMS',
      description:
        'Audit, support and customisation for live PROLOG / ALFAKIT on IBM Domino and HCL Notes. SLA packages, modules, TMS reporting. A Semper In Motu practice. info@alfakit.by',
    },
    modules: {
      title: 'Module catalogue — ALFAKIT Care',
      description:
        'Catalogue of TMS/CRM customisation modules on IBM Domino and HCL Notes: finance, sales, operations, access.',
    },
  },
  ru: {
    home: {
      title: 'ALFAKIT Care — сопровождение IBM Domino и HCL Notes · PROLOG / ALFAKIT TMS',
      description:
        'Аудит, поддержка и доработка PROLOG / ALFAKIT на IBM Domino и HCL Notes. Пакеты Care, модули, отчёты TMS. Практика Semper In Motu. info@alfakit.by',
    },
    modules: {
      title: 'Каталог модулей — ALFAKIT Care',
      description:
        'Модули доработки TMS/CRM на IBM Domino и HCL Notes: финансы, продажи, операции, доступ.',
    },
  },
  be: {
    home: {
      title: 'ALFAKIT Care — суправаджанне IBM Domino і HCL Notes · PROLOG / ALFAKIT TMS',
      description:
        'Аўдыт, падтрымка і дапрацоўка PROLOG / ALFAKIT на IBM Domino і HCL Notes. Пакеты Care, модулі, справаздачы TMS. Практыка Semper In Motu. info@alfakit.by',
    },
    modules: {
      title: 'Каталог модуляў — ALFAKIT Care',
      description:
        'Модулі дапрацоўкі TMS/CRM на IBM Domino і HCL Notes: фінансы, продаж, аперацыі, доступ.',
    },
  },
};

function pageUrl(locale: Locale, kind: PageKind): string {
  if (kind === 'home') return `${SITE_URL}${localePath(locale)}`;
  return `${SITE_URL}${modulesPath(locale)}`;
}

export function buildPageMetadata(locale: Locale, kind: PageKind): Metadata {
  const { title, description } = META[locale][kind];
  const url = pageUrl(locale, kind);
  const languages: Record<string, string> = {
    en: pageUrl('en', kind),
    ru: pageUrl('ru', kind),
    be: pageUrl('be', kind),
    'x-default': pageUrl('en', kind),
  };

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'ALFAKIT Care',
      title: kind === 'home' ? 'ALFAKIT Care — Domino TMS support' : title,
      description,
      url,
      images: [{ url: `${SITE_URL}/assets/og-default.jpg` }],
      locale: locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'be_BY',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/assets/og-default.jpg`],
    },
  };
}
