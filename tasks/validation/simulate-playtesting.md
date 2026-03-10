# ------------------------------------------------------------
# Simulate Playtesting
# ------------------------------------------------------------
---
task:
  id: simulate-playtesting
  name: Simulate Playtesting
  description: Analyze game design from multiple player perspectives to identify potential issues.
  persona_default: playtesting-simulator
inputs:
  - mechanics-documentation.md
  - game-design-outline.md
steps:
  - Simulate different player types and skill levels.
  - Identify potential confusion points and difficulty spikes.
  - Evaluate learning curve and progression pacing.
  - Generate feedback from multiple player personas.
output: simulated-playtest-results.md
...