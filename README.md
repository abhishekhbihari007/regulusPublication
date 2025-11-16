# Regulus International Publishing House Website

A modern, responsive website for Regulus International Publishing House built with React and React Router.

## Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Multiple Pages**: Home, About, Services, Catalog, Authors, Submissions, Blog/Resources, and Contact
- **Modern UI**: Clean, professional design with smooth animations
- **SEO-Friendly**: Semantic HTML structure and clean URLs
- **Interactive Components**: Forms, filtering, testimonials carousel, and more

## Pages

1. **Home**: Hero banner, quick links, testimonials, newsletter signup
2. **About Us**: Company story, mission, vision, values, team, awards
3. **Services**: Complete publishing services overview
4. **Catalog**: Book catalog with genre/year filtering
5. **Authors**: Author profiles and success stories
6. **Submissions**: Submission guidelines, form, and FAQ
7. **Blog/Resources**: Articles, interviews, and downloadable resources
8. **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React 18
- React Router DOM 6
- Vite (build tool)
- React Icons
- CSS3 (Custom styling with CSS Variables)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Services.jsx
│   ├── Services.css
│   ├── Catalog.jsx
│   ├── Catalog.css
│   ├── Authors.jsx
│   ├── Authors.css
│   ├── Submissions.jsx
│   ├── Submissions.css
│   ├── Blog.jsx
│   ├── Blog.css
│   ├── Contact.jsx
│   └── Contact.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Accent color
- `--accent-color`: Highlight color
- `--text-dark`: Dark text color
- `--text-light`: Light text color

### Content

Each page component can be edited directly in `src/pages/` to update content, images, and data.

## License

© 2025 Regulus International Publishing House. All rights reserved.

