# Generate Core Gameplay Section

## Task Overview
Create the core gameplay design section of the GDD, defining the fundamental player experience, mechanics, and systems that make the game engaging and unique.

## Objective
Transform the game concept foundation into detailed, implementable gameplay specifications that serve as the blueprint for all game systems.

## Prerequisites
- Completed GDD Foundation with game concept and vision
- Target audience profiles and market context
- Game pillars and design principles established
- Platform constraints and technical considerations

## Inputs Required
- **Game Foundation**: Core concept, pillars, and vision from foundation task
- **Audience Profiles**: Player motivations, preferences, and behaviors
- **Market Context**: Competitive landscape and differentiation requirements
- **Platform Constraints**: Technical limitations and platform-specific considerations
- **Scope Parameters**: Development timeline, team size, and resource constraints

## Agent Workflow

### Primary Agent: mechanics-specialist
**Command**: `design-mechanics`
**Duration**: 90-120 minutes

#### Process Steps:
1. **Core Loop Design**
   - Define 30-60 second gameplay loop with precise timing
   - Map player actions, system responses, and feedback
   - Identify loop variations and progression hooks
   - Validate loop against game pillars and player motivations

2. **Primary Mechanics Specification**
   - Detail each core mechanic with implementation clarity
   - Define mechanic interactions and emergent possibilities
   - Specify input methods and control schemes
   - Establish complexity progression and mastery curves

3. **Progression System Design**
   - Create player advancement structure and unlock gates
   - Design skill trees, upgrade paths, or progression mechanics
   - Balance short-term rewards with long-term goals
   - Integrate progression with core loop and player retention

4. **Balance Framework**
   - Establish mathematical models for key game systems
   - Define difficulty curves and challenge escalation
   - Create balance testing criteria and adjustment mechanisms
   - Specify metrics for ongoing balance monitoring

### Supporting Agent: player-experience-designer
**Command**: `analyze-player-journey`
**Duration**: 60-75 minutes

#### Process Steps:
1. **Player Journey Mapping**
   - Map complete player experience from first launch to mastery
   - Identify key engagement moments and potential drop-off points
   - Design onboarding flow that teaches through discovery
   - Create retention hooks and re-engagement mechanisms

2. **Engagement Psychology**
   - Apply player motivation frameworks to mechanics design
   - Design feedback systems that communicate progress clearly
   - Create achievement and milestone systems
   - Establish social and competitive elements (if applicable)

## Deliverables

### Primary Output: Core Gameplay Design Document
**Filename**: `{{game_title}}_Core_Gameplay.md`

```markdown
# {{Game Title}} - Core Gameplay Design
**Document Type**: Game Design Document - Core Gameplay Section  
**Version**: 1.0  
**Date**: {{current_date}}  
**Agent**: mechanics-specialist  
**Status**: Core Design Complete  

## Related Documents
- [Game Overview]({{game_title}}_Game_Overview.md) - *Foundation document*
- [Player Experience Design]({{game_title}}_Player_Experience.md) - *Integrates with this document*
- [Technical Specifications]({{game_title}}_Technical_Specifications.md) - *Implements this design*
- [Narrative Design]({{game_title}}_Narrative_Design.md) - *Supports this gameplay*

## Prerequisites Validation
- ✅ Game concept and pillars established
- ✅ Target audience profiles defined
- ✅ Platform constraints identified
- ✅ Market differentiation requirements clear

## Core Gameplay Loop
### Primary Loop (30-60 seconds)
**Loop Structure**:
1. **[Action Phase]** (X seconds)
   - Player input: [Specific actions]
   - System response: [Immediate feedback]
   - Visual/audio feedback: [Sensory confirmation]

2. **[Resolution Phase]** (Y seconds)
   - System processing: [Calculations/logic]
   - Result presentation: [Outcome display]
   - Progress indication: [Advancement shown]

3. **[Transition Phase]** (Z seconds)
   - State update: [Game state changes]
   - Next cycle preparation: [Setup for repeat]
   - Motivation hook: [Reason to continue]

**Loop Variations**:
- **Beginner Loop**: Simplified version for new players
- **Advanced Loop**: Enhanced complexity for experienced players
- **Challenge Loop**: Special conditions or time pressure
- **Social Loop**: Multiplayer or competitive variations

### Supporting Loops
**Meta Loop (5-10 minutes)**:
- Multiple core loops leading to milestone achievement
- Progression unlock or significant reward
- New content or feature access

**Session Loop (20-60 minutes)**:
- Complete play session with clear start/end points
- Major progression milestone or story beat
- Natural stopping point with return motivation

## Primary Mechanics
### [Mechanic Name 1]
**Purpose**: Why this mechanic exists and what player need it serves

**Implementation**:
- **Player Input**: Exact controls and interaction methods
- **System Response**: Detailed behavior and calculations
- **Feedback Systems**: Visual, audio, and haptic responses
- **Progression Integration**: How mechanic evolves with player advancement

**Interactions**:
- **With [Mechanic 2]**: Specific interaction behaviors
- **With [System X]**: Integration points and dependencies
- **Emergent Possibilities**: Unintended but positive interactions

**Balance Parameters**:
- **Core Values**: Key numbers that define mechanic behavior
- **Scaling Functions**: How values change with progression
- **Constraint Limits**: Boundaries and maximum/minimum values

### [Mechanic Name 2]
[Same detailed structure as above]

## Progression Systems
### Player Advancement Framework
**Experience System**:
- **XP Sources**: How players gain experience points
- **XP Scaling**: Rate of gain and requirements per level
- **Level Benefits**: What players unlock with advancement
- **Milestone Rewards**: Special unlocks at key levels

**Skill Development**:
- **Skill Trees**: Branching advancement paths
- **Specialization Options**: Different player build possibilities
- **Mastery Systems**: Advanced progression for dedicated players
- **Respec Mechanisms**: Ability to change advancement choices

### Content Unlocking
**Progression Gates**:
- **Level Requirements**: Content locked behind player level
- **Achievement Requirements**: Skill-based unlock conditions
- **Story Requirements**: Narrative progression dependencies
- **Social Requirements**: Multiplayer or community-based unlocks

**Unlock Pacing**:
- **Early Game** (0-25% progress): Frequent, small unlocks
- **Mid Game** (25-75% progress): Moderate pacing, meaningful choices
- **Late Game** (75-100% progress): Rare, significant unlocks
- **Post-Game**: Ongoing content and mastery challenges

## Victory and Failure Conditions
### Success States
**Primary Victory Conditions**:
- **Objective-Based**: Specific goals player must achieve
- **Performance-Based**: Quality or efficiency requirements
- **Time-Based**: Completion within time limits
- **Survival-Based**: Lasting through challenges

**Success Feedback**:
- **Immediate Recognition**: Instant victory confirmation
- **Reward Presentation**: Clear benefit communication
- **Progress Acknowledgment**: Advancement toward larger goals
- **Social Sharing**: Opportunities to share achievements

### Failure States
**Failure Conditions**:
- **Resource Depletion**: Running out of health, time, or resources
- **Objective Failure**: Missing required goals or targets
- **Performance Failure**: Not meeting minimum standards
- **Time Expiration**: Failing to complete within limits

**Failure Recovery**:
- **Immediate Retry**: Quick restart options
- **Checkpoint System**: Progress preservation and restoration
- **Difficulty Adjustment**: Dynamic help for struggling players
- **Learning Support**: Hints, tips, or tutorial reinforcement

## Balance Framework
### Mathematical Models
**Core Balance Equations**:
```
Player Power = Base Stats + Equipment Bonuses + Skill Modifiers
Challenge Rating = Base Difficulty × Player Level Scaling × Situational Modifiers
Success Probability = Player Power / (Player Power + Challenge Rating)
```

**Progression Scaling**:
- **Linear Scaling**: Consistent growth rates
- **Exponential Scaling**: Accelerating advancement curves
- **Logarithmic Scaling**: Diminishing returns systems
- **Stepped Scaling**: Discrete advancement tiers

### Testing and Validation
**Balance Metrics**:
- **Completion Rates**: Percentage of players succeeding at challenges
- **Time to Complete**: Average duration for different player types
- **Retry Rates**: How often players attempt failed challenges
- **Progression Velocity**: Speed of player advancement

**Testing Scenarios**:
- **Minimum Viable Player**: Least skilled/equipped player success
- **Average Player**: Typical player experience and outcomes
- **Power Player**: Highly skilled/equipped player challenges
- **Edge Cases**: Extreme situations and exploit possibilities

## Implementation Priorities
### Phase 1: Core Loop (Weeks 1-4)
- Basic mechanic implementation
- Core loop functionality
- Essential feedback systems
- Minimum viable progression

### Phase 2: Progression Systems (Weeks 5-8)
- Full advancement systems
- Content unlocking mechanisms
- Balance framework implementation
- Player customization options

### Phase 3: Polish and Balance (Weeks 9-12)
- Fine-tuning and optimization
- Advanced feedback systems
- Edge case handling
- Performance optimization

## Quality Validation
**Gameplay Quality Checklist**:
- [ ] Core loop is engaging and repeatable
- [ ] All mechanics serve the game pillars
- [ ] Progression feels rewarding and achievable
- [ ] Balance framework enables fair challenge
- [ ] Victory/failure states are clear and meaningful
- [ ] Implementation specifications are development-ready

**Integration Validation**:
- [ ] Mechanics support narrative integration (if applicable)
- [ ] Technical requirements are realistic and specified
- [ ] UI/UX requirements are clearly defined
- [ ] Monetization integration points identified (if applicable)

---
**Next Agent Handoffs**:
- **player-experience-designer**: Receives mechanics for UX integration
- **technical-designer**: Receives specifications for technical implementation
- **narrative-designer**: Receives mechanics for story integration
- **ui-ux-designer**: Receives interaction requirements for interface design
```

### Secondary Outputs:
- **Mechanics Interaction Matrix**: `{{game_title}}_Mechanics_Matrix.md`
- **Balance Spreadsheet**: `{{game_title}}_Balance_Models.xlsx`
- **Implementation Priority Guide**: `{{game_title}}_Core_Implementation_Plan.md`

## Success Criteria
- [ ] Core loop is engaging and supports long-term play
- [ ] All mechanics serve the game pillars and player experience
- [ ] Progression system provides clear goals and meaningful rewards
- [ ] Balance framework enables fair and challenging gameplay
- [ ] Specifications are detailed enough for implementation
- [ ] Player journey supports retention and engagement goals

## Quality Gates
1. **Loop Validation**: Core loop tested against player motivations
2. **Mechanic Coherence**: All mechanics support unified vision
3. **Progression Balance**: Advancement feels rewarding but not trivial
4. **Implementation Clarity**: Specifications clear enough for development
5. **Player Experience**: Journey supports engagement and retention

## Integration Points

### Receives From Previous Tasks:
- **Game Foundation**: Core concept, pillars, and vision
- **Market Analysis**: Competitive insights and differentiation needs
- **Audience Profiles**: Player motivations and preferences

### Provides To Next Tasks:
- **Narrative Design**: Mechanics that support story integration
- **Technical Specification**: System requirements and performance needs
- **UI/UX Design**: Interface requirements and user flow needs
- **Art Direction**: Visual requirements for mechanics and feedback

### Data Formats:
- **Mechanics Specifications**: Structured markdown with implementation details
- **Balance Models**: Spreadsheet format with formulas and parameters
- **Player Journey**: Visual flowchart with decision points
- **Integration Requirements**: JSON format for technical handoff

## BMAD Compatibility Requirements
- Mechanics must be implementable within BMAD technical constraints
- Balance models must be adjustable through configuration files
- Player progression must integrate with BMAD analytics systems
- All specifications must include performance and scalability considerations

## Common Pitfalls to Avoid
- Designing mechanics that don't serve the core player experience
- Creating overly complex systems that are difficult to balance
- Insufficient detail for implementation teams
- Ignoring platform constraints and technical limitations
- Designing progression that becomes tedious or pay-to-win
- Missing integration points with other game systems

## Timeline Considerations
- Mechanics design: 2-3 hours for core systems
- Balance framework: 1-2 hours for mathematical models
- Player journey mapping: 1 hour for experience flow
- Integration planning: 30 minutes for handoff preparation
- Quality review: 30 minutes for validation and refinement

## Success Metrics
- **Engagement Potential**: Core loop supports target session length
- **Retention Design**: Progression hooks align with retention goals
- **Implementation Readiness**: Specifications enable efficient development
- **Balance Sustainability**: Framework supports ongoing optimization
- **Player Satisfaction**: Design addresses target audience motivations