const articleParams = new URLSearchParams(window.location.search);
const articleId = articleParams.get('id');
const publishedArticles = typeof portfolioArticles !== 'undefined' ? portfolioArticles.filter(a => a.published) : [];
const article = publishedArticles.find(a => a.id === articleId) || publishedArticles[0];

function esc(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function renderBlock(block) {
  if (block.type === 'h2') return `<h2>${esc(block.text)}</h2>`;
  if (block.type === 'h3') return `<h3>${esc(block.text)}</h3>`;
  if (block.type === 'quote') return `<blockquote>${esc(block.text)}</blockquote>`;
  if (block.type === 'lead') return `<p class="article-lead">${esc(block.text)}</p>`;
  if (block.type === 'dedication') return `<aside class="article-dedication">${esc(block.text)}</aside>`;
  if (block.type === 'note') return `<aside class="article-note">${block.title ? `<strong>${esc(block.title)}</strong>` : ''}<p>${esc(block.text)}</p></aside>`;
  if (block.type === 'closing') return `<section class="article-closing"><span>Closing thought</span><p>${esc(block.text)}</p></section>`;
  if (block.type === 'compare') return `<div class="article-compare"><article><span>01</span><h3>${esc(block.leftTitle)}</h3><p>${esc(block.leftText)}</p></article><article><span>02</span><h3>${esc(block.rightTitle)}</h3><p>${esc(block.rightText)}</p></article></div>`;
  if (block.type === 'diagram') return `<figure class="algorithm-loop"><div class="algorithm-loop-track">${block.items.map((item, i) => `<div class="algorithm-node"><span>${String(i+1).padStart(2,'0')}</span>${esc(item)}</div>${i < block.items.length-1 ? '<b aria-hidden="true">→</b>' : ''}`).join('')}</div><figcaption>${esc(block.caption)}</figcaption></figure>`;
  if (block.type === 'table') return `<div class="article-table-wrap"><table class="article-table"><thead><tr>${block.headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (block.type === 'refs') return `<section class="article-references"><h2>References</h2><ol>${block.items.map(item => `<li>${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.label)}</a>` : esc(item.label)}</li>`).join('')}</ol></section>`;
  return `<p>${esc(block.text)}</p>`;
}

if (!article) {
  document.querySelector('main').innerHTML = '<section class="section"><div class="container"><h1>Article not found.</h1><a class="arrow-link" href="./articles.html">Back to articles</a></div></section>';
} else {
  document.title = `${article.title} | Khadija Idbihi`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', article.excerpt);
  const date = new Date(`${article.date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  document.querySelector('[data-article-category]').textContent = article.category;
  document.querySelector('[data-article-title]').textContent = article.title;
  document.querySelector('[data-article-subtitle]').textContent = article.subtitle || article.excerpt;
  document.querySelector('[data-article-date]').textContent = date;
  document.querySelector('[data-article-readtime]').textContent = article.readTime;
  document.querySelector('[data-article-cover-label]').textContent = article.coverLabel || article.category;
  document.querySelector('[data-article-tags]').innerHTML = article.tags.map(tag => `<span>${esc(tag)}</span>`).join('');

  const band = document.querySelector('.article-cover-band');
  if (band && article.coverTheme) band.classList.add(`article-cover-${article.coverTheme}`);

  const body = document.querySelector('[data-article-body]');
  body.innerHTML = article.content.map(renderBlock).join('');
}
