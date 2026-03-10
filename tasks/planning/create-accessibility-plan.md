# ------------------------------------------------------------
# Create Accessibility Plan
# ------------------------------------------------------------
---
task:
  id: create-accessibility-plan
  name: Create Accessibility Plan
  description: Develop comprehensive accessibility features and inclusive design strategy for the game.
  persona_default: accessibility-specialist
inputs:
  - game-design-outline.md
  - ui-system-design.md
steps:
  - Assess accessibility requirements for target audience.
  - Design visual accessibility features (colorblind support, contrast, text size).
  - Plan auditory accessibility features (subtitles, visual feedback).
  - Create motor accessibility options (control customization, input alternatives).
  - Design cognitive accessibility supports (simplified UI, clear navigation).
  - Develop accessibility testing and validation plan.
output: accessibility-plan.md
...