import type { Metadata } from 'next';
import type { Locale, PageKind } from './i18n';
import { CONTENT_LOCALES, SITE_URL, pagePath } from './i18n';

const META: Record<Locale, Partial<Record<PageKind, { title: string; description: string; ogTitle?: string }>>> = {
  en: {
    home: {
      title: 'ALFAKIT — IBM Domino & HCL Notes support for logistics TMS',
      description:
        'Keep a live PROLOG / ALFAKIT TMS running on IBM Domino and HCL Notes. SLA retainers, system audit from €900, modules and reporting. info@alfakit.by',
      ogTitle: 'ALFAKIT Care — keep the live Domino TMS running',
    },
    modules: {
      title: 'Module catalogue — ALFAKIT Care',
      description:
        'Catalogue of TMS/CRM customisation modules on IBM Domino and HCL Notes: finance, sales, operations, access.',
    },
    faq: {
      title: 'ALFAKIT FAQ — Domino support, SLA, SMART, NEXT waitlist',
      description:
        'Do we replace Domino? What does Care cost? SLA, bus factor, system audit, ALFAKIT SMART and the NEXT waitlist.',
    },
    next: {
      title: 'ALFAKIT NEXT waitlist — migrate from Domino without a weekend cutover',
      description:
        'Join the ALFAKIT NEXT waitlist for a phased multi-tenant platform. Care keeps the live TMS running. NEXT is not a clause in a support contract.',
    },
    smart: {
      title: 'ALFAKIT SMART — conversation to TMS action, not a dictaphone',
      description:
        'Client rates, lanes and ETA from the call into a draft on the complex service. Human approve. MikoPBX and other API-capable PBXs. Starter from $800/mo.',
    },
    sitemap: {
      title: 'Sitemap — ALFAKIT Care',
      description: 'All ALFAKIT Care pages: support, modules, FAQ, SMART, NEXT waitlist, analytics demos.',
    },
  },
  ru: {
    home: {
      title: 'AlfaKIT — поддержка IBM Domino и HCL Notes для логистической TMS',
      description:
        'Сопровождение живого ПроЛОГ / АльфаКИТ на IBM Domino и HCL Notes. Пакеты Care, аудит от 3 000 BYN, модули и отчёты. info@alfakit.by',
      ogTitle: 'ALFAKIT Care — живой Domino TMS в работе',
    },
    modules: {
      title: 'Каталог модулей — ALFAKIT Care',
      description: 'Модули доработки TMS/CRM на IBM Domino и HCL Notes: финансы, продажи, операции, доступ.',
    },
    faq: {
      title: 'AlfaKIT FAQ — поддержка Domino, SLA, SMART, NEXT',
      description:
        'Заменяем ли Domino? Сколько стоит Care? SLA, bus factor, аудит, AlfaKIT SMART и waitlist NEXT.',
    },
    next: {
      title: 'AlfaKIT NEXT waitlist — миграция с Domino без cutover за выходные',
      description:
        'Waitlist AlfaKIT NEXT: поэтапная multi-tenant платформа. Care оставляет живую TMS. NEXT — не пункт договора поддержки.',
    },
    smart: {
      title: 'AlfaKIT SMART — разговор → действие в TMS, не диктофон',
      description:
        'Ставка, плечо и ETA со звонка клиенту — draft на комплексной услуге. Подтверждает человек. MikoPBX и другие АТС с API. Starter от 2 500 BYN/мес.',
    },
    sitemap: {
      title: 'Карта сайта — ALFAKIT Care',
      description: 'Все страницы ALFAKIT Care: поддержка, модули, FAQ, SMART, waitlist NEXT, демо аналитики.',
    },
  },
  be: {
    home: {
      title: 'ALFAKIT Care — суправаджанне IBM Domino і HCL Notes · PROLOG / ALFAKIT TMS',
      description:
        'Аўдыт, падтрымка і дапрацоўка PROLOG / ALFAKIT на IBM Domino і HCL Notes. Пакеты Care, модулі, справаздачы TMS. info@alfakit.by',
    },
    modules: {
      title: 'Каталог модуляў — ALFAKIT Care',
      description: 'Модулі дапрацоўкі TMS/CRM на IBM Domino і HCL Notes: фінансы, продаж, аперацыі, доступ.',
    },
  },
};

function pageUrl(locale: Locale, kind: PageKind): string {
  const path = pagePath(locale, kind);
  if (path === '/') return `${SITE_URL}/`;
  if (kind === 'home') return `${SITE_URL}${path}/`;
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata(locale: Locale, kind: PageKind): Metadata {
  const entry = META[locale][kind];
  if (!entry) throw new Error(`No metadata for ${locale}/${kind}`);
  const { title, description, ogTitle } = entry;
  const url = pageUrl(locale, kind);
  const locales = (locale === 'be' ? CONTENT_LOCALES[kind] : CONTENT_LOCALES[kind].filter((l) => l !== 'be'));
  const languages: Record<string, string> = { 'x-default': pageUrl('ru', kind) };
  for (const l of locales) languages[l] = pageUrl(l, kind);

  const ogLocale = locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : 'be_BY';

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'ALFAKIT Care',
      title: ogTitle || title,
      description,
      url,
      images: [{ url: `${SITE_URL}/assets/og-default.jpg` }],
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description,
      images: [`${SITE_URL}/assets/og-default.jpg`],
    },
  };
}
