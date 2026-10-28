# TASK: Build the Split-Panel Auth Experience for The Startup Lens (TSL)

You are an expert Senior Design Engineer and Full-Stack Next.js Developer. Refactor and build the `/login` and `/signup` pages for **The Startup Lens** (referencing https://the-startup-lens.vercel.app/) based on the split-panel authentication card design pattern.

---

## 1. VISUAL ANATOMY & REFERENCE PATTERN
Replicate the suspended split-card layout:
- **Atmospheric Outer Canvas:** Deep obsidian backdrop (`#07080B` to `#0A0D14`) with a subtle cyan/deep navy radial gradient vignette in the center.
- **Floating Split Container:** A centered, high-elevation card (`max-w-4xl w-full mx-auto min-h-[580px] rounded-[28px] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/[0.08]`).
- **Left Panel (Brand & Visual Anchor):**
  - Atmospheric documentary image overlay: Use `/two-men-producing-radio-show-at-home.jpg` (or `/logos/TheStartUPLens-Logo-trimmed.png` over a deep cyan/black duotone gradient layer).
  - Dark gradient overlay (`bg-gradient-to-t from-[#07080B] via-[#07080B]/60 to-transparent`).
  - TSL Brand Logo: `/logos/TheStartUPLens-Logo-trimmed.png` anchored at the top left.
  - Editorial Typography:
    - Pill tag: `font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-2.5 py-1 rounded-full`
    - Main display headline: Tight, bold uppercase styling matching the site ("YOUR JOURNEY DESERVES TO BE SEEN." for Signup; "SEE WHAT'S BEING BUILT NEXT." for Login).
    - Supporting microcopy: "Discover, document, and amplify early-stage African builders shaping the continent's tech future."
    - Active builders badge at the bottom: "● 1,420+ ACTIVE BUILDERS ON RADAR".
- **Right Panel (The Auth Canvas):**
  - Clean, high-contrast surface (`#FFFFFF` in light mode or high-contrast deep slate `#0F121A` to match TSL dark aesthetics; make sure text and inputs have crisp, clean contrast).
  - Header: Clean bold heading ("Create your Account" or "Welcome Back") with a 1-line subtitle.
  - Minimalist Inputs: Subtle borders (`border-slate-200` or `border-white/10`), rounded corners (`rounded-xl`), floating label states or clean helper labels, focusing to `#00D4FF`.
  - Primary Action Button: High-tactile button (`Join The Lens →` or `Enter The Lens →`) with hover transitions and active tap physics.
  - Divider: A clean horizontal hairline with a centered `or` label.
  - Social Auth: A dedicated "Continue with Google" button with the Google 'G' icon, styled cleanly.
  - Switcher link: "Already building? Sign In" on Signup, and "Need an account? Join The Lens" on Login.

---

## 2. BRAND ASSETS & DESIGN TOKENS
- **Logo:** `/logos/TheStartUPLens-Logo-trimmed.png`
- **Hero Image:** `/two-men-producing-radio-show-at-home.jpg`
- **Primary Accent:** Electric Cyan (`#00D4FF`)
- **Status Accents:** Emerald (`#10B981`) for live badges
- **Fonts & Typography:**
  - Headings: Display bold sans with tight tracking (`tracking-tight` / `tracking-[-0.03em]`, uppercase for editorial headers).
  - Body: Neutral, clean sans (`Inter` or system sans).
  - Metadata / Badges: Monospace micro-copy (`font-mono text-[11px] tracking-wider uppercase`).

---

## 3. FORM SPECIFICATIONS

### A. `/signup` (Join The Lens)
- **Fields:**
  1. `First Name` & `Last Name` (2-column grid on desktop)
  2. `Email Address`
  3. `What are you building?` (Input or select: *Fintech, AI/ML, Climate, Hardware, Logistics, Student Project*)
  4. `Password`
  5. Checkbox: *"I agree to the Terms & Privacy Policy"*
- **Primary CTA:** `CREATE BUILDER PROFILE →`
- **Social Action:** `Sign up with Google`

### B. `/login` (Sign In)
- **Fields:**
  1. `Email Address`
  2. `Password` (with "Forgot Password?" link aligned right)
  3. Checkbox: *"Remember this device for 30 days"*
- **Primary CTA:** `SIGN IN TO THE LENS →`
- **Social Action:** `Sign in with Google`

---

## 4. CODE REQUIREMENTS
1. Build reusable Next.js (App Router) components inside `/app/(auth)/login/page.tsx` and `/app/(auth)/signup/page.tsx`, sharing a common `<AuthSplitLayout>` wrapper.
2. Use pure **Tailwind CSS** utility classes matching the TSL design tokens.
3. Include functional client-side form state (`useState`) with error validation feedback, loading spinner states upon submission, and password visibility toggle (`Eye` / `EyeOff` from `lucide-react`).
4. Ensure 100% responsiveness: On mobile screens (`< 768px`), stack the layout gracefully, displaying a compact top banner with the TSL logo and brand headline above the form card.
5. Provide clean hooks/handlers for Firebase Auth integration (`signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, `signInWithPopup(googleProvider)`).

Generate the complete, copy-pasteable code for both pages and the shared layout component now.