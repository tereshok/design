A labelled text field for forms. `Field` is the default on light and dark surfaces; `Underline` is for dark contact forms only.

**You provide:** a label (append `*` when required), a placeholder, an optional leading icon and a hint line. Put the input in a form column and let it fill the column width.

- **Field:** a vertical stack with `space-8` gap: label in `body-sm` 700, a box, a hint in `caption`. The box has `space-12` / `space-16` padding, `color-surface` fill, a 1px `color-border-subtle` stroke inside and `radius-lg`. The value is `body-md` 400; the placeholder is `color-text-tertiary`.
- **Underline:** value `body-md` 400, `space-16` bottom padding, a 1px `color-border` bottom stroke, placeholder in `color-text-secondary`.
- **Textarea:** the same box with a minimum height of 120px, aligned to the top.

| State | Box |
|---|---|
| Default | stroke `color-border-subtle` |
| Hover | stroke `color-border` |
| Focus | 2px `color-primary` stroke inside |
| Error | stroke `color-error`; the hint turns `color-error` and takes a leading icon |
| Disabled | fill `ink-200` (light) or `ink-800` (dark), text `color-text-tertiary` |

**Do**
- Stack fields with `space-16` and separate form groups with `space-32`.
- Pair the error color with a message, never color alone.

**Don't**
- Give an input a fixed pixel width.
- Use `Underline` on a light surface.
- Use `color-text-tertiary` for anything the user must read; it is placeholder and disabled text only.
