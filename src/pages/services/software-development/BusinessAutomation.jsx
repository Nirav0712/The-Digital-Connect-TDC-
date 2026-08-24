import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { BusinessAutomationVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const BusinessAutomation = () => {
    useSEO({ title: "Replacing Repetitive Humans with Logic. | The Digital Connect", description: "Extreme process automation explicitly mapping intense API endpoints securely removing monumental manual operational hours instantly." });
    const theme = {"accent":"text-orange-500","bg":"bg-orange-500","softBg":"bg-orange-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="Business Automation" title="Replacing Repetitive Humans with Logic." description="Extreme process automation explicitly mapping intense API endpoints securely removing monumental manual operational hours instantly." theme={theme} visual={BusinessAutomationVisual} />
                <SubServiceShared.Overview title="Eliminating the mundane computationally" content={["If an employee is copying data from an email directly into a spreadsheet continually, you are heavily burning capital on tasks a machine executes flawlessly in milliseconds.","We architect brutal operational efficiencies heavily utilizing Make.com, Zapier, Python scripting, and raw specific Node.js webhooks seamlessly bridging heavily disconnected systems (e.g., Slack to Salesforce to AWS).","By explicitly mapping the exact manual trigger workflows, we deploy logical if/else conditionals operating completely silently globally 24/7 fundamentally removing severe human error variables."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "API Webhook Bridges", desc: "Fusing disjoint platforms natively enabling seamless automated instant instant conversational data pinging.", icon: <TerminalSquare />}, {title: "Document Parsing", desc: "Utilizing OCR and AI actively ripping physical PDF payload data routing it securely into CRM fields.", icon: <Cog />}, {title: "Custom Scripting", desc: "Executing complex server chron-jobs handling intense nightly database cleaning flawlessly.", icon: <Server />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Node.js","Python","Zapier","Make.com","OpenAI API","AWS Lambda"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Workflow Auditing","desc":"Identifying explicitly where the most painful, highest frequency manual tasks actively reside."},{"title":"Logic Modeling","desc":"Architecting fail-safe multi-conditional logic trees mapping exactly how automated data behaves natively."},{"title":"Silent Deployment","desc":"Running active systems entirely in parallel manually checking programmatic output fundamentally guaranteeing accuracy."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Does automation replace jobs?","a":"No, it elevates them. It removes mind-numbing data-entry drastically freeing your actual humans to focus intensely on creative, high-capital yielding strategy."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"API Development","href":"/services/software-development/api-development"},{"title":"ERP Systems","href":"/services/software-development/erp"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default BusinessAutomation;
