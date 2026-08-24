const fs = require('fs');
const path = require('path');

const components = [
    // Same components logic as before since the components are safe and modular.
];

const pages = [
    // Web Development
    { route: 'web-development/frontend-development', component: 'FrontendDevelopment', dir: 'web-development', title: 'React, Vue, and Lightning Fast UI.', e: 'Frontend Development', desc: 'Translating immaculate designs into pixel-perfect resilient codeframes scaling beautifully globally.', t: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/web-development', pName: 'Web Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'web-development/backend-development', component: 'BackendDevelopment', dir: 'web-development', title: 'Robust Cloud Infrastructure.', e: 'Backend Development', desc: 'Bulletproof Node.js, Python, and Go microservices orchestrating immense data flow effortlessly.', t: { accent: 'text-emerald-500', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' }, parentRoute: '/services/web-development', pName: 'Web Development', order: ['Hero', 'Overview', 'Process', 'Technology', 'Related', 'CTA'] },
    { route: 'web-development/cms-development', component: 'CMSDevelopment', dir: 'web-development', title: 'Total Editorial Control.', e: 'CMS Development', desc: 'Headless Sanity, Contentful, and custom WordPress engines granting marketing teams absolute autonomy.', t: { accent: 'text-purple-500', bg: 'bg-purple-500', softBg: 'bg-purple-50' }, parentRoute: '/services/web-development', pName: 'Web Development', order: ['Hero', 'Overview', 'Capabilities', 'Process', 'Related', 'CTA'] },
    { route: 'web-development/api-integration', component: 'APIIntegration', dir: 'web-development', title: 'Connecting Distinct Business Logic.', e: 'API Integration', desc: 'Secure middleware mapping disjointed platforms into a singular transparent data layer.', t: { accent: 'text-pink-500', bg: 'bg-pink-500', softBg: 'bg-pink-50' }, parentRoute: '/services/web-development', pName: 'Web Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'web-development/custom-web-applications', component: 'CustomWebApplications', dir: 'web-development', title: 'Enterprise Tooling Made Distinct.', e: 'Custom Web Applications', desc: 'Sophisticated internal dashboards resolving fundamental operational bottlenecks entirely.', t: { accent: 'text-orange-500', bg: 'bg-orange-500', softBg: 'bg-orange-50' }, parentRoute: '/services/web-development', pName: 'Web Development', order: ['Hero', 'Overview', 'Process', 'Capabilities', 'Related', 'CTA'] },

    // Mobile App Development
    { route: 'mobile-app-development/ios-development', component: 'IOSDevelopment', dir: 'mobile-app-development', title: 'Fluid UI Flowing on Apple Silicon.', e: 'iOS Development', desc: 'Strict human interface guideline adherence producing App Store dominating premium native apps.', t: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/mobile-app-development', pName: 'Mobile App Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'mobile-app-development/android-development', component: 'AndroidDevelopment', dir: 'mobile-app-development', title: 'Universal Reach, Perfectly Adapted.', e: 'Android Development', desc: 'Kotlin applications navigating mass fragmentation to deliver singular cohesive experiences.', t: { accent: 'text-emerald-500', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' }, parentRoute: '/services/mobile-app-development', pName: 'Mobile App Development', order: ['Hero', 'Overview', 'Process', 'Technology', 'Related', 'CTA'] },
    { route: 'mobile-app-development/flutter-development', component: 'FlutterDevelopment', dir: 'mobile-app-development', title: '60fps Graphics Anywhere.', e: 'Flutter', desc: 'Google-backed dart infrastructures painting lightning fast canvases universally without compromise.', t: { accent: 'text-blue-600', bg: 'bg-blue-600', softBg: 'bg-blue-50' }, parentRoute: '/services/mobile-app-development', pName: 'Mobile App Development', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },
    { route: 'mobile-app-development/react-native-development', component: 'ReactNativeDevelopment', dir: 'mobile-app-development', title: 'Web Talent Bridged to Native Device.', e: 'React Native', desc: 'Deploying unified React components mapping gracefully down to rigid iOS and Android modules.', t: { accent: 'text-purple-500', bg: 'bg-purple-500', softBg: 'bg-purple-50' }, parentRoute: '/services/mobile-app-development', pName: 'Mobile App Development', order: ['Hero', 'Overview', 'Process', 'Capabilities', 'Related', 'CTA'] },
    { route: 'mobile-app-development/cross-platform-apps', component: 'CrossPlatformApps', dir: 'mobile-app-development', title: 'Unifying Distinct Operations.', e: 'Cross-Platform Apps', desc: 'Simultaneous multi-store deployments slicing production time inherently without quality drop.', t: { accent: 'text-orange-500', bg: 'bg-orange-500', softBg: 'bg-orange-50' }, parentRoute: '/services/mobile-app-development', pName: 'Mobile App Development', order: ['Hero', 'Overview', 'Technology', 'Capabilities', 'Related', 'CTA'] },

    // UI/UX Design
    { route: 'ui-ux-design/ux-research', component: 'UXResearch', dir: 'ui-ux-design', title: 'Understand People Before Designing for Them.', e: 'UX Research', desc: 'Deep qualitative and quantitative behavioral research powering human-centered product development.', t: { accent: 'text-purple-600', bg: 'bg-purple-500', softBg: 'bg-purple-50' }, parentRoute: '/services/ui-ux-design', pName: 'UI/UX Design', order: ['Hero', 'Overview', 'Process', 'Technology', 'Related', 'CTA'] },
    { route: 'ui-ux-design/wireframing', component: 'Wireframing', dir: 'ui-ux-design', title: 'Turn Ideas Into Clear Product Structures.', e: 'Wireframing', desc: 'Low-fidelity architectural blueprints isolating structural logic from surface visual aesthetics.', t: { accent: 'text-gray-600', bg: 'bg-gray-400', softBg: 'bg-gray-50' }, parentRoute: '/services/ui-ux-design', pName: 'UI/UX Design', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },
    { route: 'ui-ux-design/prototyping', component: 'Prototyping', dir: 'ui-ux-design', title: 'Experience the Product Before It is Built.', e: 'Prototyping', desc: 'Lightning-fast interactive models validating complex user journeys instantaneously.', t: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/ui-ux-design', pName: 'UI/UX Design', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'ui-ux-design/ui-design', component: 'UIDesign', dir: 'ui-ux-design', title: 'Interfaces With Purpose and Personality.', e: 'UI Design', desc: 'High-fidelity, emotionally resonant interfaces balancing massive conversion with profound beauty.', t: { accent: 'text-pink-500', bg: 'bg-pink-400', softBg: 'bg-pink-50' }, parentRoute: '/services/ui-ux-design', pName: 'UI/UX Design', order: ['Hero', 'Overview', 'Process', 'Capabilities', 'Related', 'CTA'] },
    { route: 'ui-ux-design/design-systems', component: 'DesignSystems', dir: 'ui-ux-design', title: 'Consistency at Every Digital Touchpoint.', e: 'Design Systems', desc: 'Scalable React-ready tokenized component libraries ensuring infinite consistency for engineering teams.', t: { accent: 'text-emerald-500', bg: 'bg-emerald-400', softBg: 'bg-emerald-50' }, parentRoute: '/services/ui-ux-design', pName: 'UI/UX Design', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },

    // Ecommerce
    { route: 'ecommerce-development/shopify', component: 'Shopify', dir: 'ecommerce-development', title: 'Shopify Stores Designed to Sell.', e: 'Shopify', desc: 'Custom headless Shopify architectures maximizing absolute theme versatility and lightning checkouts.', t: { accent: 'text-emerald-600', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' }, parentRoute: '/services/ecommerce-development', pName: 'Ecommerce Development', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },
    { route: 'ecommerce-development/woocommerce', component: 'WooCommerce', dir: 'ecommerce-development', title: 'Flexible Ecommerce on WordPress.', e: 'WooCommerce', desc: 'Deeply customized open-source Woo commerce experiences granting complete data ownership and limitless CMS capabilities.', t: { accent: 'text-purple-600', bg: 'bg-purple-500', softBg: 'bg-purple-50' }, parentRoute: '/services/ecommerce-development', pName: 'Ecommerce Development', order: ['Hero', 'Overview', 'Technology', 'Process', 'Related', 'CTA'] },
    { route: 'ecommerce-development/custom-ecommerce', component: 'CustomEcommerce', dir: 'ecommerce-development', title: 'Ecommerce Without Platform Limitations.', e: 'Custom Ecommerce', desc: 'Next.js bespoke storefronts engineered from scratch for massive unique catalog demands.', t: { accent: 'text-orange-500', bg: 'bg-orange-400', softBg: 'bg-orange-50' }, parentRoute: '/services/ecommerce-development', pName: 'Ecommerce Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'ecommerce-development/payment-integration', component: 'PaymentIntegration', dir: 'ecommerce-development', title: 'Checkout Experiences Built for Trust.', e: 'Payment Integration', desc: 'Secure, multi-gateway integration ensuring absolute PCI compliance and seamless subscription recurring billing.', t: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/ecommerce-development', pName: 'Ecommerce Development', order: ['Hero', 'Overview', 'Process', 'Related', 'CTA'] },
    { route: 'ecommerce-development/marketplace-development', component: 'MarketplaceDev', dir: 'ecommerce-development', title: 'Digital Marketplaces Built for Multiple Sides.', e: 'Marketplace Development', desc: 'Multi-vendor B2B or B2C platforms orchestrating extreme complexity securely and effortlessly.', t: { accent: 'text-pink-600', bg: 'bg-pink-500', softBg: 'bg-pink-50' }, parentRoute: '/services/ecommerce-development', pName: 'Ecommerce Development', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },

    // Software Development
    { route: 'software-development/crm', component: 'CRM', dir: 'software-development', title: 'Customer Relationships, Better Organized.', e: 'CRM', desc: 'Bespoke pipelines tailored to exactly how your specific sales organization actually operates natively.', t: { accent: 'text-indigo-600', bg: 'bg-indigo-500', softBg: 'bg-indigo-50' }, parentRoute: '/services/software-development', pName: 'Software Development', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },
    { route: 'software-development/erp', component: 'ERP', dir: 'software-development', title: 'Connect Your Business From One Place.', e: 'ERP', desc: 'Total resource planning software merging finance, inventory, HR, and daily operations onto a single dashboard.', t: { accent: 'text-yellow-600', bg: 'bg-yellow-500', softBg: 'bg-yellow-50' }, parentRoute: '/services/software-development', pName: 'Software Development', order: ['Hero', 'Overview', 'Technology', 'Process', 'Related', 'CTA'] },
    { route: 'software-development/saas', component: 'SaaS', dir: 'software-development', title: 'SaaS Products Built to Scale.', e: 'SaaS', desc: 'Multi-tenant cloud architectures constructed natively for massive subscription billing scaling.', t: { accent: 'text-blue-500', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/software-development', pName: 'Software Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },
    { route: 'software-development/business-automation', component: 'BusinessAutomation', dir: 'software-development', title: 'Replace Repetitive Work With Intelligent Workflows.', e: 'Business Automation', desc: 'Connecting distinct internal platforms programmatically to remove human bottlenecks entirely in realtime.', t: { accent: 'text-pink-600', bg: 'bg-pink-500', softBg: 'bg-pink-50' }, parentRoute: '/services/software-development', pName: 'Software Development', order: ['Hero', 'Overview', 'Process', 'Related', 'CTA'] },
    { route: 'software-development/api-development', component: 'APIDevelopment', dir: 'software-development', title: 'The Infrastructure Behind Connected Products.', e: 'API Development', desc: 'Bulletproof RESTful and GraphQL backend infrastructures handling incredible concurrency flawlessly.', t: { accent: 'text-emerald-500', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' }, parentRoute: '/services/software-development', pName: 'Software Development', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] },

    // Digital Marketing
    { route: 'digital-marketing/seo', component: 'SEO', dir: 'digital-marketing', title: 'Get Found by the People Looking for You.', e: 'SEO', desc: 'Extreme technical and semantic on-page optimizations dictating absolute dominance in search landscapes.', t: { accent: 'text-emerald-600', bg: 'bg-emerald-500', softBg: 'bg-emerald-50' }, parentRoute: '/services/digital-marketing', pName: 'Digital Marketing', order: ['Hero', 'Overview', 'Capabilities', 'Process', 'Related', 'CTA'] },
    { route: 'digital-marketing/ppc', component: 'PPC', dir: 'digital-marketing', title: 'Turn Paid Clicks Into Measurable Growth.', e: 'PPC', desc: 'Viciously optimized Google and Meta media buys protecting Return On Ad Spend at all costs natively.', t: { accent: 'text-blue-600', bg: 'bg-blue-500', softBg: 'bg-blue-50' }, parentRoute: '/services/digital-marketing', pName: 'Digital Marketing', order: ['Hero', 'Overview', 'Process', 'Related', 'CTA'] },
    { route: 'digital-marketing/social-media', component: 'SocialMedia', dir: 'digital-marketing', title: 'Build Brands People Want to Follow.', e: 'Social Media', desc: 'Engaging content algorithms and community architecture mapping social identity directly to pipeline revenue.', t: { accent: 'text-pink-500', bg: 'bg-pink-500', softBg: 'bg-pink-50' }, parentRoute: '/services/digital-marketing', pName: 'Digital Marketing', order: ['Hero', 'Overview', 'Capabilities', 'Related', 'CTA'] },
    { route: 'digital-marketing/content-marketing', component: 'ContentMarketing', dir: 'digital-marketing', title: 'Content That Earns Attention and Trust.', e: 'Content Marketing', desc: 'Editorial velocity combined with intent mapping, generating extreme authority and inbound lead captures.', t: { accent: 'text-orange-500', bg: 'bg-orange-500', softBg: 'bg-orange-50' }, parentRoute: '/services/digital-marketing', pName: 'Digital Marketing', order: ['Hero', 'Overview', 'Process', 'Related', 'CTA'] },
    { route: 'digital-marketing/performance-marketing', component: 'PerformanceMarketing', dir: 'digital-marketing', title: 'Every Campaign Should Have a Number Behind It.', e: 'Performance Marketing', desc: 'Complete funnel attribution from first-touch click all the way down to closed Salesforce revenue tracking.', t: { accent: 'text-purple-600', bg: 'bg-purple-500', softBg: 'bg-purple-50' }, parentRoute: '/services/digital-marketing', pName: 'Digital Marketing', order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Related', 'CTA'] }
];

const safeWrite = (filePath, content) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
};

pages.forEach(p => {
    const lines = [];
    lines.push("import React from 'react';");
    lines.push("import useSEO from '../../../hooks/useSEO';");
    lines.push("import PageTransition from '../../../components/common/PageTransition';");
    if (p.order.includes('Hero')) lines.push("import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';");
    if (p.order.includes('Overview')) lines.push("import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';");
    if (p.order.includes('Capabilities')) lines.push("import { SubServiceCapabilities } from '../../../components/services/subservices/SubServiceCapabilities';");
    if (p.order.includes('Technology')) lines.push("import { SubServiceTechnology } from '../../../components/services/subservices/SubServiceTechnology';");
    if (p.order.includes('Process')) lines.push("import { SubServiceProcess } from '../../../components/services/subservices/SubServiceProcess';");
    if (p.order.includes('Related')) lines.push("import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';");
    if (p.order.includes('CTA')) lines.push("import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';");
    lines.push("import { Code, Monitor, Rocket } from 'lucide-react';\n");

    lines.push(`const ${p.component} = () => {`);
    lines.push(`    useSEO({ title: "${p.e} Services | The Digital Connect", description: "${p.desc}" });`);
    lines.push(`    const theme = { accent: "${p.t.accent}", bg: "${p.t.bg}", softBg: "${p.t.softBg}" };\n`);
    lines.push(`    return (\n        <PageTransition>\n            <div className=\"w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden\">`);

    if (p.order.includes('Hero')) {
        lines.push(`                <SubServiceHero parentTitle="${p.pName}" parentRoute="${p.parentRoute}" eyebrow="${p.e}" title="${p.title}" description="${p.desc}" theme={theme} />`);
    }
    if (p.order.includes('Overview')) {
        lines.push(`                <SubServiceOverview title="Engineered for performance." content="We do not rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />`);
    }
    if (p.order.includes('Capabilities')) {
        lines.push(`                <SubServiceCapabilities theme={theme} capabilities={[{ title: "Core Architecture", desc: "Constructing the primary robust systems bridging frontend aesthetics to logic.", icon: <Code /> },{ title: "Performance Scaling", desc: "Advanced caching schemas enabling lightning fast interactions globally.", icon: <Rocket /> },{ title: "User Interfaces", desc: "Human centered aesthetics dropping friction entirely.", icon: <Monitor /> }]} />`);
    }
    if (p.order.includes('Technology')) {
        lines.push(`                <SubServiceTechnology theme={theme} technologies={['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Figma', 'PostgreSQL', 'Tailwind CSS']} />`);
    }
    if (p.order.includes('Process')) {
        lines.push(`                <SubServiceProcess theme={theme} process={[{ title: 'Evaluate', desc: 'Understanding distinct workflows and limits.' },{ title: 'Architect', desc: 'Drafting robust foundational diagrams safely.' },{ title: 'Engineer', desc: 'Creating immaculate, scalable production setups.' },{ title: 'Deploy', desc: 'Zero downtime transition into immediate market utility.' }]} />`);
    }
    if (p.order.includes('Related')) {
        lines.push(`                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />`);
    }
    if (p.order.includes('CTA')) {
        lines.push(`                <SubServiceCTA theme={theme} />`);
    }

    lines.push(`            </div>\n        </PageTransition>\n    );\n};\n\nexport default ${p.component};`);

    safeWrite(path.join(__dirname, 'src/pages/services', p.dir, p.component + '.jsx'), lines.join('\n'));
});

// Update the AppRoutes.jsx file explicitly overriding everything
let appRoutesContent = `
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import MobileMenu from '../components/layout/MobileMenu';
import Footer from '../components/layout/Footer';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import CaseStudies from '../pages/CaseStudies';
import Process from '../pages/Process';
import Technologies from '../pages/Technologies';
import Careers from '../pages/Careers';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

// Service Pages
import WebDevelopment from '../pages/services/WebDevelopment';
import MobileDevelopment from '../pages/services/MobileDevelopment';
import UIUXDesign from '../pages/services/UIUXDesign';
import Ecommerce from '../pages/services/Ecommerce';
import SoftwareDevelopment from '../pages/services/SoftwareDevelopment';
import DigitalMarketing from '../pages/services/DigitalMarketing';

// Industry Pages
import Healthcare from '../pages/industries/Healthcare';
import Fintech from '../pages/industries/Fintech';
import EcommerceIndustry from '../pages/industries/Ecommerce';
import Education from '../pages/industries/Education';
import RealEstate from '../pages/industries/RealEstate';
import Travel from '../pages/industries/Travel';

// Detail Pages
import ProjectDetails from '../pages/projects/ProjectDetails';
import BlogTemplate from '../components/blog/BlogTemplate';
import CaseStudyTemplate from '../components/caseStudies/CaseStudyTemplate';
import ScrollToTop from '../components/common/ScrollToTop';

${pages.map(p => `import ${p.component} from '../pages/services/${p.dir}/${p.component}';`).join('\n')}

const AppRoutes = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <ScrollToTop />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <main className="min-h-screen pt-[72px] relative z-[1]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
                    <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
                    <Route path="/services/ecommerce-development" element={<Ecommerce />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                    <Route path="/industries" element={<NotFound />} />
                    <Route path="/industries/healthcare" element={<Healthcare />} />
                    <Route path="/industries/fintech" element={<Fintech />} />
                    <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
                    <Route path="/industries/education" element={<Education />} />
                    <Route path="/industries/real-estate" element={<RealEstate />} />
                    <Route path="/industries/travel" element={<Travel />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:slug" element={<ProjectDetails />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogTemplate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<Terms />} />
                    
                    ${pages.map(p => `<Route path="/services/${p.route}" element={<${p.component} />} />`).join('\n                    ')}

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <div className="relative z-[1]">
                <Footer />
            </div>
        </>
    );
};

export default AppRoutes;
`;

fs.writeFileSync(path.join(__dirname, 'src/routes/AppRoutes.jsx'), appRoutesContent);
console.log("Successfully generated all subservice pages and components.");
