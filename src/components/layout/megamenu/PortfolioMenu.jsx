import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageIcon } from 'lucide-react';

const PortfolioMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];

    return (
        <div className="flex w-full h-full min-h-[480px]">
            {/* Left Category Nav */}
            <div className="w-[280px] shrink-0 bg-white border-r border-brand-border py-8 px-6 flex flex-col gap-1">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-text-muted mb-4 px-3">Filter By Category</h4>
                {data.items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className="w-full"
                        >
                            <Link
                                to={item.href} // Navigate to portfolio root or filtered
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-brand-primary-navy text-white' : 'hover:bg-brand-bg-light text-brand-primary-navy'}`}
                            >
                                <span className={`text-sm font-bold`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <ArrowRight className="w-4 h-4 text-brand-cyan" />
                                )}
                            </Link>
                        </div>
                    );
                })}

                <div className="mt-auto px-2">
                    <Link
                        to="/portfolio"
                        onClick={() => setActiveMenu(null)}
                        className="text-sm font-bold text-brand-cyan hover:text-brand-electric-cyan flex items-center gap-1.5"
                    >
                        View All Work <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Right Visual Project Display */}
            <div className="flex-1 p-8 bg-brand-off-white relative flex">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="w-full h-full flex gap-8 items-center"
                    >
                        {/* Project Visual / Thumbnail */}
                        <Link
                            to={currentItem.featuredProject.href}
                            onClick={() => setActiveMenu(null)}
                            className={`w-[45%] h-full rounded-2xl relative overflow-hidden group shadow-md ${currentItem.featuredProject.image}`}
                        >
                            {/* Placeholder for actual image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary-navy/80 to-transparent z-10 flex flex-col justify-end p-6">
                                <ImageIcon className="w-8 h-8 text-white/50 mb-3" />
                                <span className="text-white font-bold text-lg">{currentItem.featuredProject.title}</span>
                                <span className="text-white/80 text-sm">{currentItem.featuredProject.category}</span>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                                <span className="bg-white text-brand-primary-navy px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>

                        {/* Project Details */}
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 self-start">
                                Featured {currentItem.label}
                            </span>

                            <h3 className="text-4xl font-heading font-extrabold text-brand-primary-navy mb-4">
                                {currentItem.featuredProject.title}
                            </h3>

                            <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                                {currentItem.featuredProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {currentItem.featuredProject.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1.5 rounded-md bg-white border border-brand-border text-xs font-bold text-brand-primary-navy/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={currentItem.featuredProject.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary-navy hover:text-brand-cyan transition-colors group"
                            >
                                Read Full Case Study
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PortfolioMenu;
