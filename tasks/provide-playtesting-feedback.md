# ------------------------------------------------------------
# 5. Provide Playtesting Feedback
# ------------------------------------------------------------
---
task:
  id: provide-playtesting-feedback
  name: Provide Playtesting Feedback
  description: Simulate playtester feedback using playtesting-feedback-form-tmpl.
  persona_default: playtesting-simulator
inputs:
  - game-design-document.md | feature-spec.md
steps:
  - Analyze provided game design.
  - Fill playtesting feedback form objectively.
  - Save as playtest-notes.md or feature-playtest-notes.md.
output: playtest-notes.md
...
