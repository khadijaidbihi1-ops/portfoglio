const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const project = portfolioProjects.find(p => p.id === id) || portfolioProjects[0];

document.title = `${project.title} | Khadija Idbihi`;
document.querySelector('[data-project-category]').textContent = project.categoryLabel;
document.querySelector('[data-project-title]').textContent = project.title;
document.querySelector('[data-project-summary]').textContent = project.summary;
document.querySelector('[data-project-year]').textContent = project.year;
document.querySelector('[data-project-status]').textContent = project.status;
document.querySelector('[data-project-overview]').textContent = project.overview;
document.querySelector('[data-project-challenge]').textContent = project.challenge;
document.querySelector('[data-project-tech]').innerHTML = project.technologies.map(t => `<span>${t}</span>`).join('');
document.querySelector('[data-project-process]').innerHTML = project.process.map((item, i) => `<li><span>0${i+1}</span><p>${item}</p></li>`).join('');
document.querySelector('[data-project-outcomes]').innerHTML = project.outcomes.map(item => `<li>${item}</li>`).join('');

const visual = document.querySelector('[data-project-visual]');
visual.classList.add('case-image');
visual.innerHTML = `<img src="${project.image}" alt="${project.imageAlt}"><span>${project.categoryLabel}</span>`;

const links = document.querySelector('[data-project-links]');
const actions = [];
if (project.github) actions.push(`<a class="btn btn-dark" href="${project.github}" target="_blank" rel="noopener">GitHub repository ↗</a>`);
if (project.live) actions.push(`<a class="btn btn-outline" href="${project.live}" target="_blank" rel="noopener">Live project ↗</a>`);
if (!actions.length) actions.push(`<span class="project-note">Links will be added when the project is published.</span>`);
links.innerHTML = actions.join('');
