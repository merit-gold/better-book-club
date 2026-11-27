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

- **Stage A — frontend, backend-free.** Static pages, catalogue from `books.json`, static book pages. No functional forms.
- **Stage B — operational.** Backend, forms, newsletter, admin. Requires founder approval of each provider.

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
