import { homeUrl, pagePath } from '@/lib/i18n';

function sitemapHtml(locale: 'en' | 'ru'): string {
  const home = pagePath(locale, 'home');
  const modules = pagePath(locale, 'modules');
  const faq = pagePath(locale, 'faq');
  const next = pagePath(locale, 'next');
  const smart = pagePath(locale, 'smart');
  const root = homeUrl(locale);
  const contact = `${root}#contact`;
  const audit = `${root}#audit`;
  const reports = `${root}#reports`;
  const analytics = locale === 'ru' ? '/analytics/ru/' : '/analytics/';

  if (locale === 'ru') {
    return `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">Навигация</p>
        <h1>Карта сайта</h1>
        <p class="section-lead">Все публичные страницы ALFAKIT Care. Если вы попали сюда с 404 — нужный раздел скорее всего в этом списке.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="map-title">
      <div class="wrap sitemap-grid">
        <h2 id="map-title" class="visually-hidden">Разделы</h2>
        <article>
          <h2>Поддержка Domino</h2>
          <ul class="sitemap-list">
            <li><a href="${home}">Главная</a> — живой TMS, пакеты Care, контакты</li>
            <li><a href="${audit}">Аудит системы</a></li>
            <li><a href="${root}#modernize">Модернизация TMS / CRM / ERP</a></li>
            <li><a href="${modules}">Каталог модулей</a></li>
            <li><a href="${faq}">FAQ</a> — SLA, цены, bus factor, NEXT</li>
            <li><a href="${contact}">Контакты и заявка</a></li>
          </ul>
        </article>
        <article>
          <h2>Платформа</h2>
          <ul class="sitemap-list">
            <li><a href="${smart}">AlfaKIT SMART</a> — разговор → действие в TMS</li>
            <li><a href="${next}">AlfaKIT NEXT</a> — waitlist миграции с Domino</li>
            <li><a href="${reports}">Отчёты TMS</a></li>
            <li><a href="${analytics}">Демо аналитики</a> (вымышленные данные)</li>
          </ul>
        </article>
        <article>
          <h2>Языки</h2>
          <ul class="sitemap-list">
            <li><a href="${pagePath('ru', 'sitemap')}" hrefLang="ru">Русский</a> — версия по умолчанию</li>
            <li><a href="${pagePath('en', 'sitemap')}" hrefLang="en">English</a></li>
          </ul>
        </article>
      </div>
    </section>`;
  }

  return `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">Navigation</p>
        <h1>Sitemap</h1>
        <p class="section-lead">Every public ALFAKIT Care page. If a 404 brought you here, the section you want is probably in this list.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="map-title">
      <div class="wrap sitemap-grid">
        <h2 id="map-title" class="visually-hidden">Sections</h2>
        <article>
          <h2>Domino support</h2>
          <ul class="sitemap-list">
            <li><a href="${home}">Home</a> — live TMS, Care retainers, contact</li>
            <li><a href="${audit}">System audit</a></li>
            <li><a href="${root}#modernize">TMS / CRM / ERP modernisation</a></li>
            <li><a href="${modules}">Module catalogue</a></li>
            <li><a href="${faq}">FAQ</a> — SLA, pricing, bus factor, NEXT</li>
            <li><a href="${contact}">Contact / enquiry</a></li>
          </ul>
        </article>
        <article>
          <h2>Platform</h2>
          <ul class="sitemap-list">
            <li><a href="${smart}">ALFAKIT SMART</a> — conversation to TMS action</li>
            <li><a href="${next}">ALFAKIT NEXT</a> — Domino migration waitlist</li>
            <li><a href="${reports}">TMS reports</a></li>
            <li><a href="${analytics}">Analytics demos</a> (fictional data)</li>
          </ul>
        </article>
        <article>
          <h2>Languages</h2>
          <ul class="sitemap-list">
            <li><a href="${pagePath('ru', 'sitemap')}" hrefLang="ru">Русский</a> — default</li>
            <li><a href="${pagePath('en', 'sitemap')}" hrefLang="en">English</a></li>
          </ul>
        </article>
      </div>
    </section>`;
}

export const sitemap_ru_html = sitemapHtml('ru');
export const sitemap_en_html = sitemapHtml('en');

export function notFoundHtml(locale: 'en' | 'ru'): string {
  const sitemap = pagePath(locale, 'sitemap');
  const home = pagePath(locale, 'home');

  if (locale === 'ru') {
    return `<section class="section page-head error-page" id="top">
      <div class="wrap">
        <p class="section-kicker">404</p>
        <h1>Страницы нет</h1>
        <p class="section-lead">Адрес не существует или его сняли. Откройте карту сайта — там все живые разделы.</p>
        <div class="hero-cta">
          <a class="btn" href="${sitemap}">Карта сайта</a>
          <a class="btn btn-ghost" href="${home}">На главную</a>
        </div>
      </div>
    </section>`;
  }

  return `<section class="section page-head error-page" id="top">
      <div class="wrap">
        <p class="section-kicker">404</p>
        <h1>Page not found</h1>
        <p class="section-lead">This URL does not exist or was retired. The sitemap lists every live section.</p>
        <div class="hero-cta">
          <a class="btn" href="${sitemap}">Sitemap</a>
          <a class="btn btn-ghost" href="${home}">Home</a>
        </div>
      </div>
    </section>`;
}
