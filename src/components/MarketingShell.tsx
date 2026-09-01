import type { Locale } from '@/lib/i18n';
import { LANG_LABELS, localePath, modulesPath } from '@/lib/i18n';

type Variant = 'home' | 'modules';

const NAV: Record<Locale, Record<Variant, { label: string; href: string }[]>> = {
  en: {
    home: [
      { label: 'Platform', href: '#platform' },
      { label: 'Audit', href: '#audit' },
      { label: 'Modules', href: '#functions' },
      { label: 'Packages', href: '#packages' },
      { label: 'Cases', href: '#cases' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    modules: [
      { label: 'Audit', href: '/#audit' },
      { label: 'Clusters', href: '/#functions' },
      { label: 'Packages', href: '/#packages' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  ru: {
    home: [
      { label: 'Платформа', href: '#platform' },
      { label: 'Аудит', href: '#audit' },
      { label: 'Модули', href: '#functions' },
      { label: 'Пакеты', href: '#packages' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Контакты', href: '#contact' },
    ],
    modules: [
      { label: 'Аудит', href: '/ru/#audit' },
      { label: 'Кластеры', href: '/ru/#functions' },
      { label: 'Пакеты', href: '/ru/#packages' },
      { label: 'FAQ', href: '/ru/#faq' },
      { label: 'Контакты', href: '/ru/#contact' },
    ],
  },
  be: {
    home: [
      { label: 'Платформа', href: '#platform' },
      { label: 'Аўдыт', href: '#audit' },
      { label: 'Модулі', href: '#functions' },
      { label: 'Пакеты', href: '#packages' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Кантакты', href: '#contact' },
    ],
    modules: [
      { label: 'Аўдыт', href: '/be/#audit' },
      { label: 'Кластары', href: '/be/#functions' },
      { label: 'Пакеты', href: '/be/#packages' },
      { label: 'FAQ', href: '/be/#faq' },
      { label: 'Кантакты', href: '/be/#contact' },
    ],
  },
};

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

const FOOTER_BRAND: Record<Locale, Record<Variant, string>> = {
  en: { home: 'ALFAKIT Care · alfakit.by', modules: 'ALFAKIT Care · module catalogue' },
  ru: { home: 'ALFAKIT Care · alfakit.by', modules: 'ALFAKIT Care · каталог модулей' },
  be: { home: 'ALFAKIT Care · alfakit.by', modules: 'ALFAKIT Care · каталог модуляў' },
};

const FOOTER_PRACTICE: Record<Locale, string> = {
  en: 'A',
  ru: 'Практика',
  be: 'Практыка',
};

type Props = {
  locale: Locale;
  variant: Variant;
  langRoot?: boolean;
  children: React.ReactNode;
};

export function MarketingShell({ locale, variant, langRoot = false, children }: Props) {
  const home = localePath(locale);
  const brandHref = variant === 'home' ? '#top' : home;
  const contactHref = variant === 'home' ? '#contact' : `${home}#contact`;
  const nav = NAV[locale][variant];

  const langLinks = (['en', 'ru', 'be'] as Locale[]).map((l) => ({
    locale: l,
    href: l === locale ? null : `${localePath(l)}${variant === 'modules' ? 'modules.html' : ''}`,
    label: LANG_LABELS[l],
  }));

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
              <a key={item.href} href={item.href}>
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
          <p className="footer-practice">
            {FOOTER_PRACTICE[locale]}{' '}
            <a href="https://semperinmotu.com/">Semper In Motu</a>
            {locale === 'ru' ? '' : locale === 'be' ? '' : ''}
          </p>
          <p className="footer-meta">
            <a href="mailto:info@alfakit.by">info@alfakit.by</a>
            <span aria-hidden="true">
              ·
            </span>
            <a href="tel:+375296757858">+375 29 675-78-58</a>
            <span aria-hidden="true">·</span>
            <span>UNP 102176582</span>
            {variant === 'modules' && locale === 'en' && (
              <>
                <span aria-hidden="true"> · </span>
                <a href="/">Home</a>
              </>
            )}
            {variant === 'home' && (
              <>
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
                <span aria-hidden="true"> · </span>
                <span>
                  © <span id="year">{new Date().getFullYear()}</span>
                </span>
              </>
            )}
          </p>
          {variant === 'modules' && (
            <p className="footer-meta footer-lang">
              {langLinks.map((l) =>
                l.href ? (
                  <a key={l.locale} href={`${localePath(l.locale)}modules.html`} hrefLang={l.locale}>
                    {l.label}
                  </a>
                ) : (
                  <span key={l.locale} className="lang-current">
                    {l.label}
                  </span>
                ),
              )}
            </p>
          )}
          <p className="footer-also">
            Data &amp; SMART: <a href="https://semperinmotu.com/ops/">semperinmotu.com/ops</a> · Projects:{' '}
            <a href="https://vitalykhoruzhko.com/">vitalykhoruzhko.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}
