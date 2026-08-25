import React, { useEffect, useState } from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { useLocation } from 'react-router-dom';
import { Lightbulb, Heart, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const valuesData = [
    { id: 'innovation', number: '01', title: 'Innovation First', icon: Lightbulb, desc: 'We continuously explore better technologies, smarter systems and new ways to solve business challenges.' },
    { id: 'customer-obsession', number: '02', title: 'Customer Obsession', icon: Heart, desc: 'Every decision starts with understanding the people and businesses we serve.' },
    { id: 'quality', number: '03', title: 'Quality Without Compromise', icon: ShieldCheck, desc: 'We focus on reliable engineering, thoughtful design and measurable outcomes.' },
    { id: 'growth', number: '04', title: 'Continuous Growth', icon: TrendingUp, desc: 'We learn, improve and evolve with every project, partnership and challenge.' }
];

const Values = () => {
    useSEO({ title: "Our Values | The Digital Connect", description: "Values shaping our engineering and design." });
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('innovation');

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            }
        }
    }, [location]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    window.history.replaceState(null, null, `/about/values#${entry.target.id}`);
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 });

        valuesData.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScrollClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, null, `/about/values#${id}`);
        }
    };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* HERO */}
                <section className="bg-[#061B2E] pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[120px] px-5 relative overflow-hidden text-center z-10 border-b border-[#08BFE8]/10">
                    <div className="absolute inset-0 bg-[#061B2E] opacity-90 layer-1 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#159ED9]/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="max-w-[1200px] mx-auto relative z-10">
                        <span className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Values</span>
                        <h1 className="text-[clamp(42px,9vw,90px)] font-heading font-black text-white leading-[1.1] tracking-tight mb-8">
                            Principles shaping <br className="hidden md:block" />our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08BFE8] to-[#EAF8FC]">digital mindset.</span>
                        </h1>
                        <p className="text-[#7F94A8] max-w-[700px] mx-auto text-lg md:text-xl font-medium leading-relaxed">
                            Beyond technology, these four core pillars dictate how we act, how we build, and how we deliver for our partners.
                        </p>
                    </div>
                </section>

                {/* 4 CARDS TILE NAVIGATION */}
                <section className="relative z-20 -mt-16 pb-16 lg:pb-24 px-5 max-w-[1320px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {valuesData.map((val, i) => {
                            const Icon = val.icon;
                            const isActive = activeSection === val.id;
                            return (
                                <a
                                    href={`#${val.id}`}
                                    onClick={(e) => handleScrollClick(e, val.id)}
                                    key={val.id}
                                    className={`group flex flex-col h-full bg-[#08243A] p-8 rounded-3xl border ${isActive ? 'border-[#08BFE8] shadow-[0_0_30px_rgba(8,191,232,0.15)] -translate-y-2' : 'border-[#159ED9]/20 shadow-xl'} hover:bg-[#061B2E] hover:border-[#08BFE8] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-[#08BFE8]/5 rounded-bl-[100px] ${isActive ? 'scale-150' : ''} group-hover:scale-150 transition-transform duration-700`}></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-[#08BFE8] text-white' : 'bg-white/5 text-[#EAF8FC] group-hover:bg-[#08BFE8] group-hover:text-white'}`}>
                                                <Icon size={22} />
                                            </div>
                                            <span className={`font-black text-2xl font-heading ${isActive ? 'text-white/40' : 'text-white/20'}`}>{val.number}</span>
                                        </div>
                                        <h3 className={`text-xl font-black mb-3 transition-colors ${isActive ? 'text-[#08BFE8]' : 'text-white group-hover:text-[#08BFE8]'}`}>{val.title}</h3>
                                        <p className="text-[#7F94A8] text-sm leading-relaxed mb-8 flex-1 font-medium">{val.desc}</p>
                                        <div className={`flex items-center text-sm font-bold transition-colors mt-auto ${isActive ? 'text-white' : 'text-[#08BFE8] group-hover:text-white'}`}>
                                            <span>Learn more</span>
                                            <ArrowRight size={16} className={`ml-2 transition-transform duration-300 ${isActive ? 'translate-x-2' : 'group-hover:translate-x-2'}`} />
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </section>

                {/* CONTENT SECTIONS */}
                <div className="max-w-[1320px] mx-auto px-5 pb-24 lg:pb-32">

                    {/* Innovation First */}
                    <section id="innovation" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px]">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            <div className="lg:w-1/2 flex flex-col items-start relative box-border">
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#EAF8FC] text-[#08BFE8] rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 shadow-sm">
                                    <Lightbulb size={36} strokeWidth={2} />
                                </motion.div>
                                <span className="text-[#08BFE8] font-bold text-sm tracking-widest uppercase mb-4">01 Innovation First</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Exploring better technologies.</h2>
                                <div className="w-16 h-1 bg-[#08BFE8] rounded-full mb-6"></div>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                                    We continuously explore better technologies, smarter systems and new ways to solve business challenges. Stagnation is the enemy of progress.
                                </p>
                            </div>
                            <div className="lg:w-1/2 bg-[#FAFAFA] border border-gray-100 rounded-[40px] p-10 md:p-14 relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#08BFE8] flex items-center justify-center relative z-10 bg-white shadow-xl animate-pulse-slow">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#061B2E] flex items-center justify-center rounded-full text-[#EAF8FC]"><Lightbulb size={24} /></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Customer Obsession */}
                    <section id="customer-obsession" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px]">
                        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                            <div className="lg:w-1/2 flex flex-col items-start relative box-border">
                                <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#EAF8FC] text-[#159ED9] rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 shadow-sm">
                                    <Heart size={36} strokeWidth={2} />
                                </motion.div>
                                <span className="text-[#159ED9] font-bold text-sm tracking-widest uppercase mb-4">02 Customer Obsession</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Design for the user.</h2>
                                <div className="w-16 h-1 bg-[#159ED9] rounded-full mb-6"></div>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                                    Every decision starts with understanding the people and businesses we serve. True success is defined entirely by the measurable impact we bring to your bottom line.
                                </p>
                            </div>
                            <div className="lg:w-1/2 bg-[#061B2E] rounded-[40px] p-10 md:p-14 relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                                <div className="text-white text-center z-10 relative">
                                    <Heart size={48} className="text-[#08BFE8] mx-auto mb-4 relative z-10" />
                                    <h3 className="text-2xl font-bold relative z-10">End-User Focus</h3>
                                </div>
                                <div className="text-[clamp(100px,15vw,200px)] font-black opacity-[0.03] absolute inset-0 flex items-center justify-center pointer-events-none select-none">ROI</div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Quality Without Compromise */}
                    <section id="quality" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px]">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            <div className="lg:w-1/2 flex flex-col items-start relative box-border">
                                <motion.div initial={{ opacity: 0, scale: 0.9, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#F4FAFC] text-[#08243A] rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 shadow-sm border border-[#EAF8FC]">
                                    <ShieldCheck size={36} strokeWidth={2} />
                                </motion.div>
                                <span className="text-[#08243A] font-bold text-sm tracking-widest uppercase mb-4">03 Quality Without Compromise</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Reliable engineering.</h2>
                                <div className="w-16 h-1 bg-[#08243A] rounded-full mb-6"></div>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                                    We focus on reliable engineering, thoughtful design and measurable outcomes. Shortcuts are temporary; robust architecture scales forever.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-md hover:border-[#08BFE8] hover:shadow-lg transition-all duration-300 aspect-square flex flex-col justify-center">
                                    <div className="w-10 h-10 bg-[#EAF8FC] text-[#08BFE8] flex items-center justify-center rounded-lg mb-4"><ShieldCheck size={20} /></div>
                                    <h4 className="font-bold text-[#061B2E] text-base md:text-lg">Code Integrity</h4>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-md hover:border-[#08BFE8] hover:shadow-lg transition-all duration-300 aspect-square flex flex-col justify-center lg:translate-y-8">
                                    <div className="w-10 h-10 bg-[#EAF8FC] text-[#08BFE8] flex items-center justify-center rounded-lg mb-4"><ShieldCheck size={20} /></div>
                                    <h4 className="font-bold text-[#061B2E] text-base md:text-lg">Pixel Perfect Design</h4>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Continuous Growth */}
                    <section id="growth" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px]">
                        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                            <div className="lg:w-1/2 flex flex-col items-start relative box-border">
                                <motion.div initial={{ opacity: 0, scale: 0.9, y: -20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#EAF8FC] text-[#08BFE8] rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8 shadow-sm">
                                    <TrendingUp size={36} strokeWidth={2} />
                                </motion.div>
                                <span className="text-[#08BFE8] font-bold text-sm tracking-widest uppercase mb-4">04 Continuous Growth</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Learn, improve, evolve.</h2>
                                <div className="w-16 h-1 bg-[#08BFE8] rounded-full mb-6"></div>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                                    We learn, improve and evolve with every project, partnership and challenge. As your business scales, our capabilities grow alongside it.
                                </p>
                            </div>
                            <div className="lg:w-1/2 bg-gradient-to-br from-[#EAF8FC] to-[#FFFFFF] rounded-[40px] border border-[#08BFE8]/20 p-10 md:p-14 relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                                <div className="w-40 h-40 md:w-48 md:h-48 bg-[#08BFE8]/10 rounded-full flex items-center justify-center absolute">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#08BFE8]/20 rounded-full flex items-center justify-center">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#08BFE8] rounded-full flex items-center justify-center text-white shadow-lg"><TrendingUp size={24} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    );
};

export default Values;
