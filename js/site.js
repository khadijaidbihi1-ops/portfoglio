const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();

function projectCard(project, compact = false) {
  return `
    <article class="project-card ${compact ? 'project-card-compact' : ''}" data-category="${project.category}">
      <a class="project-visual project-image" href="./project.html?id=${project.id}" aria-label="Open ${project.title} case study">
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
        <span class="project-image-label">${project.categoryLabel}</span>
      </a>
      <div class="project-card-body">
        <div class="project-meta"><span>${project.categoryLabel}</span><span>${project.year}</span></div>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="tags">${project.technologies.map(t => `<span>${t}</span>`).join('')}</div>
        <a class="arrow-link" href="./project.html?id=${project.id}">View case study <span>↗</span></a>
      </div>
    </article>`;
}

const featuredGrid = document.querySelector('[data-featured-projects]');
if (featuredGrid && typeof portfolioProjects !== 'undefined') {
  featuredGrid.innerHTML = portfolioProjects.filter(p => p.featured).slice(0, 3).map(p => projectCard(p, true)).join('');
}
