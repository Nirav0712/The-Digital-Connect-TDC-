import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { DesignSystemsVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const DesignSystems = () => {
    useSEO({ title: "Infinite Consistency at Every Touchpoint. | The Digital Connect", description: "Scalable React-ready tokenized UX component libraries ensuring absolute infinite visual consistency universally aiding massive engineering team scaling." });
    const theme = {"accent":"text-emerald-500","bg":"bg-emerald-500","softBg":"bg-emerald-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="Design Systems" title="Infinite Consistency at Every Touchpoint." description="Scalable React-ready tokenized UX component libraries ensuring absolute infinite visual consistency universally aiding massive engineering team scaling." theme={theme} visual={DesignSystemsVisual} />
                <SubServiceShared.Overview title="Ending visual fragmentation permanently" content={["As applications scale rapidly and engineering teams expand fiercely, visual integrity collapses effortlessly. A developer utilizes slightly different hex codes; a designer creates slightly different paddings. Immediately, the ecosystem feels disjointed, amateurish, and heavily broken.","A Design System is the absolute singular source of truth. We build massive, meticulously documented token libraries (Colors, Spacing, Typography) natively translated directly into functional UI components (Buttons, Inputs, Modals).","By deploying systems identical to Google's Material or Apple's HIG exclusively for your brand, your development speed exponentially multiples because engineers simply plug-and-play governed pre-built interfaces completely removing subjective visual decision making."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Design/Code Tokens", desc: "Exporting raw base variables universally syncing Figma updates directly into CSS/Tailwind infrastructures instantly.", icon: <Layers />}, {title: "Component Libraries", desc: "Building comprehensive master assets covering absolutely every single interactive state flawlessly.", icon: <Component />}, {title: "Interactive Documentation", desc: "Delivering storybooks teaching newly hired engineers explicitly how to deploy aesthetics properly.", icon: <Search />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Figma","Storybook","Tailwind","React","Zeroheight"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Foundation Definition","desc":"Setting immutable baseline rules concerning primitive colors, semantic scaling, and global margins."},{"title":"Component Engineering","desc":"Constructing robust variants including explicit warning, error, success, hover, and loading states strictly."},{"title":"Handoff Protocol","desc":"Syncing native Figma variable tokens dynamically directly out into the actual production repository branch."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Is a Design System necessary for a small project?","a":"No. Small projects operate fine organically. Design Systems are required specifically for mid-large platforms scaling aggressively needing extreme consistency across entirely different engineering squads."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Frontend Architecture","href":"/services/web-development/frontend-development"},{"title":"Cross Platform Apps","href":"/services/mobile-app-development/cross-platform-apps"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default DesignSystems;
