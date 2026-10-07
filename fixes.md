# Devox Design: backlog of fixes

A working list of what still has to be fixed in `devox.pen`. Add new items at the bottom of the right section. When an item is done, tick the box and add the date and a short note.

**Status legend:** `[ ]` open · `[x]` done · `[~]` partly done
**Priority:** P1 blocks handoff · P2 should be fixed · P3 nice to have
**Source of rules:** [design.md](design.md) · style guide frame `cHYZv` (zone 05)

---

## 1. Real site pages (zone 01 · Site Pages)

Pages: Home, Service page, Portfolio archive, Portfolio single, About Us, Careers archive, Careers single, Blog archive, Blog single, Authors archive, Author single, Search results. Each exists in Desktop, Tablet and Mobile.

### 1.1 Layout and structure

- [ ] **P1 Frame widths.** Frames are 1580–1590 / 800–810 / 370–380 wide. The design system says 1440 / 768 / 393. Resize and re-check every fixed-width child.
- [ ] **P1 Header is missing.** On the pages the header sits above the top edge of the frame (`y = -70 … -125`, absolute, clipped), so it is not visible. Examples: `ntyzi`, `pHK8T`, `BqdLh`. Place it in the flow at the top, using header generation C from zone 03.
- [ ] **P1 `Iframe` placeholder in "Book Your Call Now".** Grey empty rectangle where the form was not captured. Affects Portfolio single (`BD8qE` desktop, `bf6Am` mobile) and likely other pages. Replace with the real form (`Input/Field` + `Button/Primary`).
- [ ] **P2 Absolute UI elements.** Scroll-to-top button floats over content (`QJLsI` desktop y=1090, `Ix9eo` mobile y=698). Header and some buttons are `layoutPosition: absolute`. design.md allows absolute only for decorative layers.
- [ ] **P2 Frames without layout.** Pencil reports hundreds of frames with `fit_content` but no flex layout, and `fill_container` children outside a layout. They come from the original capture. Convert each to a vertical or horizontal layout.
- [ ] **P2 Circular sizing.** Some frames use `fit_content` while a child uses `fill_container` (for example `bIr6d`, `WZO4q`, `hyQdq`, `diywx`, `vQ3jL`, `cIfr9`). Give the parent a fixed size or change the child.
- [ ] **P3 Layer names.** Many layers are still `div`, `span`, `ul`, `li`, `undefined`. Rename them to meaningful names.

### 1.2 Spacing

- [ ] **P1 Off-scale gaps and paddings.** Seen in the pages: 5, 10, 15, 20, 30, 35, 60, 90 and fractional values (9.71, 15.01, 19.99, 28.17, 103.97). Map to `space-4 … space-80` (legacy mapping is in design.md §1.5).
- [ ] **P2 Section rhythm.** Section padding should be `space-48` mobile / `space-64` tablet / `space-80` desktop; header → content `space-32 / 48 / 48`. Pages currently use the captured values.
- [ ] **P2 Offset column.** Some blocks still use spacer paddings instead of a 4/12 + 8/12 grid (portfolio single "About the client", "The Trigger", "The Outcomes": label column width 469 fixed).

### 1.3 Typography

- [ ] **P1 Off-scale font sizes.** Fractional values (13.6, 15.54, 29.14, 38.86, 62.17, 77.71, 142.22) and 9, 17, 22, 44, 50. Map: 13.6/14 → body-sm, 15.54/16 → body-md, 29.14/32 → h3, 38.86/40 → h2, 62.17/64 → h1, 77.71/80 → display, 22 → h4. After this, re-run the overlap check (text will reflow).
- [ ] **P1 Weights 600 and 900.** 827 text nodes use 600 and 9 use 900. Move to 500 or 700 (the canvas font files are `TTInterfacesMedium` and `TTInterfacesDemiBold`).
- [ ] **P2 Font families.** 314 text nodes use `Inter` inside pages (placeholders such as "Iframe"). Replace with TT Interfaces.
- [ ] **P2 Letter spacing.** Check display / h1 (−2), h2 (−1) and ALL-CAPS captions (+1) against design.md.
- [ ] **P2 Eyebrow / label inconsistency.** Portfolio single desktop: "About the client" is a small grey label while "Background:", "The Trigger:", "The Solution:", "The Outcomes:" are large purple labels. Decide one style (use `SectionEyebrow`).
- [ ] **P3 Lead paragraph size.** "About the client" is ~62px on desktop. Probably `h2`/`body-lg`, confirm with the live site.

### 1.4 Colour, radius, effects

- [x] 2026-10-07 Legacy hex values snapped to tokens (`#222224`, `#71717A`, `#E4E4E7`, `#F0F0F0`, `#F1F1F1`, `#000`, `#404040`, `#FFF`).
- [x] 2026-10-07 Brand purple bound to the `color-primary` variable.
- [x] 2026-10-07 Radii snapped to the scale; fractional strokes set to 1px.
- [~] 2026-10-07 Shadows neutralised (transparent, blur 0) but still exist as effects on 30 nodes. Remove them completely.
- [ ] **P1 Bind remaining colours to semantic variables.** Pages still use raw hex (`#FFFFFF`, `#0F0F10`, `#F4F5F5`, `#232326`, `#37383A`, `#BBBDBE`…). To switch to `color-*` variables, first set `theme: { mode: "dark" }` on dark sections so tokens resolve correctly.
- [ ] **P2 Dark sections have no theme.** Dark bands are painted with hand-picked hex, not with a dark theme (design.md §0.3).
- [ ] **P2 Background blur 25px** on glass buttons (77 nodes). Only `blur(16px)` on a sticky header is allowed.
- [ ] **P3 Stroke `#ECE3DA`** (3 nodes) is not a token. Replace with `color-border-subtle` or remove.
- [ ] **P3 Country flags and logo colours** (`#D80027`, `#0052B4`, `#FF5A14` …) are illustration colours. Keep, but document as an exception.
- [ ] **P3 `text-tertiary` for body text.** Check contrast (WCAG AA) where `#A0A3A5` / `#BBBDBE` text sits on white or grey.

### 1.5 Content and component details

- [ ] **P2 Service page · Backend Development accordion.** In the open item the bold title and its description are split into two lines with an empty gap, and descriptions start with a stray space or comma (", including static analysis…"). Same on tablet and mobile (`LzjTv`, `ZX3Mh`, `zW5FU`). On desktop, "Cloud-native implementation" wraps its description to the next line, the other four do not.
- [ ] **P2 Lists in portfolio single and blog.** Same split title/description pattern ("Zero legacy-platform replacement required" followed by ". The client introduced…").
- [ ] **P2 Contact form.** Phone field is empty in the copy used on Portfolio single tablet (`J67UN`). The phone row on other pages shows `+1 201-555-0123`.
- [ ] **P2 Components not used.** Pages are built from captured frames, not from instances of the style-guide masters (Button, Tag, Badge, Card, Input, Accordion, SectionHeader). Replace gradually.
- [ ] **P3 Multiple Primary buttons** in one viewport (design.md allows one). Check hero + sticky header.
- [ ] **P3 Missing page types.** Not yet in the file: 404, privacy / terms, ROI calculator page as a real page, contact page.

### 1.6 Checks to repeat after every batch of fixes

- [ ] No overlapping blocks in any page frame (run the overflow check from the last session: fixed-height frames smaller than their content).
- [ ] Equal gaps between sections (5px between page sections today).
- [ ] No horizontal clipping at 393 / 768 / 1440.
- [ ] Footers and forms still intact (they broke once when frame heights were changed automatically, see 2026-10-07).

---

## 2. Page examples (zone 02)

- [ ] **P3 Remove duplicates.** Blog article, Authors listing and Author profile examples duplicate the real pages from zone 01 (Blog single, Authors archive, Author single). Keep ROI Calculator flow, remove the rest or move to an "archive" zone.
- [ ] **P3 Frame widths.** Examples use 1440 / 393. Keep as the reference size for the migration in 1.1.

## 3. Navigation (zone 03)

- [ ] **P2 Header C open states** use fixed heights taken from the mega menu (e.g. `t0REN` 484, `Xruff` 548). Replace with layout-driven height.
- [ ] **P2 Header A (legacy)**: `BtVuE` collapsed state looks incomplete (logo + two icons only). Confirm it is a real state or delete.
- [ ] **P2 Tokens.** Headers and footer still use raw hex and off-scale sizes (same list as 1.2–1.4).
- [ ] **P3 Mobile menu** widths: the mobile states report a child ~1064px wide inside a 385px frame (hidden off-canvas element). Clean up.

## 4. Sections (zone 04)

- [ ] **P2 Tokens.** Sections still use raw hex, off-scale radii and spacing. Same migration as 1.2–1.4.
- [ ] **P2 Light / Surface / Dark variants** are three separate frames per section. Convert to one component with a theme override.
- [ ] **P3 Section names.** Labels were derived from text content. Check names with the team (for example "Our Vision — stats", "Areas of Expertise").

## 5. Style guide (zone 05) and design.md

- [ ] **P2 Tag and badge heights.** design.md says Hug × 40 (tag) and × 32 (badge). With `[space-8, space-16]` and body-sm text they are 36 and 28. Decide: change padding or change the spec.
- [ ] **P2 Icons.** Masters use text glyphs (→ + − ✓) instead of the real icon font `DevoxIcon`. Replace.
- [ ] **P2 Missing states.** Button hover and pressed, input hover are described in text but not drawn. Add variants or a state table.
- [ ] **P2 Missing components.** Textarea, Select, Checkbox / radio, Breadcrumbs, Pagination, Carousel arrows, Table, Tooltip, Header and Footer as masters.
- [ ] **P3 Bold weight.** design.md says 700 Bold, the canvas font is `TTInterfacesDemiBold`. Confirm that the real Bold file exists, or rename the token to DemiBold.
- [ ] **P3 Card heights.** Card Row 1 and Card Row 2 have equal heights set on the row. Move this into the card masters (`height: fill_container` in a row layout).
- [ ] **P3 design.md structure.** Update §3.1 breakpoints once pages are resized, and add the page templates (home, service, archive, single, search) as a new section.
- [ ] **P3 Overview zone.** Zone 05 description says "right of Sections"; keep it in sync if zones move.

---

## 6. New items

_Add new findings here with date, location (node ID) and priority._

| Date | Node ID | Where | Problem | Priority |
|---|---|---|---|---|
| | | | | |

---

## Changelog of this file

| Date | Change |
|---|---|
| 2026-10-07 | File created from the open points after the first token-migration pass. |
