# Generate GDD Foundation

## Task Overview
Create the foundational structure and core content for a Game Design Document using the GDD Master Template.

## Objective
Establish the essential framework and core sections of a GDD that will serve as the foundation for all subsequent design work.

## Prerequisites
- Game concept or initial idea
- Target platform preferences
- Basic understanding of target audience
- Business objectives (if applicable)

## Inputs Required
- **Game Concept**: Initial game idea, genre, or inspiration
- **Target Platforms**: Intended platforms (mobile, PC, console, web)
- **Audience Intent**: General target audience or player type
- **Project Scope**: Rough timeline and team size expectations
- **Business Goals**: Commercial vs. portfolio vs. experimental project

## Agent Workflow

### Primary Agent: game-systems-architect
**Command**: `create-brief`
**Duration**: 30-45 minutes

#### Process Steps:
1. **Concept Refinement**
   - Transform initial idea into clear game concept
   - Identify core player fantasy and experience
   - Define primary genre and sub-genres
   - Establish unique selling proposition

2. **Foundation Structure**
   - Create GDD document structure using master template
   - Initialize all required sections with placeholders
   - Set up cross-references and dependencies
   - Establish terminology and style guidelines

3. **Core Vision Definition**
   - Write compelling one-sentence game pitch
   - Expand into detailed concept paragraph
   - Define game pillars (3-5 core design principles)
   - Establish success criteria and vision statement

### Supporting Agent: market-analyst
**Command**: `market-research`
**Duration**: 45-60 minutes

#### Process Steps:
1. **Quick Market Validation**
   - Identify similar games and market position
   - Assess market size and opportunity
   - Validate target audience assumptions
   - Identify key competitive differentiators

2. **Audience Refinement**
   - Define primary and secondary audiences
   - Create basic player personas
   - Identify platform preferences and behaviors
   - Establish monetization preferences

## Deliverables

### Primary Output: Game Overview Document
**Filename**: `{{game_title}}_Game_Overview.md`

```markdown
# {{Game Title}} - Game Overview
**Document Type**: Game Design Document - Game Overview Section  
**Version**: 1.0  
**Date**: {{current_date}}  
**Agent**: game-systems-architect  
**Status**: Foundation Complete  

## Related Documents
- [Core Gameplay Design]({{game_title}}_Core_Gameplay.md) - *Depends on this document*
- [Player Experience Design]({{game_title}}_Player_Experience.md) - *Depends on this document*
- [Technical Specifications]({{game_title}}_Technical_Specifications.md) - *References this document*
- [GDD Index]({{game_title}}_GDD_Index.md) - *Navigation and overview*

## Executive Summary
- Game concept and vision
- Target audience and platforms
- Unique selling points
- Development scope overview

## Game Concept
### Core Vision
- One-sentence game pitch
- Expanded concept description (3-4 paragraphs)
- Player fantasy and core experience
- Genre classification and positioning

### Game Pillars
1. **[Pillar Name]**: Description and design implications
2. **[Pillar Name]**: How this guides all decisions
3. **[Pillar Name]**: Examples in gameplay and systems

### Unique Selling Points
- Primary differentiator from competition
- Secondary unique features
- Market positioning advantages
- Player value proposition

## Target Audience
### Primary Audience
- Demographics (age, platform, experience level)
- Psychographics (motivations, preferences, behaviors)
- Gaming habits and session patterns
- Spending patterns and monetization preferences

### Secondary Audiences
- Additional market segments
- Cross-over appeal opportunities
- Accessibility considerations
- International market potential

## Platform Strategy
### Target Platforms
- Primary platform with rationale
- Secondary platform considerations
- Platform-specific feature utilization
- Cross-platform compatibility approach

### Technical Approach Overview
- High-level technology choices
- Performance expectations
- Development complexity assessment
- Platform constraint considerations

## Market Context
### Competitive Landscape
- Direct competitors and positioning
- Indirect competition and market share
- Market gaps and opportunities
- Competitive advantages and risks

### Business Objectives
- Commercial vs. portfolio goals
- Success metrics and KPIs
- Revenue expectations and timeline
- Long-term franchise potential

## Next Steps
### Agent Handoffs
- **mechanics-specialist**: Receives game concept and pillars for detailed mechanics design
- **market-analyst**: Receives concept for comprehensive market validation
- **player-experience-designer**: Receives audience profiles for UX design

### Dependencies Created
- Game concept serves as foundation for all subsequent design
- Target audience profiles guide all player-facing decisions
- Platform strategy constrains technical and design choices
- Market context informs business and monetization decisions

---
**Validation Checklist**:
- [ ] Game concept is clear, compelling, and differentiated
- [ ] Target audience is specific and validated
- [ ] Platform strategy is realistic and well-reasoned
- [ ] Market positioning is defensible and opportunity-focused
- [ ] All information needed by downstream agents is present
```

### Secondary Outputs:
- **Agent Workflow Plan**: `{{game_title}}_Agent_Workflow.md`
- **Terminology Glossary**: `{{game_title}}_Glossary.md`
- **Quality Checklist**: `{{game_title}}_Foundation_Quality_Checklist.md`

## Success Criteria
- [ ] Clear, compelling game concept that differentiates from competition
- [ ] Well-defined target audience with validated market opportunity
- [ ] Complete GDD structure with all required sections outlined
- [ ] Agent workflow plan with clear handoffs and dependencies
- [ ] Foundation content provides sufficient context for specialized agents

## Quality Gates
1. **Concept Clarity**: Game concept is understandable and compelling
2. **Market Validation**: Target audience and market opportunity confirmed
3. **Structure Completeness**: All required GDD sections identified and outlined
4. **Agent Readiness**: Clear instructions and context for subsequent agents

## Integration Points

### Handoff to Next Agents:
- **mechanics-specialist**: Receives game concept and pillars for mechanics design
- **player-experience-designer**: Receives audience profiles and vision for UX design
- **game-narrative-designer**: Receives concept and world context for story design
- **technical-designer**: Receives platform strategy and scope for technical planning

### Data Formats:
- **Game Concept**: Structured markdown with clear sections
- **Audience Profiles**: YAML format for easy agent consumption
- **Market Data**: JSON format with quantified metrics
- **Agent Instructions**: Markdown with specific commands and expected outputs

## Common Pitfalls to Avoid
- Creating overly complex or ambitious concepts
- Insufficient market validation leading to unrealistic expectations
- Vague or generic game concepts that lack differentiation
- Missing critical information needed by downstream agents
- Inconsistent terminology or conflicting design principles

## BMAD Compatibility Requirements
- Document structure must follow GDD Master Template
- All sections must include agent assignment and command specification
- Data formats must be compatible with downstream agent expectations
- Quality gates must align with BMAD validation requirements
- Handoff specifications must be clear and actionable

## Timeline Considerations
- Foundation creation: 1-2 hours total
- Market validation: Can run in parallel with concept development
- Structure setup: 30 minutes for template application
- Quality review: 15-30 minutes for validation
- Agent briefing: 15 minutes to prepare handoff instructions

## Success Metrics
- **Concept Strength**: Clear differentiation and compelling player fantasy
- **Market Viability**: Validated audience and realistic market opportunity
- **Structure Quality**: Complete, logical GDD framework
- **Agent Readiness**: Clear instructions and context for next phases
- **BMAD Compatibility**: Proper format and integration specifications