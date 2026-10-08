A pill that labels or filters content, such as an industry or technology. Use `Selected` for the active filter.

**You provide:** a short label and, optionally, a 16px leading icon.

Hug × 40, padding `space-8` / `space-16`, gap `space-8`, `radius-full`, `body-sm` 700.

| Variant | Fill |
|---|---|
| `Filled` | `color-surface` |
| `Outline` | none, 1px `color-border` inside |
| `Inverse` | `color-inverse-bg` with `color-inverse-text` |
| `Selected` | `color-primary` with `color-on-primary` |

**Do**
- Keep tags in a row with `space-12` gap and let them wrap.
- Keep a 40px minimum touch target.

**Don't**
- Use a tag as a section label; that is the `SectionEyebrow`.
- Add a gradient or a shadow.
