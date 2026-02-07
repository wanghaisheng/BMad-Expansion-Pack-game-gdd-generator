# ------------------------------------------------------------
# Game Design Review Task
# ------------------------------------------------------------
---
task:
  id: game-design-review
  name: Game Design Review
  description: Comprehensive professional critique using game-design-review-tmpl and quality checklist.
  persona_default: gdd-validator
inputs:
  - game design document file (e.g., final-gdd.md or feature-spec.md)
steps:
  - If target platform/audience not provided, prompt user for details.
  - Read game design document for holistic understanding.
  - Fill **game-design-review-tmpl** with category scores and commentary.
  - Execute **checklists/game-design-quality-checklist** to spot omissions; revise output if any boxes unchecked.
  - Present final review to user.
output: game-design-review.md
...
