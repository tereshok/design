A list of questions or services where one row opens to reveal its body. Rows are separated by a 1px rule.

**You provide:** an index number, a title and a body of plain text. The page owns the open and closed state.

Fill width, `space-24` vertical padding, `space-16` gap, a 1px `color-border` bottom rule. The header holds an index (`body-sm` 700, `color-text-tertiary`), a title (`body-lg`, Fill) and a 36px circular toggle: `Outline` with a plus when closed, `color-primary` with a white minus when open. The body is `body-md` in `color-text-secondary`, indented to align with the title.

**Do**
- Cap the width at 960 on desktop and hide the index on mobile.
- Make the whole header a button and keep a visible focus ring.

**Don't**
- Nest an accordion inside an accordion.
- Put a card around a row.
