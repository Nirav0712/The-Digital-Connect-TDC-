import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { PPCVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const PPC = () => {
    useSEO({ title: "Precision Target Explicit Intent. | The Digital Connect", description: "Highly aggressive Google Ads and LinkedIn PPC deployments maximizing exact algorithmic ROAS targeting high-value immediate commercial intents." });
    const theme = {"accent":"text-orange-600","bg":"bg-orange-500","softBg":"bg-orange-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Digital Marketing" parentRoute="/services/digital-marketing" eyebrow="Pay Per Click" title="Precision Target Explicit Intent." description="Highly aggressive Google Ads and LinkedIn PPC deployments maximizing exact algorithmic ROAS targeting high-value immediate commercial intents." theme={theme} visual={PPCVisual} />
                <SubServiceShared.Overview title="Capitalizing heavily on immediate demand" content={["While SEO is the long-term compounding asset, Pay Per Click (Google Search Network) mathematically captures users executing explicit transactional searches absolutely instantly today.","We engineer brutal mathematical PPC campaigns natively blocking massive negative keywords actively saving thousands of dollars in wasted ad spend. We rigorously A/B split-test distinct landing page headlines explicitly driving Quality Scores aggressively up, naturally pushing Cost-Per-Click drastically down natively.","This creates a highly predictable, incredibly scalable direct revenue machine operating exclusively on pure calculated Return On Ad Spend."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Search Network Domination", desc: "Bidding heavily strictly on absolute bottom-funnel commercial keywords demanding explicit physical solutions.", icon: <Target />}, {title: "Algorithmic Bidding", desc: "Deploying heavy machine learning natively adjusting click bids globally maximizing exact physical conversions.", icon: <Cog />}, {title: "Landing Page Optimization", desc: "Continuously refining exact URL destinations explicitly preventing massive paid traffic from bouncing instantly.", icon: <MousePointerClick />}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why are we losing money on Google Ads?","a":"Usually due to broad-match keyword settings and zero negative keyword maintenance. Google organically spends budget on irrelevant but vaguely related searches. We tightly exact-match campaigns preventing severe bleed."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Performance Marketing","href":"/services/digital-marketing/performance-marketing"},{"title":"UX Research","href":"/services/ui-ux-design/ux-research"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default PPC;
