# Addo Michael Obiri — Software Developer Portfolio

![Portfolio](https://img.shields.io/badge/Portfolio-Software%20Developer-111827)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-BB4BFF)

A modern, responsive personal portfolio website for **Addo Michael Obiri**, a software developer and Computer Science student based in Accra, Ghana.

The portfolio showcases selected software projects, technical skills, development experience, engineering process, and professional contact information through a clean, minimal, and responsive single-page experience.

**Live Portfolio:** [michaelobiri.netlify.app](https://michaelobiri.netlify.app)

---

## Overview

This portfolio was built to provide a professional online presence and demonstrate practical software development experience across web, mobile, backend, and full-stack development.

The site focuses on:

- Professional presentation of software projects
- Responsive design across desktop, tablet, and mobile
- Reusable React components
- Modular project architecture
- Smooth and purposeful UI animations
- SEO and social sharing optimization
- Accessible semantic HTML
- Production-ready static deployment

---

## Features

### Portfolio Sections

- **Hero** — Introduction, professional role, location, and core technologies
- **Projects** — Selected software projects with categories, technologies, outcomes, and project details
- **About** — Professional background, education, experience, and development interests
- **Process** — Overview of the software development approach
- **Contact** — GitHub, LinkedIn, Twitter/X, and email links
- **CV Download** — Direct access to the latest professional CV

### User Experience

- Responsive desktop and mobile navigation
- Mobile menu
- Project category filtering
- Interactive project cards
- Smooth scrolling
- Scroll-based reveal animations
- Staggered section animations
- Back-to-top button
- Reduced-motion accessibility support
- Responsive layouts for different screen sizes

### SEO

The portfolio includes:

- Page title and meta description
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- `robots.txt`
- XML sitemap
- Schema.org structured data
- Semantic HTML structure
- Optimized image `alt` text

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | User interface and component architecture |
| **TypeScript** | Static typing and maintainable code |
| **Vite 8** | Development server and production build tooling |
| **Framer Motion** | UI and scroll-based animations |
| **CSS** | Global styling, responsive design, and design tokens |
| **Tailwind CSS v4** | Utility-first styling support |
| **npm** | Dependency and package management |

---

## Architecture

The application follows a modular React architecture that separates page sections, reusable components, animations, data, and assets.

```text
src/
│
├── assets/
│   └── profilePic/
│       └── MIKE.jpeg
│
├── components/
│   ├── animations/
│   │   ├── Reveal.tsx
│   │   └── Stagger.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/
│       └── BackToTop.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── socialLinks.ts
│
├── sections/
│   ├── Hero/
│   │   └── Hero.tsx
│   │
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── CaseStudyCard.tsx
│   │   └── ProjectFilters.tsx
│   │
│   ├── About/
│   │   └── About.tsx
│   │
│   └── Process/
│       └── Process.tsx
│
├── App.tsx
├── main.tsx
├── index.css
├── images.d.ts
└── vite-env.d.ts
└──public/
│
├── cv/
│   └── Addo_Michael_Obiri_CV.pdf
│
├── og-image.png
├── robots.txt
└── sitemap.xml

##Component Architecture

The application uses reusable components instead of placing the entire interface inside App.tsx.

Layout Components

Navbar.tsx and Footer.tsx handle the global navigation and footer structure.

Animation Components

The animation system is built with reusable Framer Motion components:

Reveal.tsx — reusable bottom-to-top fade/reveal animation
Stagger.tsx — sequential animation for groups of elements

This keeps animation behavior consistent across the portfolio.
UI Components

BackToTop.tsx manages the scroll position and provides a smooth return-to-top interaction.

##Section Components

Each major area of the portfolio is isolated into its own section:
Hero
Projects
About
Process
This makes individual sections easier to maintain and extend without turning App.tsx into a large monolithic component.

##Getting Started
Prerequisites

Make sure you have installed:
Node.js
npm
Git

##Clone the repository
git clone https://github.com/obirimike/<repository-name>.git
cd <repository-name>
Install dependencies
npm install

Start the development server
npm run dev

The development server will be available at the local URL provided by Vite.

Production Build

Create an optimized production build:

npm run build

Preview the production build locally:
npm run preview

The generated production files are placed in:

dist/

##SEO & Discoverability

The portfolio includes dedicated SEO configuration in index.html and public crawler files.

Metadata

The site provides:

Descriptive page title
Meta description
Author metadata
Canonical URL
Open Graph metadata
Twitter/X metadata

Search Engine Crawling
public/robots.txt
public/sitemap.xml

Structured Data

The site includes Schema.org structured data describing the portfolio owner as a software developer.

This helps search engines better understand the identity, professional role, skills, and associated profiles represented by the website.

##Responsive Design

The portfolio is designed for:

Desktop
Laptop
Tablet
Mobile

Responsive behavior includes:

Collapsible mobile navigation
Responsive project grids
Stacked project cards on smaller screens
Responsive typography
Mobile-friendly buttons
Responsive About and Process sections
Horizontally scrollable project filters
Mobile-optimized footer

##Animation

Framer Motion is used for subtle interface animations.

Examples include:
Hero entrance animations
Bottom-to-top section reveals
Staggered process cards
Back-to-top button transitions

Animations are intentionally kept subtle to maintain a professional user experience without distracting from the content.

The project also includes support for users who prefer reduced motion.

##Design Principles

The portfolio follows a few core principles:

Clarity
Content should be easy to scan and understand quickly.

Consistency
Typography, spacing, colors, buttons, cards, and animations follow a consistent visual language.

Responsiveness
The interface should remain usable and visually balanced across screen sizes.

Maintainability
Reusable components and separated data reduce duplication and make future changes easier

Performance
The project uses Vite's production build process and avoids unnecessary dependencies and complex runtime behavior.

##Deployment

The application is a client-side Vite application and can be deployed to modern static hosting platforms such as:

Netlify
Vercel
GitHub Pages
Cloudflare Pages

For a production build:
npm run build

##Project Status

Status: Production-ready personal portfolio

The portfolio is actively maintained as my professional experience, projects, technical skills, and career goals evolve.

##Contact

Addo Michael Obiri

Software Developer
Accra, Ghana

Email: michaelobiri022@gmail.com
GitHub: github.com/obirimike
LinkedIn: linkedin.com/in/michael-addo-k23
Twitter/X: @kweku_mk
Portfolio: michaelobiri022.netlify.app

##License

This repository represents a personal portfolio project and its contents are primarily intended for personal and professional presentation.

Unless otherwise stated, the project's original content, personal information, branding, and portfolio materials belong to Addo Michael Obiri.