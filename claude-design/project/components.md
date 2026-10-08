# Components

Blueprints from the Devox style guide. Dimensions follow auto layout: Hug sizes to content, Fill stretches to the parent. Height always comes from padding plus content; never set it explicitly. Each component below has a live preview and a guideline page under `components/`.

## Button

A label plus an optional trailing icon inside a circular icon wrapper. All buttons are `radius-full`.

| Size | Height | Container padding | Label padding-x | Text | Icon wrapper |
|---|---|---|---|---|---|
| `sm` | 40 | `space-8` | `space-8` | `body-sm` 700 | 24 (padding `space-4`, icon 16) |
| `md` | 48 | `space-12` | `space-12` | `body-md` 700 | 24 (padding `space-4`, icon 16) |
| `lg` | 64 | `space-16` | `space-16` | `body-md` 700 | 32 (padding `space-8`, icon 16) |

| Variant | Fill | Stroke | Label | Use |
|---|---|---|---|---|
| Primary | `color-primary` | none | `color-on-primary` | Main CTA; at most one per viewport |
| Secondary | `color-inverse-bg` | none | `color-inverse-text` | High-emphasis alternative |
| Outline | none | 1px `color-border` inside | `color-text-primary` | Default secondary action, carousel arrows |
| Ghost | none | none | `color-link` | Tertiary and inline actions ("Learn more") |

- Hover: Primary fill to `color-primary-hover`; Secondary opacity 0.88; Outline fill to `color-surface`; Ghost label to `color-primary-hover`.
- Pressed: Primary fill to `color-primary-pressed`; Secondary opacity 0.80; Outline fill to `color-surface` with a `color-text-primary` stroke; Ghost label to `color-primary-pressed`.
- Focus: 2px `color-primary` ring, 2px offset. Disabled: fill `ink-200`, label `color-text-tertiary`, `cursor: not-allowed`.
- Icon-only buttons (carousel arrows, menu toggle) are square with the size's padding and a 24px icon. Full-width buttons are for mobile forms only.
- Labels are one line, sentence case, three words at most.

## Input

`Input/Field` (default, light and dark surfaces): a vertical stack with `space-8` gap of a label (`body-sm` 700, "*" appended when required), a box and a hint.

- Box: Fill × 48, padding `space-12` / `space-16`, gap `space-8`, fill `color-surface`, 1px `color-border-subtle` inside, `radius-lg`. Optional 16px leading icon in `color-text-tertiary`; value `body-md` 400, placeholder `color-text-tertiary`.
- Hint: `caption` in `color-text-secondary`; `color-error` in the error state.
- States: hover stroke `color-border`; focus stroke `color-primary` plus a 2px `color-primary` ring at 24% alpha; error stroke `color-error` and a leading icon on the hint; disabled fill `ink-200` (light) or `ink-800` (dark) with `color-text-tertiary` text.

`Input/Underline` (dark contact forms only): value `body-md` 400, bottom padding `space-16`, 1px `color-border` bottom stroke, placeholder `color-text-secondary`.

- Inputs are always Fill width, never a fixed pixel width. Stack fields with `space-16`; separate form groups with `space-32`. A textarea uses the same box with a minimum height of 120px, aligned to start.

## Card

A vertical stack, Fill × Hug, padding `space-32`, gap `space-16`, fill `color-surface`, 1px `color-border-subtle` inside, `radius-lg`.

- Parts: top row (optional index or eyebrow in `h2` `color-text-tertiary`, optional `IconWrapper/Inverse/40`), title in `h4`, body in `body-md` `color-text-secondary`, optional action (`Button/Ghost/md` or `Button/Outline/sm`).

| Variant | Fill | Padding | Note |
|---|---|---|---|
| Base | `color-surface` | `space-32` | Default |
| Compact | `color-surface` | `space-24` | Dense grids (4+ columns), mobile |
| Large | `color-surface` | `space-40` | Feature tiles, 2 columns or fewer |
| Person | `color-surface-warm` | `space-24` | 1:1 avatar at `radius-full`, `h4` name, `body-sm` role |
| Soft | `gradient-soft` | `space-32` | Process and step cards only |
| Outline | transparent | `space-32` | 1px `color-border`, for when surface contrast is too low |

- Cards in a row are equal width with `space-24` gap (desktop) or `space-16` (mobile), and match heights by stretching the row. Never nest a card in a card. Card titles are `h4`; `h3` is for standalone feature blocks.

## Section header

A vertical stack, gap `space-32`: the `SectionEyebrow`, then a title group (max 720 wide, gap `space-24`) with an `h1` title and an optional `body-lg` subtitle in `color-text-secondary` (two lines at most).

- `SectionEyebrow` is the only section label: full container width, a 16×16 box holding a 4×4 `color-text-primary` dot, a `body-sm` 700 label, a 1px `color-border` bottom rule and `space-32` bottom padding.
- Variants: Stacked (default, left-aligned, max 720); Split (title left, subtitle or `Button/Outline` right, aligned end); Offset (eyebrow and title full width, then a 4/12-column empty offset and an 8/12 content column with a `body-lg` lead, an optional `body-md` paragraph and a `Button/Primary/md`; the offset disappears on tablet and mobile); Centered (hero and closing CTA only).
- The gap from header to content is `space-48` desktop, `space-32` mobile. Use one `h1` per section. Build the left indent as a grid offset, never a padding-left spacer. A CTA in a section intro is `Button/Primary`; use Outline only when a Primary is already in the viewport.

## Tag, Badge, IconWrapper

- `Tag/{Filled, Outline, Inverse, Selected}`: Hug × 40, padding `space-8` / `space-16`, gap `space-8`, `radius-full`, `body-sm` 700, optional 16px leading icon. Fill: Filled `color-surface`, Outline 1px `color-border`, Inverse `color-inverse-bg`, Selected `color-primary`.
- `Badge/{Eyebrow, Success, Warning, Error}`: Hug × 32, padding `space-4` / `space-12`, gap `space-8`, `radius-full`, 8px status dot, `body-sm` 700. Inline use only (cards, lists, metadata), never as a section label. State badges use a `color-surface` fill with a colored dot; never fill a badge with the state color.
- `IconWrapper/{Inverse, Primary, Outline, Surface}/{24, 40, 48}`: a `radius-full` circle with padding 4 / 8 / 12 around an icon of 16 / 24 / 24. Interactive 24px wrappers need a 40px hit area.

## Accordion and list item

- `Accordion/{Closed, Open}`: Fill, padding `space-24` vertical, gap `space-16`, 1px `color-border` bottom rule. Header: index (`body-sm` 700, `color-text-tertiary`), title (`body-lg`, Fill) and a 36px circular toggle (Outline with a plus when closed, Primary with a minus when open). Body: `body-md` in `color-text-secondary`, indented to the title. Maximum width 960 on desktop; the index is hidden on mobile.
- `ListItem/{Bullet, Check}`: Fill, gap `space-12`, aligned to start. Marker is an 8px `color-primary` dot centered in a 24px-tall wrapper, or `IconWrapper/Primary/24` with a check icon. Text `body-md`. List gap `space-12`.
