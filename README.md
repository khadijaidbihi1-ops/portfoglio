# Khadija Idbihi — Portfolio

Personal portfolio website for Khadija Idbihi, organised as separate pages rather than one long homepage.

## Pages

- `index.html` — concise homepage and selected work
- `about.html` — profile and working approach
- `projects.html` — filterable project portfolio
- `project.html` — reusable case-study template
- `experience.html` — professional experience and transferable skills
- `learning.html` — education, courses and certifications
- `unison.html` — Unison IT Solutions venture page
- `contact.html` — contact details and CV link

## Adding a new project

Open `js/data.js` and add another object to `portfolioProjects`. Set a category of `data`, `web`, or `python`, add the project image to `images/`, and set `featured: true` only if it should also appear on the homepage. The Projects page and case-study page are generated from the same data object.

## Adding a new course

Open `js/data.js` and add another object to `learningItems` with `title`, `provider`, `date`, `area`, and `courseUrl`. It will appear automatically on the Education & Learning page.

## Updating Unison links

When the business website and social accounts launch, replace the placeholder links in `unison.html` for Official Website, TikTok, Instagram and Facebook.

## Local preview

Open the folder in VS Code, right-click `index.html`, and choose **Open with Live Server**.
