# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate next action for the Better Book Club project. Every collaborating AI should read it before starting new work.

## 2. Current Project Stage

**Current stage:** Stage A — public frontend implementation. The immersive homepage, About, Explore Books, For Authors, and For Readers pages are implemented on `task-003/immersive-homepage-redesign`; the founder has reviewed and approved these pages.

The Foundation Skeleton and project documentation remain on `main`. The active development branch is intentionally separate; no changes have been merged into `main`.

## 3. Immediate Next Action

1. Founder reviews the implemented Contact page and requests any refinements.
2. Cross-check every public page for visual consistency, responsive behaviour, accessibility, navigation, internal links, metadata, and accurate content.
3. Preserve the homepage discovery principle during catalogue integration: Featured Books should preview real approved catalogue entries, and Worth Discovering should encourage exploration.
4. After the cross-check, populate `data/books.json` with founder-approved books and create individual static book pages only when verified information and authorised cover assets are available.
5. After the catalogue and individual book pages, plan Stage B admin dashboard, database and backend with the founder; these remain future work.

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
