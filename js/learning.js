const grid = document.querySelector('[data-learning-grid]');
if (grid) {
  grid.innerHTML = learningItems.map((item, i) => `
    <article class="learning-card">
      <div class="learning-index">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <span class="learning-area">${item.area}</span>
        <h2>${item.title}</h2>
        <p class="learning-provider"><span class="provider-mark">C_</span>${item.provider} · ${item.date}</p>
        <div class="learning-links">
          <a href="${item.courseUrl}" target="_blank" rel="noopener">View course on Codecademy ↗</a>
        </div>
      </div>
    </article>`).join('');
}
