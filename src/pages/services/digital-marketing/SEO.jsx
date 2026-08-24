import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { SEOVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const SEO = () => {
    useSEO({ title: "Dominate Organic Industry Search Authority. | The Digital Connect", description: "Technical, programmatic, and content-driven SEO explicitly dominating Google SERP rankings heavily replacing paid acquisition fundamentally." });
    const theme = {"accent":"text-blue-600","bg":"bg-blue-600","softBg":"bg-blue-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Digital Marketing" parentRoute="/services/digital-marketing" eyebrow="Search Engine Optimization" title="Dominate Organic Industry Search Authority." description="Technical, programmatic, and content-driven SEO explicitly dominating Google SERP rankings heavily replacing paid acquisition fundamentally." theme={theme} visual={SEOVisual} />
                <SubServiceShared.Overview title="Owning the algorithm completely" content={["Operating a beautiful website fundamentally hidden on page four of Google is commercially useless. Organic Search Engine Optimization remains physically the most lucrative digital asset because it operates globally 24/7 without variable click-costs.","We heavily bypass basic metadata. We deploy intense programmatic SEO architectures, explicitly repairing core-web-vital speed leaks natively inside your React applications, massively structuring JSON-LD schema, and generating immense clustered semantic authority maps.","This fundamentally secures untouchable domain authority directly intercepting users exactly when they demonstrate extremely explicit high-intent commercial queries."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Technical SEO Audits", desc: "Physically altering React/Next.js code natively ensuring Googlebot crawls dynamic JS platforms flawlessly.", icon: <TerminalSquare />}, {title: "Programmatic SEO", desc: "Generating massive templated high-quality keyword pages routing heavy long-tail commercial intent drastically.", icon: <Layers />}, {title: "Content Clustering", desc: "Structuring immense interconnected blog pillars actively establishing absolute semantic topic dominance safely.", icon: <Target />}, {title: "Backlink Acquisition", desc: "Orchestrating high DA PR campaigns forcefully pushing intense page authority directly into central hubs.", icon: <ArrowUpRight />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Ahrefs","Semrush","Google Search Console","Screaming Frog","Next.js SEO"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Deep Technical Repair","desc":"Fixing exactly what inherently blocks active indexation (duplicate content, severe render blocking JS)."},{"title":"Keyword Mapping","desc":"Isolating specific untapped, high intent transactional queries entirely ignored directly by mammoth competitors."},{"title":"Authority Building","desc":"Continuously projecting massive signals natively proving absolute E-E-A-T trust directly to core Google algorithms."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"How long does SEO take?","a":"Typically 3 to 6 months for monumental shifts. SEO is an asset investment, similar to real estate. Unlike PPC which stops immediately when budget runs out, SEO compounds massively over time."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Content Marketing","href":"/services/digital-marketing/content-marketing"},{"title":"CMS Development","href":"/services/web-development/cms-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default SEO;
