# Pull Request Submission Guide

## Preparing Your Fork for BMad Method PR

### 1. Fork the BMad Method Repository
```bash
# Fork https://github.com/bmadcode/BMAD-METHOD on GitHub
# Then clone your fork locally
git clone https://github.com/YOUR-USERNAME/BMAD-METHOD.git
cd BMAD-METHOD
```

### 2. Add Your Expansion Pack
```bash
# Create the expansion pack directory
mkdir -p expansion-packs/bmad-creative-writing

# Copy your expansion pack files (excluding .git, .bmad-core, .claude)
cp -r /path/to/BMad-Expansion-Pack-Creative-Writing/* \
     expansion-packs/bmad-creative-writing/

# Remove any files that shouldn't be in the main repo
rm -rf expansion-packs/bmad-creative-writing/.git
rm -rf expansion-packs/bmad-creative-writing/.bmad-core
rm -rf expansion-packs/bmad-creative-writing/.claude
rm expansion-packs/bmad-creative-writing/.DS_Store
rm expansion-packs/bmad-creative-writing/PR_SUBMISSION.md
```

### 3. Verify Structure
Your expansion pack should have this structure in the BMad repo:
```
expansion-packs/
└── bmad-creative-writing/
    ├── config.yaml
    ├── package.json
    ├── README.md
    ├── agent-teams/
    │   └── agent-team.yaml
    ├── agents/
    │   ├── playtesting-simulator.md
    │   ├── gdd-validator.md
    │   ├── player-experience-designer.md
    │   ├── game-art-director.md
    │   ├── mechanics-specialist.md
    │   ├── gdd-reviewer.md
    │   ├── market-analyst.md
    │   ├── technical-designer.md
    │   ├── game-systems-architect.md
    │   └── game-world-designer.md
    ├── checklists/
    │   └── [11 checklist files]
    ├── data/
    │   └── game-design-patterns.md
    ├── tasks/
    │   └── [19 task files]
    ├── templates/
    │   └── [9 template files]
    └── workflows/
        └── [4 workflow files]
```

### 4. Create Feature Branch
```bash
git checkout -b add-creative-writing-expansion
git add expansion-packs/bmad-creative-writing/
git commit -m "Add Creative Writing expansion pack

- 10 specialized game design agents for GDD creation and validation
- 4 complete workflows (game design, iterative development, mini-game, series planning)
- 11 quality checklists for game design and technical validation
- 19 game design tasks covering full development process
- 9 professional templates for structured game design documentation
- BMAD compatibility integration support"
```

### 5. Push and Create PR
```bash
git push origin add-creative-writing-expansion
```

Then on GitHub:
1. Go to your fork
2. Click "Pull requests" → "New pull request"
3. Set base repository: `bmadcode/BMAD-METHOD` base: `main`
4. Set head repository: `YOUR-USERNAME/BMAD-METHOD` compare: `add-creative-writing-expansion`

### 6. PR Template

**Title:** Add Creative Writing Expansion Pack

**Description:**
```markdown
## Summary
This PR adds a comprehensive Creative Writing expansion pack to BMad Method, providing specialized AI agents and workflows for fiction writers, screenwriters, and narrative designers.

## What's Included
- **10 Specialized Agents**: Game Systems Architect, Player Experience Designer, Game World Designer, GDD Reviewer, Playtesting Simulator, Mechanics Specialist, Technical Designer, Market Analyst, GDD Validator
- **4 Workflows**: Game design (greenfield), iterative development, mini-game creation, game series planning
- **11 Quality Checklists**: Game design structure, gameplay balance, player experience, technical feasibility, BMAD compatibility
- **19 Game Design Tasks**: Complete design process from concept to final GDD
- **9 Templates**: Game design documents, character design, world guides, level lists, and more

## Testing
- [x] Verified config.yaml format matches existing expansion packs
- [x] Tested agent activation and commands
- [x] Validated workflow execution
- [x] Confirmed all file paths are correct
- [x] No external dependencies required

## Use Cases
- Game design development from concept to implementation-ready GDD
- Technical specification creation with BMAD compatibility
- Market analysis and viability assessment
- Self-publishing preparation (KDP integration)

## Documentation
Complete README included with installation instructions, usage examples, and component descriptions.

## Author
Created by @DrBalls (Wes) for the BMad Method community.
```

### 7. Post-PR Checklist
- [ ] Monitor PR for feedback
- [ ] Address any requested changes
- [ ] Update documentation if needed
- [ ] Test in main repo after merge

## Alternative: Standalone Repository

If you prefer to maintain your expansion pack as a standalone installable:

1. Keep your repository at: https://github.com/DrBalls/BMad-Expansion-Pack-Creative-Writing
2. Add installation instructions to your README:
```bash
# Clone the expansion pack
git clone https://github.com/DrBalls/BMad-Expansion-Pack-Creative-Writing.git

# Copy to your BMad installation
cp -r BMad-Expansion-Pack-Creative-Writing/* \
     ~/bmad-method/expansion-packs/bmad-creative-writing/

# Run BMad installer
cd ~/bmad-method
npm run install:bmad
```

## Support

For questions about the submission process:
- Open an issue in the BMad Method repository
- Tag @bmadcode for expansion pack reviews
- Join the BMad community discussions