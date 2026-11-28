# Better Book Club — Project Status

## 1. Purpose

This document records the actual development status of Better Book Club (BBC).

It helps the founder and collaborating AIs understand what has been completed, what remains outstanding, and what should happen next.

All progress reports must reflect actual work and verified evidence.

## Current Status Correction — 2026-11-28

**This update supersedes older roadmap/status statements below wherever they say the backend is deferred or the catalogue/public pages are awaiting approval.**

- Public website pages and the starter catalogue have now been confirmed by the founder.
- The active phase is **Stage B — backend, database, admin dashboard, and operational workflows**.
- The active branch is `task-003/immersive-homepage-redesign`; `main` remains untouched pending explicit founder approval.
- The founder has approved the functional admin and newsletter requirements recorded in `DECISIONS.md`, `TECHNICAL_ARCHITECTURE.md`, and `WEBSITE_SPECIFICATION.md`.
- No backend provider, database, hosting provider, or newsletter delivery provider has yet been selected. Firebase remains a candidate, not an approved choice.
- Backend implementation has not yet started. The immediate task is architecture/provider evaluation and a concrete data-flow plan, followed by founder approval before provider-specific implementation.


## 2. Project Overview

**Project:** Better Book Club (BBC)

**Purpose:** An independent literary discovery and reader community platform.

**Project owner:** Founder of Better Book Club.

**Repository:** https://github.com/merit-gold/better-book-club

**Default branch:** `main`

## 3. Current Development Phase

**Stage B — Backend, database, and admin operations (active phase; architecture selection pending)**

Status: The public pages have been implemented on `task-003/immersive-homepage-redesign`; the founder has completed a site-wide review and is satisfied. The About page founder introduction and purpose refinement has been reviewed and accepted by the founder. The working branch has not been merged into `main`.

- Phase 1 (project foundation and documentation): Completed.
- Phase 2 (repository inspection and technical assessment): Completed. The report was reviewed with ChatGPT and the founder agreed the decisions recorded in `DECISIONS.md` on 2026-11-27.
- Phase 3 (Foundation Skeleton): Committed to GitHub on `main` and reviewed. Real-browser and physical-device testing remain outstanding.
- Stage A homepage: Immersive editorial redesign implemented on `task-003/immersive-homepage-redesign`; founder reports responsive layout and working page links.
- Stage A About page: Existing design retained; the former generic “Why we exist” section has been replaced with a combined founder introduction and clearer explanation of BBC's purpose. The founder is identified as Aliyah Merit-gold, founder and Literary Growth Partner, with more than nine years' experience as supplied by the founder. Awaiting founder visual review of this refinement.
- Stage A Explore Books page: Implemented with five editorial collections and a live cover-led catalogue of 10 researched books, including first-publication dates, Goodreads references and linked cover-source credits. Cover art is shown alongside the matching book details, with source links for attribution and edition reference.
- For Authors has been implemented and refined after founder feedback; its final review is pending. For Readers has now been implemented on `task-003/immersive-homepage-redesign` and is awaiting founder review. Contact remains a placeholder. The founder has clarified that the homepage must act as a discovery gateway, with Featured Books visibly previewing real approved catalogue entries and Worth Discovering encouraging click-through exploration. The founder has also confirmed the delivery order: finish public page designs, populate the approved book catalogue and individual book pages, then build the admin dashboard, database and backend. Ten starter titles now appear as cover-led cards in Explore Books, with linked cover-source references. The homepage Featured Books section also reads the same approved catalogue and previews the first five covers. Author service payments, where applicable, are handled outside the website; submitting a book through the future website form itself carries no submission charge, and every submission must await admin approval before public listing.
## 4. Documentation Progress

The planned documentation set is present, including `WEBSITE_SPECIFICATION.md`:

| Document | Status |
|---|---|
| README.md | Completed |
| BBC_MASTER_BLUEPRINT.md | Created |
| BOOK_SELECTION_CRITERIA.md | Created |
| DESIGN_SYSTEM.md | Created |
| TECHNICAL_ARCHITECTURE.md | Created |
| DECISIONS.md | Created |
| AI_WORKFLOW.md | Created |
| PROJECT_STATUS.md | Updated |
| NEXT_STEP.md | Updated |
| CHANGELOG.md | Updated |
| CONTENT_GUIDELINES.md | Created |
| AUTHOR_AND_READER_POLICIES.md | Created |
| TESTING_AND_DEPLOYMENT.md | Created |
| WEBSITE_SPECIFICATION.md | Created and updated to reflect approved homepage decisions |

The documentation foundation is complete. A consistency review can continue alongside the technical assessment.

## 5. Completed Planning Work

The project documentation establishes:

- BBC's vision and purpose.
- Target audience and platform direction.
- Book discovery and selection criteria.
- Editorial independence and verification principles.
- Website sitemap and proposed sections.
- Individual book page requirements.
- Brand identity and working colour palette.
- Preferred frontend technology direction.
- Proposed technical architecture.
- Project decision-making rules.
- ChatGPT, Claude, and founder responsibilities.
- AI collaboration workflow.
- Content and editorial guidelines.
- Author and reader participation principles.
- Testing, security, and deployment expectations.

## 6. Website Implementation Status

**Status: Public page designs implemented on `task-003/immersive-homepage-redesign`; Homepage, About, Explore Books, For Authors, and For Readers have been reviewed positively by the founder. Contact is implemented and awaiting review. `main` remains untouched.**

| Area | Status |
|---|---|
| Homepage structure, header, navigation, footer | Immersive redesign on `task-003/immersive-homepage-redesign`; founder reports responsive and working navigation |
| Responsive layout | Founder reports the homepage is responsive and navigation works; formal real-browser and physical-device testing remains outstanding |
| Brand colour variables and typography | Implemented on the working branch using the repository's current working palette; the Ghost-site colours recorded in the PDF have not been substituted |
| About page | Implemented and founder-approved on `task-003/immersive-homepage-redesign` |
| Explore Books page | Implemented and founder-reviewed positively on the working branch |
| For Authors page | Implemented; founder confirms it is working |\n| For Readers page | Implemented and founder-approved |\n| Contact page | Implemented with enquiry pathways and a transparent unavailable-contact notice; awaiting founder review |
| Original BBC logo | Blocked: asset not yet supplied (placeholder in place) |
| Book catalogue | `data/books.json` created with no approved entries yet; individual static book pages not started |
| Functional forms, newsletter, admin, backend, database | Not started; need founder approvals (Stage B) |
| Hosting and deployment | Not started |

## 7. Current Technical Decisions

The approved frontend stack (2026-11-27) is:

- HTML5.
- Bootstrap 5.
- Vanilla JavaScript.
- Custom CSS.

The final backend, database, hosting provider, domain, newsletter provider, and form-processing approach have not yet been approved.

Firebase remains a candidate for evaluation, not a final decision.

Refer to `DECISIONS.md` before treating a technical proposal as approved.

## 8. Outstanding Work

### Immediate priorities

1. Founder reviews the updated About page content and requests any refinements.
2. Begin the one-time research exercise for approximately 50 independent-book candidates using the founder's criteria; preserve candidate research separately from the public catalogue.
3. Present the researched pool with sources, ratings/counts, genre, cover-source and permission status, and editorial rationale for founder review.
4. Select 10 founder-approved books for the initial manual website catalogue and individual book pages; keep the remaining candidates available for future admin-page entry.
5. Prepare a pull request from the development branch into `main` for founder review; merge only with explicit approval.
6. Founder supplies the original BBC logo file when available; the current text mark is a placeholder and is not the original logo.

### Technical and operational decisions

The following still require review or founder approval:

- Final backend and database.
- Hosting provider and deployment method.
- Domain configuration.
- Newsletter provider.
- Form handling and email notifications.
- Final catalogue structure.
- Author submission requirements.
- Reader programme requirements.
- Privacy and data retention arrangements.
- Copyright and asset permissions procedures.
- Any paid services or pricing.

## 9. AI Collaboration Status

The intended workflow is established.

| Role | Responsibility |
|---|---|
| Founder | Project owner and final decision-maker |
| ChatGPT | Planning, research, task preparation, and review; directly implemented Task 001 at the founder’s request |
| Claude | Repository inspection, UI/UX, implementation, and testing |

Only one AI should actively edit project files at a time.

See `AI_WORKFLOW.md` for the complete workflow.

## 10. Next Development Stage

See `NEXT_STEP.md`. The active task is backend architecture and provider selection. Supabase backend + Firebase Hosting frontend is the current recommendation, not an approved provider decision. Admin-created posts (create/edit/draft/publish/unpublish/delete without external submission approval) are now an approved requirement. No provider-specific backend implementation has started.

## 11. Progress Reporting Rules

Whenever meaningful work is completed:

- Update `PROJECT_STATUS.md`.
- Update `NEXT_STEP.md`.
- Record significant changes in `CHANGELOG.md`.
- Update `DECISIONS.md` when a decision receives founder approval.

Use accurate status descriptions:

- Not started.
- In progress.
- Awaiting review.
- Blocked.
- Completed.
- Deferred.

Do not mark work completed without appropriate evidence or founder confirmation.

## 12. Guiding Principle

The repository must always reflect the real state of Better Book Club.

Every collaborating AI should be able to understand the project's progress and continue from the correct point without repeating completed work.

The founder remains the final authority on project direction, approvals, and scope.


## 2026-11-28 — Starter Public Catalogue

- Added 10 researched book records to `data/books.json` on `task-003/immersive-homepage-redesign`.
- Each record includes title, author, first-publication date, genre, Goodreads reference, and an author website where verified; series context is shown where relevant.
- The public catalogue is text-and-link only. No cover artwork is copied or hosted by BBC.
- Updated `assets/js/explore.js` and `assets/css/bbc.css` to render source-linked text cards without requiring cover files or individual BBC book pages.
- The 10 entries currently sit in Featured Books. Several are later books/novellas within a wider series; this is disclosed in the catalogue metadata rather than hidden.
- Source-level implementation only; no browser visual QA has been performed by ChatGPT. `main` remains untouched.
