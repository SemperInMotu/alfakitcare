export type Locale = 'en' | 'ru' | 'be';

export type PageKind = 'home' | 'modules' | 'faq' | 'next' | 'smart' | 'sitemap';

export const SITE_URL = 'https://alfakit.by';

export const DEFAULT_LOCALE: Locale = 'ru';

export const LOCALES: Locale[] = ['ru', 'en', 'be'];

/** Switcher / hreflang on RU+EN. BE pages stay live, just unpublished from chrome. */
export const VISIBLE_LOCALES: Locale[] = ['ru', 'en'];

export const CONTENT_LOCALES: Record<PageKind, Locale[]> = {
  home: ['ru', 'en', 'be'],
  modules: ['ru', 'en', 'be'],
  faq: ['ru', 'en'],
  next: ['ru', 'en'],
  smart: ['ru', 'en'],
  sitemap: ['ru', 'en'],
};

export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

export function localePath(locale: Locale, path = ''): string {
  const base = localePrefix(locale);
  return `${base}${path}` || '/';
}

export function homeUrl(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export function pagePath(locale: Locale, kind: PageKind): string {
  const prefix = localePrefix(locale);
  switch (kind) {
    case 'home':
      return prefix || '/';
    case 'modules':
      return `${prefix}/modules.html`;
    case 'faq':
      return `${prefix}/faq`;
    case 'next':
      return `${prefix}/next`;
    case 'smart':
      return `${prefix}/smart`;
    case 'sitemap':
      return `${prefix}/sitemap`;
  }
}

export function modulesPath(locale: Locale): string {
  return pagePath(locale, 'modules');
}

export const LANG_LABELS: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  be: 'BE',
};
