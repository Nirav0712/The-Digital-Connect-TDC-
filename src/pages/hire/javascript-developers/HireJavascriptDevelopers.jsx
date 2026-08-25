
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Users, Target, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';

const HireJavascriptDevelopers = () => {
    useSEO({
        title: "Hire JavaScript Developers | The Digital Connect",
        description: "Leverage the power of modern JavaScript frameworks. Hire expert JavaScript developers to create lightning-fast single-page applications and robust backend services."
    });

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">Hire JavaScript Developers</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            HIRE EXPERTS
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,5vw,56px)] font-heading font-black text-[#061B2E] leading-tight">
                            Hire JavaScript Developers
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg leading-relaxed max-w-xl">
                            Leverage the power of modern JavaScript frameworks. Hire expert JavaScript developers to create lightning-fast single-page applications and robust backend services.
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="pt-4 flex flex-wrap gap-4">
                            <Link to="/contact" className="inline-flex bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold items-center hover:bg-[#159ED9] transition-all shadow-lg shadow-[#08BFE8]/20">
                                Hire Developers <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/contact" className="inline-flex bg-white text-[#061B2E] border border-gray-200 px-8 py-4 rounded-xl font-bold items-center hover:bg-gray-50 transition-colors">
                                Discuss Your Project
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full">
                        
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#03111F] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
            <div className="absolute text-[#D9A72E]/10 right-4 bottom-4 font-mono text-8xl font-black">JS</div>
            <svg className="w-full h-full absolute inset-0 z-0 opacity-30">
               <motion.path d="M50 100 Q 150 10 250 120 T 450 80" fill="none" stroke="#D9A72E" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}/>
            </svg>
            <div className="flex flex-wrap gap-4 justify-center z-10 w-[80%]">
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:0}} className="px-4 py-2 bg-white/5 border border-[#D9A72E]/30 rounded-lg text-white font-mono text-sm shadow-[0_0_15px_rgba(217,167,46,0.2)]">async</motion.div>
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:1}} className="px-4 py-2 bg-[#D9A72E] text-black font-bold border border-[#D9A72E]/30 rounded-lg font-mono text-sm">await</motion.div>
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:2}} className="px-4 py-2 bg-white/5 border border-[#D9A72E]/30 rounded-lg text-white font-mono text-sm shadow-[0_0_15px_rgba(217,167,46,0.2)]">Promise</motion.div>
            </div>
        </div>
                    </div>
                </section>

                {/* EXPERTISE GRID */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-[1320px] mx-auto px-5">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-4">Our JavaScript Developers Expertise</h2>
                            <p className="text-[#7F94A8] text-lg">Select a specialization below to learn more about our dedicated resources.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            <Link to="/hire-team/javascript-developers/react-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">React Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/angular-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Angular Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/vue-js-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Vue.js Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/node-js-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Node.js Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/next-js-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Next.js Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/express-js-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Express.js Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/typescript-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">TypeScript Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/javascript-developers/full-stack-javascript-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Full Stack JavaScript Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY HIRE WITH US */}
                <section className="py-16 lg:py-24 max-w-[1320px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-6">Why partner with our team?</h2>
                            <p className="text-[#7F94A8] text-lg mb-8 leading-relaxed">
                                We go beyond simple staff augmentation. Our developers integrate seamlessly into your workflows, bringing architectural prowess, clean code practices, and a commitment to scalable project delivery.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Users size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Top-Tier Talent</h4><p className="text-[#7F94A8]">Rigorous vetting ensures only the top 3% of technical experts join your project.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Shield size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Quality & Security</h4><p className="text-[#7F94A8]">Strict adherence to clean code architectures and global enterprise security standards.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Clock size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Time-Zone Aligned</h4><p className="text-[#7F94A8]">Flexible working hours ensuring robust communication pipelines and minimal latency.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#061B2E] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#08BFE8]/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <h3 className="text-2xl font-black mb-8 relative z-10">Engagement Models</h3>
                            <div className="space-y-4 relative z-10">
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Dedicated Developers</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Full-Time Extended Team</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Project-Based Delivery</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Hourly Support & Maintenance</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-16 lg:py-24 px-5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.05] bg-[size:24px_24px]"></div>
                    <div className="max-w-2xl mx-auto relative z-10 text-white">
                        <h2 className="text-[clamp(28px,4vw,48px)] font-heading font-black mb-6 leading-tight">Need the right talent for your next project?</h2>
                        <p className="text-[#B9CAD7] text-lg mb-8">Scale your operations instantly with pre-vetted engineers.</p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                            Let's Build Your Team <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default HireJavascriptDevelopers;
