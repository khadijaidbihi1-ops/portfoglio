# Khadija Idbihi Portfolio

Multi-page personal portfolio with a Burgundy + Soft Stone visual identity. Each page has a clear purpose instead of placing the full CV on the home page.

## Pages

- `index.html` — concise personal introduction, three selected projects and Unison preview
- `about.html` — personal profile, working approach and focus areas
- `projects.html` — all portfolio projects with category filters
- `project.html` — reusable project case-study template
- `experience.html` — professional experience
- `learning.html` — education, courses and certifications
- `unison.html` — Unison IT Solutions page / coming-soon area
- `contact.html` — contact and social links

## Current projects

- MEHEK Retail Sales Analysis — Data Analytics
- MEHEK E-commerce Website — Web Development
- MEHEK Workforce Management — Python & Applications

AWS/Cloud work is intentionally not displayed at this stage.

## Add a new project

1. Add the project cover image to `images/` (16:9 works best).
2. Open `js/data.js`.
3. Add one object inside `portfolioProjects` using an existing project as a template.
4. Use a category already displayed (`data`, `web`, `python`) or add a new filter button to `projects.html` when a new discipline is ready to be shown.
5. Set `featured: true` if the project should appear on the homepage.

The Projects page and reusable case-study page update from the same data object, so the project does not need to be duplicated in HTML.

## Add a course

Open `js/data.js` and add an item inside `learningItems`:

```js
{
  title: 'Course name',
  provider: 'Provider',
  date: 'Month Year',
  area: 'Data Analytics'
}
```

It automatically appears on `learning.html`.

## Images

- `images/khadija-profile.jpg` — selected profile portrait
- `images/mehek-retail-analysis-cover.jpg`
- `images/mehek-ecommerce-cover.jpg`
- `images/mehek-workforce-cover.jpg`

Project imagery keeps the original project identity; the Burgundy portfolio palette is not overlaid on screenshots.

## Unison links

Open `unison.html` and replace the placeholder links when the official website and social profiles are available.

## CV

The downloadable PDF is stored at:

`assets/Khadija_Idbihi_Tech_CV.pdf`

## Local preview

Open the folder in VS Code, right-click `index.html`, then choose **Open with Live Server**.
