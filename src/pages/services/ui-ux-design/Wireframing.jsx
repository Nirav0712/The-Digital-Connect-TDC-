import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { WireframingVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const Wireframing = () => {
    useSEO({ title: "Turn Ideas Into Clear Product Architectures. | The Digital Connect", description: "Low-fidelity structural blueprints isolating structural logic from surface visual aesthetics, guaranteeing frictionless navigation models." });
    const theme = { "accent": "text-gray-600", "bg": "bg-gray-400", "softBg": "bg-gray-50" };
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="Wireframing" title="Turn Ideas Into Clear Product Architectures." description="Low-fidelity structural blueprints isolating structural logic from surface visual aesthetics, guaranteeing frictionless navigation models." theme={theme} visual={WireframingVisual} />
                <SubServiceShared.Overview title="Nailing the mechanics before applying the paint" content={["Before rendering brand colors, typography, or micro-animations, the platform structure MUST be logically sound. Wireframing entirely isolates user experience functionality from visual distraction.", "By mapping out skeletal constraints, we can aggressively debate layout hierarchies, button placements, and complex form architectures efficiently without wasting thousands of dollars updating high-fidelity vector graphics.", "This is the absolute core architectural phase. The wireframes dictate exactly how the backend engineers structured databases, providing a seamless blueprint guiding all subsequent production."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{ title: "Information Architecture", desc: "Structuring massive complex datasets intuitively preventing deep navigation confusion natively.", icon: <Layers /> }, { title: "Low Fidelity Layouts", desc: "Rapid gray-box sketching ensuring macro page flow dominates effectively.", icon: <Layout /> }, { title: "User Flow Diagrams", desc: "Mapping exact conditional logic chains ('If user clicks here, show X').", icon: <Map /> }]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{ "q": "Why are wireframes just gray boxes?", "a": "To entirely remove bias. When clients see colors, they inherently argue about branding rather than functionality. Gray boxes force everyone to focus exclusively on usability and conversion architecture." }]} />
                <SubServiceShared.Related theme={theme} links={[{ "title": "Prototyping", "href": "/services/ui-ux-design/prototyping" }, { "title": "Frontend Systems", "href": "/services/web-development/frontend-development" }]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default Wireframing;
