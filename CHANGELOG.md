## 2026-11-28 — Book Cover Catalogue Correction

### Changed

- Reworked the public Explore Books cards so each book cover is the primary visual, followed by title, author, publication date, genre and series details.
- Added cover-image source and edition-reference links for all 10 founder-approved starter titles.
- Kept the 10-book public catalogue separate from the internal research pool.
- Added responsive cover-led layouts for desktop, tablet and mobile.

### Verification and limitations

- Confirmed all 10 catalogue records include a cover image URL and a source/edition reference URL.
- Cover images are remotely hosted by the cited author, retailer, bookseller or book-information source; they are not copied into the repository. Source links are included on each card. Display permission and hotlink availability should be confirmed with the relevant rights holder before production launch; attribution alone does not grant image rights.
- Source-level checks only. No live browser/device visual QA was performed by ChatGPT.
- Changes are on `task-003/immersive-homepage-redesign`; `main` has not been changed.

### Next

Connect the homepage Featured Books preview to the same cover-led catalogue.

---

## 2026-11-28 — Initial Public Book Catalogue Added

### Changed

- Added 10 researched titles to `data/books.json` with author names, first-publication dates, genres, Goodreads source links and verified author websites where available.
- Added series-position notes where a title is part of a larger series or shared universe.
- Kept the catalogue text-and-link only: no third-party cover images are copied, stored or hotlinked.
- Updated the Explore Books renderer to display linked text cards without requiring a local cover image or a BBC-hosted individual book page.
- Added matching responsive card styling.

### Verification and limitations

- Publication dates were checked against the individual Goodreads book records; rating counts are not displayed because they change over time and are not needed for the public catalogue.
- Goodreads links are bibliographic references, not a claim that Goodreads endorses BBC.
- Some selections are later entries in a series; this is disclosed in the series note.
- Source-level review only. No live browser/device visual QA was performed by ChatGPT.
- Changes are on `task-003/immersive-homepage-redesign`; `main` has not been changed.

### Next

Connect the homepage Featured Books preview to the approved catalogue, then move on to the next project priority.

---

## 2026-11-27 — About Page Founder Introduction and Purpose Refinement

### Changed

- Replaced the existing generic “Why we exist” section with a combined founder introduction and clearer explanation of why Better Book Club was created; no additional page section was added.
- Identified the founder as Aliyah Merit-gold and used the founder-supplied description “Literary Growth Partner” and experience of more than nine years in the book space.
- Explained the author challenges BBC aims to address: discoverability, genuine reader engagement and honest feedback, alongside the reader-facing purpose of thoughtful book discovery.
- Clarified that newsletters are an intended communication channel as it becomes available, not a currently active subscription service.
- Updated page metadata to reflect the founder introduction.

### Verification

- Confirmed the revised founder and purpose copy is present in `pages/about.html`, the former generic section copy is gone, and the existing section structure is retained.
- Source-level checks only; founder visual review is pending. No claim of browser visual testing.

### Next

- Founder reviews the updated About page.
- Begin the one-time research of approximately 50 independent-book candidates; preserve the candidate pool separately from the 10-book public starter catalogue.

---

## 2026-11-27 — For Authors Review Refinements

### Changed

- Confirmed the hero already uses a full-bleed photographic background with a dark readability overlay; no missing hero image needed to be added.
- Kept all existing For Authors sections and FAQ, while reducing vertical section spacing and hero height to make the page less scroll-heavy.
- Clarified that submitting a book through the future website form carries no submission fee; any separate author service payment is handled outside the website, and submissions await administrator review before public listing.
- Kept the submission area as an explicitly unavailable placeholder until the future form and backend are implemented.

### Testing

- Source-level review confirmed the hero background image URL, all eight page sections, and the non-functional submission placeholder remain present. Visual browser review is still pending.

## 2026-11-27 — Author Service and Delivery Sequence Clarified

### Founder direction

- Author payments, where applicable, relate to a BBC service the author chooses to participate in and are handled outside the website; the act of submitting a book through the future website form itself carries no submission charge.
- A submitted book remains pending until an administrator reviews it and approves it for public listing. Payment does not guarantee editorial selection, a feature, a reader match, or a positive review. Specific service offerings, scopes and prices remain to be defined.
- Confirmed delivery order: finish the public page designs, then populate the approved book catalogue and create individual book pages, then work on the admin dashboard, database and backend.

### Documentation

- Updated the decisions register, project status and next-step roadmap to reflect the founder’s clarification.
- The admin dashboard, database and backend remain planned work and have not been implemented.

## 2026-11-27 — For Authors Page Implemented

### Added

- Replaced the For Authors placeholder with an editorial page explaining BBC's independent book discovery, consideration process, author expectations, copyright principles and honest-feedback standards.
- Clarified that the website submission route is not yet available and that future requirements and applicable terms will be stated clearly.
- Added FAQs covering selection, fees, reader matching, reviews and manuscript handling.
- Added responsive page-specific styling consistent with the immersive editorial design used across the public pages.

### Content safeguards

- Used the founder-provided Better Book Club strategy record and the repository's author and reader policies as the content basis.
- Did not advertise unapproved paid services, promise selection or reader matches, invite manuscript uploads, invent contact details, or add a non-functional form.

### Testing

- Static source review is in progress; founder visual review is pending. Real-browser and physical-device testing has not been performed by ChatGPT.

### Next

Founder reviews `pages/authors.html` on `task-003/immersive-homepage-redesign`. Refine if requested, then implement For Readers.

---

## 2026-11-27 — Homepage Discovery Principle Clarified

### Founder direction

- The homepage should function as a discovery gateway, not only as content to read.
- Featured Books should visibly preview actual approved books on the homepage itself, so visitors immediately see that BBC features books without first navigating to Explore Books.
- Worth Discovering should create curiosity and encourage visitors to click through, without suggesting a popularity ranking.
- Preserve the existing homepage direction; use this principle when reviewing the homepage and integrating the approved catalogue later. Keep honest empty states until real approved books and authorised covers are available.

### Documentation

- Added the principle to `DECISIONS.md` and `WEBSITE_SPECIFICATION.md`.

---

## 2026-11-27 — Public Page-First Development Sequence Confirmed

### Founder decision

- Complete the designs for all public pages (Homepage, About, Explore Books, For Authors, For Readers and Contact) before adding the book catalogue.
- Review the complete site for consistency, responsive behaviour, accessibility and navigation after the page designs are complete.
- Add founder-approved books, authorised covers and individual book pages afterwards, then connect relevant book previews across the Homepage and Explore Books page.
- The founder reviewed the Explore Books page positively and confirmed that it is working as expected.

### Documentation

- Recorded the approved sequence in `DECISIONS.md`.
- Updated `PROJECT_STATUS.md` to reflect the founder's positive review of Explore Books.
- Updated `NEXT_STEP.md` so the next implementation work is For Authors, For Readers and Contact, followed by site-wide review and then catalogue population.

---

## 2026-11-27 — Explore Books Page and Editorial Copy Review

### Added

- Replaced the Explore Books placeholder with an editorial catalogue page containing Featured Books, Recommended Books, Worth Discovering, Coming Soon, and Past Features collections.
- Added responsive Explore Books styling, collection jump links, and intentional empty states for collections with no approved titles.
- Added an initially empty `data/books.json` catalogue and a small frontend renderer that displays approved entries when they are added.

### Changed

- Refined one Homepage sentence so it does not imply that public book discussions or comments are available.
- Reviewed the founder-provided Ghost chat record alongside the website specification, book selection criteria, content guidelines, design system, and master blueprint. No About page rewrite was needed.

### Testing

- Checked the Explore page's internal collection links and matching section IDs, shared navigation destinations, metadata, data-file path, and empty-catalogue behaviour by static inspection.\n- Checked the Explore catalogue renderer's JavaScript syntax.
- Confirmed that no fake book entries, covers, ratings, feature dates, search controls, or non-functional forms were added.
- Real-browser and physical-device visual testing has not yet been performed.

### Next

Founder reviews the Explore Books page. Continue with For Authors, For Readers, and Contact one page at a time.

---

# Better Book Club — Changelog

## 2026-11-27 — About Page Implementation

### Added

- Replaced the About page placeholder with an editorial page covering BBC's purpose, why it exists, independent book discovery and selection, editorial values, and pathways for readers and authors.
- Added responsive page-specific styling while reusing the existing homepage design system, navigation, footer, typography and motion behaviour.

### Testing

- Checked page structure, navigation destinations, in-page anchor targets, responsive CSS breakpoints, reduced-motion support, and the existing reveal observer.
- Confirmed the page does not introduce a non-functional submission form or an unapproved contact address.
- Founder review and real-browser visual review of the About page are still pending.

### Next

Founder reviews the About page. After refinements and acceptance, implement Explore Books, then For Authors, For Readers and Contact, one page at a time.

---

This document records significant changes to the Better Book Club project.

It provides a history of project planning, documentation, design decisions, implementation, testing, and releases.

## 2026-11-27 — Task 001 Homepage Completion

### Added

- Completed the homepage section flow: Featured Books, Explore Books, Worth Discovering, Coming Soon, reader opportunities, author opportunities, About BBC, and a clearly inactive newsletter placeholder.
- Added responsive styling for the new homepage content and opportunity panels.

### Changed

- Updated the homepage hero headline to the founder-approved “Discover Stories Worth Your Time.”
- Changed the secondary hero action to “For authors” and linked it to the existing author page.
- Used “Worth Discovering” for the editorial noteworthy-books section; the section explicitly avoids implying a popularity ranking.
- Updated the decisions register, website specification, README, project status, and next-step instructions to reflect the approved decisions and actual repository state.

### Testing

- Reviewed homepage markup, internal page destinations, semantic section headings, and responsive CSS changes.
- Automated browser/device testing has not yet been performed; founder review and real-browser/mobile checks remain outstanding.

### Next

Founder reviews `task-001/homepage-completion`. Merge into `main` only after approval.

---

## Changelog Format

Each entry should include:

- Date.
- Development stage or version, where applicable.
- What was added, changed, fixed, or removed.
- Why the change was made, when useful.

Use these categories:

- **Added** — new documents, features, or functionality.
- **Changed** — modifications to existing work.
- **Fixed** — corrections to errors or problems.
- **Removed** — items intentionally removed.
- **Approved** — important decisions approved by the founder.

---

## 2026-11-27 — Foundation Skeleton and Documentation Corrections

### Approved

Founder-approved on 2026-11-27 (recorded in `DECISIONS.md`): frontend stack; keep repository structure; individual static book pages; main navigation; backend-free Foundation Skeleton as the first task. Firebase remains an option, not approved.

### Added

- `index.html` and placeholder pages `pages/explore.html`, `authors.html`, `readers.html`, `about.html`, `contact.html`.
- `.gitignore` (secrets, private submissions and manuscripts, dependencies, logs, OS and editor files).
- `assets/css/bbc.css` (brand colour variables, typography, layout) and `assets/js/main.js` (footer year, current-page link).
- Empty folders for `assets/images/logo`, `books`, `general`, and `pages/books` (with `.gitkeep`).
- Logo placeholder in the header. The original logo has not been added.

### Changed

- `AI_HANDOFF_PROMPT.md`: removed duplicated sections 10–11 and the duplicate copy of section 9.
- `BBC_MASTER_BLUEPRINT.md`: Firebase described as a candidate; navigation harmonised; MVP split into Stage A (frontend) and Stage B (operational).
- `DESIGN_SYSTEM.md`, `TECHNICAL_ARCHITECTURE.md`, `DECISIONS.md`, `README.md`, `PROJECT_STATUS.md`, `NEXT_STEP.md` updated to match.

### Testing

Checked with scripts: HTML structure, internal links, JavaScript syntax, contrast ratios, and page behaviour in a headless browser without Bootstrap. The founder reported testing navigation between pages in VS Code, and ChatGPT reviewed the ZIP. Not yet tested in real browsers or on a phone. Bootstrap loads from a CDN, which could not be tested offline.

### Next

Founder commits to GitHub, then supplies the logo.

---

## 2026-11-26 — Project Foundation Completed

### Added

Created the initial project documentation foundation:

- `README.md`
- `BBC_MASTER_BLUEPRINT.md`
- `BOOK_SELECTION_CRITERIA.md`
- `DESIGN_SYSTEM.md`
- `TECHNICAL_ARCHITECTURE.md`
- `DECISIONS.md`
- `AI_WORKFLOW.md`
- `PROJECT_STATUS.md`
- `NEXT_STEP.md`
- `CHANGELOG.md`
- `CONTENT_GUIDELINES.md`
- `AUTHOR_AND_READER_POLICIES.md`
- `TESTING_AND_DEPLOYMENT.md`

### Established

Documented the following project areas:

- BBC's vision and objectives.
- Independent book discovery and selection.
- Brand identity and design direction.
- Preferred frontend technology.
- Proposed technical architecture.
- Decision-making and approval process.
- ChatGPT, Claude, and founder responsibilities.
- AI-assisted development workflow.
- Editorial and content standards.
- Author and reader participation principles.
- Testing, security, and deployment expectations.

### Approved Direction

Established the GitHub repository as the shared project reference.

Defined the founder as the final decision-maker for project scope, major technical choices, editorial approval, and operational decisions.

### Changed

Updated the project documentation to reflect the completion of the initial documentation stage.

Improved the README, project status, and next-step instructions to prepare for repository inspection.

### Next

Proceed to repository inspection and technical assessment with Claude.

Website implementation should begin only after the initial inspection and review of its findings.

---

### 2026-11-27 — For Authors Hero Image Fix

**Fixed**
- Replaced the For Authors hero background image URL with the same image URL already used successfully by the About page, keeping the existing overlay, layout, and responsive styling unchanged.
- No other page content or design was changed.

### 2026-11-27 — For Readers Page Implementation

**Added**
- Replaced the For Readers placeholder with an immersive, responsive editorial page introducing BBC's reader community, its participation principles, and planned Founding Readers, Beta Reading, and ARC opportunity areas.
- Clearly marked all reader opportunities as planned and not open for applications; included honest participation expectations, FAQs, and links to Explore Books and About.
- Kept applications and programme operations inactive because eligibility, detailed rules, privacy arrangements, and Stage B form handling are not yet ready.

**Next**
- Founder reviews the For Readers page; Contact remains the next public page to implement.

### 2026-11-27 — Contact Page Implementation

**Added**
- Replaced the Contact placeholder with an editorial-style page introducing contact routes and four clear enquiry pathways: author enquiries, reader opportunities, book information, and content/copyright questions.
- Linked each pathway to relevant existing BBC information pages so visitors have a useful next step without pretending to submit a message.
- Added a clear notice that direct contact details and message handling are not published yet; explicitly states that no enquiry is submitted from this page.
- Added responsive contact-specific styling consistent with the existing public pages and retained shared navigation and footer.

**Testing**
- Source-level checks are being performed for page structure, anchors, internal destinations, metadata, responsive breakpoints, and the absence of a non-functional form. No browser visual test has been performed by ChatGPT.

**Next**
- Founder reviews Contact. Once approved, cross-check all public pages before beginning the book catalogue.

## Future Entries

Add new entries below whenever meaningful project changes occur.

Use this format:

### YYYY-MM-DD — Short Description

**Added**
- Describe what was added.

**Changed**
- Describe what was changed.

**Fixed**
- Describe what was corrected.

**Approved**
- Record any important founder-approved decision.

**Next**
- Identify the next relevant action.

---

## Changelog Rules

- Record actual changes, not planned work as completed.
- Keep entries in reverse chronological order, with the newest entry first.
- Do not invent dates or implementation results.
- Record major decisions and milestones.
- Keep the changelog consistent with `PROJECT_STATUS.md` and `DECISIONS.md`.
