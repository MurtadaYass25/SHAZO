/**
 * shazo — App rendering logic
 * ----------------------------
 * Pure vanilla JS. Reads SYSTEMS + SYSTEM_ORDER from data.js and renders:
 *   1. The sidebar (systems + their topics)
 *   2. The content pane (selected topic's teaching points + references)
 *
 * No build step required — just include data.js before app.js in index.html.
 */

(function () {
  const state = {
    activeSystem: SYSTEM_ORDER[0] || null,
    activeTopic: null,
  };

  const sidebarEl = document.getElementById("sidebar");
  const contentEl = document.getElementById("content");

  function init() {
    // Default to the first topic of the first system, if one exists.
    const firstSystem = SYSTEMS[state.activeSystem];
    if (firstSystem && firstSystem.topics.length > 0) {
      state.activeTopic = firstSystem.topics[0].id;
    }
    renderSidebar();
    renderContent();
  }

  function selectSystem(systemKey) {
    state.activeSystem = systemKey;
    const sys = SYSTEMS[systemKey];
    state.activeTopic = sys && sys.topics.length > 0 ? sys.topics[0].id : null;
    renderSidebar();
    renderContent();
  }

  function selectTopic(systemKey, topicId) {
    state.activeSystem = systemKey;
    state.activeTopic = topicId;
    renderSidebar();
    renderContent();
  }

  function renderSidebar() {
    const list = document.createElement("ul");
    list.className = "system-list";

    SYSTEM_ORDER.forEach((key) => {
      const system = SYSTEMS[key];
      if (!system) return;

      const item = document.createElement("li");
      item.className = "system-item";

      const button = document.createElement("button");
      button.className =
        "system-button" + (state.activeSystem === key ? " active" : "");
      button.setAttribute("aria-expanded", state.activeSystem === key);
      button.innerHTML = `<span>${system.name}</span><span class="tag">${system.icon}</span>`;
      button.addEventListener("click", () => selectSystem(key));
      item.appendChild(button);

      if (state.activeSystem === key) {
        if (system.topics.length === 0) {
          const note = document.createElement("div");
          note.className = "empty-note";
          note.textContent = "لا توجد مواضيع مضافة بعد";
          item.appendChild(note);
        } else {
          const subList = document.createElement("ul");
          subList.className = "topic-sublist";
          system.topics.forEach((topic) => {
            const topicItem = document.createElement("li");
            const topicButton = document.createElement("button");
            topicButton.textContent = topic.title;
            topicButton.className =
              state.activeTopic === topic.id ? "active" : "";
            topicButton.addEventListener("click", () =>
              selectTopic(key, topic.id)
            );
            topicItem.appendChild(topicButton);
            subList.appendChild(topicItem);
          });
          item.appendChild(subList);
        }
      }

      list.appendChild(item);
    });

    sidebarEl.innerHTML = "";
    const brand = document.createElement("div");
    brand.innerHTML = `
      <div class="brand">shazo</div>
      <div class="brand-tag">Pharmacology Reference</div>
    `;
    sidebarEl.appendChild(brand);
    sidebarEl.appendChild(list);
  }

  function renderContent() {
    const system = SYSTEMS[state.activeSystem];
    const topic =
      system && system.topics.find((t) => t.id === state.activeTopic);

    if (!topic) {
      contentEl.innerHTML = `
        <div class="welcome">
          <h1>مرحبًا بك في shazo</h1>
          <p>اختر نظامًا من القائمة الجانبية، ثم اختر أحد المواضيع لعرض محتواه.</p>
        </div>
      `;
      return;
    }

    const pointsHtml = topic.points
      .map(
        (point) => `
        <li class="point">
          <p>
            ${escapeHtml(point.text)}
            ${point.refs
              .map((r) => `<sup class="ref">(${r})</sup>`)
              .join("")}
          </p>
        </li>
      `
      )
      .join("");

    const referencesHtml = topic.references
      .map((ref) => `<li>${escapeHtml(ref)}</li>`)
      .join("");

    contentEl.innerHTML = `
      <div class="content-header">
        <p class="eyebrow">${escapeHtml(system.englishName)}</p>
        <h1>${escapeHtml(topic.title)}</h1>
        <p class="subtitle">${escapeHtml(topic.subtitle)}</p>
      </div>
      <ol class="point-list">
        ${pointsHtml}
      </ol>
      <div class="references">
        <h2>References</h2>
        <ol>${referencesHtml}</ol>
      </div>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
