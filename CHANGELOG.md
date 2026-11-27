# Better Book Club — Changelog

## 2026-11-27 — About Page Implementation

### Added

- Replaced the About page placeholder with an editorial page covering BBC's purpose, why it exists, independent book discovery and selection, editorial values, and pathways for readers and authors.
- Added responsive page-specific styling while reusing the existing homepage design system, navigation, footer, typography and motion behaviour.

### Testing

- Checked page structure, navigation destinations, in-page anchor targets, responsive CSS breakpoints, reduced-motion support, and the existing reveal observer.
- Confirmed the page does not introduce a non-functional submission form or an unapproved contact address.
- Founder review and real-browser visual review of the About page are still pending.

### Next

Founder reviews the About page. After refinements and acceptance, implement Explore Books, then For Authors, For Readers and Contact, one page at a time.

---

This document records significant changes to the Better Book Club project.

It provides a history of project planning, documentation, design decisions, implementation, testing, and releases.

## 2026-11-27 — Task 001 Homepage Completion

### Added

- Completed the homepage section flow: Featured Books, Explore Books, Worth Discovering, Coming Soon, reader opportunities, author opportunities, About BBC, and a clearly inactive newsletter placeholder.
- Added responsive styling for the new homepage content and opportunity panels.

### Changed

- Updated the homepage hero headline to the founder-approved “Discover Stories Worth Your Time.”
- Changed the secondary hero action to “For authors” and linked it to the existing author page.
- Used “Worth Discovering” for the editorial noteworthy-books section; the section explicitly avoids implying a popularity ranking.
- Updated the decisions register, website specification, README, project status, and next-step instructions to reflect the approved decisions and actual repository state.

### Testing

- Reviewed homepage markup, internal page destinations, semantic section headings, and responsive CSS changes.
- Automated browser/device testing has not yet been performed; founder review and real-browser/mobile checks remain outstanding.

### Next

Founder reviews `task-001/homepage-completion`. Merge into `main` only after approval.

---

## Changelog Format

Each entry should include:

- Date.
- Development stage or version, where applicable.
- What was added, changed, fixed, or removed.
- Why the change was made, when useful.

Use these categories:

- **Added** — new documents, features, or functionality.
- **Changed** — modifications to existing work.
- **Fixed** — corrections to errors or problems.
- **Removed** — items intentionally removed.
- **Approved** — important decisions approved by the founder.

---

## 2026-11-27 — Foundation Skeleton and Documentation Corrections

### Approved

Founder-approved on 2026-11-27 (recorded in `DECISIONS.md`): frontend stack; keep repository structure; individual static book pages; main navigation; backend-free Foundation Skeleton as the first task. Firebase remains an option, not approved.

### Added

- `index.html` and placeholder pages `pages/explore.html`, `authors.html`, `readers.html`, `about.html`, `contact.html`.
- `.gitignore` (secrets, private submissions and manuscripts, dependencies, logs, OS and editor files).
- `assets/css/bbc.css` (brand colour variables, typography, layout) and `assets/js/main.js` (footer year, current-page link).
- Empty folders for `assets/images/logo`, `books`, `general`, and `pages/books` (with `.gitkeep`).
- Logo placeholder in the header. The original logo has not been added.

### Changed

- `AI_HANDOFF_PROMPT.md`: removed duplicated sections 10–11 and the duplicate copy of section 9.
- `BBC_MASTER_BLUEPRINT.md`: Firebase described as a candidate; navigation harmonised; MVP split into Stage A (frontend) and Stage B (operational).
- `DESIGN_SYSTEM.md`, `TECHNICAL_ARCHITECTURE.md`, `DECISIONS.md`, `README.md`, `PROJECT_STATUS.md`, `NEXT_STEP.md` updated to match.

### Testing

Checked with scripts: HTML structure, internal links, JavaScript syntax, contrast ratios, and page behaviour in a headless browser without Bootstrap. The founder reported testing navigation between pages in VS Code, and ChatGPT reviewed the ZIP. Not yet tested in real browsers or on a phone. Bootstrap loads from a CDN, which could not be tested offline.

### Next

Founder commits to GitHub, then supplies the logo.

---

## 2026-11-26 — Project Foundation Completed

### Added

Created the initial project documentation foundation:

- `README.md`
- `BBC_MASTER_BLUEPRINT.md`
- `BOOK_SELECTION_CRITERIA.md`
- `DESIGN_SYSTEM.md`
- `TECHNICAL_ARCHITECTURE.md`
- `DECISIONS.md`
- `AI_WORKFLOW.md`
- `PROJECT_STATUS.md`
- `NEXT_STEP.md`
- `CHANGELOG.md`
- `CONTENT_GUIDELINES.md`
- `AUTHOR_AND_READER_POLICIES.md`
- `TESTING_AND_DEPLOYMENT.md`

### Established

Documented the following project areas:

- BBC's vision and objectives.
- Independent book discovery and selection.
- Brand identity and design direction.
- Preferred frontend technology.
- Proposed technical architecture.
- Decision-making and approval process.
- ChatGPT, Claude, and founder responsibilities.
- AI-assisted development workflow.
- Editorial and content standards.
- Author and reader participation principles.
- Testing, security, and deployment expectations.

### Approved Direction

Established the GitHub repository as the shared project reference.

Defined the founder as the final decision-maker for project scope, major technical choices, editorial approval, and operational decisions.

### Changed

Updated the project documentation to reflect the completion of the initial documentation stage.

Improved the README, project status, and next-step instructions to prepare for repository inspection.

### Next

Proceed to repository inspection and technical assessment with Claude.

Website implementation should begin only after the initial inspection and review of its findings.

---

## Future Entries

Add new entries below whenever meaningful project changes occur.

Use this format:

### YYYY-MM-DD — Short Description

**Added**
- Describe what was added.

**Changed**
- Describe what was changed.

**Fixed**
- Describe what was corrected.

**Approved**
- Record any important founder-approved decision.

**Next**
- Identify the next relevant action.

---

## Changelog Rules

- Record actual changes, not planned work as completed.
- Keep entries in reverse chronological order, with the newest entry first.
- Do not invent dates or implementation results.
- Record major decisions and milestones.
- Keep the changelog consistent with `PROJECT_STATUS.md` and `DECISIONS.md`.
