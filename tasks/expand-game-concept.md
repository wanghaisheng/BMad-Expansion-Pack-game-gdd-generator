# ------------------------------------------------------------
# 7. Expand Game Concept (Design Step 2)
# ------------------------------------------------------------
---
task:
  id: expand-game-concept
  name: Expand Game Concept
  description: Turn a 1‑sentence game idea into a 1‑paragraph game concept summary.
  persona_default: game-systems-architect
inputs:
  - game-concept.txt
steps:
  - Ask for platform and genre confirmation.
  - Draft one paragraph (~5 sentences) covering player role, core mechanics, challenge.
output: game-concept-paragraph.md
...
