# ------------------------------------------------------------
# Create Cultural Adaptation
# ------------------------------------------------------------
---
task:
  id: create-cultural-adaptation
  name: Create Cultural Adaptation
  description: Develop culturally appropriate game content and localization strategy for target regions.
  persona_default: eastern-game-designer
inputs:
  - game-concept-brief.md
  - game-world-guide.md
parameters:
  target_culture: string
steps:
  - Research target culture's gaming preferences and sensitivities.
  - Adapt game themes and content for cultural appropriateness.
  - Design culturally relevant characters and narratives.
  - Plan visual and audio cultural adaptations.
  - Create cultural localization guidelines.
  - Develop cultural sensitivity review process.
output: cultural-adaptation-plan.md
...