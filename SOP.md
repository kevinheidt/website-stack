# 🏗️ Website Factory SOP - Complete Workflow
**The Bakery Analogy: Ingredients → Kitchen → Oven → Delivery Truck**

**Purpose:** Step-by-step process for building, deploying, and delivering client websites using our complete AI-powered workflow. Follow this every time.

---

## 🎯 The Big Picture Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    WEBSITE FACTORY WORKFLOW                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. SUNNY (Project Manager)                                │
│     → Copy, content, strategy, requirements                 │
│     → Uses relevant skills for each phase                   │
│                         ↓                                   │
│  2. KIMI CODE CLI (Builder)                                │
│     → Reads codebase, edits files, runs commands            │
│     → Web UI: http://192.168.1.244:5494                    │
│     → CLI: cd project && kimi                              │
│                         ↓                                   │
│  3. GITHUB (Filing Cabinet)                                │
│     → git add → git commit → git push                      │
│     → Repository: kevinheidt/website-stack (private)       │
│                         ↓                                   │
│  4. VERCEL (Delivery Truck)                                │
│     → Auto-deploys on push to main                         │
│     → Live in ~30 seconds                                  │
│                         ↓                                   │
│  5. LIVE SITE                                              │
│     → https://website-stack-snowy.vercel.app/              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Phase 1: Kickoff & Strategy (Sunny + Skills)

### Step 1: Gather Client Info
- **Business name, colors, phone, email, address, services, logo**
- **Target audience, unique selling proposition, competitors**
- **Budget, timeline, special requirements**

### Step 2: Apply Relevant Skills

**🎨 Design Strategy (Choose ONE design system):**
```bash
# Use UI Designer Skill for design direction
Skill: ui-designer
Systems available: Material You, Fluent Design, Apple HIG, Ant Design, 
                   Carbon Design, Shopify Polaris, Minimalism, Glassmorphism, 
                   Neo-Brutalism, Neumorphism, Skeuomorphism, Claymorphism, 
                   Swiss Design, Atlassian Design

# For premium anti-AI-slop designs
Skill: anthropic-frontend-design
Philosophy: Avoid generic AI aesthetics, bold creative choices
```

**✍️ Copywriting Strategy:**
```bash
# Use Copywriting Skill for persuasive copy
Skill: copywriting
Frameworks: AIDA, PAS, FAB
Focus: Headlines, CTAs, emotional triggers, objection handling
```

**🏠 Homepage Optimization:**
```bash
# Use High-Converting Homepage Skill
Skill: high-converting-homepage
Methodology: Ryan Deiss's "Craft A High-Converting Homepage"
Principles: 7-second test, core message first, clear CTAs
```

### Step 3: Create Project Documentation
1. **Design Brief** (`DESIGN-BRIEF.md`) - Visual direction, colors, typography
2. **Copy Document** - All website text, headlines, CTAs
3. **Build Prompt** (`KIMI-BUILD-PROMPT.md`) - Instructions for Kimi
4. **Site Config** (`site.config.json`) - Client details for template

### Step 4: Choose Template Base
- **Start from scaffold** in `website-stack` folder
- **Never build from scratch** - use existing components
- **Create new repo** on GitHub (private)
- **Clone to workspace** and copy scaffold files

---

## 🛠️ Phase 2: Build with Kimi Code

### Step 5: Access Kimi Code
**Two access methods:**
1. **Web UI:** Open `http://192.168.1.244:5494` in browser
2. **CLI:** `cd ~/.openclaw/workspace/website-stack && kimi`

### Step 6: Prepare Kimi Build Prompt
**Template for Kimi:**
```
Build a complete [X]-page website for [Client Name] using Astro and Tailwind CSS v4.

Read the brief at DESIGN-BRIEF.md for ALL design specs.
Read the copy document for ALL website text.

Design requirements:
- Colors: [Primary Color] #hex, [Accent Color] #hex, [Background Color] #hex
- Typography: [Font Family] for headings, [Font Family] for body
- Fully responsive (mobile-first)
- Sticky navigation with mobile hamburger menu
- Smooth scroll
- [Design System: e.g., Modern Luxury Tradesman, Premium Anti-AI-Slop]

Pages to create:
1. src/pages/index.astro — Homepage (hero, trust bar, services preview, testimonials, CTA)
2. src/pages/about.astro — About page
3. src/pages/services.astro — Services page
4. src/pages/gallery.astro — Gallery/projects page
5. src/pages/contact.astro — Contact page with form

Also create/update:
- src/layouts/main.astro — Base layout with nav, footer, SEO meta tags
- src/components/ — Reusable components (Navbar.astro, Footer.astro, Hero.astro, etc.)
- src/styles/global.css — Global styles and Tailwind import

Use the EXACT copy from the document. Do not paraphrase.
Use placeholder images from https://placehold.co for the gallery.
Make the contact form functional HTML (action="#", method="POST").

Build all pages complete and production-ready.
```

### Step 7: Kimi Build Process
1. **Paste prompt** into Kimi Web UI
2. **Kimi reads** existing codebase and documentation
3. **Kimi creates** all required files
4. **Kimi runs** local tests (`npm run dev`, `npm run build`)
5. **Review output** in Kimi interface

### Step 8: Local Testing
```bash
# In the project directory
cd ~/.openclaw/workspace/website-stack

# Start dev server
npm run dev
# Open http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✨ Phase 3: Polish & Review

### Step 9: Apply Quality Skills

**🎯 High-Converting Homepage Audit:**
```bash
# Use the 7-point audit checklist
Skill: high-converting-homepage
Check: 7-second test, core message clarity, CTA effectiveness
```

**♿ Accessibility Check:**
```bash
# Use UI Designer Skill for accessibility
Skill: ui-designer
Focus: WCAG AA/AAA contrast, semantic HTML, keyboard navigation
```

**📱 Mobile Testing:**
- **Hamburger menu** functionality
- **Tap targets** (minimum 44x44px)
- **Form usability** on mobile
- **Image optimization** for mobile

### Step 10: Cross-Browser Testing
- **Chrome** (latest)
- **Safari** (latest)
- **Firefox** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### Step 11: Performance Audit
```bash
# Run Lighthouse audit (target 90+ on all metrics)
# Check: Performance, Accessibility, Best Practices, SEO
```

### Step 12: Kevin Review
- **Screenshot** or **live preview link** for approval
- **Make revisions** via Kimi if needed
- **Approval required** before deployment

---

## 🚀 Phase 4: Deploy to Production

### Step 13: Git Operations
```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Complete [Client Name] website - [Date]"

# Push to GitHub
git push origin main
```

### Step 14: Vercel Deployment
**CRITICAL: Use Web UI, NOT CLI**
1. **Go to** `vercel.com/new`
2. **Import** your GitHub repository
3. **Vercel auto-detects** Astro project
4. **Click Deploy**

**Auto-deploy flow:**
```
Push to main      → Production Deploy (live site)
Push to any branch → Preview Deploy (preview URL)
Open PR           → Preview URL for review
```

### Step 15: Custom Domain (If Needed)
1. **Add domain** in Vercel dashboard
2. **Update DNS** records at domain registrar
3. **Wait for propagation** (up to 48 hours)

### Step 16: Final Smoke Test
1. **Visit live URL**
2. **Click every page**
3. **Test all forms**
4. **Check all links**
5. **Verify mobile responsiveness**

---

## 📤 Phase 5: Handoff & Documentation

### Step 17: Client Delivery
- **Live URL** to client
- **Vercel login credentials** (if client wants access)
- **GitHub repo access** (if client wants code access)

### Step 18: Document Access
**Store securely in credentials folder:**
```
~/.openclaw/credentials/[client-name]/
├── vercel-credentials.txt
├── domain-credentials.txt
└── notes.md
```

### Step 19: Archive in GoHighLevel
1. **Create/update contact** with website info
2. **Add website URL** to contact record
3. **Tag with** `website-client`, `[industry]`
4. **Add notes** about project scope and dates

### Step 20: Project Closure
1. **Set repo to private** (if not already)
2. **Update project status** in memory files
3. **Document lessons learned** in `learnings.md`
4. **Invoice client** (if applicable)

---

## ⚡ Speed Tips & Best Practices

### Kimi Code Optimization:
- **Be specific** in build prompts - Kimi follows exact instructions
- **Reference existing files** - Kimi can read and modify existing code
- **Test locally first** - Use `npm run dev` before pushing
- **Iterative changes** - Small commits are better than one big change

### Design System Selection:
```
Is client premium/brand-focused?
├── Yes → Use anthropic-frontend-design (anti-AI-slop)
└── No → Choose from ui-designer systems based on client vibe

Need maximum conversions?
├── Yes → Apply high-converting-homepage principles
└── No → Focus on aesthetics and usability
```

### Git Workflow:
```bash
# Feature branch workflow (recommended)
git checkout -b feature/client-name-homepage
# Make changes
git add . && git commit -m "Update homepage"
git push origin feature/client-name-homepage
# Create PR on GitHub, merge after review
```

---

## 🚫 Known Pitfalls & Solutions

### Pitfall 1: Vercel CLI Issues
**❌ DON'T:** Use `vercel` CLI command
**✅ DO:** Use web UI at `vercel.com/new`

### Pitfall 2: Astro Base Path Issues
**❌ DON'T:** Rely only on `astro.config.mjs` base path
**✅ DO:** Manually check all internal links work

### Pitfall 3: Mobile Menu Problems
**❌ DON'T:** Deploy without testing hamburger menu
**✅ DO:** Test on actual mobile device or Chrome DevTools

### Pitfall 4: Public Repositories
**❌ DON'T:** Leave client repos public
**✅ DO:** Set to private before handoff

### Pitfall 5: Missing .nojekyll
**❌ DON'T:** Forget `.nojekyll` for GitHub Pages backup
**✅ DO:** Add empty `.nojekyll` file to root

### Pitfall 6: Kimi Context Loss
**❌ DON'T:** Assume Kimi remembers previous context
**✅ DO:** Provide full context in each prompt

---

## 🔧 Troubleshooting Guide

### Kimi Web UI Not Responding:
```bash
# Check if Kimi server is running
curl -s http://192.168.1.244:5494

# Restart Kimi if needed
# (Check process and restart instructions)
```

### Vercel Build Fails:
1. **Check `astro.config.mjs`** - Ensure Vercel adapter is configured
2. **Check `package.json`** - All dependencies installed
3. **Check build logs** in Vercel dashboard
4. **Test locally** with `npm run build`

### Git Push Issues:
```bash
# Check remote URL
git remote -v

# Force push if needed (use with caution)
git push -f origin main
```

### Tailwind Not Updating:
```bash
# Clear cache and rebuild
rm -rf node_modules/.cache
npm run build
```

---

## 📊 Success Metrics

### Technical Metrics:
- **Deployment time:** < 30 seconds after push
- **Lighthouse scores:** 90+ on all categories
- **Mobile performance:** < 3-second load time
- **Error rate:** < 1% of page loads

### Business Metrics:
- **Build time:** < 8 hours for 5-page site
- **Revision turnaround:** < 30 minutes
- **Client satisfaction:** > 4.5/5 rating
- **Repeat business:** > 40% of clients

### Process Metrics:
- **Kimi accuracy:** > 90% of builds correct first time
- **Git commits:** Average 3-5 commits per site
- **Review cycles:** Average 1-2 rounds of revisions
- **Handoff time:** < 1 hour after final approval

---

## 🎯 Quick Reference Cheat Sheet

| What | Tool | You Do |
|------|------|--------|
| Plan & write words | Sunny (Discord) + Skills | Chat with me here |
| Design direction | UI Designer / Anthropic Skill | Choose design system |
| Copywriting | Copywriting Skill | Apply AIDA/PAS frameworks |
| Homepage optimization | High-Converting Homepage Skill | Apply 7-second test |
| Build the site | Kimi Code Web UI | Open `192.168.1.244:5494` |
| Local testing | Terminal | `npm run dev` → `localhost:4321` |
| Save your work | GitHub | `git add . && git commit && git push` |
| Go live | Vercel Web UI | `vercel.com/new` → Import repo |
| Revisions | Kimi Code | "Change X to Y" → push → done |

---

## 📁 File Structure Reference

```
website-stack/
├── DESIGN-BRIEF.md          # Visual design specifications
├── KIMI-BUILD-PROMPT.md     # Instructions for Kimi
├── site.config.json         # Client configuration
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind theme
├── package.json             # Dependencies
├── src/
│   ├── components/          # Reusable components
│   ├── layouts/             # Page layouts
│   ├── pages/               # Website pages
│   └── styles/              # Global styles
└── public/                  # Static assets
```

---

## 🔄 Revision Workflow

1. **Client requests change** (email, call, message)
2. **You tell Sunny** exact change needed
3. **Sunny creates** precise Kimi prompt
4. **You open Kimi Web UI** and paste prompt
5. **Kimi implements** change, tests locally
6. **You push changes** to GitHub
7. **Vercel auto-deploys** (~30 seconds)
8. **Client reviews** live site
9. **Repeat** if needed

**Average revision time:** 5-15 minutes from request to live

---

*Last updated: March 19, 2026 - Complete workflow with skills integration*
*Version: 2.0 - Kimi Code + Skills Enhanced*