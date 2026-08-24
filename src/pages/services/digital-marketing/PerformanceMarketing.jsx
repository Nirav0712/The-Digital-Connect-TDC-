import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { PerformanceMarketingVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const PerformanceMarketing = () => {
    useSEO({ title: "Math Not Magic. Scale with Confidence. | The Digital Connect", description: "Omnichannel paid-acquisition actively deploying intense Meta, TikTok, and Programmatic ad structures strictly focusing heavily exclusively on mathematically guaranteed positive ROAS." });
    const theme = {"accent":"text-emerald-600","bg":"bg-emerald-500","softBg":"bg-emerald-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Digital Marketing" parentRoute="/services/digital-marketing" eyebrow="Performance Marketing" title="Math Not Magic. Scale with Confidence." description="Omnichannel paid-acquisition actively deploying intense Meta, TikTok, and Programmatic ad structures strictly focusing heavily exclusively on mathematically guaranteed positive ROAS." theme={theme} visual={PerformanceMarketingVisual} />
                <SubServiceShared.Overview title="Treating ad-spend as an accurate financial algorithm" content={["Brand marketing measures feelings. Performance marketing explicitly measures absolute gross profit capital natively. We operate heavily across Meta (Facebook/IG), TikTok, and programmatic displays actively demanding exact measurable Return On Ad Spend.","We heavily deploy intense server-side tracking (Conversions API) natively bypassing chaotic absolute iOS privacy restrictions, fundamentally feeding explicit physical purchase data securely perfectly back directly mapping exactly to Facebook algorithms.","This ensures extreme machine-learning optimization actively hunting exact demographic profiles statistically proven mathematically likely fundamentally prone directly converting entirely predictably."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Meta & TikTok Ads", desc: "Scaling massive daily budgets natively explicitly balancing creative fatigue mathematically simultaneously avoiding massive CPA spikes.", icon: <Maximize />}, {title: "Server-Side Tracking", desc: "Writing exact Node.js logic pushing offline heavy CRM conversion data perfectly securely into algorithmic learning.", icon: <Database />}, {title: "Rapid Creative Testing", desc: "Deploying heavy matrices natively actively isolating exactly which specific headline/video combination physically drops click costs entirely.", icon: <Cog />}, {title: "Omnichannel Retargeting", desc: "Chasing abandoned users aggressively flawlessly globally violently securing drastically cheap final closing conversions natively.", icon: <Target />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Meta Ads Manager","TikTok business","GTM","Google Analytics 4","Triple Whale","Stape.io"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Tracking Architecture","desc":"Explicitly fixing drastically broken pixel integrations natively heavily ensuring algorithms receive perfect exact data physically."},{"title":"Creative Testing","desc":"Running tiny budgets globally finding extreme anomaly ads mathematically outperforming standard chaotic benchmarks fundamentally."},{"title":"Vertical Scaling","desc":"Aggressively injecting massive capital explicitly specifically into winning ad-sets natively perfectly without algorithmically breaking CPA ceilings."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why are my current Facebook Ads failing?","a":"Because creative assets fatigue incredibly rapidly natively, and browser pixel tracking natively explicitly misses 30% of actual data due entirely directly to heavy iOS14 privacy blocks. You must aggressively implement direct server-side (CAPI) architectures entirely."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"PPC","href":"/services/digital-marketing/ppc"},{"title":"Shopify Development","href":"/services/ecommerce-development/shopify"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default PerformanceMarketing;
