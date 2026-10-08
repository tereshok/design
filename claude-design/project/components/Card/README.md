A flat surface that groups a title, a short body and an optional action. Use it for services, features and process steps; use `Person` for the team.

**You provide:** a title (always `h4`), a body of one to three sentences, and optionally an index numeral, an `IconWrapper/Inverse/40` and one `Button/Ghost/md` or `Button/Outline/sm`.

A vertical stack, Fill × Hug, gap `space-16`, fill `color-surface`, a 1px `color-border-subtle` stroke inside, `radius-lg`.

| Variant | Fill | Padding | Use |
|---|---|---|---|
| `Base` | `color-surface` | `space-32` | Default |
| `Compact` | `color-surface` | `space-24` | Grids of four or more columns, mobile |
| `Large` | `color-surface` | `space-40` | Feature tiles, two columns or fewer |
| `Person` | `color-surface-warm` | `space-24` | 1:1 avatar at `radius-full`, `h4` name, `body-sm` role |
| `Soft` | `gradient-soft` | `space-32` | Process and step cards only; text in `ink-950` |
| `Outline` | transparent, 1px `color-border` | `space-32` | When surface contrast against the background is too low |

**Do**
- Make cards in a row equal width, stretch them to equal height and space them `space-24` (desktop) or `space-16` (mobile).
- Use `h4` for the title. `h3` is for standalone feature blocks outside cards.

**Don't**
- Nest a card inside a card.
- Pad a card with empty spacers to equalize heights.
- Use `Soft` anywhere except process or step cards.
