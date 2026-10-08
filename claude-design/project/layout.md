# Layout

## Breakpoints and containers

| Breakpoint | Range | Design frame | Page gutter | Content max width | Grid |
|---|---|---|---|---|---|
| Mobile | under 768 | 393 | `space-12` | Fill | 4 columns, gap `space-12` |
| Tablet | 768 to 1279 | 768 | `space-24` | Fill | 8 columns, gap `space-16` |
| Desktop | 1280 and up | 1440 | `space-32` | 1376 | 12 columns, gap `space-24` |
| Wide | 1600 and up | none | auto | 1376, centered | 12 columns, gap `space-24` |

- Use one container: full width, max 1440, centered, with the gutter above as inline padding. Body paragraphs max 720 wide (about 75 characters).

## Section rhythm

| | Mobile | Tablet | Desktop |
|---|---|---|---|
| Section padding (top and bottom) | `space-48` | `space-64` | `space-80` |
| Header to content | `space-32` | `space-48` | `space-48` |
| Between sub-blocks | `space-32` | `space-48` | `space-64` |
| Card grid gap | `space-16` | `space-16` | `space-24` |

- A section is a full-bleed band (background fill or theme) with the container inside it.
- Consecutive sections with the same background do not double their padding: the second drops its top padding to `space-48`.
- Alternate `color-bg`, `color-surface` and a dark-theme band. Never place a divider line between full-bleed sections.
- Hero: top padding `space-80` below the header; the hero image uses `radius-2xl` with the `gradient-brand` overlay.

## Responsive behavior

| Pattern | Desktop | Tablet | Mobile |
|---|---|---|---|
| Card grid (3 to 4 up) | 3 to 4 columns, Fill | 2 columns | 1 column, or a horizontal carousel (card width 85% with a peek) |
| Split section header | Horizontal, space-between | Vertical stack | Vertical stack; button becomes Fill width |
| Media and text split | 50/50, gap `space-64` | 50/50, gap `space-32` | Vertical stack, media first |
| Accordion | Max width 960 | Fill | Fill; index hidden |
| Forms | 2-column fields, gap `space-24` | 2 columns | 1 column |
| Primary CTA buttons | Hug | Hug | Fill width, stacked with `space-12` gap |
| Navigation | Inline links (`body-sm` 700) plus `Button/Primary/sm` | Same | Icon-only menu button opening a full-screen dark sheet |

- Type scales down per the typography rules in the README. Spacing tokens never scale proportionally: switch to the specified smaller token.
