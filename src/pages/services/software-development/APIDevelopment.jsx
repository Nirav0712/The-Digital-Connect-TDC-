import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { APIVisual } from '../../../components/services/subservices/visuals/VisualsSoftware_Marketing';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';


const APIDevelopment = () => {
    useSEO({ title: "The Neural Pathways of Modern Software. | The Digital Connect", description: "Robust RESTful and GraphQL API ecosystems enabling completely seamless, intensely secure machine-to-machine global data exchange protocols." });
    const theme = {"accent":"text-brand-cyan","bg":"bg-brand-cyan/20","softBg":"bg-brand-bg-light"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="API Development" title="The Neural Pathways of Modern Software." description="Robust RESTful and GraphQL API ecosystems enabling completely seamless, intensely secure machine-to-machine global data exchange protocols." theme={theme} visual={APIVisual} />
                <SubServiceShared.Overview title="The backbone of scalable enterprise tech" content={["Every mobile application, massive web platform, and automated system explicitly requires a centralized backend API to function. An API is the strict mathematical gatekeeper securely dispensing requested data natively to authorized clients.","We structurally engineer immense micro-service APIs utilizing Node.js, Express, and GraphQL schemas. We intensely focus directly on rate-limiting, extreme request speed minimization, and massive cryptographic payload security.","By developing decoupled backend architecture, you ensure your central database securely feeds your iOS app, Web App, and external partners flawlessly identically."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "RESTful Architecture", desc: "Building clean intuitive endpoint routing perfectly readable directly globally by any frontend team.", icon: <TerminalSquare />}, {title: "GraphQL Integration", desc: "Allowing complex clients to heavily exactly specify precise data shapes fundamentally mitigating over-fetching speeds.", icon: <Globe />}, {title: "OAUTH & JWT Security", desc: "Locking endpoints behind massive cryptographic token verification natively blocking malicious payload injection.", icon: <ShieldCheck />}, {title: "Micro-Service Splitting", desc: "Decoupling massive monolithic backends actively ensuring unique services securely scale completely independently violently.", icon: <Layers />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Node.js","Express","GraphQL","Apollo","Redis","Postman"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Schema Design","desc":"Formulating exact relational logic fundamentally modeling how distinct objects associate properly natively."},{"title":"Controller Writing","desc":"Drafting strict algorithmic validation perfectly defending incoming destructive client payloads instantly."},{"title":"Documentation Generation","desc":"Producing explicit Swagger UI docs universally guiding external consumers utilizing the API flawlessly."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why GraphQL over REST?","a":"GraphQL fundamentally stops massive over-fetching. If a mobile app only needs a username, REST might send the whole user profile, wasting bandwidth. GraphQL strictly returns exactly what was explicitly requested."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"SaaS Architecture","href":"/services/software-development/saas"},{"title":"Web App Backend","href":"/services/web-development/backend-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default APIDevelopment;
