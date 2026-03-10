# Generate Secondary Software

## Task Overview
创建 GDD 第 11 章「配套工具与二级软件」，包括编辑器插件、构建脚本、资产管线工具、可视化与调试工具。

## Objective
明确非游戏运行时的软件支持体系，保障生产效率与质量。

## Prerequisites
- 技术架构与资产管线定义
- 构建与部署流程
- 团队工具链现状

## Inputs Required
- 编辑器/引擎版本与插件清单
- 构建脚本与 CI/CD 要求
- 资产处理工具与格式转换器
- 调试与监控工具需求

## Agent Workflow

### Primary Agent: technical-designer
**Command**: `define-secondary-software`
**Duration**: 45-60 分钟

#### Process Steps:
1. 列出工具类型与用途（编辑器、脚本、管线、监控）
2. 明确接口与数据格式（输入/输出/元数据）
3. 规定安装、版本与维护策略
4. 定义使用流程与权限控制
5. 定义资产命名/元数据/媒体档位的自动化校验与报告输出

## Deliverables
### Output: 11_Secondary Software.md
包含工具清单、接口规范、安装与维护策略、使用流程。

## Success Criteria
- [ ] 工具链覆盖生产关键路径
- [ ] 接口与数据格式标准化
- [ ] 安装维护流程清晰可执行
- [ ] 与 BMAD 管线兼容

## References
- [GDD Master Template README](file:///e:/workspace/BMad-Expansion-Pack-game-gdd-generator/references/GDDMarkdownTemplate/README.md)
