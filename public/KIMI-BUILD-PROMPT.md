# 🍞 Kettle & Grain Bakery - Complete Website Build Prompt

## PROJECT OVERVIEW
Build a complete, custom-designed website for **Kettle & Grain Bakery** — a small-batch artisan sourdough bakery in Kelowna, BC run by Marcus Holt. This is a TEST of full design and development capabilities.

**CRITICAL REQUIREMENTS:**
- Do NOT use Astra theme or any page builder
- Build from scratch in HTML, CSS, and vanilla JS (or Astro if you prefer)
- Save all files to: `/Users/brightsidehome/.openclaw/workspace/website-stack/kettle-grain/`
- All pages must be functional and visually polished

## BRAND IDENTITY
- **Name:** Kettle & Grain Bakery
- **Tagline:** Slow bread. Real grain. Okanagan made.
- **Vibe:** Honest craft. Raw wood, linen, natural light. Okanagan farm meets European bakery. NOT hipster-precious.

## DESIGN SPECIFICATIONS

### Color Palette
- **Warm cream:** `#f5f0e8` (background)
- **Deep charcoal:** `#1c1c1c` (text, accents)
- **Wheat gold:** `#c8922a` (accent, buttons, highlights)
- **Dusty sage:** `#7a8c6e` (secondary accent)

### Typography
- **Headings:** Playfair Display (Google Fonts)
- **Body:** Inter (Google Fonts)
- **System fallback:** Georgia, serif / -apple-system, sans-serif

### Design Requirements
1. **Fully custom** — no templates, no themes
2. **Mobile responsive** — mobile-first approach
3. **Hero section** with full-width bread image and overlaid tagline
4. **Smooth scroll navigation**
5. **Subtle grain/texture CSS background** on some sections (use CSS patterns)
6. **Open kitchen "watch us bake"** section with large image
7. **Farm partner cards** with photos
8. **Footer** with hours, address, Instagram handle (@kettleandgrain)

## IMAGE SOURCES (Unsplash)
Use these search terms to find and embed direct URLs (do NOT download):

1. **"sourdough bread artisan"** - Hero image (full-width)
2. **"wheat field golden okanagan"** - Farm partners section background
3. **"bakery open kitchen"** - Open kitchen section (large image)
4. **"heritage grain flour mill"** - Our Story page background
5. **"farmer wheat okanagan"** - Farm partner card images

## PAGES TO BUILD

### 1. HOME PAGE (`index.html`)

#### Hero Section
```
Slow bread. Real grain. Okanagan made.

Subhead: We mill heritage wheat from two Okanagan farms and ferment it for 18 hours minimum. This is what bread is supposed to taste like.

CTA button: See What's Baking (links to Our Bread page)
```

#### Featured Section
```
Header: This week's loaves

Bread 1 — Country Sourdough
Our flagship. A naturally leavened loaf with an open crumb, crackled crust, and a depth of flavour that only comes from cold-fermented heritage wheat. Made fresh Tuesday, Thursday, Saturday.

Bread 2 — Okanagan Harvest Loaf
A seasonal blend of red fife and einkorn from Cold Creek Grain. Nutty, slightly sweet, dense in the best way. Limited batches — first come, first served.

Bread 3 — Laminated Butter Croissant
72-hour lamination. Cultured butter from a small BC dairy. Shatters when you bite it. That's intentional.
```

#### Our Story Teaser
```
Marcus started baking out of frustration. He'd eaten real bread in Lyon, in Copenhagen, in a tiny village outside Bologna — and couldn't find anything close back home. So he built a wood-fired oven in his backyard, started calling farmers, and eventually outgrew his kitchen. Kettle & Grain opened in 2019. The oven is bigger now. The philosophy hasn't changed.

Link: Read the full story → (links to Our Story page)
```

#### Farm Partners Section
```
Header: Grain you can trace

Sunrise Heritage Farms — Oyama, BC
The Sunrise family has been farming the Okanagan bench for three generations. They grow red fife, spelt, and heritage hard red wheat using no-till methods. We've been their exclusive bakery partner since 2020.

Cold Creek Grain — Vernon, BC
Dale Whitford started Cold Creek after leaving commodity grain farming. He wanted to grow varieties that actually had flavour. We source his einkorn and emmer exclusively. Meet Dale when you visit — he's usually around on Saturdays.
```

#### Open Kitchen Callout
```
Watch it being made.
Our kitchen has no secrets. Come any morning and you'll see Marcus and the team shaping loaves, laminating dough, pulling trays. The glass wall isn't a gimmick — it's an invitation.
```

#### Hours/Location Strip
```
Tuesday – Friday: 7am – 2pm or sellout
Saturday: 7am – 1pm (our biggest bake day)
Sunday – Monday: Closed
1142 Ellis Street, Kelowna BC
Free parking behind the building.
```

### 2. OUR BREAD PAGE (`our-bread.html`)

#### Header
```
The bread
Intro: Everything is made in small batches, baked fresh three to five times a week. We don't freeze. We don't reheat. When it's gone, it's gone. Here's what we make.
```

#### Sourdoughs Section
```
Country Sourdough — $9
Our everyday loaf. Heritage hard red wheat, 18-hour cold ferment, naturally leavened. Crackling crust, open crumb. The one you'll come back for every week.

Okanagan Harvest — $11
Seasonal blend of red fife and einkorn. Earthy, nutty, slightly sweet. Baked in limited quantities on Saturdays only.

Seeded Rye — $10
40% dark rye, 60% heritage wheat. Caraway, sunflower, flax. Dense, satisfying, made for cheese and cold butter.

Whole Wheat Miche — $10
An old-style country loaf. 80% whole wheat, 20% white. Mild tang, soft crumb, beautiful ear. The bread your grandparents would recognise.
```

#### Pastries Section
```
Laminated Butter Croissant — $4.50
72 hours of lamination. Cultured BC butter. Honeycombed interior. The real thing.

Almond Croissant — $5
Day-old croissants soaked in syrup, filled and topped with house-made frangipane. Better than the original. We mean that.

Morning Bun — $4
Laminated dough, rolled in cinnamon sugar and orange zest. Sticky, flaky, impossible to eat gracefully.

Kouign-Amann — $5.50
Breton butter cake. Caramelised, salty, layered. Made Fridays only. Sells out by 8:30am.
```

#### Seasonal Specials
```
Every season we develop two or three specials using whatever grain, fruit, or inspiration is around. Right now: fig and fennel focaccia, pear and cardamom galette. Ask at the counter or follow us on Instagram for weekly updates.
```

### 3. OUR STORY PAGE (`our-story.html`)

#### Header
```
How we got here
```

#### Section 1 — Marcus
```
Marcus Holt grew up in a family that cooked seriously but baked casually. Bread was sliced from a plastic bag. That was fine until it wasn't.

In 2011, on a three-month trip through France, Italy, and Denmark, Marcus started paying attention to bread the way some people pay attention to wine. The crust. The crumb. The sour. He took notes. He asked bakers questions in broken French and worse Italian. He came home with an obsession and no good outlet for it.

For three years he baked in his kitchen on weekends, reading Tartine Bread and Chad Robertson until the pages fell apart, adjusting hydration and timing by trial and error. He built a small wood-fired oven in the backyard. His neighbours started leaving notes asking to buy loaves.

In 2019, Marcus signed a lease on a small space on Ellis Street. Kettle & Grain opened with four loaves and a lineup of eight people who'd been following him on Instagram. They sold out in forty minutes.
```

#### Section 2 — The grain
```
Most bakeries buy flour from a mill. We buy grain from farmers and mill some of it ourselves.

It started with a conversation. Marcus met James Sunrise at a farmers market in 2018 and asked what heritage grains he was growing. James grew red fife, spelt, and a hard red wheat his grandfather had sourced from a Ukrainian seed bank in the 1960s. Nobody in the region was buying it for bread. Marcus started buying it the next week.

Cold Creek Grain came later. Dale Whitford reached out after hearing about Kettle & Grain through a farming forum. He'd been growing einkorn and emmer — ancient wheats with more protein, more flavour, and a lot less commercial demand. They've been working together since 2021.

Sourcing this way costs more and requires more work. The flour behaves differently batch to batch depending on the harvest. Marcus considers that a feature, not a bug.
```

#### Section 3 — The open kitchen
```
We don't hide what we do.

The glass wall facing Ellis Street wasn't in the original plan — it came from a conversation with the contractor who pointed out we had a beautiful workspace and were about to brick it in. Good call.

Come by any morning and you'll see the full operation: dough being mixed and shaped, lamination happening on the big marble table, loaves coming out of the Oskar oven Marcus imported from a bakery equipment maker in Lyon. There's no performance to it. It's just the work, visible.
```

### 4. ORDER / VISIT PAGE (`order-visit.html`)

#### Header
```
Come find us
```

#### Pre-order Intro
```
We bake in limited quantities and sell out most days. Pre-ordering for Saturday pickup guarantees your loaves. Fill out the form below and we'll confirm by Thursday evening.
```

#### Form Fields (HTML form, static - no backend)
```
Name (input field)
Email (input field)
Phone (input field)
Pickup date (Saturdays only) (select/dropdown)
Country Sourdough — quantity (number input)
Okanagan Harvest — quantity (Saturdays only) (number input)
Seeded Rye — quantity (number input)
Whole Wheat Miche — quantity (number input)
Croissants — quantity (number input)
Notes / special requests (textarea)
Submit button: Reserve my order
```

#### Below Form
```
Orders are confirmed by email. Payment at pickup. We hold pre-orders until 9am — after that they go to the walk-in queue.
```

#### Visit Section
```
Kettle & Grain Bakery
1142 Ellis Street, Kelowna BC V1Y 1Z4

Hours:
Tuesday – Friday: 7am – 2pm or sellout
Saturday: 7am – 1pm
Sunday – Monday: Closed

Free parking off the alley behind the building. Street parking on Ellis is metered until 6pm.

We don't have a café — no seating, no coffee. Just bread, a counter, and the smell of something good baking.

Instagram: @kettleandgrain
Email: hello@kettleandgrain.ca
```

## TECHNICAL IMPLEMENTATION

### File Structure
```
kettle-grain/
├── index.html
├── our-bread.html
├── our-story.html
├── order-visit.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/ (optional - use Unsplash direct URLs)
└── README.md
```

### CSS Requirements
1. **Mobile-first responsive design**
2. **CSS Grid/Flexbox** for layouts
3. **Custom grain/texture backgrounds** using CSS patterns
4. **Smooth transitions** and hover effects
5. **Typography hierarchy** with proper spacing
6. **Color variables** in CSS custom properties

### JavaScript Requirements
1. **Smooth scroll navigation**
2. **Mobile hamburger menu toggle**
3. **Form validation** (client-side, basic)
4. **Image lazy loading** if needed
5. **No jQuery or heavy frameworks** - vanilla JS only

### Navigation Structure
- **Sticky header** with logo and nav
- **Mobile hamburger menu** (CSS/JS)
- **Active page highlighting**
- **Footer navigation** to all pages

### Footer Content (all pages)
```
Kettle & Grain Bakery
1142 Ellis Street, Kelowna BC V1Y 1Z4

Tuesday – Friday: 7am – 2pm or sellout
Saturday: 7am – 1pm
Sunday – Monday: Closed

Instagram: @kettleandgrain
Email: hello@kettleandgrain.ca
```

## DELIVERABLE EXPECTATIONS

1. **Complete 4-page website** with all content
2. **Fully responsive** on mobile, tablet, desktop
3. **Clean, semantic HTML5** markup
4. **Well-organized CSS** with comments
5. **Functional vanilla JavaScript**
6. **Visually polished** with attention to detail
7. **All images sourced** from Unsplash (direct URLs)
8. **Form structure** complete (static HTML)
9. **Navigation working** across all pages
10. **Consistent design** across all pages

## ADDITIONAL NOTES
- This is a **capability test** — show your best work
- Focus on **craftsmanship** and **attention to detail**
- The vibe should feel **authentic, not trendy**
- Use **realistic Unsplash images** that match the Okanagan/bakery aesthetic
- Make it feel like a **real bakery website** that Marcus would be proud of

## READY TO BUILD
Create the complete website in the specified directory. Use the exact copy provided. Follow the design specifications precisely. Build something beautiful that showcases both design and development skills.