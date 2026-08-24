import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { BackendVisual } from '../../../components/services/subservices/visuals/VisualsWeb';
import { PenTool, Database, Zap, Sparkles, Eye, Cloud, Lock, Layers, Webhook, Box, Server, Boxes, GitMerge, LayoutTemplate, ArrowRightLeft, Globe, Languages, Network, RadioReceiver, ShieldCheck, LayoutDashboard, Users, Repeat, Radio, LineChart } from 'lucide-react';


const BackendDevelopment = () => {
    useSEO({ title: "Bulletproof Cloud Infrastructure & APIs | The Digital Connect", description: "The invisible engine powering your platforms. We architect hyper-scalable microservices, secure databases, and sub-millisecond API endpoints handling millions of requests." });
    const theme = {"accent":"text-emerald-500","bg":"bg-emerald-500","softBg":"bg-emerald-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Web Development" parentRoute="/services/web-development" eyebrow="Backend Development" title="Bulletproof Cloud Infrastructure & APIs" description="The invisible engine powering your platforms. We architect hyper-scalable microservices, secure databases, and sub-millisecond API endpoints handling millions of requests." theme={theme} visual={BackendVisual} />
                <SubServiceShared.Overview title="The invisible backbone of scalable software" content={["Backend development is the critical foundation that determines whether your application can survive tremendous viral growth or collapse under pressure. Our backend architectures are strictly engineered to be entirely stateless, horizontally scalable, and ferociously secure.","Instead of building monolithic liabilities, we frequently deploy microservice architectures using Node.js, Python, or Go, leveraging AWS or Google Cloud to automatically scale processing power instantly based on real-time traffic spikes.","Data integrity is paramount. We design highly normalized PostgreSQL databases for structured operational logic, while deploying Redis for sub-millisecond caching environments. Whether you need a simple RESTful backend or a massive real-time WebSocket infrastructure, we build it to last permanently."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "API Architecture", desc: "RESTful and GraphQL interfaces providing strictly typed data layers for multiple clients.", icon: <Webhook />}, {title: "Database Engineering", desc: "Complex PostgreSQL, MongoDB, and Redis schemas optimized for extreme read/write velocities.", icon: <Database />}, {title: "Secure Authentication", desc: "OAuth2, JWT, and SSO implementations protecting user data against malicious payloads.", icon: <Lock />}, {title: "Cloud Infrastructure", desc: "AWS, GCP, and Azure serverless deployments running on isolated Docker containers.", icon: <Cloud />}, {title: "Microservices", desc: "Decoupled logic domains allowing independent team development and zero-downtime scaling.", icon: <Layers />}, {title: "Real-Time Systems", desc: "WebSocket and Server-Sent Events driving instant chat, notifications, and live dashboards.", icon: <Zap />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Node.js","Python","Go","PostgreSQL","MongoDB","Redis","Docker","AWS","GraphQL","Kubernetes"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Schema Design","desc":"Architecting the database structure and relational models to fundamentally prevent data anomalies."},{"title":"API Specification","desc":"Drafting strictly typed Swagger/OpenAPI documentation for frontend teams to consume instantly."},{"title":"Business Logic","desc":"Engineering the core processing algorithms, payment handling, and third-party middleware."},{"title":"Load Testing","desc":"Simulating vast concurrent user traffic to expose and patch bottlenecks before production."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"What backend languages do you use?","a":"We primarily utilize Node.js (TypeScript) for immense concurrency, Python for data-heavy/AI tasks, and Go for extreme low-latency microservices."},{"q":"How do you secure user data?","a":"We utilize bcrypt for password hashing, strict CORS policies, JWT for stateless sessions, and deploy API gateways that filter out DDoS and SQL injection attempts."},{"q":"Can you scale an existing backend?","a":"Yes. We frequently audit legacy monolithic backends, extract heavy continuous processes into serverless functions, and optimize slow SQL queries."},{"q":"Do you use AWS or Google Cloud?","a":"We leverage both. We build cloud-agnostic containerized applications (Docker) so you are never permanently vendor-locked."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Frontend Development","href":"/services/web-development/frontend-development"},{"title":"API Integration","href":"/services/web-development/api-integration"},{"title":"Cloud Automation","href":"/services/software-development/business-automation"},{"title":"React Native","href":"/services/mobile-app-development/react-native-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default BackendDevelopment;
