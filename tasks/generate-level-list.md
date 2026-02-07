# ------------------------------------------------------------
# 10. Generate Level Design List
# ------------------------------------------------------------
---
task:
  id: generate-level-list
  name: Generate Level Design List
  description: Break game design into a numbered list of levels/areas.
  persona_default: game-systems-architect
inputs:
  - game-design-outline.md | game-world-guide.md
steps:
  - Identify key gameplay progression points.
  - Fill level-design-list-tmpl table.
output: level-design-list.md
...
