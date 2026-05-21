---
name: GOLFLINE
colors:
  surface: "#f7f7f5"
  surface-dim: "#e5e5e5"
  surface-bright: "#ffffff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f7f7f5"
  surface-container: "#f0f0ee"
  surface-container-high: "#e5e5e5"
  surface-container-highest: "#d4d4d4"
  on-surface: "#111111"
  on-surface-variant: "#666666"
  inverse-surface: "#111111"
  inverse-on-surface: "#ffffff"
  inverse-on-surface-variant: "rgba(255, 255, 255, 0.7)"
  outline: "#e5e5e5"
  outline-variant: "#d4d4d4"
  primary: "#111111"
  on-primary: "#ffffff"
  primary-container: "#333333"
  on-primary-container: "#f7f7f5"
  inverse-primary: "#ffffff"
  secondary: "#666666"
  on-secondary: "#ffffff"
  secondary-container: "#e5e5e5"
  on-secondary-container: "#111111"
  error: "#b91c1c"
  on-error: "#ffffff"
  error-container: "#fde2e2"
  on-error-container: "#7f1d1d"
  background: "#ffffff"
  on-background: "#111111"
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: "400"
    lineHeight: 88px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: "400"
    lineHeight: 70px
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: "400"
    lineHeight: 53px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: "400"
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: "400"
    lineHeight: 33px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "500"
    lineHeight: 28px
    letterSpacing: 0.025em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0.15em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
    letterSpacing: 0.2em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.3em
rounded:
  none: 0px
spacing:
  unit: 8px
  container-padding: 24px
  container-padding-lg: 32px
  section-padding: 80px
  section-padding-lg: 112px
  card-gap: 32px
  card-gap-lg: 48px
  nav-height: 64px
  nav-height-lg: 80px
  max-width: 1280px
  max-width-narrow: 896px
components:
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: 14px 32px
    borderWidth: 1px
    borderColor: "{colors.primary}"
  button-outline-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.on-surface}"
  section-label:
    backgroundColor: transparent
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
  card-divider:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 24px 0 0 0
    borderWidth: 1px 0 0 0
    borderColor: "{colors.outline}"
  logo:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
  header-scrolled:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
  metric-value:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-sm}"
  metric-label:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
---

## Brand & Style

GOLFLINE is a premium flat-knit knitwear manufacturer with over 35 years of heritage. The design system channels the quiet confidence of a well-made garment: understated, precise, and built to last. The visual identity draws from the restrained elegance of European fashion houses and high-end B2B manufacturing brands, projecting trust, craftsmanship, and authority without ostentation.

The aesthetic is **Modern Editorial Minimalism**. The interface is stripped to its essentials: monochromatic palette, sharp geometry, generous whitespace, and a clear typographic hierarchy that pairs serif display type with clean sans-serif body text. The result feels like an architect's portfolio or a luxury textile lookbook, where the content does the speaking and the design stays out of the way.

The emotional register is calm professionalism. Every layout decision reinforces the brand's core promise: precision, consistency, and reliability.

## Colors

The palette is deliberately monochromatic, reflecting the brand's no-nonsense manufacturing identity. Color is never decorative; it exists only to establish hierarchy and focus.

- **Background:** Pure white (#FFFFFF) grounds the interface and lets typography and imagery carry the visual weight.
- **Foreground:** Deep charcoal (#111111) is used for all primary text and interactive elements. It is warm enough to avoid the sterility of pure black while maintaining excellent contrast.
- **Muted:** Mid-gray (#666666) serves as the secondary voice for supporting text, navigation links, and metadata. It creates a clear two-tier reading hierarchy without introducing a new hue.
- **Surface:** An off-white cream (#F7F7F5) alternates with pure white to create subtle section boundaries. The warmth of this tone prevents the interface from feeling clinical.
- **Border:** Light gray (#E5E5E5) is used sparingly for horizontal rules, card dividers, and the header border on scroll. Lines are structural, never decorative.
- **Inverted Sections:** The foreground charcoal (#111111) is used as a background for emphasis sections (differentiators, pull quotes), with white text at full and 70% opacity to maintain the monochromatic discipline.

No accent color, no brand color, no gradients. The restraint is intentional: in a B2B context where trust is paramount, the absence of embellishment signals seriousness.

## Typography

Typography is the primary design tool. The pairing of a serif display face with a geometric sans-serif creates the tension between heritage and modernity that defines the brand.

- **Display / Headings (Playfair Display):** Used for all H1 and H2 elements. Playfair's high-contrast letterforms and refined serifs evoke traditional craftsmanship and editorial authority. It is always set at regular weight; boldness comes from scale, not stroke width. Sizes range from 30px at mobile to 80px at desktop for hero headings.
- **Body / UI (Inter):** Used for all body copy, labels, navigation, and interface text. Inter's neutral geometry and excellent screen rendering provide effortless legibility at all sizes. Body text sits at 14-18px with relaxed line heights for comfortable reading.
- **Labels (Inter, Uppercase):** Section labels, category names, and metadata are set in uppercase Inter at 12px with exaggerated letter-spacing (0.2em-0.3em). This creates a distinct tertiary tier in the hierarchy that reads as quiet, structured annotation rather than shouting.
- **Hierarchy is achieved through three levers:** typeface (serif vs. sans), scale (large vs. small), and color (foreground vs. muted). Font weight is used sparingly and never exceeds semi-bold.

## Layout & Spacing

The layout philosophy is architectural: generous negative space, rigid alignment, and a clear rhythm that guides the eye from section to section.

- **Container:** All content lives within a 1280px max-width container, centered horizontally, with 24px padding on mobile expanding to 32px on large screens.
- **Sections:** Full-width sections alternate between white and off-white backgrounds to create visual separation without borders. Vertical section padding is substantial: 80px on mobile, 112px on desktop. This breathing room is non-negotiable; it creates the premium, unhurried pace of the experience.
- **Grid:** Content is arranged on responsive grids: single column on mobile, 2-3 columns on tablet and desktop. Column gaps are generous (32-48px) to prevent visual crowding.
- **Spacing Unit:** An 8px base unit governs all dimensions. Common increments include 12px, 16px, 24px, 32px, 40px, 64px, 80px, and 112px.
- **Fixed Header:** The navigation bar sits fixed at top with a height of 64px (mobile) / 80px (desktop). It transitions from fully transparent to a frosted white (95% opacity with backdrop blur) after the user scrolls past the first 10px.

## Elevation & Depth

This design system is deliberately flat. There are no shadows, no blur effects on content surfaces, no layered cards, and no simulated depth. Hierarchy is established entirely through color, spacing, and typography.

- **Separation:** Sections are divided by alternating background tints (white / off-white) or thin 1px border lines. This is a textile-industry reference: clean cuts, precise seams, no excess material.
- **The one exception** is the scrolled header, which uses `backdrop-filter: blur` and a semi-transparent white background to maintain content legibility. This is a functional concession, not a stylistic choice.
- **Cards** are defined by a single top border (1px, light gray) and generous top padding. They do not float above the surface; they are part of it.

## Shapes

The shape language is entirely rectilinear. No border radius is used anywhere in the design system: buttons, cards, inputs, containers, and images all use sharp 0px corners.

- **Rationale:** Sharp corners reinforce the brand's manufacturing precision. Rounded corners soften and humanize; square corners convey exactness and industrial rigor. In a product about precision knitwear, this is a deliberate alignment of form and message.
- **Lines:** Horizontal rules (1px, light gray) are the primary structural element. They appear as section dividers, card separators, and header borders. They are never decorative and always span the full width of their container.

## Components

### Buttons

The primary call-to-action is an outlined button: 1px border in charcoal, no fill, uppercase label with generous letter-spacing (0.15em), and substantial padding (14px vertical, 32px horizontal). On hover, the button inverts to a solid charcoal fill with white text via a 300ms transition. This outline-to-fill interaction mirrors the manufacturing concept of a blank garment being finished.

### Navigation

Desktop navigation uses muted-gray text links that transition to charcoal on hover (200ms). The wordmark is set in Playfair Display at semi-bold with 0.15em letter-spacing. Mobile navigation uses an animated hamburger: three 1px lines that rotate and fade into an X shape with a 300ms transition.

### Section Headers

Every content section follows a consistent pattern: an uppercase label (12px, 0.2em tracking, muted gray) followed by a serif heading (30-36px) on the next line. This label-plus-heading pattern creates a reliable wayfinding rhythm throughout the page.

### Metrics / Statistics

Key figures are displayed as large serif numerals (48px desktop) with a small sans-serif descriptor beneath in muted gray. The contrast between the oversized number and the quiet label creates visual punch without resorting to color or decoration.

### Content Cards

Cards are minimal: a top border line, a medium-weight sans-serif title, and a small muted description beneath. No background fill, no shadow, no rounded corners. Content is organized in responsive grids with generous gaps.

### Motion

Animation is restrained and purposeful, used only to ease content into view:

- **Fade-in-up:** Elements enter with a 24px upward translation and opacity fade over 700ms with ease-out timing. Staggered delays (100ms increments, up to 500ms) create a cascading reveal on hero content.
- **Scroll reveal:** The same 24px upward slide and opacity transition is triggered by an Intersection Observer (threshold: 0.1) as sections enter the viewport.
- **Brand scroll:** A continuous horizontal marquee scrolls brand names at a steady 30s linear pace, pausing on hover.
- **Hover transitions:** All interactive color changes use 200-300ms durations with default easing.

No bouncing, no scaling, no parallax, no spring physics. Motion exists to smooth content entry, never to entertain.
