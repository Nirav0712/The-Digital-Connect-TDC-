import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { megaMenuData } from '../../data/megaMenuData';

const MegaMenu = ({ activeMenu }) => {
    const [activeSubItem, setActiveSubItem] = useState(null);

    const currentMenu = megaMenuData[activeMenu];

    // Auto-select first item when menu opens or changes main category
    useEffect(() => {
        if (currentMenu && currentMenu.items && currentMenu.items.length > 0) {
            setActiveSubItem(currentMenu.items[0].id);
        }
    }, [activeMenu, currentMenu]);

    if (!currentMenu) return null;

    const currentContent = currentMenu.items.find(i => i.id === activeSubItem) || currentMenu.items[0];

    return (
        <div className="w-full bg-brand-off-white border border-brand-border rounded-3xl shadow-xl overflow-hidden hidden lg:block">
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex w-full min-h-[450px]"
            >
                {/* LEFT SIDE - CATEGORIES */}
                <div className="w-[280px] shrink-0 bg-white border-r border-brand-border p-6 flex flex-col gap-2">
                    {currentMenu.items.map((item) => {
                        const isActive = activeSubItem === item.id;
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveSubItem(item.id)}
                                className={`relative group rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 ${isActive ? 'bg-brand-bg-light' : 'hover:bg-brand-bg-light/50'}`}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-brand-primary-navy' : 'text-brand-text-muted group-hover:text-brand-primary-navy'}`}>
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <motion.div layoutId="arrow-active" className="text-brand-cyan">
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="flex-1 p-8 xl:p-10 bg-brand-off-white relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentContent.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-between h-full gap-8 relative z-10"
                        >
                            <div className="flex flex-col flex-1 max-w-[65%]">
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-4">
                                    {currentContent.label}
                                </span>
                                <h3 className="text-3xl font-heading font-extrabold mb-4 text-brand-primary-navy leading-tight">
                                    {currentContent.heading}
                                </h3>
                                <p className="text-brand-text-muted leading-relaxed mb-6">
                                    {currentContent.description}
                                </p>

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                                    {currentContent.subServices?.map((service, i) => (
                                        <Link
                                            key={i}
                                            to={service.href}
                                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-brand-electric-cyan/5 transition-colors duration-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-deep-blue/30 group-hover:bg-brand-cyan transition-colors"></div>
                                                <span className="text-sm font-semibold text-brand-primary-navy/80 group-hover:text-brand-cyan transition-colors">
                                                    {service.title}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-cyan" />
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        to={currentContent.href}
                                        className="inline-flex items-center text-sm font-bold bg-white border border-brand-border px-6 py-3 rounded-full hover:border-brand-cyan/40 hover:text-brand-cyan hover:shadow-md hover:shadow-brand-cyan/5 transition-all"
                                    >
                                        {currentContent.cta}
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Image Block */}
                            <div className="hidden lg:flex w-[260px] xl:w-[280px] shrink-0 justify-end h-full relative">
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`w-full aspect-[3/4] rounded-2xl ${currentContent.background} border border-border/50 relative overflow-hidden shadow-sm flex flex-col justify-between p-6`}
                                >
                                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                                    <div className="relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <div className="relative z-10 text-xl font-heading font-extrabold opacity-40">
                                        {currentContent.imageText}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default MegaMenu;
