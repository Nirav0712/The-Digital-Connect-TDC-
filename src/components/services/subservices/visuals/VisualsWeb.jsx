import React from 'react';
import { Layout, Server, Database, Lock, Box, Cpu, FileText, Settings, Layers, Globe, Webhook, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export const FrontendVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden flex flex-col relative z-20">
            {/* Browser Header */}
            <div className="h-12 border-b border-black/5 bg-[#F9F9F9] flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="mx-auto w-1/2 h-5 bg-white rounded-md border border-black/5"></div>
            </div>
            {/* Browser Body */}
            <div className="p-6 flex-1 bg-[#FAF9F7] flex flex-col gap-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                    <div className="w-24 h-6 bg-black/10 rounded-md"></div>
                    <div className="flex gap-4">
                        <div className="w-12 h-4 bg-black/5 rounded-full"></div>
                        <div className="w-12 h-4 bg-black/5 rounded-full"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
                <div className="flex gap-6 relative z-10">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-1/2 h-32 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-between">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500"><Layout size={20} /></div>
                        <div className="w-3/4 h-3 bg-black/10 rounded-full mt-4"></div>
                        <div className="w-1/2 h-3 bg-black/5 rounded-full mt-2"></div>
                    </motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-1/2 h-32 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-between">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-500"><Code size={20} /></div>
                        <div className="w-3/4 h-3 bg-black/10 rounded-full mt-4"></div>
                        <div className="w-1/2 h-3 bg-black/5 rounded-full mt-2"></div>
                    </motion.div>
                </div>
                <div className="w-full h-48 bg-white rounded-xl shadow-sm border border-black/5 mt-auto relative overflow-hidden flex items-end">
                    <div className="w-full flex items-end gap-2 px-4 pb-0 h-full pt-8">
                        {[40, 60, 30, 80, 50, 70, 90, 65].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.6 }} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-t-sm border-t border-blue-500/20"></motion.div>
                        ))}
                    </div>
                </div>
                <code className="absolute top-1/2 left-4 text-xs font-mono text-black/10 -rotate-90 origin-left select-none">{"<React.Component />"}</code>
            </div>
        </motion.div>
        {/* Floating Elements */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl border border-black/5 flex items-center justify-center z-30 text-blue-500">
            <Code size={32} />
        </motion.div>
    </div>
);

export const BackendVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-4 xl:p-8">
        <div className="w-full h-full bg-[#FAF9F7]/50 rounded-2xl border border-black/5 relative flex items-center justify-center p-8 overflow-hidden z-20 backdrop-blur-xl">
            <div className="relative w-full h-full flex flex-col items-center justify-between">

                {/* Client Layer */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="w-48 h-16 bg-white rounded-xl shadow-lg border border-black/5 flex items-center justify-center gap-3 z-20">
                    <Globe className="text-emerald-500" /> <span className="font-bold text-sm">Client App</span>
                </motion.div>

                <div className="w-full flex-1 relative flex items-center justify-center my-4">
                    {/* Animated Lines connecting layers */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        <motion.path d="M 50% 0 L 50% 100%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" strokeDasharray="6 6" fill="transparent" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
                        <motion.path d="M 50% 50% L 20% 100%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" strokeDasharray="6 6" fill="transparent" />
                        <motion.path d="M 50% 50% L 80% 100%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" strokeDasharray="6 6" fill="transparent" />
                    </svg>

                    {/* API Gateway */}
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="px-6 py-3 bg-emerald-500 text-white rounded-full font-bold shadow-xl shadow-emerald-500/20 z-20 flex items-center gap-2">
                        <Lock size={16} /> API Gateway
                    </motion.div>
                </div>

                {/* Microservices & DB */}
                <div className="flex w-full justify-between items-end gap-4 z-20">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="w-1/3 bg-white p-4 rounded-xl shadow-lg border border-black/5 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-3"><Server size={20} /></div>
                        <span className="text-xs font-bold text-neutral-800">Auth Service</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="w-1/3 bg-white p-4 rounded-xl shadow-lg border border-emerald-500/30 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5 z-0"></div>
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-3 z-10"><Database size={20} /></div>
                        <span className="text-xs font-bold text-emerald-900 z-10">Main DB</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} className="w-1/3 bg-white p-4 rounded-xl shadow-lg border border-black/5 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-3"><Box size={20} /></div>
                        <span className="text-xs font-bold text-neutral-800">Logic Core</span>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
);

export const CMSVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden flex z-20">
            {/* Sidebar */}
            <div className="w-[120px] bg-[#FAF9F7] border-r border-black/5 p-4 flex flex-col gap-6">
                <div className="w-8 h-8 bg-purple-500 rounded-lg mb-4"></div>
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`w-full h-8 rounded-lg flex items-center px-2 ${i === 2 ? 'bg-purple-100' : 'bg-transparent'}`}>
                            <div className={`w-full h-2 rounded-full ${i === 2 ? 'bg-purple-500' : 'bg-black/10'}`}></div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Main Area */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <div className="w-32 h-6 bg-black/10 rounded-md"></div>
                    <div className="bg-purple-500 text-white text-[10px] font-bold px-4 py-2 rounded-full">PUBLISH</div>
                </div>

                {/* Editor Content */}
                <div className="flex-1 border border-black/5 rounded-xl bg-[#FAF9F7]/50 p-6 flex flex-col gap-4 relative">
                    <div className="w-3/4 h-8 bg-black/10 rounded-md mb-4"></div>

                    <div className="w-full h-32 bg-purple-100/30 border border-purple-500/20 rounded-lg flex items-center justify-center mb-2 overflow-hidden relative">
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-100%] hover:translate-x-[200%] transition-transform"></motion.div>
                        <FileText className="text-purple-300 w-12 h-12" />
                    </div>

                    <div className="space-y-3 mt-4">
                        <div className="w-full h-2 bg-black/5 rounded-full"></div>
                        <div className="w-full h-2 bg-black/5 rounded-full"></div>
                        <div className="w-4/5 h-2 bg-black/5 rounded-full"></div>
                        <div className="w-full h-2 bg-black/5 rounded-full mt-4"></div>
                        <div className="w-2/3 h-2 bg-black/5 rounded-full"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const APIVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 border-[0.5px] border-black/5 opacity-50 z-0">
            {Array.from({ length: 36 }).map((_, i) => <div key={i} className="border-[0.5px] border-black/5"></div>)}
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center z-20">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] border border-dashed border-pink-500/30 rounded-full flex items-center justify-center">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -top-4 w-8 h-8 bg-white border border-pink-500/50 rounded-full shadow-lg flex items-center justify-center"><Database size={12} className="text-pink-500" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-4 w-8 h-8 bg-white border border-pink-500/50 rounded-full shadow-lg flex items-center justify-center"><Globe size={12} className="text-pink-500" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -left-4 w-8 h-8 bg-white border border-pink-500/50 rounded-full shadow-lg flex items-center justify-center"><Server size={12} className="text-pink-500" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-4 w-8 h-8 bg-white border border-pink-500/50 rounded-full shadow-lg flex items-center justify-center"><Code size={12} className="text-pink-500" /></motion.div>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-24 h-24 bg-pink-500 rounded-2xl shadow-xl shadow-pink-500/30 flex items-center justify-center text-white relative z-30">
                <Webhook size={40} />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-0 border-t border-black/10 -z-10 bg-black rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-0 border-t border-black/10 -z-10 bg-black -rotate-45"></div>

            {/* Packets */}
            <motion.div animate={{ x: [-150, 0], y: [-150, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} className="absolute w-2 h-2 bg-pink-500 rounded-full"></motion.div>
            <motion.div animate={{ x: [150, 0], y: [150, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }} className="absolute w-2 h-2 bg-pink-500 rounded-full"></motion.div>
        </div>
    </div>
);

export const CustomWebVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full h-full bg-[#1A1A1A] rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 z-20 relative border border-white/10">
            {/* Dark UI Dashboard */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg shadow-orange-500/20"></div>
                    <div className="w-24 h-4 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50"><Settings size={14} /></div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center"><Globe size={14} /></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-orange-400">
                        <Cpu size={20} />
                    </div>
                    <div className="w-16 h-3 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-24 h-6 bg-white/40 rounded-md"></div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-orange-400">
                        <Layers size={20} />
                    </div>
                    <div className="w-16 h-3 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-24 h-6 bg-white/40 rounded-md"></div>
                </div>
            </div>

            <div className="flex-1 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden flex items-end">
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M 0 100 L 0 50 Q 25 30 50 60 T 100 20 L 100 100 Z" fill="rgba(249, 115, 22, 0.1)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                    <motion.path d="M 0 50 Q 25 30 50 60 T 100 20" stroke="rgba(249, 115, 22, 0.8)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                </svg>
            </div>
        </motion.div>
    </div>
);
