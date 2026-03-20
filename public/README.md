# Kettle & Grain Bakery — V2 Bold Redesign

A complete redesign of the Kettle & Grain Bakery website with bold, editorial design.

## What's New in V2

### Design Philosophy
- **Asymmetric layouts** — Breaking the grid with unexpected compositions
- **Typography-first** — Giant Playfair Display headlines that dominate
- **Editorial feel** — Magazine-style layouts, not template cards
- **Visual tension** — Overlapping elements, dramatic scale contrasts

### Key Features

**Hero Section**
- Full viewport height
- Giant stacked "SLOW / BREAD." typography (up to 12rem)
- Cropped bread image as side panel
- Gradient overlay blending image into cream background

**Stats Bar**
- Dark (#1c1c1c) horizontal band
- Large wheat gold numbers
- All-caps letter-spaced labels
- Dot separators between stats

**Editorial Layouts**
- Featured item large left, stacked items right
- Alternating zig-zag layouts for pastries
- Full-bleed imagery with text overlays

**CSS Techniques Used**
- CSS Grid with named areas
- CSS custom properties for all brand tokens
- Grain texture overlay using SVG noise filter
- clip-path for angled section edges
- Intersection Observer for scroll reveals
- Sticky nav with scroll-triggered background change

### Pages
1. **Home** — Hero, stats bar, featured breads (editorial layout), story teaser, farm partners (full-bleed), open kitchen (split screen)
2. **Our Bread** — Editorial product layouts, alternating pastry grid, dark seasonal section
3. **Our Story** — Long-form narrative, split-screen grain section, partner details
4. **Order / Visit** — Clean form layout, map embed

### Typography Scale
- Display XL: clamp(4rem, 12vw, 12rem)
- Display LG: clamp(3rem, 8vw, 7rem)
- Display MD: clamp(2rem, 5vw, 4rem)
- Labels: 0.75rem, uppercase, letter-spacing: 0.2em

### Colors
- Cream: #f5f0e8
- Cream Dark: #e8e0d4
- Charcoal: #1c1c1c
- Wheat: #c8922a
- Sage: #7a8c6e

### File Structure
```
kettle-grain/
├── index.html
├── our-bread.html
├── our-story.html
├── order-visit.html
├── css/
│   └── style.css (single consolidated stylesheet)
└── README.md
```

JavaScript is embedded in each page for simplicity — mobile menu, scroll effects, and form handling.

## Images
All from Unsplash:
- Hero: Artisan sourdough
- Bread close-ups
- Wheat fields
- Bakery kitchen
- Croissants
- Heritage grain
