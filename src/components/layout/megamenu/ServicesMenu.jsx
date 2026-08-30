import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, PenTool, ShoppingCart, Monitor, TrendingUp, ArrowRight } from 'lucide-react';

const icons = {
    Code, Smartphone, PenTool, ShoppingCart, Monitor, TrendingUp
};

const ServicesMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];
    const ActiveIcon = icons[currentItem.icon] || Code;

    return (
        <div className="flex w-full h-full min-h-[460px]">
            {/* Left Services Nav */}
            <div className="w-[340px] shrink-0 bg-brand-primary-navy p-6 flex flex-col gap-2 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.2)] relative z-20">
                <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4 px-3">Our Services</h4>
                {data.items.map((item) => {
                    const isActive = activeId === item.id;
                    const Icon = icons[item.icon] || Code;
                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className="w-full"
                        >
                            <Link
                                to={item.href}
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}
                            >
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive ? 'bg-brand-cyan text-brand-primary-navy' : 'bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white'}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className={`text-[15px] font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {isActive && (
                                    <motion.div layoutId="services-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan rounded-r-full" />
                                )}
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Right Capability List */}
            <div className="flex-1 bg-white p-10 xl:p-14 relative z-10 flex">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col w-full h-full"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="max-w-md">
                                <h3 className="text-3xl font-heading font-extrabold text-brand-primary-navy mb-3">
                                    {currentItem.heading}
                                </h3>
                                <p className="text-brand-text-muted leading-relaxed">
                                    {currentItem.description}
                                </p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-brand-bg-light flex items-center justify-center shrink-0">
                                <ActiveIcon className="w-8 h-8 text-brand-cyan" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 mt-2">
                            {currentItem.subServices?.map((sub, idx) => (
                                <Link
                                    key={idx}
                                    to={sub.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-center p-4 rounded-xl border border-brand-border bg-white hover:border-brand-cyan hover:shadow-md hover:shadow-brand-cyan/5 transition-all duration-300"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-text-muted/30 group-hover:bg-brand-cyan transition-colors mr-3"></div>
                                    <span className="font-semibold text-brand-primary-navy/80 text-sm group-hover:text-brand-primary-navy transition-colors flex-1">
                                        {sub.title}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-brand-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-cyan transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link
                                to={currentItem.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary-navy border-2 border-brand-primary-navy px-6 py-3 rounded-full hover:bg-brand-primary-navy hover:text-white transition-all duration-300"
                            >
                                Explore {currentItem.label} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ServicesMenu;
