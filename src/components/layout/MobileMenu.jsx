import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { megaMenuData } from '../../data/megaMenuData';
import logo from '../../assets/logo/TDC.png';

const navOrder = [
    { label: 'Company', id: 'company' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Hire Team', id: 'hire-team' },
    { label: 'Careers', id: 'careers' }
];

const MobileMenu = ({ isOpen, onClose }) => {
    const location = useLocation();
    const [expandedSection, setExpandedSection] = useState(null);
    const [expandedSubSection, setExpandedSubSection] = useState(null);

    useEffect(() => {
        if (isOpen) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('resize', handleResize);
        } else {
            document.body.style.overflow = '';
            setExpandedSection(null); // Reset accordion on close
            setExpandedSubSection(null);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, onClose]);

    const toggleSection = (id) => {
        setExpandedSection(prev => prev === id ? null : id);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Drawer (Full Screen) */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#F7FAFC] z-[2000] flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center px-6 h-[72px] lg:h-[76px] shrink-0 border-b border-[#061A2E]/10 bg-[rgba(247,250,252,0.94)] backdrop-blur-md">
                            <Link to="/" className="flex items-center" onClick={onClose}>
                                <img src={logo} alt="The Digital Connect" className="h-6 md:h-7 object-contain w-auto" />
                            </Link>
                            <button
                                className="p-2 -mr-2 text-foreground"
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Scrollable Nav Content & CTA Section */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
                            <nav className="flex flex-col w-full mb-12">
                                {navOrder.map((nav, i) => {
                                    const sectionData = megaMenuData[nav.id];
                                    const isExpanded = expandedSection === nav.id;

                                    return (
                                        <motion.div
                                            key={nav.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                                            className="border-b border-[#061A2E]/10 overflow-hidden"
                                        >
                                            {sectionData ? (
                                                <>
                                                    <button
                                                        className="flex items-center justify-between w-full py-4 text-[22px] md:text-[26px] font-heading font-semibold text-[#0B1724] hover:text-[#061A2E] transition-colors text-left"
                                                        onClick={() => toggleSection(nav.id)}
                                                        aria-expanded={isExpanded}
                                                    >
                                                        {nav.label}
                                                        <motion.div
                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-[#607080]"
                                                        >
                                                            {isExpanded ? <span className="text-3xl font-light leading-none -mt-2 inline-block">−</span> : <span className="text-3xl font-light leading-none inline-block mt-1">+</span>}
                                                        </motion.div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <div className="flex flex-col gap-4 pb-6 pl-4 border-l-2 border-[#18C5E8]/20 ml-2 mt-2">
                                                                    {sectionData.items.map((subItem) => {
                                                                        const isSubExpanded = expandedSubSection === subItem.id;
                                                                        const childrenItems = subItem.subServices || subItem.roles || null;
                                                                        const hasChildren = childrenItems && childrenItems.length > 0;
                                                                        const linkHref = subItem.href || subItem.featuredProject?.href || '#';

                                                                        return (
                                                                            <div key={subItem.id} className="flex flex-col gap-3 mb-4">
                                                                                {hasChildren ? (
                                                                                    <button onClick={() => setExpandedSubSection(prev => prev === subItem.id ? null : subItem.id)} className="text-lg font-bold text-[#087EA4] hover:text-[#061A2E] transition-colors flex items-center justify-between w-full pr-4 text-left">
                                                                                        <span>{subItem.label}</span>
                                                                                        <motion.span animate={{ rotate: isSubExpanded ? 180 : 0 }} className="text-sm">▼</motion.span>
                                                                                    </button>
                                                                                ) : (
                                                                                    <Link
                                                                                        to={linkHref}
                                                                                        onClick={onClose}
                                                                                        className="text-lg font-bold text-[#087EA4] hover:text-[#061A2E] transition-colors flex items-center justify-between w-full pr-4"
                                                                                    >
                                                                                        {subItem.label} <span className="text-sm">→</span>
                                                                                    </Link>
                                                                                )}

                                                                                <AnimatePresence>
                                                                                    {isSubExpanded && hasChildren && (
                                                                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                                                                            <div className="flex flex-col gap-3 pl-3 border-l border-[#061A2E]/5 text-sm mb-2 mt-2">
                                                                                                {childrenItems.map((child, idx) => (
                                                                                                    <Link
                                                                                                        key={idx}
                                                                                                        to={child.href}
                                                                                                        onClick={onClose}
                                                                                                        className="text-[#607080] hover:text-[#18C5E8] transition-colors block py-0.5 text-base"
                                                                                                    >
                                                                                                        {child.title}
                                                                                                    </Link>
                                                                                                ))}
                                                                                                {linkHref && linkHref !== '#' && (
                                                                                                    <div className="pt-2 mt-1 border-t border-[#061A2E]/5">
                                                                                                        <Link
                                                                                                            to={linkHref}
                                                                                                            onClick={onClose}
                                                                                                            className="text-[#087EA4] font-bold hover:text-[#18C5E8] transition-colors block py-1 text-base flex items-center"
                                                                                                        >
                                                                                                            Overview <span className="ml-1 text-sm">→</span>
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                )}
                                                                                            </div>
                                                                                        </motion.div>
                                                                                    )}
                                                                                </AnimatePresence>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    to={`/${nav.id}`}
                                                    onClick={onClose}
                                                    className="flex items-center justify-between w-full py-4 text-[22px] md:text-[26px] font-heading font-semibold text-[#0B1724] hover:text-[#061A2E] transition-colors"
                                                >
                                                    {nav.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (navOrder.length * 0.05), duration: 0.3 }}
                                    className="border-b border-[#061A2E]/10"
                                >
                                    <Link
                                        to="/contact"
                                        onClick={onClose}
                                        className="flex items-center justify-between w-full py-4 text-[22px] md:text-[26px] font-heading font-semibold text-[#0B1724] hover:text-[#061A2E] transition-colors"
                                    >
                                        Contact
                                    </Link>
                                    <a
                                        href="tel:+919925843531"
                                        onClick={onClose}
                                        className="flex items-center gap-3 w-full pb-4 pt-1 text-[22px] md:text-[26px] font-heading font-semibold text-[#08BFE8] hover:text-[#18C5E8] transition-colors"
                                    >
                                        <Phone size={24} /> +91 9925843531
                                    </a>
                                </motion.div>
                            </nav>

                            {/* Menu Footer Layout (CTA + Socials) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className="w-full flex flex-col gap-6"
                            >
                                <Link
                                    onClick={onClose}
                                    to="/contact"
                                    className="flex items-center justify-center w-full bg-[#061A2E] text-white py-4 rounded-2xl font-bold tracking-wide text-[16px] hover:bg-[#061A2E]/90 transition-colors shadow-lg"
                                >
                                    START A PROJECT <span className="ml-2">→</span>
                                </Link>
                                <div className="flex gap-6 justify-center font-medium text-[15px] text-[#607080]">
                                    <a href="#" className="hover:text-[#061A2E] transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-[#061A2E] transition-colors">Instagram</a>
                                    <a href="#" className="hover:text-[#061A2E] transition-colors">Twitter</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
