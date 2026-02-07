# Modular GDD Evaluation Checklist

## Overview
This checklist provides section-specific evaluation criteria for modular GDD generation, enabling targeted assessment and improvement of individual GDD components.

## How to Use This Checklist
1. **Evaluate Each Section Independently**: Use the appropriate section checklist
2. **Score Each Criterion**: Rate 1-5 (1=Poor, 2=Below Average, 3=Average, 4=Good, 5=Excellent)
3. **Identify Improvement Areas**: Focus on criteria scoring below 4
4. **Provide Specific Feedback**: Note exactly what needs improvement
5. **Track Agent Performance**: Link feedback to specific agent tasks and outputs

---

## Game Overview Section Evaluation
**File**: `{{game_title}}_Game_Overview.md`  
**Agent**: game-systems-architect  
**Command**: create-brief  

### Content Quality Criteria
- [ ] **Game Concept Clarity** (Score: ___/5)
  - One-sentence pitch is compelling and clear
  - Expanded description provides sufficient detail
  - Player fantasy is well-defined and appealing
  - Genre classification is accurate and specific
  - *Improvement Notes*: ________________________________

- [ ] **Game Pillars Definition** (Score: ___/5)
  - 3-5 pillars are clearly defined
  - Each pillar is specific and actionable
  - Pillars guide design decisions effectively
  - Examples demonstrate pillar application
  - *Improvement Notes*: ________________________________

- [ ] **Target Audience Specification** (Score: ___/5)
  - Primary audience demographics are specific
  - Psychographics and motivations are detailed
  - Secondary audiences are identified
  - Accessibility considerations are included
  - *Improvement Notes*: ________________________________

- [ ] **Platform Strategy** (Score: ___/5)
  - Platform choices are well-reasoned
  - Technical approach is realistic
  - Platform constraints are acknowledged
  - Cross-platform considerations are addressed
  - *Improvement Notes*: ________________________________

- [ ] **Market Positioning** (Score: ___/5)
  - Competitive landscape is accurately assessed
  - Unique selling points are compelling
  - Market opportunity is validated
  - Business objectives are clear
  - *Improvement Notes*: ________________________________

### Format and Integration Criteria
- [ ] **Document Structure** (Score: ___/5)
  - Follows template structure correctly
  - Section headers are clear and consistent
  - Cross-references are properly formatted
  - Navigation elements are functional
  - *Improvement Notes*: ________________________________

- [ ] **Agent Handoff Preparation** (Score: ___/5)
  - Provides sufficient context for downstream agents
  - Dependencies are clearly documented
  - Next steps are actionable
  - Data formats are appropriate
  - *Improvement Notes*: ________________________________

**Overall Game Overview Score**: ___/35  
**Pass Threshold**: 28/35 (80%)  
**Status**: [ ] Pass [ ] Needs Improvement [ ] Fail  

---

## Core Gameplay Section Evaluation
**File**: `{{game_title}}_Core_Gameplay.md`  
**Agent**: mechanics-specialist  
**Command**: design-mechanics  

### Content Quality Criteria
- [ ] **Core Loop Design** (Score: ___/5)
  - 30-60 second loop is clearly defined
  - Timing for each phase is specified
  - Loop variations are appropriate
  - Engagement potential is high
  - *Improvement Notes*: ________________________________

- [ ] **Mechanics Specification** (Score: ___/5)
  - Each mechanic is detailed and implementable
  - Player inputs are clearly defined
  - System responses are specific
  - Mechanic interactions are mapped
  - *Improvement Notes*: ________________________________

- [ ] **Progression System** (Score: ___/5)
  - Advancement structure is logical
  - Pacing feels rewarding
  - Unlock gates are meaningful
  - Long-term motivation is sustained
  - *Improvement Notes*: ________________________________

- [ ] **Balance Framework** (Score: ___/5)
  - Mathematical models are provided
  - Scaling functions are defined
  - Testing criteria are established
  - Adjustment mechanisms are specified
  - *Improvement Notes*: ________________________________

- [ ] **Victory/Failure Conditions** (Score: ___/5)
  - Win conditions are clear and achievable
  - Failure states are fair and recoverable
  - Success feedback is meaningful
  - Difficulty scaling is appropriate
  - *Improvement Notes*: ________________________________

### Implementation Readiness Criteria
- [ ] **Technical Specifications** (Score: ___/5)
  - Implementation complexity is assessed
  - Performance implications are considered
  - Platform constraints are acknowledged
  - Integration points are defined
  - *Improvement Notes*: ________________________________

- [ ] **Development Priority** (Score: ___/5)
  - Implementation phases are logical
  - Dependencies are clearly mapped
  - Critical path is identified
  - Resource requirements are estimated
  - *Improvement Notes*: ________________________________

**Overall Core Gameplay Score**: ___/35  
**Pass Threshold**: 28/35 (80%)  
**Status**: [ ] Pass [ ] Needs Improvement [ ] Fail  

---

## Player Experience Section Evaluation
**File**: `{{game_title}}_Player_Experience.md`  
**Agent**: player-experience-designer  
**Command**: design-onboarding  

### Content Quality Criteria
- [ ] **Player Journey Mapping** (Score: ___/5)
  - Complete journey from first launch to mastery
  - Key engagement moments identified
  - Drop-off points addressed
  - Retention hooks are effective
  - *Improvement Notes*: ________________________________

- [ ] **Onboarding Design** (Score: ___/5)
  - Tutorial teaches through discovery
  - Learning curve is appropriate
  - Core mechanics are properly introduced
  - Player agency is maintained
  - *Improvement Notes*: ________________________________

- [ ] **Engagement Psychology** (Score: ___/5)
  - Player motivations are addressed
  - Feedback systems are effective
  - Achievement structure is motivating
  - Social elements enhance engagement
  - *Improvement Notes*: ________________________________

- [ ] **Accessibility Features** (Score: ___/5)
  - Visual accessibility is considered
  - Motor accessibility is addressed
  - Cognitive accessibility is included
  - Inclusive design principles applied
  - *Improvement Notes*: ________________________________

- [ ] **UI/UX Integration** (Score: ___/5)
  - Interface requirements are specified
  - User flows are logical
  - Information hierarchy is clear
  - Interaction patterns are consistent
  - *Improvement Notes*: ________________________________

### Integration Criteria
- [ ] **Gameplay Integration** (Score: ___/5)
  - UX supports core gameplay mechanics
  - Player experience aligns with game pillars
  - Progression systems are well-integrated
  - Feedback loops are coherent
  - *Improvement Notes*: ________________________________

**Overall Player Experience Score**: ___/30  
**Pass Threshold**: 24/30 (80%)  
**Status**: [ ] Pass [ ] Needs Improvement [ ] Fail  

---

## Technical Specifications Section Evaluation
**File**: `{{game_title}}_Technical_Specifications.md`  
**Agent**: technical-designer  
**Command**: create-technical-spec  

### Content Quality Criteria
- [ ] **System Architecture** (Score: ___/5)
  - Architecture supports all game features
  - Component interactions are defined
  - Scalability is considered
  - Technology choices are justified
  - *Improvement Notes*: ________________________________

- [ ] **Performance Targets** (Score: ___/5)
  - Frame rate targets are realistic
  - Memory usage limits are specified
  - Loading time requirements are achievable
  - Platform optimization is addressed
  - *Improvement Notes*: ________________________________

- [ ] **Platform Requirements** (Score: ___/5)
  - Minimum specifications are realistic
  - Platform-specific features are utilized
  - Cross-platform considerations are addressed
  - Store requirements are met
  - *Improvement Notes*: ________________________________

- [ ] **Development Infrastructure** (Score: ___/5)
  - Build pipeline is defined
  - Version control strategy is specified
  - Testing framework is established
  - Deployment process is outlined
  - *Improvement Notes*: ________________________________

- [ ] **Security and Compliance** (Score: ___/5)
  - Data protection measures are specified
  - Platform compliance is addressed
  - Regional requirements are considered
  - Anti-cheat measures are included
  - *Improvement Notes*: ________________________________

### BMAD Compatibility Criteria
- [ ] **Integration Specifications** (Score: ___/5)
  - BMAD agent compatibility confirmed
  - Data formats are appropriate
  - Workflow integration is defined
  - Quality gates are established
  - *Improvement Notes*: ________________________________

**Overall Technical Specifications Score**: ___/30  
**Pass Threshold**: 24/30 (80%)  
**Status**: [ ] Pass [ ] Needs Improvement [ ] Fail  

---

## GDD Index Section Evaluation
**File**: `{{game_title}}_GDD_Index.md`  
**Agent**: gdd-validator  
**Command**: create-gdd-index  

### Content Quality Criteria
- [ ] **Navigation Structure** (Score: ___/5)
  - All sections are properly cataloged
  - Links and references function correctly
  - Reading paths are clearly defined
  - Search and reference capabilities are included
  - *Improvement Notes*: ________________________________

- [ ] **Quality Metrics** (Score: ___/5)
  - Quality scores are accurate
  - Status information is current
  - Issues are clearly documented
  - Improvement areas are identified
  - *Improvement Notes*: ________________________________

- [ ] **Cross-Reference Mapping** (Score: ___/5)
  - Dependencies are accurately mapped
  - Integration points are documented
  - Relationship diagrams are clear
  - Workflow connections are established
  - *Improvement Notes*: ________________________________

- [ ] **Stakeholder Usability** (Score: ___/5)
  - Different user paths are provided
  - Information is appropriately summarized
  - Contact information is included
  - Support resources are documented
  - *Improvement Notes*: ________________________________

**Overall GDD Index Score**: ___/20  
**Pass Threshold**: 16/20 (80%)  
**Status**: [ ] Pass [ ] Needs Improvement [ ] Fail  

---

## Overall GDD Evaluation Summary

### Section Scores Summary
| Section | Score | Status | Priority |
|---------|-------|--------|----------|
| Game Overview | ___/35 | _______ | _______ |
| Core Gameplay | ___/35 | _______ | _______ |
| Player Experience | ___/30 | _______ | _______ |
| Technical Specifications | ___/30 | _______ | _______ |
| GDD Index | ___/20 | _______ | _______ |
| **Total** | **___/150** | **_____** | **_____** |

### Overall Assessment
- **Total Score**: ___/150
- **Pass Threshold**: 120/150 (80%)
- **Overall Status**: [ ] Pass [ ] Needs Improvement [ ] Fail

### Priority Improvement Areas
1. **High Priority** (Score < 3): ________________________________
2. **Medium Priority** (Score 3-3.9): ________________________________
3. **Low Priority** (Score 4-4.4): ________________________________

### Agent Performance Analysis
| Agent | Sections | Avg Score | Performance | Improvement Focus |
|-------|----------|-----------|-------------|-------------------|
| game-systems-architect | Game Overview | ___/5 | _______ | _________________ |
| mechanics-specialist | Core Gameplay | ___/5 | _______ | _________________ |
| player-experience-designer | Player Experience | ___/5 | _______ | _________________ |
| technical-designer | Technical Specs | ___/5 | _______ | _________________ |
| gdd-validator | GDD Index | ___/5 | _______ | _________________ |

### Recommended Actions
1. **Immediate Actions** (Critical Issues):
   - ________________________________________________
   - ________________________________________________

2. **Short-term Improvements** (Next Iteration):
   - ________________________________________________
   - ________________________________________________

3. **Long-term Enhancements** (Future Versions):
   - ________________________________________________
   - ________________________________________________

### Agent Task and Checklist Updates
Based on evaluation results, consider updating:
- [ ] Agent task instructions for low-performing areas
- [ ] Checklist criteria for better quality control
- [ ] Template requirements for improved output
- [ ] Workflow dependencies for better integration

---

**Evaluation Completed By**: ________________  
**Date**: ________________  
**Next Review Date**: ________________