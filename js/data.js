const portfolioProjects = [
  {
    id: 'mehek-retail-sales-analysis',
    title: 'MEHEK Retail Sales Analysis',
    category: 'data',
    categoryLabel: 'Data Analytics',
    year: '2026',
    featured: true,
    status: 'Completed',
    summary: 'A complete retail analytics workflow combining Excel, SQL and Power BI to clean transactional data, validate KPIs and present decision-ready performance insights.',
    technologies: ['Excel', 'SQL', 'Power BI', 'DAX'],
    image: './images/mehek-retail-analysis-cover.jpg',
    imageAlt: 'MEHEK retail sales Power BI dashboard showing KPIs, filters and sales charts.',
    overview: 'This project analyses a full year of retail transactions across stores, product categories, products and payment methods. I worked from raw transactional data through cleaning and validation, SQL-based analysis and KPI definition, then translated the results into an interactive Power BI dashboard designed for quick business interpretation.',
    challenge: 'Turn a transactional retail dataset into a reliable analysis that answers practical business questions: where revenue is coming from, which products and categories perform best, how sales change over time and how decision-makers can explore the results without reading raw data.',
    process: ['Audited the source dataset for duplicates, missing values and inconsistent categories', 'Prepared clean analytical fields and calculated revenue and core retail KPIs', 'Used SQL queries to explore store, product, category and monthly performance and validate results', 'Designed an interactive Power BI dashboard with KPI cards, business filters and comparative visualisations'],
    outcomes: ['£59.9K total revenue analysed across 999 valid orders', 'London identified as the strongest store by revenue', 'Fragrance identified as the highest-revenue category', 'December identified as the strongest month, with product and payment-method performance available for further drill-down'],
    github: 'https://github.com/khadijaidbihi1-ops/Mehek-Retail-Sales-Analysis',
    live: ''
  },
  {
    id: 'mehek-ecommerce',
    title: 'MEHEK E-commerce Website',
    category: 'web',
    categoryLabel: 'Web Development',
    year: '2026',
    featured: true,
    status: 'Completed',
    summary: 'A responsive multi-page fragrance e-commerce website developed from scratch with HTML, CSS and JavaScript, combining brand storytelling with practical shopping interactions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: './images/mehek-ecommerce-cover.jpg',
    imageAlt: 'MEHEK Fragrances e-commerce homepage with the Heritage collection hero section.',
    overview: 'MEHEK is a front-end e-commerce project built without frameworks. I designed the information architecture, responsive layouts and visual identity, then implemented product navigation, filtering, search, product pages, wishlist/cart interactions and checkout behaviour in JavaScript.',
    challenge: 'Create a visually distinctive e-commerce experience while keeping the underlying structure usable, responsive and maintainable across several product categories and page types.',
    process: ['Defined the site architecture, collections and product taxonomy', 'Designed and built reusable responsive layouts for desktop, tablet and mobile', 'Implemented product rendering, search, filters, wishlist/cart and checkout interactions in JavaScript', 'Tested usability and performance, including Lighthouse reviews and responsive behaviour'],
    outcomes: ['Responsive multi-page shopping experience', 'Reusable product and category structures', 'Functional front-end cart, search and filtering interactions', 'A complete visual case study demonstrating a brand style different from this portfolio'],
    github: '',
    live: 'https://khadijaidbihi1-ops.github.io/web_dev/'
  },
  {
    id: 'mehek-workforce-management',
    title: 'MEHEK Workforce Management',
    category: 'python',
    categoryLabel: 'Python & Applications',
    year: '2026',
    featured: true,
    status: 'In development',
    summary: 'A database-backed workforce management application built with Python, Flask and SQLite for employee records, availability, rota planning and operational workflows.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
    image: './images/mehek-workforce-cover.jpg',
    imageAlt: 'MEHEK Workforce Management weekly rota screen with planning controls and employee scheduling.',
    overview: 'This project moves beyond a static website into an internal business application. It brings together employee data, user roles, availability and scheduling workflows through a Flask application backed by SQLite and a browser-based management interface.',
    challenge: 'Design an internal system that makes workforce planning easier to understand and manage while supporting different responsibilities, structured data and repeatable scheduling workflows.',
    process: ['Modelled employee, role and scheduling data in SQLite', 'Built Flask routes, authentication logic and reusable templates', 'Created employee, availability, leave and rota management views', 'Developed weekly scheduling workflows including generation, draft, print and publishing controls'],
    outcomes: ['Role-aware application structure', 'Centralised employee and workforce information', 'Database-backed rota and availability workflows', 'Live deployed application used for iterative development and testing'],
    github: '',
    live: 'https://mehek-workforce-management.onrender.com/weekly-rota/'
  }
];

const learningItems = [
  { title: 'Introduction to UI and UX Design', provider: 'Codecademy', date: 'Aug 2026', area: 'Design', courseUrl: 'https://www.codecademy.com/learn/intro-to-ui-ux' },
  { title: 'Learn Python 3', provider: 'Codecademy', date: 'Aug 2026', area: 'Python', courseUrl: 'https://www.codecademy.com/learn/learn-python-3' },
  { title: 'Learn Microsoft Excel for Data Analysis', provider: 'Codecademy', date: 'Aug 2026', area: 'Data Analytics', courseUrl: 'https://www.codecademy.com/learn/analyze-data-with-microsoft-excel' },
  { title: 'How to Transform Tables with SQL', provider: 'Codecademy', date: 'Jun 2026', area: 'SQL', courseUrl: 'https://www.codecademy.com/learn/sql-table-transformation' },
  { title: 'How to Analyze Business Metrics with SQL', provider: 'Codecademy', date: 'Jun 2026', area: 'SQL', courseUrl: 'https://www.codecademy.com/learn/sql-analyzing-business-metrics' }
];
