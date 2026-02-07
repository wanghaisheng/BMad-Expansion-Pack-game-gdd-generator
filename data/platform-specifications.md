# Platform Specifications Reference

## Mobile Platforms

### iOS (iPhone/iPad)
**Current Versions**: iOS 15+ (minimum), iOS 17+ (recommended)
**Development Environment**: Xcode, Swift/Objective-C
**Distribution**: App Store
**Revenue Share**: 70% developer, 30% Apple (15% for small developers)

**Technical Specifications**:
- **Memory**: 3-8GB RAM typical
- **Storage**: 64GB-1TB available
- **Graphics**: A12 Bionic+ (Metal API)
- **Screen Resolutions**: 
  - iPhone: 1170x2532 to 1290x2796
  - iPad: 2048x2732 to 2388x1668
- **Input**: Touch, Face ID/Touch ID, Accelerometer, Gyroscope

**Platform Features**:
- Game Center integration
- In-App Purchases
- Push notifications
- CloudKit save sync
- Shortcuts app integration
- Accessibility features (VoiceOver, Switch Control)

**Certification Requirements**:
- App Store Review Guidelines compliance
- Human Interface Guidelines adherence
- Privacy policy requirements
- Age rating (App Store ratings)
- Accessibility compliance

### Android
**Current Versions**: Android 8.0+ (API 26+) minimum, Android 12+ recommended
**Development Environment**: Android Studio, Java/Kotlin
**Distribution**: Google Play Store, alternative stores
**Revenue Share**: 70% developer, 30% Google (85% for first $1M)

**Technical Specifications**:
- **Memory**: 2-16GB RAM (wide range)
- **Storage**: 32GB-1TB available
- **Graphics**: Adreno, Mali, PowerVR (Vulkan/OpenGL ES)
- **Screen Resolutions**: 720p to 4K+ (highly fragmented)
- **Input**: Touch, Fingerprint, Accelerometer, Gyroscope

**Platform Features**:
- Google Play Games integration
- Google Play Billing
- Firebase services
- Android App Bundle
- Adaptive icons
- TalkBack accessibility

**Certification Requirements**:
- Google Play policies compliance
- Material Design guidelines
- Target API level requirements
- Privacy policy requirements
- Content rating (IARC)

## PC Platforms

### Windows
**Current Versions**: Windows 10 (minimum), Windows 11 (recommended)
**Development Environment**: Visual Studio, Unity, Unreal Engine
**Distribution**: Steam, Epic Games Store, Microsoft Store, Direct
**Revenue Share**: Varies by platform (Steam: 70%, Epic: 88%)

**Technical Specifications**:
- **Memory**: 8-32GB RAM typical
- **Storage**: 256GB SSD to multi-TB
- **Graphics**: DirectX 11/12, Vulkan
- **Screen Resolutions**: 1920x1080 to 4K+
- **Input**: Keyboard, Mouse, Gamepad, VR headsets

**Platform Features**:
- Steam Workshop integration
- Achievement systems
- Cloud saves
- Overlay systems
- Mod support
- Accessibility features (Narrator, Magnifier)

**Certification Requirements**:
- Platform-specific guidelines
- Age rating (ESRB, PEGI)
- Accessibility guidelines
- Privacy compliance

### macOS
**Current Versions**: macOS 11+ (minimum), macOS 13+ (recommended)
**Development Environment**: Xcode, Unity, Unreal Engine
**Distribution**: Mac App Store, Steam, Direct
**Revenue Share**: 70% developer, 30% Apple (Mac App Store)

**Technical Specifications**:
- **Memory**: 8-64GB RAM
- **Storage**: 256GB SSD to multi-TB
- **Graphics**: Metal API, Apple Silicon/Intel
- **Screen Resolutions**: 2560x1600 to 6K
- **Input**: Keyboard, Mouse, Trackpad, Touch Bar

**Platform Features**:
- Game Center integration
- Metal Performance Shaders
- Universal app support (Intel/Apple Silicon)
- Accessibility features (VoiceOver, Switch Control)

### Linux
**Current Versions**: Ubuntu 20.04+, SteamOS, various distributions
**Development Environment**: Various IDEs, Unity, Unreal Engine
**Distribution**: Steam, itch.io, Direct
**Revenue Share**: Varies by platform

**Technical Specifications**:
- **Memory**: 4-64GB RAM (highly variable)
- **Storage**: Variable
- **Graphics**: Vulkan, OpenGL
- **Screen Resolutions**: Variable
- **Input**: Keyboard, Mouse, Gamepad

**Platform Features**:
- Steam Proton compatibility layer
- Native Linux gaming
- Open-source ecosystem
- Accessibility tools (Orca screen reader)

## Console Platforms

### PlayStation 5
**Development Environment**: PlayStation SDK
**Distribution**: PlayStation Store
**Revenue Share**: ~70% developer, ~30% Sony

**Technical Specifications**:
- **CPU**: AMD Zen 2, 8 cores @ 3.5GHz
- **Memory**: 16GB GDDR6
- **Storage**: 825GB SSD (expandable)
- **Graphics**: AMD RDNA 2, 10.28 TFLOPs
- **Resolution**: Up to 4K, 120fps support
- **Input**: DualSense controller with haptic feedback

**Platform Features**:
- PlayStation Network integration
- Trophies system
- Activity cards
- Haptic feedback and adaptive triggers
- 3D audio (Tempest 3D)
- Accessibility features

**Certification Requirements**:
- Technical Requirements Checklist (TRC)
- Age rating compliance
- Accessibility guidelines
- Platform-specific features integration

### Xbox Series X/S
**Development Environment**: Xbox GDK
**Distribution**: Microsoft Store, Xbox Game Pass
**Revenue Share**: ~70% developer, ~30% Microsoft

**Technical Specifications**:
- **CPU**: AMD Zen 2, 8 cores @ 3.8GHz (Series X)
- **Memory**: 16GB GDDR6 (Series X), 10GB (Series S)
- **Storage**: 1TB SSD (Series X), 512GB (Series S)
- **Graphics**: AMD RDNA 2, 12 TFLOPs (Series X), 4 TFLOPs (Series S)
- **Resolution**: Up to 4K (Series X), up to 1440p (Series S)
- **Input**: Xbox Wireless Controller

**Platform Features**:
- Xbox Live integration
- Achievements system
- Smart Delivery
- Quick Resume
- Xbox Game Pass integration
- Accessibility features (Xbox Accessibility Guidelines)

### Nintendo Switch
**Development Environment**: Nintendo SDK
**Distribution**: Nintendo eShop
**Revenue Share**: ~70% developer, ~30% Nintendo

**Technical Specifications**:
- **CPU**: NVIDIA Tegra X1, 4 cores @ 1.02GHz
- **Memory**: 4GB LPDDR4
- **Storage**: 32GB internal (expandable)
- **Graphics**: NVIDIA Maxwell, 393 GFLOPs (docked)
- **Resolution**: 1920x1080 (docked), 1280x720 (handheld)
- **Input**: Joy-Con controllers, Pro Controller, touchscreen

**Platform Features**:
- Nintendo Account integration
- Local wireless play
- HD Rumble
- Motion controls
- Handheld/docked modes
- Accessibility features

## Web Platforms

### WebGL/WebAssembly
**Current Standards**: WebGL 2.0, WebAssembly 1.0+
**Development Environment**: Unity WebGL, Unreal Engine, Custom engines
**Distribution**: Web browsers, game portals
**Revenue Share**: Varies by distribution method

**Technical Specifications**:
- **Memory**: Limited by browser (typically 2-4GB)
- **Storage**: IndexedDB, Local Storage
- **Graphics**: WebGL 1.0/2.0
- **Resolution**: Variable (browser window)
- **Input**: Keyboard, Mouse, Touch (mobile browsers)

**Platform Features**:
- Cross-platform compatibility
- No installation required
- Social sharing integration
- Progressive Web App capabilities
- Accessibility features (browser-dependent)

**Browser Compatibility**:
- Chrome: Full WebGL 2.0 support
- Firefox: Full WebGL 2.0 support
- Safari: WebGL 2.0 support (some limitations)
- Edge: Full WebGL 2.0 support
- Mobile browsers: Variable support

## VR/AR Platforms

### Meta Quest (Oculus)
**Current Devices**: Quest 2, Quest 3, Quest Pro
**Development Environment**: Unity, Unreal Engine, Oculus SDK
**Distribution**: Meta Quest Store
**Revenue Share**: 70% developer, 30% Meta

**Technical Specifications**:
- **CPU**: Snapdragon XR2 (Quest 2), XR2 Gen 2 (Quest 3)
- **Memory**: 8GB (Quest 2), 8-12GB (Quest 3)
- **Storage**: 128-512GB
- **Display**: 90Hz (Quest 2), 90-120Hz (Quest 3)
- **Resolution**: 1832x1920 per eye (Quest 2), 2064x2208 per eye (Quest 3)
- **Tracking**: Inside-out 6DOF, hand tracking

**Platform Features**:
- Oculus Platform SDK
- Social features
- Cross-platform play
- Hand tracking
- Passthrough (Quest 3)

### PlayStation VR2
**Development Environment**: PlayStation SDK
**Distribution**: PlayStation Store
**Revenue Share**: ~70% developer, ~30% Sony

**Technical Specifications**:
- **Display**: OLED, 90/120Hz
- **Resolution**: 2000x2040 per eye
- **Field of View**: ~110 degrees
- **Tracking**: Inside-out 6DOF
- **Controllers**: PlayStation VR2 Sense controllers
- **Features**: Eye tracking, haptic feedback, adaptive triggers

### Apple Vision Pro
**Development Environment**: Xcode, visionOS SDK
**Distribution**: App Store
**Revenue Share**: 70% developer, 30% Apple

**Technical Specifications**:
- **CPU**: M2 chip
- **Memory**: 16GB unified memory
- **Display**: Micro-OLED, 90Hz
- **Resolution**: 23 million pixels total
- **Tracking**: Eye tracking, hand tracking
- **Input**: Eyes, hands, voice

## Platform Selection Criteria

### Audience Considerations
- **Demographics**: Age, income, gaming preferences
- **Geographic Distribution**: Regional platform preferences
- **Device Ownership**: Platform penetration in target markets
- **Spending Behavior**: Platform-specific monetization patterns

### Technical Considerations
- **Development Complexity**: Platform-specific requirements
- **Performance Requirements**: Hardware capabilities and limitations
- **Feature Support**: Platform-specific features and APIs
- **Certification Process**: Time and cost of platform approval

### Business Considerations
- **Revenue Share**: Platform fees and revenue splits
- **Marketing Support**: Platform promotion opportunities
- **Competition Level**: Market saturation on platform
- **Long-term Viability**: Platform growth and sustainability

### Development Resources
- **Team Expertise**: Platform-specific development skills
- **Development Tools**: Available SDKs and engines
- **Testing Requirements**: Platform-specific testing needs
- **Maintenance Overhead**: Ongoing platform support costs

This reference guide helps teams make informed platform selection decisions and understand platform-specific requirements for successful game development and distribution.