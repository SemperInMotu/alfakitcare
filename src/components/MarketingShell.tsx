import type { Locale, PageKind } from '@/lib/i18n';
import { CONTENT_LOCALES, LANG_LABELS, VISIBLE_LOCALES, homeUrl, pagePath } from '@/lib/i18n';

const CONTACT: Record<Locale, string> = {
  en: 'Contact',
  ru: 'Контакты',
  be: 'Кантакты',
};

const SKIP: Record<Locale, string> = {
  en: 'Skip to content',
  ru: 'К содержанию',
  be: 'Да змесціва',
};

const FOOTER_BRAND: Record<Locale, Record<PageKind, string>> = {
  en: {
    home: 'ALFAKIT Care · alfakit.by',
    modules: 'ALFAKIT Care · module catalogue',
    faq: 'ALFAKIT Care · FAQ',
    next: 'ALFAKIT Care · NEXT waitlist',
    smart: 'ALFAKIT Care · SMART',
    sitemap: 'ALFAKIT Care · sitemap',
  },
  ru: {
    home: 'ALFAKIT Care · alfakit.by',
    modules: 'ALFAKIT Care · каталог модулей',
    faq: 'ALFAKIT Care · FAQ',
    next: 'ALFAKIT Care · NEXT waitlist',
    smart: 'ALFAKIT Care · SMART',
    sitemap: 'ALFAKIT Care · карта сайта',
  },
  be: {
    home: 'ALFAKIT Care · alfakit.by',
    modules: 'ALFAKIT Care · каталог модуляў',
    faq: 'ALFAKIT Care · FAQ',
    next: 'ALFAKIT Care · NEXT waitlist',
    smart: 'ALFAKIT Care · SMART',
    sitemap: 'ALFAKIT Care · карта сайта',
  },
};

const FOOTER_OWNER: Record<Locale, string> = {
  en: 'Vitali Kharuzhko, Minsk, Belarus',
  ru: 'Хоружко В.В., Минск, Беларусь',
  be: 'Хоружко В.В., Минск, Беларусь',
};

const ALSO: Record<Locale, { smart: string; data: string; next: string; projects: string }> = {
  en: {
    smart: 'SMART',
    data: 'Data',
    next: 'NEXT waitlist',
    projects: 'Projects',
  },
  ru: {
    smart: 'SMART',
    data: 'Данные',
    next: 'NEXT waitlist',
    projects: 'Проекты',
  },
  be: {
    smart: 'SMART',
    data: 'Дадзеныя',
    next: 'NEXT waitlist',
    projects: 'Праекты',
  },
};

const COPYRIGHT_START = 2018;

function navFor(locale: Locale, kind: PageKind): { label: string; href: string }[] {
  const home = homeUrl(locale);
  const hash = (id: string) => (kind === 'home' ? `#${id}` : `${home}#${id}`);
  const faqHref = locale === 'be' ? pagePath('ru', 'faq') : pagePath(locale, 'faq');
  const smartHref = locale === 'be' ? pagePath('ru', 'smart') : pagePath(locale, 'smart');
  const modernizeHref = locale === 'be' ? '/#modernize' : hash('modernize');
  const labels =
    locale === 'ru'
      ? { audit: 'Аудит', modernize: 'Модернизация', modules: 'Модули', packages: 'Пакеты', smart: 'SMART', faq: 'FAQ' }
      : locale === 'be'
        ? { audit: 'Аўдыт', modernize: 'Мадернізацыя', modules: 'Модулі', packages: 'Пакеты', smart: 'SMART', faq: 'FAQ' }
        : { audit: 'Audit', modernize: 'Modernise', modules: 'Modules', packages: 'Packages', smart: 'SMART', faq: 'FAQ' };

  return [
    { label: labels.audit, href: hash('audit') },
    { label: labels.modernize, href: modernizeHref },
    { label: labels.modules, href: pagePath(locale, 'modules') },
    { label: labels.packages, href: hash('packages') },
    { label: labels.smart, href: smartHref },
    { label: labels.faq, href: faqHref },
  ];
}

type Props = {
  locale: Locale;
  variant: PageKind;
  langRoot?: boolean;
  children: React.ReactNode;
};

export function MarketingShell({ locale, variant, langRoot = false, children }: Props) {
  const home = homeUrl(locale);
  const brandHref = variant === 'home' ? '#top' : home;
  const contactHref = variant === 'home' ? '#contact' : `${home}#contact`;
  const nav = navFor(locale, variant);
  const year = new Date().getFullYear();
  const also = ALSO[locale];
  const smartLocale = locale === 'be' ? 'ru' : locale;
  const nextLocale = locale === 'be' ? 'ru' : locale;
  const sitemapHref = locale === 'be' ? pagePath('ru', 'sitemap') : pagePath(locale, 'sitemap');
  const sitemapLabel = locale === 'en' ? 'Sitemap' : 'Карта сайта';

  const langLinks = [
    ...(locale === 'be' ? [{ locale: 'be' as const, href: null as string | null, label: LANG_LABELS.be }] : []),
    ...VISIBLE_LOCALES.map((l) => {
      const available = CONTENT_LOCALES[variant].includes(l);
      const href = l === locale ? null : available ? pagePath(l, variant) : pagePath(l, 'home');
      return { locale: l, href, label: LANG_LABELS[l] };
    }),
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        {SKIP[locale]}
      </a>
      {langRoot && (
        <div className="lang-hint" data-lang-hint hidden>
          <div className="wrap lang-hint-inner">
            <p data-lang-hint-text />
            <a className="btn btn-sm" href="#" data-lang-hint-go>
              Switch
            </a>
            <button type="button" className="lang-hint-close" data-lang-hint-close aria-label="Dismiss">
              ×
            </button>
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href={brandHref}>
            ALFAKIT <span className="brand-dot">Care</span>
          </a>
          <nav className="nav" aria-label="Sections">
            {nav.map((item) => (
              <a key={item.href + item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <nav className="lang-switch" aria-label="Language" data-lang-switch>
              {langLinks.map((l) =>
                l.href ? (
                  <a key={l.locale} href={l.href} hrefLang={l.locale}>
                    {l.label}
                  </a>
                ) : (
                  <span key={l.locale} className="lang-current" aria-current="page">
                    {l.label}
                  </span>
                ),
              )}
            </nav>
            <a className="btn btn-sm" href={contactHref}>
              {CONTACT[locale]}
            </a>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p className="footer-brand">{FOOTER_BRAND[locale][variant]}</p>
          <p className="footer-owner">{FOOTER_OWNER[locale]}</p>
          <p className="footer-meta">
            <a href="mailto:info@alfakit.by">info@alfakit.by</a>
            <span aria-hidden="true"> · </span>
            <a href="tel:+375296757858">+375 29 675-78-58</a>
            <span aria-hidden="true"> · </span>
            <span>UNP 102176582</span>
            <span aria-hidden="true"> · </span>
            <span>
              © {COPYRIGHT_START}–{year}
            </span>
            {langLinks
              .filter((l) => l.href)
              .map((l) => (
                <span key={l.locale}>
                  <span aria-hidden="true"> · </span>
                  <a href={l.href!} hrefLang={l.locale}>
                    {l.label}
                  </a>
                </span>
              ))}
          </p>
          <p className="footer-also">
            <a href={pagePath(smartLocale, 'smart')}>{also.smart}</a>
            <span aria-hidden="true"> · </span>
            <a href={pagePath(nextLocale, 'next')}>{also.next}</a>
            <span aria-hidden="true"> · </span>
            <a href={sitemapHref}>{sitemapLabel}</a>
            <span aria-hidden="true"> · </span>
            {also.data}: <a href="https://semperinmotu.com/ops/data.html">semperinmotu.com/ops/data</a>
            <span aria-hidden="true"> · </span>
            {also.projects}: <a href="https://vitalykhoruzhko.com/">vitalykhoruzhko.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}
