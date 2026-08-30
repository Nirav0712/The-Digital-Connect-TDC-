import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, UserSquare2, Code2, Server, Layout, Database } from 'lucide-react';

const icons = [Terminal, UserSquare2, Code2, Server, Layout, Database];

const HireTeamMenu = ({ data, setActiveMenu }) => {
    const [activeId, setActiveId] = useState(data.items[0].id);

    useEffect(() => {
        if (data.items && data.items.length > 0) {
            setActiveId(data.items[0].id);
        }
    }, [data]);

    const currentItem = data.items.find(i => i.id === activeId) || data.items[0];

    return (
        <div className="flex w-full h-[520px]">
            {/* Left Category Selection */}
            <div className="w-[340px] shrink-0 bg-brand-primary-navy p-6 flex flex-col gap-1 shadow-lg relative z-20">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/50 mb-4 px-3">Hire Dedicated Experts</h4>

                {data.items.map((item, index) => {
                    const isActive = activeId === item.id;
                    const Icon = icons[index % icons.length];

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className="w-full"
                        >
                            <Link
                                to={item.href}
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-brand-cyan text-brand-primary-navy shadow-md' : 'text-white hover:bg-white/10'}`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-brand-primary-navy' : 'text-brand-cyan opacity-70'}`} />
                                <span className="text-sm font-semibold">
                                    {item.label}
                                </span>
                                {isActive && <ArrowRight className="w-4 h-4 ml-auto" />}
                            </Link>
                        </div>
                    );
                })}

                <div className="mt-auto px-4 py-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs text-white/70 mb-3 leading-relaxed">
                        Scale your delivery capacity with our pre-vetted senior engineering talent.
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => setActiveMenu(null)}
                        className="text-brand-cyan text-sm font-bold flex items-center gap-1 hover:text-white transition-colors"
                    >
                        Request Developer Profiles &rarr;
                    </Link>
                </div>
            </div>

            {/* Right Directory */}
            <div className="flex-1 bg-white p-10 flex flex-col relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col h-full w-full max-w-4xl"
                    >
                        <div className="flex items-center justify-between border-b border-brand-border pb-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-heading font-extrabold text-brand-primary-navy">
                                    {currentItem.label}
                                </h3>
                                <p className="text-brand-text-muted mt-1 text-sm">
                                    Select a role to view expertise, tech stack, and engagement models.
                                </p>
                            </div>

                            <Link
                                to={currentItem.href}
                                onClick={() => setActiveMenu(null)}
                                className="px-5 py-2.5 bg-brand-bg-light border border-brand-border rounded-full text-sm font-bold text-brand-primary-navy hover:bg-brand-primary-navy hover:text-white hover:border-brand-primary-navy transition-all"
                            >
                                View All Category Roles
                            </Link>
                        </div>

                        {/* Dense Directory Grid */}
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 overflow-y-auto pr-2 pb-4 styled-scrollbar">
                            {currentItem.roles?.map((role, idx) => (
                                <Link
                                    key={idx}
                                    to={role.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group p-3 border border-brand-border rounded-lg bg-white hover:bg-brand-cyan/5 hover:border-brand-cyan/40 transition-all flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-brand-bg-light flex items-center justify-center shrink-0 group-hover:bg-brand-cyan text-brand-text-muted group-hover:text-brand-primary-navy transition-colors">
                                        <Code2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-brand-primary-navy/80 group-hover:text-brand-primary-navy transition-colors line-clamp-2">
                                        {role.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HireTeamMenu;
