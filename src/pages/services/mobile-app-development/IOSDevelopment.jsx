import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { IOSVisual } from '../../../components/services/subservices/visuals/VisualsMobile';
import { Database, Rocket, Bell, Cpu, CreditCard, Code, Layers, Smartphone, Wifi, BatteryCharging, PlaySquare, FileCode2, Network, Zap, Sparkles, Boxes, MonitorSmartphone, Box, RefreshCw, Globe, Users, ShieldCheck, Search, LayoutDashboard } from 'lucide-react';


const IOSDevelopment = () => {
    useSEO({ title: "Native iOS Excellence on Apple Silicon. | The Digital Connect", description: "Designing and engineering premium iOS applications using Swift and SwiftUI that effortlessly dominate the App Store rankings." });
    const theme = {"accent":"text-blue-500","bg":"bg-blue-500","softBg":"bg-blue-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Mobile App Development" parentRoute="/services/mobile-app-development" eyebrow="iOS Development" title="Native iOS Excellence on Apple Silicon." description="Designing and engineering premium iOS applications using Swift and SwiftUI that effortlessly dominate the App Store rankings." theme={theme} visual={IOSVisual} />
                <SubServiceShared.Overview title="Designed exclusively for the Apple Ecosystem" content={["iOS users have the highest expectations inside the digital landscape. They demand fluidity, instantaneous feedback, and absolute adherence to Apple's strict Human Interface Guidelines. We do not just build apps; we engineer profound digital experiences specifically tailored for iPhone and iPad interactions.","Our engineers exclusively utilize Swift and SwiftUI, bypassing heavy abstraction layers to interact directly with the native iOS SDKs. This ensures 120hz ProMotion scrolling, zero frame drops, and deep algorithmic integrations with Apple HealthKit, CoreML, and ARKit directly.","When you deploy natively, you guarantee the absolute highest standard of performance and customer trust mathematically possible."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "SwiftUI Architecture", desc: "Building dynamic, declarative user interfaces that compile instantly and scale seamlessly.", icon: <Code />}, {title: "Core Data & Networking", desc: "Secure local storage mechanisms synced flawlessly with complex remote REST/GraphQL backend logic.", icon: <Database />}, {title: "App Store Optimization", desc: "Navigating rigorous Apple review processes ensuring zero-delay publishing pipelines.", icon: <Rocket />}, {title: "Push Notifications", desc: "Implementing APNs for rich, segmented, hyper-targeted messaging increasing daily active usage.", icon: <Bell />}, {title: "Native Apple Hardware", desc: "Harnessing the Neural Engine, LiDAR scanners, and secure biometrics directly via Swift code.", icon: <Cpu />}, {title: "In-App Subscriptions", desc: "Architecting secure StoreKit payment gateways completely removing friction from recurring billing.", icon: <CreditCard />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Swift","SwiftUI","Objective-C","CoreData","XCode","TestFlight","ARKit","StoreKit"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Human Interface Design","desc":"Prototyping UX/UI in Figma strictly adhering to Apple typography, spacing, and native gesture paradigms."},{"title":"Clean Architecture","desc":"Isolating presentation logic from business logic using MVVM patterns to ensure massive scaling potential."},{"title":"Memory Management","desc":"Rigorous profiling through Instruments to eliminate severe memory leaks common in massive global platforms."},{"title":"Store Deployment","desc":"Handling certificates, provisioning profiles, and intense review negotiations directly on your behalf."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why choose Native iOS over Cross-Platform?","a":"Native iOS offers uncompromised performance, immediate access to brand-new Apple features upon release, and a distinctly smoother UX that Apple loyalists immediately recognize."},{"q":"Will Apple reject the app?","a":"Apple's review process is notoriously brutal. However, because our engineers adhere flawlessly to their rigid Human Interface and Privacy architectures, rejection is practically eliminated."},{"q":"Can you integrate with our existing database?","a":"Yes. The iOS app acts merely as a client front-end. We integrate directly with any secure custom API providing JSON payloads, syncing data instantly across your whole software ecosystem."},{"q":"Do you guarantee support for newer iOS versions?","a":"Absolutely. We actively monitor WWDC announcements, performing deep codebase audits every summer ahead of major iOS launches."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Android Development","href":"/services/mobile-app-development/android-development"},{"title":"React Native Apps","href":"/services/mobile-app-development/react-native-development"},{"title":"UI/UX Engineering","href":"/services/ui-ux-design"},{"title":"Custom APIs","href":"/services/web-development/api-integration"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default IOSDevelopment;
