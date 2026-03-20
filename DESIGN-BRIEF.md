# 🎨 ABC Electrical — Premium Design Brief

**Goal:** Transform the current site into a $20,000-caliber website with premium animations, photography, typography, and interactions.

---

## Design Direction: **Modern Luxury Tradesman**

Think: A premium electrical company that feels more like a high-end architecture firm. Clean, confident, with subtle warmth. Not corporate cold, not blue-collar basic — the sweet spot of "these people are serious professionals who also care about craft."

---

## 1. Color Palette

**Ditch generic blue/orange. Go with:**

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Deep Charcoal | `#0f172a` | Nav, hero bg, footer |
| Secondary | Warm Amber/Gold | `#d4a843` | CTAs, accents, highlights |
| Surface | Off-White | `#fafaf9` | Page backgrounds |
| Text | Slate | `#334155` | Body copy |
| Light | Stone | `#e7e5e4` | Section borders, dividers |
| Accent | Electric Teal | `#0d9488` | Subtle accent, hover states |

**Why:** Charcoal + gold = premium/trust. Teal adds modern energy (electricity!). Feels expensive without being stuffy.

---

## 2. Typography

**Headings:** **DM Serif Display** (Google Fonts) — elegant, authoritative, serif with character
**Body:** **DM Sans** (Google Fonts) — clean geometric sans, pairs perfectly with DM Serif
**Accent:** **Space Mono** (Google Fonts) — for small labels, badges, service tags

**Why DM Serif + DM Sans:** This is a classic premium pairing. It's used by high-end brands and agencies. NOT Inter, NOT Roboto. Has real personality.

```
font-family: 'DM Serif Display', serif;    /* headings */
font-family: 'DM Sans', sans-serif;        /* body */
font-family: 'Space Mono', monospace;      /* labels/tags */
```

---

## 3. Premium Sections (page by page)

### 🏠 HERO — Full-Screen Impact
- **Full-viewport height** with a dramatic electrical photo (sparks, panel close-up, or electrician at work in golden hour light)
- **Dark overlay** (gradient from charcoal to transparent) with text overlaid
- **Large serif headline:** "Powering Vancouver's Homes Since 2012"
- **Animated counters:** "500+ Projects | 12 Years | 24/7 Service" — numbers count up on load
- **Sticky CTA button** that pulses subtly
- **Subtle parallax** on the background image as you scroll down
- **Scroll indicator** at bottom (animated chevron)

### ⚡ SERVICES — Interactive Cards
- **3-4 service cards** in a grid, each with a high-quality photo background
- Cards **expand on hover** to reveal service details (CSS-only or smooth JS transition)
- **Staggered scroll-in** animation — cards appear one by one as you scroll
- Icons are **custom SVGs** (not emoji, not generic icons)
- Services: Residential, Commercial, Emergency, EV Chargers, Panel Upgrades

### 👷 ABOUT — Split Layout
- **Split screen:** Photo on left (electrician/team), text on right
- **Parallax offset** — the image moves at a different speed than text
- **Stats bar:** Years, projects, team size with animated count-up
- **Certifications/badges** section with subtle hover effects
- **"Our Process" timeline** — horizontal stepper with animated progress

### 📸 GALLERY — Masonry/Lightbox
- **Masonry grid** layout (not uniform boring grid)
- **Hover effect:** dark overlay + project name appears
- **Lightbox** on click with smooth zoom transition
- Categories/filters: Residential, Commercial, Emergency
- Lazy-loaded images with **blur-up placeholder**

### 💬 TESTIMONIALS (NEW SECTION)
- **Carousel/slider** with client quotes
- **Star ratings** with real review snippets
- **Google Reviews integration** — show actual star count
- Auto-rotating with manual navigation
- Each testimonial has: quote, name, service type, star rating

### 📞 CONTACT — Full-Width CTA
- **Full-width background** with dramatic photo
- **Two columns:** Contact form + map/info
- **Form validation** with real-time feedback
- **Social proof strip** above: "Trusted by 500+ Vancouver homeowners"
- **Phone number** prominent with click-to-call on mobile

---

## 4. Animations & Interactions

### On Page Load
- **Staggered reveal** — elements fade in one by one (100ms delay between each)
- **Text reveal** — heading slides up from behind a mask
- **Logo animation** — subtle fade + scale

### On Scroll (AOS Library)
- **Fade up** — sections slide up and fade in as they enter viewport
- **Counter animation** — numbers count up when visible
- **Scale in** — images scale from 95% to 100% on reveal
- **Left/Right slide** — split sections slide in from sides

### Navigation
- **Transparent → solid on scroll** — nav starts transparent over hero, becomes solid charcoal after 100px scroll
- **Smooth scroll** to sections when clicking nav links
- **Mobile:** Full-screen slide-out menu with staggered link animations

### Micro-interactions
- **Buttons:** Subtle scale (0.98) on press, shadow lift on hover
- **Cards:** Shadow deepens + slight translateY(-4px) on hover
- **Links:** Underline slides in from left on hover
- **Images:** Slight zoom on hover

---

## 5. Libraries to Install

```
# Scroll animations (lightweight, ~14KB)
npm install aos

# Smooth scrolling (luxury feel)
npm install lenis

# GSAP for hero animations (optional, premium feel)
npm install gsap
```

---

## 6. Photo Sources (Royalty-Free)

**Unsplash** (best quality):
- Search: `electrician`, `electrical panel`, `residential electrical`, `wiring`, `construction worker`, `power lines`, `home renovation`, `modern kitchen lighting`, `circuit breaker`, `commercial building`

**Pexels** (good alternative):
- Search: `electrician at work`, `home electrical`, `emergency repair`, `industrial lighting`

**Specific photos needed:**
1. Hero — dramatic shot (electrician working, sparks, or modern home exterior)
2. About — team/person portrait (warm, professional)
3. Services — 1 photo per service type
4. Gallery — 6-8 project photos (before/after, installations, panels)
5. Contact — commercial/residential building or Vancouver skyline

---

## 7. Technical Implementation Order

### Phase A: Foundation (do first)
1. Install AOS + Lenis
2. Add Google Fonts (DM Serif Display, DM Sans, Space Mono)
3. Update color palette in global.css
4. Create base animation styles

### Phase B: Hero Section
5. Full-screen hero with background image
6. Animated headline reveal
7. Counter animation
8. Transparent-to-solid nav

### Phase C: Content Sections
9. Redesign services section with hover cards
10. Split layout about section
11. Masonry gallery with lightbox
12. New testimonials carousel

### Phase D: Polish
13. Contact section redesign
14. Smooth scrolling (Lenis)
15. Mobile optimization
16. Performance audit (Lighthouse)

---

## 8. Visual Reference

**Vibe to aim for:**
- Dark hero with gold accents (like a luxury real estate site)
- Clean sections with generous whitespace
- Photography does the heavy lifting
- Animations are subtle and purposeful (not distracting)
- Every scroll reveals something intentional

**Sites to reference for feel:**
- Awwwards home services category
- High-end architecture firm websites
- Tesla's website (clean, dark, premium, electric theme)
- Stripe's website (smooth animations, clean typography)

---

*Design Brief by Sunny ☀️ — Ready for implementation*
