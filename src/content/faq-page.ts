import { faqJsonLd, faqListHtml } from './faq-data';

export { faqJsonLd };

export function faqPageHtml(locale: 'en' | 'ru'): string {
  if (locale === 'ru') {
    return `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">FAQ</p>
        <h1>AlfaKIT FAQ: поддержка Domino, SLA, SMART, NEXT</h1>
        <p class="section-lead">Ответы, которые IT пересылает директору, а CFO сверяет со счётом. Цены ориентировочные. Финальная цифра — после аудита.</p>
      </div>
    </section>
    <section class="section faq" aria-labelledby="faq-title">
      <div class="wrap">
        <h2 id="faq-title" class="visually-hidden">Вопросы</h2>
        <div class="faq-list">
          ${faqListHtml('ru')}
        </div>
        <p class="package-note"><a href="/#contact">Написать</a> · <a href="/#audit">Аудит</a> · <a href="/smart">SMART</a> · <a href="/next">NEXT waitlist</a> · <a href="/">На главную</a></p>
      </div>
    </section>`;
  }

  return `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">FAQ</p>
        <h1>ALFAKIT FAQ: Domino support, SLA, NEXT waitlist</h1>
        <p class="section-lead">The answers an admin forwards to a CEO, and a CFO checks against an invoice. Prices are indicative. Final figures follow the system audit.</p>
      </div>
    </section>
    <section class="section faq" aria-labelledby="faq-title">
      <div class="wrap">
        <h2 id="faq-title" class="visually-hidden">Questions</h2>
        <div class="faq-list">
          ${faqListHtml('en')}
        </div>
        <p class="package-note"><a href="/en/#contact">Contact</a> · <a href="/en/#audit">System audit</a> · <a href="/en/smart">SMART</a> · <a href="/en/next">NEXT waitlist</a> · <a href="/en/">Home</a></p>
      </div>
    </section>`;
}
