import React from 'react';
import { Smartphone, Apple, Terminal, Play, Layers, Box, Cpu, SplitSquareHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export const IOSVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <motion.div initial={{ y: 20 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-[280px] h-[560px] bg-black rounded-[40px] shadow-2xl p-2 relative z-20 border-[4px] border-[#1F1F1F]">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-30"></div>
            <div className="w-full h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-[30px] overflow-hidden relative flex flex-col pt-12 pb-6 px-4">
                <div className="w-full flex justify-between items-center mb-6 text-white px-2">
                    <div className="w-16 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Apple size={12} /></div>
                </div>
                <div className="w-full h-32 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/20 mb-4 shadow-lg shadow-black/10">
                    <div className="w-10 h-10 bg-white/20 rounded-full mb-3 text-white flex items-center justify-center"><Smartphone size={18} /></div>
                    <div className="w-24 h-4 bg-white/40 rounded-full mb-2"></div>
                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="h-24 bg-white/10 rounded-2xl p-3 backdrop-blur-md border border-white/20">
                        <div className="w-16 h-3 bg-white/40 rounded-full mb-2 mt-10"></div>
                        <div className="w-10 h-2 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="h-24 bg-white/10 rounded-2xl p-3 backdrop-blur-md border border-white/20">
                        <div className="w-16 h-3 bg-white/40 rounded-full mb-2 mt-10"></div>
                        <div className="w-10 h-2 bg-white/20 rounded-full"></div>
                    </div>
                </div>
                <div className="mt-auto flex justify-center">
                    <div className="w-1/3 h-1 bg-white rounded-full"></div>
                </div>
            </div>
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-brand-cyan/10 rounded-full z-0 border-dashed"></motion.div>
    </div>
);

export const AndroidVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <motion.div initial={{ y: 20 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-[300px] h-[580px] bg-[#2D2D2D] rounded-[24px] shadow-2xl relative z-20 border-[3px] border-[#3D3D3D] flex items-center justify-center overflow-hidden">
            <div className="w-[98%] h-[99%] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[20px] overflow-hidden relative flex flex-col">
                {/* Status Bar */}
                <div className="h-6 w-full flex justify-between items-center px-4 text-brand-cyan border-b border-white/10">
                    <div className="text-[10px] font-bold">12:00</div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-brand-soft-blue/30"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-soft-blue/30"></div>
                    </div>
                </div>
                {/* Material Design Header */}
                <div className="p-6 bg-white shadow-md rounded-b-[24px] z-10 flex flex-col text-brand-cyan">
                    <div className="w-8 h-8 bg-brand-soft-blue/30 rounded-full items-center flex justify-center mb-4"><Terminal size={14} /></div>
                    <div className="w-32 h-6 bg-brand-soft-blue/30 rounded-md mb-2"></div>
                    <div className="w-20 h-3 bg-black/10 rounded-full mb-6"></div>
                    <div className="absolute right-6 -bottom-6 w-12 h-12 rounded-full bg-brand-soft-blue/30 shadow-lg text-white flex items-center justify-center border-4 border-white"><Play size={20} /></div>
                </div>
                {/* Content List */}
                <div className="p-4 pt-10 flex flex-col gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white/10 rounded-xl border border-white/20 p-3 flex gap-3 items-center backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-white/20 shrink-0"></div>
                            <div className="flex-col gap-1 w-full flex">
                                <div className="w-1/2 h-3 bg-white/40 rounded-full"></div>
                                <div className="w-1/4 h-2 bg-white/20 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-12">
                    <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[9px] border-transparent border-b-white/30 rotate-90"></div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const FlutterVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full z-0 opacity-50 blur-3xl"></div>
        <div className="w-full h-full relative z-20 flex flex-col items-center justify-center">

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-brand-cyan/20 rounded-xl shadow-lg border border-brand-cyan rotate-45 flex items-center justify-center mb-8"><Layers className="text-white -rotate-45" size={32} /></motion.div>

            <div className="flex w-full justify-between items-center relative mt-4">
                <svg className="absolute w-full h-32 top-0 left-0 -z-10 -translate-y-[80px]" style={{ zIndex: 0 }}>
                    <motion.path d="M 50% 0 Q 20% 50 15% 100%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    <motion.path d="M 50% 0 Q 50% 50 50% 100%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    <motion.path d="M 50% 0 Q 80% 50 85% 100%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                </svg>

                <div className="flex flex-col items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-16 h-16 bg-white shadow-xl rounded-2xl border border-black/5 flex items-center justify-center text-brand-cyan"><Box size={24} /></motion.div>
                    <span className="text-xs font-bold text-gray-400 mt-2">Widget</span>
                </div>
                <div className="flex flex-col items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }} className="w-16 h-16 bg-white shadow-xl rounded-2xl border border-black/5 flex items-center justify-center text-brand-cyan"><Terminal size={24} /></motion.div>
                    <span className="text-xs font-bold text-gray-400 mt-2">State</span>
                </div>
                <div className="flex flex-col items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 h-20 bg-brand-cyan/20 shadow-xl rounded-2xl border border-brand-cyan flex items-center justify-center text-brand-cyan"><Cpu size={32} /></motion.div>
                    <span className="text-xs font-bold text-gray-400 mt-2">Native Engine</span>
                </div>
            </div>

            <div className="w-full mt-12 bg-white rounded-xl shadow-sm border border-black/5 p-4 overflow-hidden relative">
                <code className="text-[10px] text-brand-cyan block">const App = () ={'>'} (</code>
                <code className="text-[10px] text-black/40 block ml-4">{'<MaterialApp>'}</code>
                <code className="text-[10px] text-black/40 block ml-8">{'<Scaffold>'}</code>
                <code className="text-[10px] text-black/40 block ml-12">{'<WidgetTree />'}</code>
                <code className="text-[10px] text-black/40 block ml-8">{'</Scaffold>'}</code>
                <code className="text-[10px] text-black/40 block ml-4">{'</MaterialApp>'}</code>
                <code className="text-[10px] text-brand-cyan block">);</code>
            </div>
        </div>
    </div>
);

export const ReactNativeVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center w-full z-20">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="px-8 py-4 bg-[#61DAFB] rounded-full shadow-lg text-black font-bold flex items-center gap-2 relative z-20">
                <Layers /> React Components
            </motion.div>

            <div className="h-16 w-[2px] bg-[#61DAFB]/30 relative z-10">
                <motion.div animate={{ y: [0, 64] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-full h-8 bg-[#61DAFB] opacity-50 blur-sm"></motion.div>
            </div>

            <div className="w-[80%] h-16 bg-white border border-black/10 rounded-2xl shadow-xl z-20 flex items-center justify-center gap-3 font-mono text-sm text-gray-500">
                <Cpu size={16} /> JavaScript Bridge
            </div>

            <div className="h-16 w-full flex justify-between absolute bottom-1/4 mt-4 px-12 top-1/2 pt-[90px] -z-10">
                <div className="w-[2px] h-[100px] bg-indigo-500/30 transform -rotate-45 translate-x-[120px] origin-top"></div>
                <div className="w-[2px] h-[100px] bg-brand-soft-blue/30/30 transform rotate-45 -translate-x-[120px] origin-top"></div>
            </div>

            <div className="flex justify-between w-full mt-16 px-8 z-20">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-32 h-32 bg-white rounded-[32px] shadow-lg border border-black/5 flex flex-col items-center justify-center">
                    <Apple className="text-indigo-500 mb-2" size={32} />
                    <div className="text-xs font-bold text-gray-600">iOS Native</div>
                </motion.div>
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="w-32 h-32 bg-white rounded-[32px] shadow-lg border border-black/5 flex flex-col items-center justify-center">
                    <Terminal className="text-brand-cyan mb-2" size={32} />
                    <div className="text-xs font-bold text-gray-600">Android Native</div>
                </motion.div>
            </div>
        </div>
    </div>
);

export const CrossPlatformVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center w-full z-20 h-full">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-56 h-56 bg-orange-50 rounded-full border-2 border-orange-200 flex items-center justify-center relative flex-col">
                <Code className="text-orange-500 mb-2" size={40} />
                <span className="font-extrabold text-orange-900 tracking-wide">ONE CODEBASE</span>
            </motion.div>

            <div className="w-full flex justify-between mt-8 relative">
                <svg className="absolute w-full h-[60px] -top-16 -z-10" style={{ zIndex: -10 }}>
                    <path d="M 50% 0 Q 15% 100 15% 100%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <path d="M 50% 0 Q 50% 100 50% 100%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <path d="M 50% 0 Q 85% 100 85% 100%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                </svg>

                <div className="w-1/3 flex flex-col items-center z-10 transition-transform hover:scale-110 cursor-pointer">
                    <div className="w-16 h-16 bg-white shadow-md rounded-xl border border-black/5 flex items-center justify-center text-brand-cyan mb-3"><Apple size={24} /></div>
                    <span className="text-xs font-bold text-gray-500">iOS</span>
                </div>
                <div className="w-1/3 flex flex-col items-center z-10 transition-transform hover:scale-110 cursor-pointer">
                    <div className="w-16 h-16 bg-white shadow-md rounded-xl border border-black/5 flex items-center justify-center text-brand-cyan mb-3"><Terminal size={24} /></div>
                    <span className="text-xs font-bold text-gray-500">Android</span>
                </div>
                <div className="w-1/3 flex flex-col items-center z-10 transition-transform hover:scale-110 cursor-pointer">
                    <div className="w-16 h-16 bg-white shadow-md rounded-xl border border-black/5 flex items-center justify-center text-brand-periwinkle mb-3"><SplitSquareHorizontal size={24} /></div>
                    <span className="text-xs font-bold text-gray-500">Web Dashboard</span>
                </div>
            </div>
        </div>
    </div>
);
