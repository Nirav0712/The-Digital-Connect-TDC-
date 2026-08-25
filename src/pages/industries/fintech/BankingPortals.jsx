import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BankingPortals = () => {
    useSEO({
        title: "Digital Banking Portals & Interfaces | The Digital Connect",
        description: "Secure, intuitive retail and corporate digital banking portals tailored for modern financial institutions."
    });

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                
                {/* BREADCRUMBS */}
                <div className="pt-[90px] lg:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/industries" className="hover:text-[#08BFE8] transition-colors">Industries</Link>
                    <ChevronRight size={14} />
                    <Link to="/industries/fintech" className="hover:text-[#08BFE8] transition-colors capitalize">fintech</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold">BANKING PORTALS</span>
                </div>

                {/* HERO */}
                <section className="py-12 md:py-20 px-5 max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                            BANKING PORTALS
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,6vw,64px)] font-heading font-black text-[#061B2E] leading-tight mb-6">
                            Digital banking interfaces engineered for security and scale.
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-10">
                            Transform complex account management into seamless customer dashboards, combining airtight security with consumer-grade user experience.
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/20">
                                Discuss Your Project <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full flex justify-center lg:justify-end">
                        
            <div className="w-full flex gap-4 overflow-hidden py-10 relative">
                <motion.div animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="w-64 h-64 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 flex flex-col justify-between z-20 relative">
                   <div className="w-12 h-12 bg-[#EAF8FC] rounded-xl flex items-center justify-center text-[#08BFE8]">✦</div>
                   <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                   <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                </motion.div>
                <motion.div animate={{ x: [20, -20, 20], y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="w-64 h-64 bg-[#08BFE8] text-white rounded-3xl shadow-xl p-6 border border-[#08BFE8] flex flex-col justify-end z-10 -ml-16 mt-16 scale-90">
                   <div className="font-bold text-lg mb-2">Engaged</div>
                   <div className="h-1 bg-white/30 rounded-full w-full"></div>
                </motion.div>
            </div>
                    </div>
                </section>

                {/* WHY IT MATTERS / CHALLENGES */}
                <section className="bg-[#061B2E] text-white py-20 lg:py-32 px-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto relative z-10">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-[clamp(32px,5vw,48px)] font-heading font-black mb-6">Solving complex industry roadblocks.</h2>
                            <p className="text-[#7F94A8] text-lg leading-relaxed">
                                Standing out requires moving past legacy constraints. We remove technical debt and build modern systems designed entirely for scale and user satisfaction.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={24} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Account Aggregation</h3>
                                <p className="text-[#7F94A8] text-sm">Essential architecture engineered for optimal performance.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={24} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Transaction History</h3>
                                <p className="text-[#7F94A8] text-sm">Essential architecture engineered for optimal performance.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={24} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Secure Auth</h3>
                                <p className="text-[#7F94A8] text-sm">Essential architecture engineered for optimal performance.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={24} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Money Transfers</h3>
                                <p className="text-[#7F94A8] text-sm">Essential architecture engineered for optimal performance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERTISE & CAPABILITIES */}
                <section className="py-20 lg:py-32 px-5 max-w-[1320px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[clamp(32px,5vw,48px)] font-heading font-black text-[#061B2E] mb-6">Banking Capabilities</h2>
                        <p className="text-[#7F94A8] text-lg">We deliver end-to-end digital excellence merging strategic foresight with flawless engineering.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow lg:col-span-2">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Strategic Architecture</h3>
                           <p className="text-[#7F94A8] leading-relaxed mb-6">Every successful deployment starts with an airtight architectural blueprint. We map out data flows, user journeys, and component integration strategies before writing a single line of code.</p>
                           <ul className="space-y-3 font-medium text-[#061B2E]">
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Scalable cloud infrastructure</li>
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Bulletproof security protocols</li>
                              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#08BFE8] mr-3"></div> Seamless API integrations</li>
                           </ul>
                        </div>
                        <div className="bg-[#EAF8FC] rounded-3xl p-10 shadow-md border border-[#08BFE8]/20 flex flex-col justify-center">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Why Partner With Us?</h3>
                           <p className="text-[#061B2E]/80 leading-relaxed font-medium">We deliver software that actually impacts your bottom line, built by senior engineers who act as an extension of your own team.</p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-20 px-5 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.03] bg-[size:24px_24px]"></div>
                     <div className="max-w-2xl mx-auto relative z-10 text-white">
                         <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black mb-8 leading-tight">Ready to elevate your digital presence?</h2>
                         <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                             Let's discuss your project <ArrowRight size={20} className="ml-2" />
                         </Link>
                     </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default BankingPortals;
