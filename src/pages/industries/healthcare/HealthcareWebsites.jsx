import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HealthcareWebsites = () => {
    useSEO({
        title: "Healthcare Website Design & Development | The Digital Connect",
        description: "Custom medical, hospital and clinic website development."
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
                    <Link to="/industries/healthcare" className="hover:text-[#08BFE8] transition-colors capitalize">healthcare</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">HEALTHCARE WEBSITES</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-12 lg:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] gap-10 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            HEALTHCARE WEBSITES
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(32px,4.5vw,56px)] font-heading font-black text-[#061B2E] leading-[1.1] text-balance">
                            Digital front doors for modern medical institutions.
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed text-pretty max-w-2xl">
                            Craft highly accessible, compliant, and SEO-optimized web presences tailored for hospitals and clinics.
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="pt-2">
                            <Link to="/contact" className="inline-flex bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold items-center hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/20">
                                Discuss Your Project <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full overflow-hidden lg:overflow-visible flex items-center justify-center lg:justify-end z-0">
                        
                <div className="w-full h-[350px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                         <div className="ml-4 w-40 h-4 bg-white border border-gray-200 rounded-md"></div>
                    </div>
                    <div className="flex-1 bg-white p-6 relative overflow-hidden flex gap-6">
                         <div className="w-1/3 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2"></div>
                              <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                              <div className="h-2 w-2/3 mx-auto bg-gray-200 rounded-full"></div>
                         </div>
                         <div className="flex-1 flex flex-col gap-4">
                              <motion.div animate={{ width: ['40%', '80%', '40%'] }} transition={{ duration: 5, repeat: Infinity }} className="h-8 bg-[#08BFE8]/10 rounded-lg"></motion.div>
                              <div className="h-4 w-full bg-gray-50 rounded-full mt-2"></div>
                              <div className="h-4 w-[90%] bg-gray-50 rounded-full"></div>
                              <div className="h-4 w-[85%] bg-gray-50 rounded-full"></div>
                         </div>
                    </div>
                </div>
                    </div>
                </section>

                {/* WHY IT MATTERS / CHALLENGES */}
                <section className="bg-[#061B2E] text-white py-16 lg:py-24 px-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto relative z-10">
                        <div className="max-w-3xl mb-12">
                            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-black mb-6 leading-tight">Solving complex industry roadblocks.</h2>
                            <p className="text-[#7F94A8] text-lg leading-relaxed text-pretty">
                                Standing out requires moving past legacy constraints. We remove technical debt and build modern systems designed entirely for scale and user satisfaction.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full min-w-0"><CheckCircle2 size={24} className="text-[#08BFE8] mb-4 shrink-0" /><h3 className="font-bold text-lg mb-2 text-white">Patient Accessibility</h3><p className="text-[#7F94A8] text-sm leading-relaxed">Essential architecture engineered for optimal performance and scale.</p></div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full min-w-0"><CheckCircle2 size={24} className="text-[#08BFE8] mb-4 shrink-0" /><h3 className="font-bold text-lg mb-2 text-white">Service Directories</h3><p className="text-[#7F94A8] text-sm leading-relaxed">Essential architecture engineered for optimal performance and scale.</p></div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full min-w-0"><CheckCircle2 size={24} className="text-[#08BFE8] mb-4 shrink-0" /><h3 className="font-bold text-lg mb-2 text-white">Doctor Profiles</h3><p className="text-[#7F94A8] text-sm leading-relaxed">Essential architecture engineered for optimal performance and scale.</p></div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full min-w-0"><CheckCircle2 size={24} className="text-[#08BFE8] mb-4 shrink-0" /><h3 className="font-bold text-lg mb-2 text-white">SEO Optimization</h3><p className="text-[#7F94A8] text-sm leading-relaxed">Essential architecture engineered for optimal performance and scale.</p></div>
                        </div>
                    </div>
                </section>

                {/* EXPERTISE & CAPABILITIES */}
                <section className="py-16 lg:py-24 px-5 max-w-[1320px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Website Excellence</h2>
                        <p className="text-[#7F94A8] text-lg text-pretty">We deliver end-to-end digital excellence merging strategic foresight with flawless engineering.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 lg:col-span-2 flex flex-col min-w-0">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Strategic Architecture</h3>
                           <p className="text-[#7F94A8] leading-relaxed mb-6 text-pretty flex-1">Every successful deployment starts with an airtight architectural blueprint. We map out data flows, user journeys, and component integration strategies before writing a single line of code.</p>
                           <ul className="space-y-3 font-medium text-[#061B2E]">
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Scalable cloud infrastructure</li>
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Bulletproof security protocols</li>
                              <li className="flex items-center break-words"><div className="w-1.5 h-1.5 bg-[#08BFE8] rounded-full mr-3 shrink-0"></div> Seamless API integrations</li>
                           </ul>
                        </div>
                        <div className="bg-[#EAF8FC] rounded-3xl p-8 lg:p-10 shadow-md border border-[#08BFE8]/20 flex flex-col justify-center min-w-0">
                           <h3 className="text-2xl font-black text-[#061B2E] mb-4">Why Partner With Us?</h3>
                           <p className="text-[#061B2E]/80 leading-relaxed font-medium text-pretty">We deliver software that actually impacts your bottom line, built by senior engineers who act as an extension of your own team.</p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-16 lg:py-20 px-5 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.03] bg-[size:24px_24px]"></div>
                     <div className="max-w-2xl mx-auto relative z-10 text-white">
                         <h2 className="text-[clamp(28px,4vw,48px)] font-heading font-black mb-8 leading-tight text-balance">Ready to elevate your digital presence?</h2>
                         <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                             Let's discuss your project <ArrowRight size={20} className="ml-2" />
                         </Link>
                     </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default HealthcareWebsites;
