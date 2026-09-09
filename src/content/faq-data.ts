import { SITE_URL, pagePath } from '@/lib/i18n';

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: Record<'en' | 'ru', FaqItem[]> = {
  en: [
    {
      q: 'Do you replace our IBM Domino or HCL Notes?',
      a: 'No. ALFAKIT Care supports and customises the live installation. A big-bang rewrite is not the default proposal. ALFAKIT NEXT is a separate waitlist for a phased platform — not a clause inside a Care contract. If someone is selling you a weekend cutover, start with an audit instead.',
    },
    {
      q: 'Do you offer an audit of the current installation as a service?',
      a: 'Yes, and it is the usual way to start. From €900, 5–10 business days. You receive a written report, a risk register, an inventory of customisations and a prioritised work list estimated in hours. The fee is credited against a support agreement signed within 30 days. The report is yours either way — including if you take it to another contractor.',
    },
    {
      q: 'How much does Domino support cost?',
      a: 'Indicative retainers: Care from €750/mo, Growth from €1,800, Scale from €3,500, Incident from €350. Hour banks sit on the home page. Final pricing follows the system audit. Annual prepay −10…15% on Care / Growth / Scale. Large modules are scoped outside the retainer.',
    },
    {
      q: 'What response times do you commit to?',
      a: 'P1 — first response within 2 business hours, recovery same day or a workaround. P2 — 4 business hours / ≤ 2 business days. P3 — 1 business day, then per the agreed plan. Support window and escalation are written into the package agreement. 24/7 is an option on top of Scale, not the default.',
    },
    {
      q: 'Do you only work with PROLOG and ALFAKIT?',
      a: 'The focus is logistics TMS on Domino — forwarders and carriers on PROLOG / ALFAKIT. Other NSF, CRM or document-flow estates are taken when the work is LotusScript, Java agents, ACL or integrations. That is a side stream, not a second homepage.',
    },
    {
      q: 'Can you train our administrator?',
      a: 'Yes. Logs, rights, agent restarts, standard diagnostics, written runbook. The point of Care is that routine work stays inside your team. You should call us less often over time, not more.',
    },
    {
      q: 'Where do call AI and data warehousing sit?',
      a: 'ALFAKIT SMART — conversation to TMS action (transcript, extract, human approve, writeback) — lives on this site at /smart. A full data warehouse and self-service marts sit at Semper In Motu. They are upsells on a live Care tenant, not a substitute for Domino support.',
    },
    {
      q: 'How do I request a module estimate?',
      a: 'The catalogue is on the modules page. Describe the installation and the module in the contact form (topic: new feature) or write to info@alfakit.by. You get an hour estimate and a matching package. “One more field” inside an existing retainer is a change request, not a surprise line on the invoice.',
    },
    {
      q: 'What if the key developer is unavailable?',
      a: 'This is the bus-factor question. We do not pretend to be a bench of twenty. Continuity is artefacts in your perimeter: runbook, customisation inventory, agent sources, restore procedure, contract with P1–P3. Leaving a contractor has to be technically possible — otherwise it is hostage-taking, not support.',
    },
    {
      q: 'Can we join the ALFAKIT NEXT waitlist?',
      a: 'Yes — use the form on /next. Company, seat count, Domino version. We are not taking a cutover date in a web form. Live ALFAKIT tenants are first in line. Care does not oblige you to migrate; NEXT does not cancel SLA.',
    },
    {
      q: 'Do you offer 24/7 support?',
      a: 'Not by default. Scale covers a business-hours window with P1–P3 targets. 24/7 is an explicit option on top of Scale, priced after we know the estate. Incident is a cheaper queue for P1–P2 without a development bank.',
    },
  ],
  ru: [
    {
      q: 'Вы заменяете наш IBM Domino или HCL Notes?',
      a: 'Нет. ALFAKIT Care сопровождает и дорабатывает живую установку. Переписывание «за выходные» — не наше базовое предложение. AlfaKIT NEXT — отдельный waitlist поэтапной платформы, не пункт договора Care. Если вам продают cutover на выходные — сначала аудит.',
    },
    {
      q: 'Аудит действующей системы — это отдельная услуга?',
      a: 'Да, и обычно с него начинают. От 3 000 BYN (€900), 5–10 рабочих дней. Письменный отчёт, реестр рисков, опись доработок, список работ в часах. Стоимость зачитывается в договор поддержки, если он подписан за 30 дней. Отчёт ваш в любом случае — хоть к другому подрядчику.',
    },
    {
      q: 'Сколько стоит поддержка Domino?',
      a: 'Ориентиры: Care от 2 500 BYN/мес, Growth от 6 000, Scale от 11 500, Incident от 1 200. Банк часов — на главной. Финальная цифра после аудита. Годовая предоплата −10…15% на Care / Growth / Scale. Крупные модули — вне абонентки.',
    },
    {
      q: 'Какие сроки реакции в SLA?',
      a: 'P1 — первый ответ не более 2 рабочих часов, восстановление в тот же день или обход. P2 — 4 рабочих часа / до 2 рабочих дней. P3 — 1 рабочий день, дальше по плану. Окно поддержки и эскалация — в договоре пакета. 24/7 — опция к Scale, не умолчание.',
    },
    {
      q: 'Вы работаете только с ПРОЛОГ и AlfaKIT?',
      a: 'Фокус — логистическая TMS на Domino: экспедиторы и перевозчики на ПРОЛОГ / AlfaKIT. Другие NSF, CRM, документооборот — если работа в LotusScript, Java-агентах, ACL или интеграциях. Это боковой поток, не вторая главная.',
    },
    {
      q: 'Можете обучить нашего администратора?',
      a: 'Да. Логи, права, перезапуск агентов, типовая диагностика, письменный runbook. Смысл Care — чтобы рутина оставалась у вас. Со временем звонить нам должны реже, не чаще.',
    },
    {
      q: 'Где у вас ИИ по звонкам и хранилище данных?',
      a: 'AlfaKIT SMART — разговор → действие в TMS (транскрипт, extract, подтверждение человеком, запись) — на этом сайте, /smart. Полное хранилище и витрины — у Semper In Motu. Это upsell к живому Care, не замена поддержки Domino.',
    },
    {
      q: 'Как запросить оценку модуля?',
      a: 'Каталог — на странице модулей. Опишите установку и модуль в форме (кнопка «нужна доработка») или на info@alfakit.by. Вернём оценку в часах и пакет. «Ещё одно поле» внутри действующей абонентки — заявка на изменение, не сюрприз в счёте.',
    },
    {
      q: 'Что, если ключевой разработчик станет недоступен?',
      a: 'Это вопрос bus factor. Мы не обещаем «команду из двадцати». Непрерывность — артефакты в вашем периметре: runbook, опись доработок, исходники агентов, процедура restore, договор с P1–P3. Уход подрядчика должен быть технически возможен. Иначе это не поддержка, а заложничество.',
    },
    {
      q: 'Как попасть в waitlist AlfaKIT NEXT?',
      a: 'Форма на /next: компания, число пользователей, версия Domino. Дату cutover в веб-форме не назначаем. Живые тенанты AlfaKIT — первые в очереди. Care не обязывает мигрировать, NEXT не отменяет SLA.',
    },
    {
      q: 'Есть ли поддержка 24/7?',
      a: 'По умолчанию нет. Scale — рабочее окно с целями P1–P3. 24/7 — явная опция к Scale, цена после аудита контура. Incident — очередь P1–P2 без банка доработок.',
    },
  ],
};

export function faqJsonLd(locale: 'en' | 'ru'): string {
  const id = `${SITE_URL}${pagePath(locale, 'faq')}`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${id}#faq`,
    url: id,
    inLanguage: locale,
    mainEntity: FAQ_ITEMS[locale].map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  });
}

export function faqListHtml(locale: 'en' | 'ru'): string {
  return FAQ_ITEMS[locale]
    .map(
      (item) => `<details>
            <summary>${escapeHtml(item.q)}</summary>
            <p>${linkify(locale, escapeHtml(item.a))}</p>
          </details>`,
    )
    .join('\n          ');
}

function linkify(locale: 'en' | 'ru', text: string): string {
  const smart = pagePath(locale, 'smart');
  const next = pagePath(locale, 'next');
  return text
    .replace(/\/smart/g, `<a href="${smart}">${smart}</a>`)
    .replace(/\/next/g, `<a href="${next}">${next}</a>`);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
