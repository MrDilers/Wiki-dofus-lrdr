(function () {
  const STORAGE_KEY = "lrdr-spell-editor-draft";
  const state = {
    data: clone(window.LRDR_CUSTOM_SPELLS || {}),
    original: clone(window.LRDR_CUSTOM_SPELLS || {}),
    classId: "",
    spellIndex: 0,
    fileHandle: null,
  };

  const $ = (selector) => document.querySelector(selector);

  const fields = {
    id: $("#fieldId"),
    name: $("#fieldName"),
    element: $("#fieldElement"),
    requiredLevel: $("#fieldRequiredLevel"),
    selectedLevel: $("#fieldSelectedLevel"),
    range: $("#fieldRange"),
    ap: $("#fieldAp"),
    icon: $("#fieldIcon"),
    sourceImage: $("#fieldSourceImage"),
    description: $("#fieldDescription"),
    normalEffects: $("#fieldNormalEffects"),
    criticalEffects: $("#fieldCriticalEffects"),
    characteristics: $("#fieldCharacteristics"),
    rules: $("#fieldRules"),
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value || {}));
  }

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setStatus(message) {
    $("#statusText").textContent = message;
  }

  function currentSpell() {
    return (state.data[state.classId] || [])[state.spellIndex];
  }

  function lineValue(value) {
    if (value === true) return "true";
    if (value === false) return "false";
    return value ?? "";
  }

  function effectsToText(effects = []) {
    return effects.map((effect) => [effect.element || "", effect.text || "", effect.meta || ""].filter(Boolean).join(" | ")).join("\n");
  }

  function pairsToText(pairs = []) {
    return pairs.map(([label, value]) => `${label} | ${lineValue(value)}`).join("\n");
  }

  function parseEffects(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [element = "Neutre", effectText = "", meta = ""] = line.split("|").map((part) => part.trim());
        return {
          element,
          text: effectText || line,
          ...(meta ? { meta } : {}),
        };
      });
  }

  function parseValue(value) {
    const normalized = normalize(value);
    if (["true", "oui", "vrai"].includes(normalized)) return true;
    if (["false", "non", "faux"].includes(normalized)) return false;
    return value;
  }

  function parsePairs(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [label = "", value = ""] = line.split("|").map((part) => part.trim());
        return [label || line, parseValue(value)];
      });
  }

  function renderClassSelect() {
    const classes = Object.keys(state.data);
    if (!classes.includes(state.classId)) state.classId = classes[0] || "";
    $("#classSelect").innerHTML = classes.map((id) => `<option value="${id}">${id}</option>`).join("");
    $("#classSelect").value = state.classId;
  }

  function renderSpellSelect() {
    const spells = state.data[state.classId] || [];
    if (state.spellIndex >= spells.length) state.spellIndex = 0;
    $("#spellSelect").innerHTML = spells.map((spell, index) => `<option value="${index}">${escapeHtml(spell.name)}</option>`).join("");
    $("#spellSelect").value = String(state.spellIndex);
    $("#spellList").innerHTML = spells
      .map((spell, index) => `<button type="button" class="${index === state.spellIndex ? "active" : ""}" data-spell-index="${index}">${escapeHtml(spell.name)}</button>`)
      .join("");
  }

  function fillForm() {
    const spell = currentSpell();
    if (!spell) return;
    $("#formTitle").textContent = spell.name;
    fields.id.value = spell.id || "";
    fields.name.value = spell.name || "";
    fields.element.value = spell.element || "Neutre";
    fields.requiredLevel.value = spell.requiredLevel ?? "";
    fields.selectedLevel.value = spell.selectedLevel ?? "";
    fields.range.value = spell.range || "";
    fields.ap.value = spell.ap || "";
    fields.icon.value = spell.icon || "";
    fields.sourceImage.value = spell.sourceImage || "";
    fields.description.value = spell.description || "";
    fields.normalEffects.value = effectsToText(spell.tabs?.[0]?.effects || []);
    fields.criticalEffects.value = effectsToText(spell.tabs?.[1]?.effects || []);
    fields.characteristics.value = pairsToText(spell.characteristics || []);
    fields.rules.value = pairsToText(spell.rules || []);
    renderPreview(readForm());
  }

  function readForm() {
    const normalEffects = parseEffects(fields.normalEffects.value);
    const criticalEffects = parseEffects(fields.criticalEffects.value);
    const sourceImage = fields.sourceImage.value.trim();
    return {
      id: fields.id.value.trim(),
      name: fields.name.value.trim(),
      element: fields.element.value,
      icon: fields.icon.value.trim(),
      requiredLevel: fields.requiredLevel.value.trim(),
      selectedLevel: Number(fields.selectedLevel.value) || 6,
      levels: [1, 2, 3, 4, 5, 6],
      range: fields.range.value.trim(),
      ap: fields.ap.value.trim(),
      ...(sourceImage ? { sourceImage } : {}),
      description: fields.description.value.trim(),
      tabs: [
        { label: "Normaux", effects: normalEffects },
        { label: "Critiques", effects: criticalEffects },
      ],
      characteristics: parsePairs(fields.characteristics.value),
      rules: parsePairs(fields.rules.value),
    };
  }

  function renderPreview(spell) {
    $("#spellPreview").innerHTML = `
      <article class="spell-card" data-element="${escapeHtml(spell.element)}">
        <header class="spell-card-head">
          <img class="spell-card-icon" src="../${escapeHtml(spell.icon)}" alt="">
          <div class="spell-card-title">
            <h4>${escapeHtml(spell.name)}</h4>
            <span>Niveau requis : ${escapeHtml(spell.requiredLevel)}</span>
          </div>
          <div class="spell-card-cost">
            <strong>${escapeHtml(spell.range)}</strong>
            <strong>${escapeHtml(spell.ap)}</strong>
          </div>
        </header>
        <p class="spell-card-description">${escapeHtml(spell.description)}</p>
        <section class="spell-card-effects">
          <h5>Effets</h5>
          <ul class="spell-effect-list">
            ${(spell.tabs[0].effects || []).map((effect) => `
              <li class="spell-effect-row">
                <span class="spell-effect-mark" aria-hidden="true"></span>
                <span>${escapeHtml(effect.text)}</span>
                ${effect.meta ? `<small>${escapeHtml(effect.meta)}</small>` : ""}
              </li>
            `).join("")}
          </ul>
        </section>
        <section class="spell-card-stats">
          <h5>Caracteristiques</h5>
          <div class="spell-stat-grid">
            ${(spell.characteristics || []).map(([label, value]) => `<p><span>${escapeHtml(label)}</span><strong>${escapeHtml(lineValue(value))}</strong></p>`).join("")}
          </div>
        </section>
      </article>
    `;
  }

  function applyForm() {
    const spell = readForm();
    state.data[state.classId][state.spellIndex] = spell;
    localStorage.setItem(STORAGE_KEY, serialize(state.data));
    renderSpellSelect();
    fillForm();
    setStatus("Modification appliquee en brouillon");
  }

  function serialize(data) {
    return `window.LRDR_CUSTOM_SPELLS = ${JSON.stringify(data, null, 2)};\n`;
  }

  function parseCustomFile(text) {
    const holder = { window: {} };
    Function("window", `${text}; return window.LRDR_CUSTOM_SPELLS;`)(holder.window);
    return holder.window.LRDR_CUSTOM_SPELLS;
  }

  async function copyFile() {
    await navigator.clipboard.writeText(serialize(state.data));
    setStatus("Fichier copie dans le presse-papiers");
  }

  function downloadFile() {
    const blob = new Blob([serialize(state.data)], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "spells-custom.js";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus("Telechargement prepare");
  }

  async function openLocalFile() {
    if (!window.showOpenFilePicker) {
      setStatus("Sauvegarde locale directe non supportee par ce navigateur");
      return;
    }
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: "JavaScript", accept: { "text/javascript": [".js"] } }],
      multiple: false,
    });
    const file = await handle.getFile();
    state.data = parseCustomFile(await file.text());
    state.original = clone(state.data);
    state.fileHandle = handle;
    $("#saveLocalFile").disabled = false;
    state.classId = Object.keys(state.data)[0] || "";
    state.spellIndex = 0;
    render();
    setStatus(`Fichier ouvert : ${file.name}`);
  }

  async function saveLocalFile() {
    if (!state.fileHandle) return;
    const writable = await state.fileHandle.createWritable();
    await writable.write(serialize(state.data));
    await writable.close();
    setStatus("Fichier local sauvegarde");
  }

  function restoreDraft() {
    const draft = localStorage.getItem(STORAGE_KEY);
    if (!draft) return;
    try {
      state.data = parseCustomFile(draft);
      state.original = clone(state.data);
      setStatus("Brouillon local restaure");
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function render() {
    renderClassSelect();
    renderSpellSelect();
    fillForm();
  }

  $("#classSelect").addEventListener("change", (event) => {
    state.classId = event.target.value;
    state.spellIndex = 0;
    render();
  });

  $("#spellSelect").addEventListener("change", (event) => {
    state.spellIndex = Number(event.target.value);
    renderSpellSelect();
    fillForm();
  });

  $("#spellList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-spell-index]");
    if (!button) return;
    state.spellIndex = Number(button.dataset.spellIndex);
    renderSpellSelect();
    fillForm();
  });

  $("#spellForm").addEventListener("submit", (event) => {
    event.preventDefault();
    applyForm();
  });

  Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => renderPreview(readForm()));
  });

  $("#copyFile").addEventListener("click", copyFile);
  $("#downloadFile").addEventListener("click", downloadFile);
  $("#openLocalFile").addEventListener("click", () => openLocalFile().catch((error) => setStatus(error.message)));
  $("#saveLocalFile").addEventListener("click", () => saveLocalFile().catch((error) => setStatus(error.message)));

  restoreDraft();
  render();
})();
