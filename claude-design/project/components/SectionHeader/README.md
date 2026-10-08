The block that opens every section: a full-width `SectionEyebrow`, then a title group with an `h1` title and an optional subtitle.

**You provide:** the eyebrow label, the title, an optional subtitle of two lines at most, and for `Split` or `Offset` a button.

A vertical stack with `space-32` gap. The `SectionEyebrow` is the only allowed section label: a 16×16 box holding a 4×4 `color-text-primary` dot, a `body-sm` 700 label, a 1px `color-border` rule along the bottom edge and `space-32` bottom padding. The title group is at most 720 wide with `space-24` gap; the title is `h1` and the subtitle is `body-lg` in `color-text-secondary`.

| Variant | Arrangement |
|---|---|
| `Stacked` | Default, left-aligned, max width 720 |
| `Split` | Title on the left, subtitle or `Button/Outline` on the right, aligned to the bottom |
| `Offset` | Eyebrow and title full width; below them an empty 4/12 offset and an 8/12 column with a `body-lg` lead, an optional `body-md` paragraph and a `Button/Primary/md`. The offset is removed on tablet and mobile |
| `Centered` | Hero and closing CTA only |

**Do**
- Leave `space-48` (desktop) or `space-32` (mobile) between the header and the section content.
- Use one `h1` per section; sub-blocks use `h2` or `h3`.
- Use `Button/Primary` for the CTA, and `Outline` only when a Primary is already in view.

**Don't**
- Open a section with the pill `Badge/Eyebrow`.
- Build the left indent with `padding-left`; use the grid offset.
