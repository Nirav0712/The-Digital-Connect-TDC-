import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Users, Globe2, ArrowRight } from 'lucide-react';

const About = () => {
    useSEO({ title: "The Digital Connect | About Us", description: "Learn about The Digital Connect, our vision, and how we bring technology and design together." });

    const cards = [
        { title: 'Our Mission', desc: 'Discover what drives us forward.', path: '/about/mission', icon: Target },
        { title: 'Brand Story', desc: 'The evolution of our agency.', path: '/about/brand-story', icon: BookOpen },
        { title: 'Leadership', desc: 'Meet the people shaping our direction.', path: '/about/leadership', icon: Users },
        { title: 'Global Presence', desc: 'Our locations, partnerships and global reach.', path: '/contact', icon: Globe2 }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#F7FAFC] min-h-screen font-sans flex flex-col">

                {/* HERO SECTION */}
                <section className="relative pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[120px] overflow-hidden bg-[#061B2E] text-white">
                    <div className="absolute inset-0 bg-[#061B2E] opacity-90 layer-1"></div>
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#08BFE8]/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-[#159ED9]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#08BFE8 1px, transparent 1px), linear-gradient(90deg, #08BFE8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="max-w-[1320px] mx-auto px-5 lg:px-8 relative z-10 flex flex-col items-center text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase mb-6 block"
                        >
                            About Us
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[clamp(42px,9vw,90px)] font-heading font-black leading-[1.1] tracking-tight mb-8"
                        >
                            Technology <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08BFE8] to-[#EAF8FC]">With Purpose.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[#7F94A8] max-w-[700px] mx-auto text-lg md:text-xl leading-relaxed font-medium"
                        >
                            We are a premium digital agency specializing in full-stack engineering, UX/UI architecture, and high-performance digital experiences.
                        </motion.p>
                    </div>
                </section>

                {/* 4 CARDS NAVIGATION SECTION */}
                <section className="relative -mt-12 z-20 pb-16 lg:pb-24 px-5 max-w-[1320px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {cards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                    key={card.path}
                                    className="h-full min-h-[280px]"
                                >
                                    <Link
                                        to={card.path}
                                        className="group flex flex-col h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-[#08BFE8]/10 shadow-[0_4px_20px_rgba(6,27,46,0.03)] hover:shadow-[0_20px_40px_rgba(8,191,232,0.1)] hover:-translate-y-2 hover:border-[#08BFE8]/40 transition-all duration-500 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#08BFE8]/5 rounded-bl-[100px] -z-10 group-hover:scale-[1.5] transition-transform duration-700"></div>

                                        <div className="w-14 h-14 bg-[#EAF8FC] rounded-2xl flex items-center justify-center text-[#061B2E] mb-6 group-hover:bg-[#08BFE8] group-hover:text-white transition-colors duration-500 shadow-sm border border-[#08BFE8]/10">
                                            <Icon size={24} strokeWidth={2} />
                                        </div>

                                        <h3 className="text-xl font-black text-[#061B2E] mb-3 group-hover:text-[#08BFE8] transition-colors">{card.title}</h3>
                                        <p className="text-[#7F94A8] text-sm leading-relaxed mb-6 font-medium flex-1">
                                            {card.desc}
                                        </p>

                                        <div className="flex flex-row items-center justify-between text-[#061B2E] font-bold group-hover:text-[#08BFE8] transition-colors mt-auto">
                                            <span className="text-sm tracking-wide uppercase">Explore</span>
                                            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>

                {/* Additional content below cards */}
                <section className="py-16 md:py-24 lg:py-32 px-5 max-w-[1000px] mx-auto text-center w-full">
                    <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-8 leading-tight">Connecting Strategy with Execution.</h2>
                    <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-12 lg:mb-16">
                        We started with a simple belief: the best digital products are born at the intersection of business strategy and technical excellence. We operate as a seamless extension of your internal team.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-[#08BFE8] mb-3">12+</div>
                            <div className="text-xs md:text-sm font-bold tracking-wider text-[#061B2E] uppercase">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-[#08BFE8] mb-3">250+</div>
                            <div className="text-xs md:text-sm font-bold tracking-wider text-[#061B2E] uppercase">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-[#08BFE8] mb-3">50+</div>
                            <div className="text-xs md:text-sm font-bold tracking-wider text-[#061B2E] uppercase">Engineers</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black text-[#08BFE8] mb-3">15</div>
                            <div className="text-xs md:text-sm font-bold tracking-wider text-[#061B2E] uppercase">Countries</div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default About;
