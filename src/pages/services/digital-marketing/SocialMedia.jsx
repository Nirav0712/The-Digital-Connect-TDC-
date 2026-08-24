import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { SocialMediaVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const SocialMedia = () => {
    useSEO({ title: "Cultivating Dedicated Brand Cults. | The Digital Connect", description: "Organic social trajectory strategy explicitly engineering massive community engagement transforming standard followers directly into radical brand evangelists." });
    const theme = {"accent":"text-pink-600","bg":"bg-pink-500","softBg":"bg-pink-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Digital Marketing" parentRoute="/services/digital-marketing" eyebrow="Social Media Management" title="Cultivating Dedicated Brand Cults." description="Organic social trajectory strategy explicitly engineering massive community engagement transforming standard followers directly into radical brand evangelists." theme={theme} visual={SocialMediaVisual} />
                <SubServiceShared.Overview title="Engineering authentic digital presence" content={["Generic corporate postings generate absolutely zero algorithmic traction. Modern social media fundamentally rewards native, extremely authentic, heavily engaging value-driven content mapping directly perfectly to respective platform aesthetics.","We architect massive content engines specifically for LinkedIn (B2B Authority), Instagram (Visual Brand), and X (Immediate Community). We define exact brand voices natively breaking through massive digital noise.","By driving high-velocity engagement metrics early, we push complex algorithms actively to heavily dramatically amplify your organic reach naturally entirely free of ad-spend."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Native Content Production", desc: "Filming, writing, and designing massive payload assets performing flawlessly specifically for distinct platforms natively.", icon: <Component />}, {title: "Community Management", desc: "Actively physically interacting globally maintaining intense digital relationships directly with your core consumers.", icon: <MessageSquare />}, {title: "Influencer Ecosystems", desc: "Executing complex macro PR integrations safely routing massive parallel audiences directly heavily into your funnel.", icon: <Store />}, {title: "Algorithmic Hacking", desc: "Studying exact metric requirements (watch-time, save-ratios) fundamentally manipulating organic reach distribution safely.", icon: <Target />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Sprout Social","Later","Figma","CapCut","Hootsuite"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Voice Definition","desc":"Establishing absolute explicit grammatical and emotional guidelines natively preventing fragmented chaotic branding."},{"title":"Content Calendars","desc":"Structuring intense monthly deployment schedules heavily ensuring absolute extreme posting consistency natively."},{"title":"Metric Analysis","desc":"Reviewing explicit retention curves adapting subsequent content intensely mapping mathematically to what actually engaged."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Should we be on every platform?","a":"No. A B2B SaaS should heavily focus specifically on LinkedIn and potentially X. A D2C Fashion brand should live entirely on Instagram and TikTok. Focus exclusively explicitly where your specific demographic natively breathes."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Content Marketing","href":"/services/digital-marketing/content-marketing"},{"title":"Performance Marketing","href":"/services/digital-marketing/performance-marketing"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default SocialMedia;
