const state = {
  classes: [],
  pages: [],
  spellPanels: {},
  wiki: { panoplies: [], guides: [] },
  query: "",
  element: "Tous",
  wikiQuery: "",
  wikiFilter: "Tous",
};

const elements = ["Tous", "Terre", "Feu", "Eau", "Air"];
const wikiFilters = ["Tous", "Panoplies", "Bonus", "PNJ", "Equipements evolutifs", "Donjons"];
const $ = (selector) => document.querySelector(selector);

// Effets visuels de la page d'accueil.
function initHomeEffects() {
  const home = document.querySelector(".home-layout");
  const motes = document.querySelector(".home-motes");
  const cards = document.querySelector(".home-categories");
  if (!home || !motes) return;

  motes.innerHTML = Array.from({ length: 52 }, (_, index) => {
    const left = (index * 29) % 100;
    const delay = (index % 16) * -1.05;
    const size = 2 + (index % 5);
    const drift = 14 + (index % 8) * 6;
    return `<span style="--x:${left}%;--delay:${delay}s;--size:${size}px;--drift:${drift}px"></span>`;
  }).join("");

  if (!cards || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
      const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
      home.style.setProperty("--mx", x);
      home.style.setProperty("--my", y);
    },
    { passive: true },
  );
}

function normalize(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function pageText(classItem) {
  return state.pages
    .filter((page) => classItem.pages.includes(page.page))
    .map((page) => page.text)
    .join("\n\n");
}

function extractSpells(text) {
  const ignored = /niveau|effets|autres|probabilite|lancer|cellules|requis|revanche|personnage|niveaux/i;
  return text
    .split(/\n/)
    .map((line) => line.replace(/[|()[\]{}<>]/g, " ").replace(/\s+/g, " ").trim())
    .filter((line) => line.length > 8 && line.length < 46)
    .filter((line) => !ignored.test(line))
    .filter((line) => /[A-Z][a-z]+/.test(line))
    .slice(0, 7);
}

function renderSpellPanels(classId, options = {}) {
  const panels = (state.spellPanels[classId] || []).slice(0, options.limit || 99);
  return `
    <div class="spell-panel-list">
      ${panels
        .map((panel) => `
          <details class="class-detail spell-detail">
            <summary>
              <strong>${panel.name}</strong>
              <span>Page ${panel.page}</span>
            </summary>
            <div class="spell-panel-card">
              <img src="${panel.image}" alt="${panel.name}">
            </div>
          </details>
        `)
        .join("")}
    </div>
  `;
}

function navCurrent(pageName) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  return currentPage === pageName ? ' aria-current="page"' : "";
}

function filterFromHash(hash = window.location.hash) {
  const target = hash.replace("#", "");
  if (!target) return "";
  return wikiFilters.find((filter) => sectionSlug(filter) === target || (filter === "Panoplies" && target === "panoplies")) || "";
}

// Menu lateral commun aux pages internes.
function renderNav() {
  if (!$("#siteNav")) return;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const onClasses = currentPage === "classes.html";
  const onWiki = currentPage === "wiki.html";

  const classLinks = state.classes
    .map((item) => `<a class="nav-child" href="classes.html#${item.id}"><span>${item.name}</span><small>${item.elements.join("/")}</small></a>`)
    .join("");
  const wikiLinks = [
    ["wiki.html#panoplies", "Panoplies", state.wiki.panoplies.length],
    ["wiki.html#bonus", "Bonus", "Guilde"],
    ["wiki.html#pnj", "PNJ", "Guides"],
    ["wiki.html#equipements-evolutifs", "Evolutifs", "Objets"],
    ["wiki.html#donjons", "Donjons", "Streak"],
  ]
    .map(([href, label, meta]) => {
      const active = onWiki && state.wikiFilter === label ? ' aria-current="page"' : "";
      return `<a class="nav-category" href="${href}"${active}><span>${label}</span><small>${meta}</small></a>`;
    })
    .join("");

  $("#siteNav").innerHTML = `
    <a class="nav-home" href="index.html"${navCurrent("index.html")}><span>Home</span><small>Accueil</small></a>
    <div class="nav-section-title">Categories</div>
    <a class="nav-category" href="classes.html"${navCurrent("classes.html")}><span>Classes</span><small>${state.classes.length}</small></a>
    ${onClasses ? `<div class="nav-children">${classLinks}</div>` : ""}
    ${wikiLinks}
  `;
}

// Recherche et filtres de la page Classes.
function renderFilters() {
  if (!$("#elementFilters")) return;
  $("#elementFilters").innerHTML = elements
    .map((element) => `<button class="chip ${state.element === element ? "active" : ""}" data-element="${element}">${element}</button>`)
    .join("");

  $("#elementFilters").addEventListener(
    "click",
    (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      state.element = button.dataset.element;
      renderFilters();
      renderClasses();
    },
    { once: true },
  );
}

function matchesClass(item) {
  const text = normalize([item.name, item.elements.join(" "), item.roles.join(" "), item.build, item.pvm, pageText(item)].join(" "));
  const elementOk = state.element === "Tous" || item.elements.includes(state.element);
  const queryOk = !state.query || text.includes(normalize(state.query));
  return elementOk && queryOk;
}

function renderClasses() {
  if (!$("#classesGrid")) {
    if ($("#classCount")) $("#classCount").textContent = `${state.classes.length} classes`;
    if ($("#homeClassCount")) $("#homeClassCount").textContent = `${state.classes.length} fiches disponibles`;
    return;
  }

  const visible = state.classes.filter(matchesClass);
  $("#classCount").textContent = `${visible.length} classe${visible.length > 1 ? "s" : ""}`;
  $("#classesGrid").innerHTML = visible
    .map((item) => {
      return `
        <article id="${item.id}" class="class-card">
          <header>
            <div>
              <p class="eyebrow">Pages ${item.pages.join(", ")}</p>
              <h3>${item.name}</h3>
            </div>
            <span class="muted">${item.roles[0]}</span>
          </header>
          <div class="tag-row">
            ${item.elements.map((element) => `<span class="tag">${element}</span>`).join("")}
            ${item.roles.map((role) => `<span class="tag">${role}</span>`).join("")}
          </div>
          <p>${item.build}</p>
          <p><strong>PvM.</strong> ${item.pvm}</p>
          <div class="card-actions">
            <button class="button" data-open="${item.id}">Voir la fiche</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDialog(classItem) {
  $("#dialogContent").innerHTML = `
    <div class="dialog-body">
      <p class="eyebrow">Fiche classe</p>
      <h2>${classItem.name}</h2>
      <p class="lead">${classItem.pvm}</p>
      <div class="tag-row">
        ${classItem.elements.map((element) => `<span class="tag">${element}</span>`).join("")}
        ${classItem.synergies.map((name) => `<span class="tag">Synergie: ${name}</span>`).join("")}
      </div>
      <div class="class-detail-list">
        <details class="class-detail">
          <summary>
            <strong>Sorts modifies</strong>
            <span>${(state.spellPanels[classItem.id] || []).length} sorts</span>
          </summary>
          ${renderSpellPanels(classItem.id)}
        </details>
      </div>
    </div>
  `;
  $("#classDialog").showModal();
}

// Recherche, filtres et rendu de la page Wiki.
function sectionSlug(category) {
  return normalize(category).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function guideText(guide) {
  return normalize([
    guide.title,
    guide.category,
    guide.intro,
    ...(guide.details || []),
    ...(guide.recipes || []).flat(),
    ...(guide.rewards || []).flat(),
    guide.note || "",
  ].join(" "));
}

function panoText(item) {
  return normalize([item.name, item.family, item.summary, item.tags.join(" ")].join(" "));
}

function matchesWikiItem(type, item) {
  const filterOk =
    state.wikiFilter === "Tous" ||
    (state.wikiFilter === "Panoplies" && type === "panoplie") ||
    item.category === state.wikiFilter;
  const text = type === "panoplie" ? panoText(item) : guideText(item);
  return filterOk && (!state.wikiQuery || text.includes(normalize(state.wikiQuery)));
}

function renderWikiFilters() {
  if (!$("#wikiFilters")) return;
  $("#wikiFilters").innerHTML = wikiFilters
    .map((filter) => `<button class="chip ${state.wikiFilter === filter ? "active" : ""}" data-wiki-filter="${filter}">${filter}</button>`)
    .join("");

  $("#wikiFilters").addEventListener(
    "click",
    (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      state.wikiFilter = button.dataset.wikiFilter;
      renderWikiFilters();
      renderWiki();
      renderNav();
      if (state.wikiFilter !== "Tous") {
        const slug = state.wikiFilter === "Panoplies" ? "panoplies" : sectionSlug(state.wikiFilter);
        history.replaceState(null, "", `#${slug}`);
      }
    },
    { once: true },
  );
}

function renderGuideCard(guide) {
  const recipes = guide.recipes
    ? `<table class="wiki-table"><tbody>${guide.recipes.map(([name, cost]) => `<tr><th>${name}</th><td>${cost}</td></tr>`).join("")}</tbody></table>`
    : "";
  const rewards = guide.rewards
    ? `<table class="wiki-table wiki-table-compact"><tbody>${guide.rewards.map(([level, reward]) => `<tr><th>Palier ${level}</th><td>${reward}</td></tr>`).join("")}</tbody></table>`
    : "";
  const media = [
    ...(guide.images || []).map((image) => `<img src="${image}" alt="${guide.title}">`),
    guide.video ? `<video src="${guide.video}" controls preload="metadata"></video>` : "",
  ].join("");

  return `
    <article id="${guide.id}" class="wiki-card guide-card">
      <div>
        <p class="eyebrow">${guide.category}</p>
        <h3>${guide.title}</h3>
        <p>${guide.intro}</p>
      </div>
      <ul class="wiki-list">${(guide.details || []).map((detail) => `<li>${detail}</li>`).join("")}</ul>
      ${recipes}
      ${rewards}
      ${guide.note ? `<p class="wiki-note">${guide.note}</p>` : ""}
      ${media ? `<div class="wiki-media">${media}</div>` : ""}
    </article>
  `;
}

function renderPanoCard(item) {
  return `
    <article id="${item.id}" class="wiki-card pano-card">
      <header>
        <div>
          <p class="eyebrow">${item.family}</p>
          <h3>${item.name}</h3>
        </div>
      </header>
      <p>${item.summary}</p>
      <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="pano-images">
        ${item.images.map((image) => `<button class="pano-image-button" type="button" data-image-src="${image}" data-image-alt="${item.name}"><img src="${image}" alt="${item.name}"></button>`).join("")}
      </div>
    </article>
  `;
}

function openImageDialog(src, alt) {
  const dialog = $("#imageDialog");
  const image = $("#imageDialogImg");
  const caption = $("#imageDialogCaption");
  if (!dialog || !image || !caption) return;

  image.src = src;
  image.alt = alt;
  caption.textContent = alt;
  dialog.showModal();
}

function renderWiki() {
  if (!$("#wikiSections")) return;

  const panoplies = state.wiki.panoplies.filter((item) => matchesWikiItem("panoplie", item));
  const guides = state.wiki.guides.filter((item) => matchesWikiItem("guide", item));
  const guideGroups = wikiFilters
    .filter((filter) => !["Tous", "Panoplies"].includes(filter))
    .map((category) => ({ category, items: guides.filter((guide) => guide.category === category) }))
    .filter((group) => group.items.length);

  const count = panoplies.length + guides.length;
  $("#wikiCount").textContent = `${count} fiche${count > 1 ? "s" : ""}`;
  if ($("#homePanoCount")) $("#homePanoCount").textContent = `${state.wiki.panoplies.length} fiches`;

  $("#wikiSections").innerHTML = `
    ${panoplies.length ? `
      <section id="panoplies" class="wiki-section">
        <div class="section-head">
          <p class="eyebrow">Equipements</p>
          <h2>Panoplies</h2>
        </div>
        <div class="pano-grid">${panoplies.map(renderPanoCard).join("")}</div>
      </section>
    ` : ""}
    ${guideGroups
      .map((group) => `
        <section id="${sectionSlug(group.category)}" class="wiki-section">
          <div class="section-head">
            <p class="eyebrow">Guide</p>
            <h2>${group.category}</h2>
          </div>
          <div class="guide-grid">${group.items.map(renderGuideCard).join("")}</div>
        </section>
      `)
      .join("")}
    ${count ? "" : `<p class="lead">Aucun resultat pour cette recherche.</p>`}
  `;
}

function initHashFilter() {
  if (!$("#wikiSections")) return;
  const matchingFilter = filterFromHash();
  if (matchingFilter) {
    state.wikiFilter = matchingFilter;
    renderWikiFilters();
    renderWiki();
    renderNav();
    requestAnimationFrame(() => document.getElementById(window.location.hash.replace("#", ""))?.scrollIntoView({ block: "start" }));
  }
}

function bindWikiHashNavigation() {
  if (!$("#wikiSections")) return;
  window.addEventListener("hashchange", initHashFilter);
}

// Initialisation commune.
async function init() {
  if (window.LRDR_CLASSES && window.LRDR_PAGES) {
    state.classes = window.LRDR_CLASSES;
    state.pages = window.LRDR_PAGES;
  } else {
    const [classes, pages] = await Promise.all([
      fetch("data/classes.json").then((response) => response.json()),
      fetch("data/ocr/classes-pages.json").then((response) => response.json()),
    ]);
    state.classes = classes;
    state.pages = pages;
  }

  if (window.LRDR_WIKI) {
    state.wiki = window.LRDR_WIKI;
  }
  if (window.LRDR_SPELL_PANELS) {
    state.spellPanels = window.LRDR_SPELL_PANELS;
  }

  renderNav();
  renderFilters();
  renderClasses();
  renderWikiFilters();
  renderWiki();
  initHashFilter();
  bindWikiHashNavigation();
  initHomeEffects();

  $("#searchInput")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderClasses();
  });

  $("#wikiSearchInput")?.addEventListener("input", (event) => {
    state.wikiQuery = event.target.value;
    renderWiki();
  });

  $("#classesGrid")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open]");
    if (!button) return;
    renderDialog(state.classes.find((item) => item.id === button.dataset.open));
  });

  $("#closeDialog")?.addEventListener("click", () => $("#classDialog").close());

  $("#wikiSections")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image-src]");
    if (!button) return;
    openImageDialog(button.dataset.imageSrc, button.dataset.imageAlt);
  });

  $("#closeImageDialog")?.addEventListener("click", () => $("#imageDialog").close());
  $("#imageDialog")?.addEventListener("click", (event) => {
    if (event.target.id === "imageDialog") event.target.close();
  });
}

init().catch((error) => {
  document.body.innerHTML = `<main class="shell"><h1>Erreur de chargement</h1><p>${error.message}</p></main>`;
});
