# ------------------------------------------------------------
# 2. Build Game World
# ------------------------------------------------------------
---
task:
  id: build-game-world
  name: Build Game World
  description: Create a comprehensive game world guide covering environments, gameplay systems, lore, and level design.
  persona_default: game-world-designer
inputs:
  - game-concept-brief.md
steps:
  - Summarize key gameplay themes from concept.
  - Draft Game World Guide using game-world-guide-tmpl.
  - Execute tasks#advanced-elicitation.
output: game-world-guide.md
...
