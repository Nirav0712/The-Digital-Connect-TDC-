import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { CRMVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const CRM = () => {
    useSEO({ title: "Master Customer Relationships at Scale. | The Digital Connect", description: "Custom Customer Relationship Management software tailored exactly to your unique organizational sales motions, removing generic bloat." });
    const theme = {"accent":"text-indigo-600","bg":"bg-indigo-500","softBg":"bg-indigo-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="CRM Development" title="Master Customer Relationships at Scale." description="Custom Customer Relationship Management software tailored exactly to your unique organizational sales motions, removing generic bloat." theme={theme} visual={CRMVisual} />
                <SubServiceShared.Overview title="Stop fighting off-the-shelf software" content={["Standard CRM tools like Salesforce or HubSpot are overwhelmingly powerful, but heavily bloated. Companies waste hundreds of thousands of dollars attempting to shoehorn rigid pre-built software to match their highly unique internal sales pipelines.","We engineer massive custom SaaS-grade CRM systems from scratch. We map specifically how your dedicated sales executives operate physically, building proprietary lead-scoring algorithms and dashboard visualization exclusively serving your data structure.","This completely guarantees 100% team adoption because the software finally adapts directly to the human, not vice versa."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Custom Dashboards", desc: "Presenting exclusively relevant KPI metrics mapping distinct executive roles.", icon: <LayoutDashboard />}, {title: "Algorithmic Lead Scoring", desc: "Writing mathematical logic explicitly predicting which pipelines possess the highest conversion probabilities.", icon: <LineChart />}, {title: "Automated Outreach", desc: "Integrating intense zero-touch email triggering sequences completely safely natively.", icon: <Mail />}, {title: "Void of Per-User Licensing", desc: "Owning the custom software allows infinite team scaling without incurring exponential monthly SaaS licensing fees.", icon: <Building2 />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["React","Node.js","PostgreSQL","GraphQL","AWS","Redis"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Pipeline Definition","desc":"Understanding exactly how a prospect enters your system and converts into physical capital."},{"title":"Database Normalization","desc":"Architecting distinct massive tables storing fragmented customer interactions perfectly logically."},{"title":"API Integration","desc":"Connecting backend logic natively to billing infrastructures and frontend communication nodes."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Is a custom CRM expensive?","a":"Initially, yes. However, if your sales team expands beyond 50 members, the monthly licensing cost of enterprise Salesforce heavily eclipses the cost of building a bespoke system you inherently own forever."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"ERP Systems","href":"/services/software-development/erp"},{"title":"Business Automation","href":"/services/software-development/business-automation"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default CRM;
