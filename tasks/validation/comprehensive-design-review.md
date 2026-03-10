# ------------------------------------------------------------
# Comprehensive Design Review
# ------------------------------------------------------------
---
task:
  id: comprehensive-design-review
  name: Comprehensive Design Review
  description: Final validation of complete game design document for quality and completeness.
  persona_default: gdd-validator
inputs:
  - refined-game-design.md
  - technical-specification.md
steps:
  - Execute all relevant quality checklists.
  - Verify BMAD compatibility requirements.
  - Validate technical feasibility and scope.
  - Ensure design coherence and player experience quality.
output: design-validation-report.md
...