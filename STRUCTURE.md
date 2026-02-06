# 🗺️ Frame Falcon Studios - Website Structure

## Page Layout (Single Page Application)

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVBAR                               │
│  [Logo] Frame Falcon Studios    [Links]    [Theme] [Menu]   │
└─────────────────────────────────────────────────────────────┘
│
├── 🎬 HERO SECTION
│   ├── Animated Background (Navy Blue gradient)
│   ├── Company Name & Tagline
│   ├── Call-to-Action Buttons
│   ├── Statistics (Projects, Clients, Experience)
│   └── Scroll Indicator
│
├── ⚙️ SERVICES SECTION
│   ├── Section Header
│   ├── 8 Service Cards:
│   │   ├── Teledrama Editing
│   │   ├── TV Commercials
│   │   ├── Music Video Editing
│   │   ├── Color Grading
│   │   ├── Theme Song Production
│   │   ├── AI Music Production
│   │   ├── Intro Making
│   │   └── Social Media Content
│   └── CTA Section
│
├── 📖 ABOUT SECTION
│   ├── Section Header
│   ├── Company Story (Left)
│   ├── Statistics Grid
│   └── Feature Cards (Right):
│       ├── Award-Winning Quality
│       ├── Expert Team
│       ├── Client-Focused
│       └── Cutting-Edge Tech
│
├── 🎨 PORTFOLIO SECTION
│   ├── Section Header
│   ├── Category Filter Buttons
│   ├── 6 Project Cards:
│   │   ├── Epic Teledrama Series
│   │   ├── Brand Commercial Campaign
│   │   ├── Chart-Topping Music Video
│   │   ├── Cinematic Color Grading
│   │   ├── Theme Song Production
│   │   └── Social Media Campaign
│   └── CTA Section
│
├── 💬 TESTIMONIALS SECTION
│   ├── Section Header
│   ├── 4 Testimonial Cards:
│   │   ├── Client 1 (TV Producer)
│   │   ├── Client 2 (Marketing Director)
│   │   ├── Client 3 (Music Artist)
│   │   └── Client 4 (Social Media Manager)
│   └── Trust Badges (Stats)
│
├── 📧 CONTACT SECTION
│   ├── Section Header
│   ├── Contact Information (Left):
│   │   ├── Email Card
│   │   ├── Phone Card
│   │   ├── Location Card
│   │   └── Business Hours Card
│   └── Contact Form (Right):
│       ├── Name Field
│       ├── Email Field
│       ├── Phone Field
│       ├── Service Selection
│       ├── Message Field
│       └── Submit Button
│
└── 🔗 FOOTER
    ├── Brand Section (Logo + Description)
    ├── Social Media Icons (5 platforms)
    ├── Navigation Links:
    │   ├── Company Links
    │   ├── Services Links
    │   └── Support Links
    └── Copyright & Legal Links

┌─────────────────────────────────────────────────────────────┐
│              💬 FLOATING WHATSAPP BUTTON                     │
│                  (Bottom Right Corner)                       │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
App (page.tsx)
│
├── Navbar.tsx
│   ├── Logo
│   ├── Navigation Links
│   ├── Theme Toggle (Light/Dark)
│   └── Mobile Menu
│
├── Hero.tsx
│   ├── Animated Background
│   ├── Headline & Description
│   ├── CTA Buttons
│   ├── Statistics
│   └── Visual Element
│
├── Services.tsx
│   ├── Section Header
│   ├── Service Cards (8x)
│   │   ├── Icon
│   │   ├── Title
│   │   ├── Description
│   │   └── Hover Effect
│   └── CTA Section
│
├── About.tsx
│   ├── Section Header
│   ├── Company Story
│   ├── Statistics Grid
│   └── Feature Cards (4x)
│
├── Portfolio.tsx
│   ├── Section Header
│   ├── Category Filter
│   ├── Project Grid (6x)
│   │   ├── Image/Placeholder
│   │   ├── Category Tag
│   │   ├── Title
│   │   └── Description
│   └── CTA Section
│
├── Testimonials.tsx
│   ├── Section Header
│   ├── Testimonial Cards (4x)
│   │   ├── Quote Icon
│   │   ├── Star Rating
│   │   ├── Review Text
│   │   └── Client Info
│   └── Trust Badges
│
├── Contact.tsx
│   ├── Section Header
│   ├── Contact Info Cards
│   │   ├── Email
│   │   ├── Phone
│   │   ├── Location
│   │   └── Business Hours
│   └── Contact Form
│       ├── Input Fields
│       ├── Validation
│       └── Submit Handler
│
└── Footer.tsx
    ├── Brand Section
    ├── Social Links (5x)
    ├── Navigation Columns (3x)
    ├── WhatsApp Button
    └── Copyright Bar
```

## File Structure

```
frame-falcon-website/
│
├── 📁 app/
│   ├── globals.css          ← Design system & animations
│   ├── layout.tsx            ← Root layout + SEO metadata
│   ├── page.tsx              ← Main page (imports all components)
│   └── loading.tsx           ← Loading screen
│
├── 📁 components/
│   ├── Navbar.tsx            ← Navigation (1,193 lines)
│   ├── Hero.tsx              ← Hero section (6,907 lines)
│   ├── Services.tsx          ← Services showcase (6,941 lines)
│   ├── About.tsx             ← About section (7,528 lines)
│   ├── Portfolio.tsx         ← Portfolio gallery (8,690 lines)
│   ├── Testimonials.tsx      ← Client reviews (6,745 lines)
│   ├── Contact.tsx           ← Contact form (14,147 lines)
│   └── Footer.tsx            ← Footer (8,425 lines)
│
├── 📁 public/               ← Static assets
│   └── (Add your images here)
│
├── 📁 node_modules/         ← Dependencies
│
├── 📄 package.json          ← Project dependencies
├── 📄 tsconfig.json         ← TypeScript config
├── 📄 next.config.ts        ← Next.js config
├── 📄 postcss.config.mjs    ← PostCSS config
│
└── 📚 Documentation/
    ├── README.md            ← Full documentation
    ├── SUMMARY.md           ← Project overview
    ├── QUICKSTART.md        ← Quick reference
    ├── IMAGE_GUIDE.md       ← Image implementation
    ├── FEATURES.md          ← Features checklist
    └── STRUCTURE.md         ← This file
```

## Data Flow

```
User Interaction
      ↓
  Navbar Click
      ↓
Smooth Scroll to Section
      ↓
  Section Animates In
      ↓
User Interacts with Content
      ↓
   (Examples)
      ↓
┌─────┴─────┬──────────┬──────────┐
│           │          │          │
Theme     Portfolio  Contact    WhatsApp
Toggle    Filter     Form       Button
│           │          │          │
↓           ↓          ↓          ↓
Update    Filter     Validate   Open
Theme     Projects   & Submit   WhatsApp
│           │          │          │
↓           ↓          ↓          ↓
Save to   Show       Show       Chat
localStorage Filtered Success   Window
            Items    Message
```

## Responsive Breakpoints

```
Mobile (< 768px)
├── Single column layout
├── Hamburger menu
├── Stacked sections
└── Touch-optimized

Tablet (768px - 1024px)
├── 2-column grid
├── Expanded navigation
├── Side-by-side content
└── Optimized spacing

Desktop (> 1024px)
├── Full multi-column layout
├── Horizontal navigation
├── Maximum content width: 1200px
└── Enhanced hover effects
```

## Color System

```
Light Mode                Dark Mode
├── Background: White     ├── Background: Navy (#0a1628)
├── Text: Navy Blue       ├── Text: White (#f8fafc)
├── Accent: Light Blue    ├── Accent: Light Blue (#60a5fa)
└── Cards: White          └── Cards: Dark Navy (#1e293b)
```

## Animation Timeline

```
Page Load
    ↓
Navbar: Fade In (0s)
    ↓
Hero: Slide In Left (0.2s)
    ↓
Services: Stagger Fade (0.4s - 1.2s)
    ↓
About: Slide In (0.6s)
    ↓
Portfolio: Scale In (0.8s - 1.6s)
    ↓
Testimonials: Fade In (1.0s - 1.4s)
    ↓
Contact: Slide In (1.2s)
    ↓
Footer: Fade In (1.4s)
```

## Navigation Flow

```
User Journey
    ↓
Landing (Hero)
    ↓
    ├─→ "Get Started" → Contact Form
    └─→ "View Portfolio" → Portfolio Section
        ↓
    Explore Services
        ↓
    Learn About Company
        ↓
    View Portfolio
        ↓
    Read Testimonials
        ↓
    Contact Form / WhatsApp
        ↓
    Conversion!
```

## Key Interactions

```
Navbar
├── Click Logo → Scroll to Top
├── Click Link → Scroll to Section
├── Click Theme → Toggle Light/Dark
└── Click Menu → Open/Close Mobile Menu

Services
├── Hover Card → Lift & Shadow
└── Click Card → (Future: Service Details)

Portfolio
├── Click Category → Filter Projects
├── Hover Project → Show Overlay
└── Click Project → (Future: Project Details)

Contact Form
├── Type in Fields → Validate
├── Submit → Show Loading
└── Success → Show Message

Footer
├── Click Social → Open Platform
├── Click WhatsApp → Open Chat
└── Click Link → Navigate
```

---

## 🎯 Quick Navigation

- **Start Here**: QUICKSTART.md
- **Full Docs**: README.md
- **Features**: FEATURES.md
- **Images**: IMAGE_GUIDE.md
- **Overview**: SUMMARY.md
- **Structure**: This file

---

**Built with Next.js 15 + TypeScript + Tailwind CSS v4**
