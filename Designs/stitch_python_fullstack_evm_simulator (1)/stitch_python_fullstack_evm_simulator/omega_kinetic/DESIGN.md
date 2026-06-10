---
name: Omega Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cec7aa'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#979177'
  outline-variant: '#4b4731'
  surface-tint: '#dfc700'
  primary: '#ffffff'
  on-primary: '#383100'
  primary-container: '#fee300'
  on-primary-container: '#716500'
  inverse-primary: '#6b5f00'
  secondary: '#ffacea'
  on-secondary: '#5d0055'
  secondary-container: '#d201c1'
  on-secondary-container: '#fffbff'
  tertiary: '#ffffff'
  on-tertiary: '#003907'
  tertiary-container: '#72ff70'
  on-tertiary-container: '#007518'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fee300'
  primary-fixed-dim: '#dfc700'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#ffd7f1'
  secondary-fixed-dim: '#ffacea'
  on-secondary-fixed: '#390034'
  on-secondary-fixed-variant: '#840078'
  tertiary-fixed: '#72ff70'
  tertiary-fixed-dim: '#00e639'
  on-tertiary-fixed: '#002203'
  on-tertiary-fixed-variant: '#00530e'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  void-black: '#050505'
  deep-navy: '#0A0B14'
  plasma-red: '#DC2626'
  paper-white: '#FFF9EA'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  title-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

This design system embodies a cinematic, high-stakes digital arena. The aesthetic is **Glassmorphic Brutalism**: a hybrid of raw, high-impact structural elements and sophisticated, translucent depth. It is designed to evoke the intensity of a "meme war"—competitive, fast-paced, and premium.

The visual narrative relies on "Light in the Dark" physics. Surfaces are deep, light-absorbing voids, while interactions are defined by radiant energy, glowing gradients, and neon accents. Motion is ambient and fluid, creating a sense of a living, breathing interface that feels like a futuristic tactical command center.

## Colors

The palette is anchored in **Void Black** and **Deep Navy**, creating a high-contrast foundation for vibrant, kinetic accents. 

- **Primary (Gold):** Used for critical actions, currency, and victory states. It represents the "Omega" status.
- **Secondary (Neon Magenta):** Used for secondary interactions and disruptive elements.
- **Tertiary (Neon Green):** Introduced for "active" status, growth, and tactical data overlays.
- **Surface Strategy:** Backgrounds should utilize deep navy gradients to prevent pure black "crushing." Glass panels should have a 10-15% opacity white or primary tint to catch the light.

## Typography

The typography system balances aggressive, wide-set headlines with technical, monospaced metadata. 

- **Headlines:** Use **Sora** for its tech-forward, geometric construction. For "War" moments, use heavy weights (700-800) with tight tracking to create a wall of text effect.
- **Body:** **Inter** provides maximum legibility against dark, complex backgrounds.
- **Metadata:** **JetBrains Mono** is used for tactical data, stats, and labels, reinforcing the "hacker-elite" aesthetic.
- **Stylistic Note:** All labels should be uppercase with wide letter-spacing to emphasize the cinematic UI look.

## Layout & Spacing

This design system uses a **Fluid Tactical Grid**. Content is housed within floating modules that respond to the viewport width.

- **Desktop:** 12-column grid with generous 64px outer margins to allow background gradients and ambient blurs to "breathe" around the content.
- **Rhythm:** An 8px linear scale governs all padding and margins. Use larger gaps (48px+) between distinct glass sections to maintain the "floating" illusion.
- **Z-Axis:** Spacing is not just horizontal/vertical; use `z-index` and `padding` to create perceived depth between the base layer and the glass panels.

## Elevation & Depth

Depth is achieved through **Luminous Layering** rather than traditional shadows.

1.  **The Void (Level 0):** The base layer. Solid #050505 or very subtle radial gradients of Navy/Black.
2.  **Glass Panels (Level 1):** Semi-transparent surfaces (20% opacity) with a `backdrop-filter: blur(20px)`. Add a 1px inner border (stroke) using a low-opacity white to define the edge.
3.  **Active Glow (Level 2):** Elements that are interactive or "hot" emit a `box-shadow` or `drop-shadow` using the Primary Gold or Secondary Magenta with a high blur radius (30px+) and low opacity (30%).
4.  **Tactical Overlay (Level 3):** Tooltips and menus use higher opacity glass and more distinct border highlights to separate them from the main UI panels.

## Shapes

The shape language is **Technical and Precise**. 

- **Core Elements:** Use a "Soft" (0.25rem) radius for most containers to maintain a serious, structured feel without being sharp.
- **Buttons & Chips:** Use the same 0.25rem radius. Avoid fully rounded pill shapes as they feel too soft for the "War" theme.
- **Beveled Accents:** For hero sections or primary buttons, consider using a 45-degree clipped corner (12px) to evoke military/sci-fi hardware interfaces.

## Components

- **Kinetic Buttons:** Primary buttons are solid Primary Gold with black text. On hover, they should trigger a "pulse" glow effect. Secondary buttons are "ghost" style with a 1px Primary Gold border and a glass background.
- **Glass Cards:** Containers for content should never be fully opaque. They must blur the background to maintain the glassmorphic aesthetic.
- **Data Chips:** Small, monospaced labels with a subtle background tint and a high-contrast border. Used for tags like "LIVE," "ELITE," or "OMEGA."
- **Input Fields:** Dark, recessed backgrounds with a 1px border that turns into a glowing Neon Green highlight upon focus.
- **Cinetic Dividers:** Use 1px lines with a linear gradient (Transparent -> Primary Gold -> Transparent) to create a "laser beam" effect between sections.
- **Tactical Progress Bars:** Use a striped "hazard" pattern for progress fills, utilizing the Tertiary Neon Green for positive progress.