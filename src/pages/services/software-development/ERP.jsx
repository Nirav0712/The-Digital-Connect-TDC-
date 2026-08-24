import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ERPVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const ERP = () => {
    useSEO({ title: "Unifying Enterprise Operational Chaos. | The Digital Connect", description: "Enterprise Resource Planning software merging radically disconnected corporate departments directly into a singular, immensely powerful data hub." });
    const theme = {"accent":"text-slate-800","bg":"bg-slate-800","softBg":"bg-slate-100"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="ERP Development" title="Unifying Enterprise Operational Chaos." description="Enterprise Resource Planning software merging radically disconnected corporate departments directly into a singular, immensely powerful data hub." theme={theme} visual={ERPVisual} />
                <SubServiceShared.Overview title="Eradicating departmental silos natively" content={["When HR cannot communicate with Procurement, and Procurement is detached from Logistics, the enterprise organically bleeds immense capital through operational inefficiency. Legacy data systems organically form brutal bottlenecks.","We develop proprietary ERP systems completely replacing legacy software (like outdated Oracle or SAP instances). We map your absolute macro corporate architecture natively into secure scalable Node.js/PostgreSQL environments.","This facilitates instant real-time data transparency across global supply chains organically enabling C-Level executives to make exact data-driven decisions securely."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Global Database Unification", desc: "Replacing dozens of fragmented Excel spreadsheets with one secure absolute truth database.", icon: <Database />}, {title: "Resource Allocation", desc: "Predicting logistical inventory shortages aggressively preemptively via algorithmic forecasting.", icon: <Cpu />}, {title: "Role-Based Access Control", desc: "Ensuring heavily sensitive financial data is strictly separated via complex cryptographic permission tiers.", icon: <ShieldCheck />}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"How do we migrate from legacy ERPs?","a":"Cautiously. We utilize strict ETL processes, mapping legacy structural tables precisely into Modern SQL architectures safely transferring multi-decade histories fundamentally intact."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"SaaS Platforms","href":"/services/software-development/saas"},{"title":"API Ecosystems","href":"/services/software-development/api-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default ERP;
