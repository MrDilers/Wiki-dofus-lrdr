const classIcons = {
  cra: "assets/icons/classes/classe-cra.png",
  ecaflip: "assets/icons/classes/classe-ecaflip.png",
  eniripsa: "assets/icons/classes/classe-eniripsa.png",
  enutrof: "assets/icons/classes/classe-enutrof.png",
  feca: "assets/icons/classes/classe-feca.png",
  iop: "assets/icons/classes/classe-iop.png",
  osamodas: "assets/icons/classes/classe-osamodas.png",
  pandawa: "assets/icons/classes/classe-pandawa.png",
  sacrieur: "assets/icons/classes/classe-sacrieur.png",
  sadida: "assets/icons/classes/classe-sadida.png",
  sram: "assets/icons/classes/classe-sram.png",
  xelor: "assets/icons/classes/classe-xelor.png",
};

const elementIcons = {
  Air: "assets/icons/elements/element-air.png",
  Eau: "assets/icons/elements/element-eau.png",
  Feu: "assets/icons/elements/element-feu.png",
  Neutre: "assets/icons/elements/element-neutre.png",
  Terre: "assets/icons/elements/element-terre.png",
};

const state = {
  classId: window.location.hash.slice(1) || "cra",
  query: "",
  levels: new Map(),
};

const classes = window.LRDR_CLASSES || [];
const spellsByClass = window.LRDR_CUSTOM_SPELLS || {};
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function className(classId) {
  return classes.find((item) => item.id === classId)?.name || classId;
}

function spellLevel(spell, index) {
  const key = `${state.classId}:${spell.spellId ?? spell.id ?? index}`;
  const selected = state.levels.get(key) || spell.selectedLevel || 6;
  return { key, selected, data: { ...spell, ...(spell.levelData?.[String(selected)] || {}) } };
}

function effectIcon(element) {
  const icon = elementIcons[element] || elementIcons.Neutre;
  return `<img src="${icon}" alt="" aria-hidden="true">`;
}

function renderEffects(effects) {
  if (!effects?.length) return '<li class="empty-effect">Aucun effet</li>';
  return effects
    .map((effect) => `
      <li>
        ${effectIcon(effect.element)}
        <span title="${escapeHtml(effect.text)}">${escapeHtml(effect.text)}</span>
        ${effect.area ? `<small title="Zone de ${escapeHtml(effect.area)} cases">${escapeHtml(effect.area)} (C)</small>` : effect.meta ? `<small title="${escapeHtml(effect.meta)}">${escapeHtml(effect.meta)}</small>` : ""}
      </li>
    `)
    .join("");
}

function ruleValue(value) {
  if (typeof value !== "boolean") return escapeHtml(value);
  return `<i class="${value ? "yes" : "no"}" aria-label="${value ? "Oui" : "Non"}">${value ? "✓" : "×"}</i>`;
}

function renderSpellCard(spell, index) {
  const { key, selected, data } = spellLevel(spell, index);
  const normal = data.tabs?.[0]?.effects || [];
  const critical = data.tabs?.[1]?.effects || [];
  const quickStats = (data.characteristics || []).slice(0, 5);
  const rules = (data.rules || []).slice(0, 5);
  return `
    <article class="test-spell-card" data-element="${escapeHtml(data.element)}" data-spell-key="${escapeHtml(key)}">
      <header class="compact-spell-head">
        <img class="compact-spell-icon" src="${escapeHtml(data.icon)}" alt="">
        <div class="compact-spell-title">
          <h3 title="${escapeHtml(data.name)}">${escapeHtml(data.name)}</h3>
          <span>${effectIcon(data.element)}${escapeHtml(data.element)}</span>
        </div>
        <strong>Niv. ${escapeHtml(data.requiredLevel)}</strong>
      </header>

      <div class="compact-levels" aria-label="Niveaux de ${escapeHtml(data.name)}">
        ${(data.levels || [1, 2, 3, 4, 5, 6]).map((level) => `<button type="button" class="${Number(level) === Number(selected) ? "active" : ""}" data-level="${level}" aria-pressed="${Number(level) === Number(selected)}">${level}</button>`).join("")}
      </div>

      <div class="compact-costs"><b>${escapeHtml(data.ap)}</b><b>${escapeHtml(data.range)}</b><span>CC ${escapeHtml(quickStats[0]?.[1] || "-")}</span></div>
      <div class="compact-description-wrap">
        <p class="compact-description" title="${escapeHtml(data.description)}">${escapeHtml(data.description)}</p>
        <input class="description-slider" type="range" min="0" max="0" value="0" aria-label="Faire défiler la description de ${escapeHtml(data.name)}" title="Faire défiler la description" hidden>
      </div>

      <div class="compact-effects">
        <section><h4>Normaux</h4><ul>${renderEffects(normal)}</ul></section>
        <section><h4>Critiques</h4><ul>${renderEffects(critical)}</ul></section>
      </div>

      <dl class="compact-rules">
        ${quickStats.slice(1).map(([label, value]) => `<div><dt title="${escapeHtml(label)}">${escapeHtml(label)}</dt><dd title="${escapeHtml(value)}">${escapeHtml(value)}</dd></div>`).join("")}
        ${rules.map(([label, value]) => `<div><dt title="${escapeHtml(label)}">${escapeHtml(label)}</dt><dd title="${typeof value === "boolean" ? (value ? "Oui" : "Non") : escapeHtml(value)}">${ruleValue(value)}</dd></div>`).join("")}
      </dl>
    </article>
  `;
}

function renderClassPicker() {
  $("#testClassPicker").innerHTML = classes
    .filter((item) => spellsByClass[item.id]?.length)
    .map((item) => `
      <button type="button" class="class-pick ${item.id === state.classId ? "active" : ""}" data-class="${item.id}" role="tab" aria-selected="${item.id === state.classId}" title="${escapeHtml(item.name)}">
        <img src="${classIcons[item.id]}" alt=""><span>${escapeHtml(item.name)}</span>
      </button>
    `)
    .join("");
}

function syncDescriptionSliders(root = document) {
  window.requestAnimationFrame(() => {
    root.querySelectorAll(".compact-description-wrap").forEach((wrap) => {
      const description = wrap.querySelector(".compact-description");
      const slider = wrap.querySelector(".description-slider");
      const maxScroll = Math.max(0, description.scrollHeight - description.clientHeight);
      const hasOverflow = maxScroll > 2;
      wrap.classList.toggle("has-overflow", hasOverflow);
      slider.hidden = !hasOverflow;
      slider.max = String(Math.ceil(maxScroll));
      slider.value = String(Math.min(description.scrollTop, maxScroll));
    });
  });
}

function renderSpells() {
  const classItem = classes.find((item) => item.id === state.classId) || classes[0];
  if (!classItem) return;
  const spells = (spellsByClass[state.classId] || []).filter((spell) => {
    if (!state.query) return true;
    return normalize(JSON.stringify(spell)).includes(normalize(state.query));
  });
  $("#selectedClassIcon").src = classIcons[state.classId];
  $("#selectedClassIcon").alt = classItem.name;
  $("#selectedClassName").textContent = classItem.name;
  $("#testSpellCount").textContent = `${spells.length} sort${spells.length > 1 ? "s" : ""} modifié${spells.length > 1 ? "s" : ""}`;
  $("#testSpellGrid").innerHTML = spells.length
    ? spells.map(renderSpellCard).join("")
    : '<p class="test-empty">Aucun sort ne correspond à la recherche.</p>';
  syncDescriptionSliders($("#testSpellGrid"));
}

$("#testClassPicker").addEventListener("click", (event) => {
  const button = event.target.closest("[data-class]");
  if (!button) return;
  state.classId = button.dataset.class;
  window.history.replaceState(null, "", `#${state.classId}`);
  renderClassPicker();
  renderSpells();
});

$("#testSpellGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (!button) return;
  const card = button.closest("[data-spell-key]");
  const key = card.dataset.spellKey;
  state.levels.set(key, Number(button.dataset.level));
  const spellId = key.slice(key.indexOf(":") + 1);
  const spells = spellsByClass[state.classId] || [];
  const index = spells.findIndex((spell, spellIndex) => String(spell.spellId ?? spell.id ?? spellIndex) === spellId);
  if (index >= 0) {
    card.outerHTML = renderSpellCard(spells[index], index);
    syncDescriptionSliders($("#testSpellGrid"));
  }
});

$("#testSpellGrid").addEventListener("input", (event) => {
  const slider = event.target.closest(".description-slider");
  if (!slider) return;
  const description = slider.closest(".compact-description-wrap").querySelector(".compact-description");
  description.scrollTop = Number(slider.value);
});

$("#testSpellGrid").addEventListener(
  "scroll",
  (event) => {
    if (!event.target.classList.contains("compact-description")) return;
    const slider = event.target.closest(".compact-description-wrap").querySelector(".description-slider");
    slider.value = String(event.target.scrollTop);
  },
  true,
);

$("#testSearch").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderSpells();
});

if (!spellsByClass[state.classId]) state.classId = "cra";
renderClassPicker();
renderSpells();
window.addEventListener("resize", () => syncDescriptionSliders($("#testSpellGrid")), { passive: true });
