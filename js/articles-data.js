// ARTICLES DATA
// ------------------------------------------------------------
// To publish a new article, duplicate one object below and edit:
// id, title, excerpt, date, category, readTime, tags and content.
// Set published: true when it is ready to appear on the website.
// The listing page and article page update automatically.

const portfolioArticles = [
  {
    id: 'from-job-adverts-to-market-intelligence',
    title: 'From Job Adverts to Market Intelligence',
    subtitle: 'What building a London tech labour-market analyzer taught me about data quality, classification and useful analytics.',
    excerpt: 'A practical look at why job-market analysis starts with messy data rather than charts, and how controlled taxonomies can turn fragmented adverts into comparable signals.',
    date: '2026-08-21',
    category: 'Data & Technology',
    readTime: '6 min read',
    featured: true,
    published: true,
    tags: ['Data Analytics', 'Python', 'Labour Market', 'Data Quality'],
    coverLabel: 'DATA · LABOUR MARKET',
    content: [
      { type: 'p', text: 'Job adverts look structured when we browse them one at a time: a title, a company, a salary, a list of requirements. At market level, however, they become a classification problem. Two employers may describe almost the same role in completely different ways, while salary, seniority and skill terminology can vary just as much.' },
      { type: 'h2', text: 'The real work happens before the chart' },
      { type: 'p', text: 'When I built the London Tech Job Market Analyzer, the first challenge was not choosing a visualisation. It was deciding what should count as the same role. A raw list can contain Software Developer, Software Engineer, Backend Engineer and many other variations. If each title is analysed independently, the market appears more fragmented than it really is.' },
      { type: 'p', text: 'I addressed this by creating a controlled role taxonomy and mapping title patterns into standard roles and broader role families. The same principle was applied to technology skills: aliases such as Power BI, powerbi and Microsoft Power BI need to resolve to the same analytical concept.' },
      { type: 'h2', text: 'Useful analytics needs visible limitations' },
      { type: 'p', text: 'A dashboard can look precise while the underlying data is incomplete. In this dataset, many job descriptions available through the API are truncated, so skill extraction is deliberately presented as an exploratory signal rather than a complete representation of employer requirements. Salary analysis is also limited to adverts with usable salary information.' },
      { type: 'quote', text: 'A limitation does not make an analysis useless. Hiding the limitation does.' },
      { type: 'p', text: 'Making those constraints visible improved the project. It forced me to separate what the data can support from what would only be an assumption.' },
      { type: 'h2', text: 'From a snapshot to a data product' },
      { type: 'p', text: 'The first version of the analysis was effectively a snapshot. I later introduced monthly history and period filters so the application can become more valuable as new data accumulates. That changes the project from a one-off report into a small maintainable data product.' },
      { type: 'p', text: 'The same thinking shaped the codebase: collection, processing, analysis and presentation are separate modules. This makes it easier to test transformations, update the taxonomy and change the dashboard without rewriting the entire pipeline.' },
      { type: 'h2', text: 'What I would improve next' },
      { type: 'p', text: 'The next improvements would focus on deeper historical coverage, stronger duplicate-advert detection, richer employer classification and more advanced skill extraction if complete descriptions become available. The important part is that the current architecture leaves room for those changes.' },
      { type: 'note', text: 'The project uses vacancy and salary data from The Adzuna API and ONS reference data. The public dashboard reports aggregated market analysis rather than republishing individual job adverts.' }
    ]
  }
];
