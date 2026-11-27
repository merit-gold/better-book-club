# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate next action for the Better Book Club project. Every collaborating AI should read it before starting new work.

## 2. Current Project Stage

**Current stage:** Stage A — public frontend implementation. The immersive homepage and About page are implemented on `task-003/immersive-homepage-redesign`; the founder has approved the About page and reported that the homepage is responsive with working navigation. The Explore Books page has now been implemented on the same branch and the founder has reviewed it positively.

The Foundation Skeleton and project documentation remain on `main`. The active development branch is intentionally separate; no changes have been merged into `main`.

## 3. Immediate Next Action

1. Founder reviews the implemented For Authors page and requests any refinements.
2. Implement and review For Readers, then Contact, one page at a time.
3. Finish the remaining public page designs and complete a site-wide visual, responsive, accessibility and link review.
4. Preserve the homepage discovery principle: Featured Books should visibly preview real approved catalogue entries on the homepage, and Worth Discovering should encourage exploration. Revisit the homepage as part of catalogue integration.
5. Populate `data/books.json` with founder-approved books and create individual static book pages only after the public page designs are complete and authorised cover assets and verified information are available.
6. After the catalogue and individual book pages, plan and implement the Stage B admin dashboard, database and backend with the founder. These are not built yet and require technical, privacy and operational decisions.

## 4. Approved Scope Limits

Until the relevant Stage B work is approved, do not implement a database, backend, authentication, newsletter integration, functional submission forms or admin operations.

Author service participation may involve payment outside the website. The act of submitting a book through the future website form itself will not carry a submission charge. Specific services, scopes and prices remain to be defined and must not be invented or advertised as available.

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
