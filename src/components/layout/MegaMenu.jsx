import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenuData } from '../../data/megaMenuData';
import CompanyMenu from './megamenu/CompanyMenu';
import ServicesMenu from './megamenu/ServicesMenu';
import IndustriesMenu from './megamenu/IndustriesMenu';
import PortfolioMenu from './megamenu/PortfolioMenu';
import ProcessMenu from './megamenu/ProcessMenu';
import HireTeamMenu from './megamenu/HireTeamMenu';
import CareersMenu from './megamenu/CareersMenu';

const MegaMenu = ({ activeMenu, setActiveMenu }) => {

    const renderMenuContent = (menuData) => {
        switch (menuData?.type) {
            case 'editorial':
                return <CompanyMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'services':
                return <ServicesMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'industries':
                return <IndustriesMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'portfolio':
                return <PortfolioMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'process':
                return <ProcessMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'directory':
                return <HireTeamMenu data={menuData} setActiveMenu={setActiveMenu} />;
            case 'careers':
                return <CareersMenu data={menuData} setActiveMenu={setActiveMenu} />;
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {activeMenu && megaMenuData[activeMenu] && (
                <motion.div
                    key="mega-menu-container"
                    initial={{ opacity: 0, y: -4, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.99 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-brand-off-white border border-brand-border rounded-3xl shadow-2xl overflow-hidden hidden lg:block"
                >
                    <div className="w-full min-h-[420px] max-h-[550px] overflow-hidden bg-white relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeMenu}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full h-full"
                            >
                                {renderMenuContent(megaMenuData[activeMenu])}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
