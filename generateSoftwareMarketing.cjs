const fs = require('fs');
const path = require('path');

const generatePages = () => {
    const pages = [
        // SOFTWARE DEVELOPMENT
        {
            file: 'CRM.jsx', dir: 'software-development', comp: 'CRM',
            pRoute: '/services/software-development', pTitle: 'Software Development', eyebrow: 'CRM Development',
            title: 'Master Customer Relationships at Scale.',
            desc: 'Custom Customer Relationship Management software tailored exactly to your unique organizational sales motions, removing generic bloat.',
            theme: { accent: 'text-indigo-600', bg: 'bg-indigo-500', softBg: 'bg-indigo-50' },
            visual: 'CRMVisual', visualImport: 'import { CRMVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Stop fighting off-the-shelf software',
                content: [
                    'Standard CRM tools like Salesforce or HubSpot are overwhelmingly powerful, but heavily bloated. Companies waste hundreds of thousands of dollars attempting to shoehorn rigid pre-built software to match their highly unique internal sales pipelines.',
                    'We engineer massive custom SaaS-grade CRM systems from scratch. We map specifically how your dedicated sales executives operate physically, building proprietary lead-scoring algorithms and dashboard visualization exclusively serving your data structure.',
                    'This completely guarantees 100% team adoption because the software finally adapts directly to the human, not vice versa.'
                ]
            },
            capabilities: [
                { title: 'Custom Dashboards', desc: 'Presenting exclusively relevant KPI metrics mapping distinct executive roles.', icon: '<LayoutDashboard />' },
                { title: 'Algorithmic Lead Scoring', desc: 'Writing mathematical logic explicitly predicting which pipelines possess the highest conversion probabilities.', icon: '<LineChart />' },
                { title: 'Automated Outreach', desc: 'Integrating intense zero-touch email triggering sequences completely safely natively.', icon: '<Mail />' },
                { title: 'Void of Per-User Licensing', desc: 'Owning the custom software allows infinite team scaling without incurring exponential monthly SaaS licensing fees.', icon: '<Building2 />' }
            ],
            tech: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS', 'Redis'],
            process: [
                { title: 'Pipeline Definition', desc: 'Understanding exactly how a prospect enters your system and converts into physical capital.' },
                { title: 'Database Normalization', desc: 'Architecting distinct massive tables storing fragmented customer interactions perfectly logically.' },
                { title: 'API Integration', desc: 'Connecting backend logic natively to billing infrastructures and frontend communication nodes.' }
            ],
            faq: [
                { q: 'Is a custom CRM expensive?', a: 'Initially, yes. However, if your sales team expands beyond 50 members, the monthly licensing cost of enterprise Salesforce heavily eclipses the cost of building a bespoke system you inherently own forever.' }
            ],
            related: [
                { title: 'ERP Systems', href: '/services/software-development/erp' },
                { title: 'Business Automation', href: '/services/software-development/business-automation' }
            ]
        },
        {
            file: 'ERP.jsx', dir: 'software-development', comp: 'ERP',
            pRoute: '/services/software-development', pTitle: 'Software Development', eyebrow: 'ERP Development',
            title: 'Unifying Enterprise Operational Chaos.',
            desc: 'Enterprise Resource Planning software merging radically disconnected corporate departments directly into a singular, immensely powerful data hub.',
            theme: { accent: 'text-slate-800', bg: 'bg-slate-800', softBg: 'bg-slate-100' },
            visual: 'ERPVisual', visualImport: 'import { ERPVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Eradicating departmental silos natively',
                content: [
                    'When HR cannot communicate with Procurement, and Procurement is detached from Logistics, the enterprise organically bleeds immense capital through operational inefficiency. Legacy data systems organically form brutal bottlenecks.',
                    'We develop proprietary ERP systems completely replacing legacy software (like outdated Oracle or SAP instances). We map your absolute macro corporate architecture natively into secure scalable Node.js/PostgreSQL environments.',
                    'This facilitates instant real-time data transparency across global supply chains organically enabling C-Level executives to make exact data-driven decisions securely.'
                ]
            },
            capabilities: [
                { title: 'Global Database Unification', desc: 'Replacing dozens of fragmented Excel spreadsheets with one secure absolute truth database.', icon: '<Database />' },
                { title: 'Resource Allocation', desc: 'Predicting logistical inventory shortages aggressively preemptively via algorithmic forecasting.', icon: '<Cpu />' },
                { title: 'Role-Based Access Control', desc: 'Ensuring heavily sensitive financial data is strictly separated via complex cryptographic permission tiers.', icon: '<ShieldCheck />' }
            ],
            tech: [],
            process: [],
            faq: [
                { q: 'How do we migrate from legacy ERPs?', a: 'Cautiously. We utilize strict ETL processes, mapping legacy structural tables precisely into Modern SQL architectures safely transferring multi-decade histories fundamentally intact.' }
            ],
            related: [
                { title: 'SaaS Platforms', href: '/services/software-development/saas' },
                { title: 'API Ecosystems', href: '/services/software-development/api-development' }
            ]
        },
        {
            file: 'SaaS.jsx', dir: 'software-development', comp: 'SaaS',
            pRoute: '/services/software-development', pTitle: 'Software Development', eyebrow: 'SaaS Architecture',
            title: 'Launch the Next Subscribed Phenomenon.',
            desc: 'End-to-end full-stack architectures engineered specifically for extreme multi-tenant scalability fueling modern Software-as-a-Service companies.',
            theme: { accent: 'text-blue-600', bg: 'bg-blue-600', softBg: 'bg-blue-50' },
            visual: 'SaaSVisual', visualImport: 'import { SaaSVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Building scalable multi-tenant empires accurately',
                content: [
                    'Building a SaaS explicitly requires significantly different architectural logic than a standard website. Security, multi-tenancy databases, immense concurrent user payloads, and programmatic recurring billing require flawless engineering.',
                    'We build absolute production-ready SaaS applications strictly utilizing modern enterprise stacks (Next.js, Node, AWS, Stripe). We focus intensely on brutal performance optimization heavily ensuring your core value proposition operates sub-secondly.',
                    'From MVP validation to Series-A enterprise tier scaling, our codebases inherently anticipate exponential growth cleanly without accumulating lethal technical debt.'
                ]
            },
            capabilities: [
                { title: 'Multi-Tenant Databases', desc: 'Separating diverse user company data securely natively inside unified SQL architectures.', icon: '<Database />' },
                { title: 'Automated Tiering', desc: 'Building logic mapping exact Stripe subscription statuses directly blocking UI functionality seamlessly.', icon: '<LockKeyhole />' },
                { title: 'Serverless Edge Compute', desc: 'Deploying heavy functions universally near specific users maximizing critical load velocities globally.', icon: '<Cloud />' },
                { title: 'UI/UX Friction Reduction', desc: 'Minimizing required click-depth fundamentally keeping users absolutely addicted strictly to the software loop.', icon: '<MousePointerClick />' }
            ],
            tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS'],
            process: [
                { title: 'Architecture Scoping', desc: 'Mapping exact system relationships fundamentally preventing early massive structural roadblocks natively.' },
                { title: 'MVP Engineering', desc: 'Rapidly shipping the absolutely core isolated feature validating direct market revenue immediately.' },
                { title: 'Scaling Operations', desc: 'Refactoring initial monolithic logic into dedicated resilient microservices handling extreme traffic.' }
            ],
            faq: [
                { q: 'Who owns the SaaS code?', a: 'You do. Upon complete deployment and final invoicing, all Git repositories and intellectual property entirely transfer safely directly into your complete legal ownership.' }
            ],
            related: [
                { title: 'Business Automation', href: '/services/software-development/business-automation' },
                { title: 'CRM Platforms', href: '/services/software-development/crm' }
            ]
        },
        {
            file: 'BusinessAutomation.jsx', dir: 'software-development', comp: 'BusinessAutomation',
            pRoute: '/services/software-development', pTitle: 'Software Development', eyebrow: 'Business Automation',
            title: 'Replacing Repetitive Humans with Logic.',
            desc: 'Extreme process automation explicitly mapping intense API endpoints securely removing monumental manual operational hours instantly.',
            theme: { accent: 'text-orange-500', bg: 'bg-orange-500', softBg: 'bg-orange-50' },
            visual: 'BusinessAutomationVisual', visualImport: 'import { BusinessAutomationVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Eliminating the mundane computationally',
                content: [
                    'If an employee is copying data from an email directly into a spreadsheet continually, you are heavily burning capital on tasks a machine executes flawlessly in milliseconds.',
                    'We architect brutal operational efficiencies heavily utilizing Make.com, Zapier, Python scripting, and raw specific Node.js webhooks seamlessly bridging heavily disconnected systems (e.g., Slack to Salesforce to AWS).',
                    'By explicitly mapping the exact manual trigger workflows, we deploy logical if/else conditionals operating completely silently globally 24/7 fundamentally removing severe human error variables.'
                ]
            },
            capabilities: [
                { title: 'API Webhook Bridges', desc: 'Fusing disjoint platforms natively enabling seamless automated instant instant conversational data pinging.', icon: '<TerminalSquare />' },
                { title: 'Document Parsing', desc: 'Utilizing OCR and AI actively ripping physical PDF payload data routing it securely into CRM fields.', icon: '<Cog />' },
                { title: 'Custom Scripting', desc: 'Executing complex server chron-jobs handling intense nightly database cleaning flawlessly.', icon: '<Server />' }
            ],
            tech: ['Node.js', 'Python', 'Zapier', 'Make.com', 'OpenAI API', 'AWS Lambda'],
            process: [
                { title: 'Workflow Auditing', desc: 'Identifying explicitly where the most painful, highest frequency manual tasks actively reside.' },
                { title: 'Logic Modeling', desc: 'Architecting fail-safe multi-conditional logic trees mapping exactly how automated data behaves natively.' },
                { title: 'Silent Deployment', desc: 'Running active systems entirely in parallel manually checking programmatic output fundamentally guaranteeing accuracy.' }
            ],
            faq: [
                { q: 'Does automation replace jobs?', a: 'No, it elevates them. It removes mind-numbing data-entry drastically freeing your actual humans to focus intensely on creative, high-capital yielding strategy.' }
            ],
            related: [
                { title: 'API Development', href: '/services/software-development/api-development' },
                { title: 'ERP Systems', href: '/services/software-development/erp' }
            ]
        },
        {
            file: 'APIDevelopment.jsx', dir: 'software-development', comp: 'APIDevelopment',
            pRoute: '/services/software-development', pTitle: 'Software Development', eyebrow: 'API Development',
            title: 'The Neural Pathways of Modern Software.',
            desc: 'Robust RESTful and GraphQL API ecosystems enabling completely seamless, intensely secure machine-to-machine global data exchange protocols.',
            theme: { accent: 'text-emerald-500', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' },
            visual: 'APIVisual', visualImport: 'import { APIVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'The backbone of scalable enterprise tech',
                content: [
                    'Every mobile application, massive web platform, and automated system explicitly requires a centralized backend API to function. An API is the strict mathematical gatekeeper securely dispensing requested data natively to authorized clients.',
                    'We structurally engineer immense micro-service APIs utilizing Node.js, Express, and GraphQL schemas. We intensely focus directly on rate-limiting, extreme request speed minimization, and massive cryptographic payload security.',
                    'By developing decoupled backend architecture, you ensure your central database securely feeds your iOS app, Web App, and external partners flawlessly identically.'
                ]
            },
            capabilities: [
                { title: 'RESTful Architecture', desc: 'Building clean intuitive endpoint routing perfectly readable directly globally by any frontend team.', icon: '<TerminalSquare />' },
                { title: 'GraphQL Integration', desc: 'Allowing complex clients to heavily exactly specify precise data shapes fundamentally mitigating over-fetching speeds.', icon: '<Globe />' },
                { title: 'OAUTH & JWT Security', desc: 'Locking endpoints behind massive cryptographic token verification natively blocking malicious payload injection.', icon: '<ShieldCheck />' },
                { title: 'Micro-Service Splitting', desc: 'Decoupling massive monolithic backends actively ensuring unique services securely scale completely independently violently.', icon: '<Layers />' }
            ],
            tech: ['Node.js', 'Express', 'GraphQL', 'Apollo', 'Redis', 'Postman'],
            process: [
                { title: 'Schema Design', desc: 'Formulating exact relational logic fundamentally modeling how distinct objects associate properly natively.' },
                { title: 'Controller Writing', desc: 'Drafting strict algorithmic validation perfectly defending incoming destructive client payloads instantly.' },
                { title: 'Documentation Generation', desc: 'Producing explicit Swagger UI docs universally guiding external consumers utilizing the API flawlessly.' }
            ],
            faq: [
                { q: 'Why GraphQL over REST?', a: 'GraphQL fundamentally stops massive over-fetching. If a mobile app only needs a username, REST might send the whole user profile, wasting bandwidth. GraphQL strictly returns exactly what was explicitly requested.' }
            ],
            related: [
                { title: 'SaaS Architecture', href: '/services/software-development/saas' },
                { title: 'Web App Backend', href: '/services/web-development/backend-development' }
            ]
        },

        // DIGITAL MARKETING
        {
            file: 'SEO.jsx', dir: 'digital-marketing', comp: 'SEO',
            pRoute: '/services/digital-marketing', pTitle: 'Digital Marketing', eyebrow: 'Search Engine Optimization',
            title: 'Dominate Organic Industry Search Authority.',
            desc: 'Technical, programmatic, and content-driven SEO explicitly dominating Google SERP rankings heavily replacing paid acquisition fundamentally.',
            theme: { accent: 'text-blue-600', bg: 'bg-blue-600', softBg: 'bg-blue-50' },
            visual: 'SEOVisual', visualImport: 'import { SEOVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Owning the algorithm completely',
                content: [
                    'Operating a beautiful website fundamentally hidden on page four of Google is commercially useless. Organic Search Engine Optimization remains physically the most lucrative digital asset because it operates globally 24/7 without variable click-costs.',
                    'We heavily bypass basic metadata. We deploy intense programmatic SEO architectures, explicitly repairing core-web-vital speed leaks natively inside your React applications, massively structuring JSON-LD schema, and generating immense clustered semantic authority maps.',
                    'This fundamentally secures untouchable domain authority directly intercepting users exactly when they demonstrate extremely explicit high-intent commercial queries.'
                ]
            },
            capabilities: [
                { title: 'Technical SEO Audits', desc: 'Physically altering React/Next.js code natively ensuring Googlebot crawls dynamic JS platforms flawlessly.', icon: '<TerminalSquare />' },
                { title: 'Programmatic SEO', desc: 'Generating massive templated high-quality keyword pages routing heavy long-tail commercial intent drastically.', icon: '<Layers />' },
                { title: 'Content Clustering', desc: 'Structuring immense interconnected blog pillars actively establishing absolute semantic topic dominance safely.', icon: '<Target />' },
                { title: 'Backlink Acquisition', desc: 'Orchestrating high DA PR campaigns forcefully pushing intense page authority directly into central hubs.', icon: '<ArrowUpRight />' }
            ],
            tech: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Next.js SEO'],
            process: [
                { title: 'Deep Technical Repair', desc: 'Fixing exactly what inherently blocks active indexation (duplicate content, severe render blocking JS).' },
                { title: 'Keyword Mapping', desc: 'Isolating specific untapped, high intent transactional queries entirely ignored directly by mammoth competitors.' },
                { title: 'Authority Building', desc: 'Continuously projecting massive signals natively proving absolute E-E-A-T trust directly to core Google algorithms.' }
            ],
            faq: [
                { q: 'How long does SEO take?', a: 'Typically 3 to 6 months for monumental shifts. SEO is an asset investment, similar to real estate. Unlike PPC which stops immediately when budget runs out, SEO compounds massively over time.' }
            ],
            related: [
                { title: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
                { title: 'CMS Development', href: '/services/web-development/cms-development' }
            ]
        },
        {
            file: 'PPC.jsx', dir: 'digital-marketing', comp: 'PPC',
            pRoute: '/services/digital-marketing', pTitle: 'Digital Marketing', eyebrow: 'Pay Per Click',
            title: 'Precision Target Explicit Intent.',
            desc: 'Highly aggressive Google Ads and LinkedIn PPC deployments maximizing exact algorithmic ROAS targeting high-value immediate commercial intents.',
            theme: { accent: 'text-orange-600', bg: 'bg-orange-500', softBg: 'bg-orange-50' },
            visual: 'PPCVisual', visualImport: 'import { PPCVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Capitalizing heavily on immediate demand',
                content: [
                    'While SEO is the long-term compounding asset, Pay Per Click (Google Search Network) mathematically captures users executing explicit transactional searches absolutely instantly today.',
                    'We engineer brutal mathematical PPC campaigns natively blocking massive negative keywords actively saving thousands of dollars in wasted ad spend. We rigorously A/B split-test distinct landing page headlines explicitly driving Quality Scores aggressively up, naturally pushing Cost-Per-Click drastically down natively.',
                    'This creates a highly predictable, incredibly scalable direct revenue machine operating exclusively on pure calculated Return On Ad Spend.'
                ]
            },
            capabilities: [
                { title: 'Search Network Domination', desc: 'Bidding heavily strictly on absolute bottom-funnel commercial keywords demanding explicit physical solutions.', icon: '<Target />' },
                { title: 'Algorithmic Bidding', desc: 'Deploying heavy machine learning natively adjusting click bids globally maximizing exact physical conversions.', icon: '<Cog />' },
                { title: 'Landing Page Optimization', desc: 'Continuously refining exact URL destinations explicitly preventing massive paid traffic from bouncing instantly.', icon: '<MousePointerClick />' }
            ],
            tech: [],
            process: [],
            faq: [
                { q: 'Why are we losing money on Google Ads?', a: 'Usually due to broad-match keyword settings and zero negative keyword maintenance. Google organically spends budget on irrelevant but vaguely related searches. We tightly exact-match campaigns preventing severe bleed.' }
            ],
            related: [
                { title: 'Performance Marketing', href: '/services/digital-marketing/performance-marketing' },
                { title: 'UX Research', href: '/services/ui-ux-design/ux-research' }
            ]
        },
        {
            file: 'SocialMedia.jsx', dir: 'digital-marketing', comp: 'SocialMedia',
            pRoute: '/services/digital-marketing', pTitle: 'Digital Marketing', eyebrow: 'Social Media Management',
            title: 'Cultivating Dedicated Brand Cults.',
            desc: 'Organic social trajectory strategy explicitly engineering massive community engagement transforming standard followers directly into radical brand evangelists.',
            theme: { accent: 'text-pink-600', bg: 'bg-pink-500', softBg: 'bg-pink-50' },
            visual: 'SocialMediaVisual', visualImport: 'import { SocialMediaVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Engineering authentic digital presence',
                content: [
                    'Generic corporate postings generate absolutely zero algorithmic traction. Modern social media fundamentally rewards native, extremely authentic, heavily engaging value-driven content mapping directly perfectly to respective platform aesthetics.',
                    'We architect massive content engines specifically for LinkedIn (B2B Authority), Instagram (Visual Brand), and X (Immediate Community). We define exact brand voices natively breaking through massive digital noise.',
                    'By driving high-velocity engagement metrics early, we push complex algorithms actively to heavily dramatically amplify your organic reach naturally entirely free of ad-spend.'
                ]
            },
            capabilities: [
                { title: 'Native Content Production', desc: 'Filming, writing, and designing massive payload assets performing flawlessly specifically for distinct platforms natively.', icon: '<Component />' },
                { title: 'Community Management', desc: 'Actively physically interacting globally maintaining intense digital relationships directly with your core consumers.', icon: '<MessageSquare />' },
                { title: 'Influencer Ecosystems', desc: 'Executing complex macro PR integrations safely routing massive parallel audiences directly heavily into your funnel.', icon: '<Store />' },
                { title: 'Algorithmic Hacking', desc: 'Studying exact metric requirements (watch-time, save-ratios) fundamentally manipulating organic reach distribution safely.', icon: '<Target />' }
            ],
            tech: ['Sprout Social', 'Later', 'Figma', 'CapCut', 'Hootsuite'],
            process: [
                { title: 'Voice Definition', desc: 'Establishing absolute explicit grammatical and emotional guidelines natively preventing fragmented chaotic branding.' },
                { title: 'Content Calendars', desc: 'Structuring intense monthly deployment schedules heavily ensuring absolute extreme posting consistency natively.' },
                { title: 'Metric Analysis', desc: 'Reviewing explicit retention curves adapting subsequent content intensely mapping mathematically to what actually engaged.' }
            ],
            faq: [
                { q: 'Should we be on every platform?', a: 'No. A B2B SaaS should heavily focus specifically on LinkedIn and potentially X. A D2C Fashion brand should live entirely on Instagram and TikTok. Focus exclusively explicitly where your specific demographic natively breathes.' }
            ],
            related: [
                { title: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
                { title: 'Performance Marketing', href: '/services/digital-marketing/performance-marketing' }
            ]
        },
        {
            file: 'ContentMarketing.jsx', dir: 'digital-marketing', comp: 'ContentMarketing',
            pRoute: '/services/digital-marketing', pTitle: 'Digital Marketing', eyebrow: 'Content Marketing',
            title: 'Value that Consistently Converts.',
            desc: 'Producing elite long-form educational ecosystems explicitly capturing high-intent prospects entirely before they are ready to transact physically.',
            theme: { accent: 'text-indigo-600', bg: 'bg-indigo-500', softBg: 'bg-indigo-50' },
            visual: 'ContentMarketingVisual', visualImport: 'import { ContentMarketingVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Establishing categorical thought leadership',
                content: [
                    'Before prospects purchase massive B2B software or heavy retainer services, they actively research solutions. If you explicitly provide the most authoritative educational resource solving their immediate pain natively, you completely win the eventual physical contract sale.',
                    'We construct immense content pipelines: whitepapers, in-depth blog topologies, and heavy case studies. We actively refuse generic AI-generated fluff, exclusively focusing heavily on profound actionable proprietary insight driving extreme user trust.',
                    'This ecosystem acts fundamentally as an evergreen sales engine actively indoctrinating global prospects comprehensively mathematically while your team sleeps entirely.'
                ]
            },
            capabilities: [
                { title: 'Authority Blogging', desc: 'Drafting immense 2000+ word technical architectures capturing severe deep long-tail SERP traffic flawlessly.', icon: '<Target />' },
                { title: 'Lead Magnet Funnels', desc: 'Engineering exact high-value PDFs actively gating them securely strictly exchanging for premium prospect emails.', icon: '<LockKeyhole />' },
                { title: 'Email Nurturing', desc: 'Drafting heavy automated sequential logic actively warming completely cold leads natively over massive 60-day loops.', icon: '<Mail />' }
            ],
            tech: [],
            process: [],
            faq: [
                { q: 'Can we just use AI to write blogs?', a: 'You can, but Google explicitly penalizes unoriginal, thin AI content heavily. True Content Marketing actively requires physical expert Subject Matter insertion natively driving actual human emotional trust fundamentally.' }
            ],
            related: [
                { title: 'SEO', href: '/services/digital-marketing/seo' },
                { title: 'Social Media', href: '/services/digital-marketing/social-media' }
            ]
        },
        {
            file: 'PerformanceMarketing.jsx', dir: 'digital-marketing', comp: 'PerformanceMarketing',
            pRoute: '/services/digital-marketing', pTitle: 'Digital Marketing', eyebrow: 'Performance Marketing',
            title: 'Math Not Magic. Scale with Confidence.',
            desc: 'Omnichannel paid-acquisition actively deploying intense Meta, TikTok, and Programmatic ad structures strictly focusing heavily exclusively on mathematically guaranteed positive ROAS.',
            theme: { accent: 'text-emerald-600', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' },
            visual: 'PerformanceMarketingVisual', visualImport: 'import { PerformanceMarketingVisual } from \'../../../components/services/subservices/visuals/VisualsSoftware_Marketing\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Treating ad-spend as an accurate financial algorithm',
                content: [
                    'Brand marketing measures feelings. Performance marketing explicitly measures absolute gross profit capital natively. We operate heavily across Meta (Facebook/IG), TikTok, and programmatic displays actively demanding exact measurable Return On Ad Spend.',
                    'We heavily deploy intense server-side tracking (Conversions API) natively bypassing chaotic absolute iOS privacy restrictions, fundamentally feeding explicit physical purchase data securely perfectly back directly mapping exactly to Facebook algorithms.',
                    'This ensures extreme machine-learning optimization actively hunting exact demographic profiles statistically proven mathematically likely fundamentally prone directly converting entirely predictably.'
                ]
            },
            capabilities: [
                { title: 'Meta & TikTok Ads', desc: 'Scaling massive daily budgets natively explicitly balancing creative fatigue mathematically simultaneously avoiding massive CPA spikes.', icon: '<Maximize />' },
                { title: 'Server-Side Tracking', desc: 'Writing exact Node.js logic pushing offline heavy CRM conversion data perfectly securely into algorithmic learning.', icon: '<Database />' },
                { title: 'Rapid Creative Testing', desc: 'Deploying heavy matrices natively actively isolating exactly which specific headline/video combination physically drops click costs entirely.', icon: '<Cog />' },
                { title: 'Omnichannel Retargeting', desc: 'Chasing abandoned users aggressively flawlessly globally violently securing drastically cheap final closing conversions natively.', icon: '<Target />' }
            ],
            tech: ['Meta Ads Manager', 'TikTok business', 'GTM', 'Google Analytics 4', 'Triple Whale', 'Stape.io'],
            process: [
                { title: 'Tracking Architecture', desc: 'Explicitly fixing drastically broken pixel integrations natively heavily ensuring algorithms receive perfect exact data physically.' },
                { title: 'Creative Testing', desc: 'Running tiny budgets globally finding extreme anomaly ads mathematically outperforming standard chaotic benchmarks fundamentally.' },
                { title: 'Vertical Scaling', desc: 'Aggressively injecting massive capital explicitly specifically into winning ad-sets natively perfectly without algorithmically breaking CPA ceilings.' }
            ],
            faq: [
                { q: 'Why are my current Facebook Ads failing?', a: 'Because creative assets fatigue incredibly rapidly natively, and browser pixel tracking natively explicitly misses 30% of actual data due entirely directly to heavy iOS14 privacy blocks. You must aggressively implement direct server-side (CAPI) architectures entirely.' }
            ],
            related: [
                { title: 'PPC', href: '/services/digital-marketing/ppc' },
                { title: 'Shopify Development', href: '/services/ecommerce-development/shopify' }
            ]
        }
    ];

    let imports = `import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, LayoutDashboard, LockKeyhole, Globe } from 'lucide-react';\n`;

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
    console.log("Generated Software Marketing Pages!");
};

generatePages();
