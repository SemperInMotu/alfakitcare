export const nextJsonLdEn = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://alfakit.by/en/next#page',
      url: 'https://alfakit.by/en/next',
      name: 'ALFAKIT NEXT waitlist',
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ALFAKIT NEXT',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
      description:
        'Phased multi-tenant platform for logistics TMS. Dual-run with live IBM Domino. Waitlist — not a weekend cutover.',
    },
  ],
});

export const nextJsonLdRu = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://alfakit.by/next#page',
      url: 'https://alfakit.by/next',
      name: 'AlfaKIT NEXT waitlist',
      inLanguage: 'ru',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'AlfaKIT NEXT',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
      description:
        'Поэтапная multi-tenant платформа для логистической TMS. Dual-run с живым IBM Domino. Waitlist — не cutover за выходные.',
    },
  ],
});

export const next_en_html = `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">Waitlist</p>
        <h1>ALFAKIT NEXT waitlist — migrate from Domino without replacing the core blindly</h1>
        <p class="section-lead">NEXT is not a button inside a Care contract. It is a separate queue for a multi-tenant platform, dual-run with the live TMS, module by module. We are not taking a cutover date on this page.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="why-title">
      <div class="wrap prose">
        <h2 id="why-title">Why a waitlist, not a sales page with a date</h2>
        <p>A weekend cutover is how live TMS customisations die: agents nobody documented, ACL that encodes the org chart, Excel that is actually a process. NEXT starts from an inventory of what you already run — the same work as a Care audit — then a parallel contour, then cutover by domain (partners, vendor orders, billing), with rollback.</p>
        <p>If you need the system to keep running on Monday, that conversation is <a href="/en/">ALFAKIT Care</a>. Sign a retainer without joining this list. Care does not oblige you to migrate. Joining NEXT does not cancel SLA.</p>
        <h2>What NEXT is</h2>
        <ul>
          <li>Multi-tenant platform for freight-forwarder operations, not a generic Notes-to-SaaS converter.</li>
          <li>API-first, strangler pattern, dual-run with IBM Domino / HCL Notes.</li>
          <li>Priority: live ALFAKIT / PROLOG tenants. Cold Domino estates join the same list, later in line.</li>
        </ul>
        <h2>What we do not promise</h2>
        <ul>
          <li>A GA date.</li>
          <li>Feature-parity with your NSF as a contractual checklist.</li>
          <li>SMART as a blocker or a prerequisite. Conversation intelligence is an overlay — <a href="/en/smart">ALFAKIT SMART</a> can sit on Domino today.</li>
        </ul>
        <p class="package-note">Phased migration notes (inventory → dual-run → rollback) will live at <code>/next/migration-from-domino/</code> in the next wave. Until then this page is the waitlist.</p>
      </div>
    </section>
    <section class="section contact" id="waitlist" aria-labelledby="waitlist-title">
      <div class="wrap contact-inner">
        <h2 id="waitlist-title">Join the waitlist</h2>
        <p class="form-status" data-form-status tabindex="-1" hidden>Request sent. We will reply to the address you provided.</p>
        <form class="lead-form" action="https://formsubmit.co/info@alfakit.by" method="POST">
          <input type="hidden" name="_subject" value="ALFAKIT NEXT — waitlist" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://alfakit.by/en/next?sent=1#waitlist" />
          <input type="hidden" name="topic" value="next" />
          <input type="text" name="_honey" value="" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;opacity:0" />
          <div class="form-row">
            <label>Name<input type="text" name="name" required autocomplete="name" /></label>
            <label>Email<input type="email" name="email" required autocomplete="email" /></label>
          </div>
          <label>Company<input type="text" name="company" required autocomplete="organization" /></label>
          <div class="form-row">
            <label>Notes seats / users<input type="text" name="users" inputmode="numeric" placeholder="e.g. 40" /></label>
            <label>Domino version<input type="text" name="domino_version" placeholder="e.g. 9 / 11 / 12 / 14" /></label>
          </div>
          <label>Context<textarea name="message" placeholder="Live ALFAKIT / PROLOG tenant? What must not break?"></textarea></label>
          <p class="form-note">We use this only to queue the conversation. No GA date will be invented in the reply.</p>
          <div class="form-actions">
            <button class="btn btn-lg" type="submit">Join waitlist</button>
          </div>
        </form>
        <p class="package-note"><a href="/en/#contact">Care / audit instead</a> · <a href="/en/faq">FAQ</a></p>
      </div>
    </section>`;

export const next_ru_html = `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">Waitlist</p>
        <h1>AlfaKIT NEXT waitlist — миграция с Domino без слепой замены ядра</h1>
        <p class="section-lead">NEXT — не кнопка внутри договора Care. Это отдельная очередь на multi-tenant платформу, dual-run с живой TMS, модуль за модулем. Дату cutover на этой странице не назначаем.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="why-title">
      <div class="wrap prose">
        <h2 id="why-title">Зачем waitlist, а не страница с датой релиза</h2>
        <p>«Переедем за выходные» — так хоронят живые кастомизации: агенты без документации, ACL как оргсхема, Excel как процесс. NEXT начинается с описи того, что уже работает — та же работа, что аудит Care — затем параллельный контур, затем переключение по доменам (партнёры, ПУ, счета) с rollback.</p>
        <p>Если в понедельник система должна просто работать, это разговор про <a href="/">ALFAKIT Care</a>. Абонентку можно подписать, не вставая в этот список. Care не обязывает мигрировать. NEXT не отменяет SLA.</p>
        <h2>Что такое NEXT</h2>
        <ul>
          <li>Multi-tenant платформа под операции экспедитора, не универсальный «Notes → SaaS».</li>
          <li>API-first, strangler, dual-run с IBM Domino / HCL Notes.</li>
          <li>Приоритет: живые тенанты AlfaKIT / ПРОЛОГ. Прочие контуры Domino — в тот же список, дальше в очереди.</li>
        </ul>
        <h2>Чего не обещаем</h2>
        <ul>
          <li>Дату GA.</li>
          <li>Feature-parity с вашим NSF как чеклист в договоре.</li>
          <li>SMART как блокер миграции. ИИ по звонкам — слой сверху: <a href="/smart">AlfaKIT SMART</a> может жить на Domino уже сейчас.</li>
        </ul>
        <p class="package-note">Текст про поэтапную миграцию появится на <code>/next/migration-from-domino/</code> следующей волной. Сейчас эта страница — только waitlist.</p>
      </div>
    </section>
    <section class="section contact" id="waitlist" aria-labelledby="waitlist-title">
      <div class="wrap contact-inner">
        <h2 id="waitlist-title">В waitlist</h2>
        <p class="form-status" data-form-status tabindex="-1" hidden>Заявка отправлена. Ответим на указанный email.</p>
        <form class="lead-form" action="https://formsubmit.co/info@alfakit.by" method="POST">
          <input type="hidden" name="_subject" value="AlfaKIT NEXT — waitlist" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://alfakit.by/next?sent=1#waitlist" />
          <input type="hidden" name="topic" value="next" />
          <input type="text" name="_honey" value="" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;opacity:0" />
          <div class="form-row">
            <label>Имя<input type="text" name="name" required autocomplete="name" /></label>
            <label>Email<input type="email" name="email" required autocomplete="email" /></label>
          </div>
          <label>Компания<input type="text" name="company" required autocomplete="organization" /></label>
          <div class="form-row">
            <label>Пользователей Notes<input type="text" name="users" inputmode="numeric" placeholder="например 40" /></label>
            <label>Версия Domino<input type="text" name="domino_version" placeholder="например 9 / 11 / 12 / 14" /></label>
          </div>
          <label>Контекст<textarea name="message" placeholder="Живой тенант AlfaKIT / ПРОЛОГ? Что нельзя сломать?"></textarea></label>
          <p class="form-note">Данные только для очереди. Дату GA в ответе не выдумаем.</p>
          <div class="form-actions">
            <button class="btn btn-lg" type="submit">В waitlist</button>
          </div>
        </form>
        <p class="package-note"><a href="/#contact">Сначала Care / аудит</a> · <a href="/faq">FAQ</a></p>
      </div>
    </section>`;
