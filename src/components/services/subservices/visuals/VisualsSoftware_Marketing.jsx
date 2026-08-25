import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Layout, Zap, Pointer, Target, Layers, Component, Maximize, Database, Server, Cog, Workflow, BarChart2, MessageSquare, Megaphone, ArrowUpRight, MousePointerClick, ShieldCheck, Mail, LineChart, Cpu, Cloud, Building2, TerminalSquare, Globe } from 'lucide-react';

// SOFTWARE DEVELOPMENT VISUALS

export const CRMVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ y: 20 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity }} className="w-full h-full bg-[#18181B] rounded-3xl shadow-xl overflow-hidden relative border border-white/10 flex flex-col p-6 gap-4">
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center"><Building2 size={20} className="text-white" /></div>
                    <div>
                        <div className="text-white font-bold text-sm">CRM Hub</div>
                        <div className="text-white/40 text-[10px]">Active Pipelines</div>
                    </div>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 border border-white/10">342 Leads</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                {/* Column 1 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-3">
                    <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest pl-1">New</div>
                    {[1, 2, 3].map(i => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/10 p-3 rounded-lg border border-white/5 cursor-pointer">
                            <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                            <div className="w-2/3 h-2 bg-indigo-500/50 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
                {/* Column 2 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-3 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-2xl"></div>
                    <div className="text-[10px] text-brand-cyan uppercase font-bold tracking-widest pl-1">Closing</div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-400/30 cursor-pointer relative z-10">
                        <div className="w-full h-2 bg-indigo-200/50 rounded-full mb-2"></div>
                        <div className="w-2/3 h-2 bg-indigo-400 rounded-full"></div>
                    </motion.div>
                </div>
                {/* Column 3 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-3">
                    <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest pl-1">Won</div>
                    {[1].map(i => (
                        <div key={i} className="bg-brand-soft-blue/30/10 p-3 rounded-lg border border-brand-soft-blue/20">
                            <div className="w-full h-2 bg-brand-soft-blue/30/50 rounded-full mb-2"></div>
                            <div className="w-2/3 h-2 bg-brand-soft-blue/30 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
);

export const ERPVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full h-full relative z-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col p-6 relative overflow-hidden group hover:border-brand-cyan/50 transition-colors">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-cyan/20/10 blur-3xl rounded-full"></div>
                <div className="w-10 h-10 bg-brand-cyan/20/20 rounded-lg flex items-center justify-center mb-4"><Database size={20} className="text-brand-cyan" /></div>
                <div className="text-white font-bold text-sm mb-1">Central Ledger</div>
                <div className="text-slate-400 text-[10px]">Real-time transactional sync.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col p-6 relative overflow-hidden group hover:border-brand-soft-blue/50 transition-colors">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-soft-blue/30/10 blur-3xl rounded-full"></div>
                <div className="w-10 h-10 bg-brand-soft-blue/30/20 rounded-lg flex items-center justify-center mb-4"><Cog size={20} className="text-brand-cyan" /></div>
                <div className="text-white font-bold text-sm mb-1">Procurement</div>
                <div className="text-slate-400 text-[10px]">Automated vendor routing.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col p-6 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4"><Workflow size={20} className="text-orange-400" /></div>
                <div className="text-white font-bold text-sm mb-1">HR & Payroll</div>
                <div className="text-slate-400 text-[10px]">Compliance & shift logic.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col p-6 relative overflow-hidden group hover:border-brand-periwinkle/50 transition-colors">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-periwinkle/30/10 blur-3xl rounded-full"></div>
                <div className="w-10 h-10 bg-brand-periwinkle/30/20 rounded-lg flex items-center justify-center mb-4"><BarChart2 size={20} className="text-brand-periwinkle" /></div>
                <div className="text-white font-bold text-sm mb-1">Intelligence</div>
                <div className="text-slate-400 text-[10px]">Global forecasting matrix.</div>
            </motion.div>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center shadow-2xl z-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Server size={24} className="text-white/80" />
            </motion.div>
        </div>
    </div>
);

export const SaaSVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 p-8 flex flex-col">
            <div className="w-full h-12 border-b border-slate-100 flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-brand-cyan/20 rounded-lg"></div>
                <div className="flex gap-4 flex-1">
                    <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-24 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 border border-slate-200">Upgrade Plan</div>
            </div>

            <div className="flex gap-6 flex-1">
                <div className="w-1/3 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                    <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-col gap-2 relative overflow-hidden">
                        <div className="absolute bottom-0 w-full h-1 bg-brand-cyan/20"></div>
                        <span className="text-2xl font-bold font-heading text-slate-800">42.8k</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Users</span>
                    </div>
                    <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-col gap-2">
                        <span className="text-2xl font-bold font-heading text-slate-800">$18k</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">MRR</span>
                    </div>
                </div>
                <div className="flex-1 bg-white border border-slate-100 shadow-xl shadow-blue-500/5 rounded-2xl relative overflow-hidden p-6 flex flex-col justify-end gap-2">
                    <div className="absolute top-6 left-6 text-sm font-bold text-slate-700">Growth Trajectory</div>
                    <div className="flex items-end justify-between w-full h-40 gap-2">
                        {[20, 30, 25, 40, 35, 60, 50, 80, 75, 100].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="w-full bg-brand-cyan/20 rounded-t-sm"></motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const BusinessAutomationVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full relative z-20 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.path d="M 100 100 L 300 300 L 500 100" stroke="rgba(234, 88, 12, 0.2)" strokeWidth="2" fill="none" strokeDasharray="5 5" animate={{ strokeDashoffset: -100 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
                <motion.path d="M 100 300 L 300 300 L 500 300" stroke="rgba(234, 88, 12, 0.2)" strokeWidth="2" fill="none" strokeDasharray="5 5" animate={{ strokeDashoffset: 100 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
            </svg>

            <div className="col-start-1 row-start-1 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 z-10 hover:shadow-orange-500/20 transition-all">
                <Mail size={24} className="text-orange-500" />
                <div className="text-[10px] font-bold text-slate-600">Email Trigger</div>
            </div>

            <div className="col-start-3 row-start-1 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 z-10 hover:shadow-orange-500/20 transition-all">
                <Database size={24} className="text-brand-cyan" />
                <div className="text-[10px] font-bold text-slate-600">Parser Logic</div>
            </div>

            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="col-start-2 row-start-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center gap-2 z-20 shadow-orange-500/30">
                <Cog size={32} className="text-orange-500" />
                <div className="text-[10px] font-bold text-white uppercase tracking-widest text-center">Zapier / Make<br />Core Node</div>
            </motion.div>

            <div className="col-start-1 row-start-3 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 z-10 hover:shadow-orange-500/20 transition-all">
                <MessageSquare size={24} className="text-brand-cyan" />
                <div className="text-[10px] font-bold text-slate-600">Slack Alert</div>
            </div>

            <div className="col-start-3 row-start-3 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 z-10 hover:shadow-orange-500/20 transition-all">
                <Server size={24} className="text-brand-periwinkle" />
                <div className="text-[10px] font-bold text-slate-600">CRM Post</div>
            </div>
        </div>
    </div>
);

export const APIVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full bg-[#111111] rounded-3xl shadow-xl overflow-hidden relative border border-white/10 p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="px-3 py-1 bg-white/10 rounded font-mono text-[10px] text-green-400">POST /api/v1/auth/token</div>
            </div>

            <div className="flex-1 bg-black/50 border border-white/5 rounded-xl p-6 font-mono text-xs text-white/70 overflow-hidden relative">
                <motion.div initial={{ y: 0 }} animate={{ y: -50 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                    <div className="text-brand-cyan">{"{"}</div>
                    <div className="pl-4"><span className="text-brand-periwinkle">"status"</span>: <span className="text-brand-cyan">200</span>,</div>
                    <div className="pl-4"><span className="text-brand-periwinkle">"data"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-brand-periwinkle">"uid"</span>: <span className="text-yellow-400">"usr_9f82kd"</span>,</div>
                    <div className="pl-8"><span className="text-brand-periwinkle">"access_token"</span>: <span className="text-yellow-400">"eyJhbGciOiJIUzI1NiIsIn..."</span>,</div>
                    <div className="pl-8"><span className="text-brand-periwinkle">"permissions"</span>: [</div>
                    <div className="pl-12 text-yellow-400">"read:users"</div>
                    <div className="pl-12 text-yellow-400">"write:database"</div>
                    <div className="pl-8">]</div>
                    <div className="pl-4">{"}"}</div>
                    <div className="text-brand-cyan">{"}"}</div>
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
            </div>

            <div className="flex gap-4">
                <div className="px-4 py-2 bg-brand-soft-blue/30/10 border border-brand-soft-blue/30 rounded text-brand-cyan text-[10px] font-bold flex items-center gap-2"><ShieldCheck size={12} /> OAUTH 2.0</div>
                <div className="px-4 py-2 bg-brand-cyan/20/10 border border-brand-cyan/30 rounded text-brand-cyan text-[10px] font-bold flex items-center gap-2"><Globe size={12} /> GRAPHQL</div>
            </div>
        </div>
    </div>
);


// DIGITAL MARKETING VISUALS

export const SEOVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div className="text-xl font-bold font-heading text-slate-800 flex items-center gap-2"><Search className="text-brand-cyan" /> Organic Traffic</div>
                <div className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-bold font-mono">SERP Pos: #1</div>
            </div>

            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl flex items-end px-6 gap-3 pb-0 pt-10 relative overflow-hidden">
                <div className="absolute top-4 left-6 text-2xl font-black text-slate-800">482,000</div>
                <div className="absolute top-12 left-6 text-[10px] font-bold text-green-500 uppercase flex items-center gap-1"><ArrowUpRight size={12} /> 245% YOY</div>

                {[10, 15, 25, 45, 60, 85, 75, 95].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className={`flex-1 rounded-t-md ${i === 7 ? 'bg-brand-cyan/20' : 'bg-brand-cyan/20'} border-t border-brand-cyan/20`}></motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Domain Auth</div>
                    <div className="text-xl font-bold text-slate-800">DA 84</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Core Vitals</div>
                    <div className="text-xl font-bold text-brand-cyan">99 / 100</div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const PPCVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full bg-[#FAFAFA] rounded-3xl shadow-xl overflow-hidden relative border border-slate-200 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
                <div className="w-32 h-6 bg-slate-200 rounded-full"></div>
                <div className="w-24 h-6 bg-orange-100 rounded-full flex items-center justify-center text-[10px] font-bold text-orange-600">Active Campaign</div>
            </div>

            {/* Google Search Mock */}
            <motion.div whileHover={{ scale: 1.02 }} className="w-full bg-white border border-slate-200 shadow-lg rounded-xl p-5 cursor-pointer relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan/20"></div>
                <div className="flex gap-2 items-center mb-2">
                    <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">Ad</span>
                    <span className="text-xs text-slate-500">https://yourdomain.com/landing</span>
                </div>
                <div className="text-lg font-medium text-brand-cyan hover:underline mb-1">Enterprise B2B Software Solutions | Maximize Conversions</div>
                <div className="text-sm text-slate-600 line-clamp-2">Our highly optimized custom software architecture scales identically with your business demands. Connect with our dedicated internal sales team today.</div>
            </motion.div>

            <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">CPC</div>
                    <div className="text-lg font-bold text-slate-800">$2.45</div>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">CTR</div>
                    <div className="text-lg font-bold text-brand-cyan">12.4%</div>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">ROAS</div>
                    <div className="text-lg font-bold text-brand-cyan">4.5x</div>
                </div>
            </div>
        </div>
    </div>
);

export const SocialMediaVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full relative z-20 flex gap-6">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="flex-1 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col relative z-20">
                <div className="h-40 bg-gradient-to-br from-pink-500 to-purple-600"></div>
                <div className="px-6 relative pb-6 flex-1 flex flex-col justify-between">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg -mt-8 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-slate-200"></div>
                    </div>
                    <div className="h-4 w-32 bg-slate-200 rounded-full mt-3"></div>
                    <div className="h-2 w-24 bg-slate-100 rounded-full mt-2 mb-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-auto">
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                    </div>
                </div>
            </motion.div>

            <div className="w-[180px] flex flex-col gap-4 relative z-10 pt-10">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-electric-cyan/20 rounded-full flex items-center justify-center text-brand-electric-cyan"><Megaphone size={16} /></div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Reach</div>
                        <div className="font-bold text-slate-800 text-sm">2.4M</div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-periwinkle/30 rounded-full flex items-center justify-center text-brand-periwinkle"><MessageSquare size={16} /></div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Engagement</div>
                        <div className="font-bold text-slate-800 text-sm">18.2%</div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-electric-cyan/20/10 rounded-full blur-3xl -z-10"></div>
        </div>
    </div>
);

export const ContentMarketingVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full bg-[#FAF9F7] rounded-3xl shadow-xl overflow-hidden relative border border-slate-200/60 p-8 flex gap-6">
            <div className="w-48 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm relative z-20">
                <div className="w-full h-24 bg-slate-100 rounded-xl border border-slate-200 flex flex-col justify-end p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-brand-cyan/20 border border-brand-cyan rounded-xl flex flex-col justify-end p-3 hover:bg-brand-cyan/20 cursor-pointer transition-colors">
                    <div className="w-full h-2 bg-brand-cyan/20 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-brand-cyan/20 rounded-full"></div>
                </div>
                <div className="w-full h-24 bg-slate-100 rounded-xl border border-slate-200 flex flex-col justify-end p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                </div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-lg p-8 relative flex flex-col z-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20/50 rounded-bl-3xl"></div>
                <div className="w-full h-4 bg-slate-200 rounded-full mb-4"></div>
                <div className="w-3/4 h-4 bg-slate-200 rounded-full mb-8"></div>

                <div className="w-full h-40 bg-slate-50 rounded-xl border border-slate-100 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-cyan/20/10"></div>
                </div>

                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-2"></div>
                <div className="w-4/5 h-2 bg-slate-100 rounded-full mb-2"></div>

                <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-4">
                    <button className="px-4 py-2 bg-brand-cyan/20 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-500/20">Publish Article</button>
                    <div className="text-[10px] text-green-500 font-bold bg-green-50 px-2 py-1 rounded">SEO Score: 98/100</div>
                </div>
            </div>
        </motion.div>
    </div>
);

export const PerformanceMarketingVisual = () => (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-8 z-20">
        <div className="w-full h-full bg-[#1A1A1A] rounded-3xl shadow-2xl relative border border-white/5 p-8 flex flex-col overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black -z-10"></div>

            <div className="flex justify-between items-center mb-8">
                <div className="text-white font-bold font-heading text-lg">Omnichannel Performance</div>
                <div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-mono">Live Data</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest mb-1">CPA (Blended)</div>
                    <div className="text-3xl font-light text-white">$14.50</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest mb-1">Total Conversions</div>
                    <div className="text-3xl font-light text-brand-cyan">14,204</div>
                </div>
            </div>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden flex items-end pt-8">
                <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M 0 100 Q 25 20 50 80 T 100 20 L 100 100 Z" fill="rgba(99, 102, 241, 0.2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                    <motion.path d="M 0 100 Q 25 20 50 80 T 100 20" fill="none" stroke="rgba(99, 102, 241, 1)" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" animate={{ strokeDashoffset: 0 }} transition={{ duration: 2, ease: "easeInOut" }} />
                </svg>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-white/30 font-mono">
                    <span>Oct 1</span> <span>Oct 15</span> <span>Oct 31</span>
                </div>
            </div>
        </div>
    </div>
);
