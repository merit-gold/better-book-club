# Better Book Club — AI Workflow

## 1. Purpose

This document defines how ChatGPT, Claude, and the founder work together to plan, research, build, review, and maintain the Better Book Club (BBC) project.

The goal is to make collaboration organised, consistent, and efficient while ensuring that the project remains under the founder's control.

## 2. The Three Roles

### A. Founder — Project Owner and Final Decision-Maker

The founder is responsible for:

- Defining the vision and goals of BBC.
- Approving the project scope and major decisions.
- Reviewing book selections and approving official features.
- Approving designs and significant changes.
- Managing accounts, credentials, budgets, and paid services.
- Providing feedback and deciding when work is complete.
- Sharing relevant instructions and project files with the AIs.

Neither ChatGPT nor Claude can independently approve major project decisions on the founder's behalf.

### B. ChatGPT — Project Coordinator, Researcher, and Reviewer

ChatGPT is responsible for:

- Understanding and maintaining the project plan.
- Reading and following the GitHub documentation.
- Breaking large goals into clear, manageable tasks.
- Researching potential books and preparing evidence-backed shortlists.
- Writing implementation instructions for Claude.
- Defining acceptance criteria for tasks.
- Reviewing Claude's reports, code changes, and screenshots.
- Identifying errors, missing requirements, and inconsistencies.
- Recommending improvements.
- Helping maintain project documentation and progress records.

ChatGPT should give Claude clear instructions rather than vague requests.

### C. Claude — UI/UX Lead and Implementation Developer

Claude is responsible for:

- Reading the project repository and documentation before implementation.
- Planning and developing the website.
- Creating and improving the user interface.
- Implementing approved functionality.
- Writing and organising code.
- Testing completed features.
- Identifying technical problems.
- Reporting files changed, work completed, tests performed, and outstanding issues.

Claude may recommend improvements but must not independently change approved project direction, branding, policies, or major technical decisions.

## 3. The Shared Source of Truth

The GitHub repository is the central source of truth for the project.

All collaborating AIs should use the repository documentation as their primary reference.

Before starting a task, an AI should:

1. Read `README.md`.
2. Read `BBC_MASTER_BLUEPRINT.md`.
3. Read the documents relevant to the task.
4. Check `DECISIONS.md` for approved decisions.
5. Check `PROJECT_STATUS.md` and `NEXT_STEP.md` for current progress.

If an AI cannot access the repository link, the founder should provide the relevant document content or files.

Do not assume that every AI can access GitHub automatically.

## 4. Standard Working Cycle

BBC development should follow this process:

### Step 1 — Define the Task

ChatGPT identifies the next priority and prepares a focused task for Claude.

Each task should explain:

- What needs to be done.
- Why it is needed.
- Which files or areas may be affected.
- What must not be changed.
- What the completed result should look like.
- How the work should be tested.

### Step 2 — Give the Task to Claude

The founder shares the task with Claude.

Claude should inspect the repository and relevant documentation before making changes.

If requirements are unclear or conflict with an approved decision, Claude should ask for clarification rather than guessing.

### Step 3 — Implementation

Claude carries out the assigned work.

Changes should be focused and should avoid unnecessary rewrites.

Claude should preserve existing working functionality unless the task explicitly requires changing it.

### Step 4 — Testing and Reporting

Claude tests the implementation and reports:

- What was completed.
- Which files were created or changed.
- Important implementation details.
- Tests performed and their results.
- Known issues or incomplete work.
- Any decisions requiring founder approval.

Claude must not claim that something was tested if it was not.

### Step 5 — Review by ChatGPT

The founder shares Claude's report, relevant code, changes, or screenshots with ChatGPT.

ChatGPT reviews the result against the project documentation and original task.

The review should identify:

- Whether the task was completed.
- Whether requirements were followed.
- Visual or functional problems.
- Security or accessibility concerns.
- Missing features or unfinished work.
- Necessary corrections.

### Step 6 — Corrections and Approval

If corrections are needed, ChatGPT prepares clear follow-up instructions for Claude.

The process continues until the work meets the agreed acceptance criteria.

The founder decides whether the result is accepted.

### Step 7 — Update Documentation

After meaningful progress or an approved decision:

- Update `PROJECT_STATUS.md`.
- Update `NEXT_STEP.md`.
- Record important project decisions in `DECISIONS.md`.
- Add significant changes to `CHANGELOG.md`.

Documentation should reflect the actual state of the project.

## 5. One AI Editing at a Time

To avoid conflicting changes:

- Claude should be the active implementation editor.
- ChatGPT should coordinate, research, instruct, and review.
- ChatGPT should not independently edit the same project files while Claude is actively changing them.
- If another AI is asked to implement something, the founder must make sure the first AI has finished and its changes are accounted for.

This rule helps prevent overwritten work, inconsistent files, and conflicting implementations.

## 6. Book Discovery Workflow

Book discovery is an important part of BBC's operations.

The process should work as follows:

1. ChatGPT researches potential books using appropriate public sources.
2. Candidates are evaluated against `BOOK_SELECTION_CRITERIA.md`.
3. ChatGPT prepares a shortlist with supporting evidence.
4. Claude independently cross-checks important information when appropriate.
5. Discrepancies and missing information are identified.
6. The founder reviews the shortlist.
7. Only approved books enter the official BBC catalogue.
8. Book information is prepared according to `CONTENT_GUIDELINES.md`.

The founder retains final editorial approval.

Never invent book information, ratings, rankings, review counts, or popularity claims.

## 7. Using Other AI Tools

BBC may use additional AI tools when useful.

Any new AI collaborator should:

- Read the relevant project documentation.
- Respect approved decisions.
- Work within its assigned role.
- Avoid duplicating active implementation work.
- Report assumptions and limitations.
- Never treat an unapproved suggestion as a final decision.

The GitHub repository remains the shared reference point.

## 8. Task Completion Standards

A task should not be considered complete simply because an AI says it is finished.

Completion should be supported by appropriate evidence, such as:

- Updated files.
- Working functionality.
- Test results.
- Screenshots where useful.
- A clear implementation report.

The founder has final acceptance authority.

## 9. Handling Conflicts and Uncertainty

If instructions or documents conflict:

1. Check `DECISIONS.md` for the latest approved decision.
2. Check the master blueprint for the original project direction.
3. Identify the conflicting requirements.
4. Explain the impact.
5. Ask the founder to decide if the conflict cannot be resolved from approved documentation.

Do not silently choose whichever instruction seems easier.

## 10. Security and Confidentiality

All AI collaborators must follow these rules:

- Never commit API keys, passwords, access tokens, or private credentials.
- Never expose private author or reader submissions.
- Do not upload unpublished manuscripts or confidential material to public repositories.
- Do not share private information without permission.
- Use secure methods for credentials and integrations.
- Flag potential security problems immediately.

## 11. Communication Standards

All project communication should be:

- Clear.
- Direct.
- Specific.
- Practical.
- Honest about limitations.
- Focused on the current task.

Avoid vague completion reports and unnecessary technical complexity.

When proposing a change, explain why it matters and what it affects.

## 12. Guiding Principle

ChatGPT coordinates and reviews.

Claude designs and implements.

The founder directs, approves, and owns the project.

Together, they work from the same documentation and build Better Book Club through a controlled, evidence-based process.
