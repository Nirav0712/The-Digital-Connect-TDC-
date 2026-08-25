import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'src', 'pages', 'industries');

// Ensure directories exist
['healthcare', 'fintech', 'ecommerce', 'saas'].forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

const pageDefs = [
    // HEALTHCARE
    {
        folder: 'healthcare',
        id: 'healthcare-platforms',
        componentName: 'HealthcarePlatforms',
        title: 'Healthcare Platform Development Services | The Digital Connect',
        desc: 'Build secure, scalable healthcare platforms with The Digital Connect. We create digital solutions for patients, providers and healthcare businesses.',
        eyebrow: 'HEALTHCARE PLATFORMS',
        h1: 'Digital platforms built for connected, secure and scalable healthcare experiences.',
        p: 'We engineer complex healthcare platforms that consolidate data, streamline workflows, and enable seamless communication across your entire health ecosystem.',
        featuresTitle: 'Platform Capabilities',
        features: ['Patient Portals', 'Provider Dashboards', 'Healthcare Workflows', 'Data Integrations']
    },
    {
        folder: 'healthcare',
        id: 'patient-apps',
        componentName: 'PatientApps',
        title: 'Patient App Development Services | The Digital Connect',
        desc: 'Create intuitive patient apps for appointments, engagement, digital health records and connected healthcare experiences.',
        eyebrow: 'PATIENT APPS',
        h1: 'Mobile solutions bridging the gap between care and convenience.',
        p: 'Design patient-centric mobile applications that increase engagement, simplify appointment booking, and place medical records directly in users hands.',
        featuresTitle: 'App Features',
        features: ['Appointment Booking', 'Telehealth Video', 'Secure Messaging', 'Health Tracking']
    },
    {
        folder: 'healthcare',
        id: 'healthcare-websites',
        componentName: 'HealthcareWebsites',
        title: 'Healthcare Website Design & Development | The Digital Connect',
        desc: 'Custom medical, hospital and clinic website development balancing patient accessibility with robust SEO and performance.',
        eyebrow: 'HEALTHCARE WEBSITES',
        h1: 'Digital front doors for modern medical institutions.',
        p: 'Your website is the first touchpoint. We craft highly accessible, compliant, and SEO-optimized web presences tailored for hospitals, clinics, and medical practices.',
        featuresTitle: 'Website Excellence',
        features: ['Patient Accessibility', 'Service Directories', 'Doctor Profiles', 'SEO Optimization']
    },
    {
        folder: 'healthcare',
        id: 'appointment-systems',
        componentName: 'AppointmentSystems',
        title: 'Healthcare Appointment Scheduling Systems | The Digital Connect',
        desc: 'Automate hospital and clinic scheduling with intelligent online appointment booking workflows.',
        eyebrow: 'APPOINTMENT SYSTEMS',
        h1: 'Frictionless scheduling for modern clinics.',
        p: 'Eliminate booking friction with intelligent scheduling systems that minimize no-shows, respect provider boundaries, and keep patients informed.',
        featuresTitle: 'Scheduling Workflows',
        features: ['Provider Calendars', 'Automated Reminders', 'Waitlist Management', 'Insurance Verification']
    },
    // FINTECH
    {
        folder: 'fintech',
        id: 'banking-portals',
        componentName: 'BankingPortals',
        title: 'Digital Banking Portals & Interfaces | The Digital Connect',
        desc: 'Secure, intuitive retail and corporate digital banking portals tailored for modern financial institutions.',
        eyebrow: 'BANKING PORTALS',
        h1: 'Digital banking interfaces engineered for security and scale.',
        p: 'Transform complex account management into seamless customer dashboards, combining airtight security with consumer-grade user experience.',
        featuresTitle: 'Banking Capabilities',
        features: ['Account Aggregation', 'Transaction History', 'Secure Auth', 'Money Transfers']
    },
    {
        folder: 'fintech',
        id: 'payments',
        componentName: 'Payments',
        title: 'Payment Gateway Integration & Architecture | The Digital Connect',
        desc: 'Create limitless digital payment workflows, custom gateways, and localized checkout solutions.',
        eyebrow: 'PAYMENT SYSTEMS',
        h1: 'Limitless transaction workflows for digital commerce.',
        p: 'From recurring billing systems to localized gateway integrations, we build the robust digital plumbing necessary to power secure, frictionless transactions globally.',
        featuresTitle: 'Payment Solutions',
        features: ['Checkout Optimization', 'Recurring Subscriptions', 'Multi-currency', 'Fraud Prevention']
    },
    {
        folder: 'fintech',
        id: 'trading',
        componentName: 'Trading',
        title: 'Trading Platforms & Market Application Development | The Digital Connect',
        desc: 'Real-time financial trading platforms, market data dashboards and portfolio management applications.',
        eyebrow: 'TRADING PLATFORMS',
        h1: 'Real-time market experiences built on low-latency architecture.',
        p: 'Build lightning-fast trading interfaces and portfolio visualization tools where milliseconds dictate success.',
        featuresTitle: 'Trading Engines',
        features: ['Live Order Books', 'Charting Integration', 'Portfolio Analytics', 'Risk Management']
    },
    {
        folder: 'fintech',
        id: 'dashboards',
        componentName: 'FintechDashboards',
        title: 'Financial Analytics & BI Dashboards | The Digital Connect',
        desc: 'Custom financial dashboards visualizing complex data into actionable business intelligence.',
        eyebrow: 'FINANCIAL DASHBOARDS',
        h1: 'Complex financial data visualized for instant comprehension.',
        p: 'Convert millions of data points into interactive intelligence dashboards that empower executive decision making and financial reporting.',
        featuresTitle: 'Dashboard Features',
        features: ['Custom Reporting', 'Data Visualization', 'Real-time Metrics', 'Data Export']
    },
    // ECOMMERCE
    {
        folder: 'ecommerce',
        id: 'marketplaces',
        componentName: 'Marketplaces',
        title: 'Multi-Vendor Marketplace Development | The Digital Connect',
        desc: 'Scale your commerce operations with custom multi-vendor marketplaces, seller management and commission workflows.',
        eyebrow: 'MULTI-VENDOR MARKETPLACES',
        h1: 'Complex marketplace ecosystems simplified for growth.',
        p: 'Launch powerful multi-vendor platforms with seamless seller onboarding, automated commission splitting, and robust product catalog architectures.',
        featuresTitle: 'Marketplace Tools',
        features: ['Seller Dashboards', 'Commission Engines', 'Order Splitting', 'Global Catalogs']
    },
    {
        folder: 'ecommerce',
        id: 'b2b-portals',
        componentName: 'B2BPortals',
        title: 'B2B Ecommerce Portals & Wholesale | The Digital Connect',
        desc: 'Digital transformation for wholesale commerce. B2B portals featuring custom pricing, bulk ordering and account management.',
        eyebrow: 'B2B COMMERCE',
        h1: 'Modernizing wholesale ordering for the digital age.',
        p: 'Upgrade your B2B sales pipeline with digital portals that support complex pricing tiers, corporate account hierarchies, and automated reordering workflows.',
        featuresTitle: 'B2B Features',
        features: ['Tiered Pricing', 'Quote Workflows', 'Bulk Order Grids', 'Account Hierarchy']
    },
    {
        folder: 'ecommerce',
        id: 'inventory',
        componentName: 'Inventory',
        title: 'Inventory Sync & Management Systems | The Digital Connect',
        desc: 'Custom inventory management software ensuring perfect stock synchronization across all sales channels.',
        eyebrow: 'INVENTORY SYSTEMS',
        h1: 'Perfect synchronization across every sales channel.',
        p: 'Eliminate overselling and operational blind spots with real-time inventory architectures that sync seamlessly with your ERPs, warehouses, and storefronts.',
        featuresTitle: 'Inventory Tracking',
        features: ['Multi-warehouse Sync', 'Low Stock Alerts', 'Barcode Workflows', 'Supplier Connect']
    },
    {
        folder: 'ecommerce',
        id: 'pos-integration',
        componentName: 'POSIntegration',
        title: 'Retail POS to Ecommerce Integrations | The Digital Connect',
        desc: 'Bridge physical and digital retail with robust Point of Sale and Ecommerce synchronization.',
        eyebrow: 'POS INTEGRATION',
        h1: 'Bridging physical retail with digital commerce.',
        p: 'Unify your customer experience by seamlessly linking your brick-and-mortar Point of Sale systems with your digital storefronts for true omnichannel commerce.',
        featuresTitle: 'Omnichannel Sync',
        features: ['Real-time Stock', 'Unified Customer Data', 'In-store Pickup', 'Return Workflows']
    },
    // SAAS
    {
        folder: 'saas',
        id: 'architecture',
        componentName: 'SaaSArchitecture',
        title: 'SaaS Architecture & Cloud Engineering | The Digital Connect',
        desc: 'Design scalable, secure cloud architecture for SaaS applications supporting thousands of concurrent users.',
        eyebrow: 'SAAS ARCHITECTURE',
        h1: 'Cloud-native foundations built for infinite scale.',
        p: 'Design and deploy resilient microservices and serverless architectures that guarantee high availability and scale effortlessly as your SaaS product grows.',
        featuresTitle: 'Infrastructure',
        features: ['Microservices', 'API First Design', 'Auto-scaling Clusters', 'Disaster Recovery']
    },
    {
        folder: 'saas',
        id: 'multi-tenant',
        componentName: 'MultiTenant',
        title: 'Multi-Tenant Application Development | The Digital Connect',
        desc: 'Secure multi-tenant data architecture establishing data isolation, performance scaling and role management.',
        eyebrow: 'MULTI-TENANT SYSTEMS',
        h1: 'Logical data isolation for enterprise SaaS deployments.',
        p: 'Architect secure multi-tenant databases and isolated instance environments that protect client data while maximizing shared resource efficiency.',
        featuresTitle: 'Tenant Management',
        features: ['Data Isolation', 'Role-Based Access', 'Tenant Provisioning', 'Custom Domains']
    },
    {
        folder: 'saas',
        id: 'billing',
        componentName: 'SaaSBilling',
        title: 'SaaS Billing & Subscription Systems | The Digital Connect',
        desc: 'Integration of robust recurring billing, metered usage, and invoice automation for SaaS businesses.',
        eyebrow: 'SAAS BILLING',
        h1: 'Frictionless recurring revenue engines.',
        p: 'Implement complex recurring subscription models, usage-based metering, and dunning management to ensure smooth unhindered cash flow.',
        featuresTitle: 'Billing Workflows',
        features: ['Metered Usage', 'Tiered Subscriptions', 'Dunning Management', 'Invoice Automation']
    },
    {
        folder: 'saas',
        id: 'analytics',
        componentName: 'SaaSAnalytics',
        title: 'SaaS Usage Analytics & KPI Dashboards | The Digital Connect',
        desc: 'Embed powerful behavioral analytics and revenue tracking directly into your SaaS operations.',
        eyebrow: 'SAAS ANALYTICS',
        h1: 'Product insights dictating strategic growth.',
        p: 'Capture precise user telemetry, retention metrics, and MRR movements to make informed product decisions based on real user behavior.',
        featuresTitle: 'Analytics Depth',
        features: ['User Retention', 'MRR Tracking', 'Feature Telemetry', 'Cohort Analysis']
    }
];

function generateComponent(def) {
    const isHealthcare = def.folder === 'healthcare';
    const isFintech = def.folder === 'fintech';
    const isEcommerce = def.folder === 'ecommerce';
    const isSaas = def.folder === 'saas';
    const color = isHealthcare ? '#061A2E' : isFintech ? '#08243A' : isEcommerce ? '#061B2E' : '#08BFE8';
    const accent = '#08BFE8';
    const soft = '#EAF8FC';

    // Create random distinct visual blocks for variety
    const visualTypes = ['dashboard', 'cards', 'stats', 'code'];
    const visualType = visualTypes[Math.floor(Math.random() * visualTypes.length)];

    let visualJSX = '';
    if (visualType === 'dashboard') {
        visualJSX = `
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#061B2E] rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden relative border border-[#08BFE8]/20 flex flex-col pt-4 px-4 h-[300px]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#08BFE8] to-transparent"></div>
                <div className="flex gap-2 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 bg-white/5 rounded-t-2xl border-t border-x border-[#08BFE8]/10 p-6 flex items-end gap-2 relative overflow-hidden backdrop-blur-sm">
                    <motion.div animate={{ height: ['40%', '60%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-1/6 bg-[#08BFE8]/20 rounded-t-lg"></motion.div>
                    <motion.div animate={{ height: ['20%', '80%', '20%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-1/6 bg-[#08BFE8]/40 rounded-t-lg"></motion.div>
                    <motion.div animate={{ height: ['70%', '30%', '70%'] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1/6 bg-[#08BFE8]/60 rounded-t-lg"></motion.div>
                    <motion.div animate={{ height: ['90%', '50%', '90%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-1/6 bg-[#08BFE8]/80 rounded-t-lg"></motion.div>
                </div>
            </div>`;
    } else if (visualType === 'cards') {
        visualJSX = `
            <div className="w-full flex gap-4 overflow-hidden py-10 relative">
                <motion.div animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="w-64 h-64 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 flex flex-col justify-between z-20 relative">
                   <div className="w-12 h-12 bg-[#EAF8FC] rounded-xl flex items-center justify-center text-[#08BFE8]">✦</div>
                   <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                   <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                </motion.div>
                <motion.div animate={{ x: [20, -20, 20], y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="w-64 h-64 bg-[#08BFE8] text-white rounded-3xl shadow-xl p-6 border border-[#08BFE8] flex flex-col justify-end z-10 -ml-16 mt-16 scale-90">
                   <div className="font-bold text-lg mb-2">Engaged</div>
                   <div className="h-1 bg-white/30 rounded-full w-full"></div>
                </motion.div>
            </div>`;
    } else {
        visualJSX = `
            <div className="w-full max-w-lg aspect-square bg-[#FAFAFA] rounded-full border border-gray-100 relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-10 bg-[size:20px_20px] rounded-full"></div>
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-[#08BFE8]/20 flex items-center justify-center">
                      <div className="w-[60%] h-[60%] rounded-full bg-white shadow-xl flex items-center justify-center z-10 text-[#061B2E] font-black text-4xl border border-gray-50">
                         TDC
                      </div>
                 </motion.div>
                 <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 w-12 h-12 bg-[#08BFE8] rounded-full shadow-lg"></motion.div>
            </div>`;
    }

    return `import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ${def.componentName} = () => {
    useSEO({
        title: "${def.title}",
        description: "${def.desc}"
    });

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                
                {/* BREADCRUMBS */}
                <div className="pt-[90px] lg:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/industries" className="hover:text-[#08BFE8] transition-colors">Industries</Link>
                    <ChevronRight size={14} />
                    <Link to="/industries/${def.folder}" className="hover:text-[#08BFE8] transition-colors capitalize">${def.folder}</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold">${def.eyebrow}</span>
                </div>

                {/* HERO */}
                <section className="py-12 md:py-20 px-5 max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                            ${def.eyebrow}
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,6vw,64px)] font-heading font-black text-[#061B2E] leading-tight mb-6">
                            ${def.h1}
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-10">
                            ${def.p}
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/20">
                                Discuss Your Project <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full flex justify-center lg:justify-end">
                        ${visualJSX}
                    </div>
                </section>

                {/* WHY IT MATTERS / CHALLENGES */}
                <section className="bg-[#061B2E] text-white py-20 lg:py-32 px-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto relative z-10">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-[clamp(32px,5vw,48px)] font-heading font-black mb-6">Solving complex industry roadblocks.</h2>
                            <p className="text-[#7F94A8] text-lg leading-relaxed">
                                Standing out requires moving past legacy constraints. We remove technical debt and build modern systems designed entirely for scale and user satisfaction.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${def.features.map((f, i) => `
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={24} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">${f}</h3>
                                <p className="text-[#7F94A8] text-sm">Essential architecture engineered for optimal performance.</p>
                            </div>`).join('\n')}
                        </div>
                    </div>
                </section>

                {/* EXPERTISE & CAPABILITIES */}
                <section className="py-20 lg:py-32 px-5 max-w-[1320px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[clamp(32px,5vw,48px)] font-heading font-black text-[#061B2E] mb-6">${def.featuresTitle}</h2>
                        <p className="text-[#7F94A8] text-lg">We deliver end-to-end digital excellence merging strategic foresight with flawless engineering.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow lg:col-span-2">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Strategic Architecture</h3>
                           <p className="text-[#7F94A8] leading-relaxed mb-6">Every successful deployment starts with an airtight architectural blueprint. We map out data flows, user journeys, and component integration strategies before writing a single line of code.</p>
                           <ul className="space-y-3 font-medium text-[#061B2E]">
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Scalable cloud infrastructure</li>
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Bulletproof security protocols</li>
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Seamless API integrations</li>
                           </ul>
                        </div>
                        <div className="bg-[#EAF8FC] rounded-3xl p-10 shadow-md border border-[#08BFE8]/20 flex flex-col justify-center">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Why Partner With Us?</h3>
                           <p className="text-[#061B2E]/80 leading-relaxed font-medium">We deliver software that actually impacts your bottom line, built by senior engineers who act as an extension of your own team.</p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-20 px-5 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.03] bg-[size:24px_24px]"></div>
                     <div className="max-w-2xl mx-auto relative z-10 text-white">
                         <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black mb-8 leading-tight">Ready to elevate your digital presence?</h2>
                         <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                             Let's discuss your project <ArrowRight size={20} className="ml-2" />
                         </Link>
                     </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default ${def.componentName};
`;
}

pageDefs.forEach(def => {
    const filePath = path.join(baseDir, def.folder, def.componentName + '.jsx');
    fs.writeFileSync(filePath, generateComponent(def));
    console.log('Generated ' + filePath);
});
