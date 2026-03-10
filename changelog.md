# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Documentation
- **New Architecture Definition**: Introduced the "Agent First Game Dev Stack" concept, defining a 3-layer architecture:
  - **Protocol Layer**: Open Game Design Document Template.
  - **Planning Layer**: GDD Generator (this repository).
  - **Builder Layer**: BMAD Game Dev.
- **New Documents**:
  - Added `AGENT_FIRST_GAME_DEV_STACK.md` and `AGENT_FIRST_GAME_DEV_STACK_ZH.md` providing a comprehensive overview of the full stack solution.
  - Added `SYSTEM_OVERVIEW.md` (English version) to complement the existing Chinese system overview.
  - Added `FOLDER_STRUCTURE.md` with comprehensive documentation of the new modular folder organization.
- **Updates**:
  - Updated `agent-first-game-dev.md` with deep analysis of the "Agent-first" vs "AI-first" paradigm and detailed stack solution.
  - Updated `README.md` and `README_ZH.md` to clearly position the project as the "Planning Layer" within the ecosystem.
  - Clarified support for client engines (Phaser, Godot, Unity, Cocos, Unreal) and AI environments (Cursor, Claude Code, OpenAI Codex) across all documentation.
  - Added "Value & Gap" section to architecture documents to discuss democratization, rapid iteration, and current technical challenges.

### Project Structure
- **Major Reorganization**: Restructured all core directories into modular subfolders for better organization and maintainability:
  - **agents/**: Organized by domain expertise (core-design, genre-specialists, platform-specialists, cultural-specialists, business-specialists, ux-specialists, quality-assurance)
  - **checklists/**: Categorized by type (comprehensive, genre-specific, platform-specific, design-quality, cultural-adaptation, technical-quality, business-viability)
  - **workflows/**: Grouped by purpose (comprehensive, genre-specific, platform-specific, cultural-specific, business-model, development-focused)
  - **tasks/**: Organized by function (generation, design, analysis, planning, validation)
  - **templates/**: Sorted by type (core, specialized, business, technical)
- **Path Updates**: Updated all internal references and dependencies across agents and workflows to match new folder structure
- **Configuration Updates**: Updated `config.yaml` with accurate component counts reflecting the expanded system
- **Utility Scripts**: Added `utils/update-references.mjs` for automated path reference management
