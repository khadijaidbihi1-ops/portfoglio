const articleParams = new URLSearchParams(window.location.search);
const articleId = articleParams.get('id');
const publishedArticles = typeof portfolioArticles !== 'undefined' ? portfolioArticles.filter(a => a.published) : [];
const article = publishedArticles.find(a => a.id === articleId) || publishedArticles[0];

if (!article) {
  document.querySelector('main').innerHTML = '<section class="section"><div class="container"><h1>Article not found.</h1><a class="arrow-link" href="./articles.html">Back to articles</a></div></section>';
} else {
  document.title = `${article.title} | Khadija Idbihi`;
  const date = new Date(`${article.date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  document.querySelector('[data-article-category]').textContent = article.category;
  document.querySelector('[data-article-title]').textContent = article.title;
  document.querySelector('[data-article-subtitle]').textContent = article.subtitle || article.excerpt;
  document.querySelector('[data-article-date]').textContent = date;
  document.querySelector('[data-article-readtime]').textContent = article.readTime;
  document.querySelector('[data-article-cover-label]').textContent = article.coverLabel || article.category;
  document.querySelector('[data-article-tags]').innerHTML = article.tags.map(tag => `<span>${tag}</span>`).join('');

  const body = document.querySelector('[data-article-body]');
  body.innerHTML = article.content.map(block => {
    if (block.type === 'h2') return `<h2>${block.text}</h2>`;
    if (block.type === 'quote') return `<blockquote>${block.text}</blockquote>`;
    if (block.type === 'note') return `<aside class="article-note">${block.text}</aside>`;
    return `<p>${block.text}</p>`;
  }).join('');
}
