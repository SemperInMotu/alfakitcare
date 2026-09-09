export const smartJsonLdEn = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'ALFAKIT SMART',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Conversation intelligence for a freight-forwarder TMS: PBX to transcript to extract to human-approved writeback.',
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '800', priceCurrency: 'USD', unitText: 'MONTH' },
        { '@type': 'Offer', name: 'Growth', price: '1500', priceCurrency: 'USD', unitText: 'MONTH' },
        { '@type': 'Offer', name: 'Ops', price: '2500', priceCurrency: 'USD', unitText: 'MONTH' },
      ],
    },
  ],
});

export const smartJsonLdRu = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'AlfaKIT SMART',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Conversation intelligence для TMS экспедитора: АТС → транскрипт → extract → draft на комплексной услуге клиенту после подтверждения человеком.',
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '2500', priceCurrency: 'BYN', unitText: 'MONTH' },
        { '@type': 'Offer', name: 'Growth', price: '4600', priceCurrency: 'BYN', unitText: 'MONTH' },
        { '@type': 'Offer', name: 'Ops', price: '7700', priceCurrency: 'BYN', unitText: 'MONTH' },
      ],
    },
  ],
});

export const smart_en_html = `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">ALFAKIT SMART</p>
        <h1>Conversation to TMS action, not a dictaphone</h1>
        <p class="section-lead">The rate lives in the phone call. The client complex-service card is empty. Margin is already gone. SMART puts a draft on the document — a human approves — then writeback. No silent overwrite of production fields.</p>
        <div class="hero-cta">
          <a class="btn" href="#pilot">Request a pilot</a>
          <a class="btn btn-ghost" href="/en/#contact">Care / audit first</a>
        </div>
      </div>
    </section>
    <section class="section" aria-labelledby="pipe-title">
      <div class="wrap">
        <h2 id="pipe-title">Pipeline</h2>
        <ol class="pipeline">
          <li><span>PBX</span> Recording exists (MikoPBX and other API-capable PBXs)</li>
          <li><span>ASR</span> Transcript, local option for BY / RU / EN</li>
          <li><span>Extract</span> Rate, currency, lane, ETA — not «as usual» promises</li>
          <li><span>Score</span> Coaching signal for the owner, not a public ranking of curators</li>
          <li><span>Draft</span> Fields on the TMS document, awaiting approve</li>
          <li><span>HITL</span> Human confirms. Then writeback. Not L3 autonomy.</li>
        </ol>
        <p class="package-note">SMART is an overlay on the live TMS (Domino today, API tomorrow). It is not a blocker for <a href="/en/next">NEXT</a> and not a substitute for <a href="/en/">Care</a>.</p>
      </div>
    </section>
    <section class="section products-alt" aria-labelledby="score-title">
      <div class="wrap">
        <h2 id="score-title">Sample scorecard</h2>
        <p class="section-lead">Fictional numbers. Labelled sample. Not a client recording.</p>
        <article class="scorecard" aria-label="Sample call scorecard">
          <p class="scorecard-kicker">sample</p>
          <header>
            <p>Call 14:22 · client «Nordholz» · 6m 40s</p>
            <p class="scorecard-score">72 <span>coaching</span></p>
          </header>
          <dl>
            <div><dt>Rate</dt><dd>EUR 1,850</dd></div>
            <div><dt>Lane</dt><dd>DE → LT</dd></div>
            <div><dt>ETA</dt><dd>Fri 18:00</dd></div>
            <div><dt>Draft</dt><dd>Complex service for the client · awaiting approve</dd></div>
          </dl>
          <p>Not extracted: «same as last week», side promises, anything the curator must still confirm.</p>
        </article>
      </div>
    </section>
    <section class="section packages" aria-labelledby="smart-price">
      <div class="wrap">
        <h2 id="smart-price">Indicative retainers</h2>
        <div class="package-grid">
          <article class="package">
            <h3>Starter</h3>
            <p class="package-price">from $800<span>/mo</span></p>
            <p class="package-tag">Pilot</p>
            <ul>
              <li>One PBX, one team</li>
              <li>Transcripts + extract drafts</li>
              <li>HITL on every writeback</li>
            </ul>
          </article>
          <article class="package package-featured">
            <h3>Growth</h3>
            <p class="package-price">$1.5–2.5k<span>/mo</span></p>
            <p class="package-tag">Coaching</p>
            <ul>
              <li>Scorecards for the owner</li>
              <li>Telegram Q&amp;A on the knowledge base</li>
              <li>Weekly digest</li>
            </ul>
          </article>
          <article class="package">
            <h3>Ops</h3>
            <p class="package-price">$2.5–4k<span>/mo</span></p>
            <p class="package-tag">Operations</p>
            <ul>
              <li>Dedicated capacity</li>
              <li>More queues / lanes</li>
              <li>KPI review</li>
            </ul>
          </article>
        </div>
        <p class="package-note">ASR/LLM usage billed as pass-through + 20–30%. 60–90 day pilot, forwarder in BY/CEE, MikoPBX and other API-capable PBXs. Not a dialer. Not a live voice-agent.</p>
      </div>
    </section>
    <section class="section contact" id="pilot" aria-labelledby="pilot-title">
      <div class="wrap contact-inner">
        <h2 id="pilot-title">Request a SMART pilot</h2>
        <p class="form-status" data-form-status tabindex="-1" hidden>Message sent. We will reply to the address you provided.</p>
        <form class="lead-form" action="https://formsubmit.co/info@alfakit.by" method="POST">
          <input type="hidden" name="_subject" value="ALFAKIT SMART — pilot" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://alfakit.by/en/smart?sent=1#pilot" />
          <input type="hidden" name="topic" value="smart" />
          <input type="text" name="_honey" value="" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;opacity:0" />
          <div class="form-row">
            <label>Name<input type="text" name="name" required autocomplete="name" /></label>
            <label>Email<input type="email" name="email" required autocomplete="email" /></label>
          </div>
          <label>Company / TMS<input type="text" name="company" placeholder="PROLOG / ALFAKIT · PBX type" /></label>
          <label>What should land in the TMS<textarea name="message" placeholder="Rate from the client call, ETA, promises…"></textarea></label>
          <p class="form-note">Tell us the PBX and whether recording consent is already in place. No auto-write to production.</p>
          <div class="form-actions">
            <button class="btn btn-lg" type="submit">Request pilot</button>
          </div>
        </form>
        <p class="package-note">Same module was previously described at Semper In Motu · Ops. Canonical URL is now this page.</p>
      </div>
    </section>`;

export const smart_ru_html = `<section class="section page-head" id="top">
      <div class="wrap">
        <p class="section-kicker">AlfaKIT SMART</p>
        <h1>Разговор → действие в TMS, не диктофон</h1>
        <p class="section-lead">Ставка живёт в звонке. Карточка комплексной услуги клиенту пустая. Маржа уже съедена. SMART ставит draft на документ — человек подтверждает — потом запись. Без тихой перезаписи прод-полей.</p>
        <div class="hero-cta">
          <a class="btn" href="#pilot">Запросить пилот</a>
          <a class="btn btn-ghost" href="/#contact">Сначала Care / аудит</a>
        </div>
      </div>
    </section>
    <section class="section" aria-labelledby="pipe-title">
      <div class="wrap">
        <h2 id="pipe-title">Пайплайн</h2>
        <ol class="pipeline">
          <li><span>АТС</span> Запись есть (MikoPBX и другие АТС с API)</li>
          <li><span>ASR</span> Транскрипт, локальный вариант для BY / RU / EN</li>
          <li><span>Extract</span> Ставка, валюта, плечо, ETA — не обещания «как обычно»</li>
          <li><span>Score</span> Сигнал владельцу для coaching, не публичный рейтинг кураторов</li>
          <li><span>Draft</span> Поля на документе TMS, ждут approve</li>
          <li><span>HITL</span> Человек подтверждает. Потом запись. Не автономия L3.</li>
        </ol>
        <p class="package-note">SMART — слой поверх живой TMS (сегодня Domino, завтра API). Не блокер <a href="/next">NEXT</a> и не замена <a href="/">Care</a>.</p>
      </div>
    </section>
    <section class="section products-alt" aria-labelledby="score-title">
      <div class="wrap">
        <h2 id="score-title">Sample scorecard</h2>
        <p class="section-lead">Вымышленные цифры. Метка sample. Не запись клиента.</p>
        <article class="scorecard" aria-label="Пример карточки звонка">
          <p class="scorecard-kicker">sample</p>
          <header>
            <p>Звонок 14:22 · клиент «Nordholz» · 6 мин 40 с</p>
            <p class="scorecard-score">72 <span>coaching</span></p>
          </header>
          <dl>
            <div><dt>Ставка</dt><dd>EUR 1,850</dd></div>
            <div><dt>Плечо</dt><dd>DE → LT</dd></div>
            <div><dt>ETA</dt><dd>пт 18:00</dd></div>
            <div><dt>Draft</dt><dd>Комплексная услуга клиенту · ждёт подтверждения</dd></div>
          </dl>
          <p>Не извлекаем: «как на прошлой неделе», боковые обещания, всё, что куратор ещё должен подтвердить.</p>
        </article>
      </div>
    </section>
    <section class="section packages" aria-labelledby="smart-price">
      <div class="wrap">
        <h2 id="smart-price">Ориентиры</h2>
        <div class="package-grid">
          <article class="package">
            <h3>Starter</h3>
            <p class="package-price">от 2 500<span class="byn-sign" aria-label="BYN"></span><span>/мес</span></p>
            <p class="package-tag">Пилот</p>
            <ul>
              <li>Одна АТС, одна команда</li>
              <li>Транскрипты + draft extract</li>
              <li>HITL на каждую запись</li>
            </ul>
          </article>
          <article class="package package-featured">
            <h3>Growth</h3>
            <p class="package-price">4 600–7 700<span class="byn-sign" aria-label="BYN"></span><span>/мес</span></p>
            <p class="package-tag">Coaching</p>
            <ul>
              <li>Карточки скоринга владельцу</li>
              <li>Q&amp;A в Telegram по базе</li>
              <li>Недельный digest</li>
            </ul>
          </article>
          <article class="package">
            <h3>Ops</h3>
            <p class="package-price">7 700–12 300<span class="byn-sign" aria-label="BYN"></span><span>/мес</span></p>
            <p class="package-tag">Операции</p>
            <ul>
              <li>Выделенная ёмкость</li>
              <li>Больше очередей / плеч</li>
              <li>Разбор KPI</li>
            </ul>
          </article>
        </div>
        <p class="package-note">ASR/LLM — pass-through + 20–30%. Пилот 60–90 дней, экспедитор BY/CEE, MikoPBX и другие АТС с API. Не dialer. Не голосовой агент в эфире.</p>
      </div>
    </section>
    <section class="section contact" id="pilot" aria-labelledby="pilot-title">
      <div class="wrap contact-inner">
        <h2 id="pilot-title">Запросить пилот SMART</h2>
        <p class="form-status" data-form-status tabindex="-1" hidden>Заявка отправлена. Ответим на указанный email.</p>
        <form class="lead-form" action="https://formsubmit.co/info@alfakit.by" method="POST">
          <input type="hidden" name="_subject" value="AlfaKIT SMART — pilot" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://alfakit.by/smart?sent=1#pilot" />
          <input type="hidden" name="topic" value="smart" />
          <input type="text" name="_honey" value="" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;opacity:0" />
          <div class="form-row">
            <label>Имя<input type="text" name="name" required autocomplete="name" /></label>
            <label>Email<input type="email" name="email" required autocomplete="email" /></label>
          </div>
          <label>Компания / TMS<input type="text" name="company" placeholder="ПРОЛОГ / AlfaKIT · тип АТС" /></label>
          <label>Что должно попасть в TMS<textarea name="message" placeholder="Ставка со звонка клиенту, ETA, обещания…"></textarea></label>
          <p class="form-note">Напишите АТС и есть ли согласие на запись. Автозаписи в прод нет.</p>
          <div class="form-actions">
            <button class="btn btn-lg" type="submit">Запросить пилот</button>
          </div>
        </form>
        <p class="package-note">Раньше модуль описывался на Semper In Motu · Ops. Канонический URL теперь здесь.</p>
      </div>
    </section>`;
