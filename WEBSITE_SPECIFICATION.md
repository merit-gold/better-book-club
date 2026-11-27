# Better Book Club — Website Specification and Planning Gaps

**Document status:** Draft for founder review  
**Purpose:** Consolidate the remaining page-level requirements, proposed answers, and unresolved decisions in one reference for ChatGPT and Claude.  
**Project repository:** https://github.com/merit-gold/better-book-club

---

## 1. Purpose of This Document

The existing BBC documentation already establishes the project's vision, website structure, design direction, technical approach, editorial standards, and general page requirements.

This document does not replace those documents or repeat their entire contents.

Its purpose is to fill in the finer details that will help the implementation team understand:

- What each website page should contain.
- What information visitors should find on each page.
- How the sections should be organised.
- What buttons, links, and features should do.
- What content is required.
- What should be displayed when information is unavailable.
- Which decisions are already established and which still require founder approval.

Claude must read this document alongside the existing project documentation, not in isolation.

## 2. Existing Decisions That Must Be Preserved

The following are already established:

- BBC is an independent literary discovery and reader community platform.
- The founder has final authority over editorial and project decisions.
- The website should feel premium, literary, welcoming, distinctive, and trustworthy.
- The existing BBC logo must be preserved exactly.
- The approved frontend stack is HTML5, Bootstrap 5, Vanilla JavaScript, and custom CSS.
- Main navigation: Home, Explore Books, For Authors, For Readers, About, Contact.
- Newsletter placement: homepage and footer, not the main navigation.
- Every approved featured book should have its own static editorial page.
- The public catalogue should use approved book information from `data/books.json`.
- Only founder-approved books may appear in the official catalogue.
- Stage A is backend-free.
- Functional forms, newsletter processing, authentication, database, and admin operations belong to Stage B.
- No paid service, provider, or backend should be introduced without approval.

The existing documentation remains authoritative for these decisions.

## 3. Homepage — Detailed Requirements

**Purpose:** Introduce Better Book Club, establish its identity, and encourage visitors to discover books or learn about the community.

### Recommended section order

1. Header and navigation.
2. Hero section.
3. Featured Books.
4. Explore Books / Discover Your Next Read.
5. Popular or Noteworthy Books.
6. Coming Soon.
7. Reader opportunities.
8. Author opportunities.
9. About Better Book Club.
10. Newsletter section.
11. Footer.

### 3.1 Hero section

Should contain:

- BBC logo and brand identity.
- A strong headline introducing the platform.
- A short explanation of what BBC does.
- A prominent button leading to Explore Books.
- A secondary button leading to the For Authors page.

**Proposed headline:**

"Discover Stories Worth Your Time."

**Proposed supporting text:**

"Explore thoughtfully selected books, discover new authors, and find stories that stay with you."

These are suggested starting points, not approved final copy.

### 3.2 Featured Books

Display a selection of officially featured books.

Each card should include:

- Book cover.
- Title.
- Author.
- Genre.
- Short editorial introduction or description.
- A clear link to the individual book page.

The founder controls which books are featured.

If there are no approved featured books, display a designed empty state rather than inventing book entries.

### 3.3 Explore Books

Introduce the wider catalogue and provide a clear route to the Explore Books page.

Suggested button: "Explore All Books".

### 3.4 Popular or Noteworthy Books

This section requires a decision.

**Recommendation:** Use "Worth Discovering" as the section name until BBC has a reliable and consistent way to measure popularity.

The section can highlight interesting books that deserve attention without suggesting that BBC has verified sales figures, rankings, or popularity.

If BBC later uses external popularity indicators, each claim must be sourced and dated.

### 3.5 Coming Soon

Display books that have been approved for future BBC features but have not yet been published as current features.

Each card should show:

- Cover.
- Title.
- Author.
- Genre, where available.
- Expected feature date, only when confirmed.

Do not invent publication or feature dates.

### 3.6 Reader and Author Opportunities

Create two visually distinct sections:

**For Readers:** Introduce opportunities such as Founding Readers, Beta Reading, and ARC Opportunities.

**For Authors:** Explain that BBC discovers books independently and provides information about potential author participation and submissions.

Buttons should lead to their respective pages.

Do not advertise an inactive programme as currently open.

### 3.7 About BBC

A short introduction explaining BBC's purpose and editorial approach, with a link to the full About page.

### 3.8 Newsletter

A section inviting visitors to receive BBC updates.

During Stage A, this must be a clearly marked placeholder. Do not make it look like a working subscription service.

### 3.9 Footer

Include:

- BBC brand identity.
- Short platform description.
- Main navigation links.
- Links to For Authors and For Readers.
- Contact information or a Contact page link.
- Newsletter area, when operational.
- Privacy Policy and Terms links when those documents are ready.
- Copyright notice.

Do not invent a physical address, telephone number, or social media account.

---

## 4. Explore Books Page

**Purpose:** Make it easy for readers to discover books through BBC's editorial catalogue.

### Recommended page structure

1. Page introduction.
2. Featured Books.
3. Recommended Books.
4. Worth Discovering.
5. Coming Soon.
6. Past Features.
7. Book discovery controls, if approved.

### 4.1 Page introduction

Suggested headline:

"Explore Books"

Suggested supporting text:

"Discover carefully selected stories across different genres, from established favourites to books you may not have come across yet."

### 4.2 Book categories

The following categories are already established in the project blueprint:

- Featured Books.
- Recommended Books.
- Popular / Noteworthy section.
- Coming Soon.
- Past Features / Archive.

The final public label for the popularity-related section remains open.

### 4.3 Book cards

Every book card should display, where applicable:

- Cover image.
- Book title.
- Author.
- Genre.
- Short description or editorial introduction.
- Relevant feature status.
- Link to the individual book page.

Cards should be visually consistent and make the book covers prominent.

### 4.4 Search and filtering

**Recommendation for Stage A:**

Consider providing:

- Search by book title or author.
- Filter by genre.
- Filter by feature category.
- Clear filters option.

Search and filtering should work with the actual catalogue data, not decorative controls.

If the initial catalogue is too small to justify these controls, Claude should recommend a simpler presentation rather than adding unnecessary interface elements.

### 4.5 Past Features

Only books that BBC has actually featured should appear here.

A book should not enter the archive merely because it is shortlisted, approved, or scheduled for a future feature.

### 4.6 Empty states

If a category has no books, show an informative message rather than a blank section or fabricated content.

---

## 5. Individual Book Page

**Purpose:** Give each featured book its own editorial presentation.

This requirement is already approved in the existing documentation.

### Recommended page structure

1. Breadcrumb or back-to-explore link.
2. Main book presentation.
3. Book information.
4. BBC editorial introduction.
5. Book description or synopsis.
6. Optional excerpt, when authorised and verifiable.
7. Author information, where available.
8. External reading links.
9. Related BBC book recommendations.

### 5.1 Main book presentation

Display:

- Prominent book cover.
- Title.
- Author.
- Genre.
- Feature status or feature date, where relevant.
- Short introductory description.

### 5.2 BBC editorial introduction

An original introduction written from BBC's editorial perspective.

It should explain what makes the book interesting and why readers might want to discover it.

It must not pretend to be a review if BBC has not conducted one.

### 5.3 Book description

Use an accurate description or original factual summary.

Respect copyright and permission requirements.

### 5.4 Excerpt

An excerpt is optional.

Only include it when the text is real, verifiable, and supported by an appropriate permission or legal basis.

Never generate a fictional passage and present it as an actual book excerpt.

### 5.5 Author information

Where reliable information is available, include a short author biography and an appropriate author website or profile link.

Do not invent biographical details.

### 5.6 External links

Provide legitimate links to the book's available purchase or information pages, such as Amazon or Goodreads where appropriate.

These links must not imply an official partnership with those platforms.

### 5.7 Related books

Recommend other relevant BBC catalogue books when suitable.

Do not display invented recommendations.

---

## 6. For Authors Page

**Purpose:** Explain how BBC works with authors, how books are considered, and what opportunities may be available.

### Recommended section order

1. Introduction.
2. How BBC discovers books.
3. How book selection works.
4. Submitting a book.
5. What information authors may need to provide.
6. Editorial independence and copyright.
7. Author opportunities and services.
8. Frequently asked questions.
9. Contact or submission call to action.

### 6.1 Introduction

Explain that BBC is an independent literary discovery platform.

Make clear that BBC discovers books independently and also welcomes appropriate author submissions.

### 6.2 How BBC discovers books

Explain that BBC researches books through suitable public sources, evaluates candidates against its selection criteria, and makes independent editorial decisions.

### 6.3 How selection works

Explain the general process:

1. Book discovery or submission.
2. Initial information checks.
3. Editorial evaluation.
4. Shortlisting where appropriate.
5. Founder review and final decision.
6. Publication if approved.

Do not promise that submitting a book guarantees selection.

### 6.4 Submit a Book

Provide a clear explanation of the submission opportunity.

Potential information that may eventually be requested:

- Author name.
- Contact email.
- Book title.
- Genre.
- Book description.
- Publication status.
- Official book link.
- Author website or profile.
- Cover image or authorised cover source.
- Relevant additional information.

**Stage A:** Display an informative placeholder or explanation that submissions are not yet available through the website.

**Stage B:** Implement a secure working submission form after the founder approves the processing arrangements and privacy requirements.

### 6.5 Editorial independence and copyright

Explain that:

- Submitting a book does not guarantee a feature.
- Authors retain ownership of their work.
- BBC requires appropriate permission to use copyrighted materials where necessary.
- Payment, if any paid service is approved in the future, does not guarantee editorial selection.

### 6.6 Author opportunities and services

Describe only opportunities that BBC has actually approved and is prepared to provide.

Do not invent service packages, fees, benefits, or guarantees.

### 6.7 Frequently asked questions

Recommended topics:

- How does BBC discover books?
- Can authors submit their books?
- Does submitting guarantee a feature?
- Does BBC charge for features?
- Who makes the final selection?
- Can authors provide their own book covers?
- Can authors request corrections?
- Does BBC guarantee sales or reviews?

Answers about fees must remain transparent: pricing and service arrangements have not yet been finalised.

---

## 7. For Readers Page

**Purpose:** Explain how readers can discover BBC books and participate in reader opportunities.

### Recommended section order

1. Introduction.
2. How BBC helps readers discover books.
3. Founding Readers.
4. Beta Reading.
5. ARC Opportunities.
6. Reader expectations.
7. Frequently asked questions.
8. Contact or participation call to action.

### 7.1 Introduction

Explain that BBC aims to help readers discover interesting books and build a welcoming literary community.

### 7.2 Founding Readers

Introduce the proposed programme and explain its intended purpose.

The exact benefits, eligibility, and participation arrangements still require founder approval.

### 7.3 Beta Reading

Explain what beta reading involves and the expectations of readers who participate.

Do not imply that the programme is open until its process and rules are ready.

### 7.4 ARC Opportunities

Explain that ARC opportunities may allow selected readers to receive advance reading copies where authors or publishers make them available.

Do not promise that copies will always be available or that readers must leave positive reviews.

### 7.5 Reader expectations

Emphasise:

- Respectful participation.
- Honest feedback.
- Respect for copyright.
- Confidentiality where required.
- No pressure to provide positive reviews.

### 7.6 Reader applications

**Stage A:** No working application form.

**Stage B:** A secure application process may be introduced after eligibility, privacy, and operational requirements are approved.

### 7.7 Frequently asked questions

Recommended topics:

- How can I discover books on BBC?
- What is a Founding Reader?
- What is beta reading?
- What are ARC opportunities?
- How can I participate?
- Am I required to leave a positive review?
- Are reader opportunities always available?

---

## 8. About Page

**Purpose:** Establish BBC's identity, mission, values, and editorial approach.

### Recommended section order

1. About Better Book Club.
2. Our mission.
3. Why BBC exists.
4. How we discover books.
5. Our editorial approach.
6. Our values.
7. Our commitment to readers and authors.
8. Explore Books call to action.

### Recommended content themes

**Our mission:** Help readers discover worthwhile books through thoughtful curation and editorial presentation.

**Why BBC exists:** Make book discovery more meaningful by giving interesting stories and authors an opportunity to receive thoughtful attention.

**Our editorial approach:** BBC independently researches and evaluates books. The founder retains final selection authority.

**Our values:**

- Curiosity.
- Editorial independence.
- Accuracy.
- Fairness.
- Respect for authors.
- Respect for readers.
- Love of literature.

The final copy should sound human, welcoming, confident, and literary without becoming exaggerated or pretentious.

---

## 9. Contact Page

**Purpose:** Give visitors a clear way to contact BBC.

### Recommended section order

1. Contact introduction.
2. Reasons to contact BBC.
3. Contact method or contact form.
4. Relevant privacy notice.
5. Footer.

### Suggested enquiry categories

- General enquiries.
- Author enquiries.
- Book information or corrections.
- Reader opportunities.
- Copyright and permissions.
- Other enquiries.

**Stage A:** Show only contact information or clearly labelled placeholders that are actually available. Do not display a non-functional form as though it sends messages.

**Stage B:** Add a secure working contact form with validation, a real destination, and success/error feedback.

Do not invent contact email addresses or social media links.

---

## 10. Shared Website Components

The following components should be consistent across public pages:

### Header

- Original BBC logo.
- Main navigation.
- Responsive mobile navigation.
- Clear active-page indication.

### Footer

- BBC identity.
- Useful page links.
- Contact route.
- Newsletter area when operational.
- Legal links when available.

### Buttons

Use clear action labels such as:

- Explore Books.
- Discover More.
- Learn More.
- For Authors.
- For Readers.
- Contact BBC.

Every button must have a real destination or action.

### Breadcrumbs

Consider breadcrumbs on individual book pages and deeper catalogue views to help visitors navigate back to Explore Books.

### Responsive behaviour

All pages and shared components must work on desktop, tablet, and mobile.

### Accessibility

Use semantic HTML, keyboard-accessible controls, visible focus states, appropriate contrast, meaningful image text, and accessible navigation.

---

## 11. Stage A — What Must Work Before the Backend

Stage A is the public frontend and catalogue experience.

It should include:

- Complete public page structures.
- Consistent header and footer.
- Responsive layouts.
- Approved BBC brand styling.
- Explore Books catalogue.
- Book cards connected to real approved book data.
- Individual static book pages.
- Working internal navigation.
- Functional client-side search or filters if included.
- Correct external links.
- Empty states and error handling where appropriate.
- Page titles, descriptions, and social-sharing metadata.
- Accessibility and browser testing.

It must not pretend to provide:

- Working author submissions.
- Working reader applications.
- Newsletter delivery.
- Secure administrator access.
- Database operations.
- Backend functionality.

Those belong to Stage B.

---

## 12. Stage B — Operational Features

These are future features and must not be silently added during Stage A.

- Secure author submission form.
- Reader application form.
- Contact form processing.
- Newsletter provider integration.
- Secure administrator authentication.
- Book management dashboard.
- Submission management.
- Database and backend.
- Hosting and deployment arrangements.
- Privacy and data-retention arrangements.

Each requires the relevant founder approvals.

---

## 13. Decisions Still Requiring Founder Approval

The following are not settled merely because recommendations appear in this document.

| Topic | Recommended direction | Status |
|---|---|---|
| Popularity-related section name | "Worth Discovering" | Proposed |
| Homepage hero wording | "Discover Stories Worth Your Time." | Proposed |
| Catalogue search | Search by title and author | Proposed |
| Catalogue filters | Genre and feature category | Proposed |
| Related books | Show relevant BBC catalogue recommendations | Proposed |
| Author submission requirements | Use the suggested information fields in Section 6 | Proposed |
| Founding Readers benefits | Define before programme launch | Open |
| Beta Reading process | Define before programme launch | Open |
| ARC eligibility and availability | Define before programme launch | Open |
| Author fees and services | No pricing promises until approved | Open |
| Newsletter provider | Select before Stage B | Open |
| Contact email and social accounts | Use only verified official details | Open |
| Privacy Policy and Terms | Prepare before collecting public personal information | Required before Stage B launch |

The founder may approve, change, defer, or reject each recommendation.

---

## 14. Instructions for Claude

Before implementation, Claude must:

1. Read `AI_HANDOFF_PROMPT.md`.
2. Read `AI_WORKFLOW.md`.
3. Read `BBC_MASTER_BLUEPRINT.md`.
4. Read `TECHNICAL_ARCHITECTURE.md`.
5. Read `DESIGN_SYSTEM.md`.
6. Read `DECISIONS.md`.
7. Read `CONTENT_GUIDELINES.md`.
8. Read `AUTHOR_AND_READER_POLICIES.md`.
9. Read `TESTING_AND_DEPLOYMENT.md`.
10. Read this document.
11. Inspect the actual website files and repository structure.

Claude must then compare the existing implementation with the documented requirements.

Claude should report:

- Which page requirements are already covered.
- Which sections are missing.
- Which existing elements need improvement.
- Which interactions are incomplete.
- Which requirements are unclear or conflicting.
- Which decisions require founder approval.
- Whether the current repository structure needs any changes.

**Do not begin implementation merely because this document exists.** First complete the inspection and report. Wait for the next approved task.

Claude must not invent final business policies, pricing, contact details, programme benefits, book content, or external partnerships.

Claude may recommend design and implementation details within the approved project direction.

---

## 15. Documentation Maintenance

This document is a consolidated page-level specification, not a replacement for the existing project documents.

Once approved:

- Keep the project vision and overall scope in `BBC_MASTER_BLUEPRINT.md`.
- Keep technical architecture in `TECHNICAL_ARCHITECTURE.md`.
- Keep visual rules in `DESIGN_SYSTEM.md`.
- Keep decisions and approval status in `DECISIONS.md`.
- Keep progress in `PROJECT_STATUS.md`.
- Keep the immediate task in `NEXT_STEP.md`.
- Keep editorial and policy rules in their existing documents.
- Use this document as the detailed website page and feature reference.

When a decision is approved, update the appropriate existing document as well.

Do not allow conflicting instructions to accumulate.

---

## 16. Final Guiding Principle

The objective is to give Claude a clear understanding of what Better Book Club is supposed to become before implementation proceeds.

The existing planning work must be preserved. Missing details should be filled in deliberately, not guessed.

The founder remains the final decision-maker.

**Better Book Club — Discover stories. Find your next favourite.**
