
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Users, Target, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';

const HireMobileAppDevelopers = () => {
    useSEO({
        title: "Hire Mobile App Developers | The Digital Connect",
        description: "Hire skilled mobile application developers to build scalable native and cross-platform mobile applications for iOS and Android platforms."
    });

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">Hire Mobile App Developers</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            HIRE EXPERTS
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,5vw,56px)] font-heading font-black text-[#061B2E] leading-tight">
                            Hire Mobile App Developers
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg leading-relaxed max-w-xl">
                            Hire skilled mobile application developers to build scalable native and cross-platform mobile applications for iOS and Android platforms.
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
                        
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#061B2E] to-[#08243A] rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl border border-[#08BFE8]/20">
            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-48 h-[80%] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-800 p-2 relative z-10 flex flex-col items-center">
                 <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mt-2 mb-4"></div>
                 <div className="w-full grid grid-cols-2 gap-2 px-2">
                     <div className="h-16 bg-[#08BFE8]/20 rounded-xl"></div>
                     <div className="h-16 bg-gray-100 rounded-xl"></div>
                     <div className="h-16 bg-gray-100 rounded-xl"></div>
                     <div className="h-16 bg-[#08BFE8]/20 rounded-xl"></div>
                 </div>
            </motion.div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, ease: "linear", repeat: Infinity }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(8,191,232,0.3)_360deg)] z-0 rounded-full blur-2xl"></motion.div>
        </div>
                    </div>
                </section>

                {/* EXPERTISE GRID */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-[1320px] mx-auto px-5">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-4">Our Mobile App Developers Expertise</h2>
                            <p className="text-[#7F94A8] text-lg">Select a specialization below to learn more about our dedicated resources.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            <Link to="/hire-team/mobile-app-developers/ios-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">iOS Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/android-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Android Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/flutter-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Flutter Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/ionic-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Ionic Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/swift-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Swift Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/kotlin-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Kotlin Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/react-native-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">React Native Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/unity-3d-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Unity 3D Developer</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link to="/hire-team/mobile-app-developers/cross-platform-developer" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">Cross Platform Developer</h3>
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
export default HireMobileAppDevelopers;
