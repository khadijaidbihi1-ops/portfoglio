function card(project) {
  return `
    <article class="project-card" data-category="${project.category}">
      <a class="project-visual project-image" href="./project.html?id=${project.id}" aria-label="Open ${project.title} case study">
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
        <span class="project-image-label">${project.categoryLabel}</span>
      </a>
      <div class="project-card-body">
        <div class="project-meta"><span>${project.categoryLabel}</span><span>${project.status}</span></div>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="tags">${project.technologies.map(t => `<span>${t}</span>`).join('')}</div>
        <a class="arrow-link" href="./project.html?id=${project.id}">View case study <span>↗</span></a>
      </div>
    </article>`;
}

const grid = document.querySelector('[data-project-grid]');
const buttons = document.querySelectorAll('[data-filter]');

function render(filter = 'all') {
  if (!grid) return;
  const list = filter === 'all' ? portfolioProjects : portfolioProjects.filter(p => p.category === filter);
  grid.innerHTML = list.map(card).join('');
  const count = document.querySelector('[data-project-count]');
  if (count) count.textContent = `${list.length} project${list.length === 1 ? '' : 's'}`;
}

buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  render(button.dataset.filter);
}));

render();
