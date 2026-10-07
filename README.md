# Devox Design

Design files and documentation for the Devox Software website (devoxsoftware.com): pages, sections, navigation and the design system.

## File structure

```
devox design/
├── devox.pen                      Main design file (open in Pencil / pen.dev)
├── design.md                      Design system rules: tokens, components, layout, anti-patterns
├── fixes.md                       Backlog of open fixes and known inaccuracies
├── README.md                      This file
├── fonts/
│   └── devoxsoftware.com/         Web fonts captured from the site (6 files: .woff / .woff2)
├── images/
│   └── devoxsoftware.com/         Images captured from the site (195 .webp files)
├── embedded-image.png             Image captured with the pages
├── swiper-icons-400-0.woff        Swiper carousel icon font (captured from the site)
└── swiper-icons-400-5.woff
```

## Main files

| File | What it is |
|---|---|
| `devox.pen` | The design canvas. Open it only through Pencil; the file is encrypted and can't be read as text. |
| `design.md` | Source of truth for the design system: colour, type, spacing and radius tokens, component blueprints, section layout, rules of what not to do. |
| `fixes.md` | Working list of what is still wrong in the design, grouped by zone and priority. |
| `fonts/`, `images/` | Assets that the captured pages reference. Not designed assets: they are copies from the live site. |

## Zones on the canvas (`devox.pen`)

Zones are laid out left to right.

| Zone | Contents |
|---|---|
| 00 Overview | Map of the canvas. |
| 01 Site Pages | Real site pages, each in Desktop, Tablet and Mobile: Home, Service, Portfolio (archive and single), About Us, Careers (archive and single), Blog (archive and single), Authors (archive and single), Search. |
| 02 Page Examples | Layout examples built from the blocks below (blog article, authors, author profile, ROI calculator flow). |
| 03 Navigation | Header generations A, B and C with all open states on desktop and mobile, plus the footer. |
| 04 Sections | Reusable page sections grouped by purpose, mostly in Light, Surface and Dark variants. |
| 05 Design System / Style Guide | Colour palette, typography, spacing, radii, borders and reusable components. Tokens are canvas variables (`color-*`, `space-*`, `radius-*`, `font-*`). |

## How the files work together

1. Rules and token values live in `design.md`.
2. The same tokens exist as variables and components in the Style Guide frame (zone 05) in `devox.pen`.
3. Pages, sections and navigation (zones 01–04) are being migrated to those tokens. What is left is tracked in `fixes.md`.

## Skills to use later

Agent skills planned for this project. They are not installed yet: add them when the matching work starts, and check each skill's page for the install command.

| Purpose | Skill | Use it for |
|---|---|---|
| **Correct design** | [frontend-design](https://www.skills.sh/anthropics/skills/frontend-design) | Reviewing and building page and component design against good frontend design practice. |
| | [web-design-guidelines](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines) | Checking pages and components against web design guidelines. |
| **Accessibility (WCAG AA)** | [wcag-audit-patterns](https://www.skills.sh/wshobson/agents/wcag-audit-patterns) | AA audit: contrast, touch targets (40×40), focus states, text sizes. Complements §2.6 of `design.md`. |
| **Marketing best practices** | [landing-page-conversion-audit](https://www.skills.sh/autonnel/autonnel-skills/landing-page-conversion-audit) | Conversion audit of landing pages: hero, CTAs, trust blocks, forms. |
| | [page-cro](https://www.skills.sh/coreyhaines31/marketingskills/page-cro) | Page-level conversion optimisation for the Home, Service and Portfolio pages. |

Suggested order: design skills while migrating pages to tokens (see `fixes.md`), the WCAG skill before handoff, the marketing skills when the page content is final. Record any findings in `fixes.md`.

## Working notes

- Edit `devox.pen` only with Pencil. If the file on disk is older than your last canvas changes, save it in Pencil (Ctrl+S) before committing.
- New findings go into `fixes.md` (table "New items") with the node ID.
- Any new value (colour, size, spacing) is added to `design.md` first and then used in the design.
- The `fonts/` and `images/` folders are large (about 13 MB). Check before adding more captures.
