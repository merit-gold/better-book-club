# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate next action for the Better Book Club project. Every collaborating AI should read it before starting new work.

## 2. Current Project Stage

**Current stage:** Phase 3 — Foundation Skeleton (backend-free), reviewed by ChatGPT, awaiting founder commit to GitHub.

Phases 1 (documentation) and 2 (repository inspection) are complete.

## 3. Immediate Next Action

1. ChatGPT has reviewed the Foundation Skeleton; the founder has checked page navigation locally in VS Code.
2. The founder commits the changes to GitHub (including the new `.gitignore`).
3. The founder supplies the original BBC logo. Place it in `assets/images/logo/` and replace the placeholder in the header (see the comment in each page's header). Do not redraw or recolour it.
4. Test in real browsers and on a phone; the skeleton has only been checked with scripts so far.

## 4. Approved Scope Limits (unchanged)

Until the founder approves otherwise, do not add:

- A database, backend, or authentication.
- Newsletter integration.
- Paid services.
- Functional submission forms.

Firebase remains an option, not an approved backend.

## 5. Likely Following Task (to be agreed, not yet approved)

Book catalogue data (`data/books.json`, approved books only) and individual static book pages with their own titles, descriptions, and social-sharing metadata.

## 6. Workflow

1. ChatGPT prepares a focused task with acceptance criteria.
2. The founder gives it to Claude.
3. Claude implements, tests, and reports files changed, tests, and remaining issues.
4. ChatGPT reviews; the founder approves and commits to GitHub.
5. Documentation is updated.

Only one AI edits project files at a time. Do not begin several unrelated tasks at once.

## 7. Documentation Maintenance

Update `PROJECT_STATUS.md`, this file, and `CHANGELOG.md` after meaningful work, and `DECISIONS.md` when the founder approves a decision.

## 8. Guiding Principle

The next step must always reflect the actual state of the project. The founder has final authority over project direction and approvals.
