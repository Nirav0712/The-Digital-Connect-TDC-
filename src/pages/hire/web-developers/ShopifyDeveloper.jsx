
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Layout, Database, Code2, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const ShopifyDeveloper = () => {
    return (
        <PageTransition>
            <SEO title="${sub.name} | The Digital Connect" description="Hire experienced ${sub.tech} developers to build scalable, secure and high-performance applications." />
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/hire-team" className="hover:text-[#08BFE8] transition-colors">Hire Team</Link>
                    <ChevronRight size={14} />
                    <Link to="/hire-team/web-developers" className="hover:text-[#08BFE8] transition-colors">Web Developers</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">Shopify Developer</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto text-center">
                    <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#08BFE8]/10 text-[#08BFE8] text-sm font-bold tracking-wide uppercase mb-6 border border-[#08BFE8]/20">
                        EXPERT TALENT
                    </motion.div>
                    <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-[clamp(36px,6vw,64px)] font-heading font-black text-[#061B2E] leading-tight mb-6 max-w-4xl mx-auto">
                        Hire Shopify Developers
                    </motion.h1>
                    <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        Accelerate your product roadmap by hiring highly vetted, dedicated Shopify engineers. We provide fully managed talent capable of architecting complex solutions and scaling enterprise applications.
                    </motion.p>
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}}>
                        <Link to="/contact" className="inline-flex bg-[#061B2E] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold items-center hover:bg-[#08BFE8] transition-all shadow-xl hover:shadow-[#08BFE8]/30">
                            Hire a Shopify Expert <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </motion.div>
                </section>

                {/* WHAT WE CAN BUILD */}
                <section className="py-16 bg-[#061B2E] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto px-5 relative z-10">
                        <div className="mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black mb-4">What Our Shopify Developers Build</h2>
                            <p className="text-[#A3B8CC] text-lg max-w-2xl">From powerful monoliths to scalable microservices, our experts deliver production-ready software.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Layout size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Custom Applications</h3>
                                <p className="text-[#A3B8CC] text-sm">Tailor-made software architecture built exactly to your specific operational specifications.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Database size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Enterprise Solutions</h3>
                                <p className="text-[#A3B8CC] text-sm">Highly secure, scalable pipelines capable of handling massive organizational throughput.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Server size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">API Development</h3>
                                <p className="text-[#A3B8CC] text-sm">Robust RESTful and GraphQL endpoints seamlessly connecting your digital infrastructure.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Code2 size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Legacy Migration</h3>
                                <p className="text-[#A3B8CC] text-sm">Securely upgrading outdated technological stacks into modern, performant Shopify ecosystems.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY HIRE */}
                <section className="py-16 md:py-24 max-w-[1320px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Pre-Vetted Talent</h4>
                                <p className="text-sm text-[#7F94A8]">We put our engineers through intensive technical assessments.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 lg:-mt-8 lg:mb-8">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Fast Onboarding</h4>
                                <p className="text-sm text-[#7F94A8]">Scale your team in days, not months. Skip the standard recruitment delays.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Zero Overhead</h4>
                                <p className="text-sm text-[#7F94A8]">No internal HR management, office costs, or compliance friction.</p>
                            </div>
                            <div className="bg-[#EAF8FC] p-6 rounded-2xl border border-[#08BFE8]/20 flex flex-col gap-3 lg:-mt-8 lg:mb-8">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Agile Execution</h4>
                                <p className="text-sm text-[#061B2E]/80">Seamless integration directly into your internal Jira/Sprint cycles.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-6">Development Process</h2>
                            <p className="text-[#7F94A8] text-lg mb-8">Our rigorous operational standard ensures you receive beautiful, production-ready code on time.</p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">01</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Discover & Resource Allocation</h4><p className="text-sm text-[#7F94A8]">We map your technical requirements to the perfect Shopify engineers.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">02</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Integration & Sprint Planning</h4><p className="text-sm text-[#7F94A8]">Seamless onboarding into your existing CI/CD and communication channels.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">03</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Development & QA</h4><p className="text-sm text-[#7F94A8]">Iterative delivery backed by strict code reviews and automated testing.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-[#FAFAFA] py-16 px-5 text-center">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100">
                        <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black mb-6 text-[#061B2E]">Looking for skilled Shopify developers?</h2>
                        <p className="text-[#7F94A8] text-lg mb-8 max-w-2xl mx-auto">Connect with us today to discuss your technical constraints and discover how our dedicated talent can drive your product forward.</p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                            Hire Shopify Developers <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default ShopifyDeveloper;
