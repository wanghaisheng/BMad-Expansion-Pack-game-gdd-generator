# Requirements & Dependencies

## System Requirements

### BMad Method Core
- **Version**: BMad Method v1.0 or higher
- **Installation**: Must have BMad Method installed and configured

### Runtime Environment
- **Node.js**: v14.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **Memory**: 4GB RAM minimum (8GB recommended for large GDD projects)

## Dependencies

### Core Dependencies
This expansion pack requires only the BMad Method core framework. No additional npm packages or external dependencies are needed.

### LLM Requirements
- Compatible with any LLM provider configured in BMad Method
- Optimal performance with:
  - GPT-4 or GPT-4 Turbo
  - Claude 2 or Claude 3
  - Local models with 13B+ parameters

### Token Considerations
- **Complete GDD workflow**: 50k-120k tokens per full run
- **Core design sections**: 8k-20k tokens per section
- **Art/Audio/UI specs**: 5k-15k tokens per spec
- **Review and validation**: 10k-25k tokens per pass

## File System Requirements

### Directory Structure
The expansion pack expects the standard BMad Method directory structure:
```
bmad-method/
├── expansion-packs/
│   └── bmad-gdd-generator/
├── .bmad-core/
├── docs/
└── package.json
```

### Storage Space
- **Installation**: ~2MB for expansion pack files
- **Working space**: 10-50MB per active project
- **Document storage**: Varies by GDD size and asset references

## Compatibility

### BMad Agent Compatibility
- Fully compatible with all BMad core agents
- Can be combined with other expansion packs
- No conflicts with existing BMad workflows

### File Format Support
- **Input**: Markdown (.md), Plain text (.txt), YAML (.yaml)
- **Output**: Markdown (.md), YAML (.yaml)
- **Templates**: YAML format required

### Integration Points
- VSCode/Cursor IDE integration via BMad Method
- Git version control for GDD tracking
- Export to Markdown/PDF for review and handoff

## Optional Enhancements

### Recommended Tools
While not required, these tools enhance the experience:
- **Markdown editor**: For better GDD viewing
- **Git**: For version control and review cycles
- **Diagramming tool**: For systems/flows (Mermaid, draw.io)
- **Pandoc**: For converting to PDF/DOCX when needed

## Limitations

### Known Constraints
- Maximum file size: 10MB per document
- Character limit: 500,000 characters per file
- Concurrent workflows: Limited by system memory

### Not Supported
- Real-time collaborative editing
- Direct API integration with game engines
- Automated asset generation
- Real-time telemetry/analytics ingestion

## Troubleshooting

### Common Issues

**Expansion pack not appearing in installer:**
- Ensure pack is in `expansion-packs/bmad-gdd-generator/`
- Verify `config.yaml` exists and is valid YAML
- Check BMad Method version compatibility

**Agent activation failures:**
- Confirm all agent files are in `agents/` directory
- Verify markdown formatting in agent files
- Check for file permission issues

**Workflow errors:**
- Ensure all referenced templates exist
- Verify YAML syntax in workflow files
- Check task dependencies are present

### Support Resources
- GitHub Issues: https://github.com/DrBalls/BMad-Expansion-Pack-game-gdd-generator/issues
- BMad Method Docs: https://github.com/bmadcode/BMAD-METHOD/docs
- Community Forum: [BMad Method Discussions]

## Future Requirements

### Planned Features (May Require Updates)
- Multi-author collaboration support
- Direct GDD export to development pipelines
- Enhanced asset validation integrations
- Advanced localization planning workflows

### Version Compatibility
This expansion pack will maintain compatibility with:
- BMad Method 1.x releases
- Future 2.x releases (with migration guide)
- LTS (Long Term Support) versions
