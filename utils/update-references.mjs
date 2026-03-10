#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// 路径映射表
const pathMappings = {
  // tasks路径映射
  'validate-gdd-completeness.md': 'validation/validate-and-finalize-gdd.md',
  'verify-bmad-compatibility.md': 'validation/validate-and-finalize-gdd.md',
  'check-standards-compliance.md': 'validation/comprehensive-design-review.md',
  'review-gdd-document.md': 'validation/game-design-review.md',
  'validate-completeness.md': 'validation/validate-and-finalize-gdd.md',
  'check-technical-feasibility.md': 'validation/validate-and-finalize-gdd.md',
  'simulate-gameplay.md': 'validation/simulate-playtesting.md',
  'identify-balance-issues.md': 'validation/provide-playtesting-feedback.md',
  'map-player-engagement.md': 'validation/provide-playtesting-feedback.md',
  'create-technical-specs.md': 'planning/create-technical-specification.md',
  'define-performance-targets.md': 'planning/create-technical-specification.md',
  'analyze-platform-requirements.md': 'planning/create-technical-specification.md',
  'create-doc.md': 'design/design-core-mechanics.md',
  'analyze-player-experience.md': 'analysis/analyze-game-design-structure.md',
  'design-onboarding.md': 'design/design-ui-ux-systems.md',
  'design-game-mechanics.md': 'design/design-core-mechanics.md',
  'analyze-balance.md': 'analysis/create-game-design-critique.md',
  'model-progression.md': 'design/design-core-mechanics.md',
  'design-game-world.md': 'design/design-game-narrative.md',
  'create-level-framework.md': 'generation/generate-level-list.md',
  'design-game-narrative.md': 'design/design-game-narrative.md',
  'create-story-branches.md': 'design/design-game-narrative.md',
  'map-choice-consequences.md': 'design/design-game-narrative.md',
  'design-npc-conversations.md': 'design/design-npc-conversations.md',
  'create-dialog-trees.md': 'design/design-npc-conversations.md',
  'build-character-voices.md': 'design/design-npc-conversations.md',
  'conduct-market-research.md': 'analysis/create-market-analysis.md',
  'analyze-competition.md': 'analysis/create-market-analysis.md',
  'profile-target-audience.md': 'analysis/create-market-analysis.md',
  
  // checklists路径映射
  'gdd-validation-checklist.md': 'comprehensive/modular-gdd-evaluation-checklist.md',
  'bmad-compatibility-checklist.md': 'technical-quality/bmad-compatibility-checklist.md',
  'industry-standards-checklist.md': 'comprehensive/comprehensive-quality-checklist.md',
  'gdd-quality-checklist.md': 'comprehensive/comprehensive-quality-checklist.md',
  'technical-feasibility-checklist.md': 'technical-quality/technical-feasibility-checklist.md',
  'performance-optimization-checklist.md': 'technical-quality/technical-feasibility-checklist.md',
  'player-experience-checklist.md': 'design-quality/player-experience-checklist.md',
  'accessibility-checklist.md': 'design-quality/player-experience-checklist.md',
  'mechanics-design-checklist.md': 'design-quality/gameplay-balance-checklist.md',
  'balance-validation-checklist.md': 'design-quality/gameplay-balance-checklist.md',
  'game-world-design-checklist.md': 'design-quality/game-world-design-continuity-checklist.md',
  'level-design-checklist.md': 'design-quality/level-design-quality-checklist.md',
  'game-mechanics-checklist.md': 'design-quality/gameplay-balance-checklist.md',
  'narrative-consistency-checklist.md': 'design-quality/narrative-consistency-checklist.md',
  'player-agency-checklist.md': 'design-quality/narrative-consistency-checklist.md',
  'game-dialog-checklist.md': 'design-quality/narrative-consistency-checklist.md',
  'market-analysis-checklist.md': 'business-viability/market-readiness-checklist.md',
  'competitive-research-checklist.md': 'business-viability/market-readiness-checklist.md',
  'playtesting-checklist.md': 'design-quality/game-development-readiness-checklist.md',
  'balance-validation-checklist.md': 'design-quality/gameplay-balance-checklist.md',
  
  // templates路径映射
  'validation-report-tmpl.yaml': 'technical/playtesting-feedback-form.yaml',
  'compatibility-checklist-tmpl.yaml': 'technical/accessibility-plan-tmpl.yaml',
  'standards-audit-tmpl.yaml': 'technical/technical-architecture-tmpl.yaml',
  'gdd-review-report-tmpl.yaml': 'technical/technical-architecture-tmpl.yaml',
  'completeness-checklist-tmpl.yaml': 'technical/technical-architecture-tmpl.yaml',
  'playtest-report-tmpl.yaml': 'technical/playtesting-feedback-form.yaml',
  'balance-analysis-tmpl.yaml': 'technical/game-analytics-specification-tmpl.yaml',
  'engagement-map-tmpl.yaml': 'technical/game-analytics-specification-tmpl.yaml',
  'performance-requirements-tmpl.yaml': 'technical/technical-architecture-tmpl.yaml',
  'platform-analysis-tmpl.yaml': 'technical/mobile-game-spec-tmpl.yaml',
  'architecture-guide-tmpl.yaml': 'technical/technical-architecture-tmpl.yaml',
  'user-journey-tmpl.yaml': 'specialized/ui-ux-specification-tmpl.yaml',
  'onboarding-flow-tmpl.yaml': 'specialized/ui-ux-specification-tmpl.yaml',
  'ux-specification-tmpl.yaml': 'specialized/ui-ux-specification-tmpl.yaml',
  'balance-analysis-tmpl.yaml': 'technical/game-analytics-specification-tmpl.yaml',
  'progression-system-tmpl.yaml': 'technical/game-feature-spec-tmpl.yaml',
  'economy-model-tmpl.yaml': 'business/monetization-strategy-tmpl.yaml',
  'level-design-framework-tmpl.yaml': 'technical/level-design-list-tmpl.yaml',
  'art-direction-tmpl.yaml': 'specialized/game-art-brief-tmpl.yaml',
  'environmental-systems-tmpl.yaml': 'specialized/game-world-guide-tmpl.yaml',
  'story-branch-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'character-arc-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'quest-narrative-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'npc-dialog-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'conversation-tree-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'character-voice-guide-tmpl.yaml': 'specialized/character-design-profile-tmpl.yaml',
  'competitive-analysis-tmpl.yaml': 'business/market-analysis-tmpl.yaml',
  'audience-profile-tmpl.yaml': 'business/market-analysis-tmpl.yaml',
  'monetization-strategy-tmpl.yaml': 'business/monetization-strategy-tmpl.yaml'
};

function updateFile(filePath) {
  console.log(`Updating ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // 更新tasks路径
    for (const [oldPath, newPath] of Object.entries(pathMappings)) {
      if (oldPath.endsWith('.md') && content.includes(oldPath)) {
        content = content.replace(new RegExp(oldPath, 'g'), newPath);
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✓ Updated ${filePath}`);
    } else {
      console.log(`  - No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error updating ${filePath}:`, error.message);
  }
}

function updateDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory ${dirPath} does not exist, skipping...`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateDirectory(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.yaml')) {
      updateFile(filePath);
    }
  }
}

// 更新agents目录
console.log('Updating agents directory...');
updateDirectory(path.join(rootDir, 'agents'));

// 更新workflows目录
console.log('\nUpdating workflows directory...');
updateDirectory(path.join(rootDir, 'workflows'));

console.log('\n✅ Update completed!');
