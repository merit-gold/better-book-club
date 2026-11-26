# Better Book Club — Next Step

## 1. Purpose

This document identifies the immediate next action for the Better Book Club project.

Every collaborating AI should consult it before starting new project work.

## 2. Current Project Stage

**Current stage:** Project foundation and documentation completed.

**Next stage:** Repository inspection and technical assessment.

## 3. Immediate Next Action — Claude Repository Review

The next action is to give Claude the GitHub repository and ask it to inspect the project before beginning implementation.

**Repository:**

https://github.com/merit-gold/better-book-club

Claude must first understand the project and inspect what actually exists.

It should not immediately begin building the website.

## 4. Instructions for Claude

Claude should:

1. Read `README.md`.
2. Read `BBC_MASTER_BLUEPRINT.md`.
3. Read `BOOK_SELECTION_CRITERIA.md`.
4. Read `DESIGN_SYSTEM.md`.
5. Read `TECHNICAL_ARCHITECTURE.md`.
6. Read `DECISIONS.md`.
7. Read `AI_WORKFLOW.md`.
8. Read `PROJECT_STATUS.md`.
9. Read `NEXT_STEP.md`.
10. Read the supporting content, policy, and testing documents.

After reviewing the documentation, Claude should inspect the actual repository.

Its report should cover:

- Existing repository structure.
- Existing source code, if any.
- Existing images, logo, and other assets.
- Missing files and implementation components.
- Whether the proposed frontend stack is suitable.
- Recommended project structure.
- Backend and database requirements.
- Hosting and deployment considerations.
- Security concerns.
- Any contradictions or unclear requirements in the documentation.
- Recommended first implementation task.

Claude should distinguish verified findings from assumptions and recommendations.

## 5. Important Restrictions

Before receiving approval for implementation:

- Do not redesign or replace the existing BBC logo.
- Do not silently change the approved brand direction.
- Do not assume Firebase or another backend has been selected.
- Do not introduce paid services without approval.
- Do not remove existing files or functionality without approval.
- Do not commit credentials, API keys, passwords, or private information.
- Do not start a major implementation before the repository inspection report is reviewed.

## 6. After Claude's Report

Once Claude completes the inspection:

1. The founder shares Claude's report with ChatGPT.
2. ChatGPT reviews the findings against the project documentation.
3. Any technical concerns or missing requirements are identified.
4. ChatGPT prepares the first focused implementation task.
5. The founder approves the task.
6. Claude begins implementation.
7. Claude reports changes and testing results.
8. ChatGPT reviews the implementation.
9. The project documentation is updated as necessary.

## 7. Following Implementation

Website development should proceed in manageable stages.

Each implementation task should include:

- Clear objectives.
- Relevant files.
- Requirements.
- Restrictions.
- Acceptance criteria.
- Testing expectations.

Do not begin several unrelated implementation tasks at once.

## 8. Documentation Maintenance

Whenever the project progresses:

- Update `PROJECT_STATUS.md`.
- Update this file.
- Record significant changes in `CHANGELOG.md`.
- Update `DECISIONS.md` when the founder approves a decision.

Keep all project documents consistent.

## 9. Guiding Principle

The next step must always reflect the actual state of the project.

The objective is to let ChatGPT, Claude, and future collaborators continue from the correct point without repeating work or making assumptions.

The founder has final authority over project direction and approvals.
