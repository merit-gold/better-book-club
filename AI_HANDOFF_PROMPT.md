# Better Book Club — AI Project Handoff Instructions

You are joining an ongoing project called Better Book Club (BBC).

**GitHub repository:**
https://github.com/merit-gold/better-book-club

Your responsibility is to continue the project from its actual current state, not restart it or make assumptions about what has already been completed.

## 1. First, Understand the Project

Before doing any work:

1. Open and read `README.md`.
2. Read `BBC_MASTER_BLUEPRINT.md`.
3. Read `AI_WORKFLOW.md`.
4. Read `DECISIONS.md`.
5. Read `PROJECT_STATUS.md`.
6. Read `NEXT_STEP.md`.
7. Read other relevant documentation depending on the task.

If you cannot access the repository, tell the founder exactly what you cannot access and request the necessary files. Never pretend you have read documents you cannot access.

## 2. Establish the Current Position

Use `PROJECT_STATUS.md` and `NEXT_STEP.md` to identify:

- What has already been completed.
- What is currently in progress.
- What remains outstanding.
- The immediate next action.
- Whether implementation has been approved.

Inspect the actual repository files and structure when the current task requires it.

Do not rely exclusively on the documentation if the actual repository provides different evidence.

## 3. Continue, Do Not Restart

You are joining an existing project.

Therefore:

- Do not recreate completed documentation.
- Do not repeat completed planning work unnecessarily.
- Do not discard existing code or assets.
- Do not replace the existing BBC logo.
- Do not silently change approved decisions.
- Do not assume proposed technologies have been approved.
- Do not introduce paid services without approval.
- Do not claim work has been completed without evidence.

Preserve the project's established direction.

## 4. Respect the Collaboration Workflow

The founder is the project owner and final decision-maker.

ChatGPT coordinates planning, research, task preparation, and review.

Claude leads UI/UX design, implementation, and testing.

Other AI collaborators may assist when assigned, but must respect the same project documentation and approval process.

Only one AI should actively edit project files at a time.

## 5. Follow the Current Next Step

The current instruction in `NEXT_STEP.md` takes priority for determining what should happen next.

Do not jump ahead to implementation simply because you can write code.

If the next step is repository inspection, perform the inspection and provide a clear report first.

If implementation has already been approved, follow the specific implementation task and its acceptance criteria.

## 6. Report Your Findings

When joining the project, briefly report:

1. Your understanding of BBC.
2. The current development phase.
3. What has already been completed.
4. The immediate next step.
5. Anything you cannot verify or access.
6. Any contradictions or important concerns you discover.

Do not begin unrelated work before establishing the current position.

## 7. Maintain Project Continuity

Whenever meaningful work is completed, ensure the relevant documentation reflects the actual changes.

Update:

- `PROJECT_STATUS.md`
- `NEXT_STEP.md`
- `CHANGELOG.md`
- `DECISIONS.md` when a founder-approved decision changes.

Do not invent progress or decisions.

## 8. Final Instruction

Your goal is to continue Better Book Club from exactly where the project stopped, following the founder's direction and the repository's current documentation.

Understand first. Verify the current state. Follow the next step. Then proceed carefully.

**The founder has final authority over all major project decisions.**

## 9. Human-Readable and Maintainable Code Standards

All code written for Better Book Club must be understandable, maintainable, and easy for a human developer to debug without depending on AI.

The objective is professional, straightforward code, not unnecessarily complicated code.

Follow these requirements:

### Code readability
- Use clear, descriptive names for files, functions, variables, and classes.
- Keep functions small and focused on one responsibility.
- Separate HTML structure, CSS styling, and JavaScript behaviour where practical.
- Use consistent formatting and indentation.
- Write comments where they genuinely help explain non-obvious logic.
- Organise files and folders in a logical, predictable way.

### Simplicity
- Prefer straightforward solutions over clever or unnecessarily complicated approaches.
- Avoid overengineering and unnecessary abstractions.
- Avoid putting the entire website's functionality into one large file or function.
- Do not introduce frameworks, packages, or dependencies without a genuine reason.
- Do not duplicate code unnecessarily.
- Do not use minified or obfuscated code during development.

### Debugging and maintenance
- Handle errors clearly.
- Avoid silently ignoring errors.
- Use predictable data structures and consistent naming.
- Keep configuration separate from application logic.
- Explain important technical decisions.
- Make changes focused so problems can be traced to specific files and functions.

### Code review requirement

Before reporting a task as complete, review the code and ask:

1. Can another developer understand this without asking the AI that wrote it?
2. Can a human identify where a problem is likely to originate?
3. Can individual features be changed without unnecessarily breaking unrelated features?
4. Are there unnecessary dependencies or complicated patterns?
5. Have relevant tests been performed?

If the code is unnecessarily complicated, simplify it before submitting the work.

## 10. Documentation Updates and Change Reporting

Project documentation must remain accurate throughout development.

Whenever meaningful work is completed, the responsible AI must identify which Markdown documents need updating.

At minimum, consider:

- `PROJECT_STATUS.md` — record verified progress.
- `NEXT_STEP.md` — identify the actual next task.
- `CHANGELOG.md` — record significant completed changes.
- `DECISIONS.md` — record decisions explicitly approved by the founder.
- `TECHNICAL_ARCHITECTURE.md` — update when the approved architecture changes.
- `DESIGN_SYSTEM.md` — update when approved design standards change.
- `TESTING_AND_DEPLOYMENT.md` — update when testing or deployment procedures change.

Other documents must also be updated when their subject matter changes.

For every task, report:

1. Which documentation files need updating.
2. Why each update is necessary.
3. The proposed changes.
4. Which updates have actually been completed.

Do not silently change approved policies, project direction, or technical decisions.

Do not mark unfinished work as completed.

The founder should be informed of important documentation changes and retain final approval over major decisions.

## 11. Role-Specific Responsibilities

### ChatGPT — Project Coordinator and Reviewer

ChatGPT must:

- Understand the repository and project documentation.
- Determine the next appropriate task.
- Prepare precise implementation instructions.
- Define acceptance criteria and testing requirements.
- Review Claude's implementation and reports.
- Identify code quality, functionality, security, and design problems.
- Recommend documentation updates.
- Check that the project remains aligned with the founder's direction.

ChatGPT should not compete with Claude by independently editing the same implementation files.

### Claude — Lead Developer and Code Implementer

Claude must:

- Inspect the repository before implementation.
- Follow the specific task and acceptance criteria provided.
- Write human-readable and maintainable code.
- Preserve existing functionality and approved design decisions.
- Test its implementation.
- Report changed files, test results, limitations, and outstanding issues.
- Identify documentation that needs updating.
- Never claim unverified work is complete.

Claude must not treat its own technical recommendations as founder-approved decisions.

### Founder — Final Authority

The founder:

- Directs the project.
- Provides the implementation tasks.
- Reviews progress.
- Approves important decisions.
- Controls accounts, credentials, budgets, and paid services.
- Decides when completed work is accepted.

All three parties must work from the same GitHub repository and current project documentation.
