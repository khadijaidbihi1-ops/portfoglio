const portfolioProjects = [
  {
    id: 'mehek-retail-sales-analysis',
    title: 'MEHEK Retail Sales Analysis',
    category: 'data',
    categoryLabel: 'Data Analytics',
    year: '2026',
    featured: true,
    status: 'Completed',
    summary: 'End-to-end retail sales analysis using Excel, SQL and Power BI to clean data, define KPIs and turn transactions into business insights.',
    technologies: ['Excel', 'SQL', 'Power BI', 'DAX'],
    image: './images/mehek-retail-analysis-cover.jpg',
    imageAlt: 'MEHEK retail sales Power BI dashboard showing KPIs, filters and sales charts.',
    overview: 'This project analyses a full year of retail transactions across stores, product categories, products and payment methods. The workflow covers data cleaning, KPI definition, SQL analysis and interactive reporting.',
    challenge: 'Transform transactional sales data into a clear decision-support view that highlights performance by store, category, product and month.',
    process: ['Reviewed and cleaned the source dataset', 'Calculated revenue and core retail KPIs', 'Used SQL to explore performance and validate results', 'Built an interactive Power BI dashboard with business filters'],
    outcomes: ['£59.9K total revenue analysed', 'London identified as the strongest store', 'Fragrance identified as the top revenue category', 'December identified as the strongest month'],
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
    summary: 'Responsive fragrance e-commerce experience built from scratch with HTML, CSS and JavaScript, focused on brand storytelling and usability.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: './images/mehek-ecommerce-cover.jpg',
    imageAlt: 'MEHEK Fragrances e-commerce homepage with the Heritage collection hero section.',
    overview: 'A multi-page e-commerce website designed and developed from scratch without frameworks. The project combines responsive layouts, category navigation, product pages, cart behaviour and brand storytelling.',
    challenge: 'Create a polished shopping experience using only HTML, CSS and JavaScript while maintaining a consistent luxury brand identity across desktop and mobile.',
    process: ['Defined site structure and product taxonomy', 'Created responsive page layouts', 'Implemented JavaScript product, cart and filtering behaviour', 'Tested usability and performance across pages'],
    outcomes: ['Responsive multi-page interface', 'Reusable product structures', 'Shopping cart and filtering interactions', 'Portfolio-ready front-end case study'],
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
    summary: 'Workforce planning and employee management application using Python, Flask and SQLite for rota planning, availability and operational workflows.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
    image: './images/mehek-workforce-cover.jpg',
    imageAlt: 'MEHEK Workforce Management weekly rota screen with planning controls and employee scheduling.',
    overview: 'A browser-based workforce management application for handling employee information, availability, rota planning and operational workflows.',
    challenge: 'Design a practical internal business tool that combines database-backed employee management with rota planning, permissions and clear day-to-day workflows.',
    process: ['Designed database entities and user roles', 'Built Flask routes and reusable templates', 'Implemented employee, availability and rota views', 'Developed scheduling, draft and publishing workflows'],
    outcomes: ['Role-based application structure', 'Employee and rota management', 'SQLite-backed data model', 'Live deployed application for continued development and testing'],
    github: '',
    live: 'https://mehek-workforce-management.onrender.com/weekly-rota/'
  }
];

const learningItems = [
  { title: 'Introduction to UI and UX Design', provider: 'Codecademy', date: 'Aug 2026', area: 'Design' },
  { title: 'Learn Python 3', provider: 'Codecademy', date: 'Aug 2026', area: 'Python' },
  { title: 'Learn Microsoft Excel for Data Analysis', provider: 'Codecademy', date: 'Aug 2026', area: 'Data Analytics' },
  { title: 'How to Transform Tables with SQL', provider: 'Codecademy', date: 'Jun 2026', area: 'SQL' },
  { title: 'How to Analyze Business Metrics with SQL', provider: 'Codecademy', date: 'Jun 2026', area: 'SQL' }
];
