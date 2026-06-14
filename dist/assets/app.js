const state = {
  classes: [],
  pages: [],
  query: "",
  element: "Tous",
};

const elements = ["Tous", "Terre", "Feu", "Eau", "Air"];

const $ = (selector) => document.querySelector(selector);

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
    .filter((line) => /[A-ZÉÈÀÂÎÔÛÇ][a-zéèàâêîôûç]+/.test(line))
    .slice(0, 7);
}

function renderNav() {
  if (!$("#classNav")) return;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const homeCurrent = currentPage === "index.html" ? ' aria-current="page"' : "";
  const classesCurrent = currentPage === "classes.html" || currentPage === "classes" ? ' aria-current="page"' : "";
  const classLinks = state.classes
    .map((item) => `<a class="nav-child" href="classes.html#${item.id}"><span>${item.name}</span><small>${item.elements.join("/")}</small></a>`)
    .join("");

  $("#classNav").innerHTML = `
    <a class="nav-home" href="index.html"${homeCurrent}><span>Home</span><small>Accueil</small></a>
    <div class="nav-section-title">Categories</div>
    <a class="nav-category" href="classes.html"${classesCurrent}><span>Classes</span><small>${state.classes.length}</small></a>
    <div class="nav-children">
      ${classLinks}
    </div>
  `;
}

function renderFilters() {
  if (!$("#elementFilters")) return;
  $("#elementFilters").innerHTML = elements
    .map((element) => `<button class="chip ${state.element === element ? "active" : ""}" data-element="${element}">${element}</button>`)
    .join("");

  $("#elementFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    state.element = button.dataset.element;
    renderFilters();
    renderClasses();
  }, { once: true });
}

function matchesClass(item) {
  const text = normalize([
    item.name,
    item.elements.join(" "),
    item.roles.join(" "),
    item.build,
    item.pvm,
    pageText(item),
  ].join(" "));
  const elementOk = state.element === "Tous" || item.elements.includes(state.element);
  const queryOk = !state.query || text.includes(normalize(state.query));
  return elementOk && queryOk;
}

function renderClasses() {
  if (!$("#classesGrid")) {
    if ($("#classCount")) {
      $("#classCount").textContent = `${state.classes.length} classe${state.classes.length > 1 ? "s" : ""}`;
    }
    if ($("#homeClassCount")) {
      $("#homeClassCount").textContent = `${state.classes.length} fiche${state.classes.length > 1 ? "s" : ""} disponibles`;
    }
    return;
  }

  const visible = state.classes.filter(matchesClass);
  $("#classCount").textContent = `${visible.length} classe${visible.length > 1 ? "s" : ""}`;
  if ($("#homeClassCount")) {
    $("#homeClassCount").textContent = `${state.classes.length} fiche${state.classes.length > 1 ? "s" : ""}`;
  }
  $("#classesGrid").innerHTML = visible
    .map((item) => {
      const spells = extractSpells(pageText(item));
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
          <div class="spell-list">
            ${spells.map((spell) => `<span>${spell}</span>`).join("")}
          </div>
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
  const pages = state.pages.filter((page) => classItem.pages.includes(page.page));
  const text = pages.map((page) => `Page ${page.page}\n${page.text}`).join("\n\n");
  $("#dialogContent").innerHTML = `
    <div class="dialog-body">
      <p class="eyebrow">Fiche classe</p>
      <h2>${classItem.name}</h2>
      <p class="lead">${classItem.pvm}</p>
      <div class="tag-row">
        ${classItem.elements.map((element) => `<span class="tag">${element}</span>`).join("")}
        ${classItem.synergies.map((name) => `<span class="tag">Synergie: ${name}</span>`).join("")}
      </div>
      <div class="dialog-layout">
        <aside>
          <h3>Conseil build</h3>
          <p class="muted">${classItem.build}</p>
          <h3>OCR nettoyable</h3>
          <div class="ocr-box">${text}</div>
        </aside>
        <div class="page-stack">
          ${pages.map((page) => `<img src="${page.image}" alt="${classItem.name}, page ${page.page}">`).join("")}
        </div>
      </div>
    </div>
  `;
  $("#classDialog").showModal();
}

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

  renderNav();
  renderFilters();
  renderClasses();

  $("#searchInput")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderClasses();
  });

  $("#classesGrid")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open]");
    if (!button) return;
    renderDialog(state.classes.find((item) => item.id === button.dataset.open));
  });

  $("#closeDialog")?.addEventListener("click", () => $("#classDialog").close());
}

init().catch((error) => {
  document.body.innerHTML = `<main class="shell"><h1>Erreur de chargement</h1><p>${error.message}</p></main>`;
});
