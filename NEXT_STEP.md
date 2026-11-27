# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate next action for the Better Book Club project. Every collaborating AI should read it before starting new work.

## 2. Current Project Stage

**Current stage:** Stage A — public frontend implementation. The immersive homepage and About page are implemented on `task-003/immersive-homepage-redesign`; the founder has approved the About page and reported that the homepage is responsive with working navigation. The Explore Books page has now been implemented on the same branch and the founder has reviewed it positively.

The Foundation Skeleton and project documentation remain on `main`. The active development branch is intentionally separate; no changes have been merged into `main`.

## 3. Immediate Next Action

1. Implement the For Authors page using the founder-provided strategy record and approved BBC policies; keep website submissions unavailable until the relevant Stage B arrangements are approved.
2. Founder reviews the For Authors page before moving to For Readers.
3. Implement and review For Readers, then Contact, one page at a time.
4. Preserve the homepage discovery principle: Featured Books should visibly preview real approved catalogue entries on the homepage, and Worth Discovering should encourage exploration. Revisit the homepage when the catalogue is ready.
4. Populate `data/books.json` and create individual static book pages only after books and authorised cover assets are approved.
5. After all public pages are implemented, complete a site-wide review and prepare a pull request for founder review. Do not merge into `main` without explicit founder approval.

## 4. Approved Scope Limits (unchanged)

Until the founder approves otherwise, do not add:

- A database, backend, or authentication.
- Newsletter integration.
- Paid services.
- Functional submission forms.

Firebase remains an option, not an approved backend.

## 5. Likely Following Task (to be agreed, not yet approved)

After the public page designs and site-wide review are complete, implement the Stage A book catalogue (`data/books.json`, approved books only) and individual static book pages with their own titles, descriptions, and social-sharing metadata. Book content must not be added ahead of the page-design phase.

## 6. Workflow

1. The founder approves a focused task and its acceptance criteria.
2. The assigned AI implements on the agreed working branch; for Task 001, the founder specifically authorised ChatGPT to implement directly.
3. The implementing AI reports files changed, checks performed, and remaining issues.
4. The founder reviews and approves before the branch is merged into `main`.
5. Documentation is updated to reflect verified progress.

Only one AI edits project files at a time. Do not begin several unrelated tasks at once.

## 7. Documentation Maintenance

Update `PROJECT_STATUS.md`, this file, and `CHANGELOG.md` after meaningful work, and `DECISIONS.md` when the founder approves a decision.

## 8. Guiding Principle

The next step must always reflect the actual state of the project. The founder has final authority over project direction and approvals.
