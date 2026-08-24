import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { SaaSVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const SaaS = () => {
    useSEO({ title: "Launch the Next Subscribed Phenomenon. | The Digital Connect", description: "End-to-end full-stack architectures engineered specifically for extreme multi-tenant scalability fueling modern Software-as-a-Service companies." });
    const theme = {"accent":"text-blue-600","bg":"bg-blue-600","softBg":"bg-blue-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="SaaS Architecture" title="Launch the Next Subscribed Phenomenon." description="End-to-end full-stack architectures engineered specifically for extreme multi-tenant scalability fueling modern Software-as-a-Service companies." theme={theme} visual={SaaSVisual} />
                <SubServiceShared.Overview title="Building scalable multi-tenant empires accurately" content={["Building a SaaS explicitly requires significantly different architectural logic than a standard website. Security, multi-tenancy databases, immense concurrent user payloads, and programmatic recurring billing require flawless engineering.","We build absolute production-ready SaaS applications strictly utilizing modern enterprise stacks (Next.js, Node, AWS, Stripe). We focus intensely on brutal performance optimization heavily ensuring your core value proposition operates sub-secondly.","From MVP validation to Series-A enterprise tier scaling, our codebases inherently anticipate exponential growth cleanly without accumulating lethal technical debt."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Multi-Tenant Databases", desc: "Separating diverse user company data securely natively inside unified SQL architectures.", icon: <Database />}, {title: "Automated Tiering", desc: "Building logic mapping exact Stripe subscription statuses directly blocking UI functionality seamlessly.", icon: <LockKeyhole />}, {title: "Serverless Edge Compute", desc: "Deploying heavy functions universally near specific users maximizing critical load velocities globally.", icon: <Cloud />}, {title: "UI/UX Friction Reduction", desc: "Minimizing required click-depth fundamentally keeping users absolutely addicted strictly to the software loop.", icon: <MousePointerClick />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Next.js","React","Node.js","PostgreSQL","Stripe","Docker","AWS"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Architecture Scoping","desc":"Mapping exact system relationships fundamentally preventing early massive structural roadblocks natively."},{"title":"MVP Engineering","desc":"Rapidly shipping the absolutely core isolated feature validating direct market revenue immediately."},{"title":"Scaling Operations","desc":"Refactoring initial monolithic logic into dedicated resilient microservices handling extreme traffic."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Who owns the SaaS code?","a":"You do. Upon complete deployment and final invoicing, all Git repositories and intellectual property entirely transfer safely directly into your complete legal ownership."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Business Automation","href":"/services/software-development/business-automation"},{"title":"CRM Platforms","href":"/services/software-development/crm"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default SaaS;
