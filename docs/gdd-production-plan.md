# GDD 文档生产规划（符合 GDDMarkdownTemplate 标准）

## 目标
- 生产完整的 13 个 GDD 章节 Markdown 文件，符合 [GDDMasterTemplate 结构说明](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/references/GDDMarkdownTemplate/README.md)。
- 以现有 templates、tasks、workflows、checklists、agents 为生产管线，补齐缺失章节。

## 交付物结构（文件命名）
- 1_Copyright Information.md
- 2_Version History.md
- 3_Game Overview.md
- 4_Gameplay and Mechanics.md
- 5_Story, Setting and Character.md
- 6_Levels.md
- 7_Interface.md
- 8_Artificial Intelligence.md
- 9_Technical.md
- 10_Game Art.md
- 11_Secondary Software.md
- 12_Management.md
- 13_Appendices.md

## 现有资源映射
- Game Overview → 结合 [game-concept-brief-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/core/game-concept-brief-tmpl.yaml)、[game-design-outline-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/core/game-design-outline-tmpl.yaml)、[comprehensive-gdd-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/core/comprehensive-gdd-tmpl.yaml)
- Gameplay and Mechanics → [game-feature-spec-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/technical/game-feature-spec-tmpl.yaml)、tasks 中各类设计任务如 [design-core-mechanics.md](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/tasks/design/design-core-mechanics.md)
- Story/Setting/Character → [game-world-guide-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/specialized/game-world-guide-tmpl.yaml)、[character-design-profile-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/specialized/character-design-profile-tmpl.yaml)、[design-game-narrative.md](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/tasks/design/design-game-narrative.md)
- Levels → [level-design-list-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/technical/level-design-list-tmpl.yaml)、[generate-level-list.md](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/tasks/generation/generate-level-list.md)
- Interface → [ui-ux-specification-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/specialized/ui-ux-specification-tmpl.yaml)、[design-ui-ux-systems.md](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/tasks/design/design-ui-ux-systems.md)
- Technical → [technical-architecture-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/technical/technical-architecture-tmpl.yaml)、[mobile-game-spec-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/templates/technical/mobile-game-spec-tmpl.yaml)、[generate-technical-specification.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/generation/generate-technical-specification.md)
- Game Art → [game-art-brief-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/specialized/game-art-brief-tmpl.yaml)、[create-art-style-guide.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/planning/create-art-style-guide.md)
- Monetization/LiveOps/Market（辅助）→ [monetization-strategy-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/business/monetization-strategy-tmpl.yaml)、[live-operations-strategy-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/business/live-operations-strategy-tmpl.yaml)、[market-analysis-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/business/market-analysis-tmpl.yaml)
- 可访问性/文化适配（质量与文化）→ [accessibility-plan-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/technical/accessibility-plan-tmpl.yaml)、[cultural-adaptation-tmpl.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/templates/technical/cultural-adaptation-tmpl.yaml)
- 综合 GDD 工作流 → [gdd-generator-master-workflow.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/workflows/development-focused/gdd-generation-workflow.yaml)、[comprehensive-gdd-creation.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/workflows/comprehensive/comprehensive-gdd-creation.yaml)

## 缺失与需新增
- 1_Copyright Information.md（缺）
- 2_Version History.md（缺）
- 8_Artificial Intelligence.md（缺）
- 11_Secondary Software.md（缺）
- 12_Management.md（缺少项目管理与运营整合）
- 13_Appendices.md（需资产与参考索引，参考 [13_Appendices.md](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/references/GDDMarkdownTemplate/docs/13_Appendices.md)）

## 任务规划（后续实现）
- 新增任务：generate-copyright.md → 生成 1 章
- 新增任务：generate-version-history.md → 生成 2 章
- 新增任务：generate-ai-spec.md → 生成 8 章
- 新增任务：generate-secondary-software.md → 生成 11 章
- 新增任务：generate-management-plan.md → 生成 12 章
- 新增任务：generate-appendices.md → 生成 13 章（含资产清单与元数据）
- 更新模板：在现有 YAML 模板中补充交付字段，确保与 13 章结构一致
- 工作流更新：在 [gdd-generation-workflow.yaml](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/workflows/development-focused/gdd-generation-workflow.yaml) 中串联新增任务，统一输出到 deliverables 目录

## 生产流程
- 选择工作流 → 执行对应 tasks → 应用 templates → 通过 checklists 质检 → 产出 13 章 Markdown
- 质量把关：使用 [comprehensive-quality-checklist.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/checklists/comprehensive/comprehensive-quality-checklist.md)、[game-design-structure-checklist.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/checklists/design-quality/game-design-structure-checklist.md)、[bmad-compatibility-checklist.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/checklists/technical-quality/bmad-compatibility-checklist.md)

## 产出路径约定
- deliverables/<project-name>/GDD/<version>/（集中保存 13 文件）
- 参考附加指南：如 [gdd_deliverable_structure.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/references/GDDMarkdownTemplate/templates/guides/gdd_deliverable_structure.md)

## 角色分工（agents）
- 设计架构类：game-systems-architect、player-experience-designer、game-world-designer
- 领域类：mechanics-specialist、ui-ux-designer、audio-designer、game-narrative-designer 等
- 平台与类型类：mobile-game-specialist、pc-console-specialist、vr-ar-specialist 等
- 商业与运营类：monetization-designer、liveops-designer、market-analyst
- 质量类：gdd-reviewer、gdd-validator、playtesting-simulator、accessibility-specialist

## 非核心与辅助说明
- tasks 中的性能/平台优化（如 [optimize-web-performance.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/planning/optimize-web-performance.md)、[optimize-mobile-experience.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/planning/optimize-mobile-experience.md)）为 Technical 章节的辅助输入，不直接生成章节文件
- 其他创意工作坊与评审类任务（如 [workshop-game-mechanics.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/design/workshop-game-mechanics.md)、[comprehensive-design-review.md](file:///e:/workspace/BMad-Expansion-Pack/game-gdd-generator/tasks/validation/comprehensive-design-review.md)）作为过程性支持，归类为生产辅助
