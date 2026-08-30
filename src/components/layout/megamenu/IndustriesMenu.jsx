import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, CircleDollarSign, ShoppingBag, Cloud, ArrowRight, ArrowUpRight } from 'lucide-react';

const icons = {
    HeartPulse, CircleDollarSign, ShoppingBag, Cloud
};

const IndustriesMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];
    const ActiveIcon = icons[currentItem.icon] || HeartPulse;

    return (
        <div className="flex w-full h-full min-h-[440px] flex-col bg-white">
            <div className="px-10 py-6 border-b border-brand-border bg-brand-bg-light/50 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-heading font-extrabold text-brand-primary-navy">Industries We Serve</h3>
                    <p className="text-sm text-brand-text-muted mt-1">Domain expertise across key technological verticals.</p>
                </div>
                <Link to="/industries" onClick={() => setActiveMenu(null)} className="text-sm font-bold text-brand-cyan hover:text-brand-electric-cyan flex items-center gap-1">
                    View All Industries <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="flex flex-1">
                {/* Left Card Nav */}
                <div className="w-[400px] shrink-0 border-r border-brand-border p-6 grid grid-cols-2 gap-3 bg-white">
                    {data.items.map((item) => {
                        const isActive = activeId === item.id;
                        const Icon = icons[item.icon] || HeartPulse;
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveId(item.id)}
                            >
                                <Link
                                    to={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border-2 transition-all duration-300 h-full ${isActive ? 'border-brand-cyan bg-brand-cyan/5 shadow-md' : 'border-brand-border hover:border-brand-cyan/40 hover:bg-brand-bg-light'}`}
                                >
                                    <Icon className={`w-8 h-8 mb-3 transition-colors ${isActive ? 'text-brand-cyan' : 'text-brand-primary-navy/40'}`} />
                                    <span className={`text-sm font-bold transition-colors ${isActive ? 'text-brand-primary-navy' : 'text-brand-text-muted'}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Right Content */}
                <div className="flex-1 p-10 bg-brand-off-white relative flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentItem.id}
                            initial={{ opacity: 0, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(4px)' }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="p-2.5 bg-white rounded-xl shadow-sm border border-brand-border text-brand-cyan">
                                    <ActiveIcon className="w-6 h-6" />
                                </span>
                                <h3 className="text-3xl font-heading font-extrabold text-brand-primary-navy">
                                    {currentItem.heading}
                                </h3>
                            </div>

                            <p className="text-lg text-brand-text-muted mb-8 max-w-md">
                                {currentItem.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {currentItem.subServices?.map((sub, idx) => (
                                    <Link
                                        key={idx}
                                        to={sub.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-brand-border hover:bg-brand-primary-navy hover:border-brand-primary-navy group transition-all duration-300"
                                    >
                                        <span className="font-semibold text-sm text-brand-primary-navy group-hover:text-white transition-colors">
                                            {sub.title}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-cyan transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default IndustriesMenu;
