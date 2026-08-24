const fs = require('fs');
const path = require('path');

const generate = () => {
    const pages = [
        {
            file: 'IOSDevelopment.jsx', dir: 'mobile-app-development', comp: 'IOSDevelopment',
            pRoute: '/services/mobile-app-development', pTitle: 'Mobile App Development', eyebrow: 'iOS Development',
            title: 'Native iOS Excellence on Apple Silicon.',
            desc: 'Designing and engineering premium iOS applications using Swift and SwiftUI that effortlessly dominate the App Store rankings.',
            theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' },
            visual: 'IOSVisual', visualImport: 'import { IOSVisual } from \'../../../components/services/subservices/visuals/VisualsMobile\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Designed exclusively for the Apple Ecosystem',
                content: [
                    'iOS users have the highest expectations inside the digital landscape. They demand fluidity, instantaneous feedback, and absolute adherence to Apple\'s strict Human Interface Guidelines. We do not just build apps; we engineer profound digital experiences specifically tailored for iPhone and iPad interactions.',
                    'Our engineers exclusively utilize Swift and SwiftUI, bypassing heavy abstraction layers to interact directly with the native iOS SDKs. This ensures 120hz ProMotion scrolling, zero frame drops, and deep algorithmic integrations with Apple HealthKit, CoreML, and ARKit directly.',
                    'When you deploy natively, you guarantee the absolute highest standard of performance and customer trust mathematically possible.'
                ]
            },
            capabilities: [
                { title: 'SwiftUI Architecture', desc: 'Building dynamic, declarative user interfaces that compile instantly and scale seamlessly.', icon: '<Code />' },
                { title: 'Core Data & Networking', desc: 'Secure local storage mechanisms synced flawlessly with complex remote REST/GraphQL backend logic.', icon: '<Database />' },
                { title: 'App Store Optimization', desc: 'Navigating rigorous Apple review processes ensuring zero-delay publishing pipelines.', icon: '<Rocket />' },
                { title: 'Push Notifications', desc: 'Implementing APNs for rich, segmented, hyper-targeted messaging increasing daily active usage.', icon: '<Bell />' },
                { title: 'Native Apple Hardware', desc: 'Harnessing the Neural Engine, LiDAR scanners, and secure biometrics directly via Swift code.', icon: '<Cpu />' },
                { title: 'In-App Subscriptions', desc: 'Architecting secure StoreKit payment gateways completely removing friction from recurring billing.', icon: '<CreditCard />' }
            ],
            tech: ['Swift', 'SwiftUI', 'Objective-C', 'CoreData', 'XCode', 'TestFlight', 'ARKit', 'StoreKit'],
            process: [
                { title: 'Human Interface Design', desc: 'Prototyping UX/UI in Figma strictly adhering to Apple typography, spacing, and native gesture paradigms.' },
                { title: 'Clean Architecture', desc: 'Isolating presentation logic from business logic using MVVM patterns to ensure massive scaling potential.' },
                { title: 'Memory Management', desc: 'Rigorous profiling through Instruments to eliminate severe memory leaks common in massive global platforms.' },
                { title: 'Store Deployment', desc: 'Handling certificates, provisioning profiles, and intense review negotiations directly on your behalf.' }
            ],
            faq: [
                { q: 'Why choose Native iOS over Cross-Platform?', a: 'Native iOS offers uncompromised performance, immediate access to brand-new Apple features upon release, and a distinctly smoother UX that Apple loyalists immediately recognize.' },
                { q: 'Will Apple reject the app?', a: 'Apple\'s review process is notoriously brutal. However, because our engineers adhere flawlessly to their rigid Human Interface and Privacy architectures, rejection is practically eliminated.' },
                { q: 'Can you integrate with our existing database?', a: 'Yes. The iOS app acts merely as a client front-end. We integrate directly with any secure custom API providing JSON payloads, syncing data instantly across your whole software ecosystem.' },
                { q: 'Do you guarantee support for newer iOS versions?', a: 'Absolutely. We actively monitor WWDC announcements, performing deep codebase audits every summer ahead of major iOS launches.' }
            ],
            related: [
                { title: 'Android Development', href: '/services/mobile-app-development/android-development' },
                { title: 'React Native Apps', href: '/services/mobile-app-development/react-native-development' },
                { title: 'UI/UX Engineering', href: '/services/ui-ux-design' },
                { title: 'Custom APIs', href: '/services/web-development/api-integration' }
            ]
        },
        {
            file: 'AndroidDevelopment.jsx', dir: 'mobile-app-development', comp: 'AndroidDevelopment',
            pRoute: '/services/mobile-app-development', pTitle: 'Mobile App Development', eyebrow: 'Android Development',
            title: 'Universal Reach, Perfectly Engineered.',
            desc: 'We engineer complex Kotlin applications navigating mass hardware fragmentation to deliver a singular, frictionless experience globally.',
            theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' },
            visual: 'AndroidVisual', visualImport: 'import { AndroidVisual } from \'../../../components/services/subservices/visuals/VisualsMobile\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Built exclusively for the massive Android ecosystem',
                content: [
                    'Android dominates global market share, spread across thousands of distinct device manufacturers, varying screen dimensions, and completely different OS versions. A poor Android team builds an app that breaks on older phones. We engineer robust logic that operates seamlessly across the entire hardware spectrum.',
                    'Our primary development backbone relies entirely on Kotlin. By shifting away from legacy Java structures, we construct null-safe, highly concise applications that significantly decrease runtime crashes and drastically speed up development pipelines.',
                    'Using Google\'s Material Design language, we build interfaces that feel deeply native to the platform, capturing immediate trust and ensuring extremely high retention matrices globally.'
                ]
            },
            capabilities: [
                { title: 'Kotlin Coroutines', desc: 'Writing asynchronous, non-blocking code executing massive concurrent backend fetches flawlessly.', icon: '<Code />' },
                { title: 'Material Design UI', desc: 'Crafting interfaces mapping perfectly to Google responsive component frameworks.', icon: '<Layers />' },
                { title: 'Hardware Fragmentation QA', desc: 'Rigorous remote testing across physical Samsung, Pixel, and OnePlus devices ensuring visual consistency.', icon: '<Smartphone />' },
                { title: 'Deep Device Integration', desc: 'Connecting directly to Bluetooth LE, internal filesystems, and complex camera APIs securely.', icon: '<Wifi />' },
                { title: 'Background Processing', desc: 'WorkManager APIs running complex background tasks silently without draining lithium-ion battery reserves.', icon: '<BatteryCharging />' },
                { title: 'Play Store Distribution', desc: 'Complete deployment, from staged rollouts scaling up to huge A/B testing on live marketplace users.', icon: '<PlaySquare />' }
            ],
            tech: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Room', 'Retrofit', 'Firebase', 'Play Console'],
            process: [
                { title: 'Ecosystem Mapping', desc: 'Identifying the target demographic device spectrum to optimize OS version compatibility.' },
                { title: 'Jetpack Compose UI', desc: 'Using Google\'s modern toolkit for building robust native UIs via incredibly rapid declarative methods.' },
                { title: 'API Integration', desc: 'Wiring asynchronous Retrofit algorithms fetching live data directly from secure server architectures.' },
                { title: 'Beta & Launch', desc: 'Utilizing closed beta tracks to hunt fragmented bugs prior to the immense global production rollout.' }
            ],
            faq: [
                { q: 'Is Kotlin necessary for modern Android apps?', a: 'Yes. Google strictly recommends Kotlin over Java. It profoundly reduces boilerplate code, inherently avoids major crash types (NullPointerExceptions), and integrates flawlessly with modern Jetpack libraries.' },
                { q: 'How do you handle UI across different screens?', a: 'Rather than hardcoding sizes, we design utilizing strict constraint layouts and fluid scaling vectors, ensuring identical aesthetics on a large foldable device and a budget 5-inch phone.' },
                { q: 'Can we port an iOS app directly to Android?', a: 'Aesthetically? No. Android has distinct navigation archetypes (like floating action buttons) that iOS lacks. We rewrite the UI to feel natively Android, even while the core logic remains philosophically identical.' },
                { q: 'Do you manage Android security?', a: 'Absolutely. We enforce SSL pinning, ProGuard code obfuscation natively, and deep encryption for local Room database instances protecting user integrity.' }
            ],
            related: [
                { title: 'iOS Engineering', href: '/services/mobile-app-development/ios-development' },
                { title: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
                { title: 'Backend Software', href: '/services/web-development/backend-development' },
                { title: 'UI/UX Design', href: '/services/ui-ux-design' }
            ]
        },
        {
            file: 'ReactNativeDev.jsx', dir: 'mobile-app-development', comp: 'ReactNativeDev',
            pRoute: '/services/mobile-app-development', pTitle: 'Mobile App Development', eyebrow: 'React Native',
            title: 'Web Talent Intersecting Native Power.',
            desc: 'Simultaneous iOS and Android deployments using a unified JavaScript pipeline cutting total cost and time dynamically.',
            theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' },
            visual: 'ReactNativeVisual', visualImport: 'import { ReactNativeVisual } from \'../../../components/services/subservices/visuals/VisualsMobile\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'The premier framework for massive dual-platform deployment',
                content: [
                    'Building two completely separated apps simultaneously in Swift (iOS) and Kotlin (Android) is incredibly robust, but immensely expensive and time-consuming. React Native fundamentally alters that paradigm.',
                    'Backed globally by Meta, React Native utilizes a shared JavaScript codebase that translates perfectly into native operating system components. Rather than rendering a slow HTML wrapper, it invokes real native views directly, providing almost imperceptible performance differences from purely native applications.',
                    'This enables startups and aggressive enterprises to deploy complex, identical logic across both huge platforms flawlessly while entirely avoiding the nightmare of synchronizing two disconnected engineering departments.'
                ]
            },
            capabilities: [
                { title: 'Shared Codebase', desc: 'Writing core logic processing once and compiling natively out to both massive global stores.', icon: '<FileCode2 />' },
                { title: 'Native Bridging', desc: 'Developing custom C++ or Java bridges when highly specific low-level hardware access is explicitly required.', icon: '<Network />' },
                { title: 'Instant OTA Updates', desc: 'Bypassing strict App Store review delays by pushing critical Javascript logic directly over-the-air.', icon: '<Zap />' },
                { title: 'Redux State Management', desc: 'Handling incredible algorithmic states identically aligned flawlessly across both distinct OS environments.', icon: '<Layers />' },
                { title: 'Complex Animations', desc: 'Employing Reanimated engines running interactions on the native thread guaranteeing 60fps drops zero frames.', icon: '<Sparkles />' },
                { title: 'Shared Web Components', desc: 'Extracting hooks and abstracting UX elements out for reuse natively inside the React Web browser product.', icon: '<Boxes />' }
            ],
            tech: ['React Native', 'TypeScript', 'Expo', 'Redux', 'Reanimated', 'Fastlane', 'Hermes Engine', 'Jest'],
            process: [
                { title: 'Architecture Unification', desc: 'Drafting strict TypeScript structures determining what logic is shared globally and what requires distinct native OS handling.' },
                { title: 'Component Engineering', desc: 'Building dynamic interfaces natively leveraging Flexbox layouts ensuring identical ratios on both iPhone and pixel devices.' },
                { title: 'Native Optimization', desc: 'Enabling the Hermes engine, slashing RAM overhead immensely, and shrinking initial application boot times dynamically.' },
                { title: 'Automated CI/CD', desc: 'Using Fastlane pipelines triggering instantaneous dual-deployments out directly to TestFlight and Google Play Consoles.' }
            ],
            faq: [
                { q: 'Is React Native just a web view inside an app?', a: 'Not at all. Frameworks like Cordova use WebViews (rendering HTML/CSS, which is slow). React Native literally translates your Javascript directly into native OS C++ components. It feels like a real app because it IS a real app.' },
                { q: 'Will the app look identical on iOS and Android?', a: 'Mostly yes, but logically no. Good React Native apps adopt native paradigms. A tab-bar or switch component will look like an Apple switch on iOS, and a Material switch on Android automatically based on OS flags.' },
                { q: 'What happens if we need a feature React Native doesn\'t support?', a: 'React Native has an escape hatch. We simply write the missing functionality natively in Swift/Kotlin and bridge it back to the JavaScript main thread.' },
                { q: 'Does React Native save money?', a: 'Yes. Because 80% to 95% of the codebase is shared, you only pay for one engineering team instead of completely siloed iOS and Android departments doing redundant logic work.' }
            ],
            related: [
                { title: 'Cross Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
                { title: 'Frontend React', href: '/services/web-development/frontend-development' },
                { title: 'Flutter Apps', href: '/services/mobile-app-development/flutter-development' },
                { title: 'UI/UX Design', href: '/services/ui-ux-design' }
            ]
        },
        {
            file: 'FlutterDev.jsx', dir: 'mobile-app-development', comp: 'FlutterDevelopment',
            pRoute: '/services/mobile-app-development', pTitle: 'Mobile App Development', eyebrow: 'Flutter',
            title: 'Uncompromised 60fps Canvas Graphics Globally.',
            desc: 'Google-backed Dart infrastructures painting incredibly fast, fundamentally beautiful applications completely ignoring traditional native restrictions.',
            theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' },
            visual: 'FlutterVisual', visualImport: 'import { FlutterVisual } from \'../../../components/services/subservices/visuals/VisualsMobile\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'The revolutionary multi-platform graphics engine',
                content: [
                    'Unlike traditional cross-platform tools that map code to OS-specific rules, Flutter functions entirely differently. It is a massive, highly optimized graphics engine that literally paints custom pixels directly to the screen frame-by-frame, completely bypassing rigid smartphone limitations.',
                    'Because Flutter is essentially its own canvas, applications look mathematically identical down to the microscopic pixel across iOS, Android, and Desktop regardless of what OS version the user holds.',
                    'Engineered by Google and powered heavily by Dart, it is specifically designed to render immensely complex animations with absolute 60hz or 120hz fluidity, making it the dominating choice for products requiring highly custom bespoke interfaces disconnected from standard Apple or Google generic aesthetics.'
                ]
            },
            capabilities: [
                { title: 'Absolute UI Consistency', desc: 'Overriding OS variations completely resulting in a fundamentally identical user brand experience everywhere natively.', icon: '<MonitorSmartphone />' },
                { title: 'Custom Render Engine', desc: 'Leveraging Skia or Impeller graphics architectures bypassing OEM bottlenecks dynamically producing hyper-fast frame rendering.', icon: '<Cpu />' },
                { title: 'Provider State Architecture', desc: 'Handling massive bidirectional localized data caches ensuring the UI never stutters during incredibly intense internet payloads.', icon: '<Layers />' },
                { title: 'Massive Widget Library', desc: 'Composing applications extremely fast via utilizing exhaustive pre-built customizable micro-components cleanly stacked together.', icon: '<Box />' },
                { title: 'Hot Reload Physics', desc: 'Speeding development times drastically by injecting new code directly into the running application milliseconds after compiling.', icon: '<RefreshCw />' },
                { title: 'Any Screen Deployment', desc: 'A single solitary codebase compiling down simultaneously identically out to Mobile, Web Dashboards, Mac, and Windows executables.', icon: '<Globe />' }
            ],
            tech: ['Flutter', 'Dart', 'Skia', 'Impeller', 'Provider', 'Bloc', 'Firebase', 'Figma'],
            process: [
                { title: 'Widget Architectural Mapping', desc: 'Breaking intricate aesthetic Figma files into deeply isolated composable widget elements.' },
                { title: 'State Implementation', desc: 'Wiring Bloc or Riverpod patterns protecting global internal data variables cleanly from UI disruptions.' },
                { title: 'Graphics Development', desc: 'Programmatically coding custom vector animations rendering seamlessly inside the native engine canvas directly.' },
                { title: 'Simultaneous Compilation', desc: 'Outputting executable bundles perfectly ready universally across Apple App Store and Google Play Console environments.' }
            ],
            faq: [
                { q: 'Is Flutter faster than React Native?', a: 'Mathematically, yes. Because React Native relies on bridging JavaScript to a native UI component, there is slight communication friction. Flutter bypasses the native UI completely and draws its own pixels, resulting in incredibly smooth custom animations.' },
                { q: 'Why do so many startups choose Flutter?', a: 'Unparalleled development speed. The \'Hot Reload\' feature allows engineers to view changes instantly without rebuilding the app. Combined with an identical UI across devices, it drastically reduces time-to-market.' },
                { q: 'Does Flutter create large app sizes?', a: 'Because it ships with its entire graphics engine (Skia/Impeller) inside the application package natively, Flutter apps initially have a slightly larger core footprint than purely native frameworks, but usually negligibly so.' },
                { q: 'Can Flutter interact with my camera or GPS?', a: 'Absolutely. There is a massive ecosystem of well-maintained plugins granting deep, unthrottled access connecting directly into complex internal hardware peripherals universally.' }
            ],
            related: [
                { title: 'Cross Platform Development', href: '/services/mobile-app-development/cross-platform-apps' },
                { title: 'UI/UX Interactive Design', href: '/services/ui-ux-design' },
                { title: 'React Native Apps', href: '/services/mobile-app-development/react-native-development' },
                { title: 'Custom Web Applications', href: '/services/web-development/custom-web-applications' }
            ]
        },
        {
            file: 'CrossPlatform.jsx', dir: 'mobile-app-development', comp: 'CrossPlatformApps',
            pRoute: '/services/mobile-app-development', pTitle: 'Mobile App Development', eyebrow: 'Cross-Platform Apps',
            title: 'One Solitary Codebase. Universal Enterprise Output.',
            desc: 'Simultaneous immense multi-store deployments slicing physical production cycles by half without sacrificing critical application robustness.',
            theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' },
            visual: 'CrossPlatformVisual', visualImport: 'import { CrossPlatformVisual } from \'../../../components/services/subservices/visuals/VisualsMobile\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Eliminate redundant operational engineering',
                content: [
                    'Traditional digital scaling demands three separate engineering teams: one for Web, one for iOS, and one for Android. This triples your physical financial overhead, heavily fractures the product identity, and transforms simple feature updates into massive agonizing synchronization bottlenecks.',
                    'Cross-platform development represents the definitive solution for immediate modern enterprise scaling. Utilizing advanced architectures like React Native or Flutter, we author the fundamental business logic literally once. We update, test, and debug that one source of truth exclusively.',
                    'Upon compilation, the codebase algorithmically generates highly optimized applications universally across essentially every major device standard globally, drastically shrinking resource expenses while doubling operational shipping velocity immediately.'
                ]
            },
            capabilities: [
                { title: 'Consolidated Engineering', desc: 'Removing siloed OS teams converting complex updates into a single singular agile deployment strategy.', icon: '<Users />' },
                { title: 'Feature Parity Guaranteed', desc: 'Preventing devastating scenarios where Android customers receive updates significantly fundamentally slower than iOS users.', icon: '<ShieldCheck />' },
                { title: 'Drastic Expense Reduction', desc: 'Saving roughly 40% of the entire macro IT budget by totally negating massive duplicate developmental pipelines permanently.', icon: '<CreditCard />' },
                { title: 'Rapid Market Penetration', desc: 'Releasing Minimum Viable Products literally twice as quickly drastically increasing crucial early adoption momentum.', icon: '<Rocket />' },
                { title: 'Unified Code Auditing', desc: 'Centralizing quality assurance processes discovering hidden critical variable vulnerabilities vastly earlier natively.', icon: '<Search />' },
                { title: 'Shared Web Expansion', desc: 'Seamlessly porting massive mobile logic chunks explicitly outward generating internal administrative React dashboards effortlessly.', icon: '<LayoutDashboard />' }
            ],
            tech: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'Firebase', 'Redux', 'AWS Amplify', 'Bitrise CI/CD'],
            process: [
                { title: 'Framework Evaluation', desc: 'Selecting between Flutter (for profound bespoke graphics) or React Native (for immense logic reuse) based on your exact business mechanics.' },
                { title: 'Universal UI Modeling', desc: 'Building dynamic Figma components structured explicitly adjusting mathematically based around underlying device bounds.' },
                { title: 'Core Logic Engineering', desc: 'Drafting the massive central nervous system connecting natively seamlessly outward towards separate physical hardware abstraction layers.' },
                { title: 'Dual-Pipeline Compilation', desc: 'Deploying isolated identical binaries simultaneously directly to both Apple and Google verification matrix servers flawlessly.' }
            ],
            faq: [
                { q: 'Which cross-platform tool is significantly better?', a: 'Neither is objectively \"better.\" If you heavily utilize custom 3D animations or complex branding, Flutter dominates perfectly. If you have an existing massive React-web infrastructure, React Native is vastly superior.' },
                { q: 'Will a cross-platform app drain user batteries?', a: 'Historically, legacy tools (Cordova/Ionic) suffered performance drains due to browser abstraction. Modern engines (Flutter/React Native) execute incredibly efficiently, using hardware acceleration fundamentally identical to purely native Swift logic.' },
                { q: 'Do we still need two developer accounts?', a: 'Yes. You are still technically submitting uniquely processed packages explicitly via your own Apple Developer Account ($99/yr) and Google Play Console ($25/once) natively.' },
                { q: 'Does cross-platform limit specific OS features?', a: 'Rarely. Over 98% of functionality (GPS, Camera, Notifications, Accelerometer) is supported flawlessly. For hyper-bleeding-edge exclusive hardware, we securely write tiny native plugins bypassing the restriction instantly.' }
            ],
            related: [
                { title: 'Flutter Innovation', href: '/services/mobile-app-development/flutter-development' },
                { title: 'React Native Apps', href: '/services/mobile-app-development/react-native-development' },
                { title: 'API Integrations', href: '/services/web-development/api-integration' },
                { title: 'Mobile UI/UX', href: '/services/ui-ux-design' }
            ]
        }
    ];

    let imports = `import { Code, Database, Rocket, Bell, Cpu, CreditCard, Code, Layers, Smartphone, Wifi, BatteryCharging, PlaySquare, FileCode2, Network, Zap, Sparkles, Boxes, MonitorSmartphone, Box, RefreshCw, Globe, Users, ShieldCheck, Search, LayoutDashboard } from 'lucide-react';\n`;

    pages.forEach(p => {
        let code = `import React from 'react';\nimport useSEO from '../../../hooks/useSEO';\nimport PageTransition from '../../../components/common/PageTransition';\nimport { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';\n${p.visualImport}\n${imports}\n\n`;
        code += `const ${p.comp} = () => {\n`;
        code += `    useSEO({ title: "${p.title} | The Digital Connect", description: "${p.desc}" });\n`;
        code += `    const theme = ${JSON.stringify(p.theme)};\n`;
        code += `    return (\n        <PageTransition>\n            <div className="w-full bg-white min-h-screen font-sans">\n`;

        p.order.forEach(section => {
            if (section === 'Hero') {
                code += `                <SubServiceShared.Hero parentTitle="${p.pTitle}" parentRoute="${p.pRoute}" eyebrow="${p.eyebrow}" title="${p.title}" description="${p.desc}" theme={theme} visual={${p.visual}} />\n`;
            }
            if (section === 'Overview') {
                code += `                <SubServiceShared.Overview title="${p.overview.title}" content={${JSON.stringify(p.overview.content)}} theme={theme} />\n`;
            }
            if (section === 'Capabilities') {
                code += `                <SubServiceShared.Capabilities theme={theme} capabilities={[${p.capabilities.map(c => `{title: "${c.title}", desc: "${c.desc}", icon: ${c.icon}}`).join(', ')}]} />\n`;
            }
            if (section === 'Technology') {
                code += `                <SubServiceShared.Technology theme={theme} technologies={${JSON.stringify(p.tech)}} />\n`;
            }
            if (section === 'Process') {
                code += `                <SubServiceShared.Process theme={theme} process={${JSON.stringify(p.process)}} />\n`;
            }
            if (section === 'FAQ') {
                code += `                <SubServiceShared.FAQ theme={theme} faqs={${JSON.stringify(p.faq)}} />\n`;
            }
            if (section === 'Related') {
                code += `                <SubServiceShared.Related theme={theme} links={${JSON.stringify(p.related)}} />\n`;
            }
            if (section === 'CTA') {
                code += `                <SubServiceShared.CTA theme={theme} />\n`;
            }
        });

        code += `            </div>\n        </PageTransition>\n    );\n};\n\nexport default ${p.comp};\n`;

        fs.writeFileSync(path.join(__dirname, 'src/pages/services', p.dir, p.file), code);
    });

    console.log("Generated Mobile Pages");
};

generate();
