---
name: MN Motor Hub Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The design system is engineered for the automotive aftermarket industry, specifically tailored for MN Motor Hub in Venezuela. It embodies a **High-Contrast Industrial** aesthetic that feels premium, technical, and high-performance. 

The brand personality is rooted in mechanical precision and mechanical energy. It targets automotive enthusiasts and professionals who value reliability and speed. The UI evokes a sense of being in a high-end garage or at a racetrack—dark, focused, and utilitarian yet sleek. We utilize a mix of **Minimalism** for layout clarity and **High-Contrast** elements to draw attention to performance parts and calls to action.

## Colors

This design system utilizes a deep "Onyx" dark mode as its foundation to make product photography and automotive components pop.

- **Primary (Ignition Orange):** A high-vibrancy orange-red used exclusively for primary actions, price points, and critical status indicators.
- **Neutrals (Carbon & Slate):** A tiered system of near-blacks. `#0D0D0D` serves as the base background, while `#1A1A1A` and `#262626` are used for surface elevation and card containers.
- **Typography Colors:** Pure white is reserved for headings to ensure maximum impact. A muted silver-gray is used for body text and metadata to reduce eye strain and establish hierarchy.

## Typography

The typography strategy pairs industrial strength with modern legibility. 

**Oswald** is the display typeface, used for all headings. Its condensed nature mimics the typography found on automotive technical manuals and racing liveries. Headlines should almost always be set in uppercase to reinforce the "bold/energetic" brand pillar.

**Inter** provides a highly legible counterpoint for data-heavy sections, product descriptions, and technical specifications. It is kept clean with ample line height to ensure readability against dark backgrounds.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a premium, editorial feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid system is used for desktop (1280px max width).
- **Rhythm:** An 8px linear scale governs all spacing. 
- **Density:** The layout favors "Industrial Air"—meaning while the colors are heavy, the spacing is generous (80px+ between major sections) to prevent the dark UI from feeling claustrophobic.
- **Mobile:** Breakpoints are set at 375px (Mobile), 768px (Tablet), and 1280px (Desktop). On mobile, gutters shrink to 16px and vertical stack patterns are strictly enforced.

## Elevation & Depth

In this dark-themed system, depth is conveyed through **Tonal Layers** rather than traditional shadows. Shadows are largely invisible on near-black backgrounds, so we use surface color shifts to indicate "height."

- **Level 0 (Base):** `#0D0D0D` - The main canvas.
- **Level 1 (Cards/Sections):** `#1A1A1A` - Primary container color.
- **Level 2 (Popovers/Tooltips):** `#262626` - The highest surface level, often accompanied by a subtle 1px border in `#333333` to define edges.
- **Accent Depth:** For primary buttons, a subtle outer glow (0px 0px 12px) using the Primary Color at 30% opacity may be used to simulate an "active" or "powered-on" state.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the industrial aesthetic, making the professional interface feel modern and engineered rather than dated and aggressive.

- **Standard Radius:** 4px (0.25rem) for buttons, input fields, and small UI widgets.
- **Large Radius:** 8px (0.5rem) for product cards and secondary containers.
- **Full Radius:** Reserved exclusively for circular icon buttons or status tags (pills).

## Components

### Buttons
- **Primary:** Solid Primary Color background with white text. Uppercase Oswald font. No border.
- **Secondary:** Ghost style. 1px white or silver border with white text.
- **State:** On hover, primary buttons should shift 10% darker; secondary buttons should gain a subtle `#FFFFFF10` (white at 10% opacity) fill.

### Cards
- **Product Cards:** Solid `#1A1A1A` background. Images should be transparent PNGs of parts or high-quality photography with a dark background. Prices are always highlighted in the Primary Color.

### Input Fields
- Dark background (`#0D0D0D`) with a `#333333` border. Focus state triggers a 1px Primary Color border. Label text is always `label-bold` hierarchy.

### Chips & Tags
- Used for categories (e.g., "Body Parts," "Engine"). Small, uppercase, with 2px rounded corners. Use `#262626` background for inactive and Primary Color for active states.

### Lists
- Separated by 1px borders in `#1A1A1A`. Interactive list items should have a hover state of `#1A1A1A`.