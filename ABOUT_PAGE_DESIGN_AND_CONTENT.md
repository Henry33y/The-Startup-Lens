# The Startup Lens (TSL) — About Page Architecture, Design System & Content Blueprint

> **"About Us — The Startup Lens"**  
> A definitive architectural, design, and content guide for the **About page** (`/about`) of *The Startup Lens*, documenting its 10-section editorial flow, high-visibility photographic Hero background with bold "ABOUT US" display typography, right-aligned Vision section, multi-layer 3D holographic TSL logo lens interaction, reversible strikethrough animation, scroll progress rail, human copywriting standards, design tokens, and technical implementation.

---

## 1. Product Context & Strategic Direction

The Startup Lens (TSL) is a platform for discovering, documenting, and connecting with the people building Africa's next generation of startups.

### 1.1 Core Message
> **"We don't just cover the ecosystem. We help make it visible."**

### 1.2 Voice & Tone Principles
- **Human & Direct**: Written like a real team speaking to real founders, operators, and supporters.
- **Editorial & Confident**: Strong, scannable statements over dense, buzzword-heavy paragraphs.
- **Signal Over Noise**: Celebrates raw, honest builder progress over polished PR and valuation hype.
- **Natural Hierarchy & Rhythms**: Uses typography, authentic documentary imagery, alternating left/right section alignments (Mission on left, Vision on right), and generous whitespace to guide the eye.

---

## 2. Visual Identity & Design System

### 2.1 Color Tokens
| Token | Hex Value | Usage |
|---|---|---|
| `--color-tsl-black` | `#050505` | Primary page background |
| `--color-tsl-black-soft` | `#0A0A0A` | Alternating section surface |
| `--color-tsl-surface` | `#111111` | Elevated container surface & backdrop blurs |
| `--color-tsl-dark-grey` | `#292929` & `#1A1A1A` | Borders, subtle divider rails, and structural lines |
| `--color-tsl-blue` | `#00D4FF` | Lens Cyan accent (used with restraint for focal points, scroll progress, hover states, and strikethroughs) |
| `--color-tsl-white` | `#F8F8F8` | Display headlines and primary text |
| `--color-tsl-white-soft` | `rgba(248, 248, 248, 0.85)` | Editorial body copy and supporting descriptions |
| `--color-tsl-grey` | `#777777` | Secondary text, inactive states, and muted context |

### 2.2 Typography System
- **Display Headlines**: `Space Grotesk` (Uppercase, bold, tight letter-spacing `-0.03em` to `-0.04em`, leading `1.05` to `1.15`).
- **Body & Editorial Copy**: `Inter` (Clean sans-serif, `font-light` / `font-normal`, generous leading `leading-relaxed`).
- **Monospace Accents**: `JetBrains Mono` / `font-mono` (Reserved strictly for functional buttons and numerical sequence indicators).

### 2.3 Motion & Interaction Guidelines
- **High-Visibility Photographic Hero**: Full-bleed background photograph (`/logos/pexels-kingjulas-10353711 (1).jpg`) with transparent dark vignette overlays and centered display heading **"ABOUT US"** accompanied by dual CTAs.
- **Right-Aligned Vision Section**: Heading and large vision statement aligned to the right creating dynamic visual pacing opposite the left-aligned Mission.
- **Interactive Holographic TSL Logo Lens**: In "Look Closer", the official white TSL logo is encased in a multi-layered 3D magnetic lens with orbiting laser tracks, counter-rotating rings, holographic light sweep, and spring cursor parallax.
- **Reading Scroll Progress Bar**: A 2px high fixed `#00D4FF` line across the top of the viewport tracking reading progression smoothly.
- **What We're Not Scroll & Reversible Hover Interaction**:
  - In-view scroll trigger smoothly fades and slides each item in.
  - Cyan strikethrough line sweeps across from left to right.
  - Text maintains high visibility (`opacity: 0.72`) in struck state.
  - On hover, the strikethrough line smoothly retracts (`scaleX: 0`) and text restores to full 100% brightness (`#FFFFFF`), re-striking when cursor leaves.
- **Scroll-Linked Timeline Rail**: In "How We Operate", the vertical connecting line progressively illuminates with cyan glow as the visitor scrolls down.
- **Connected Platform Architecture**: In "What We're Building", an interconnected matrix links Media, Discovery, Builders, Community, and Ecosystem as one cohesive whole.
- **Documentary Image Break**: An authentic visual break in "Why Africa" featuring African builders collaborating in a real workshop.
- **Mobile Sticky CTA**: An unobtrusive `JOIN THE LENS →` button floating on mobile after scrolling past the hero.

---

## 3. The 10-Section Master Information Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ 1. HERO (Photographic Background with Bold "ABOUT US" Heading)                  │
│    • Background: `/logos/pexels-kingjulas-10353711 (1).jpg` (high visibility)  │
│    • Display: "ABOUT US"                                                        │
│    • CTAs: [ EXPLORE THE LENS ] [ JOIN THE LENS ]                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 2. WHAT WE'RE NOT (Scroll Entrance & Reversible Strikethrough Interaction)      │
│    • Heading: "WHAT WE'RE NOT"                                                  │
│    • Statements with high visibility: ~~A MEDIA TEAM.~~, ~~A NEWS OUTLET.~~... │
│    • Scroll entrance + hover restoration to full brightness                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 3. WHAT WE ARE                                                                  │
│    • Heading: "WHAT WE ARE"                                                     │
│    • Definition: Platform for discovering, documenting, and connecting.         │
│    • Callout: "We don't just cover the ecosystem. We help make it visible."     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 4. OUR MISSION (Standalone Section — Left Aligned)                              │
│    • Heading: "OUR MISSION"                                                     │
│    • Statement: "To give early-stage African builders greater visibility by     │
│       documenting their journeys, helping people discover what they're          │
│       building, and creating meaningful connections around the work."           │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 5. OUR VISION (Standalone Section — Right Aligned)                             │
│    • Heading: "OUR VISION"                                                      │
│    • Statement: "To become a leading platform for discovering and understanding │
│       the people, startups and ideas shaping Africa's next generation           │
│       of innovation."                                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 6. HOW WE OPERATE (Scroll-Linked Editorial Timeline)                           │
│    • Heading: "HOW WE OPERATE"                                                  │
│    • 01 DISCOVER → 02 DOCUMENT → 03 CONNECT → 04 AMPLIFY                        │
│    • Connecting vertical rail reveals progressively on scroll                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 7. THE LENS (Multi-Layer Holographic 3D TSL Logo Animation)                    │
│    • Heading: "LOOK CLOSER."                                                    │
│    • Brand Story: "The Startup Lens exists to notice the builders, ideas and    │
│       journeys that are easy to miss."                                          │
│    • Visual: 3D interactive TSL logo with orbiting rings & holographic sweep   │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 8. WHAT WE'RE BUILDING (Connected Platform Matrix)                              │
│    • Heading: "WHAT WE'RE BUILDING"                                             │
│    • Interconnected Pillars: MEDIA • DISCOVERY • BUILDERS • COMMUNITY • ECOSYSTEM│
├─────────────────────────────────────────────────────────────────────────────────┤
│ 9. WHY AFRICA (Editorial Image Break & Reflection)                              │
│    • Full-Width Documentary Image: African engineers in a collaborative studio  │
│    • Heading: "AFRICA IS BUILDING."                                             │
│    • Grounded reflection on contextual innovation and diverse regional hubs     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 10. JOIN THE LENS                                                               │
│    • Heading: "YOUR JOURNEY DESERVES TO BE SEEN."                               │
│    • Supporting: "Building something? Document it. Share it. Follow the journey"│
│    • CTAs: [ CREATE YOUR BUILDER PROFILE ] [ EXPLORE THE BUILDERS ]             │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. File & Component Organization

| Component | File Path | Role on About Page |
|---|---|---|
| **Scroll Progress** | `src/components/about/AboutScrollProgress.tsx` | Viewport reading progress indicator & mobile sticky CTA |
| **Hero** | `src/components/about/AboutHero.tsx` | High-visibility photographic background with bold "ABOUT US" headline & CTAs |
| **What We're Not** | `src/components/about/WhatWereNot.tsx` | Scroll entrance + reversible strikethrough with high-visibility text |
| **What We Are** | `src/components/about/WhatWeAre.tsx` | Core proposition & platform definition |
| **Our Mission** | `src/components/about/MissionSection.tsx` | Standalone left-aligned mission statement |
| **Our Vision** | `src/components/about/VisionSection.tsx` | Standalone right-aligned vision statement |
| **How We Operate** | `src/components/about/HowWeOperate.tsx` | Scroll-linked vertical timeline rail: Discover → Document → Connect → Amplify |
| **The Lens** | `src/components/about/LensSection.tsx` | "Look Closer" story + 3D holographic TSL logo lens |
| **What We're Building** | `src/components/about/PlatformVision.tsx` | Connected platform matrix linking 5 core pillars |
| **Why Africa** | `src/components/about/WhyAfrica.tsx` | Documentary builder image break & grounded innovation reflection |
| **Join The Lens** | `src/components/about/AboutJoinLens.tsx` | Final builder onboarding & exploration conversion |
| **Master Route** | `src/app/(marketing)/about/page.tsx` | Assembled Next.js page route |

---

## 5. Copywriting & Quality Standards

1. **Human & Authentic**: Speaks directly to builders and operators without promotional hype.
2. **No AI Clichés**: Prohibits *"ecosystem intelligence layer"*, *"optical resolution"*, *"focal depth"*, *"continental momentum"*, *"early-stage alpha"*, and *"the next Silicon Valley"*.
3. **Typography-Driven Hierarchy**: Natural pacing through font scaling, alternating alignments, and whitespace rather than artificial numbered chips.
4. **Responsive Integrity**: Seamless layout and interaction across 375px mobile, 768px tablet, and 1280px+ desktop with no horizontal overflow.
