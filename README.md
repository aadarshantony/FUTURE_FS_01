<div align="center">

```
 ░█████╗░██████╗░░█████╗░██████╗░░██████╗██╗░░██╗
 ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░██║
 ███████║██║░░██║███████║██████╔╝╚█████╗░███████║
 ██╔══██║██║░░██║██╔══██║██╔══██╗░╚═══██╗██╔══██║
 ██║░░██║██████╔╝██║░░██║██║░░██║██████╔╝██║░░██║
 ╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝╚═╝░░╚═╝
```

# Adarsh Antony — Portfolio

**Full Stack Developer · B.Tech CSE**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-E8521A?style=flat-square)](LICENSE)

[Live Demo](https://adarshantony.vercel.app) · [View Projects](#projects) · [Contact](mailto:adarshantony223@gmail.com)

</div>

---

## Overview

A modern, fully responsive personal portfolio built with React 19, TypeScript, and Tailwind CSS v4. Designed with an editorial aesthetic — warm paper tones, espresso darks, and flame orange accents — to stand out while staying polished and fast.

```
┌─────────────────────────────────────────────────────────┐
│  Navbar      →  Fixed top bar with mobile hamburger     │
│  Hero        →  Name, tagline, CTA buttons              │
│  About       →  Photo, bio, experience timeline         │
│  Projects    →  Featured card + compact project list    │
│  Stack       →  Tech grid with skill levels             │
│  Contact     →  Links + contact form (mailto)           │
│  Footer      →  Navigation + socials                    │
└─────────────────────────────────────────────────────────┘
```

---

## Screenshots

| Mobile | Tablet | Desktop |
|--------|--------|---------|
| Single-column layout, hamburger menu | 2-col grids, compact nav | Full editorial layout |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 |
| **Language** | TypeScript 6.0 |
| **Styling** | Tailwind CSS v4 (Vite plugin) |
| **Linting** | ESLint 10 + typescript-eslint |
| **Build** | Vite with SWC via `@vitejs/plugin-react` |

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aadarshantony/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Type-check + production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint across all .ts/.tsx files
```

---

## Project Structure

```
portfolio/
├── public/
│   └── adarsh.png              # Profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed nav + mobile hamburger
│   │   ├── Hero.tsx             # Landing section
│   │   ├── About.tsx            # Bio, photo, timeline
│   │   ├── Projects.tsx         # Featured + compact projects
│   │   ├── Stack.tsx            # Tech stack grid
│   │   ├── Contact.tsx          # Contact links + form
│   │   └── Footer.tsx           # Footer
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + CSS variables
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.app.json
```

---

## Design System

The palette and tokens are defined as CSS variables in `src/index.css`:

```css
:root {
  --paper:    #F0EBE1;   /* Warm off-white background  */
  --espresso: #1C1410;   /* Near-black text + dark sections */
  --flame:    #E8521A;   /* Primary accent — CTAs, highlights */
  --olive:    #5C6B3A;   /* Reserved for future use */
  --blush:    #D4987A;   /* Serif italic accents */
  --stone:    #7A6E65;   /* Secondary text, labels */
}
```

Two custom animations ship in global CSS:

```css
@keyframes morph   /* Organic blob morphing for decorative shapes */
@keyframes marquee /* Infinite horizontal ticker */
```

---

## Responsive Breakpoints

Built mobile-first. All sections reflow cleanly across:

| Breakpoint | Width | Layout |
|------------|-------|--------|
| `default` (mobile) | < 640px | Single column, hamburger nav |
| `sm` | ≥ 640px | 2-col grids, condensed spacing |
| `md` | ≥ 768px | Desktop nav visible |
| `lg` | ≥ 1024px | Full editorial layout, side-by-side sections |
| `xl` | ≥ 1280px | Max-width container caps at 1280px |

---

## Customization

### Updating personal info

Edit the data at the top of each component file — no config file needed:

| What to change | Where |
|----------------|-------|
| Name, tagline | `Hero.tsx` |
| Bio, experience timeline | `About.tsx` |
| Projects list | `Projects.tsx` — `featuredProject` + `projects[]` |
| Tech stack cards | `Stack.tsx` — `stack[]` |
| Social links | `Contact.tsx` — `contactLinks[]` |
| Footer links | `Footer.tsx` |

### Swapping the profile photo

Replace `public/adarsh.png` with your own image. The aspect ratio container in `About.tsx` is `aspect-[0.78]` — a portrait ratio that works well for headshots.

### Changing the accent color

Update `--flame` in `src/index.css`. Every hover state, CTA, and highlight picks it up automatically.

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Manual

```bash
npm run build
# Upload the dist/ folder to any static host
```

---

## Featured Projects

| Project | Stack | Link |
|---------|-------|------|
| **EduCom** | React, Node.js, MongoDB, Stripe | [educomecommerce.vercel.app](https://educomecommerce.vercel.app) |
| **IEDC MGMCET** | Next.js, TypeScript, Cloudinary | [iedc.mgmcet.ac.in](https://iedc.mgmcet.ac.in) |
| **JeevanID** | React, Node.js, MongoDB | [jeevanid.vercel.app](https://jeevanid.vercel.app) |
| **BookNest** | React, Express, MongoDB | [booknest-u4rq.onrender.com](https://booknest-u4rq.onrender.com) |

---

## Contact

| Channel | Details |
|---------|---------|
| Email | [adarshantony223@gmail.com](mailto:adarshantony223@gmail.com) |
| GitHub | [@aadarshantony](https://github.com/aadarshantony) |
| LinkedIn | [linkedin.com/in/adarshantony](https://linkedin.com/in/adarshantony) |
| Instagram | [@aadarshantony](https://instagram.com/aadarshantony) |

---

<div align="center">

Designed & developed by **Adarsh Antony** · Kerala, India · 2026

*Built with React + TypeScript + Tailwind CSS*

</div>