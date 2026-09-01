(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual && !reduceMotion) {
    const onMove = (event) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (event.clientX / w - 0.5) * 12;
      const y = (event.clientY / h - 0.5) * 8;
      heroVisual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
  }

  const revealTargets = document.querySelectorAll(
    ".platform-points li, .dual-block, .bpr-steps article, .cluster, .product, .role-card, .dash-figure, .support-item, .package, .case, .process-list li, .audience-list li, .contact-inner, .price-box, .continuity-grid li, .faq-list details, .lead-form"
  );

  if (!reduceMotion && "IntersectionObserver" in window && revealTargets.length) {
    document.documentElement.classList.add("js-anim");
    revealTargets.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  const copyBtn = document.querySelector("[data-copy]");
  if (copyBtn) {
    const label = copyBtn.textContent;
    const done = copyBtn.getAttribute("data-copied-label") || "Copied";
    copyBtn.addEventListener("click", async () => {
      const value = copyBtn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(value);
        copyBtn.textContent = done;
        copyBtn.classList.add("is-copied");
        window.setTimeout(() => {
          copyBtn.textContent = label;
          copyBtn.classList.remove("is-copied");
        }, 1800);
      } catch {
        window.prompt("Email:", value);
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const status = document.querySelector("[data-form-status]");
  if (status && (params.get("sent") === "1" || window.location.hash === "#sent")) {
    status.hidden = false;
    status.focus?.();
  }

  const LANG_KEY = "alfakit-lang";
  const LANG_PATH = { en: "/", ru: "/ru/", be: "/be/" };
  const HINT = {
    ru: ["Сайт доступен на русском", "Перейти"],
    be: ["Сайт даступны па-беларуску", "Перайсці"]
  };

  const remember = (lang) => {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* private mode: detection simply runs again next visit */
    }
  };

  document.querySelectorAll("[data-lang-switch] a[hreflang]").forEach((link) => {
    link.addEventListener("click", () => remember(link.getAttribute("hreflang")));
  });

  const root = document.documentElement;
  if (!root.hasAttribute("data-lang-root")) return;

  const forced = params.get("lang");
  if (forced && LANG_PATH[forced]) remember(forced);

  let stored = null;
  try {
    stored = window.localStorage.getItem(LANG_KEY);
  } catch {
    stored = null;
  }

  const tags = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""]
  ).map((tag) => tag.toLowerCase());

  const byLanguage = tags.find((tag) => tag.startsWith("be") || tag.startsWith("ru"));
  const byRegion = tags.find((tag) => /-(by|ru|kz)\b/.test(tag));
  const detected = byLanguage
    ? byLanguage.startsWith("be")
      ? "be"
      : "ru"
    : byRegion
      ? "ru"
      : null;

  if (!detected) return;

  if (!stored) {
    remember(detected);
    window.location.replace(LANG_PATH[detected] + window.location.hash);
    return;
  }

  // The visitor has already chosen English — offer the local version, do not force it.
  if (stored === "en") {
    const hint = document.querySelector("[data-lang-hint]");
    if (!hint) return;
    const [text, action] = HINT[detected];
    hint.querySelector("[data-lang-hint-text]").textContent = text;
    const go = hint.querySelector("[data-lang-hint-go]");
    go.textContent = action;
    go.href = LANG_PATH[detected];
    go.addEventListener("click", () => remember(detected));
    hint.querySelector("[data-lang-hint-close]").addEventListener("click", () => {
      hint.hidden = true;
    });
    hint.hidden = false;
  }
})();
