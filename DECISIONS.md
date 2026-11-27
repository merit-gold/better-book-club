# Better Book Club — Decisions Register

## 1. Purpose

This document records important decisions about the Better Book Club (BBC) project.

It helps ChatGPT, Claude, the founder, and any future collaborator work from the same agreed information.

A proposal is not an approved decision. Do not treat an undecided item as final merely because it appears in a planning document.

## 2. Decision Status

Use these labels when recording decisions:

- **Approved** — the founder has explicitly agreed.
- **Proposed** — a recommendation is awaiting approval.
- **Under review** — options are being evaluated.
- **Deferred** — intentionally postponed.
- **Rejected** — considered and not selected.

When a decision changes, update this register and add an entry to `CHANGELOG.md`.

## 3. Approved Project Direction

| Area | Current position | Status |
|---|---|---|
| Project name | Better Book Club (BBC) | Approved |
| Project purpose | An independent literary discovery and reader community platform | Approved |
| Editorial approach | BBC independently discovers and evaluates books; author submissions are not the only discovery source | Approved |
| Final book selection | The founder makes the final approval decision | Approved |
| AI research support | ChatGPT researches and prepares shortlists; Claude independently cross-checks and supports implementation/content organisation | Approved |
| Source of project documentation | The GitHub repository is the shared project reference | Approved |
| Existing logo | Preserve the existing BBC logo; do not redesign it without approval | Approved |
| Frontend stack | HTML5, Bootstrap 5, Vanilla JavaScript, and custom CSS | Approved (2026-11-27) |
| Repository structure | Keep the existing structure; documentation stays at the repository root (no `docs/` folder) | Approved (2026-11-27) |
| Book pages | Individual static pages, each with its own title, description, and social-sharing metadata | Approved (2026-11-27) |
| Main navigation | Home, Explore Books, For Authors, For Readers, About, Contact; Newsletter on the homepage and footer | Approved (2026-11-27) |
| First implementation task | Backend-free Foundation Skeleton (no database, backend, authentication, newsletter integration, paid services, or functional forms) | Approved (2026-11-27) |
| Visual direction | Premium, literary, welcoming, distinctive, and responsive | Approved direction |
| Homepage hero headline | “Discover Stories Worth Your Time.” | Approved (2026-11-27) |
| Homepage editorial section name | “Worth Discovering” for noteworthy book selections, without implying a popularity ranking | Approved (2026-11-27) |\n| Homepage purpose and book-preview principle | Homepage acts as a discovery gateway; Featured Books visibly previews actual approved catalogue entries, while Worth Discovering creates an editorial reason to explore | Approved (2026-11-27) |\n| Development sequence | Complete and review all public page designs first; then conduct a site-wide review; add approved books, individual book pages and connected book previews afterwards | Approved (2026-11-27) |

## 4. Proposed Brand Palette

The following values are the working palette documented in `DESIGN_SYSTEM.md`. Major changes require founder approval.

| Colour | Hex |
|---|---|
| Burgundy | #8B1E3F |
| Forest Green | #174B40 |
| Warm Ivory | #FFF8EF |
| Soft Rose | #F1DCE2 |
| Copper | #C58A52 |
| Charcoal | #292326 |

## 5. Decisions Still to Be Made

The following items must remain open until the founder explicitly approves a direction.

| Topic | Current status | What must be decided |
|---|---|---|
| Backend provider | Under review | Firebase remains an option, not approved. Whether to use it or another suitable service |
| Database structure | Proposed | Final data model and storage approach |
| Hosting and deployment | Under review | Where the public site and any backend will run |
| Domain name | Open | Final domain and registration |
| Newsletter provider | Open | Provider, costs, and consent workflow |
| Form handling | Open | Secure provider or backend implementation |
| Admin roles | Open | Whether there will be one administrator or multiple roles |
| Author services and pricing | Open | Which services may exist and their terms |
| Paid promotional options | Open | Whether any paid opportunities will be offered and how editorial independence will be protected |
| Reader programmes | Open | Eligibility, application process, privacy, and operating rules |
| Launch catalogue size | Open | Number of books to include at launch |
| Homepage supporting copy | Proposed | Founder approval of any future replacement hero supporting text |
| Analytics | Deferred | Whether analytics are needed and which privacy approach to use |

## 6. Editorial and Trust Rules

These principles guide project decisions:

- Do not invent book details, ratings, review counts, rankings, sales, or reader engagement.
- Record sources and the date information was checked.
- Distinguish verified facts from editorial opinions.
- Do not imply partnerships or endorsements that do not exist.
- Public availability of a book cover, description, or excerpt does not automatically grant reuse permission.
- Use authorised assets and real, verifiable excerpts only when there is an appropriate basis to reproduce them.
- Do not promise authors sales, reviews, ratings, rankings, readers, or guaranteed exposure.
- Payment must not determine editorial selection or the honesty of recommendations.

## 7. How to Add a Decision

When a new project decision is made, record:

1. Date.
2. Topic.
3. Decision and its status.
4. Reason for the decision.
5. Any consequences for design, content, technology, budget, or workflow.

Example:

| Date | Topic | Decision | Status | Reason |
|---|---|---|---|---|
| YYYY-MM-DD | Example topic | Record the agreed decision here | Approved | Brief explanation |

Replace the example with a real decision; do not leave fictional decisions in the register.

## 8. Decision-Making Authority

- The founder makes final project decisions.
- ChatGPT may analyse options, identify risks, and recommend a direction.
- Claude may inspect technical requirements and recommend implementation choices.
- Neither AI should silently turn a proposal into an approved decision.
- Any decision involving spending, accounts, credentials, privacy, legal commitments, or major scope changes requires the founder's explicit approval.

## 9. Keeping This Register Accurate

- Update this file when a meaningful decision is approved or changed.
- Keep unresolved topics visibly open.
- Record significant changes in `CHANGELOG.md`.
- Ensure `PROJECT_STATUS.md` and `NEXT_STEP.md` reflect the latest approved direction.
- If another project document conflicts with this register, flag the conflict rather than guessing which instruction should win.

## 10. Guiding Principle

The repository should make it easy to tell what BBC has decided, what it is considering, and what still requires the founder's approval.
