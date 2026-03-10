# ------------------------------------------------------------
# Create Technical Specification
# ------------------------------------------------------------
---
task:
  id: create-technical-specification
  name: Create Technical Specification
  description: Generate detailed technical requirements and architecture recommendations for game implementation.
  persona_default: technical-designer
inputs:
  - game-design-outline.md
  - game-world-guide.md
steps:
  - Analyze gameplay requirements and complexity.
  - Define performance targets and platform constraints.
  - Recommend engine/framework and technical architecture.
  - Specify asset pipeline and optimization requirements.
output: technical-specification.md
...