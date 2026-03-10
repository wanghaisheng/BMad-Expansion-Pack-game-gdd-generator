# Generate Copyright Information

## Task Overview
创建 GDD 第 1 章「版权与法律信息」，包含版权声明、许可、商标、法律合规与使用限制。

## Objective
生成标准化且可被 BMAD 工作流接收的版权与法律章节，为后续交付合规提供依据。

## Prerequisites
- 项目名称、公司/团队信息、版权主体与年份
- 资产来源与许可清单（第三方库、字体、音频、图像等）
- 平台合规与地区法律要求（如 GDPR、COPPA）

## Inputs Required
- 项目基础信息与法律联系人
- 资产清单与许可类型
- 平台与地区目标市场

## Agent Workflow

### Primary Agent: gdd-formatter
**Command**: `create-copyright-section`
**Duration**: 30-45 分钟

#### Process Steps:
1. 汇总版权主体与声明文本
2. 列出第三方资产许可与使用范围
3. 标注商标与品牌使用规范
4. 列出适用的法律与合规条款

## Deliverables
### Output: 1_Copyright Information.md
包含版权声明、许可与合规说明、商标与使用限制。

## Success Criteria
- [ ] 版权主体与年份明确
- [ ] 第三方许可完整且规范
- [ ] 合规条款覆盖目标市场
- [ ] 文本可直接发布与交付

## References
- [GDD Master Template README](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/references/GDDMarkdownTemplate/README.md)
