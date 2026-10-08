A pill-shaped action with a label and an optional trailing icon inside a circular icon wrapper. Use `Primary` for the one main call to action in a viewport, `Outline` for the default secondary action, `Secondary` for a high-emphasis alternative and `Ghost` for inline "Learn more" actions.

**You provide:** a label of one line, sentence case, three words at most ("Get consultation", not "GET CONSULTATION"), and an icon from the icon font or an inline SVG at 16px.

| Size | Container padding | Label padding-x | Text | Icon wrapper | Resulting height |
|---|---|---|---|---|---|
| `sm` | `space-8` | `space-8` | `body-sm` 700 | 24 (padding `space-4`) | 40 |
| `md` | `space-12` | `space-12` | `body-md` 700 | 24 (padding `space-4`) | 48 |
| `lg` | `space-16` | `space-16` | `body-md` 700 | 32 (padding `space-8`) | 64 |

Height comes from padding plus content. Never set it.

| Variant | Fill | Label | Icon wrapper |
|---|---|---|---|
| `Primary` | `color-primary` | `color-on-primary` | white, ink icon |
| `Secondary` | `color-inverse-bg` | `color-inverse-text` | `color-inverse-text`, `color-inverse-bg` icon |
| `Outline` | none, 1px `color-border` inside | `color-text-primary` | `color-inverse-bg`, `color-inverse-text` icon |
| `Ghost` | none | `color-link` | `color-primary`, white icon |

**States:** hover Primary to `color-primary-hover`, Secondary opacity 0.88, Outline fill `color-surface`, Ghost label `color-primary-hover`. Pressed uses `color-primary-pressed`, opacity 0.80, `color-surface` with a `color-text-primary` stroke. Focus is a 2px `color-primary` ring with 2px offset. Disabled is `ink-200` fill with `color-text-tertiary` label.

**Do**
- Keep at most one `Primary` in the same viewport.
- Make icon-only buttons (carousel arrows, menu toggle) square, with the size's padding and a 24px icon.
- Make a button full width on mobile forms, with its content centered.

**Don't**
- Set a fixed height or width.
- Put a gradient on a button.
- Use three or more words or ALL CAPS in the label.
