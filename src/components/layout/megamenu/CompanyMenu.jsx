import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Users, Star, Shapes, Sparkles, CheckCircle2 } from 'lucide-react';

const icons = {
    "about-us": Info,
    "our-values": Star,
    "our-team": Users,
};

const CompanyMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    // Auto-select on data change
    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];

    return (
        <div className="flex w-full h-full min-h-[440px]">
            {/* Left Nav Panel */}
            <div className="w-[340px] shrink-0 bg-white border-r border-brand-border p-6 flex flex-col gap-2">
                <h4 className="text-xs font-bold tracking-widest uppercase text-brand-text-muted mb-4 px-3">Company</h4>
                {data.items.map((item) => {
                    const isActive = activeId === item.id;
                    const Icon = icons[item.id] || Info;
                    return (
                        <Link
                            key={item.id}
                            to={item.href}
                            onClick={() => setActiveMenu(null)}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={`flex flex-col relative px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-brand-primary-navy shadow-md' : 'hover:bg-brand-bg-light'}`}
                        >
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-cyan' : 'text-brand-text-muted'}`} />
                                    <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-brand-primary-navy'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {isActive && (
                                    <motion.div layoutId="company-arrow" className="text-brand-cyan">
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </div>
                            <p className={`text-xs pl-7 transition-colors leading-relaxed pr-2 ${isActive ? 'text-white/70' : 'text-brand-text-muted'}`}>
                                {item.leftDescription}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* Right Editorial Content */}
            <div className="flex-1 bg-brand-off-white p-10 xl:p-14 relative overflow-hidden flex items-center">

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full flex justify-between gap-10 relative z-10"
                    >
                        <div className="flex flex-col max-w-lg justify-center">
                            <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-4">
                                {currentItem.eyebrow}
                            </span>

                            <h3 className="text-3xl xl:text-4xl font-heading font-extrabold text-brand-primary-navy mb-4 leading-tight">
                                {currentItem.heading}
                            </h3>

                            <p className="text-base xl:text-lg text-brand-text-muted mb-8 leading-relaxed">
                                {currentItem.description}
                            </p>

                            {/* Value Indicators specially for Our Values */}
                            {currentItem.valueIndicators && (
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {currentItem.valueIndicators.map((val, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-brand-border">
                                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                                            <span className="text-sm font-bold text-brand-primary-navy">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className={currentItem.valueIndicators ? "mt-2" : "mt-6"}>
                                <Link
                                    to={currentItem.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-primary-navy px-6 py-3.5 rounded-full hover:bg-brand-deep-blue hover:shadow-lg hover:shadow-brand-primary-navy/20 transition-all duration-300 group"
                                >
                                    {currentItem.cta} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Decorative Graphic based on menu item */}
                        <div className="hidden lg:flex flex-1 items-center justify-end relative max-w-[280px]">
                            {currentItem.id === 'about-us' && (
                                <div className="w-64 h-64 bg-gradient-to-tr from-brand-cyan/20 to-brand-primary-navy/5 rounded-full flex items-center justify-center relative shadow-inner">
                                    <Sparkles className="w-16 h-16 text-brand-cyan absolute top-10 right-10 opacity-60" />
                                    <div className="w-32 h-32 bg-white rounded-2xl shadow-xl border border-brand-border flex items-center justify-center -rotate-6 transition-transform hover:rotate-0 duration-500">
                                        <Shapes className="w-12 h-12 text-brand-primary-navy" />
                                    </div>
                                </div>
                            )}
                            {currentItem.id === 'our-team' && (
                                <div className="w-64 h-64 rounded-3xl border-4 border-white bg-brand-primary-navy/5 shadow-lg flex flex-col justify-center items-center gap-4 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan via-transparent to-transparent"></div>
                                    <div className="flex gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-brand-cyan text-brand-primary-navy flex items-center justify-center font-bold shadow-md">JD</div>
                                        <div className="w-12 h-12 rounded-full bg-brand-primary-navy text-white flex items-center justify-center font-bold transform -translate-y-4 shadow-md">AR</div>
                                        <div className="w-12 h-12 rounded-full bg-white border border-brand-border text-brand-primary-navy flex items-center justify-center font-bold shadow-md">KL</div>
                                    </div>
                                    <span className="text-sm font-bold text-brand-primary-navy z-10 px-4 py-1.5 bg-white rounded-full shadow-sm mt-2">40+ Experts</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CompanyMenu;
