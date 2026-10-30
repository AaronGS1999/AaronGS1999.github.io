/* ==========================================================================
   Aaron Gálvez Salido — lógica de la web
   Pinta todo el contenido a partir de data/content.js.
   No hace falta tocar este archivo para actualizar la web.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) { console.error("Falta data/content.js"); return; }
  var root = document.documentElement;
  root.classList.remove("no-js");

  /* ─────────── Textos de la interfaz ─────────── */
  var UI = {
    es: {
      skip: "Saltar al contenido",
      "nav.about": "Sobre mí", "nav.publications": "Publicaciones", "nav.software": "Software",
      "nav.notebooks": "Cuadernos", "nav.conferences": "Congresos", "nav.timeline": "Trayectoria", "nav.contact": "Contacto",  "about.title": "Sobre mí",
      "about.interests": "Intereses", "about.education": "Formación",  "pubs.title": "Publicaciones", "pubs.search": "Buscar",
      "pubs.all": "Todas", "pubs.article": "Artículos", "pubs.review": "Revisiones", "pubs.teaching": "Docencia",
      "pubs.empty": "No hay resultados para esa búsqueda.",
      "one.article": "Artículo", "one.review": "Revisión", "one.teaching": "Docencia",  "soft.title": "Aplicaciones y software", 
      "nb.title": "Cuadernos de Google Colab",  "nb.open": "Abrir en Colab",  "conf.title": "Congresos",  "proj.title": "Proyectos", "proj.current": "En curso",
      "teach.title": "Docencia", "out.title": "Divulgación", "serv.title": "Revisión", "tfg.title": "Trabajos Fin de Grado codirigidos",  "tl.title": "Trayectoria", "tl.all": "Todo",
      "tl.more": "Ver todo", "tl.less": "Ver menos",
      "cat.research": "Investigación", "cat.education": "Formación", "cat.publication": "Publicación",
      "cat.conference": "Congreso", "cat.course": "Curso", "cat.other": "Otros",  "contact.title": "Contacto", 
      "btn.email": "Correo", "btn.cv": "Descargar CV", "btn.pubs": "Publicaciones",
      "l.doi": "DOI", "l.read": "Leer", "l.code": "Código", "l.demo": "Abrir app", "l.repo": "GitHub", "l.paper": "Artículo", "l.repo2": "Repositorio UGR",
      "oa": "Acceso abierto",
      "theme": "Cambiar tema", "menu": "Menú",
      "months": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], 
      "title": "Aaron Gálvez Salido · Genómica evolutiva de plantas"
    },
    en: {
      skip: "Skip to content",
      "nav.about": "About", "nav.publications": "Publications", "nav.software": "Software",
      "nav.notebooks": "Notebooks", "nav.conferences": "Conferences", "nav.timeline": "Timeline", "nav.contact": "Contact",  "about.title": "About",
      "about.interests": "Interests", "about.education": "Education",  "pubs.title": "Publications", "pubs.search": "Search",
      "pubs.all": "All", "pubs.article": "Articles", "pubs.review": "Reviews", "pubs.teaching": "Teaching",
      "pubs.empty": "No results for that search.",
      "one.article": "Article", "one.review": "Review", "one.teaching": "Teaching",  "soft.title": "Apps and software", 
      "nb.title": "Google Colab notebooks",  "nb.open": "Open in Colab",  "conf.title": "Conferences",  "proj.title": "Projects", "proj.current": "Ongoing",
      "teach.title": "Teaching", "out.title": "Outreach", "serv.title": "Peer review", "tfg.title": "Co-supervised Bachelor's theses",  "tl.title": "Timeline", "tl.all": "All",
      "tl.more": "Show all", "tl.less": "Show less",
      "cat.research": "Research", "cat.education": "Education", "cat.publication": "Publication",
      "cat.conference": "Conference", "cat.course": "Course", "cat.other": "Other",  "contact.title": "Contact", 
      "btn.email": "Email", "btn.cv": "Download CV", "btn.pubs": "Publications",
      "l.doi": "DOI", "l.read": "Read", "l.code": "Code", "l.demo": "Open app", "l.repo": "GitHub", "l.paper": "Paper", "l.repo2": "UGR repository",
      "oa": "Open access",
      "theme": "Toggle theme", "menu": "Menu",
      "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
      "title": "Aaron Gálvez Salido · Plant evolutionary genomics"
    }
  };

  /* ─────────── Iconos (SVG de trazo, genéricos) ─────────── */
  var ICON = {
    arrow: '<svg viewBox="0 0 16 16"><path d="M5 11l6-6M6 5h5v5"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 10v6M9 7.5v.01M12.5 16v-6h1.8a3 3 0 0 1 0 6z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5L12 4l9.5 5.5L12 15z"/><path d="M6.5 12v4.5c3 2.5 8 2.5 11 0V12"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9 16V8h2.5a2 2 0 0 1 0 4H9M11.5 12l3 4"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    // Tarjetas
    map: '<svg viewBox="0 0 24 24"><path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/></svg>',
    ai: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2.5"/><path d="M9.5 10h5v4h-5zM9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    cell: '<svg viewBox="0 0 24 24"><path d="M3 12h3l2-5 4 10 2-5h7"/></svg>',
    dna: '<svg viewBox="0 0 24 24"><path d="M7 3c0 6 10 6 10 12 0 3-2 5-2 6M17 3c0 6-10 6-10 12 0 3 2 5 2 6M8.5 7h7M8.5 17h7M10 12h4"/></svg>',
    calc: '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/></svg>',
    chromosome: '<svg viewBox="0 0 24 24"><path d="M8 3c-2 2-2 7 1.5 9C6 14 6 19 8 21M16 3c2 2 2 7-1.5 9 3.5 2 3.5 7 1.5 9M9.5 12h5"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/></svg>',
    notebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 3v18M11.5 8l2 2-2 2M14.5 12h1.5"/></svg>'
  };

  /* ─────────── Utilidades ─────────── */
  var lang = root.lang === "en" ? "en" : "es";
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  // *texto* → cursiva (nombres científicos)
  var rich = function (s) {
    return esc(s).replace(/\*([^*]+)\*/g, function (_, t) { return "<em>" + t.replace(/\. /g, ".&nbsp;") + "</em>"; });
  };
  var tr = function (v) { return v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.es || v.en || "") : (v || ""); };
  var ui = function (k) { return (UI[lang] && UI[lang][k]) || UI.es[k] || k; };
  var ext = function (url, label, cls) {
    return '<a class="' + (cls || "link") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + ICON.arrow + "</a>";
  };
  var meRx = /(G[aá]lvez[- ]Salido,?\s*A\.?(?:ar[oó]n)?)/g;
  var hlMe = function (s) { return esc(s).replace(meRx, "<b>$1</b>"); };
  var fmtMonth = function (d) {
    var p = String(d).split("-");
    return ui("months")[parseInt(p[1], 10) - 1] + " " + p[0];
  };

  /* ─────────── Hero ─────────── */
  function renderHero() {
    var P = S.profile;
    var av = $("#avatar");
    av.innerHTML = '<span>' + esc(P.initials) + "</span>";
    if (P.photo) {
      var img = new Image();
      img.alt = P.name;
      img.onload = function () { av.innerHTML = ""; av.appendChild(img); };
      img.src = P.photo;
    }
    $("#heroAffiliation").textContent = tr(P.affiliation);
    $("#heroName").textContent = P.name;
    $("#heroRole").textContent = tr(P.role);

    var actions =
      '<a class="btn btn--primary" href="#publications">' + esc(ui("btn.pubs")) + "</a>" +
      '<a class="btn btn--ghost" href="mailto:' + esc(P.email) + '">' + ICON.mail + esc(ui("btn.email")) + "</a>";
    $("#heroActions").innerHTML = actions;

    $("#heroLinks").innerHTML = P.links.map(function (l) {
      return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + (ICON[l.type] || ICON.link) + esc(l.label) + "</a></li>";
    }).join("");


    // Contacto
    var cact = '<a class="btn btn--primary" href="mailto:' + esc(P.email) + '">' + ICON.mail + esc(P.email) + "</a>";
    if (P.cv) cact += '<a class="btn btn--ghost js-cv" href="' + esc(P.cv) + '" download hidden>' + ICON.download + esc(ui("btn.cv")) + "</a>";
    $("#contactActions").innerHTML = cact;
    checkCV();

    $("#footerCopy").textContent = "© " + new Date().getFullYear() + " " + P.name;
    $("#footerLinks").innerHTML = P.links.map(function (l) {
      return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a></li>";
    }).join("");
  }

  var cvOk = null;
  function checkCV() {
    var b = document.querySelector(".js-cv");
    if (!b) return;
    if (cvOk !== null) { b.hidden = !cvOk; return; }
    if (location.protocol === "file:") { cvOk = true; b.hidden = false; return; }
    fetch(S.profile.cv, { method: "HEAD" }).then(function (r) { cvOk = r.ok; }).catch(function () { cvOk = false; })
      .then(function () { var bb = document.querySelector(".js-cv"); if (bb) bb.hidden = !cvOk; });
  }

  /* ─────────── Sobre mí ─────────── */
  function renderAbout() {
    $("#bio").innerHTML = rich(tr(S.profile.bio));
    $("#interests").innerHTML = S.profile.interests.map(function (i) { return '<li class="chip">' + esc(tr(i)) + "</li>"; }).join("");
    $("#education").innerHTML = (S.education || []).map(function (e) {
      return "<li><strong>" + esc(tr(e.degree)) + "</strong><span>" + esc(tr(e.institution)) + " · " + esc(e.period) + "</span></li>";
    }).join("");
  }

  /* ─────────── Publicaciones ─────────── */
  var pubState = { type: "all", q: "" };
  function renderPubFilter() {
    var types = ["all", "article", "review", "teaching"].filter(function (t) {
      return t === "all" || S.publications.some(function (p) { return p.type === t; });
    });
    $("#pubFilter").innerHTML = types.map(function (t) {
      var n = t === "all" ? S.publications.length : S.publications.filter(function (p) { return p.type === t; }).length;
      return '<button type="button" role="tab" data-type="' + t + '" aria-selected="' + (pubState.type === t) + '">' + esc(ui("pubs." + t)) + "<small>" + n + "</small></button>";
    }).join("");
  }
  function renderPubs() {
    var q = pubState.q.trim().toLowerCase();
    var list = S.publications.slice().sort(function (a, b) { return b.year - a.year; }).filter(function (p) {
      if (pubState.type !== "all" && p.type !== pubState.type) return false;
      if (!q) return true;
      return [p.title, p.authors, p.journal, (p.tags || []).join(" ")].join(" ").replace(/\*/g, "").toLowerCase().indexOf(q) > -1;
    });
    if (!list.length) { $("#pubList").innerHTML = '<p class="empty">' + esc(ui("pubs.empty")) + "</p>"; return; }
    var byYear = {};
    list.forEach(function (p) { (byYear[p.year] = byYear[p.year] || []).push(p); });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });
    $("#pubList").innerHTML = years.map(function (y) {
      return '<div class="pub-year"><div class="pub-year__label">' + y + '</div><div class="pub-year__items">' +
        byYear[y].map(pubHTML).join("") + "</div></div>";
    }).join("");
  }
  function pubHTML(p) {
    var links = [];
    if (p.doi) links.push(ext("https://doi.org/" + p.doi, ui("l.doi")));
    if (p.url) links.push(ext(p.url, ui("l.read")));
    if (p.pdf) links.push(ext(p.pdf, "PDF"));
    if (p.repo) links.push(ext(p.repo, ui("l.repo2")));
    if (p.code) links.push(ext(p.code, ui("l.code")));
    var badges = '<span class="badge badge--muted">' + esc(ui("one." + p.type)) + "</span>";
    if (p.openAccess) badges += '<span class="badge badge--oa">' + esc(ui("oa")) + "</span>";
    return '<article class="pub">' +
      '<h3 class="pub__title">' + rich(p.title) + "</h3>" +
      '<p class="pub__authors">' + hlMe(p.authors) + "</p>" +
      '<p class="pub__venue"><em>' + esc(p.journal) + "</em>" + (p.details ? ", " + esc(p.details) : "") + "</p>" +
      '<div class="pub__meta">' + badges + links.join("") + "</div>" +
      "</article>";
  }

  /* ─────────── Software ─────────── */
  function renderSoftware() {
    $("#softList").innerHTML = S.software.map(function (s, i) {
      var links = [];
      if (s.demo) links.push(ext(s.demo, ui("l.demo")));
      if (s.repo) links.push(ext(s.repo, ui("l.repo")));
      if (s.paper) links.push(ext(s.paper, ui("l.paper")));
      (s.extra || []).forEach(function (e) { links.push(ext(e.url, tr(e.label))); });
      return '<article class="card reveal' + (i < 2 ? " card--wide" : "") + '">' +
        '<div class="card__icon" style="background:' + esc(s.color || "var(--accent)") + '">' + (ICON[s.icon] || ICON.code) + "</div>" +
        '<div class="card__head"><h3 class="card__title">' + esc(tr(s.name)) + "</h3>" + (s.year ? '<span class="card__year">' + s.year + "</span>" : "") + "</div>" +
        '<p class="card__desc">' + rich(tr(s.description)) + "</p>" +
        '<div class="card__stack">' + (s.stack || []).map(function (t) { return "<span>" + esc(tr(t)) + "</span>"; }).join("") + "</div>" +
        (links.length ? '<div class="card__links">' + links.join("") + "</div>" : "") +
        "</article>";
    }).join("");
  }

  /* ─────────── Cuadernos ─────────── */
  function renderNotebooks() {
    $("#nbList").innerHTML = S.notebooks.map(function (n) {
      return '<a class="nb reveal" href="' + esc(n.url) + '" target="_blank" rel="noopener">' +
        '<div class="nb__top"><span class="nb__logo">' + ICON.notebook + '</span><span class="nb__topic">' + esc(tr(n.topic)) + "</span></div>" +
        '<h3 class="nb__title">' + rich(tr(n.title)) + "</h3>" +
        (tr(n.description) ? '<p class="nb__desc">' + rich(tr(n.description)) + "</p>" : "") +
        '<span class="nb__cta">' + esc(ui("nb.open")) + ICON.arrow + "</span></a>";
    }).join("");
  }

  /* ─────────── Congresos ─────────── */
  function renderConferences() {
    var list = S.conferences.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    $("#confList").innerHTML = list.map(function (c) {
      var p = c.date.split("-");
      return '<article class="conf reveal">' +
        '<div class="conf__date"><span class="conf__month">' + esc(ui("months")[parseInt(p[1], 10) - 1]) + '</span><span class="conf__year">' + p[0] + "</span></div>" +
        "<div>" +
        '<h3 class="conf__title">' + rich(tr(c.title)) + "</h3>" +
        '<p class="conf__event">' + esc(tr(c.event)) + "</p>" +
        '<p class="conf__place">' + esc(tr(c.place)) + "</p>" +
        (c.authors ? '<p class="conf__authors">' + hlMe(c.authors) + "</p>" : "") +
        (c.doi || c.url ? '<p class="pub__meta">' + (c.doi ? ext("https://doi.org/" + c.doi, ui("l.doi")) : "") + (c.url ? ext(c.url, ui("l.read")) : "") + "</p>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ─────────── Proyectos, docencia, divulgación ─────────── */
  function renderProjects() {
    $("#projList").innerHTML = S.projects.map(function (p) {
      return '<article class="project reveal"><div>' +
        '<h3 class="project__title">' + rich(tr(p.title)) + "</h3>" +
        '<p class="project__meta"><span>' + esc(tr(p.funder)) + "</span><span>" + esc(p.code) + "</span><span>" + esc(tr(p.institution)) + "</span></p>" +
        '</div><div class="project__side"><div class="project__period">' + esc(p.period) + "</div>" +
        '<div class="project__role">' + esc(tr(p.role)) + "</div>" +
        (p.current ? '<div class="live">' + esc(ui("proj.current")) + "</div>" : "") +
        "</div></article>";
    }).join("");
    var simple = function (arr) {
      return (arr || []).map(function (x) {
        return "<li><strong>" + rich(tr(x.title)) + "</strong><span>" + esc(tr(x.where)) + (x.period ? " · " + esc(x.period) : "") + "</span></li>";
      }).join("");
    };
    $("#teachList").innerHTML = simple(S.teaching);
    $("#outList").innerHTML = simple(S.outreach);
    $("#servList").innerHTML = simple(S.service);
    $("#tfgList").innerHTML = (S.theses || []).map(function (t) {
      return "<li><strong>" + rich(tr(t.title)) + "</strong><span>" +
        [esc(t.student), esc(tr(t.degree)), esc(t.year), esc(tr(t.grade))].filter(Boolean).join(" · ") + "</span></li>";
    }).join("");
  }

  /* ─────────── Trayectoria ─────────── */
  var CAT_COLOR = {
    research: "var(--c-research)", education: "var(--c-education)", publication: "var(--c-publication)",
    conference: "var(--c-conference)", course: "var(--c-course)", other: "var(--c-other)"
  };
  var tlState = { cat: "all", expanded: false, limit: 10 };
  function renderTLFilter() {
    var cats = ["all"].concat(Object.keys(CAT_COLOR).filter(function (c) {
      return S.timeline.some(function (t) { return t.cat === c; });
    }));
    $("#tlFilter").innerHTML = cats.map(function (c) {
      var dot = c === "all" ? "" : '<span class="dot" style="background:' + CAT_COLOR[c] + '"></span>';
      return '<button type="button" role="tab" data-cat="' + c + '" aria-selected="' + (tlState.cat === c) + '">' + dot + esc(c === "all" ? ui("tl.all") : ui("cat." + c)) + "</button>";
    }).join("");
  }
  function renderTimeline() {
    var items = S.timeline.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; })
      .filter(function (t) { return tlState.cat === "all" || t.cat === tlState.cat; });
    var shown = tlState.expanded ? items : items.slice(0, tlState.limit);
    var html = "", lastYear = null;
    shown.forEach(function (t, i) {
      var y = t.date.slice(0, 4);
      if (y !== lastYear) { html += '<li class="tl__year" aria-hidden="true"><span>' + y + "</span><span></span></li>"; lastYear = y; }
      html += '<li class="tl__item' + (i === 0 ? " is-latest" : "") + '" style="--c:' + (CAT_COLOR[t.cat] || "var(--accent)") + '">' +
        '<span class="tl__date">' + esc(fmtMonth(t.date)) + "</span>" +
        '<span class="tl__dot" aria-hidden="true"></span>' +
        '<p class="tl__body"><span class="tl__cat">' + esc(ui("cat." + t.cat)) + "</span>" + rich(tr(t.text)) + "</p></li>";
    });
    $("#tlList").innerHTML = html;
    var more = $("#tlMore");
    more.hidden = items.length <= tlState.limit;
    more.textContent = tlState.expanded ? ui("tl.less") : ui("tl.more") + " (" + items.length + ")";
  }

  /* ─────────── Idioma ─────────── */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) { el.placeholder = ui(el.getAttribute("data-i18n-placeholder")); });
    document.title = ui("title");
    $("#themeToggle").setAttribute("aria-label", ui("theme"));
    $("#menuToggle").setAttribute("aria-label", ui("menu"));
  }
  function renderAll() {
    applyStatic();
    renderHero(); renderAbout();
    renderPubFilter(); renderPubs();
    renderSoftware(); renderNotebooks(); renderConferences(); renderProjects();
    renderTLFilter(); renderTimeline();
    observeReveal();
  }
  function setLang(l) {
    lang = l; root.lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    renderAll();
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ─────────── Tema ─────────── */
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  }

  /* ─────────── Animación de entrada ─────────── */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;
  function observeReveal() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }


  /* ─────────── Navegación ─────────── */
  function initNav() {
    var nav = $("#nav");
    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    $("#menuToggle").addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      this.setAttribute("aria-expanded", open);
    });
    $("#navLinks").addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("is-open"); $("#menuToggle").setAttribute("aria-expanded", "false"); }
    });

    // Sección activa
    var links = Array.prototype.slice.call(document.querySelectorAll("#navLinks a"));
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      links.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });
    }
  }

  /* ─────────── Eventos ─────────── */
  function initEvents() {
    $("#langToggle").addEventListener("click", function () { setLang(lang === "es" ? "en" : "es"); });
    $("#themeToggle").addEventListener("click", toggleTheme);

    $("#pubFilter").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      pubState.type = b.getAttribute("data-type"); renderPubFilter(); renderPubs();
    });
    var timer;
    $("#pubSearch").addEventListener("input", function () {
      var v = this.value; clearTimeout(timer);
      timer = setTimeout(function () { pubState.q = v; renderPubs(); }, 120);
    });

    $("#tlFilter").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      tlState.cat = b.getAttribute("data-cat"); tlState.expanded = false;
      renderTLFilter(); renderTimeline();
    });
    $("#tlMore").addEventListener("click", function () {
      tlState.expanded = !tlState.expanded; renderTimeline();
      if (!tlState.expanded) document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ─────────── Inicio ─────────── */
  renderAll();
  initNav();
  initEvents();
  requestAnimationFrame(function () {
    document.querySelectorAll(".hero .reveal").forEach(function (el, i) {
      setTimeout(function () { el.classList.add("is-in"); }, 60 * i);
    });
  });
})();
