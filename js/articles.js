function formatArticleDate(value) {
  const date = new Date(`${value}T12:00:00`);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function articleCard(article) {
  return `
    <article class="article-card">
      <a class="article-card-cover" href="./article.html?id=${article.id}" aria-label="Read ${article.title}">
        <span>${article.coverLabel || article.category}</span>
      </a>
      <div class="article-card-body">
        <div class="article-card-meta"><span>${article.category}</span><span>${formatArticleDate(article.date)}</span></div>
        <h2><a href="./article.html?id=${article.id}">${article.title}</a></h2>
        <p>${article.excerpt}</p>
        <div class="article-card-footer"><span>${article.readTime}</span><a class="arrow-link" href="./article.html?id=${article.id}">Read article <span>↗</span></a></div>
      </div>
    </article>`;
}

const articlesGrid = document.querySelector('[data-articles-grid]');
if (articlesGrid && typeof portfolioArticles !== 'undefined') {
  const published = portfolioArticles.filter(article => article.published).sort((a, b) => b.date.localeCompare(a.date));
  articlesGrid.innerHTML = published.map(articleCard).join('');
  const count = document.querySelector('[data-article-count]');
  if (count) count.textContent = `${published.length} article${published.length === 1 ? '' : 's'}`;
  const empty = document.querySelector('[data-articles-empty]');
  if (empty) empty.hidden = published.length !== 0;
}
