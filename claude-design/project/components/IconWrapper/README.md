A circle that holds one glyph. It sits inside buttons, cards and list items and stands alone for arrows and toggles.

**You provide:** one glyph. The canvas uses text glyphs (→, +, −, ✓) set in Inter at 14px for the 24 wrapper and 20px for the 40 and 48 wrappers.

`radius-full`, Hug. Sizes 24, 40 and 48.

| Variant | Fill | Glyph |
|---|---|---|
| `Inverse` | `color-inverse-bg` | `color-inverse-text` |
| `Primary` | `color-primary` | white |
| `Outline` | none, 1px `color-border` inside | `color-text-primary` |
| `Surface` | `color-surface` | `color-text-primary` |

**Do**
- Give an interactive 24px wrapper a 40px hit area.

**Don't**
- Put text inside it; it holds a single glyph only.
