import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Map, PenTool, Code, CheckCircle, Rocket, TrendingUp } from 'lucide-react';

const icons = {
    Search, Map, PenTool, Code, CheckCircle, Rocket, TrendingUp
};

const ProcessMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);
    const activeItemIndex = data.items.findIndex(i => i.id === activeId);

    const currentItem = data.items[activeItemIndex] || data.items[0];
    const ActiveIcon = icons[currentItem.icon] || Search;

    return (
        <div className="flex flex-col w-full h-full min-h-[460px] bg-white">

            {/* Top Area: Details */}
            <div className="flex-1 p-12 flex relative overflow-hidden bg-brand-primary-navy">
                {/* Decorative background element */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand-cyan/10 to-transparent pointer-events-none"></div>

                <div className="flex items-center w-full max-w-5xl mx-auto gap-12 relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentItem.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col flex-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-heading font-extrabold text-5xl text-brand-cyan/20">
                                    {currentItem.number}
                                </span>
                                <div className="p-3 bg-brand-cyan/10 rounded-xl text-brand-cyan">
                                    <ActiveIcon className="w-8 h-8" />
                                </div>
                            </div>

                            <h3 className="text-4xl font-heading font-extrabold text-white mb-4">
                                {currentItem.title}
                            </h3>

                            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
                                {currentItem.description}
                            </p>

                            <Link
                                to={currentItem.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:text-white transition-colors self-start pb-1 border-b border-brand-cyan hover:border-white"
                            >
                                View Phase Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Area: Timeline */}
            <div className="h-[140px] shrink-0 bg-brand-off-white border-t border-brand-border px-10 flex items-center justify-center relative shadow-[inset_0_10px_20px_rgba(0,0,0,0.02)]">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-brand-border -translate-y-1/2 z-0"></div>

                {/* Active Progress Line */}
                <div
                    className="absolute top-1/2 left-10 h-0.5 bg-brand-cyan -translate-y-1/2 z-0 transition-all duration-500 ease-out"
                    style={{ width: `calc(${((activeItemIndex) / (data.items.length - 1)) * 100}% - 2rem)` }}
                />

                <div className="w-full flex justify-between relative z-10">
                    {data.items.map((item, index) => {
                        const isActive = activeId === item.id;
                        const isPast = index <= activeItemIndex;
                        const Icon = icons[item.icon] || Search;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center gap-3 cursor-pointer group"
                                onMouseEnter={() => setActiveId(item.id)}
                            >
                                <Link
                                    to={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-brand-off-white shadow-sm
                                        ${isActive ? 'bg-brand-cyan text-brand-primary-navy scale-110 shadow-md' :
                                            isPast ? 'bg-brand-primary-navy text-white' : 'bg-white text-brand-text-muted hover:bg-brand-bg-light hover:text-brand-primary-navy'}`}
                                >
                                    {isActive ? <Icon className="w-5 h-5" /> : <span className="font-bold text-sm tracking-tighter">{item.number}</span>}
                                </Link>

                                <span className={`text-sm font-bold transition-colors ${isActive ? 'text-brand-cyan' : isPast ? 'text-brand-primary-navy' : 'text-brand-text-muted group-hover:text-brand-primary-navy'}`}>
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Absolute Start Project CTA */}
            <Link
                to="/contact"
                onClick={() => setActiveMenu(null)}
                className="absolute top-6 right-10 bg-brand-cyan text-brand-primary-navy px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-brand-primary-navy hover:shadow-lg transition-all"
            >
                Start a Project &rarr;
            </Link>
        </div>
    );
};

export default ProcessMenu;
