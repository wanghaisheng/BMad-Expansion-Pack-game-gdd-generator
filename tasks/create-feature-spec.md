# ------------------------------------------------------------
# 4. Create Game Feature Specification
# ------------------------------------------------------------
---
task:
  id: create-feature-spec
  name: Create Game Feature Specification
  description: Design a complete game feature using the game-feature-spec-tmpl.
  persona_default: mechanics-specialist
inputs:
  - game-design-outline.md | level-design-list.md | feature-requirements.md
parameters:
  feature_name: string
steps:
  - Extract feature requirements and mechanics.
  - Draft feature specification using template placeholders.
  - Highlight implementation complexity for technical review.
output: feature-{{feature_name}}-spec.md
...
