const grid = document.querySelector('[data-learning-grid]');
if (grid) {
  grid.innerHTML = learningItems.map((item, i) => `
    <article class="learning-card">
      <div class="learning-index">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <span class="learning-area">${item.area}</span>
        <h2>${item.title}</h2>
        <p>${item.provider} · ${item.date}</p>
      </div>
    </article>`).join('');
}
