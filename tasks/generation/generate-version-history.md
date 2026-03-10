# Generate Version History

## Task Overview
创建 GDD 第 2 章「文档版本与审批记录」，包含版本迭代、审批人、日期与变更摘要。

## Objective
提供可追踪的文档历史与审批信息，支撑审计合规与团队协作。

## Prerequisites
- 初始版本定义与变更流程
- 审批角色与签署方式
- 文档托管与标签规范

## Inputs Required
- 当前版本与变更说明
- 审批人列表与审批状态
- 关联任务或工单链接

## Agent Workflow

### Primary Agent: gdd-formatter
**Command**: `create-version-history`
**Duration**: 20-30 分钟

#### Process Steps:
1. 建立版本表（版本号、日期、作者/审批、摘要）
2. 记录主要变更与影响范围
3. 链接相关工作流与任务
4. 定义下次版本里程碑

## Deliverables
### Output: 2_Version History.md
包含版本记录表、审批信息、变更摘要与里程碑。

## Success Criteria
- [ ] 版本记录清晰完整
- [ ] 审批信息可追踪
- [ ] 变更摘要聚焦影响
- [ ] 与工作流信息连通

## References
- [GDD Master Template README](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/references/GDDMarkdownTemplate/README.md)
