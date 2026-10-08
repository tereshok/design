Devox Design is the visual system for the Devox Software website (devoxsoftware.com): one typeface, a purple-on-neutral palette, pill-shaped controls, flat surfaces and a strict 4px grid. Any value that is not a token here is a bug; if a design needs a new value, add the token first.

## Principles

- Use tokens only. Every color, size, line height, gap, radius and stroke comes from `tokens.json`.
- Components read semantic tokens (`color-text-secondary`), never base tokens (`ink-600`, `purple-600`). Base tokens exist only to define semantic ones.
- Every semantic color has a light and a dark value. A dark section sets `data-theme="dark"` and the tokens resolve; never hand-pick dark colors.
- Build with flex layout everywhere (`gap` and `padding`). Absolute positioning is for decorative layers only.
- Work on a 4px grid with an 8px rhythm: line heights, paddings, gaps and heights are multiples of 4.

## Color

- Brand is `color-primary` (`#9118db`), with `color-primary-hover` and `color-primary-pressed`. These are the only brand values; never invent new purples or tints.
- Put `color-on-primary` on any primary fill. Use at most one `Button/Primary` per viewport.
- Page background is `color-bg`; cards, inputs and filled tags use `color-surface`; people cards use `color-surface-warm`. Alternate `color-bg`, `color-surface` and a dark-theme band to separate sections, never a divider line between full-bleed sections.
- Text: `color-text-primary` for headings and body, `color-text-secondary` for subtitles and metadata. `color-text-tertiary` is for placeholders, disabled text, breadcrumbs and index numerals only; it is 2.54:1 on white.
- Borders: `color-border` for outline buttons, tags and rules; `color-border-subtle` for hairlines, card and input outlines.
- Status colors (`color-success`, `color-warning`, `color-error`, `color-info`) mark status only. Use them as a dot or small icon with a word beside it, never as a large fill, brand accent or sole signal.
- Gradients: `gradient-brand` as the hero image color overlay, `gradient-soft` on process and step cards. Never on buttons, text or borders.
- Opacity is not a way to make gray: use `color-text-tertiary`, not `opacity: 0.25`.

## Typography

- One family, `TT Interfaces`, with the exact stack in `type.families.sans`. No serif, mono or second display face. TT Interfaces is a commercial font: self-host it with `font-display: swap`.
- Allowed weights are 400, 500 and 700 only. Never 300, 600 or 800, and never synthetic bold.
- Hero headline `display`, once per page. Section titles `h1`, sub-sections and large stats `h2`, standalone feature titles `h3`. Titles inside cards are always `h4`.
- Lead paragraphs and section subtitles `body-lg`; default copy `body-md`; secondary copy `body-sm`; meta labels `caption`. Use weight 700 on `body-md` and `body-sm` for button labels, tags, nav and eyebrow badges.
- Below 768px: `display` 44/48, `h1` 40/48 with -1px tracking, `h2` 32/40, `h3` 24/32, `h4` 20/28; `body-lg` and smaller do not change.
- Negative tracking only on `display`, `h1` and `h2`. UPPERCASE text takes +1px tracking. Body paragraphs max 720px wide.
- Icons come from the `DevoxIcon` icon font (`type.families.icon`).

## Spacing and layout

- Spacing steps are `space-4` through `space-80` (4, 8, 12, 16, 24, 32, 40, 48, 64, 80). Space siblings with the parent's `gap`, never margins.
- Section padding top and bottom: `space-48` mobile, `space-64` tablet, `space-80` desktop. Header to content: `space-32` mobile, `space-48` tablet and desktop.
- Cards in a grid use `space-24` gap on desktop and `space-16` below. Cards in a row are equal width and stretch to equal height.
- Content is never wider than 1376px (1440 frame less 32px gutters). Full detail in the layout guide.

## Shape, borders, elevation

- Cards, inputs, tables and thumbnails `radius-lg`; large panels `radius-xl`; hero media `radius-2xl`; buttons, tags, badges, avatars and icon wrappers `radius-full`.
- Strokes are 1px, drawn inside so they never change a component's size. The one exception is the 2px focus ring.
- No shadows. Show depth with surface color and `color-border-subtle`. The only effect allowed is `backdrop-filter: blur(16px)` on a sticky header.

## Interaction and accessibility

- Focus: `outline: 2px solid var(--color-primary); outline-offset: 2px`. Never remove focus without a replacement.
- Touch targets are at least 40×40.
- Motion: 150–200ms `ease-out` on color and opacity; respect `prefers-reduced-motion`.
- Text must meet WCAG AA. Known misses in the source values, kept as written: `color-text-secondary` on `color-surface` in light (4.26:1), `color-link` in dark (4.12:1 on `color-bg`), `color-text-tertiary` in dark (4.12:1), and `color-error` text on white (4.27:1). Do not use `color-warning` or `color-border` as text.

## Components and anti-patterns

- Component blueprints (Button, Input, Card, Section Header, Tag, Badge, IconWrapper, Accordion, ListItem) are in the components guide. Use a variant from there instead of detaching a component to change padding or color.
- Never use: spacing, radii or font sizes outside the scale; fixed pixel widths or heights on text, buttons, tags or inputs; fractional values; raw hex in components; another font; cards nested in cards; more than one Primary button per viewport; drop shadows; divider lines between full-bleed sections.

## Content fundamentals

- Button labels are sentence case, one line, at most three words: "Get consultation", not "GET CONSULTATION".
- Every section opens with the full-width `SectionEyebrow` label (a 4px dot and a bold `body-sm` label over a 1px rule). The pill `Badge/Eyebrow` is for inline labels inside cards and lists only.
- Section subtitles run two lines at most.

## Imagery

- Hero images take `radius-2xl` with the `gradient-brand` color overlay. Avatars are 1:1 at `radius-full`. Scrims use `color-overlay`.
- The repository's `images/` folder holds captured site photos, not designed assets; they are not part of this system.

## Not synced

- Logos: the repository has no logo files, so there is no logo asset; set the name in `h4` or `h3` type.
- Components: there is no component code or bundle. The previews are static HTML recreated from the `devox.pen` canvas (Button, Input, Card, SectionHeader, Tag, Badge, IconWrapper, Accordion, ListItem) and `design.md`; icons are the canvas text glyphs (→ + − ✓) set in Inter.
- Fonts: the site's TT Interfaces DemiBold (600) file was not copied because 600 is not an allowed weight. The repository's own backlog lists a canvas-only bold mismatch; the real Bold (700) file is included.
- Mobile type sizes, `fixes.md` backlog items and the 195 captured site images were not brought in.
