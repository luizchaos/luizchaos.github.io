(function () {
  "use strict";

  const C = window.CONTENT;
  const S = window.SHARED;
  const LANGS = ["en", "pt"];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

  /* ---------- Language ---------- */
  function detectLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(param)) return param;
    const saved = store.get("lang");
    if (LANGS.includes(saved)) return saved;
    return (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  let lang = detectLang();
  let stars = {};

  // `instant`: re-render without replaying the scroll animation (used on language switch / data refresh)
  function applyLang(next, instant = false) {
    lang = next;
    const t = C[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    $('meta[name="description"]').setAttribute("content", t.meta.description);

    $$("[data-i18n]").forEach((el) => {
      const val = get(t, el.dataset.i18n);
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const val = get(t, key);
        if (typeof val === "string") el.setAttribute(attr, val);
      });
    });
    // Button shows the language you'd switch TO
    $("[data-lang-label]").textContent = lang === "en" ? "PT" : "EN";

    renderAll(t);
    if (instant) $$(".reveal").forEach((el) => el.classList.add("visible"));
    observeReveals();
  }

  /* ---------- Renderers ---------- */
  const chevron =
    '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const repoIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M9 7h6"/></svg>';

  function renderAll(t) {
    $("#aboutFacts").innerHTML = t.about.facts
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("");

    $("#impactList").innerHTML = t.impact.items
      .map((i) => `<article class="impact-card reveal"><div class="impact-value">${esc(i.value)}</div><p>${esc(i.label)}</p></article>`)
      .join("");

    $("#experienceList").innerHTML = t.experience.items
      .map(
        (job, ji) => `
        <li class="tl-item reveal">
          <div class="tl-head"><h3>${esc(job.company)}</h3><span class="tl-period">${esc(job.period)}</span></div>
          <p class="tl-role">${esc(job.role)}</p>
          ${job.projects
            .map(
              (p, pi) => `
            <details class="tl-project"${ji === 0 && pi === 0 ? " open" : ""}>
              <summary><span><span class="p-name">${esc(p.name)}</span><span class="p-sum">${esc(p.summary)}</span></span>${chevron}</summary>
              <ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
            </details>`
            )
            .join("")}
        </li>`
      )
      .join("");

    $("#projectsList").innerHTML = S.projects
      .map((p) => {
        const url = `${S.github}/${p.repo}`;
        const star = stars[p.repo] ? `<span class="project-stars" title="Stars">★ ${stars[p.repo]}</span>` : "";
        return `
        <article class="project-card reveal${p.featured ? " featured" : ""}" data-repo="${esc(p.repo)}">
          <div class="project-top">${repoIcon}${star}</div>
          <h3><a href="${url}" target="_blank" rel="noopener">${esc(p.repo)}</a></h3>
          <p>${esc(t.projects.items[p.repo] || "")}</p>
          <ul class="tags"><li class="lang">${esc(p.lang)}</li>${p.tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </article>`;
      })
      .join("");

    $("#skillsList").innerHTML = Object.entries(S.skills)
      .map(
        ([key, items]) => `
        <div class="skill-group reveal">
          <h3>${esc(t.skills.groups[key])}</h3>
          <ul class="chips">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");

    $("#educationList").innerHTML = t.education.items
      .map((e) => `<li class="reveal"><strong>${esc(e.title)}</strong><span>${esc(e.org)}</span></li>`)
      .join("");
  }

  function paintStars() {
    $$(".project-card[data-repo]").forEach((card) => {
      const n = stars[card.dataset.repo];
      const top = $(".project-top", card);
      if (n && !$(".project-stars", top)) top.insertAdjacentHTML("beforeend", `<span class="project-stars" title="Stars">★ ${n}</span>`);
    });
  }

  /* ---------- Live star counts (optional, fails silently) ---------- */
  async function loadStars() {
    try {
      const cached = JSON.parse(sessionStorage.getItem("stars") || "null");
      if (cached) { stars = cached; return paintStars(); }
    } catch (e) {}
    try {
      const res = await fetch("https://api.github.com/users/luizchaos/repos?per_page=100");
      if (!res.ok) return;
      const repos = await res.json();
      repos.forEach((r) => { if (r.stargazers_count) stars[r.name] = r.stargazers_count; });
      try { sessionStorage.setItem("stars", JSON.stringify(stars)); } catch (e) {}
      paintStars();
    } catch (e) {}
  }

  /* ---------- Theme ---------- */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $('meta[name="theme-color"]').setAttribute("content", theme === "light" ? "#f6fafb" : "#0b1418");
    store.set("theme", theme);
  }

  /* ---------- Reveal on scroll ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }
    io = io || new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$(".reveal:not(.visible)").forEach((el) => io.observe(el));
  }

  /* ---------- Active nav link ---------- */
  function trackActiveSection() {
    const links = $$(".nav a");
    const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          map.get(e.target.id)?.classList.add("active");
        }
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) obs.observe(s); });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();

    applyLang(lang);
    loadStars();

    $("#langToggle").addEventListener("click", () => {
      const next = lang === "en" ? "pt" : "en";
      store.set("lang", next);
      const url = new URL(location.href);
      url.searchParams.set("lang", next);
      history.replaceState(null, "", url);
      applyLang(next, true);
    });

    $("#themeToggle").addEventListener("click", () => {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    const nav = $("#nav");
    const menuBtn = $("#menuToggle");
    const closeMenu = () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); };
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    $$(".nav a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    $("#copyEmail").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      try {
        await navigator.clipboard.writeText(S.email);
        btn.textContent = C[lang].contact.copied;
        setTimeout(() => (btn.textContent = C[lang].contact.copy), 1800);
      } catch (err) {
        location.href = `mailto:${S.email}`;
      }
    });

    if ("IntersectionObserver" in window) trackActiveSection();
  });
})();
