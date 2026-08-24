import React from 'react';
import { motion } from 'framer-motion';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Component, Layers, Maximize, Target, ShoppingBag, ChevronRight, ShoppingCart, CreditCard, Store, BarChart3, LockKeyhole, Database, Globe, LayoutDashboard } from 'lucide-react';

export const UXResearchVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ rotate: -5 }} animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full h-full bg-[#FAF9F7] rounded-3xl shadow-xl overflow-hidden relative border border-black/5 p-8 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-4 shadow-sm border border-black/5 rounded-xl">
                    <User className="text-purple-500 mb-2" size={24} />
                    <div className="w-20 h-3 bg-black/10 rounded-full mb-2"></div>
                    <div className="w-12 h-2 bg-black/5 rounded-full"></div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-purple-50 p-4 shadow-sm border border-purple-100 rounded-xl">
                    <Target className="text-purple-600 mb-2" size={24} />
                    <div className="w-20 h-3 bg-purple-200 rounded-full mb-2"></div>
                    <div className="w-16 h-2 bg-purple-200/50 rounded-full"></div>
                </motion.div>
            </div>
            {/* Journey Map */}
            <div className="w-full mt-8 bg-white border border-black/5 rounded-xl p-6 relative">
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-purple-200 -z-10"></div>
                <div className="flex justify-between relative z-10">
                    {[1, 2, 3, 4].map(i => (
                        <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }} className="w-8 h-8 rounded-full bg-purple-500 shadow-md border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">{i}</motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-32 h-32 bg-peach-200/50 rounded-full blur-2xl -bottom-10 -right-10"></motion.div>
    </div>
);

export const WireframingVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border-2 border-gray-100 p-6 flex flex-col">
            <div className="w-full h-full border border-dashed border-gray-300 rounded-xl relative p-4 grid grid-rows-[auto_1fr_auto] gap-4">
                <div className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-between px-4">
                    <div className="w-8 h-8 rounded-full border border-gray-200"></div>
                    <div className="flex gap-2">
                        <div className="w-12 h-3 bg-gray-100 rounded-full"></div>
                        <div className="w-12 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                </div>
                <div className="w-full h-full border border-gray-200 bg-gray-50 flex flex-col items-center justify-center p-8 rounded-lg gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                    <div className="w-48 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-32 h-4 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <motion.div animate={{ x: [0, 50, 0], y: [0, 50, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute top-1/3 left-1/3 text-blue-500 z-30">
                <Pointer size={24} fill="currentColor" />
            </motion.div>
        </motion.div>
    </div>
);

export const PrototypingVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-6 z-20">
        <div className="w-full h-full flex justify-between items-center relative">
            <svg className="absolute w-full h-[60px] top-1/2 -z-10 -translate-y-1/2">
                <motion.path d="M 0 30 Q 50% 0 100% 30" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" fill="none" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
            </svg>
            <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-[45%] h-[80%] bg-white rounded-[24px] shadow-lg border border-black/5 overflow-hidden flex flex-col">
                <div className="h-10 bg-blue-50"></div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                    <div className="w-full h-24 bg-gray-100 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer border border-transparent hover:border-blue-300"></div>
                    <div className="w-full h-24 bg-gray-100 rounded-xl"></div>
                </div>
            </motion.div>
            <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="w-[45%] h-[90%] bg-white rounded-[24px] shadow-2xl border border-blue-500/20 overflow-hidden flex flex-col relative scale-[1.05] z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>
                <div className="h-48 bg-blue-500 flex items-center justify-center"><Zap className="text-white" size={32} /></div>
                <div className="p-6">
                    <div className="w-3/4 h-4 bg-gray-200 rounded-full mb-3"></div>
                    <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                </div>
            </motion.div>
        </div>
    </div>
);

export const UIDesignVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-black/5 p-6 flex gap-6">
            <div className="w-1/3 flex flex-col gap-4">
                <div className="p-4 bg-pink-50 rounded-xl flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                    <span className="font-bold text-xs text-pink-700">Primary</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    <span className="font-bold text-xs text-blue-700">Info</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-xl flex items-center gap-3">
                    <div className="font-serif font-bold text-lg">Aa</div>
                    <span className="font-bold text-xs text-gray-500">Manrope</span>
                </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl border border-black/5 p-4 flex flex-col justify-between">
                <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-3"><Palette size={16} /></div>
                    <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-2/3 h-3 bg-gray-100 rounded-full"></div>
                </div>
                <button className="w-full py-3 bg-pink-500 text-white rounded-xl shadow-md shadow-pink-500/20 font-bold text-sm hover:scale-105 transition-transform">
                    Interactive Button
                </button>
            </div>
        </motion.div>
    </div>
);

export const DesignSystemsVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full relative z-20">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-md border border-black/5 p-6 flex flex-col items-center justify-center gap-3">
                <div className="px-4 py-2 bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg">Token</div>
                <code className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">--color-primary</code>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-md border border-black/5 p-6 flex items-center justify-center">
                <button className="px-6 py-3 bg-[#111111] text-white rounded-lg shadow-xl font-bold flex items-center gap-2"><Component size={16} /> Button</button>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl shadow-md border border-black/5 p-4 flex flex-col gap-2">
                <div className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-4"> <div className="w-4 h-4 rounded-full bg-gray-300"></div> </div>
                <div className="w-full h-12 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center px-4 shadow-inner"> <div className="w-4 h-4 rounded-full bg-emerald-500"></div> </div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-[#FAF9F7] rounded-2xl shadow-inner border border-black/10 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <Layers className="text-gray-300 w-24 h-24 absolute -right-4 -bottom-4" />
                <span className="font-extrabold text-sm text-gray-500 z-10 w-full text-center">Documentation<br />Library</span>
            </motion.div>
        </div>
    </div>
);

export const ShopifyVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-6 z-20">
        <motion.div initial={{ y: 10 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity }} className="w-full h-full bg-[#F5F8F7] rounded-3xl shadow-xl overflow-hidden border border-[#D5E5DF] flex flex-col relative z-20">
            <div className="h-16 bg-white border-b border-[#D5E5DF] flex justify-between items-center px-6">
                <div className="w-24 h-6 bg-[#E8F3EE] rounded-md"></div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center"><Search size={14} className="text-emerald-700" /></div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white"><ShoppingBag size={14} /></div>
                </div>
            </div>
            <div className="w-full h-40 bg-emerald-50 flex items-center px-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
                <div className="z-10">
                    <div className="w-32 h-4 bg-emerald-700/20 rounded-full mb-3"></div>
                    <div className="w-48 h-8 bg-emerald-800 rounded-md mb-4"></div>
                    <div className="w-24 h-8 bg-emerald-600 rounded-full"></div>
                </div>
            </div>
            <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                {[1, 2].map(i => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-[#D5E5DF] p-3 flex flex-col cursor-pointer hover:shadow-md hover:border-emerald-300 transition-all">
                        <div className="w-full h-24 bg-gray-50 rounded-lg mb-3"></div>
                        <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-2"></div>
                        <div className="w-1/3 h-4 bg-emerald-600 rounded-full"></div>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
);

export const WooCommerceVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full bg-[#1A1A1A] rounded-2xl shadow-2xl flex border border-white/10 overflow-hidden relative">
            <div className="w-[140px] bg-[#2A2A2A] p-4 flex flex-col gap-2">
                <div className="w-full h-8 mb-4 flex items-center gap-2 text-white font-bold"><Store size={16} /> WOO</div>
                {['Home', 'Orders', 'Products', 'Analytics', 'Marketing'].map((t, i) => (
                    <div key={i} className={`w-full py-2 px-3 rounded-lg text-[10px] font-semibold text-white/70 ${i === 1 ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-white/5'}`}>{t}</div>
                ))}
            </div>
            <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="w-32 h-6 bg-white/10 rounded-md"></div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 border border-white/10 flex items-center gap-1">Today <ChevronRight size={10} /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
                        <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Total Sales</div>
                        <div className="text-white font-heading font-bold text-xl">$12,450</div>
                        <div className="absolute right-0 bottom-0 w-16 h-16 bg-purple-500/20 blur-xl"></div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
                        <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Orders</div>
                        <div className="text-white font-heading font-bold text-xl">184</div>
                        <div className="absolute right-0 bottom-0 w-16 h-16 bg-blue-500/20 blur-xl"></div>
                    </div>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl flex items-end px-4 gap-2 pb-0 pt-8 relative">
                    {[30, 70, 50, 90, 60, 40, 80].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex-1 bg-gradient-to-t from-purple-500/40 to-purple-500/5 rounded-t-sm border-t border-purple-500/50"></motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const CustomEcommerceVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full relative grid grid-cols-2 grid-rows-2 gap-6 z-20">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <path d="M 150 150 L 400 150 L 400 350 L 150 350 Z" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                <motion.circle cx="150" cy="150" r="4" fill="#F97316" animate={{ cx: [150, 400, 400, 150, 150], cy: [150, 150, 350, 350, 150] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
            </svg>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0 }} className="bg-white rounded-2xl shadow-xl border border-black/5 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer">
                <Store className="text-orange-500 w-12 h-12 mb-3" />
                <span className="font-bold text-gray-700">Digital Catalog</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-xl border border-black/5 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer">
                <ShoppingCart className="text-emerald-500 w-12 h-12 mb-3" />
                <span className="font-bold text-gray-700">Cart Node</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl shadow-xl border border-black/5 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer">
                <CreditCard className="text-blue-500 w-12 h-12 mb-3" />
                <span className="font-bold text-gray-700">Payment Gateway</span>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white rounded-2xl shadow-xl border border-black/5 flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform cursor-pointer">
                <Database className="text-purple-500 w-12 h-12 mb-3" />
                <span className="font-bold text-gray-700">Order Logic Main</span>
            </motion.div>
        </div>
    </div>
);

export const PaymentIntegrationVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ y: 20 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-full max-w-[320px] bg-white rounded-3xl shadow-2xl relative border border-black/5 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative overflow-hidden">
                <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></motion.div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                    <LockKeyhole size={20} className="opacity-80" />
                    <span className="font-semibold text-xs tracking-widest opacity-80">SECURE CHECKOUT</span>
                </div>
                <div className="text-3xl font-bold font-heading mb-1 relative z-10">$1,450.00</div>
                <div className="text-xs opacity-70 relative z-10">Order #88921</div>
            </div>
            <div className="p-6 flex flex-col gap-4">
                <div className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-4 gap-3">
                    <CreditCard size={16} className="text-gray-400" />
                    <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-4 justify-between">
                    <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <button className="w-full py-4 mt-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 text-white font-bold text-sm flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors">
                    Pay Now <LockKeyhole size={14} />
                </button>
            </div>
        </motion.div>
    </div>
);

export const MarketplaceVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="flex flex-col items-center justify-center w-full h-full">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-40 h-40 bg-pink-500 rounded-3xl shadow-xl shadow-pink-500/20 flex flex-col items-center justify-center text-white z-20 relative border border-pink-400">
                <Store size={40} className="mb-2" />
                <span className="font-extrabold tracking-widest text-[10px]">MARKETPLACE</span>
            </motion.div>

            <div className="h-24 w-[2px] bg-black/10 relative -z-10 -mt-2 mb-2">
                <motion.div animate={{ y: [0, 90] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 rounded-full bg-pink-500 absolute -left-[7px]"></motion.div>
            </div>

            <div className="flex justify-between w-full relative z-20 px-8">
                <div className="absolute w-[calc(100%-4rem)] top-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-black/10 -z-10"></div>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-28 h-28 bg-white rounded-2xl shadow-lg border border-black/5 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all">
                    <User className="text-blue-500 mb-2" size={28} />
                    <div className="text-xs font-bold text-gray-600">Buyer</div>
                </motion.div>
                <div className="w-28 h-10 bg-white/50 rounded-full flex items-center justify-center border border-black/5 text-[10px] font-bold text-pink-500 shadow-sm backdrop-blur-sm self-center">Smart Router</div>
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-28 h-28 bg-white rounded-2xl shadow-lg border border-black/5 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all">
                    <Store className="text-emerald-500 mb-2" size={28} />
                    <div className="text-xs font-bold text-gray-600">Vendor</div>
                </motion.div>
            </div>
        </div>
    </div>
);
