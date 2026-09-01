(() => {
  const tablist = document.querySelector('[data-detail-tabs]');
  if (!tablist) return;

  const tabs = [...tablist.querySelectorAll('[data-tab]')];
  const panels = [...document.querySelectorAll('[data-detail-panel]')];

  const activate = (id) => {
    tabs.forEach((tab) => {
      const on = tab.dataset.tab === id;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach((panel) => {
      const on = panel.dataset.detailPanel === id;
      panel.hidden = !on;
      panel.classList.toggle('is-active', on);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activate(tab.dataset.tab));
    tab.addEventListener('keydown', (event) => {
      const idx = tabs.indexOf(tab);
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        tabs[(idx + 1) % tabs.length].focus();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        tabs[(idx - 1 + tabs.length) % tabs.length].focus();
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate(tab.dataset.tab);
      }
    });
  });
})();
