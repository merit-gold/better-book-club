# Better Book Club — Master Project Blueprint

**Version:** 2.1  
**Status:** Working project blueprint

## 1. Project Vision

Better Book Club (BBC) is an independent literary discovery and reader community platform. Its purpose is to help readers discover worthwhile books through thoughtful curation and editorial presentation, while giving authors a transparent place to understand BBC features and reader opportunities.

The website should feel like a distinctive, polished literary destination—not a generic blog or an AI-looking template.

## 2. Our Audience

- **Readers:** People looking for thoughtful book recommendations and new discoveries.
- **Authors:** Writers interested in BBC features, book submissions, and reader opportunities.
- **Administrators:** Responsible for managing the platform, editorial decisions, and content.

## 3. Book Discovery and Curation

BBC will independently discover books rather than relying only on authors submitting their own work.

### AI-led research workflow

1. The owner establishes the book selection criteria.
2. ChatGPT researches books using Amazon, Goodreads, publisher websites, author websites, and other suitable public sources.
3. ChatGPT evaluates candidates and prepares a shortlist with evidence and explanations.
4. Claude independently cross-checks information where appropriate and helps prepare structured book records.
5. The owner reviews and approves the selected books.
6. Approved books are added to the website catalogue.
7. Books enter Past Features only after their BBC features have actually been published.

The AI assistants research and recommend. The owner makes the final decisions.

### Information to collect

For each candidate, research:

- Book title and author.
- Genre and subgenre.
- Publication information.
- Original factual synopsis.
- Amazon and Goodreads links where available.
- Verifiable ratings, review counts, or rankings, including source and date checked.
- Cover image source and permission status.
- Reasons the book fits BBC's selection criteria.
- Any uncertainties or missing information.

Never invent ratings, rankings, reviews, popularity, publication details, or author information.

Amazon and Goodreads are research sources, not BBC partners. Do not imply affiliation or endorsement.

### Copyright and permissions

Publicly available book information does not automatically grant permission to reuse book covers, excerpts, or publisher descriptions.

Prefer authorised materials supplied by authors or publishers. Write original BBC editorial introductions. Any excerpt must be genuine, verifiable, and used with an appropriate legal or permission basis.

## 4. Website Structure

### Public navigation

- Home
- Explore Books
  - Featured Books
  - Recommended Books
  - Popular on Goodreads & Amazon / What's Gaining Attention
  - Coming Soon
  - Past Features / Archive
- Individual Book Pages
- For Authors
  - How It Works
  - Submit a Book
  - FAQs
  - Opportunities and Services
- For Readers
  - Founding Readers
  - Beta Reading
  - ARC Opportunities
  - FAQs
- About
- Newsletter

### Private area

- Admin Dashboard

The admin dashboard must not appear in public navigation.

## 5. Individual Book Pages

Every book card should lead to an individual BBC editorial page.

A page may include:

- Book cover.
- Title and author.
- Genre.
- Book description.
- Original BBC editorial introduction.
- Feature date.
- External Amazon or Goodreads links.

Only verified and approved information should be published.

## 6. Author Experience

The For Authors section should explain:

- How BBC discovers and selects books.
- How authors can submit their books.
- What information may be requested.
- How editorial decisions are made.
- Copyright and permission expectations.
- Any available author services and their terms.

Whether editorial features or optional services are free or paid remains subject to the owner's decision.

Authors retain copyright and ownership of their work. BBC does not acquire publishing rights simply because an author submits or features a book.

## 7. Reader Programmes

Planned programmes include:

- Founding Readers.
- Beta Reading.
- ARC Opportunities.

Before applications open, define eligibility, expectations, confidentiality, availability, and the operating process.

Protect unpublished manuscripts and private author information.

## 8. Forms and Newsletter

Author submissions, reader applications, and newsletter sign-ups must actually work.

Each form requires:

- A real destination for submitted information.
- Appropriate validation.
- Secure handling.
- Relevant consent language.
- Clear success and error messages.

Newsletter delivery requires a real email provider integration. Do not present a decorative form as a functioning service.

## 9. Admin Dashboard

The private dashboard should eventually support:

- Secure administrator login.
- Adding and editing books.
- Publishing and unpublishing books.
- Archiving past features.
- Managing genres and book information.
- Managing cover images and external links.
- Reviewing author submissions.
- Reviewing reader applications.
- Managing basic homepage content.

Security must be enforced by the backend, not just by hiding dashboard links.

## 10. Visual Identity

Retain the existing Better Book Club logo exactly as supplied unless the owner approves a change.

### Working colour palette

- Burgundy: `#8B1E3F`
- Forest Green: `#174B40`
- Warm Ivory: `#FFF8EF`
- Soft Rose: `#F1DCE2`
- Copper: `#C58A52`
- Charcoal: `#292326`

These are starting colours to test against the actual logo.

### Design direction

- Elegant serif headings.
- Readable sans-serif body text.
- Strong book-cover presentation.
- Clear visual hierarchy.
- Confident, appealing colours.
- Responsive layouts.
- Accessible text contrast and keyboard navigation.

Avoid dull, generic, cluttered layouts.

## 11. Technical Direction

Preferred frontend:

- HTML5.
- Bootstrap 5.
- Vanilla JavaScript.
- A small custom CSS layer.

Firebase is the proposed backend and hosting direction. Possible services include Firebase Hosting, Firestore, Authentication, Storage, and Cloud Functions where needed.

The final technical architecture remains to be confirmed.

## 12. Trust and Transparency

BBC must never:

- Guarantee book sales, reviews, rankings, or reader numbers.
- Invent partnerships, endorsements, testimonials, or community statistics.
- Sell positive reviews or ratings.
- Misrepresent external platform information as BBC data.
- Publish private author or reader information without an appropriate basis.

Any paid service must have clear scope, pricing, deliverables, timelines, and terms.

## 13. Our Two-AI Development Workflow

### ChatGPT — Planning and Review

ChatGPT will:

- Define project requirements.
- Prepare tasks and detailed instructions for Claude.
- Establish acceptance criteria.
- Review Claude's code, screenshots, and reports.
- Identify missing features and potential problems.
- Help maintain project documentation.

### Claude — UI/UX and Implementation

Claude will:

- Read the repository documentation.
- Inspect existing project files.
- Lead UI/UX design.
- Build the website.
- Implement approved features.
- Test changes.
- Report files changed, tests performed, and outstanding issues.

### Owner — Final Authority

The owner controls final decisions, repository access, credentials, spending, public claims, policies, and approvals.

### Standard workflow

1. ChatGPT defines a focused task.
2. The owner gives the task to Claude.
3. Claude inspects, implements, and tests.
4. The owner shares Claude's report or screenshots with ChatGPT.
5. ChatGPT reviews the work and prepares corrections or the next task.
6. Documentation is updated and changes are committed to GitHub.
7. The next task begins after the current one is stable.

Only one AI should actively edit the repository at a time.

GitHub is the shared source of truth for project files and documentation.

## 14. MVP Development

The initial website should focus on:

- Responsive public website.
- Book catalogue.
- Individual book pages.
- About section.
- For Authors section.
- For Readers section.
- Functional submission forms.
- Basic secure admin dashboard.
- Newsletter integration where ready.
- Basic accessibility and security testing.

Advanced member profiles, messaging, reader matching, payments, and sophisticated analytics can come later.

A 24-hour focused build is an aspiration, not a guaranteed delivery time.

## 15. Decisions Still to Confirm

- Final technical architecture.
- Final colours and typography.
- Editorial feature pricing policy.
- Optional author service pricing.
- Reader programme eligibility.
- Newsletter provider.
- Final database structure.
- Privacy and data-retention policies.
- Domain and deployment arrangements.
- Detailed book selection criteria.

Do not silently turn proposed ideas into confirmed decisions.

## 16. Project Documentation

The repository will gradually contain:

- `README.md`
- `BBC_MASTER_BLUEPRINT.md`
- `BOOK_SELECTION_CRITERIA.md`
- `DESIGN_SYSTEM.md`
- `TECHNICAL_ARCHITECTURE.md`
- `DECISIONS.md`
- `PROJECT_STATUS.md`
- `NEXT_STEP.md`
- `CHANGELOG.md`
- `CONTENT_GUIDELINES.md`
- `AUTHOR_AND_READER_POLICIES.md`
- `TESTING_AND_DEPLOYMENT.md`
- `AI_WORKFLOW.md`

These documents will be our shared reference for working with ChatGPT, Claude, and any future AI assistant.
