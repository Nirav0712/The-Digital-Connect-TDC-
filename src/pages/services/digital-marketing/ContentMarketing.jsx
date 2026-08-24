import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ContentMarketingVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const ContentMarketing = () => {
    useSEO({ title: "Value that Consistently Converts. | The Digital Connect", description: "Producing elite long-form educational ecosystems explicitly capturing high-intent prospects entirely before they are ready to transact physically." });
    const theme = {"accent":"text-brand-blue","bg":"bg-brand-blue/20","softBg":"bg-brand-cyan/10"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Digital Marketing" parentRoute="/services/digital-marketing" eyebrow="Content Marketing" title="Value that Consistently Converts." description="Producing elite long-form educational ecosystems explicitly capturing high-intent prospects entirely before they are ready to transact physically." theme={theme} visual={ContentMarketingVisual} />
                <SubServiceShared.Overview title="Establishing categorical thought leadership" content={["Before prospects purchase massive B2B software or heavy retainer services, they actively research solutions. If you explicitly provide the most authoritative educational resource solving their immediate pain natively, you completely win the eventual physical contract sale.","We construct immense content pipelines: whitepapers, in-depth blog topologies, and heavy case studies. We actively refuse generic AI-generated fluff, exclusively focusing heavily on profound actionable proprietary insight driving extreme user trust.","This ecosystem acts fundamentally as an evergreen sales engine actively indoctrinating global prospects comprehensively mathematically while your team sleeps entirely."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Authority Blogging", desc: "Drafting immense 2000+ word technical architectures capturing severe deep long-tail SERP traffic flawlessly.", icon: <Target />}, {title: "Lead Magnet Funnels", desc: "Engineering exact high-value PDFs actively gating them securely strictly exchanging for premium prospect emails.", icon: <LockKeyhole />}, {title: "Email Nurturing", desc: "Drafting heavy automated sequential logic actively warming completely cold leads natively over massive 60-day loops.", icon: <Mail />}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Can we just use AI to write blogs?","a":"You can, but Google explicitly penalizes unoriginal, thin AI content heavily. True Content Marketing actively requires physical expert Subject Matter insertion natively driving actual human emotional trust fundamentally."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"SEO","href":"/services/digital-marketing/seo"},{"title":"Social Media","href":"/services/digital-marketing/social-media"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default ContentMarketing;
