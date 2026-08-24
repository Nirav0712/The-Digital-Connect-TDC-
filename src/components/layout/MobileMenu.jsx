import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { megaMenuData } from '../../data/megaMenuData';

const navOrder = [
    { label: 'Company', id: 'company' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Careers', id: 'careers' }
];

const MobileMenu = ({ isOpen, onClose }) => {
    const location = useLocation();
    const [expandedSection, setExpandedSection] = useState(null);

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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/35 backdrop-blur-sm z-[1999]"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-brand-soft z-[2000] flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center px-6 h-[90px] shrink-0 border-b border-border/30">
                            <Link to="/" className="text-xl font-heading font-extrabold tracking-tight" onClick={onClose}>
                                THE DIGITAL CONNECT
                            </Link>
                            <button
                                className="p-2 -mr-2 text-foreground"
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Scrollable Accodion Navigation */}
                        <div className="flex-1 overflow-y-auto px-6 py-8">
                            <nav className="flex flex-col w-full">
                                {navOrder.map((nav, i) => {
                                    const sectionData = megaMenuData[nav.id];
                                    const isExpanded = expandedSection === nav.id;

                                    return (
                                        <motion.div
                                            key={nav.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                                            className="border-b border-border/50 overflow-hidden"
                                        >
                                            {sectionData ? (
                                                <>
                                                    <button
                                                        className="flex items-center justify-between w-full py-4 text-[26px] font-heading font-semibold text-foreground hover:text-primary transition-colors text-left"
                                                        onClick={() => toggleSection(nav.id)}
                                                        aria-expanded={isExpanded}
                                                    >
                                                        {nav.label}
                                                        <motion.div
                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-muted-foreground"
                                                        >
                                                            <ChevronDown className="w-6 h-6" />
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
                                                                <div className="flex flex-col gap-4 pb-6 pl-4 border-l-2 border-border ml-2 mt-2">
                                                                    {sectionData.items.map((subItem) => (
                                                                        <div key={subItem.id} className="flex flex-col gap-3 mb-4">
                                                                            <Link
                                                                                to={subItem.href}
                                                                                onClick={onClose}
                                                                                className="text-lg font-bold text-foreground hover:text-primary transition-colors block"
                                                                            >
                                                                                {subItem.label}
                                                                            </Link>
                                                                            {subItem.subServices && subItem.subServices.length > 0 && (
                                                                                <div className="flex flex-col gap-2 pl-3 border-l text-sm mb-2">
                                                                                    {subItem.subServices.map((srv, idx) => (
                                                                                        <Link
                                                                                            key={idx}
                                                                                            to={srv.href}
                                                                                            onClick={onClose}
                                                                                            className="text-muted-foreground hover:text-primary transition-colors block py-0.5"
                                                                                        >
                                                                                            {srv.title}
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    to={`/${nav.id}`}
                                                    onClick={onClose}
                                                    className="flex items-center justify-between w-full py-4 text-[26px] font-heading font-semibold text-foreground hover:text-primary transition-colors"
                                                >
                                                    {nav.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (navOrder.length * 0.05), duration: 0.3 }}
                                    className="border-b border-border/50"
                                >
                                    <Link
                                        to="/contact"
                                        onClick={onClose}
                                        className="flex items-center justify-between w-full py-4 text-[26px] font-heading font-semibold text-foreground hover:text-primary transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </motion.div>
                            </nav>
                        </div>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="shrink-0 px-6 py-8 bg-white/50 border-t border-border/30"
                        >
                            <Link
                                onClick={onClose}
                                to="/contact"
                                className="flex items-center justify-center w-full bg-primary text-white py-4 rounded-xl font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg"
                            >
                                START A PROJECT
                            </Link>
                            <div className="flex gap-6 mt-8 font-medium text-sm">
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
