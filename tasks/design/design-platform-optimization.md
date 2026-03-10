# ------------------------------------------------------------
# Design Platform Optimization
# ------------------------------------------------------------
---
task:
  id: design-platform-optimization
  name: Design Platform Optimization
  description: Create platform-specific optimization strategies and adaptations for target platforms.
  persona_default: mobile-game-specialist
inputs:
  - game-concept-brief.md
  - technical-specification.md
parameters:
  target_platform: string
steps:
  - Analyze platform-specific technical constraints and opportunities.
  - Design platform-optimized control schemes and interactions.
  - Create platform-specific UI/UX adaptations.
  - Plan performance optimization strategies.
  - Design platform-specific features and integrations.
  - Develop platform compliance and certification requirements.
output: platform-optimization-plan.md
...