# TESTING AND DEPLOYMENT

## 1. Purpose

This document defines how Better Book Club (BBC) should be tested, reviewed, and deployed.

The goal is to ensure the website is reliable, secure, responsive, accessible, and ready for public use before launch.

## 2. Testing Principles

Every significant feature must be tested before being considered complete.

Testing should cover:

- Functionality.
- Visual appearance.
- Mobile and desktop responsiveness.
- Browser compatibility.
- Accessibility.
- Performance.
- Security.
- Data accuracy.

A feature is not complete simply because it appears correctly on screen. Its underlying functionality must also work.

## 3. Responsive Design Testing

The website must work properly across:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

Check that:

- Navigation works at every screen size.
- Book covers and images display correctly.
- Text remains readable.
- Buttons and forms are usable.
- No content overflows horizontally.
- Layouts remain visually balanced.

## 4. Browser Compatibility

Test the website using current versions of major browsers where practical:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari.

Investigate and resolve significant differences in layout or functionality.

## 5. Functional Testing

### 5.1 Navigation

Verify that:

- All navigation links work.
- Internal links lead to the correct pages.
- External links open the intended destinations.
- There are no broken or placeholder links.
- The logo links to the intended home page.

### 5.2 Book Catalogue

Verify that:

- Book records display correctly.
- Covers load properly.
- Titles and author names are accurate.
- Genre and category filters work where implemented.
- Search works where implemented.
- Book detail pages display the correct information.
- Empty states and missing information are handled appropriately.

### 5.3 Forms

Test every public form, including:

- Author submissions.
- Reader registrations, if implemented.
- Contact forms.
- Newsletter subscriptions.

Verify that:

- Required fields are validated.
- Invalid submissions show useful error messages.
- Successful submissions receive confirmation.
- Submitted data reaches the intended destination.
- Duplicate or spam submissions are handled appropriately.
- Privacy and consent requirements are respected.

A form must not be considered functional merely because it has a submit button.

### 5.4 Admin Dashboard

Verify that:

- Authentication works.
- Unauthorized visitors cannot access protected areas.
- Admin actions are enforced by the backend, not just hidden in the interface.
- Book records can be managed correctly.
- Invalid data is rejected.
- Sensitive information is not exposed.

## 6. Security Testing

Before launch, review:

- Authentication and authorization.
- Database access rules.
- Form input validation.
- Protection against common web vulnerabilities.
- API key and secret management.
- Administrative permissions.
- Data privacy and storage practices.

Never commit passwords, private API keys, access tokens, or other secrets to the public GitHub repository.

Use environment variables or the appropriate secure configuration system.

## 7. Accessibility Testing

The website should follow practical accessibility standards.

Check:

- Text contrast.
- Keyboard navigation.
- Visible focus indicators.
- Descriptive link text.
- Image alternative text.
- Form labels.
- Heading structure.
- Screen-reader compatibility where practical.

Aim for WCAG 2.2 AA compliance as the accessibility target.

## 8. Performance Testing

Review:

- Image sizes and formats.
- Loading speed.
- Unnecessary scripts and stylesheets.
- Layout shifts.
- Mobile performance.
- Caching opportunities.

Book covers and other large images should be optimized without sacrificing acceptable visual quality.

Use performance testing tools where appropriate.

## 9. Content and Editorial Review

Before publishing book information, verify:

- Book titles and author names.
- Descriptions and editorial introductions.
- Genre classifications.
- Cover image permissions.
- Excerpts and their sources.
- External book links.
- Ratings, rankings, and popularity claims.

Do not publish fabricated information or unverified claims.

## 10. Deployment Process

The deployment process should follow these stages:

1. Complete the planned feature or update.
2. Review the code changes.
3. Run relevant tests.
4. Fix identified issues.
5. Check the website visually on desktop and mobile.
6. Confirm that required integrations work.
7. Obtain founder approval for significant changes.
8. Deploy to the chosen hosting environment.
9. Test the deployed website.
10. Record the deployment and any outstanding issues.

## 11. Hosting and Environment Configuration

The final hosting provider and production configuration must be approved before launch.

Development, testing, and production environments should be separated where practical.

Production configuration must use secure credentials and appropriate access restrictions.

## 12. Backups and Recovery

Before major updates or migrations:

- Preserve a recoverable copy of important data.
- Keep source code version-controlled in GitHub.
- Document significant database or configuration changes.
- Establish a recovery process for failed deployments.

The backup strategy must be appropriate for the final hosting and database setup.

## 13. Bug Reporting and Tracking

Every significant issue should be documented with:

- A clear description.
- Steps to reproduce it.
- Expected behaviour.
- Actual behaviour.
- A screenshot or recording where useful.
- Severity and priority.
- Current resolution status.

Critical security and data-loss issues must receive priority.

## 14. Definition of Done

A feature may be marked complete when:

- Its requirements are satisfied.
- The implementation has been reviewed.
- Relevant tests have passed.
- Responsive behaviour has been checked.
- No known critical defects remain.
- Documentation has been updated where necessary.
- Changes have been committed to GitHub.

## 15. Launch Readiness

Before public launch, confirm that:

- Core pages are complete.
- Navigation works.
- The book catalogue displays correctly.
- Forms and integrations work.
- Admin access is secure.
- Privacy and applicable policy pages are published.
- Copyright and content permissions have been reviewed.
- Mobile and desktop testing is complete.
- No critical bugs remain.
- Hosting and domain configuration are ready.
- Founder approval has been obtained.

## 16. Post-Launch Monitoring

After launch:

- Check for broken links and errors.
- Monitor form submissions.
- Review performance.
- Address user-reported issues.
- Keep dependencies and security configurations updated.
- Maintain backups.
- Record significant changes.

## 17. AI Implementation Responsibilities

AI assistants involved in development must:

- Test the features they implement.
- Report what was tested and what was not.
- Identify known limitations.
- Avoid claiming that untested features work.
- Explain significant technical decisions.
- Report changed files.
- Avoid deploying to production without the required approval.

The founder retains final authority over production deployment.

---

**Document status:** Working technical guideline  
**Project:** Better Book Club  
**Last updated:** 26 November 2026
