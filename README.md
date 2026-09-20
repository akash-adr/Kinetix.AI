# ⚡ KINETIX — Modern Maximalist SaaS Landing Page

> A $100,000 agency-grade, modern maximalist SaaS landing page built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Three.js**, and **Lenis**.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-magenta?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-0.173-CCFF00?style=flat-square&logo=three.js&logoColor=black)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🎨 Design System & Visual Identity

Kinetix rejects the sanitized "blue & white corporate gradient blob" aesthetic in favor of **modern maximalism**: bold, dense, colorful, and kinetic — backed by a rigorous visual hierarchy.

- **Color Palette**:
  - `Void Black` (`#07070A`) & `Obsidian Plate` (`#0E0E14`)
  - **Electric Acid Lime** (`#CCFF00`) — Primary high-voltage accent
  - **Hyper Magenta** (`#FF007F`) — Intentional harmonic clash
  - **Cryo Cyan** (`#00F0FF`) — Telemetry & edge status
  - **Bone Off-White** (`#F4F4EE`) — High-contrast readability
- **Typography Hierarchy**:
  - Display: `Bricolage Grotesque` (Google Variable Font) — Clamped sizes (`3.5rem`–`7.5rem`), aggressive weight transitions, negative tracking (`-0.05em`).
  - Body: `Plus Jakarta Sans` — Geometric legibility.
  - Monospace: `JetBrains Mono` — Code blocks, telemetry feeds, and cyber badges.
- **Analog Texture**: Integrated 2.5% SVG fractal noise grain overlay for tactile visual depth.

---

## ✨ Features & Micro-Interactions

### 1. Creative Floating Pill Navbar ([`Navbar.tsx`](src/components/sections/Navbar.tsx))
- **Hero State**: Sits completely transparent and blended directly over the hero.
- **Scroll Morphing**: Smoothly transforms into a compact, glassmorphic floating pill (`max-w-5xl`, `rounded-full`, backdrop-blur-2xl) past 80px scroll.
- **Directional Hide / Show**: Rapid downward scrolling hides the bar (`y: -100`); upward scrolling brings it back instantly (`y: 0`).
- **Active Section Indicator**: Sliding background pill (`layoutId="activeNavPill"`) that glides behind the active link like an iOS segmented control via `IntersectionObserver`.
- **Cyber Bracket Hover**: Micro-interaction where neon brackets `[ ]` slide in around links on hover.
- **Mobile Takeover**: Morphing hamburger-to-X icon with full-screen circular `clip-path` wipe and staggered oversized typography.

### 2. Kinetic 3D WebGL Canvas ([`KineticSphere3D.tsx`](src/components/ui/KineticSphere3D.tsx))
- Real-time Three.js WebGL canvas featuring a distorted wireframe icosahedron with continuous sinusoidal wave vertex displacement.
- Swarming 750+ particle halo in acid lime and hyper magenta with additive blending.
- Dual gyro orbital rings with smooth cursor parallax tracking.

### 3. Interactive Bento Grid Centerpiece ([`FeatureBento.tsx`](src/components/sections/FeatureBento.tsx))
- **Developer Console SDK**: Multi-language tab switcher (`TypeScript`, `Python`, `cURL`), copy-to-clipboard feedback, and an executable simulation that logs live execution telemetry in `<4ms`.
- **Interactive Stack Comparison Slider**: Draggable Before/After divider comparing legacy cloud latency & costs against the Kinetix autonomous mesh.
- **Live Regional Telemetry**: Interactive toggle (`US-East`, `EU-Central`, `Asia-Northeast`) updating latency, throughput, and mesh load indicators in real time.

### 4. Interactive 3D Perspective Hero Card ([`Hero.tsx`](src/components/sections/Hero.tsx))
- Dashboard preview card with mouse-tracking 3D perspective tilt (`rotateX`, `rotateY`) and scroll parallax.
- Word-by-word kinetic headline entrance with Framer Motion.

### 5. Infinite Marquee Tickers ([`LogoTicker.tsx`](src/components/sections/LogoTicker.tsx) & [`Testimonials.tsx`](src/components/sections/Testimonials.tsx))
- Partner logo strip with grayscale-to-electric-neon hover effects.
- Dual opposing-direction testimonials marquees with hover-to-pause physics.
- Hero spotlight quote featuring Synthetix CTO with verified metrics.

### 6. Interactive Process Pipeline ([`HowItWorks.tsx`](src/components/sections/HowItWorks.tsx))
- 4-step pipeline connected by an animated SVG line that draws dynamically as the user scrolls into view.

### 7. Morphing Pricing & Celebrations ([`Pricing.tsx`](src/components/sections/Pricing.tsx))
- Monthly / Annual toggle (-20% badge) with animated price morphing.
- Scaled-up glowing featured tier ("Hyper Scale").
- Integrated canvas-confetti trigger on button interactions.

### 8. Global Kinetic Systems
- **Custom Magnetic Cursor** ([`CustomCursor.tsx`](src/components/ui/CustomCursor.tsx)): Automatically scales and displays contextual action tags (`"NAV"`, `"DEPLOY"`, `"DRAG"`, `"COPY"`, `"RUN"`).
- **Magnetic Buttons** ([`MagneticButton.tsx`](src/components/ui/MagneticButton.tsx)): Spring-physics buttons that gravitate toward the cursor with animated glint flares.
- **Lenis Smooth Scroll** ([`SmoothScrollProvider.tsx`](src/components/ui/SmoothScrollProvider.tsx)): Inertia-driven buttery scrolling.
- **Count-Up Numbers** ([`CountUp.tsx`](src/components/ui/CountUp.tsx)): Scroll-triggered counter animations with `easeOutExpo` physics.

---

## 📁 Project Structure

```
maximalism/
├── public/
│   └── noise.svg                    # Analog film grain texture
├── src/
│   ├── app/
│   │   ├── globals.css              # Cyber grids, mesh gradients, Lenis CSS
│   │   ├── layout.tsx               # Google Fonts, SmoothScrollProvider, CustomCursor
│   │   └── page.tsx                 # Landing page section composition
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx            # Maximalist cyber badge
│   │   │   ├── CountUp.tsx          # Scroll-triggered counter
│   │   │   ├── CustomCursor.tsx     # Magnetic cursor with label states
│   │   │   ├── KineticSphere3D.tsx  # Three.js distorted WebGL canvas
│   │   │   ├── MagneticButton.tsx   # Spring-physics magnetic button
│   │   │   ├── NoiseOverlay.tsx     # Fixed 2.5% analog noise layer
│   │   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll provider
│   │   └── sections/
│   │       ├── Navbar.tsx           # Floating pill navbar + mobile takeover
│   │       ├── Hero.tsx             # Kinetic headline + 3D tilt dashboard
│   │       ├── LogoTicker.tsx       # Grayscale-to-neon infinite marquee
│   │       ├── ProblemAgitate.tsx   # Asymmetric pain statement + counters
│   │       ├── FeatureBento.tsx     # Centerpiece interactive bento grid
│   │       ├── Testimonials.tsx     # Hero spotlight quote + dual marquees
│   │       ├── HowItWorks.tsx       # SVG path scroll drawing pipeline
│   │       ├── Pricing.tsx          # Morphing pricing + confetti trigger
│   │       ├── Faq.tsx              # AnimatePresence accordion
│   │       ├── FinalCta.tsx         # Full-bleed high-voltage CTA
│   │       └── Footer.tsx           # 4-column footer + newsletter + wordmark
│   └── lib/
│       ├── animations.ts            # Reusable Framer Motion variants
│       └── utils.ts                 # Class merger (clsx + tailwind-merge)
├── tailwind.config.ts               # Custom maximalist design tokens & keyframes
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+ installed
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   cd <YOUR_REPO_NAME>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Build & Production

To generate an optimized production bundle:

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🎯 Swapping Real Assets

The codebase includes explicit comments marking where real assets and branding should be swapped in:
- **Testimonial Avatars & Quotes**: Search for `/* [SWAP REAL ASSET: Customer Avatar] */` in [`Testimonials.tsx`](src/components/sections/Testimonials.tsx).
- **Partner Logos**: Edit the `logos` array in [`LogoTicker.tsx`](src/components/sections/LogoTicker.tsx).
- **Console Code Samples**: Edit snippets in [`FeatureBento.tsx`](src/components/sections/FeatureBento.tsx).
- **Brand Name & Colors**: Customize tokens in [`tailwind.config.ts`](tailwind.config.ts).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
