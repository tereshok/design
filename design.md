# Devox Design System — `design.md`

**Version:** 1.3
**Source of truth:** `devox.pen` → frame **Design System / Style Guide** (`cHYZv`, zone 05, right of Sections). Tokens are canvas variables (`color-*`, `space-*`, `radius-*`, `font-*`, base palette); components are reusable masters named `Component/Variant/Size`.
**Scope:** All marketing and product pages: desktop (1440) and mobile (393) layouts.

This file sets the rules for the design system. Any value not listed here is a bug. If a design needs a value that isn't here, add it as a token here first, then use it.

---

## 0. Principles

1. **Tokens only.** Every color, font size, line height, spacing value, radius and stroke must come from a token in this file.
2. **Semantic over raw.** Components use semantic tokens such as `--text-secondary`. They don't reference base tokens such as `--ink-600` directly. Base tokens exist only to define semantic ones.
3. **Theme by mode.** Every semantic token has a `light` value and a `dark` value. A dark section sets `data-theme="dark"` (canvas: `theme: { mode: "dark" }`). Components themselves never switch colors by hand.
4. **Auto Layout everywhere.** Every container uses flex layout (vertical or horizontal) with `gap` and `padding`. Absolute positioning is allowed only for decorative layers.
5. **4px base grid, 8px rhythm.** Line heights, paddings, gaps and component heights are all multiples of 4.

---

## 1. Design Tokens

### 1.1 Color: base palette

These are the raw values. Don't use them directly in components (see §0.2).

| Token | HEX | Notes |
|---|---|---|
| `--purple-600` | `#9118DB` | Brand primary |
| `--purple-500` | `#A83DEA` | Brand hover / dark-mode link |
| `--purple-800` | `#580E85` | Brand pressed |
| `--ink-950` | `#0F0F10` | Near-black |
| `--ink-900` | `#232326` | Dark surface (also replaces legacy `#222224`) |
| `--ink-800` | `#37383A` | Dark border |
| `--ink-600` | `#717578` | Secondary text (light) |
| `--ink-500` | `#A0A3A5` | Secondary text (dark) / tertiary (light) |
| `--ink-300` | `#BBBDBE` | Border (light) |
| `--ink-200` | `#D9DADA` | Disabled fill, dividers on surface |
| `--ink-100` | `#F4F5F5` | Light surface (also replaces legacy `#F0F0F0`) |
| `--sand-100` | `#FAF4EE` | Warm surface (people cards) |
| `--white` | `#FFFFFF` | |

### 1.2 Color: semantic tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| **Brand** | | | |
| `--color-primary` | `#9118DB` | `#9118DB` | Primary buttons, active states, markers |
| `--color-primary-hover` | `#A83DEA` | `#A83DEA` | Hover on primary |
| `--color-primary-pressed` | `#580E85` | `#580E85` | Pressed / active on primary |
| `--color-on-primary` | `#FFFFFF` | `#FFFFFF` | Text and icons on primary fill |
| `--color-link` | `#9118DB` | `#A83DEA` | Inline links, active nav item |
| **Background & surface** | | | |
| `--color-bg` | `#FFFFFF` | `#0F0F10` | Page / section background |
| `--color-surface` | `#F4F5F5` | `#232326` | Cards, input fields, filled tags |
| `--color-surface-warm` | `#FAF4EE` | `#232326` | Team / people cards only |
| `--color-inverse-bg` | `#0F0F10` | `#FFFFFF` | Secondary button, inverse tags, icon wrappers |
| `--color-inverse-text` | `#FFFFFF` | `#0F0F10` | Content on `--color-inverse-bg` |
| `--color-overlay` | `#0F0F1080` | `#0F0F1080` | Image scrims (ink-950 at 50%) |
| **Text** | | | |
| `--color-text-primary` | `#0F0F10` | `#FFFFFF` | Headings, body copy |
| `--color-text-secondary` | `#717578` | `#A0A3A5` | Subtitles, descriptions, metadata |
| `--color-text-tertiary` | `#A0A3A5` | `#717578` | Placeholders, disabled, breadcrumb trail, index numerals |
| **Borders** | | | |
| `--color-border` | `#BBBDBE` | `#37383A` | Outline buttons, tags, dividers, accordion rules |
| `--color-border-subtle` | `#0F0F1033` | `#FFFFFF1A` | Hairlines, card outlines, input outlines (20% / 10% alpha) |
| **States** | | | |
| `--color-success` | `#12A150` | `#12A150` | Success badges, valid inputs |
| `--color-warning` | `#E7BC00` | `#E7BC00` | Warning badges |
| `--color-error` | `#EA2E29` | `#EA2E29` | Error badges, invalid inputs, required markers |
| `--color-info` | `#1E5CF1` | `#1E5CF1` | Informational badges |

### 1.3 Color: gradients

| Token | Definition | Usage |
|---|---|---|
| `--gradient-brand` | `linear-gradient(90deg, #E51263 0%, #A83DEA 50%, #32CEFF 100%)` | Hero image color overlay (`mix-blend-mode: color` / `multiply`), brand accents |
| `--gradient-soft` | `linear-gradient(90deg, #FBD3E3 0%, #EAD1FA 50%, #9EE8FF 100%)` | Process / step cards, soft CTA backgrounds |

Use gradients only for these two purposes. Don't put a gradient on a button, on text, or on a border.

### 1.4 Typography

**Font family**

```css
--font-sans: "TT Interfaces", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

- TT Interfaces is a commercial font. Self-host it with `@font-face` (weights 400, 500, 700; `font-display: swap`).
- There is one family. No serif, no monospace, no secondary display face.
- The allowed weights are **400 Regular**, **500 Medium** and **700 Bold**. Don't use 300, 600 or 800.
- On the canvas the weights are the font files `TTInterfacesRegular`, `TTInterfacesMedium` and `TTInterfacesDemiBold` (the 700 slot), exposed as the variables `font-regular`, `font-medium` and `font-bold`. The existing pages still carry numeric weights 600 and 900 on some text; migrate them to the nearest allowed weight.

**Type scale (desktop)**

| Token | Size | Line height | Weight | Letter spacing | Usage |
|---|---|---|---|---|---|
| `display` | 80px | 88px (1.1) | 500 | -2px | Hero headline (one per page) |
| `h1` | 64px | 72px (1.125) | 500 | -2px | Section titles |
| `h2` | 40px | 48px (1.2) | 500 | -1px | Sub-section titles, large stats |
| `h3` | 32px | 40px (1.25) | 500 | 0 | Feature / service titles |
| `h4` | 24px | 32px (1.333) | 700 | 0 | **Card titles, team-member names** |
| `body-lg` | 20px | 28px (1.4) | 500 | 0 | Section subtitles, lead paragraphs, accordion titles |
| `body-md` | 16px | 24px (1.5) | 400 · 700 | 0 | Default body; 700 for button labels, tags, emphasis |
| `body-sm` | 14px | 20px (1.43) | 400 · 700 | 0 | Secondary copy, footer links; 700 for nav, eyebrow badges |
| `caption` | 12px | 16px (1.33) | 500 | 0 (+1px for UPPERCASE) | Meta labels, hints, legal |

**Responsive type (below 768px)**

| Token | Mobile size / line height |
|---|---|
| `display` | 44px / 48px, -2px |
| `h1` | 40px / 48px, -1px |
| `h2` | 32px / 40px, -1px |
| `h3` | 24px / 32px |
| `h4` | 20px / 28px, 700 |
| `body-lg` and smaller | Same as desktop |

**Legacy mapping (for migrating existing frames)**

| Legacy | New token |
|---|---|
| 128 / 80 | `display` (128 → `display`, or treat it as a decorative numeral with `--color-text-tertiary`) |
| 64 | `h1` |
| 50 / 44 / 40 | `h2` |
| 32 / 30 | `h3` |
| 24 / 22 (bold or medium) | `h4` |
| 20 | `body-lg` |
| 16 | `body-md` |
| 14 | `body-sm` |
| 12 / 10 | `caption` |

### 1.5 Spacing

| Token | Value | Typical use |
|---|---|---|
| `--space-4` | 4px | Icon-to-label nudge, icon wrapper padding (24px wrapper) |
| `--space-8` | 8px | Tag padding, tight stacks, label-to-field gap |
| `--space-12` | 12px | Button padding (md), list gaps, mobile gutter |
| `--space-16` | 16px | Card inner stack gap, input horizontal padding |
| `--space-24` | 24px | Card padding (sm), grid gutters, section-header stack gap |
| `--space-32` | 32px | Card padding (default), desktop page gutter |
| `--space-40` | 40px | Large card padding, column gaps in multi-column layouts |
| `--space-48` | 48px | Section header → content, mobile section padding |
| `--space-64` | 64px | Between sub-sections, tablet section padding |
| `--space-80` | 80px | Desktop section vertical padding |

**Legacy mapping:** 5 → 4 · 10 → 12 · 15 → 16 · 20 → 24 · 30, 35 → 32 · **40 → 40** · **50 → 48** · 60 → 64 · 90, 95, 100 → 80.

### 1.6 Radii

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Icon glyph boxes, small chips, color swatches |
| `--radius-md` | 8px | Tooltips, small controls, dropdown items |
| `--radius-lg` | **12px** | **Cards, inputs, tables, image thumbnails** |
| `--radius-xl` | 20px | Large panels, dark CTA / form blocks |
| `--radius-2xl` | 32px | Hero media, oversized tiles |
| `--radius-full` | 9999px | Buttons, tags, badges, avatars, icon wrappers |

**Legacy mapping:** 2, 4 → `sm` · 6 → `md` · 10 → `lg` · 20 → `xl` · 28, 30 → `2xl` · 80, 100, 1024 → `full`.

### 1.7 Borders & elevation

- **Stroke width:** always `1px`. The only exception is the focus ring (2px, see §2.6). Fractional legacy strokes (0.2, 0.8, 1.03, 1.29) came from scaled SVGs and must be removed.
- **Stroke alignment:** inside (`box-shadow: inset` or `border` with `box-sizing: border-box`), so that a border never changes a component's height.
- **Shadows:** none. Use surface color and `--color-border-subtle` to show depth. The only allowed effect is `backdrop-filter: blur(16px)` on a sticky header.

### 1.8 Implementation reference

This document is framework-neutral. Its tokens are implemented as CSS custom properties in [`tokens.css`](tokens.css), which is the single implementation source for all stacks (React, Vue, Svelte, Angular, plain HTML, SCSS, CSS Modules, CSS-in-JS).

- **Naming:** a token in this file maps 1:1 to a CSS variable of the same name (`--color-primary`, `--space-16`, `--radius-lg`). Type tokens follow `--text-{token}-{size|line|weight|tracking}` (for example `--text-h2-size`).
- **Themes:** `tokens.css` defines light values on `:root` / `[data-theme="light"]` and dark overrides on `[data-theme="dark"]`. Components never branch on theme.
- **Responsive type:** the mobile type scale from §1.4 is applied inside `tokens.css` with a `max-width: 767px` media query, so components need no breakpoint logic for type.
- **Other platforms** (React Native, Flutter): export the same values from this file. CSS variables and `data-theme` do not exist there.

**Optional adapters** (not part of the design system, use only if the project uses the tool):

| Tool | File | Notes |
|---|---|---|
| Tailwind v4 | [`integrations/tailwind-v4.css`](integrations/tailwind-v4.css) | Maps tokens through `@theme inline`. Utility keys equal the token value (`p-8` = 8px = `--space-8`). |
| Tailwind v3 | [`integrations/tailwind-v3.config.js`](integrations/tailwind-v3.config.js) | Same key convention. |

Both adapters **replace** the tool's default scales rather than extending them, so an off-scale utility such as `p-5` or `text-[#333]` fails visibly in review. If a third-party UI library depends on default utilities, extend instead of replacing for that project and record the exception in the changelog.

---

## 2. Component Blueprints

**Auto Layout notation**

| Term | Meaning |
|---|---|
| **Hug** | Size comes from the children: `fit_content` on canvas, `width: auto` / `inline-flex` in code |
| **Fill** | Stretches to the parent's size: `fill_container` on canvas, `flex: 1` or `width: 100%` in code |
| **H** / **V** | Horizontal / vertical stack direction |

All components in this section exist as reusable masters in `devox.pen`.

### 2.1 Button: `Button/{Variant}/{Size}`

**Anatomy:** `[Label]` + optional `[IconTrailing]` (or `IconLeading`). The icon always sits inside a circular icon wrapper.

```
Button (H · Hug × Hug · align center/center · radius-full)
├── Label (H · Hug · padding [0, label-x])
│   └── Text (body-md/700 or body-sm/700)
└── IconTrailing (H · Hug · padding icon-pad · radius-full)
    └── Icon 16×16
```

**Sizes**

| Size | Height | Container padding | Label padding-x | Text | Icon wrapper |
|---|---|---|---|---|---|
| `sm` | 40 | `space-8` | `space-8` | body-sm / 700 | 24 (pad `space-4`, icon 16) |
| `md` | 48 | `space-12` | `space-12` | body-md / 700 | 24 (pad `space-4`, icon 16) |
| `lg` | 64 | `space-16` | `space-16` | body-md / 700 | 32 (pad `space-8`, icon 16) |

The height always comes from padding plus content. Never set it explicitly.

**Variants**

| Variant | Fill | Stroke | Label | Icon wrapper fill | Icon | Usage |
|---|---|---|---|---|---|---|
| `Primary` | `primary` | none | `on-primary` | `white` | `ink-950` | Main CTA; at most one per viewport |
| `Secondary` | `inverse-bg` | none | `inverse-text` | `inverse-text` | `inverse-bg` | High-emphasis alternative |
| `Outline` | none | 1px `border` (inside) | `text-primary` | `inverse-bg` | `inverse-text` | Default secondary action, carousel arrows |
| `Ghost` | none | none | `link` | `primary` | `white` | Tertiary and inline actions ("Learn more") |

**States**

| State | Primary | Secondary | Outline | Ghost |
|---|---|---|---|---|
| Hover | fill → `primary-hover` | opacity 0.88 | fill → `surface` | label → `primary-hover` |
| Pressed | fill → `primary-pressed` | opacity 0.80 | fill → `surface` + stroke `text-primary` | label → `primary-pressed` |
| Focus | 2px `primary` ring, 2px offset (all variants) | | | |
| Disabled | fill `ink-200`, label `text-tertiary`, `cursor: not-allowed` (all variants) | | | |

**Rules**

- **Icon-only buttons** (carousel arrows, menu toggle) are square: Hug × Hug, with the same padding as the size and an icon at 24px.
- **Full-width buttons** set Fill width on the instance and keep the content centered. This is used on mobile forms only.
- **Labels** are one line, sentence case, and no more than 3 words ("Get consultation", not "GET CONSULTATION").

### 2.2 Input: `Input/Field`, `Input/Underline`

**`Input/Field`** (default, on light and dark surfaces):

```
Field (V · Fill × Hug · gap space-8)
├── Label     body-sm / 700 · text-primary   (append "*" for required)
├── Box       (H · Fill × 48 · padding [space-12, space-16] · gap space-8 · align center
│   │          fill surface · 1px border-subtle inside · radius-lg (12))
│   ├── Icon  16×16 · text-tertiary (optional)
│   └── Value body-md / 400 · Fill width · text-primary (placeholder: text-tertiary)
└── Hint      caption · text-secondary (error state: color error)
```

**`Input/Underline`** (dark contact forms only):

```
Underline (V · Fill × Hug · padding [0,0,space-16,0] · stroke-bottom 1px border)
└── Value body-md / 400 · placeholder text-secondary
```

**States**

| State | Box |
|---|---|
| Default | stroke `border-subtle` |
| Hover | stroke `border` |
| Focus | stroke `primary`, plus a 2px `primary` ring at 24% alpha |
| Error | stroke `error`; the hint text turns `error` and gets a leading icon |
| Disabled | fill `ink-200` (light) / `ink-800` (dark); text `text-tertiary` |

**Rules**

- An input is always Fill width inside a form column. Never give an input a fixed pixel width.
- Stack fields vertically with `space-16` between them. Separate form groups with `space-32`.
- A textarea uses the same Box with a minimum height of 120px and `align: start`.

### 2.3 Card: `Card/Base`

```
Card (V · Fill × Hug · padding space-32 · gap space-16
│      fill surface · 1px border-subtle inside · radius-lg (12))
├── Top    (H · Fill · justify space-between · align start)
│   ├── Index / Eyebrow   h2 · text-tertiary  (optional)
│   └── IconWrapper/Inverse/40                (optional)
├── Title  h4 · text-primary · Fill · wraps
├── Body   body-md · text-secondary · Fill · wraps
└── Action Button/Ghost/md or Button/Outline/sm (optional, Hug)
```

**Card variants (padding and fill only; the structure stays the same)**

| Variant | Fill | Padding | Notes |
|---|---|---|---|
| `Base` | `surface` | `space-32` | Default |
| `Compact` | `surface` | `space-24` | Dense grids (4+ columns), mobile |
| `Large` | `surface` | `space-40` | Feature tiles with 2 columns or fewer |
| `Person` | `surface-warm` | `space-24` | Avatar (1:1, `radius-full`) + h4 name + body-sm role |
| `Soft` | `gradient-soft` | `space-32` | Process / step cards only |
| `Outline` | transparent | `space-32` | 1px `border`, used on `bg` when surface contrast is too low |

**Rules**

- Cards in a row are Fill width with equal widths. Use `gap: space-24` (desktop) or `space-16` (mobile).
- Cards in a row match heights by stretching the row. Never pad cards with empty spacers.
- Never nest a card inside a card.
- Titles use `h4` (24/32/700). `h3` is reserved for standalone feature blocks outside cards.

### 2.4 Section Header: `SectionHeader`

```
SectionHeader (V · Fill × Hug · gap space-32)
├── SectionEyebrow  (H · Fill × Hug · gap space-4 · align center · padding [0,0,space-32,0]
│   │                stroke-bottom 1px border, inside)
│   ├── Dot Box     16×16 · center/center
│   │   └── Dot     4×4 ellipse · text-primary
│   └── Label       body-sm / 700 · text-primary
└── Title Group     (V · Fill (max 720) × Hug · gap space-24)
    ├── Title       h1 · text-primary · Fill · wraps
    └── Subtitle    body-lg · text-secondary · Fill · wraps  (optional, ≤ 2 lines)
```

**`SectionEyebrow` is the only allowed section label.** It spans the full container width, and its bottom rule sits on the container edges. Don't use the pill `Badge/Eyebrow` to open a section. Pills are only for inline labels inside cards and lists.

**Layout variants**

| Variant | Arrangement |
|---|---|
| `Stacked` (default) | Left-aligned, max width 720 |
| `Split` | Eyebrow on top (full width). Below it: H · Fill · `justify: space-between` · `align: end`. Left: Title (max 720). Right: Subtitle or `Button/Outline` (Hug). |
| `Offset` | Eyebrow and Title span the full width. Below them, a description row (H · gap `space-24`): an empty **4/12-column offset** (440px at 1440) and an **8/12-column** content column (V · gap `space-32`). The content column holds a body-lg lead (max 720), an optional body-md `text-secondary` paragraph, and a `Button/Primary/md` CTA. On tablet and mobile the offset column is removed. |
| `Centered` | Same as Stacked with `align: center` and centered text. Hero and closing CTA only. |

**Rules**

- The gap from the header to the section content is always `space-48` (desktop) or `space-32` (mobile).
- Use one H1 per section. Sub-blocks inside a section use `h2` or `h3`.
- Build the left indent as a grid offset column. Never use `padding-left` spacers (legacy `463px`).
- A CTA in a section intro is `Button/Primary`. Use `Outline` only when a Primary button is already visible in the same viewport.

### 2.5 Supporting atoms & molecules

| Component | Blueprint |
|---|---|
| `Tag/{Filled, Outline, Inverse, Selected}` | H · Hug × 40 · padding [`space-8`, `space-16`] · gap `space-8` · `radius-full` · optional 16px leading icon · body-sm/700. Fill: Filled `surface`, Outline 1px `border`, Inverse `inverse-bg`, Selected `primary`. |
| `SectionEyebrow` | See §2.4. Full-width section label: 4px `text-primary` dot in a 16px box, body-sm/700, 1px bottom `border`, bottom padding `space-32`. |
| `Badge/{Eyebrow, Success, Warning, Error}` | H · Hug × 32 · padding [`space-4`, `space-12`] · gap `space-8` · `radius-full` · 8px status dot · body-sm/700. Inline use only (cards, lists, metadata), never as a section label. State badges use `surface` fill with a colored dot. Never fill a badge with the state color. |
| `IconWrapper/{Inverse, Primary, Outline, Surface}/{24,40,48}` | Circle, `radius-full`, Hug. Padding 4 / 8 / 12 around an icon of 16 / 24 / 24. |
| `Accordion/{Closed, Open}` | V · Fill · padding [`space-24`, 0] · gap `space-16` · bottom stroke 1px `border`. Header: H · gap `space-24` · align center; contains index (body-sm/700, `text-tertiary`), title (body-lg, Fill) and a toggle (36px circle: Outline + `plus` when closed, Primary + `minus` when open). Body: body-md, `text-secondary`, indented to align with the title. |
| `ListItem/{Bullet, Check}` | H · Fill · gap `space-12` · align start. Marker: an 8px `primary` dot centered in a 24px-tall wrapper, or `IconWrapper/Primary/24` with a `check` icon. Text: body-md, Fill. List gap `space-12`. |

### 2.6 Interaction & accessibility (all components)

- **Focus:** `outline: 2px solid var(--color-primary); outline-offset: 2px`. Never remove focus without a replacement.
- **Touch targets:** at least 40×40 (`Button/sm` and `IconWrapper/40`). Interactive 24px wrappers need a 40px hit area.
- **Contrast:** text must meet WCAG AA. `text-tertiary` is not allowed for body copy, only for placeholders, indices and disabled text.
- **Motion:** 150–200ms `ease-out` on color and opacity. Respect `prefers-reduced-motion`.

---

## 3. Section-Level Layout

### 3.1 Breakpoints & containers

| Breakpoint | Range | Design frame | Page gutter (x) | Content max width | Grid |
|---|---|---|---|---|---|
| Mobile | < 768 | 393 | `space-12` | Fill | 4 col · gap `space-12` |
| Tablet | 768–1279 | 768 | `space-24` | Fill | 8 col · gap `space-16` |
| Desktop | ≥ 1280 | 1440 | `space-32` | **1376** (1440 − 2×32) | 12 col · gap `space-24` |
| Wide | ≥ 1600 | n/a | auto | 1376, centered | 12 col · gap `space-24` |

```css
.container { width: 100%; max-width: 1440px; margin-inline: auto; padding-inline: var(--space-12); }
@media (min-width: 768px)  { .container { padding-inline: var(--space-24); } }
@media (min-width: 1280px) { .container { padding-inline: var(--space-32); } }
```

**Text measure:** body paragraphs have a max width of 720px (about 75 characters).

### 3.2 Section rhythm

| | Mobile | Tablet | Desktop |
|---|---|---|---|
| Section padding (top / bottom) | `space-48` | `space-64` | `space-80` |
| Header → content | `space-32` | `space-48` | `space-48` |
| Between sub-blocks in a section | `space-32` | `space-48` | `space-64` |
| Card grid gap | `space-16` | `space-16` | `space-24` |

- A section is a full-bleed band: background fill or theme across the full width, with `.container` inside it.
- Consecutive sections with the **same** background **do not** double their padding. The second one drops its top padding to `space-48`.
- Alternate `bg` (light), `surface` (light) and `bg` (dark theme) to separate sections. Never use a divider line between full-bleed sections.
- Hero: top padding `space-80` below the header. The hero image uses `radius-2xl` with the `gradient-brand` color overlay.

### 3.3 Responsive behavior

| Pattern | Desktop | Tablet | Mobile |
|---|---|---|---|
| Card grid (3–4 up) | 3–4 columns, Fill | 2 columns | 1 column, or a horizontal scroll carousel (card width 85% with peek) |
| Split section header | H, space-between | V stack | V stack; button becomes Fill width |
| Media + text split | H 50/50, gap `space-64` | H 50/50, gap `space-32` | V stack, media first |
| Accordion | Max width 960 | Fill | Fill; index hidden |
| Forms | 2-column fields, gap `space-24` | 2 columns | 1 column |
| Primary CTA buttons | Hug | Hug | Fill width (stacked, gap `space-12`) |
| Navigation | Inline links (body-sm/700) + `Button/Primary/sm` | Same | Menu `Button` (icon-only) opening a full-screen dark sheet |

Type scales down according to §1.4 (responsive type). Spacing tokens never scale proportionally. Switch to the specified smaller token instead.

---

## 4. Negative Constraints (Anti-Patterns)

❌ **Values outside the scale**

- ❌ Spacing outside the scale: `10px`, `15px`, `20px`, `30px`, `35px`, `50px`, `60px`, `90px`, `100px`. Use the nearest token from §1.5.
- ❌ Fixed pixel widths or heights on text, buttons, tags or inputs. Size them with Hug or Fill.
- ❌ Hardcoded component heights (`height: 48px` on a button). Height comes from padding plus line height.
- ❌ Radii outside the scale (`6px`, `10px`, `16px`, `30px`, `1024px`). Use `radius-*` tokens. Pills use `radius-full`.
- ❌ Fractional values of any kind (`1.03px` strokes, `3.2px` gaps, `463.5px` paddings).
- ❌ Spacer paddings used to position things (`padding-left: 463px`). Use layout alignment or the grid.
- ❌ `margin` for spacing between siblings. Use the parent's `gap`.

❌ **Ad-hoc colors**

- ❌ Raw HEX values in components (`#222224`, `#F0F0F0`, `#444444`, `#212121`, `#D9D9D9`, `#000000`). Use semantic tokens.
- ❌ Base tokens in components (`--ink-600`). Use `--color-text-secondary`.
- ❌ New purples or tints of primary. The only brand values are `primary`, `primary-hover` and `primary-pressed`.
- ❌ Opacity used to create grays on text (`opacity: 0.25` on a numeral). Use `text-tertiary`.
- ❌ Hand-picked dark colors for dark sections. Set `data-theme="dark"` and let the tokens resolve.
- ❌ State colors (`success`, `error`…) as large fills or brand accents. They are for status only.
- ❌ Gradients on buttons, text or borders.

❌ **Typography**

- ❌ Any font other than TT Interfaces, or a fallback stack other than the exact one in §1.4.
- ❌ `font-family: "TT Interfaces"` with no fallback, or `Arial` / `Helvetica` / `sans-serif` alone.
- ❌ Weights 300, 600 or 800, or synthetic bold.
- ❌ Font sizes outside the scale (`10px`, `22px`, `30px`, `44px`, `50px`, `128px`).
- ❌ Line heights off the 4px grid, or unitless values that don't match the token.
- ❌ Negative letter spacing below `h2`. ALL-CAPS text without `+1px` tracking.
- ❌ Using `h1` for card titles or `h4` for section titles. Titles inside cards are always `h4`.

❌ **Components & layout**

- ❌ Detaching a master component to change its padding or colors. Add a variant here instead.
- ❌ Absolutely positioned UI elements (buttons, text, cards). Absolute positioning is only for decorative backgrounds.
- ❌ Cards nested in cards, or wrapping single elements in decorative boxes.
- ❌ More than one `Button/Primary` in the same viewport.
- ❌ Drop shadows for elevation.
- ❌ Borders thicker than 1px (except the 2px focus ring), or borders that change a component's size (outside alignment).
- ❌ Content wider than 1376px, or body text wider than 720px.
- ❌ Divider lines between full-bleed sections.

---

## 5. Changelog

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-10-01 | Initial system. Added `h4` (24/32/700) for card and team titles. Added `space-40`. Legacy 40px → 40, 50px → 48. Radius scale re-indexed so `radius-lg` = 12px (cards, inputs). Adopted `success` `#12A150`. |
| 1.3 | 2026-10-08 | Made the document framework-neutral. Removed the Tailwind config and the Tailwind column from §1.6. Added 	okens.css as the single implementation source and optional Tailwind v3 / v4 adapters in integrations/. Tailwind adapter spacing keys now equal the pixel value (p-8 = 8px) instead of an index. |
| 1.2 | 2026-10-07 | Built the Style Guide frame in `devox.pen` (zone 05): colour variables with light/dark themes, type scale, spacing, radii, borders and reusable masters for Button, IconWrapper, Tag, Badge, SectionEyebrow, Input, Card, SectionHeader, Accordion and ListItem. Audit of the real pages found off-token values to migrate: greys `#71717A` / `#E4E4E7` (use `text-secondary` / `surface`), `#222224` (→ `ink-900`), radii 9.71, 27.2, 28 and 50, spacing 5 / 10 / 15 / 30 / 35 / 90, font sizes 9, 17, 18, 19, 22, 23, 29, 44, 62, 78, and breakpoint widths 1580–1590 / 800–810 / 370–380 instead of 1440 / 768 / 393. First migration pass on the 36 real page frames (zone 01): legacy hex values snapped to token values (`#222224` → `#232326`, `#71717A` → `#717578`, `#E4E4E7` → `#D9DADA`, `#F0F0F0` / `#F1F1F1` → `#F4F5F5`, `#000` → `#0F0F10`, `#404040` → `#37383A`, `#FFF` → `#FFFFFF`), brand purple bound to the `color-primary` variable, radii snapped to the scale (10 / 9.71 → 12, 27–30 → 32, ≤ 100px pills → full), fractional strokes set to 1px and shadows neutralised. Spacing, font sizes, weights and frame widths are not migrated yet because they reflow the layout. |
| 1.1 | 2026-10-01 | Added the `SectionEyebrow` master (full-width rule) as the standard section label; `Badge/Eyebrow` is now inline-only. Section header gap is `space-32`. Added the `Offset` section-header variant (4/12 offset + 8/12 content). Intro CTAs use `Button/Primary`. |
