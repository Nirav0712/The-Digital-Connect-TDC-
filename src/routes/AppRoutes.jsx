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
import FrontendDevelopment from '../pages/services/sub/FrontendDevelopment';
import BackendDevelopment from '../pages/services/sub/BackendDevelopment';
import CMSDevelopment from '../pages/services/sub/CMSDevelopment';
import APIIntegration from '../pages/services/sub/APIIntegration';
import CustomWebApplications from '../pages/services/sub/CustomWebApplications';
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

import UXResearch from '../pages/services/uiux/UXResearch';
import Wireframing from '../pages/services/uiux/Wireframing';
import Prototyping from '../pages/services/uiux/Prototyping';
import UIDesign from '../pages/services/uiux/UIDesign';
import DesignSystems from '../pages/services/uiux/DesignSystems';
import Shopify from '../pages/services/ecommerce/Shopify';
import WooCommerce from '../pages/services/ecommerce/WooCommerce';
import CustomEcommerce from '../pages/services/ecommerce/CustomEcommerce';
import PaymentIntegration from '../pages/services/ecommerce/PaymentIntegration';
import MarketplaceDev from '../pages/services/ecommerce/MarketplaceDev';
import CRM from '../pages/services/software/CRM';
import ERP from '../pages/services/software/ERP';
import SaaS from '../pages/services/software/SaaS';
import BusinessAutomation from '../pages/services/software/BusinessAutomation';
import APIDevelopment from '../pages/services/software/APIDevelopment';
import SEO from '../pages/services/marketing/SEO';
import PPC from '../pages/services/marketing/PPC';
import SocialMedia from '../pages/services/marketing/SocialMedia';
import ContentMarketing from '../pages/services/marketing/ContentMarketing';
import PerformanceMarketing from '../pages/services/marketing/PerformanceMarketing';
import IOSDevelopment from '../pages/services/mobile/IOSDevelopment';
import AndroidDevelopment from '../pages/services/mobile/AndroidDevelopment';
import FlutterDev from '../pages/services/mobile/FlutterDev';
import ReactNativeDev from '../pages/services/mobile/ReactNativeDev';
import CrossPlatform from '../pages/services/mobile/CrossPlatform';


const AppRoutes = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <ScrollToTop />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* We apply a generic z-index context on main to ensure it defaults below the 1000 Header */}
            <main className="min-h-screen pt-[72px] relative z-[1]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/web-development/frontend-development" element={<FrontendDevelopment />} />
                    <Route path="/services/web-development/backend-development" element={<BackendDevelopment />} />
                    <Route path="/services/web-development/cms-development" element={<CMSDevelopment />} />
                    <Route path="/services/web-development/api-integration" element={<APIIntegration />} />
                    <Route path="/services/web-development/custom-web-applications" element={<CustomWebApplications />} />

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
                    <Route path="/services/ui-ux-design/ux-research" element={<UXResearch />} />
                    <Route path="/services/ui-ux-design/wireframing" element={<Wireframing />} />
                    <Route path="/services/ui-ux-design/prototyping" element={<Prototyping />} />
                    <Route path="/services/ui-ux-design/ui-design" element={<UIDesign />} />
                    <Route path="/services/ui-ux-design/design-systems" element={<DesignSystems />} />
                    <Route path="/services/ecommerce-development/shopify" element={<Shopify />} />
                    <Route path="/services/ecommerce-development/woocommerce" element={<WooCommerce />} />
                    <Route path="/services/ecommerce-development/custom-ecommerce" element={<CustomEcommerce />} />
                    <Route path="/services/ecommerce-development/payment-integration" element={<PaymentIntegration />} />
                    <Route path="/services/ecommerce-development/marketplace-development" element={<MarketplaceDev />} />
                    <Route path="/services/software-development/crm" element={<CRM />} />
                    <Route path="/services/software-development/erp" element={<ERP />} />
                    <Route path="/services/software-development/saas" element={<SaaS />} />
                    <Route path="/services/software-development/business-automation" element={<BusinessAutomation />} />
                    <Route path="/services/software-development/api-development" element={<APIDevelopment />} />
                    <Route path="/services/digital-marketing/seo" element={<SEO />} />
                    <Route path="/services/digital-marketing/ppc" element={<PPC />} />
                    <Route path="/services/digital-marketing/social-media" element={<SocialMedia />} />
                    <Route path="/services/digital-marketing/content-marketing" element={<ContentMarketing />} />
                    <Route path="/services/digital-marketing/performance-marketing" element={<PerformanceMarketing />} />
                    <Route path="/services/mobile-app-development/ios-development" element={<IOSDevelopment />} />
                    <Route path="/services/mobile-app-development/android-development" element={<AndroidDevelopment />} />
                    <Route path="/services/mobile-app-development/flutter-development" element={<FlutterDev />} />
                    <Route path="/services/mobile-app-development/react-native-development" element={<ReactNativeDev />} />
                    <Route path="/services/mobile-app-development/cross-platform-apps" element={<CrossPlatform />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Footer relative z-index stays below MobileMenu globally */}
            <div className="relative z-[1]">
                <Footer />
            </div>
        </>
    );
};

export default AppRoutes;
