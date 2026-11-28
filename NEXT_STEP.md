# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate approved task and keeps all collaborators aligned with the current project state.

## 2. Current Project Stage

**Active phase: Stage B — Backend, database, and admin operations.**

The public-facing pages and starter catalogue have been reviewed and confirmed by the founder on `task-003/immersive-homepage-redesign`. The founder has confirmed that the catalogue is settled and that the next priority is making BBC operational through its backend.

The active branch remains `task-003/immersive-homepage-redesign`. Do not merge into `main` without the founder's explicit approval.

## 3. Immediate Next Action — Backend Specification and Architecture

Before implementation, complete the backend specification and recommend a suitable architecture against the approved requirements in `TECHNICAL_ARCHITECTURE.md`.

The specification must cover:

1. Database entities and relationships for books, authors/submissions, catalogue collections, newsletter campaigns, subscribers, admin users, and audit events.
2. Secure admin sign-in at a dedicated route such as `/admin`; no public admin sign-up.
3. Admin CRUD and editorial decisions: view, create, edit, approve, disapprove/reject, publish, unpublish, archive, and delete with confirmation/recovery safeguards.
4. Approval destination selection: one or more catalogue collections and optional newsletter inclusion in the same workflow.
5. Newsletter campaign management: draft, edit, save, preview, recipient/consent review, and deliberate send confirmation.
6. Public author submission workflow: free submission, pending review, validation, spam protection, and clear acknowledgement; no automatic public listing.
7. Public catalogue integration: only approved and published records appear in the selected public collections.
8. Security, access rules, privacy, backups, logging, error handling, and testing.
9. Provider comparison covering cost, limits, maintainability, security, and future growth.

Do not begin provider-specific implementation until the recommendation and provider choice have been presented to the founder and explicitly approved.

## 4. Founder-Approved Operational Rules

- There is no public administrator registration page. The initial admin account is securely provisioned during setup.
- Admin permissions are enforced by the backend, not by hiding frontend links.
- Administrators can edit, approve, disapprove/reject, and delete records.
- Approval includes selecting the catalogue collection(s) where the book should appear.
- The administrator can also select newsletter inclusion during the same approval workflow.
- Newsletter inclusion does not mean immediate sending. Newsletter content must remain editable and previewable before a separate, deliberate send action.
- A book has one canonical record even when it appears in multiple catalogue collections or newsletters.
- Book submission remains free. Any separate BBC author service is distinct; payment does not guarantee editorial selection, publication, a feature, reader matching, reviews, or sales.
- Only approved and published books appear publicly.
- Newsletter delivery must honour subscriber consent and unsubscribe requests.

## 5. Scope Boundaries and Open Decisions

Still requiring recommendation and/or founder approval:
- Backend and database provider.
- Hosting and deployment arrangement.
- Newsletter delivery provider.
- Admin authentication implementation and any additional admin roles.
- Exact author submission fields and file-upload rules.
- Subscriber data and consent wording, retention, and privacy policy.
- Email template design and sending limits/costs.
- Reader accounts or reader programme applications (not included unless separately approved).

Do not invent paid services, prices, active reader programmes, or public contact details.

## 6. Implementation Sequence After Architecture Approval

1. Backend foundation, environments, database schema, and secure configuration.
2. Admin authentication and protected dashboard shell.
3. Book/submission management and moderation actions.
4. Approval workflow with catalogue collection assignment and optional newsletter inclusion.
5. Public author submission form connected to pending submissions.
6. Public catalogue integration using approved and published database records.
7. Newsletter draft editor, preview, subscriber management, and send workflow.
8. Security, functional, accessibility, responsive, and end-to-end testing.
9. Deployment readiness and founder review.

Work in focused milestones. Do not build everything in one unreviewed change.

## 7. Workflow

1. Read `DECISIONS.md`, `TECHNICAL_ARCHITECTURE.md`, and this file.
2. Inspect the actual repository and current branch before implementation.
3. Present the architecture/provider recommendation and data-flow plan.
4. Obtain founder approval for provider, costs, and any consequential account setup.
5. Implement one milestone at a time on the agreed branch.
6. Test and report changed files, evidence, limitations, and outstanding decisions.
7. Update `PROJECT_STATUS.md`, this file, and `CHANGELOG.md`; update `DECISIONS.md` when a new decision is approved.
8. Founder reviews and approves before any merge to `main`.

Only one AI edits project files at a time.

## 8. Guiding Principle

Build the operational system BBC actually needs: secure, manageable by its founder, editorially controlled, and safe for authors and subscribers. The repository must always reflect confirmed decisions and actual implementation status.
