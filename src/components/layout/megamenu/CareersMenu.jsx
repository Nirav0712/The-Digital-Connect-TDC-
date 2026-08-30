import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Briefcase, Search, HeartPulse, Star, GraduationCap } from 'lucide-react';

const icons = {
    "Briefcase": Briefcase,
    "Search": Search,
    "HeartPulse": HeartPulse,
    "Star": Star,
    "GraduationCap": GraduationCap
};

const CareersMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    // Instead of using data.panel.benefits which might be generic, we use exactly the text instructed by the user.
    const benefits = [
        "Flexible Work",
        "Continuous Learning",
        "Collaborative Culture",
        "Growth Opportunities"
    ];

    return (
        <div className="flex w-full h-full min-h-[440px]">
            {/* Left Link List */}
            <div className="w-[340px] shrink-0 bg-white border-r border-brand-border p-6 flex flex-col gap-2 relative">
                <h4 className="text-xs font-bold tracking-widest uppercase text-brand-text-muted mb-3 px-3">Careers</h4>
                {data.items.map((item) => {
                    const isActive = activeId === item.id;
                    const Icon = icons[item.icon] || Briefcase;
                    return (
                        <Link
                            key={item.id}
                            to={item.href}
                            onClick={() => setActiveMenu(null)}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={`group relative flex flex-col px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-brand-cyan/10' : 'hover:bg-brand-bg-light'}`}
                        >
                            {/* Accent indicator bar */}
                            {isActive && (
                                <motion.div
                                    layoutId="careers-indicator"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-cyan rounded-r-md"
                                />
                            )}
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive ? 'bg-white shadow-sm text-brand-cyan' : 'text-brand-text-muted group-hover:text-brand-primary-navy'}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className={`text-sm font-bold transition-colors ${isActive ? 'text-brand-primary-navy' : 'text-brand-primary-navy/80 group-hover:text-brand-primary-navy'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-brand-cyan translate-x-1 opacity-100' : 'text-brand-border -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                            </div>
                            <p className="text-xs pl-[38px] text-brand-text-muted pr-4 leading-relaxed">
                                {item.leftDescription}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* Right Careers Hero Panel */}
            <div className="flex-1 bg-[#F8FAFC] p-8 xl:p-12 relative flex items-center overflow-hidden">
                {/* Visual Elements behind content */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-brand-cyan/10 via-brand-cyan/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/4 blur-3xl pointer-events-none"></div>

                <div className="max-w-3xl relative z-10 flex w-full">

                    <div className="flex flex-col flex-1 pr-6 xl:pr-10 justify-center">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-4">
                            CAREERS AT THE DIGITAL CONNECT
                        </span>

                        <h3 className="text-3xl xl:text-4xl font-heading font-extrabold text-brand-primary-navy mb-4 leading-tight">
                            Build meaningful digital products with us.
                        </h3>

                        <p className="text-base text-brand-text-muted mb-8 leading-relaxed max-w-md">
                            Join a team of designers, engineers and strategists solving meaningful business challenges through technology.
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                                    </div>
                                    <span className="text-brand-primary-navy font-bold text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 mt-2">
                            <Link
                                to="/careers/open-positions"
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-2 bg-brand-primary-navy text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-brand-deep-blue transition-all duration-300 shadow-md shadow-brand-primary-navy/10 group"
                            >
                                View Open Positions <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/about/team"
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-1.5 text-brand-cyan hover:text-brand-primary-navy font-bold text-sm transition-colors group"
                            >
                                Meet Our Team <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Premium abstract dynamic visual on the right */}
                    <div className="hidden lg:flex shrink-0 w-[240px] items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.05, rotate: 5 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="relative w-full aspect-square"
                            >
                                {/* Abstract network/team graphic */}
                                <div className="absolute inset-0 bg-white rounded-3xl border border-brand-border/60 shadow-xl shadow-brand-primary-navy/5 overflow-hidden flex items-center justify-center rotate-3">
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-bg-light via-white to-white"></div>
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-brand-primary-navy text-brand-cyan flex flex-col items-center justify-center shadow-lg absolute -translate-x-10 -translate-y-8 z-20 hover:scale-110 transition-transform">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-brand-cyan text-white flex items-center justify-center shadow-lg absolute translate-x-12 -translate-y-2 z-10 opacity-90 animate-pulse">
                                            <Star className="w-5 h-5" />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-brand-bg-light border border-brand-border text-brand-primary-navy flex items-center justify-center shadow-sm absolute -translate-x-2 translate-y-12 z-10 hover:-translate-y-2 transition-transform">
                                            <HeartPulse className="w-6 h-6" />
                                        </div>

                                        {/* Connection lines */}
                                        <svg className="absolute inset-0 w-full h-full stroke-brand-border/80 stroke-1 pointer-events-none" style={{ zIndex: 0 }}>
                                            <line x1="30%" y1="35%" x2="70%" y2="45%" strokeDasharray="4 4" />
                                            <line x1="30%" y1="35%" x2="45%" y2="70%" strokeDasharray="4 4" />
                                            <line x1="70%" y1="45%" x2="45%" y2="70%" strokeDasharray="4 4" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CareersMenu;
