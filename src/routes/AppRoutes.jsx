
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import MobileMenu from '../components/layout/MobileMenu';
import Footer from '../components/layout/Footer';
import HireRoutes from './HireRoutes';

// Pages
import Home from '../pages/Home';
import About from '../pages/about/About';
import Mission from '../pages/about/Mission';
import BrandStory from '../pages/about/BrandStory';
import Leadership from '../pages/about/Leadership';
import Values from '../pages/about/Values';
import Team from '../pages/about/Team';
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
import Logistics from '../pages/industries/Logistics';
import SaaSIndustry from '../pages/industries/SaaS';

import HealthcarePlatforms from '../pages/industries/healthcare/HealthcarePlatforms';
import PatientApps from '../pages/industries/healthcare/PatientApps';
import HealthcareWebsites from '../pages/industries/healthcare/HealthcareWebsites';
import AppointmentSystems from '../pages/industries/healthcare/AppointmentSystems';

import BankingPortals from '../pages/industries/fintech/BankingPortals';
import Payments from '../pages/industries/fintech/Payments';
import Trading from '../pages/industries/fintech/Trading';
import FintechDashboards from '../pages/industries/fintech/FintechDashboards';

import Marketplaces from '../pages/industries/ecommerce/Marketplaces';
import B2BPortals from '../pages/industries/ecommerce/B2BPortals';
import Inventory from '../pages/industries/ecommerce/Inventory';
import POSIntegration from '../pages/industries/ecommerce/POSIntegration';

import SaaSArchitecture from '../pages/industries/saas/SaaSArchitecture';
import MultiTenant from '../pages/industries/saas/MultiTenant';
import SaaSBilling from '../pages/industries/saas/SaaSBilling';
import SaaSAnalytics from '../pages/industries/saas/SaaSAnalytics';
// Detail Pages
import ProjectDetails from '../pages/projects/ProjectDetails';
import BlogTemplate from '../components/blog/BlogTemplate';
import CaseStudyTemplate from '../components/caseStudies/CaseStudyTemplate';
import ScrollToTop from '../components/common/ScrollToTop';

import FrontendDevelopment from '../pages/services/web-development/FrontendDevelopment';
import BackendDevelopment from '../pages/services/web-development/BackendDevelopment';
import CMSDevelopment from '../pages/services/web-development/CMSDevelopment';
import APIIntegration from '../pages/services/web-development/APIIntegration';
import CustomWebApplications from '../pages/services/web-development/CustomWebApplications';
import IOSDevelopment from '../pages/services/mobile-app-development/IOSDevelopment';
import AndroidDevelopment from '../pages/services/mobile-app-development/AndroidDevelopment';
import FlutterDevelopment from '../pages/services/mobile-app-development/FlutterDevelopment';
import ReactNativeDevelopment from '../pages/services/mobile-app-development/ReactNativeDevelopment';
import CrossPlatformApps from '../pages/services/mobile-app-development/CrossPlatformApps';
import UXResearch from '../pages/services/ui-ux-design/UXResearch';
import Wireframing from '../pages/services/ui-ux-design/Wireframing';
import Prototyping from '../pages/services/ui-ux-design/Prototyping';
import UIDesign from '../pages/services/ui-ux-design/UIDesign';
import DesignSystems from '../pages/services/ui-ux-design/DesignSystems';
import Shopify from '../pages/services/ecommerce-development/Shopify';
import WooCommerce from '../pages/services/ecommerce-development/WooCommerce';
import CustomEcommerce from '../pages/services/ecommerce-development/CustomEcommerce';
import PaymentIntegration from '../pages/services/ecommerce-development/PaymentIntegration';
import MarketplaceDev from '../pages/services/ecommerce-development/MarketplaceDev';
import CRM from '../pages/services/software-development/CRM';
import ERP from '../pages/services/software-development/ERP';
import SaaS from '../pages/services/software-development/SaaS';
import BusinessAutomation from '../pages/services/software-development/BusinessAutomation';
import APIDevelopment from '../pages/services/software-development/APIDevelopment';
import SEO from '../pages/services/digital-marketing/SEO';
import PPC from '../pages/services/digital-marketing/PPC';
import SocialMedia from '../pages/services/digital-marketing/SocialMedia';
import ContentMarketing from '../pages/services/digital-marketing/ContentMarketing';
import PerformanceMarketing from '../pages/services/digital-marketing/PerformanceMarketing';

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
                    <Route path="/about/mission" element={<Mission />} />
                    <Route path="/about/brand-story" element={<BrandStory />} />
                    <Route path="/about/leadership" element={<Leadership />} />
                    <Route path="/about/values" element={<Values />} />
                    <Route path="/about/team" element={<Team />} />
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
                    <Route path="/industries/logistics" element={<Logistics />} />
                    <Route path="/industries/saas" element={<SaaSIndustry />} />

                    <Route path="/industries/healthcare/healthcare-platforms" element={<HealthcarePlatforms />} />
                    <Route path="/industries/healthcare/patient-apps" element={<PatientApps />} />
                    <Route path="/industries/healthcare/healthcare-websites" element={<HealthcareWebsites />} />
                    <Route path="/industries/healthcare/appointment-systems" element={<AppointmentSystems />} />

                    <Route path="/industries/fintech/banking-portals" element={<BankingPortals />} />
                    <Route path="/industries/fintech/payments" element={<Payments />} />
                    <Route path="/industries/fintech/trading" element={<Trading />} />
                    <Route path="/industries/fintech/dashboards" element={<FintechDashboards />} />

                    <Route path="/industries/ecommerce/marketplaces" element={<Marketplaces />} />
                    <Route path="/industries/ecommerce/b2b-portals" element={<B2BPortals />} />
                    <Route path="/industries/ecommerce/inventory" element={<Inventory />} />
                    <Route path="/industries/ecommerce/pos-integration" element={<POSIntegration />} />

                    <Route path="/industries/saas/architecture" element={<SaaSArchitecture />} />
                    <Route path="/industries/saas/multi-tenant" element={<MultiTenant />} />
                    <Route path="/industries/saas/billing" element={<SaaSBilling />} />
                    <Route path="/industries/saas/analytics" element={<SaaSAnalytics />} />

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

                    <Route path="/services/web-development/frontend-development" element={<FrontendDevelopment />} />
                    <Route path="/services/web-development/backend-development" element={<BackendDevelopment />} />
                    <Route path="/services/web-development/cms-development" element={<CMSDevelopment />} />
                    <Route path="/services/web-development/api-integration" element={<APIIntegration />} />
                    <Route path="/services/web-development/custom-web-applications" element={<CustomWebApplications />} />
                    <Route path="/services/mobile-app-development/ios-development" element={<IOSDevelopment />} />
                    <Route path="/services/mobile-app-development/android-development" element={<AndroidDevelopment />} />
                    <Route path="/services/mobile-app-development/flutter-development" element={<FlutterDevelopment />} />
                    <Route path="/services/mobile-app-development/react-native-development" element={<ReactNativeDevelopment />} />
                    <Route path="/services/mobile-app-development/cross-platform-apps" element={<CrossPlatformApps />} />
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

                    {HireRoutes().props.children}

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
