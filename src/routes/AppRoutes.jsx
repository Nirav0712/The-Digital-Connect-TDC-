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
