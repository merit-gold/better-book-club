# Better Book Club (BBC)

**An independent literary discovery and reader community platform.**

Better Book Club (BBC) is a literary platform designed to help readers discover worthwhile books through thoughtful curation, editorial recommendations, and a welcoming reading community.

BBC also aims to create meaningful opportunities for authors to introduce their work and connect with readers.

This repository contains the project's vision, planning documents, design direction, technical architecture, editorial standards, policies, and AI collaboration workflow.

---

## 1. Project Vision

BBC aims to become a distinctive literary destination where readers can discover interesting books and authors can receive thoughtful attention for their work.

The platform will combine:

- Independent book discovery and selection.
- Carefully curated book recommendations.
- Featured books and editorial introductions.
- Book information and external reading links.
- Author information and participation opportunities.
- Reader information and community opportunities.
- A growing archive of previously featured books.

BBC will maintain editorial independence and prioritise accurate information, transparency, and reader trust.

## 2. Brand and Design Direction

The website should feel:

- Premium and literary.
- Elegant and welcoming.
- Modern and distinctive.
- Trustworthy and easy to navigate.
- Fully responsive across desktop, tablet, and mobile.

The existing BBC logo must be preserved.

The current working colour palette is:

| Colour | Hex |
|---|---|
| Burgundy | `#8B1E3F` |
| Forest Green | `#174B40` |
| Warm Ivory | `#FFF8EF` |
| Soft Rose | `#F1DCE2` |
| Copper | `#C58A52` |
| Charcoal | `#292326` |

See `DESIGN_SYSTEM.md` for the design direction.

## 3. Proposed Technology

The approved frontend stack is:

- HTML5
- Bootstrap 5
- Vanilla JavaScript
- Custom CSS

A suitable backend, database, hosting provider, and integrations will be selected after technical review.

Firebase is a candidate, not a confirmed final decision.

See `TECHNICAL_ARCHITECTURE.md` and `DECISIONS.md`.

## 4. Repository Documentation

The following documents define the project and guide its development.

### Project Foundation

| File | Purpose |
|---|---|
| `BBC_MASTER_BLUEPRINT.md` | Overall project vision, objectives, features, and direction. |
| `BOOK_SELECTION_CRITERIA.md` | Standards for discovering and evaluating books. |
| `DECISIONS.md` | Approved decisions, proposals, and unresolved matters. |
| `WEBSITE_SPECIFICATION.md` | Detailed website page structures, homepage requirements, and feature boundaries. |

### Design and Technology

| File | Purpose |
|---|---|
| `DESIGN_SYSTEM.md` | Brand identity, colours, typography, and visual guidelines. |
| `TECHNICAL_ARCHITECTURE.md` | Proposed technology, website structure, backend, and technical requirements. |

### AI Collaboration and Project Management

| File | Purpose |
|---|---|
| `AI_WORKFLOW.md` | How the founder, ChatGPT, and Claude collaborate. |
| `PROJECT_STATUS.md` | Current project progress and outstanding work. |
| `NEXT_STEP.md` | The immediate next action for the project. |
| `CHANGELOG.md` | Record of significant project changes. |

### Content and Operations

| File | Purpose |
|---|---|
| `CONTENT_GUIDELINES.md` | Editorial, research, book descriptions, and content standards. |
| `AUTHOR_AND_READER_POLICIES.md` | Principles governing author and reader participation. |
| `TESTING_AND_DEPLOYMENT.md` | Testing, security, deployment, and launch requirements. |

## 5. How BBC Selects Books

BBC intends to discover books independently rather than relying exclusively on author submissions.

Potential discovery sources include:

- Amazon.
- Goodreads.
- Publisher catalogues.
- Author websites.
- Other relevant public literary sources.

Book candidates will be researched, evaluated against the selection criteria, and checked for reliable information.

The founder retains final approval over official BBC book features.

## 6. AI Collaboration

BBC uses a structured AI-assisted workflow.

**Founder**
- Owns the project.
- Makes final decisions.
- Approves major changes and book selections.

**ChatGPT**
- Coordinates planning and research.
- Prepares tasks and acceptance criteria.
- Reviews Claude's implementation and reports.
- Helps maintain project documentation.

**Claude**
- Inspects the repository.
- Leads UI/UX design and implementation.
- Writes and organises code.
- Tests completed features and reports results.

The GitHub repository serves as the shared project reference.

See `AI_WORKFLOW.md` for the complete process.

## 7. Current Project Status

**Current phase:** Stage B — Backend, Database and Admin Operations.

The public pages and starter catalogue have been confirmed by the founder on `task-003/immersive-homepage-redesign`. The next task is to specify and evaluate the backend architecture for secure admin access, book submissions and moderation, catalogue placement, and editable/previewable newsletters.

The founder has approved the operational workflow requirements, but the backend/database provider, hosting arrangement, and newsletter delivery provider remain undecided. Firebase is a candidate, not a confirmed choice. Backend implementation has not yet started. `main` remains untouched pending explicit founder approval.

See `PROJECT_STATUS.md`, `NEXT_STEP.md`, `DECISIONS.md`, and `TECHNICAL_ARCHITECTURE.md`.

## 8. Important Principles

- Accuracy and verification come before publishing.
- Editorial independence must be protected.
- Never invent book information, ratings, rankings, or popularity claims.
- Respect copyright and image permissions.
- Do not promise guaranteed sales, reviews, rankings, or readers.
- Protect private author and reader information.
- Never commit passwords, API keys, tokens, or other secrets to this repository.
- The founder has final authority over important project decisions.

## 9. Development Approach

BBC will be developed in manageable stages:

1. Establish the project foundation.
2. Review the technical architecture.
3. Inspect the repository and prepare the implementation plan.
4. Build the website in focused stages.
5. Test and review each significant feature.
6. Prepare the platform for launch.
7. Continue improving the platform after launch.

## 10. Repository

**GitHub:** https://github.com/merit-gold/better-book-club

All collaborators should consult the documentation before undertaking significant project work.

---

**Better Book Club — Discover stories. Find your next favourite.**
