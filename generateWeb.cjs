const fs = require('fs');
const path = require('path');

const generate = () => {
    const pages = [
        {
            file: 'FrontendDevelopment.jsx', dir: 'web-development', comp: 'FrontendDevelopment',
            pRoute: '/services/web-development', pTitle: 'Web Development', eyebrow: 'Frontend Development',
            title: 'From Design System to Pixel-Perfect Interface',
            desc: 'We engineer lightning-fast, accessible, and deeply interactive interfaces that convert casual browsers into dedicated customers. Our frontend architectures are built to scale globally.',
            theme: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' },
            visual: 'FrontendVisual', visualImport: 'import { FrontendVisual } from \'../../../components/services/subservices/visuals/VisualsWeb\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Interfaces Designed for Conversion',
                content: [
                    'The frontend of your application is the definitive touchpoint where users decide whether to trust your brand. We do not just build websites; we engineering digital experiences utilizing cutting-edge component libraries, complex state management, and strict accessibility standards.',
                    'Our approach maps perfectly to modern demands. We leverage React and Next.js to provide Server-Side Rendering (SSR) and Static Site Generation (SSG), ensuring lightning-fast load times that dominate Core Web Vitals. Every interaction, hover state, and transition is meticulously coded to feel native, fluid, and intuitive.',
                    'Beyond aesthetics, our architectures are strictly modular. By isolating logic into reusable headless components, your marketing and development teams can scale out hundreds of new pages instantly without relying on continuous engineering intervention.'
                ]
            },
            capabilities: [
                { title: "React & Next.js Architecture", desc: "Constructing massive enterprise-scale component libraries utilizing Next.js App Router for extreme performance.", icon: "<MonitorCode />" },
                { title: "Design System Translation", desc: "Pixel-perfect translation of complex Figma design tokens into strict Tailwind configurations.", icon: "<PenTool />" },
                { title: "State Management", desc: "Redux, Zustand, and React Query orchestrating massive real-time data payloads flawlessly.", icon: "<Database />" },
                { title: "Performance Optimization", desc: "Aggressive bundle splitting, layout shift prevention, and sub-second Time To Interactive (TTI).", icon: "<Zap />" },
                { title: "Micro-Animations", desc: "Framer Motion physics-based interactions driving deep user delight and conversion flow.", icon: "<Sparkles />" },
                { title: "Strict Accessibility", desc: "WCAG 2.1 AA compliance natively built into the HTML DOM for universal screen-reader access.", icon: "<Eye />" }
            ],
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'React Query', 'Vite', 'Storybook', 'Vercel'],
            process: [
                { title: 'Component Auditing', desc: 'Analyzing existing design files and breaking them down into reusable, isolated logic tokens.' },
                { title: 'Architecture Setup', desc: 'Defining strict Typescript interfaces and state management stores before rendering pixels.' },
                { title: 'Feature Development', desc: 'Engineering individual routes, maintaining absolute 100% lighthouse performance scores.' },
                { title: 'QA & Accessibility', desc: 'Rigorous cross-device testing across complex viewport breakpoints and edge cases.' }
            ],
            faq: [
                { q: "What frontend framework do you primarily use?", a: "We predominantly engineer utilizing React and Next.js, as they provide the most robust enterprise scalability, vibrant ecosystem, and absolute best performance capabilities in modern web development." },
                { q: "How do you ensure the website is fast?", a: "We utilize Edge caching, Server-Side Rendering (SSR), aggressive image optimization, code-splitting, and strict Core Web Vitals monitoring during the CI/CD pipeline." },
                { q: "Can you implement our existing Figma designs?", a: "Absolutely. We specialize in pixel-perfect translation. We extract your design tokens (colors, typography, spacing) and build a native frontend design system matching it flawlessly." },
                { q: "Do you build accessible (WCAG) websites?", a: "Yes. Accessibility is absolutely mandatory. We ensure keyboard navigation, aria-labels, high contrast ratios, and screen-reader compatibility natively." }
            ],
            related: [
                { title: 'Backend Development', href: '/services/web-development/backend-development' },
                { title: 'UI/UX Design', href: '/services/ui-ux-design' },
                { title: 'SEO Optimization', href: '/services/digital-marketing/seo' },
                { title: 'Mobile App Development', href: '/services/mobile-app-development' }
            ]
        },
        {
            file: 'BackendDevelopment.jsx', dir: 'web-development', comp: 'BackendDevelopment',
            pRoute: '/services/web-development', pTitle: 'Web Development', eyebrow: 'Backend Development',
            title: 'Bulletproof Cloud Infrastructure & APIs',
            desc: 'The invisible engine powering your platforms. We architect hyper-scalable microservices, secure databases, and sub-millisecond API endpoints handling millions of requests.',
            theme: { accent: 'text-emerald-500', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' },
            visual: 'BackendVisual', visualImport: 'import { BackendVisual } from \'../../../components/services/subservices/visuals/VisualsWeb\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'The invisible backbone of scalable software',
                content: [
                    'Backend development is the critical foundation that determines whether your application can survive tremendous viral growth or collapse under pressure. Our backend architectures are strictly engineered to be entirely stateless, horizontally scalable, and ferociously secure.',
                    'Instead of building monolithic liabilities, we frequently deploy microservice architectures using Node.js, Python, or Go, leveraging AWS or Google Cloud to automatically scale processing power instantly based on real-time traffic spikes.',
                    'Data integrity is paramount. We design highly normalized PostgreSQL databases for structured operational logic, while deploying Redis for sub-millisecond caching environments. Whether you need a simple RESTful backend or a massive real-time WebSocket infrastructure, we build it to last permanently.'
                ]
            },
            capabilities: [
                { title: "API Architecture", desc: "RESTful and GraphQL interfaces providing strictly typed data layers for multiple clients.", icon: "<Webhook />" },
                { title: "Database Engineering", desc: "Complex PostgreSQL, MongoDB, and Redis schemas optimized for extreme read/write velocities.", icon: "<Database />" },
                { title: "Secure Authentication", desc: "OAuth2, JWT, and SSO implementations protecting user data against malicious payloads.", icon: "<Lock />" },
                { title: "Cloud Infrastructure", desc: "AWS, GCP, and Azure serverless deployments running on isolated Docker containers.", icon: "<Cloud />" },
                { title: "Microservices", desc: "Decoupled logic domains allowing independent team development and zero-downtime scaling.", icon: "<Layers />" },
                { title: "Real-Time Systems", desc: "WebSocket and Server-Sent Events driving instant chat, notifications, and live dashboards.", icon: "<Zap />" }
            ],
            tech: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'GraphQL', 'Kubernetes'],
            process: [
                { title: 'Schema Design', desc: 'Architecting the database structure and relational models to fundamentally prevent data anomalies.' },
                { title: 'API Specification', desc: 'Drafting strictly typed Swagger/OpenAPI documentation for frontend teams to consume instantly.' },
                { title: 'Business Logic', desc: 'Engineering the core processing algorithms, payment handling, and third-party middleware.' },
                { title: 'Load Testing', desc: 'Simulating vast concurrent user traffic to expose and patch bottlenecks before production.' }
            ],
            faq: [
                { q: "What backend languages do you use?", a: "We primarily utilize Node.js (TypeScript) for immense concurrency, Python for data-heavy/AI tasks, and Go for extreme low-latency microservices." },
                { q: "How do you secure user data?", a: "We utilize bcrypt for password hashing, strict CORS policies, JWT for stateless sessions, and deploy API gateways that filter out DDoS and SQL injection attempts." },
                { q: "Can you scale an existing backend?", a: "Yes. We frequently audit legacy monolithic backends, extract heavy continuous processes into serverless functions, and optimize slow SQL queries." },
                { q: "Do you use AWS or Google Cloud?", a: "We leverage both. We build cloud-agnostic containerized applications (Docker) so you are never permanently vendor-locked." }
            ],
            related: [
                { title: 'Frontend Development', href: '/services/web-development/frontend-development' },
                { title: 'API Integration', href: '/services/web-development/api-integration' },
                { title: 'Cloud Automation', href: '/services/software-development/business-automation' },
                { title: 'React Native', href: '/services/mobile-app-development/react-native-development' }
            ]
        },
        {
            file: 'CMSDevelopment.jsx', dir: 'web-development', comp: 'CMSDevelopment',
            pRoute: '/services/web-development', pTitle: 'Web Development', eyebrow: 'CMS Development',
            title: 'Absolute Control Over Your Content',
            desc: 'Decoupled headless CMS architectures and highly customized WordPress engines granting marketing teams infinite publishing freedom natively.',
            theme: { accent: 'text-purple-500', bg: 'bg-purple-500', softBg: 'bg-purple-50' },
            visual: 'CMSVisual', visualImport: 'import { CMSVisual } from \'../../../components/services/subservices/visuals/VisualsWeb\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Empowering marketing without developer bottlenecks',
                content: [
                    'Content is the lifeblood of organic growth, but rigid, outdated Content Management Systems frequently throttle marketing velocity. We build highly customized CMS platforms that remove engineering friction, allowing your editorial teams to create, schedule, and publish rich media effortlessly.',
                    'Our primary expertise lies in Headless CMS architectures (Sanity, Contentful, Strapi). By decoupling the backend content repository from the frontend Next.js presentation layer, we deliver absolute creative freedom while simultaneously protecting the website from the inherent security flaws of traditional monolithic setups.',
                    'For clients heavily invested in WordPress, we completely overhaul the editorial experience by stripping out bloated plugins, developing custom Gutenberg blocks natively, and turning the backend into an intuitive, lightning-fast enterprise publishing tool.'
                ]
            },
            capabilities: [
                { title: "Headless CMS", desc: "Sanity and Contentful integrations delivering structured data purely via API to any frontend.", icon: "<Boxes />" },
                { title: "Custom Editorial Workflows", desc: "Multi-tier draft, review, and approval pipelines mapped specifically to your organization.", icon: "<GitMerge />" },
                { title: "Gutenberg Block Development", desc: "Bespoke React-based WordPress blocks replacing rigid templates and slow visual builders.", icon: "<LayoutTemplate />" },
                { title: "CMS Data Migration", desc: "Seamless algorithmic extraction of thousands of legacy articles safely without SEO drops.", icon: "<ArrowRightLeft />" },
                { title: "Omnichannel Distribution", desc: "Publish once, render everywhere—distribute content to Web, iOS, and Android simultaneously.", icon: "<Globe />" },
                { title: "Content Localization", desc: "Deep multi-lingual architecture supporting vast global directory structures seamlessly.", icon: "<Languages />" }
            ],
            tech: ['Sanity.io', 'Contentful', 'Strapi', 'WordPress', 'Next.js', 'GraphQL', 'Prisma', 'Tailwind CSS'],
            process: [
                { title: 'Content Modeling', desc: 'Analyzing your publishing needs and structuring strictly typed data models and schemas.' },
                { title: 'CMS Configuration', desc: 'Setting up the backend dashboards, roles, permissions, and editorial workflows natively.' },
                { title: 'Frontend Consumption', desc: 'Building the Next.js presentation layer to rapidly ingest and render the API content.' },
                { title: 'Training & Handover', desc: 'Providing comprehensive documentation so your marketing team can publish instantly.' }
            ],
            faq: [
                { q: "What is a Headless CMS?", a: "A Headless CMS stores content but has no built-in frontend. It delivers content via API (like JSON), allowing us to build a hyper-fast custom frontend (like React) without being restricted by traditional themes." },
                { q: "Is WordPress still relevant?", a: "Absolutely. When built correctly—avoiding heavy pre-made themes and plugins—WordPress remains a massively powerful and familiar interface for editorial teams." },
                { q: "Can you migrate our articles from our old site?", a: "Yes. We write custom node scripts to securely scrape, format, and inject your legacy posts directly into the new CMS architecture while strictly preserving your URL slugs." },
                { q: "Does a headless CMS help with SEO?", a: "Immensely. Because the frontend is decoupled, we use Next.js to pre-render the pages (SSG), passing perfect, lightning-fast HTML directly to Google's crawlers." }
            ],
            related: [
                { title: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
                { title: 'SEO Strategy', href: '/services/digital-marketing/seo' },
                { title: 'Frontend UI', href: '/services/web-development/frontend-development' },
                { title: 'Ecommerce Dev', href: '/services/ecommerce-development/custom-ecommerce' }
            ]
        },
        {
            file: 'APIIntegration.jsx', dir: 'web-development', comp: 'APIIntegration',
            pRoute: '/services/web-development', pTitle: 'Web Development', eyebrow: 'API Integration',
            title: 'Connecting Fragmented Digital Ecosystems',
            desc: 'We architect robust middleware and secure webhooks connecting your isolated platforms (CRM, ERP, Web) into a singular, transparent real-time algorithmic sequence.',
            theme: { accent: 'text-pink-500', bg: 'bg-pink-500', softBg: 'bg-pink-50' },
            visual: 'APIVisual', visualImport: 'import { APIVisual } from \'../../../components/services/subservices/visuals/VisualsWeb\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Data synchronization across every platform',
                content: [
                    'Modern businesses do not operate on a single software. They use Salesforce for sales, Shopify for commerce, NetSuite for finance, and custom applications for operations. When these systems are siloed, human manual data entry creates catastrophic operational bottlenecks.',
                    'We specialize in deeply complex API integrations. We build custom middleware layers that securely listen to webhooks, transform incoming data payloads natively, and route them to multiple third-party endpoints automatically, strictly in real-time.',
                    'Whether you need a legacy SOAP API modernized into a GraphQL interface, or require payment gateways perfectly synced to your inventory management system, we engineer solutions that permanently remove human error from your fundamental data flows.'
                ]
            },
            capabilities: [
                { title: "Third-Party Integration", desc: "Connecting Stripe, Salesforce, Hubspot, and Shopify flawlessly into custom infrastructures.", icon: "<Network />" },
                { title: "Custom Middleware", desc: "Standalone Node.js environments transforming and routing data securely between incompatible platforms.", icon: "<Server />" },
                { title: "GraphQL & REST", desc: "Exposing clean, documented endpoints for mobile and web systems to consume effortlessly.", icon: "<Webhook />" },
                { title: "Webhook Architecture", desc: "Event-driven asynchronous listening ensuring zero-delay triggers across business operations.", icon: "<RadioReceiver />" },
                { title: "Legacy System Bridging", desc: "Modernizing outdated SOAP XML interfaces into rapid JSON architectures safely.", icon: "<ArrowRightLeft />" },
                { title: "API Security & Rate Limiting", desc: "Protecting sensitive endpoints via OAuth2, API Keys, and aggressive DDoS mitigation rules.", icon: "<ShieldCheck />" }
            ],
            tech: ['Node.js', 'REST API', 'GraphQL', 'WebSocket', 'AWS API Gateway', 'Postman', 'OAuth2', 'Redis'],
            process: [
                { title: 'Endpoint Auditing', desc: 'Analyzing the third-party documentation, rate limits, and authentication protocols.' },
                { title: 'Middleware Architecture', desc: 'Designing the serverless cloud layer responsible for ingesting and altering the payload.' },
                { title: 'Development & Mapping', desc: 'Writing the extraction logic, mapping JSON properties, and handling failure retries.' },
                { title: 'Monitoring Setup', desc: 'Deploying deep logging tools (Datadog/Sentry) to catch dropped packets instantly in production.' }
            ],
            faq: [
                { q: "What happens if a third-party API goes down?", a: "We implement robust Message Queues (like RabbitMQ or AWS SQS). If the receiving API is down, our middleware holds the data securely and retries exponentially until successful." },
                { q: "Can you integrate with a system that doesn't have an API?", a: "It is difficult, but possible via techniques like secure automated web-scraping (Puppeteer) or direct database cross-connections, though native APIs are drastically preferred." },
                { q: "How do you handle API security?", a: "Every endpoint we expose requires strict authentication (OAuth2 / JWT). Content is transmitted purely via HTTPS, and we implement payload validation to prevent injection." },
                { q: "Do you document the APIs you build?", a: "Yes. Every custom API is delivered with comprehensive Swagger/OpenAPI documentation, allowing future developers to understand the endpoints immediately." }
            ],
            related: [
                { title: 'Custom Web Apps', href: '/services/web-development/custom-web-applications' },
                { title: 'Backend Engineering', href: '/services/web-development/backend-development' },
                { title: 'Business Automation', href: '/services/software-development/business-automation' },
                { title: 'CRM Integration', href: '/services/software-development/crm' }
            ]
        },
        {
            file: 'CustomWebApplications.jsx', dir: 'web-development', comp: 'CustomWebApplications',
            pRoute: '/services/web-development', pTitle: 'Web Development', eyebrow: 'Custom Web Apps',
            title: 'Enterprise Architecture Custom Engineered.',
            desc: 'Turn exhaustive manual operations into sleek, centralized digital platforms. We build massive internal dashboards, client portals, and bespoke SaaS applications from scratch.',
            theme: { accent: 'text-orange-500', bg: 'bg-orange-500', softBg: 'bg-orange-50' },
            visual: 'CustomWebVisual', visualImport: 'import { CustomWebVisual } from \'../../../components/services/subservices/visuals/VisualsWeb\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Software built exclusively for your operational edge',
                content: [
                    'Off-the-shelf software forces your company to adapt to the software. Custom web applications force the software to adapt entirely to how your company actually functions. We engineer massive, feature-rich web applications that perfectly mirror your most complex operational workflows.',
                    'These applications are vastly fundamentally different from standard websites. They require intense state management, real-time bidirectional data flowing, strict role-based access controls (RBAC), and immense data visualization dashboards.',
                    'Whether you are building a B2B SaaS platform intended for global market distribution, or a secure internal portal meant exclusively to optimize your employee logistics pipeline, we deploy React and Node architectures capable of maintaining absolute stability at scale.'
                ]
            },
            capabilities: [
                { title: "B2B SaaS Platforms", desc: "Multi-tenant cloud platforms encompassing subscription billing, user tiers, and rich analytics.", icon: "<Cloud />" },
                { title: "Internal Dashboards", desc: "Centralizing fragmented company data into a singular, real-time command center safely.", icon: "<LayoutDashboard />" },
                { title: "Client Portals", desc: "Secure interfaces allowing your customers to interact with their data, invoices, and progress directly.", icon: "<Users />" },
                { title: "Workflow Automation", desc: "Digitizing heavy physical paper trails into rapid, zero-error programmatic sequences.", icon: "<Repeat />" },
                { title: "Real-Time Collaboration", desc: "WebSocket driven multiplayer environments similar to Figma or Google Docs capabilities.", icon: "<Radio />" },
                { title: "Complex Data Visualization", desc: "Rendering vast relational databases into human-readable, interactive chart graphs instantly.", icon: "<LineChart />" }
            ],
            tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS', 'WebSockets', 'Prisma', 'Stripe'],
            process: [
                { title: 'Architecture Planning', desc: 'Defining the complex database ERD models and strict user permission roles fundamentally.' },
                { title: 'UX/UI Wireframing', desc: 'Mapping the dashboard interfaces to ensure users can navigate dense data structures easily.' },
                { title: 'Full-Stack Development', desc: 'Engineering the secure Node logic alongside the interactive React dashboard environments.' },
                { title: 'Security & Penetration', desc: 'Aggressive vulnerability testing ensuring sensitive client data remains completely inaccessible to exploits.' }
            ],
            faq: [
                { q: "Is a custom web app better than buying existing SaaS?", a: "If your operations are generic (e.g. basic email), buy SaaS. But if your competitive edge relies on a unique process that standard software cannot handle, custom development is fundamentally required." },
                { q: "Who owns the code?", a: "You do. Upon completion, you possess 100% full Intellectual Property rights and source code access drastically unlike standard SaaS." },
                { q: "Can it integrate with our existing software?", a: "Yes. Custom apps act as the central hub; we use APIs to seamlessly pull your legacy data in from CRMs, ERPs, or accounting tools." },
                { q: "How do you handle future maintenance?", a: "We build using extremely standard, widely adopted modern tech stacks (React/Node) and provide deep documentation, allowing our team or internal engineers to maintain it easily." }
            ],
            related: [
                { title: 'SaaS Engineering', href: '/services/software-development/saas' },
                { title: 'UI/UX Design', href: '/services/ui-ux-design' },
                { title: 'Frontend Development', href: '/services/web-development/frontend-development' },
                { title: 'ERP Solutions', href: '/services/software-development/erp' }
            ]
        }
    ];

    let imports = `import { PenTool, MonitorCode, Database, Zap, Sparkles, Eye, Cloud, Lock, Layers, Webhook, Box, Server, Boxes, GitMerge, LayoutTemplate, ArrowRightLeft, Globe, Languages, Network, RadioReceiver, ShieldCheck, LayoutDashboard, Users, Repeat, Radio, LineChart } from 'lucide-react';\n`;

    pages.forEach(p => {
        let code = `import React from 'react';\nimport useSEO from '../../../hooks/useSEO';\nimport PageTransition from '../../../components/common/PageTransition';\nimport { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';\n${p.visualImport}\n${imports}\n\n`;
        code += `const ${p.comp} = () => {\n`;
        code += `    useSEO({ title: "${p.title} | The Digital Connect", description: "${p.desc}" });\n`;
        code += `    const theme = ${JSON.stringify(p.theme)};\n`;
        code += `    return (\n        <PageTransition>\n            <div className="w-full bg-white min-h-screen font-sans">\n`;

        p.order.forEach(section => {
            if (section === 'Hero') {
                code += `                <SubServiceShared.Hero parentTitle="${p.pTitle}" parentRoute="${p.pRoute}" eyebrow="${p.eyebrow}" title="${p.title}" description="${p.desc}" theme={theme} visual={${p.visual}} />\n`;
            }
            if (section === 'Overview') {
                code += `                <SubServiceShared.Overview title="${p.overview.title}" content={${JSON.stringify(p.overview.content)}} theme={theme} />\n`;
            }
            if (section === 'Capabilities') {
                code += `                <SubServiceShared.Capabilities theme={theme} capabilities={[${p.capabilities.map(c => `{title: "${c.title}", desc: "${c.desc}", icon: ${c.icon}}`).join(', ')}]} />\n`;
            }
            if (section === 'Technology') {
                code += `                <SubServiceShared.Technology theme={theme} technologies={${JSON.stringify(p.tech)}} />\n`;
            }
            if (section === 'Process') {
                code += `                <SubServiceShared.Process theme={theme} process={${JSON.stringify(p.process)}} />\n`;
            }
            if (section === 'FAQ') {
                code += `                <SubServiceShared.FAQ theme={theme} faqs={${JSON.stringify(p.faq)}} />\n`;
            }
            if (section === 'Related') {
                code += `                <SubServiceShared.Related theme={theme} links={${JSON.stringify(p.related)}} />\n`;
            }
            if (section === 'CTA') {
                code += `                <SubServiceShared.CTA theme={theme} />\n`;
            }
        });

        code += `            </div>\n        </PageTransition>\n    );\n};\n\nexport default ${p.comp};\n`;

        fs.writeFileSync(path.join(__dirname, 'src/pages/services', p.dir, p.file), code);
    });

    console.log("Generated Web Pages");
};

generate();
