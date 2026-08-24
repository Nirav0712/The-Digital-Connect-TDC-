import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { UIDesignVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const UIDesign = () => {
    useSEO({ title: "Interfaces Operating With Distinct Purpose. | The Digital Connect", description: "Emotionally resonant high-fidelity interfaces perfectly balancing massive commercial conversion functionality with profound aesthetic beauty." });
    const theme = {"accent":"text-pink-500","bg":"bg-pink-500","softBg":"bg-pink-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="UI Design" title="Interfaces Operating With Distinct Purpose." description="Emotionally resonant high-fidelity interfaces perfectly balancing massive commercial conversion functionality with profound aesthetic beauty." theme={theme} visual={UIDesignVisual} />
                <SubServiceShared.Overview title="Every single pixel serving an explicit conversion goal" content={["Beautiful but functionally useless interfaces destroy companies instantly. Boring interfaces lose trust profoundly. The absolute apex of digital design lies directly where aesthetic excellence flawlessly overlaps with psychological human conversion.","We construct massive visual ecosystems heavily relying strictly on accessible typography scales, meticulous negative whitespace, and color psychology forcing exact directed visual hierarchy.","Every shadow, border-radius, and gradient serves an explicit role: guiding the user exactly toward the absolute highest friction value point, and removing all cognitive resistance intrinsically stopping them from converting."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Visual Hierarchy", desc: "Utilizing sizing contrasts heavily forcing users explicitly down the optimal path natively.", icon: <Layout />}, {title: "Typography Architecture", desc: "Selecting highly legible, premium font-faces scaling perfectly downwards dynamically to mobile viewports.", icon: <Palette />}, {title: "Color Psychology", desc: "Implementing deep brand tokens evoking absolute exact emotional responses implicitly securing user trust.", icon: <Target />}]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Moodboarding","desc":"Extracting macro visual aspirations synthesizing massive visual inspiration entirely before execution."},{"title":"Layout Construction","desc":"Deploying typography, grids, and primary macro visual rulesets comprehensively onto the wireframes."},{"title":"Micro Refinement","desc":"Polishing intense shadow details, border contrasts, and absolute pixel-perfect spacing ratios."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Will the design be responsive?","a":"Absolutely. We design utilizing strict 12-column grids forcing immaculate scaling natively down from huge 4k desktop monitors explicitly down to tight 320px mobile viewports flawlessly."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Design Systems","href":"/services/ui-ux-design/design-systems"},{"title":"Frontend Web","href":"/services/web-development/frontend-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default UIDesign;
