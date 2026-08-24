import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { UXResearchVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const UXResearch = () => {
    useSEO({ title: "Understand People Before Building for Them. | The Digital Connect", description: "Deep qualitative and quantitative behavioral research powering human-centered product development and eliminating vast engineering waste." });
    const theme = {"accent":"text-brand-periwinkle","bg":"bg-brand-periwinkle/20","softBg":"bg-brand-cyan/10"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="UX Research" title="Understand People Before Building for Them." description="Deep qualitative and quantitative behavioral research powering human-centered product development and eliminating vast engineering waste." theme={theme} visual={UXResearchVisual} />
                <SubServiceShared.Overview title="Data-driven insights over subjective opinions" content={["Many companies waste millions engineering products nobody genuinely wants because they assume they know their target demographic. Authentic UX Research violently removes assumption from the equation. We substitute opinion with rigorous, tested behavioral insight.","Through detailed user interviews, competitor disruption mapping, and massive A/B split-testing campaigns, we outline exact pain points causing friction in your existing ecosystem, isolating exactly where revenue is leaking.","By mapping the exact emotional User Journey natively from discovery to conversion, we build foundational blueprints that guarantee every button, layout, and copy aligns perfectly with what converts maximum capital."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "User Interviews", desc: "Conducting aggressive 1-on-1 qualitative analysis revealing hidden structural biases and desires.", icon: <User />}, {title: "Journey Mapping", desc: "Visualizing exact touchpoints tracing the user from pure awareness down to absolute retention.", icon: <Map />}, {title: "Competitor Auditing", desc: "Scientifically breaking down industry rivals to expose massive conversion flaws you can exploit.", icon: <Search />}, {title: "Usability Testing", desc: "Deploying low-fidelity prototypes early to catch catastrophic UX flaws before committing code.", icon: <Pointer />}, {title: "Persona Development", desc: "Synthesizing distinct psychographic profiles dictating exactly how disparate logic flows operate.", icon: <Target />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Lookback","Hotjar","Miro","Figma","Google Analytics","Typeform"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Discovery Phase","desc":"Extracting internal assumptions directly from stakeholders and contrasting them against actual market reality."},{"title":"Insight Harvesting","desc":"Running exhaustive interactive tests with physical human demographics mapping exact emotional friction."},{"title":"Data Synthesis","desc":"Transforming chaotic feedback directly into clear, actionable structural wireframing mandates."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why shouldn't we just skip research and start designing?","a":"Because designing blindly is catastrophically expensive. Changing a wireframe takes minutes. Changing committed React code takes weeks. Research ensures we execute flawlessly on the first production iteration."},{"q":"How long does UX Research take?","a":"Typically 2 to 4 weeks depending entirely on how rapidly we can recruit explicit target demographics for qualitative testing and interviews."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Wireframing","href":"/services/ui-ux-design/wireframing"},{"title":"UI Design","href":"/services/ui-ux-design/ui-design"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default UXResearch;
