# BMad GDD Generator 使用步骤（Step by Step）

## 1. 安装与放置
1. 确认已安装并可用的 BMad Method（v1.0+）。
2. 将本扩展包放入 `bmad-method/expansion-packs/bmad-gdd-generator/`。
3. 确保扩展包根目录包含 `config.yaml`、`agents/`、`tasks/`、`templates/`、`workflows/`、`checklists/`、`data/`。

## 2. 选择工作流
1. 基础完整产出：使用 `workflows/comprehensive/comprehensive-gdd-creation.yaml`。
2. 高效出稿：使用 `workflows/comprehensive/streamlined-gdd-workflow.yaml`。
3. 模块化组装：使用 `workflows/comprehensive/modular-gdd-generation.yaml`。

## 3. 准备输入素材
1. 明确项目名称、类型、目标平台、目标用户。
2. 准备核心设定：玩法核心、世界观、核心体验、商业目标。
3. 如需跨文化或平台优化，整理对应市场与平台约束。

## 4. 执行工作流步骤
1. 按工作流内的 agent 顺序执行任务。
2. 每个任务输出一个结构化文档或章节草案。
3. 将上一步输出作为下一步输入，保持信息一致。

## 5. 使用模板产出章节
1. 在 `templates/` 目录中选择对应模板填充内容。
2. 关键模板：`templates/core/gdd-master-template.yaml`、`templates/core/comprehensive-gdd-tmpl.yaml`、`templates/core/game-design-outline-tmpl.yaml`。
3. 章节输出建议对应 GDD 13 章结构。

## 6. 质量检查与验证
1. 使用 `checklists/` 中的质量清单进行复核。
2. 推荐组合：`checklists/comprehensive/comprehensive-quality-checklist.md`、`checklists/design-quality/game-design-structure-checklist.md`、`checklists/technical-quality/bmad-compatibility-checklist.md`。
3. 通过 `gdd-reviewer` 与 `gdd-validator` 完成一致性与可行性验证。

## 7. 交付物整理
1. 按模板输出为 Markdown 章节文件。
2. 建议路径：`deliverables/<project-name>/GDD/<version>/`。
3. 统一命名：`1_Copyright Information.md` 至 `13_Appendices.md`。

## 8. 复盘与迭代
1. 根据评审反馈修订关键章节。
2. 重新运行受影响的任务与模板。
3. 更新版本历史与交付索引。
