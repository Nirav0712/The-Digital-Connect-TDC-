import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'src', 'pages', 'industries');

const pageDefs = [
    // HEALTHCARE
    {
        folder: 'healthcare', id: 'healthcare-platforms', componentName: 'HealthcarePlatforms',
        title: 'Healthcare Platform Development Services | The Digital Connect', desc: 'Build secure, scalable healthcare platforms...',
        eyebrow: 'HEALTHCARE PLATFORMS', h1: 'Digital platforms built for connected healthcare experiences.',
        p: 'We engineer complex healthcare platforms that consolidate data, streamline workflows, and enable seamless communication.',
        featuresTitle: 'Platform Capabilities', features: ['Patient Portals', 'Provider Dashboards', 'Healthcare Workflows', 'Data Integrations']
    },
    {
        folder: 'healthcare', id: 'patient-apps', componentName: 'PatientApps',
        title: 'Patient App Development Services | The Digital Connect', desc: 'Create intuitive patient apps...',
        eyebrow: 'PATIENT APPS', h1: 'Mobile solutions bridging the gap between care and convenience.',
        p: 'Design patient-centric mobile applications that increase engagement and simplify appointment booking.',
        featuresTitle: 'App Features', features: ['Appointment Booking', 'Telehealth Video', 'Secure Messaging', 'Health Tracking']
    },
    {
        folder: 'healthcare', id: 'healthcare-websites', componentName: 'HealthcareWebsites',
        title: 'Healthcare Website Design & Development | The Digital Connect', desc: 'Custom medical, hospital and clinic website development.',
        eyebrow: 'HEALTHCARE WEBSITES', h1: 'Digital front doors for modern medical institutions.',
        p: 'Craft highly accessible, compliant, and SEO-optimized web presences tailored for hospitals and clinics.',
        featuresTitle: 'Website Excellence', features: ['Patient Accessibility', 'Service Directories', 'Doctor Profiles', 'SEO Optimization']
    },
    {
        folder: 'healthcare', id: 'appointment-systems', componentName: 'AppointmentSystems',
        title: 'Healthcare Appointment Scheduling Systems | The Digital Connect', desc: 'Automate hospital and clinic scheduling.',
        eyebrow: 'APPOINTMENT SYSTEMS', h1: 'Frictionless scheduling for modern clinics.',
        p: 'Eliminate booking friction with intelligent scheduling systems that minimize no-shows and keep patients informed.',
        featuresTitle: 'Scheduling Workflows', features: ['Provider Calendars', 'Automated Reminders', 'Waitlist Management', 'Insurance Verification']
    },
    // FINTECH
    {
        folder: 'fintech', id: 'banking-portals', componentName: 'BankingPortals',
        title: 'Digital Banking Portals & Interfaces | The Digital Connect', desc: 'Secure, intuitive retail and corporate digital banking portals.',
        eyebrow: 'BANKING PORTALS', h1: 'Banking interfaces engineered for security and scale.',
        p: 'Transform complex account management into seamless customer dashboards with consumer-grade user experience.',
        featuresTitle: 'Banking Capabilities', features: ['Account Aggregation', 'Transaction History', 'Secure Auth', 'Money Transfers']
    },
    {
        folder: 'fintech', id: 'payments', componentName: 'Payments',
        title: 'Payment Gateway Integration & Architecture | The Digital Connect', desc: 'Create limitless digital payment workflows.',
        eyebrow: 'PAYMENT SYSTEMS', h1: 'Limitless transaction workflows for digital commerce.',
        p: 'From recurring billing systems to localized gateway integrations, we build the robust digital plumbing necessary.',
        featuresTitle: 'Payment Solutions', features: ['Checkout Optimization', 'Recurring Subscriptions', 'Multi-currency', 'Fraud Prevention']
    },
    {
        folder: 'fintech', id: 'trading', componentName: 'Trading',
        title: 'Trading Platforms & Market Application Development | The Digital Connect', desc: 'Real-time financial trading platforms.',
        eyebrow: 'TRADING PLATFORMS', h1: 'Real-time market experiences built on low-latency.',
        p: 'Build lightning-fast trading interfaces and portfolio visualization tools where milliseconds dictate success.',
        featuresTitle: 'Trading Engines', features: ['Live Order Books', 'Charting Integration', 'Portfolio Analytics', 'Risk Management']
    },
    {
        folder: 'fintech', id: 'dashboards', componentName: 'FintechDashboards',
        title: 'Financial Analytics & BI Dashboards | The Digital Connect', desc: 'Custom financial dashboards visualizing complex data.',
        eyebrow: 'FINANCIAL DASHBOARDS', h1: 'Complex financial data visualized for instant comprehension.',
        p: 'Convert millions of data points into interactive intelligence dashboards that empower executive decision making.',
        featuresTitle: 'Dashboard Features', features: ['Custom Reporting', 'Data Visualization', 'Real-time Metrics', 'Data Export']
    },
    // ECOMMERCE
    {
        folder: 'ecommerce', id: 'marketplaces', componentName: 'Marketplaces',
        title: 'Multi-Vendor Marketplace Development | The Digital Connect', desc: 'Scale your commerce operations with custom multi-vendor marketplaces.',
        eyebrow: 'MULTI-VENDOR MARKETPLACES', h1: 'Complex marketplace ecosystems simplified for growth.',
        p: 'Launch powerful multi-vendor platforms with seamless seller onboarding and automated commission splitting.',
        featuresTitle: 'Marketplace Tools', features: ['Seller Dashboards', 'Commission Engines', 'Order Splitting', 'Global Catalogs']
    },
    {
        folder: 'ecommerce', id: 'b2b-portals', componentName: 'B2BPortals',
        title: 'B2B Ecommerce Portals & Wholesale | The Digital Connect', desc: 'Digital transformation for wholesale commerce.',
        eyebrow: 'B2B COMMERCE', h1: 'Modernizing wholesale ordering for the digital age.',
        p: 'Upgrade your B2B sales pipeline with digital portals that support complex pricing tiers and corporate hierarchies.',
        featuresTitle: 'B2B Features', features: ['Tiered Pricing', 'Quote Workflows', 'Bulk Order Grids', 'Account Hierarchy']
    },
    {
        folder: 'ecommerce', id: 'inventory', componentName: 'Inventory',
        title: 'Inventory Sync & Management Systems | The Digital Connect', desc: 'Custom inventory management software.',
        eyebrow: 'INVENTORY SYSTEMS', h1: 'Perfect synchronization across every sales channel.',
        p: 'Eliminate overselling and operational blind spots with real-time inventory architectures.',
        featuresTitle: 'Inventory Tracking', features: ['Multi-warehouse Sync', 'Low Stock Alerts', 'Barcode Workflows', 'Supplier Connect']
    },
    {
        folder: 'ecommerce', id: 'pos-integration', componentName: 'POSIntegration',
        title: 'Retail POS to Ecommerce Integrations | The Digital Connect', desc: 'Bridge physical and digital retail with robust POS sync.',
        eyebrow: 'POS INTEGRATION', h1: 'Bridging physical retail with digital commerce.',
        p: 'Unify your customer experience by seamlessly linking isolated POS systems directly with scalable digital storefronts.',
        featuresTitle: 'Omnichannel Sync', features: ['Real-time Stock', 'Unified Customer Data', 'In-store Pickup', 'Return Workflows']
    },
    // SAAS
    {
        folder: 'saas', id: 'architecture', componentName: 'SaaSArchitecture',
        title: 'SaaS Architecture & Cloud Engineering | The Digital Connect', desc: 'Design scalable, secure cloud architecture for SaaS applications.',
        eyebrow: 'SAAS ARCHITECTURE', h1: 'Cloud-native foundations built for infinite scale.',
        p: 'Deploy resilient microservices and serverless architectures that guarantee high availability and scale effortlessly.',
        featuresTitle: 'Infrastructure', features: ['Microservices', 'API First Design', 'Auto-scaling Clusters', 'Disaster Recovery']
    },
    {
        folder: 'saas', id: 'multi-tenant', componentName: 'MultiTenant',
        title: 'Multi-Tenant Application Development | The Digital Connect', desc: 'Secure multi-tenant data architecture.',
        eyebrow: 'MULTI-TENANT SYSTEMS', h1: 'Logical data isolation for enterprise SaaS deployments.',
        p: 'Architect secure multi-tenant databases and isolated environment pipelines protecting your client data architecture.',
        featuresTitle: 'Tenant Management', features: ['Data Isolation', 'Role-Based Access', 'Tenant Provisioning', 'Custom Domains']
    },
    {
        folder: 'saas', id: 'billing', componentName: 'SaaSBilling',
        title: 'SaaS Billing & Subscription Systems | The Digital Connect', desc: 'Integration of robust recurring billing and metered usage.',
        eyebrow: 'SAAS BILLING', h1: 'Frictionless recurring revenue engine systems.',
        p: 'Implement complex recurring subscription models, usage-based metering, and dunning management logic pipelines seamlessly.',
        featuresTitle: 'Billing Workflows', features: ['Metered Usage', 'Tiered Subscriptions', 'Dunning Management', 'Invoice Automation']
    },
    {
        folder: 'saas', id: 'analytics', componentName: 'SaaSAnalytics',
        title: 'SaaS Usage Analytics & KPI Dashboards | The Digital Connect', desc: 'Embed powerful behavioral analytics and revenue tracking.',
        eyebrow: 'SAAS ANALYTICS', h1: 'Product insights dictating strategic SaaS growth.',
        p: 'Capture precise user telemetry, retention metrics, and MRR movements to make informed operational SaaS decisions.',
        featuresTitle: 'Analytics Depth', features: ['User Retention', 'MRR Tracking', 'Feature Telemetry', 'Cohort Analysis']
    }
];

function generateVisual(id) {
    switch (id) {
        case 'healthcare-platforms':
            return `
                <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#061B2E] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-10 bg-[size:20px_20px]"></div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="w-48 h-48 border border-[#08BFE8]/30 rounded-full flex items-center justify-center relative">
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute -top-4 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg border border-[#08BFE8]/50"><div className="w-3 h-3 bg-[#08BFE8] rounded-sm"></div></motion.div>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute -bottom-4 w-10 h-10 bg-[#EAF8FC] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,191,232,0.4)] border border-[#08BFE8]"><div className="w-4 h-4 bg-[#061B2E] rounded-full"></div></motion.div>
                        <div className="w-24 h-24 bg-[#08BFE8]/20 rounded-full flex items-center justify-center backdrop-blur-md border border-[#08BFE8]/40">
                             <div className="w-12 h-12 bg-[#08BFE8] rounded-full flex items-center justify-center text-white font-bold"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        </div>
                    </motion.div>
                </div>`;
        case 'patient-apps':
            return `
                <div className="w-full h-[400px] bg-gradient-to-br from-[#EAF8FC] to-white rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl border border-gray-100">
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-64 h-[85%] bg-white rounded-[32px] shadow-2xl border-4 border-gray-100 p-4 flex flex-col gap-4 relative z-10">
                        <div className="w-1/3 h-1 bg-gray-200 mx-auto rounded-full mt-2"></div>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 bg-[#08BFE8] rounded-full flex items-center justify-center text-white font-bold blur-[1px]">O</div>
                            <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="w-full h-24 bg-[#EAF8FC] rounded-2xl border border-[#08BFE8]/20 flex flex-col justify-center px-4 gap-2">
                             <div className="w-1/2 h-2 bg-[#08BFE8]/50 rounded-full"></div>
                             <div className="w-3/4 h-2 bg-[#08BFE8]/30 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-auto mb-4">
                            <div className="h-12 bg-gray-50 rounded-xl"></div>
                            <div className="h-12 bg-[#08BFE8]/10 rounded-xl"></div>
                        </div>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bg-[#08BFE8] w-64 h-64 rounded-full blur-[80px] -z-0"></motion.div>
                </div>`;
        case 'healthcare-websites':
            return `
                <div className="w-full h-[350px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                         <div className="ml-4 w-40 h-4 bg-white border border-gray-200 rounded-md"></div>
                    </div>
                    <div className="flex-1 bg-white p-6 relative overflow-hidden flex gap-6">
                         <div className="w-1/3 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2"></div>
                              <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                              <div className="h-2 w-2/3 mx-auto bg-gray-200 rounded-full"></div>
                         </div>
                         <div className="flex-1 flex flex-col gap-4">
                              <motion.div animate={{ width: ['40%', '80%', '40%'] }} transition={{ duration: 5, repeat: Infinity }} className="h-8 bg-[#08BFE8]/10 rounded-lg"></motion.div>
                              <div className="h-4 w-full bg-gray-50 rounded-full mt-2"></div>
                              <div className="h-4 w-[90%] bg-gray-50 rounded-full"></div>
                              <div className="h-4 w-[85%] bg-gray-50 rounded-full"></div>
                         </div>
                    </div>
                </div>`;
        case 'appointment-systems':
            return `
                <div className="w-full h-[350px] bg-[#FAFAFA] rounded-3xl p-6 border border-gray-100 shadow-xl flex gap-4 overflow-hidden relative">
                     <div className="w-1/2 flex flex-col gap-4 relative z-10">
                          <div className="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4"><div className="w-1/2 h-3 bg-gray-200 rounded-full"></div></div>
                          <motion.div whileHover={{ scale: 1.05 }} className="h-24 bg-white rounded-xl shadow-md border-l-4 border-[#08BFE8] p-4 flex flex-col gap-2">
                               <div className="w-1/3 h-2 bg-[#08BFE8]/50 rounded-full"></div>
                               <div className="w-1/2 h-2 bg-gray-200 rounded-full mt-2"></div>
                          </motion.div>
                          <div className="h-24 bg-white/50 rounded-xl border border-gray-100 border-dashed"></div>
                     </div>
                     <div className="w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                          <div className="grid grid-cols-7 gap-1 h-full">
                               {Array.from({length: 35}).map((_, i) => (
                                   <div key={i} className={"w-full h-full rounded-sm " + (i === 12 ? 'bg-[#08BFE8]/20 border border-[#08BFE8]' : 'bg-gray-50')}>
                                      {i===12 && <motion.div animate={{scale:[1,1.5,1], opacity:[1,0,1]}} transition={{duration:2, repeat:Infinity}} className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mx-auto mt-1"></motion.div>}
                                   </div>
                               ))}
                          </div>
                     </div>
                </div>`;
        case 'banking-portals':
            return `
                <div className="w-full h-[350px] bg-[#061B2E] rounded-3xl p-6 shadow-[0_20px_50px_rgba(6,27,46,0.5)] border border-[#08243A] overflow-hidden flex flex-col relative">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#08BFE8]/10 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="flex justify-between items-center mb-8 bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                          <div className="flex flex-col gap-2">
                               <div className="text-white/50 text-xs font-bold tracking-widest uppercase">Available Balance</div>
                               <div className="text-white text-3xl font-black tracking-tight">$42,500.00</div>
                          </div>
                          <div className="w-12 h-12 rounded-full border-2 border-[#08BFE8]/50 flex items-center justify-center">
                               <div className="w-8 h-8 rounded-full bg-[#08BFE8]/20"></div>
                          </div>
                     </div>
                     <div className="flex-1 grid grid-cols-2 gap-4">
                          <motion.div animate={{y:[0,-5,0]}} transition={{duration:3, repeat:Infinity}} className="bg-gradient-to-br from-[#08243A] to-[#061B2E] rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                               <div className="w-full h-1 bg-white/10 rounded-full mt-auto mb-2"><div className="w-[60%] h-full bg-[#08BFE8] rounded-full shadow-[0_0_10px_#08BFE8]"></div></div>
                               <div className="text-white/60 text-xs">Monthly Limit</div>
                          </motion.div>
                          <div className="bg-white/5 rounded-2xl border border-white/5 p-4 flex items-center justify-center flex-col gap-2 relative overflow-hidden">
                               <motion.div animate={{rotate:360}} transition={{duration:10, ease:"linear", repeat:Infinity}} className="w-16 h-16 border-4 border-dashed border-[#08BFE8]/30 rounded-full"></motion.div>
                               <div className="absolute inset-0 flex items-center justify-center text-white/50 text-[10px]">SYNC</div>
                          </div>
                     </div>
                </div>`;
        case 'payments':
            return `
                <div className="w-full h-[350px] bg-[#F7FAFC] rounded-3xl p-6 shadow-xl border border-gray-200 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#08BFE8]/5 to-transparent"></div>
                     <motion.div whileHover={{ scale: 1.05 }} className="w-64 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center px-4 gap-4 z-10">
                          <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
                          <div className="flex flex-col gap-1"><div className="h-2 w-16 bg-gray-200 rounded-full"></div><div className="h-1.5 w-10 bg-gray-100 rounded-full"></div></div>
                          <div className="ml-auto font-bold text-gray-800">$1,250</div>
                     </motion.div>
                     <motion.div animate={{ height: ['20px', '40px', '20px'] }} transition={{ duration: 2, repeat: Infinity }} className="w-[2px] bg-dashed border-l-2 border-dashed border-[#08BFE8]/30 z-0"></motion.div>
                     <div className="w-48 h-12 bg-[#061B2E] rounded-xl shadow-xl flex items-center justify-center z-10 text-white font-bold tracking-widest text-sm shadow-[#061B2E]/20">
                          PAYMENT GATEWAY
                     </div>
                </div>`;
        case 'trading':
            return `
                <div className="w-full h-[350px] bg-[#061B2E] rounded-3xl p-6 shadow-2xl border border-gray-800 relative overflow-hidden flex flex-col">
                     <div className="flex gap-4 mb-6 relative z-10 border-b border-gray-800 pb-4">
                          <div className="flex flex-col"><span className="text-white font-bold">BTC/USD</span><span className="text-green-400 text-xs">+4.25%</span></div>
                          <div className="flex flex-col ml-auto text-right"><span className="text-white font-bold">64,230.00</span><span className="text-gray-400 text-xs">Vol: 1.2B</span></div>
                     </div>
                     <div className="flex-1 relative flex items-end gap-1">
                          {Array.from({length: 20}).map((_, i) => {
                              const height = 20 + Math.random() * 80;
                              const isGreen = Math.random() > 0.4;
                              return (
                                  <motion.div 
                                      key={i}
                                      animate={{ height: [height+'%', (height + (Math.random()*20 - 10))+'%', height+'%'] }} 
                                      transition={{ duration: 3 + Math.random()*2, repeat: Infinity }} 
                                      className={"flex-1 rounded-t-sm " + (isGreen ? 'bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.4)]')}
                                  />
                              )
                          })}
                     </div>
                </div>`;
        case 'dashboards':
            return `
                <div className="w-full h-[350px] bg-white rounded-3xl p-5 shadow-2xl border border-gray-100 flex flex-col gap-4 overflow-hidden relative">
                     <div className="flex gap-4 h-[40%]">
                          <motion.div whileHover={{ y: -5 }} className="w-1/2 bg-gray-50 rounded-2xl p-4 flex flex-col justify-between border border-gray-100">
                               <div className="w-8 h-8 rounded-full bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center">◱</div>
                               <div><div className="text-2xl font-black text-gray-800">45k</div><div className="text-xs text-gray-400">Total Users</div></div>
                          </motion.div>
                          <motion.div whileHover={{ y: -5 }} className="w-1/2 bg-[#08BFE8] rounded-2xl p-4 flex flex-col justify-between text-white shadow-lg shadow-[#08BFE8]/20">
                               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">↗</div>
                               <div><div className="text-2xl font-black">+124%</div><div className="text-xs text-white/80">Growth Rate</div></div>
                          </motion.div>
                     </div>
                     <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 p-4 relative overflow-hidden flex items-end">
                         <motion.svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full opacity-20" animate={{ x: [-10, 0, -10] }} transition={{ duration: 4, repeat: Infinity }}>
                             <path d="M0,20 Q10,0 20,20 T40,20 T60,20 T80,20 T100,20 L100,20 L0,20 Z" fill="#08BFE8" />
                         </motion.svg>
                     </div>
                </div>`;
        case 'marketplaces':
            return `
                <div className="w-full h-[350px] bg-gray-50 rounded-3xl p-6 border border-gray-200 overflow-hidden relative">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                         {[1,2,3,4,5,6].map((item, i) => (
                             <motion.div 
                                 key={i} 
                                 whileHover={{ scale: 1.05 }} 
                                 className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col relative overflow-hidden"
                             >
                                 <div className="w-full h-[60%] bg-gray-50 rounded-lg mb-2"></div>
                                 <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-1"></div>
                                 <div className="h-2 w-1/2 bg-[#08BFE8]/30 rounded-full mt-auto"></div>
                             </motion.div>
                         ))}
                    </div>
                </div>`;
        case 'b2b-portals':
            return `
                <div className="w-full h-[350px] bg-[#061B2E] rounded-3xl p-0 flex shadow-2xl overflow-hidden border border-[#08BFE8]/20">
                     <div className="w-16 md:w-20 bg-white/5 border-r border-white/10 flex flex-col items-center py-6 gap-6">
                         <div className="w-8 h-8 rounded-md bg-[#08BFE8] flex items-center justify-center text-white mb-4">B2B</div>
                         <div className="w-6 h-6 rounded bg-white/10"></div>
                         <div className="w-6 h-6 rounded bg-white/10"></div>
                         <div className="w-6 h-6 rounded bg-white/10"></div>
                     </div>
                     <div className="flex-1 p-6 flex flex-col gap-4">
                          <div className="w-1/2 h-4 bg-white/10 rounded-full"></div>
                          <div className="w-full flex-1 bg-white/5 rounded-xl border border-white/10 p-4">
                              <table className="w-full h-full text-left table-fixed text-white/50 text-xs">
                                  <thead><tr className="border-b border-white/10"><th className="pb-2">ID</th><th className="pb-2">Company</th><th className="pb-2">Tier</th><th className="pb-2">Status</th></tr></thead>
                                  <tbody>
                                      {[1,2,3].map(i => (
                                          <tr key={i} className="border-b border-white/5">
                                              <td className="py-3 text-white">#00{i}</td>
                                              <td className="py-3"><div className="h-2 w-16 bg-white/20 rounded-full"></div></td>
                                              <td className="py-3 text-[#08BFE8]">Enterprise</td>
                                              <td className="py-3"><div className="w-2 h-2 rounded-full bg-green-400"></div></td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                     </div>
                </div>`;
        case 'inventory':
            return `
                <div className="w-full h-[350px] bg-white rounded-3xl shadow-xl flex flex-col border border-gray-200 overflow-hidden">
                     <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50">
                          <div className="text-gray-800 font-bold">WAREHOUSE SYNC</div>
                          <div className="w-16 h-6 bg-green-100 text-green-600 rounded-full text-[10px] font-bold flex items-center justify-center shadow-inner">LIVE</div>
                     </div>
                     <div className="flex-1 p-6 flex items-center gap-4 relative">
                          <motion.div animate={{y:[-10,10,-10]}} transition={{duration:4, repeat:Infinity}} className="w-1/3 h-[80%] bg-[#061B2E] rounded-2xl shadow-lg border border-gray-800 p-4 relative z-10 flex flex-col justify-end">
                               <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div><div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                          </motion.div>
                          <div className="flex-1 h-[40%] bg-[#EAF8FC] rounded-r-2xl border border-[#08BFE8]/20 flex items-center pl-8 relative -ml-4 z-0">
                               <motion.div animate={{x:[0, 20, 0]}} transition={{duration:3, repeat:Infinity}} className="flex gap-2">
                                  <div className="w-2 h-2 rounded-full bg-[#08BFE8]"></div><div className="w-2 h-2 rounded-full bg-[#08BFE8]/50"></div><div className="w-2 h-2 rounded-full bg-[#08BFE8]/20"></div>
                               </motion.div>
                          </div>
                     </div>
                </div>`;
        case 'pos-integration':
            return `
                <div className="w-full h-[350px] bg-[#FAFAFA] rounded-3xl p-6 shadow-xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div animate={{rotate:360}} transition={{duration:20, ease:"linear", repeat:Infinity}} className="w-[120%] h-[120%] border-[40px] border-dashed border-[#08BFE8]/5 rounded-full"></motion.div>
                     </div>
                     <div className="w-24 h-24 bg-white shadow-2xl rounded-[2rem] border border-gray-100 z-10 absolute left-[15%] flex items-center justify-center rotate-[-10deg]">
                          <div className="text-gray-400 font-bold text-sm">POS</div>
                     </div>
                     <motion.div animate={{width: ['0%', '40%', '0%'], left:['20%', '30%', '60%']}} transition={{duration:4, repeat:Infinity}} className="absolute h-1 bg-gradient-to-r from-[#08BFE8] to-transparent z-0 opacity-50"></motion.div>
                     <div className="w-32 h-32 bg-[#061B2E] shadow-[0_0_30px_rgba(8,191,232,0.3)] rounded-[2rem] border border-[#08BFE8]/50 z-20 flex items-center justify-center right-[15%] absolute rotate-[5deg]">
                          <div className="text-white font-bold text-sm">ECOMMERCE</div>
                     </div>
                </div>`;
        case 'architecture':
            return `
                <div className="w-full h-[350px] bg-[#061B2E] rounded-3xl p-6 shadow-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,191,232,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                     <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[80%] h-[80%] z-10">
                          <motion.div animate={{scale:[1,1.1,1]}} transition={{duration:3, repeat:Infinity}} className="col-start-2 row-start-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col justify-center items-center"><div className="w-4 h-4 bg-white/80 rounded-full"></div></motion.div>
                          <div className="col-start-1 row-start-2 bg-[#08BFE8]/20 backdrop-blur-md rounded-xl border border-[#08BFE8]/50 flex flex-col justify-center items-center"><div className="w-4 h-4 bg-[#08BFE8] rounded-md"></div></div>
                          <div className="col-start-2 row-start-2 bg-[#159ED9] rounded-xl flex items-center justify-center shadow-[0_0_20px_#159ED9] text-white font-bold text-xs opacity-90">API</div>
                          <div className="col-start-3 row-start-2 bg-[#08BFE8]/20 backdrop-blur-md rounded-xl border border-[#08BFE8]/50 flex flex-col justify-center items-center"><div className="w-4 h-4 bg-[#08BFE8] rounded-md"></div></div>
                          <motion.div animate={{scale:[1,1.1,1]}} transition={{duration:3, delay:1.5, repeat:Infinity}} className="col-start-2 row-start-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col justify-center items-center"><div className="w-6 h-3 bg-white/80 rounded-full"></div></motion.div>
                     </div>
                     <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none"><line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#08BFE8" strokeWidth="2" strokeDasharray="5,5"/><line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#08BFE8" strokeWidth="2" strokeDasharray="5,5"/></svg>
                </div>`;
        case 'multi-tenant':
            return `
                <div className="w-full h-[350px] bg-white rounded-3xl p-6 shadow-xl border border-gray-200 flex flex-col gap-4 overflow-hidden relative">
                    <div className="w-full h-1/3 bg-[#FAFAFA] rounded-2xl border-2 border-dashed border-[#08BFE8]/30 flex items-center px-6 relative overflow-hidden">
                        <div className="absolute left-0 top-0 w-2 h-full bg-[#08BFE8]"></div>
                        <div className="font-bold text-gray-700">Tenant A (Enterprise)</div>
                        <div className="ml-auto w-12 h-6 rounded-full bg-[#08BFE8]/10"></div>
                    </div>
                    <div className="w-full h-1/3 bg-[#FAFAFA] rounded-2xl border-2 border-dashed border-gray-200 flex items-center px-6 relative overflow-hidden scale-95 opacity-60">
                        <div className="absolute left-0 top-0 w-2 h-full bg-gray-300"></div>
                        <div className="font-bold text-gray-400">Tenant B (Starter)</div>
                    </div>
                    <div className="w-full h-1/3 bg-[#FAFAFA] rounded-2xl border-2 border-dashed border-gray-200 flex items-center px-6 relative overflow-hidden scale-90 opacity-40">
                        <div className="absolute left-0 top-0 w-2 h-full bg-gray-300"></div>
                        <div className="font-bold text-gray-400">Tenant C (Pro)</div>
                    </div>
                </div>`;
        case 'billing':
            return `
                <div className="w-full h-[350px] bg-[#F7FAFC] rounded-3xl p-6 border border-gray-200 shadow-xl overflow-hidden flex flex-col">
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
                         <div className="w-1/3 h-4 bg-gray-100 rounded-full mb-6"></div>
                         <div className="space-y-4 flex-1">
                             <div className="flex justify-between items-center pb-4 border-b border-gray-50"><div className="w-1/2 h-3 bg-gray-100 rounded-full"></div><div className="w-1/6 h-3 bg-gray-200 rounded-full"></div></div>
                             <div className="flex justify-between items-center pb-4 border-b border-gray-50"><div className="w-1/3 h-3 bg-gray-100 rounded-full"></div><div className="w-1/6 h-3 bg-gray-200 rounded-full"></div></div>
                             <div className="flex justify-between items-center"><div className="w-1/4 h-3 bg-[#08BFE8]/20 rounded-full"></div><div className="w-1/5 h-4 bg-[#08BFE8] rounded-full"></div></div>
                         </div>
                    </div>
                    <motion.div animate={{y:[20, 0, 20]}} transition={{duration:5, repeat:Infinity}} className="w-3/4 mx-auto h-8 bg-green-500 rounded-b-2xl shadow-lg -mt-4 z-10 flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest text-shadow">PAID SECURELY</motion.div>
                </div>`;
        case 'analytics':
            return `
                <div className="w-full h-[350px] bg-[#061B2E] rounded-3xl p-6 shadow-2xl overflow-hidden border border-[#08BFE8]/20 flex flex-col justify-end relative">
                     <div className="absolute top-6 left-6 text-[#08BFE8] font-bold text-sm tracking-widest uppercase">Telemetry</div>
                     <div className="absolute right-6 top-6 w-32 h-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"></div>
                     <svg className="w-full h-[60%] overflow-visible">
                          <motion.path 
                              initial={{ pathLength: 0 }} 
                              animate={{ pathLength: 1 }} 
                              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} 
                              d="M 0 100 Q 50 20 100 80 T 200 40 T 300 90 T 400 20" 
                              fill="none" 
                              stroke="#08BFE8" 
                              strokeWidth="4" 
                          />
                          <motion.path 
                              initial={{ opacity: 0.3 }} 
                              animate={{ opacity: 0.8 }} 
                              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                              d="M 0 120 Q 50 40 100 100 T 200 60 T 300 110 T 400 40" 
                              fill="none" 
                              stroke="#159ED9" 
                              strokeWidth="2" 
                              strokeDasharray="4,4"
                          />
                     </svg>
                </div>`;
        default:
            return `<div className="w-full h-full bg-gray-100 rounded-3xl"></div>`;
    }
}

function generateComponent(def) {
    const visualJSX = generateVisual(def.id);
    const heroBg = def.folder === 'healthcare' || def.folder === 'ecommerce' ? 'bg-[#FAFAFA]' : 'bg-[#FAFAFA]';

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
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">${def.eyebrow}</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-12 lg:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] gap-10 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            ${def.eyebrow}
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(32px,4.5vw,56px)] font-heading font-black text-[#061B2E] leading-[1.1] text-balance">
                            ${def.h1}
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed text-pretty max-w-2xl">
                            ${def.p}
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="pt-2">
                            <Link to="/contact" className="inline-flex bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold items-center hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/20">
                                Discuss Your Project <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full overflow-hidden lg:overflow-visible flex items-center justify-center lg:justify-end z-0">
                        ${visualJSX}
                    </div>
                </section>

                {/* WHY IT MATTERS / CHALLENGES */}
                <section className="bg-[#061B2E] text-white py-16 lg:py-24 px-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto relative z-10">
                        <div className="max-w-3xl mb-12">
                            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-black mb-6 leading-tight">Solving complex industry roadblocks.</h2>
                            <p className="text-[#7F94A8] text-lg leading-relaxed text-pretty">
                                Standing out requires moving past legacy constraints. We remove technical debt and build modern systems designed entirely for scale and user satisfaction.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            ${def.features.map(f =>
        '<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full min-w-0">' +
        '<CheckCircle2 size={24} className="text-[#08BFE8] mb-4 shrink-0" />' +
        '<h3 className="font-bold text-lg mb-2 text-white">' + f + '</h3>' +
        '<p className="text-[#7F94A8] text-sm leading-relaxed">Essential architecture engineered for optimal performance and scale.</p>' +
        '</div>'
    ).join('\n')}
                        </div>
                    </div>
                </section>

                {/* EXPERTISE & CAPABILITIES */}
                <section className="py-16 lg:py-24 px-5 max-w-[1320px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">${def.featuresTitle}</h2>
                        <p className="text-[#7F94A8] text-lg text-pretty">We deliver end-to-end digital excellence merging strategic foresight with flawless engineering.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 lg:col-span-2 flex flex-col min-w-0">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Strategic Architecture</h3>
                           <p className="text-[#7F94A8] leading-relaxed mb-6 text-pretty flex-1">Every successful deployment starts with an airtight architectural blueprint. We map out data flows, user journeys, and component integration strategies before writing a single line of code.</p>
                           <ul className="space-y-3 font-medium text-[#061B2E]">
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Scalable cloud infrastructure</li>
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Bulletproof security protocols</li>
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Seamless API integrations</li>
                           </ul>
                        </div>
                        <div className="bg-[#EAF8FC] rounded-3xl p-8 lg:p-10 shadow-md border border-[#08BFE8]/20 flex flex-col justify-center min-w-0">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Why Partner With Us?</h3>
                           <p className="text-[#061B2E]/80 leading-relaxed font-medium text-pretty">We deliver software that actually impacts your bottom line, built by senior engineers who act as an extension of your own team.</p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-16 lg:py-20 px-5 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.03] bg-[size:24px_24px]"></div>
                     <div className="max-w-2xl mx-auto relative z-10 text-white">
                         <h2 className="text-[clamp(28px,4vw,48px)] font-heading font-black mb-8 leading-tight text-balance">Ready to elevate your digital presence?</h2>
                         <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
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
