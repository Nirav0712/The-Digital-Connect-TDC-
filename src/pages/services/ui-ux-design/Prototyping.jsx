import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { PrototypingVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const Prototyping = () => {
    useSEO({ title: "Experience The Product Before It Breathes. | The Digital Connect", description: "Lightning-fast interactive models validating complex user journeys instantaneously prior to committing exhaustive engineering resources." });
    const theme = {"accent":"text-blue-500","bg":"bg-blue-500","softBg":"bg-blue-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="Prototyping" title="Experience The Product Before It Breathes." description="Lightning-fast interactive models validating complex user journeys instantaneously prior to committing exhaustive engineering resources." theme={theme} visual={PrototypingVisual} />
                <SubServiceShared.Overview title="Clickable realism dictating instant validation" content={["Static images on a screen communicate absolutely nothing about how a fluid platform intimately feels. To truly understand velocity, bounce-rate risk, and layout mechanics, you must deploy an interactive prototype.","We connect hundreds of vector artboards dynamically inside Figma or Framer, mapping intricate click-events, hover-states, and modal transitions entirely without writing a solitary line of production code.","This enables aggressive stakeholder alignment instantly. You can load it practically on your actual iPhone and test the precise navigation mechanics exactly as a native user authentically would."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Micro-Interaction Design", desc: "Simulating complex button states, dropdown logic, and form validations instantly.", icon: <Zap />}, {title: "High-Fidelity Flow", desc: "Connecting massive artboard infrastructures allowing total holistic platform navigability.", icon: <Pointer />}, {title: "Investor Pitch Models", desc: "Delivering flawless executable visual illusions allowing startups to raise mass capital securely.", icon: <Maximize />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Figma","Framer","Protopie","Origami Studio"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Component Linking","desc":"Mapping physical 'hotspots' forcing intuitive screen-to-screen navigation natively."},{"title":"Transition Implementation","desc":"Deploying smart-animate physics granting organic weight to dynamic screen loads."},{"title":"Usability Validation","desc":"Deploying the executable prototype directly out to blind test groups monitoring click drops."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Can we use the prototype code in production?","a":"No. Prototypes are strictly visual simulations lacking completely real underlying database architecture. The frontend team uses the prototype as the exact visual mandate to construct the real structural code subsequently."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"UI Design","href":"/services/ui-ux-design/ui-design"},{"title":"Design Systems","href":"/services/ui-ux-design/design-systems"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default Prototyping;
