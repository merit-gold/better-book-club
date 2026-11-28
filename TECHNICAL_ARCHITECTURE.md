# Better Book Club — Technical Architecture

## 1. Purpose

This document defines the proposed technical direction and structure for the Better Book Club (BBC) website. The goal is to build a reliable, responsive, maintainable platform that can grow as BBC develops.

Technical choices should support the project's real requirements without introducing unnecessary complexity.

## 2. Preferred Starting Stack

The approved frontend stack (founder-approved 2026-11-27) is:

- HTML5 for page structure.
- Bootstrap 5 for responsive layout and components.
- Vanilla JavaScript for frontend interactions.
- Custom CSS for BBC's visual identity.

A backend may be needed for administrator authentication, database storage, submissions, and newsletter functionality.

Firebase is a candidate, not an approved final decision. The implementation team should assess the requirements, costs, security, and maintenance implications before recommending a backend.

Do not introduce a large framework or paid dependency without explaining its purpose and obtaining approval where appropriate.

## 2a. Development Stages

- **Stage A — public frontend and confirmed starter catalogue.** Implemented on the active development branch and reviewed by the founder.
- **Stage B — operational backend and admin system.** Now the active development phase. The founder has approved the workflow requirements recorded below. Backend/database/provider selection remains subject to technical assessment and explicit approval before adoption.

See `BBC_MASTER_BLUEPRINT.md` section 14.

## 3. Main Website Areas

### Public website

- Homepage.
- Book discovery and catalogue.
- Individual book pages.
- Author information and book submission.
- Reader opportunities and information.
- About and contact pages.
- Newsletter subscription.

### Private administration

- Secure administrator login.
- Book and category management.
- Featured, upcoming, and archived book management.
- Submission management.
- Basic content management.

The administration area must not appear in public navigation. Hiding a link is not sufficient security; access must be enforced by the backend or hosting architecture.

## 4. Proposed Repository Structure

This is an initial proposal. Inspect the actual repository before creating or moving files, and adapt the structure to what already exists.

```text
better-book-club/
├── index.html
├── pages/
│   ├── explore.html
│   ├── about.html
│   ├── authors.html
│   ├── readers.html
│   ├── contact.html
│   └── books/            (one static page per approved book)
├── assets/
│   ├── css/bbc.css
│   ├── js/main.js
│   └── images/
│       ├── logo/         (original BBC logo, supplied by the founder)
│       ├── books/
│       └── general/
├── data/
│   └── books.json        (approved books only)
└── *.md                  (project documentation stays at the repository root)
```

The documentation files stay at the repository root. They are not moved into a `docs/` folder.

The `admin/` area is not part of the public static site. It is added only after a backend is approved.

Navigation: Home, Explore Books, For Authors, For Readers, About, Contact. Newsletter appears on the homepage and in the footer.

Do not create every proposed file or folder immediately. Add only what the current implementation task requires.

## 5. Book Data

Book information should be stored consistently rather than duplicated manually across pages.

A book record may include:

- Unique ID.
- Title and author.
- Genre.
- Cover image path or authorised image URL.
- Short description.
- Original BBC editorial introduction.
- Publication details, where verified.
- Feature date.
- External book links.
- Research sources and date last checked.
- Workflow status.

Each approved book gets its own static page under `pages/books/` with its own title, description, and social-sharing metadata. `data/books.json` holds approved books only; candidate lists and research notes are kept outside the public repository.

The workflow should distinguish candidates, shortlisted books, approved books, upcoming features, current features, and past features.

A book must not appear as an official BBC feature until the founder approves it.

## 6. Backend and Database Requirements

If a backend is introduced, evaluate it against these needs:

- Secure administrator authentication.
- Role and permission enforcement.
- Book catalogue storage.
- Author submissions.
- Reader applications.
- Contact enquiries.
- Newsletter integration.
- Data export and backup options.
- Cost and free-tier limitations.
- Ease of maintenance and future growth.

Firebase may be evaluated, but the final provider must be approved before implementation.

## 7. Forms and Data Handling

Potential forms include book submissions, author enquiries, reader applications, contact enquiries, and newsletter subscriptions.

Every form must have:

- Clear labels and appropriate validation.
- Useful success and error messages.
- Secure submission handling.
- Spam and abuse protection appropriate to the form.
- Consent language where needed.
- A clear purpose for every requested field.

Do not collect unnecessary personal information. Do not store private submissions, personal data, or unpublished manuscripts in the public GitHub repository.

## 8. Security

- Protect administrator access with proper authentication.
- Enforce permissions on the server or backend.
- Never place private credentials or secret API keys in frontend code.
- Do not rely on hiding admin pages or buttons as a security measure.
- Restrict access to private submissions and reader information.
- Use secure configuration and deployment practices.
- Keep secrets outside the repository, using the hosting provider's environment or secret settings.

## 9. External Integrations

Possible integrations include:

- Amazon and Goodreads book links.
- A newsletter provider.
- A form-handling or email notification service.
- Analytics, if approved.

Add integrations only when they serve a defined need. Do not imply that BBC is affiliated with or endorsed by Amazon, Goodreads, or another platform without authorisation.

## 10. Performance

The website should:

- Load efficiently on mobile networks.
- Use appropriately sized and compressed images.
- Avoid unnecessary JavaScript libraries and third-party scripts.
- Minimise redundant network requests.
- Use responsive images where practical.
- Avoid layout shifts and oversized assets.

## 11. Search Engine and Social Sharing Basics

Use:

- Meaningful page titles and meta descriptions.
- A logical heading hierarchy.
- Descriptive URLs.
- Descriptive alternative text for meaningful images.
- Appropriate social sharing metadata.
- Structured data only where accurate and supported.

Each individual book page should have its own meaningful title and description. Do not use misleading popularity or ranking claims.

## 12. Hosting and Deployment

GitHub is the source-control repository, not automatically the complete hosting solution.

GitHub Pages may be suitable for a static frontend. It does not provide a secure backend by itself. If BBC needs authentication, database access, or private form submissions, choose an appropriate backend and hosting arrangement.

Confirm the deployment architecture before publishing functionality that depends on a backend.

## 13. Testing

Test each feature before calling it complete:

- Navigation and internal links.
- Responsive layouts.
- Forms, validation, and submission handling.
- Book links and images.
- Administrator access restrictions.
- Error and empty states.
- Keyboard navigation and accessibility basics.
- Browser compatibility.
- Performance on mobile.

A feature is not complete simply because it looks correct in a screenshot.

## 14. Development Rules

- Inspect the repository before making changes.
- Read the project documentation before implementation.
- Preserve the existing BBC logo and approved brand identity.
- Do not remove working functionality without approval.
- Keep code readable and maintainable.
- Avoid unnecessary dependencies.
- Test changes and report what was actually tested.
- Document important technical decisions.
- Never commit credentials, private data, or unpublished manuscripts.
- Make focused changes instead of rewriting unrelated parts of the project.

## 15. Approval

The implementation AI may recommend technical improvements and carry out approved tasks. ChatGPT may review plans, code changes, implementation reports, and testing evidence.

The founder has final authority over technology choices, paid services, hosting, credentials, and significant architectural changes.

## 16. Guiding Principle

Build the simplest reliable architecture that meets BBC's current needs and can be extended later. Do not overengineer the first release.


## 17. Admin Access and Authentication — Founder-Approved Requirements (2026-11-28)

- Provide a dedicated admin sign-in route, recommended path: `/admin` (or redirect to `/admin/login`).
- Do not provide public administrator sign-up or self-service admin account creation.
- The initial administrator account must be provisioned securely during setup. Additional administrators, if needed later, must be invited or created by an authorised administrator.
- Admin pages, data, and actions must be protected by backend-enforced authentication and authorisation. A hidden URL or frontend-only check is not security.
- Provide a secure password-reset/recovery flow and evaluate multi-factor authentication for the administrator account.
- Public visitors do not need accounts merely to browse the catalogue or submit an author book proposal. Any future reader accounts require a separate approved requirement.
- Keep admin authentication separate from public author submission and newsletter subscription.

## 18. Admin Dashboard and Book/Content Management — Founder-Approved Requirements (2026-11-28)

Administrators must be able to:
- View and manage incoming book submissions and existing catalogue records.
- Edit book/submission information.
- Approve a submission or disapprove/reject it.
- Delete records, with a clear confirmation step and a safe recovery strategy where practical (prefer soft deletion/archive for recoverability; permanently delete only through a deliberate confirmed action).
- Publish, unpublish, and update catalogue content.
- Review status and maintain an audit history of important administrative actions.

### Approval must include publishing destinations

Approval is not a single yes/no action. When approving a book, the administrator must be able to choose:
- One or more applicable catalogue collections (for example Featured Books, Recommended Books, Worth Discovering, Coming Soon, or Past Features, subject to collection rules); and
- Whether the same book/content should also be included in a newsletter.

A single approval workflow must support both destinations together: catalogue publication only, newsletter inclusion only where editorially appropriate, or catalogue publication plus newsletter inclusion. Selecting a newsletter destination must not automatically send it.

The system must preserve one canonical book record. A book can belong to multiple catalogue collections and can be referenced by one or more newsletter campaigns without duplicating the underlying book record.

### Suggested submission statuses

Use explicit statuses such as Draft, Pending Review, Approved, Rejected/Disapproved, Published, and Archived/Deleted. Separate editorial approval from publication state and newsletter-send state so an approved book can be prepared for publication without being accidentally made public or emailed.

## 19. Newsletter Campaign Builder — Founder-Approved Requirements (2026-11-28)

The admin dashboard must allow an administrator to:
- Create a newsletter draft and edit its content before sending.
- Add an approved book/catalogue item to a newsletter, with editable newsletter-specific introduction or copy.
- Preview the newsletter as a complete email before sending, including layout and content.
- Save drafts and return to edit them.
- Review the recipient audience and subscription eligibility before sending.
- Send only after a deliberate final confirmation.

Newsletter inclusion and newsletter sending are separate actions. Approving a book for newsletter inclusion creates or updates newsletter draft content; it does not send an email automatically.

The eventual newsletter system must respect subscriber consent, unsubscribe requests, suppression lists, and applicable privacy requirements. Do not send to people who have not validly subscribed.

## 20. Admin Audit, Safety, and Data Handling

- Record who performed significant actions and when (create, edit, approve, reject, publish, unpublish, delete, newsletter preview, and send).
- Use confirmation for destructive actions and final newsletter sending.
- Validate data on the backend; do not trust browser-submitted status, collection, or permission values.
- Restrict access to private author submissions and subscriber data to authorised administrators.
- Do not store secrets, passwords, private submissions, or subscriber lists in the public Git repository.
- Keep backups and a recovery path for catalogue and submission data.

## 21. Backend Architecture Decisions Still Open

The requirements above are approved; the implementation choices are not. Evaluate and recommend:
- Backend/database provider and hosting arrangement.
- Admin authentication method and account provisioning.
- Newsletter delivery provider and email-template approach.
- Image/file storage for book covers and any permitted author assets.
- Spam protection, transactional email, backups, and operational costs.

Present a concise recommendation with trade-offs, security implications, free-tier limits, expected costs, and migration implications before committing to a provider. Firebase remains an option, not a decision.


## 22. Admin-Created Editorial Posts — Founder-Approved Requirement (2026-11-28)

The admin dashboard must include a content/post manager. An authorised administrator can create a post directly from the admin area, edit it, save it as a draft, publish it, unpublish it, and delete it with confirmation.

Posts created directly by an administrator are trusted BBC-authored content and **do not enter the external author-submission approval queue or require a second approval**. The administrator who creates the post may publish it directly. Draft/published state and audit history must still be recorded.

Keep this workflow distinct from externally submitted author books/posts, which remain pending until editorial review. The data model should identify content origin (for example, admin-created versus external submission) and preserve the appropriate workflow.

## 23. Backend and Hosting Recommendation — Proposed, Awaiting Founder Approval (2026-11-28)

### Recommended direction

Use **Supabase as the primary backend platform** (PostgreSQL database, Auth, Storage, and Edge Functions where server-side logic is needed). Keep the existing HTML5, Bootstrap 5, and Vanilla JavaScript frontend.

For the public website and admin frontend, use **Firebase Hosting as a static host** as the first option to evaluate. This is a hybrid arrangement: Firebase Hosting serves the website; Supabase provides the backend services. Vercel or Netlify are alternatives, not mandatory dependencies.

### Why Supabase is the leading candidate

BBC's data is relational:
- A book can belong to several catalogue collections.
- One submission can become one canonical book record.
- A book may be used in several newsletter campaigns.
- Posts, editorial states, catalogue placement, newsletter inclusion, and send status must be related but separately managed.
- Admin users, roles, audit events, and subscriber consent need clear relationships and constraints.

PostgreSQL and relational constraints are a natural fit for these relationships. Supabase also provides managed Postgres, authentication, file storage, APIs, and server-side Edge Functions. Use Row Level Security on every exposed table and keep privileged keys on trusted server-side code only.

### Hosting clarification

Supabase is not the static website host for this existing HTML site. It supplies backend services. However, a separate Vercel or Netlify account is not compulsory: Firebase Hosting can serve the static frontend while the frontend securely connects to Supabase APIs. Firebase Hosting can also route to Cloud Functions or Cloud Run if BBC later needs Google-hosted server-side services, but those are separate services with their own billing/configuration.

### Initial cost considerations (USD; check live pricing before account creation)

- Supabase Free currently lists 500 MB database, 1 GB file storage, 5 GB egress, 50,000 monthly active users, and project pausing after one week of inactivity. It is useful for development/prototyping, but the inactivity pause and lack of automatic backups make it a poor assumption for a dependable live production service.
- Supabase Pro currently starts at $25/month and includes daily backups with 7-day retention, higher quotas, and 100 GB file storage. Additional usage can cost more.
- Firebase Hosting has a no-cost quota on Spark and Blaze; current published allowance includes 10 GB stored and 360 MB/day data transfer. Overages on Blaze are billed.
- Firebase's Spark plan is not a blanket guarantee that every backend feature is free. Cloud Functions and some Google Cloud integrations require Blaze/pay-as-you-go. Firestore has no-cost quotas, then usage-based charges. Phone authentication is billed separately.
- Vercel Hobby is listed as free for personal, non-commercial use; its pricing page distinguishes the Pro plan for professional use. Do not assume the Hobby plan is suitable for BBC as a commercial platform.

Prices and quotas are subject to change, tax, region, and actual usage. Do not enable a paid plan, add a payment method, or incur charges without founder approval.

### Risks and safeguards

- Supabase requires careful PostgreSQL schema design and strict Row Level Security policies; an exposed table without appropriate grants and RLS can expose or permit modification of data.
- Firebase Hosting does not itself provide the database or admin backend in this hybrid plan.
- Do not expose Supabase service-role keys or other secrets in browser JavaScript.
- Keep development and production projects separate where practical.
- Define backup/export and recovery before public launch.
- Assess email delivery separately; neither Supabase nor Firebase should be assumed to be a complete newsletter campaign delivery product without checking provider limits and deliverability needs.

### Decision status

**Proposed recommendation: Supabase backend + Firebase Hosting frontend. Awaiting explicit founder approval.** Firebase-only (Firestore + Firebase Hosting + Functions) remains a viable alternative, but is not the preferred fit for BBC's relational catalogue and editorial workflow.
