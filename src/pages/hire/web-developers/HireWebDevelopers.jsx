
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Users, Target, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';

const HireWebDevelopers = () => {
    useSEO({
        title: "Hire Web Developers | The Digital Connect",
        description: "Build scalable, high-performance websites and web applications with experienced developers who understand modern architecture, user experience and business goals."
    });

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">Hire Web Developers</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            HIRE EXPERTS
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,5vw,56px)] font-heading font-black text-[#061B2E] leading-tight">
                            Hire Web Developers
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg leading-relaxed max-w-xl">
                            Build scalable, high-performance websites and web applications with experienced developers who understand modern architecture, user experience and business goals.
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
                        
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#061B2E] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,191,232,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <motion.div animate={{scale:[1,1.05,1]}} transition={{duration:4, repeat:Infinity}} className="w-3/4 h-3/4 border-[10px] border-white/5 rounded-2xl flex items-center justify-center relative">
               <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#08BFE8] rounded-md"></div>
               <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#08BFE8] rounded-md"></div>
               <div className="flex gap-4">
                  <div className="w-4 h-24 bg-white/10 rounded-full"></div>
                  <div className="w-4 h-32 bg-[#08BFE8]/80 rounded-full"></div>
                  <div className="w-4 h-16 bg-white/10 rounded-full"></div>
               </div>
            </motion.div>
        </div>
                    </div>
                </section>

                {/* EXPERTISE GRID */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-[1320px] mx-auto px-5">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-4">Our Web Developers Expertise</h2>
                            <p className="text-[#7F94A8] text-lg">Select a specialization below to learn more about our dedicated resources.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            <Link to="/hire-team/web-developers/php-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">PHP Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/python-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Python Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/wordpress-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">WordPress Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/magento-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Magento Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/shopify-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Shopify Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/golang-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Golang Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/ruby-on-rails-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Ruby on Rails Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/java-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Java Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/mean-stack-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">MEAN Stack Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/mern-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">MERN Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/full-stack-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Full Stack Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/django-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Django Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/asp-net-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">ASP.NET Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/laravel-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Laravel Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/net-core-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">.NET Core Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/web-developers/drupal-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Drupal Developer</h3>
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
export default HireWebDevelopers;
