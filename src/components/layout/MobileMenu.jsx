import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose }) => {
    const location = useLocation();

    // Handle route change
    useEffect(() => {
        if (isOpen) {
            onClose();
        }
    }, [location.pathname]);

    // Handle body scroll lock, Escape key & Window Resize
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('resize', handleResize);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, onClose]);

    const navLinks = [
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services', hasDropdown: true },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Industries', path: '/industries', hasDropdown: true },
        { label: 'Process', path: '/process' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' }
    ];

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
                        {/* Header inside drawer */}
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

                        {/* Scrollable Navigation Area */}
                        <div className="flex-1 overflow-y-auto px-6 py-8">
                            <nav className="flex flex-col gap-6 w-full">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={onClose}
                                            className="flex items-center justify-between py-2 text-[26px] font-heading font-semibold text-foreground hover:text-primary transition-colors leading-[1.3]"
                                        >
                                            {link.label}
                                            {link.hasDropdown && <span className="text-muted-foreground font-light text-3xl leading-none">+</span>}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer Area inside drawer */}
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
