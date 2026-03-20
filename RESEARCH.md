# 📚 Web Stack Research Notes — Astro + Tailwind + Vercel

**Date:** March 19, 2026
**Purpose:** Learn from reputable creators and official docs to optimize our client website build process.

---

## Official Stack Best Practices (from docs)

### Astro + Tailwind v4 Setup (Official)
- Use `@tailwindcss/vite` plugin (NOT the old `@astrojs/tailwind` integration)
- Import with `@import "tailwindcss"` in global.css
- No `tailwind.config.js` needed in v4 — use `@theme` in CSS instead
- We're doing this correctly ✅

### Astro 5.0 Key Features (relevant to us)
- **Content Layer** — Load content from anywhere (Markdown, APIs, CMS). Could use this for client sites if they want a blog or CMS
- **Server Islands** — Mix static + dynamic content on same page. Useful for contact forms or live inventory
- **Simplified prerendering** — No more output mode confusion. Static by default, add adapter for dynamic
- **Content collections build 5x faster** in v5

### Astro Styling
- Scoped styles by default (great for component isolation)
- Can use `:global()` for child component styling
- CSS variables via `define:vars` directive
- `class:list` for dynamic class names

### Vercel Deployment
- Auto-detects Astro framework
- Builds on push to main (CI/CD built-in)
- Preview deployments on every PR
- We're logged in as `kevin-7152s-projects` ✅

---

## YouTube Videos to Watch (Curated)

### 🏆 Top Priority
1. **"Astro One-Page Business Website Tutorial"** — <https://youtube.com/watch?v=5xfjKuCVAMQ>
   - Covers template to production workflow
   - Uses Astro + Tailwind + "Content Island"
   - Mentions Vercel deployment
   - **Watch this first** — directly matches our use case

2. **"Build a Complete Portfolio Website with Astro & Tailwind CSS"** (Series) — <https://youtube.com/watch?v=rcVLhGdn_Po>
   - Full series from scratch
   - Multi-page site with routing
   - Good for understanding page structure

3. **"Astro Crash Course 2024"** — <https://youtube.com/watch?v=etcbjbzeeiE>
   - Getting started with Astro
   - Tailwind setup included
   - Good fundamentals refresher

### 🔧 Deployment Focused
4. **"Publish Your Astro Site to Vercel"** — <https://youtube.com/watch?v=_bDVjVbHJbQ>
   - Vercel deployment specifically
   - Automating content updates
   - Part 2 of the business template tutorial

### 💡 Design Inspiration
5. **"Build & Deploy Responsive Landing Page with Astro + Tailwind"** — <https://youtube.com/watch?v=Uc9XtyELidI>
   - Frontend Mentor project approach
   - Responsive design patterns
   - Good for client site quality bar

---

## Key Takeaways for Our Process

### What We're Doing Right ✅
- Astro + Tailwind v4 with @tailwindcss/vite plugin
- Vercel adapter for deployment
- Component-based architecture (Navbar, Footer, Layout)
- CSS variables for theming (easy client customization)
- Scoped styles for component isolation
- Static output (fast, SEO-friendly)

### What We Should Add/Improve 📋
1. **Content Layer** — Use for client sites that want editable content (blog, services list, testimonials)
2. **JSON-LD structured data** — Local business schema for SEO (already planned)
3. **Contact form with Astro Actions** — Server-side form handling (Astro 5 feature)
4. **`@theme` for Tailwind v4** — Define client colors in CSS theme instead of CSS variables separately
5. **Image optimization** — Use Astro's built-in `<Image>` component for client photos
6. **Sitemap generation** — `@astrojs/sitemap` integration for SEO
7. **Preview deployments** — Every git push gets a preview URL on Vercel (show clients)
8. **Component library** — Pre-built sections (hero, services, testimonials, CTA) for faster builds

### Pricing/Packaging Insight
From researching how agencies use this stack:
- Static Astro sites can be built in 2-4 hours once scaffolded
- Vercel free tier handles everything we need
- Can charge premium for custom design, basic for template-based
- Monthly retainer option for content updates (easy with Content Layer + CMS)

---

## Resources to Bookmark
- Astro Docs: <https://docs.astro.build>
- Tailwind v4 Docs: <https://tailwindcss.com/docs>
- Vercel Docs: <https://vercel.com/docs>
- Astro Themes/Templates: <https://astro.build/themes>
- Tailwind UI Components: <https://tailwindui.com>
- Astro Examples: <https://github.com/withastro/astro/tree/main/examples>

---

*Research by Sunny ☀️ — Updated as we learn more*
