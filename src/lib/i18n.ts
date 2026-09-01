export type Locale = 'en' | 'ru' | 'be';

export const SITE_URL = 'https://alfakit.by';

export const LOCALES: Locale[] = ['en', 'ru', 'be'];

export function localePath(locale: Locale, path = ''): string {
  const base = locale === 'en' ? '' : `/${locale}`;
  return `${base}${path}` || '/';
}

export function modulesPath(locale: Locale): string {
  return `${localePath(locale)}/modules.html`;
}

export const LANG_LABELS: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  be: 'BE',
};
