<div align="center">

# Shashinthaka Munasinghe — Developer Portfolio

**A modern, full-stack portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo →**](https://www.shashinthakamunasinghe.me) &nbsp;·&nbsp; [GitHub](https://github.com/shashinthakamunasinghe) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/shashinthaka-munasinghe)

</div>

---

## ✨ Features

- **🎨 Glassmorphism Design** — Layered glass surfaces, backdrop blur, and subtle gradients throughout
- **🌙 Dark / Light Mode** — System-aware theme with smooth transitions via `next-themes`
- **🖱️ Interactive Arrow Cursor** — Custom animated arrow cursor with trailing glow on desktop
- **⚡ Smooth Animations** — CSS keyframe animations with staggered entrance delays
- **📱 Fully Responsive** — Optimized for mobile, tablet, and widescreen
- **📝 Blog System** — Markdown-powered blog with syntax highlighting, author cards, and reading time
- **🔍 SEO Optimised** — Structured data (JSON-LD), Open Graph, Twitter cards, sitemap, robots.txt
- **📦 Modular Architecture** — 4-layer clean architecture: Types → Data → Primitives → Features
- **🚀 Vercel Analytics** — Built-in performance and visitor analytics

---

## 🛠️ Tech Stack

| Category       | Technology                              |
|----------------|-----------------------------------------|
| **Framework**  | Next.js 15 (App Router)                 |
| **Language**   | TypeScript 5                            |
| **Styling**    | Tailwind CSS 4 + custom CSS animations  |
| **Fonts**      | Geist, Geist Mono, Space Grotesk (Google Fonts) |
| **Icons**      | Lucide React                            |
| **Theming**    | next-themes                             |
| **Analytics**  | Vercel Analytics                        |
| **Deployment** | Vercel                                  |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── (public)/            # Route group for all public pages
│   │   ├── blog/            # Blog list + [postSlug] detail
│   │   ├── introduction/    # Detailed about page
│   │   ├── notes/           # Lab notes / writings
│   │   ├── projects/        # Full projects page with search & filter
│   │   ├── workbench/       # Active WIP projects terminal view
│   │   └── layout.tsx       # Shared header + footer for public routes
│   ├── globals.css          # Design tokens, animations, utilities
│   ├── layout.tsx           # Root layout — metadata, fonts, cursor
│   └── page.tsx             # Home page (all sections)
│
├── components/
│   ├── ui/                  # Primitive components (reusable building blocks)
│   │   ├── filter-bar.tsx   # Pill / button filter groups
│   │   ├── note-card.tsx    # Note / article card
│   │   ├── project-card.tsx # Project card with status + tags
│   │   ├── section-header.tsx
│   │   ├── status-badge.tsx
│   │   ├── tag-chip.tsx
│   │   └── tech-card.tsx    # Animated skill card with progress bar
│   ├── public/              # Page-specific feature components
│   │   ├── blog/
│   │   ├── notes/
│   │   ├── projects/
│   │   └── workbench/
│   ├── about-section.tsx    # Home page: about tabs (bio / education / certs)
│   ├── arrow-cursor.tsx     # Custom animated cursor (desktop only)
│   ├── footer.tsx
│   ├── glass-navbar.tsx     # Home page sticky navbar with section tracking
│   ├── header.tsx           # Sub-page header (blog, projects, etc.)
│   ├── hero-section.tsx     # Animated typing role display
│   ├── lab-notes.tsx        # Home page: technical skills cards
│   ├── projects-grid.tsx    # Home page: featured projects grid
│   ├── tech-stack.tsx       # Categorised skill grid with filter
│   └── theme-toggle.tsx
│
├── lib/
│   ├── data/                # Single source of truth for all content
│   │   ├── about.ts         # Personal info, education, experience, certifications
│   │   ├── navigation.ts    # Nav items + social links (shared by header & footer)
│   │   ├── notes.ts         # Lab notes + full notes page content
│   │   ├── projects.ts      # All projects data
│   │   └── tech-stack.ts    # Tech categories + stats
│   ├── blog-data.tsx        # Blog posts with full content
│   ├── structured-data.ts   # JSON-LD for SEO (Person, WebSite schemas)
│   ├── themes.ts            # Theme configuration
│   └── utils.ts             # `cn()` utility
│
└── types/
    └── index.ts             # Shared TypeScript interfaces for the whole project
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** / **pnpm** / **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shashinthakamunasinghe/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see below)

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root of the project:

```env
# Base URL for SEO metadata and Open Graph (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://shashinthakamunasinghe.me
```

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain — used for absolute URLs in metadata and JSON-LD | Yes (for production) |

---

## 🧑‍💻 Customisation

All content is data-driven — no need to edit component JSX to update your details.

| What to update | File |
|---|---|
| Personal info, education, certifications | [`lib/data/about.ts`](lib/data/about.ts) |
| Projects | [`lib/data/projects.ts`](lib/data/projects.ts) |
| Skills & tech stack | [`lib/data/tech-stack.ts`](lib/data/tech-stack.ts) |
| Nav items & social links | [`lib/data/navigation.ts`](lib/data/navigation.ts) |
| Lab notes (home) & full notes page | [`lib/data/notes.ts`](lib/data/notes.ts) |
| Blog posts | [`lib/blog-data.tsx`](lib/blog-data.tsx) |
| SEO structured data | [`lib/structured-data.ts`](lib/structured-data.ts) |
| Global metadata | [`app/layout.tsx`](app/layout.tsx) |

---

## 🏗️ Architecture

The codebase follows a **4-layer clean architecture**:

```
Types  →  Data  →  Primitive UI  →  Feature Components
```

- **Types** (`types/index.ts`) — Centralised TypeScript interfaces (`Project`, `Note`, `NavItem`, `TechCategory`, etc.)
- **Data** (`lib/data/`) — Static content fully decoupled from components
- **Primitives** (`components/ui/`) — Small, typed, reusable UI building blocks with no business logic
- **Features** (`components/`) — Section/page components that compose primitives + data

This means: update data → every component that uses it updates automatically. No JSX hunting required.

---

## 📦 Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Deploy on Vercel (recommended)

1. Push your code to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

Vercel automatically detects Next.js and configures builds correctly.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 📬 Contact

**Shashinthaka Munasinghe**

- 🌐 Website: [shashinthakamunasinghe.me](https://shashinthakamunasinghe.me)
- 📧 Email: [nipunshashinthaka@gmail.com](mailto:nipunshashinthaka@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/shashinthaka-munasinghe](https://linkedin.com/in/shashinthaka-munasinghe)
- 🐙 GitHub: [github.com/shashinthakamunasinghe](https://github.com/shashinthakamunasinghe)

---

<div align="center">

Built with ❤️ by [Shashinthaka Munasinghe](https://github.com/shashinthakamunasinghe)

</div>
