import React, { useEffect, useState } from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { useLocation } from 'react-router-dom';
import { Users, Code, PenTool, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const teamData = [
    { id: 'leadership', number: '01', title: 'Leadership Team', icon: Users, desc: 'Meet the people responsible for our vision, strategy and growth.' },
    { id: 'engineering', number: '02', title: 'Engineering Team', icon: Code, desc: 'Experienced developers building scalable and reliable digital products.' },
    { id: 'creative', number: '03', title: 'Creative Team', icon: PenTool, desc: 'Designers and strategists creating meaningful digital experiences.' },
    { id: 'growth', number: '04', title: 'Growth & Marketing', icon: BarChart, desc: 'Experts helping businesses build visibility, engagement and sustainable growth.' }
];

const Team = () => {
    useSEO({ title: "Our Team | The Digital Connect", description: "Learn about the teams responsible for driving digital experiences." });
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('leadership');

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
                    window.history.replaceState(null, null, `/about/team#${entry.target.id}`);
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 });

        teamData.forEach(item => {
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
            window.history.replaceState(null, null, `/about/team#${id}`);
        }
    };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* HERO */}
                <section className="bg-[#08243A] pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[120px] px-5 relative overflow-hidden text-center z-10 border-b border-[#08BFE8]/10">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1200px] mx-auto relative z-10">
                        <span className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Team</span>
                        <h1 className="text-[clamp(42px,9vw,88px)] font-heading font-black text-white leading-[1.1] tracking-tight mb-8">
                            People behind the<br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08BFE8] to-[#EAF8FC]">technology & experiences.</span>
                        </h1>
                        <p className="text-[#7F94A8] max-w-[700px] mx-auto text-lg md:text-xl font-medium leading-relaxed">
                            A highly specialized collective of engineers, designers, and strategists working in complete synergy.
                        </p>
                    </div>
                </section>

                {/* STICKY NAV FOR TEAM */}
                <div className="sticky top-[72px] lg:top-[76px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                    <div className="max-w-[1320px] mx-auto px-5">
                        <div className="flex overflow-x-auto no-scrollbar gap-6 md:gap-10 py-4">
                            {teamData.map((team, i) => {
                                const isActive = activeSection === team.id;
                                return (
                                    <a
                                        key={team.id}
                                        href={`#${team.id}`}
                                        onClick={(e) => handleScrollClick(e, team.id)}
                                        className={`flex items-center gap-2 whitespace-nowrap shrink-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                                    >
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${isActive ? 'bg-[#08BFE8] text-white' : 'bg-gray-100 text-gray-500'}`}>{team.number}</span>
                                        <span className={`font-heading font-bold text-sm md:text-base ${isActive ? 'text-[#061B2E]' : 'text-gray-800'}`}>{team.title}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* 4 CARDS TILE NAVIGATION */}
                <section className="relative z-20 py-16 lg:py-24 px-5 max-w-[1320px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {teamData.map((team, i) => {
                            const Icon = team.icon;
                            const isActive = activeSection === team.id;
                            return (
                                <a
                                    href={`#${team.id}`}
                                    onClick={(e) => handleScrollClick(e, team.id)}
                                    key={team.id}
                                    className={`group flex flex-col h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-lg ${isActive ? 'ring-2 ring-[#08BFE8]/20 -translate-y-2' : ''} hover:shadow-[0_20px_40px_rgba(8,191,232,0.1)] hover:-translate-y-2 hover:border-[#08BFE8]/30 transition-all duration-500 relative overflow-hidden`}
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-[#EAF8FC] rounded-bl-[100px] -z-0 group-hover:bg-[#08BFE8]/10 group-hover:scale-150 transition-all duration-700 ${isActive ? 'scale-150 bg-[#08BFE8]/10' : ''}`}></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors duration-500 ${isActive ? 'bg-[#08BFE8] text-white' : 'bg-[#061B2E] text-white group-hover:bg-[#08BFE8]'}`}>
                                            <Icon size={22} />
                                        </div>
                                        <h3 className={`text-xl font-black mb-3 transition-colors ${isActive ? 'text-[#08BFE8]' : 'text-[#061B2E] group-hover:text-[#08BFE8]'}`}>{team.title}</h3>
                                        <p className="text-[#7F94A8] text-sm leading-relaxed mb-8 flex-1 font-medium">{team.desc}</p>
                                        <div className={`flex items-center text-sm font-bold transition-colors mt-auto ${isActive ? 'text-[#08BFE8]' : 'text-[#061B2E] group-hover:text-[#08BFE8]'}`}>
                                            <span>Explore section</span>
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

                    {/* Leadership */}
                    <section id="leadership" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px]">
                        <div className="text-center mb-12 lg:mb-16">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 bg-[#061B2E] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                <Users size={28} />
                            </motion.div>
                            <span className="text-[#08BFE8] font-bold text-sm tracking-widest uppercase mb-4 block">01 Leadership Team</span>
                            <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Vision and Direction.</h2>
                            <p className="text-[#7F94A8] text-lg lg:text-xl max-w-2xl mx-auto font-medium">Meet the people responsible for our vision, strategy and growth.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 hover:border-[#08BFE8] transition-colors shadow-sm hover:shadow-lg">
                                <div className="w-12 h-12 bg-[#EAF8FC] text-[#08BFE8] rounded-xl flex items-center justify-center mb-6"><Users size={20} /></div>
                                <h3 className="font-bold text-[#061B2E] text-xl mb-3">Strategic Vision</h3>
                                <p className="text-[#7F94A8]">Guiding our long-term technical investments and agency positioning on a global scale.</p>
                            </div>
                            <div className="bg-[#061B2E] text-white border border-[#061B2E] rounded-[30px] p-6 lg:p-8 shadow-xl">
                                <div className="w-12 h-12 bg-[#08BFE8] text-white rounded-xl flex items-center justify-center mb-6"><BarChart size={20} /></div>
                                <h3 className="font-bold text-white text-xl mb-3">Business Growth</h3>
                                <p className="text-[#EAF8FC]/80">Overseeing operational scalability, expansions and cultivating strong industry partnerships.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 hover:border-[#08BFE8] transition-colors shadow-sm hover:shadow-lg">
                                <div className="w-12 h-12 bg-[#EAF8FC] text-[#08BFE8] rounded-xl flex items-center justify-center mb-6"><Users size={20} /></div>
                                <h3 className="font-bold text-[#061B2E] text-xl mb-3">Client Success</h3>
                                <p className="text-[#7F94A8]">Driving ultimate delivery excellence and ensuring high client retention across all projects.</p>
                            </div>
                        </div>
                    </section>

                    {/* Engineering */}
                    <section id="engineering" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px] border-t border-gray-200">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 bg-[#EAF8FC] text-[#08BFE8] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Code size={32} />
                                </motion.div>
                                <span className="text-[#08BFE8] font-bold text-sm tracking-widest uppercase mb-4 block">02 Engineering Team</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Scalable and reliable.</h2>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                                    Experienced developers building scalable and reliable digital products. From highly interactive frontends to robust cloud-native backends, our engineers write code that scales gracefully.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 font-bold text-[#061B2E]"><div className="w-2 h-2 rounded-full bg-[#08BFE8]"></div> Frontend Systems</div>
                                    <div className="flex items-center gap-3 font-bold text-[#061B2E]"><div className="w-2 h-2 rounded-full bg-[#08BFE8]"></div> Cloud Architecture</div>
                                    <div className="flex items-center gap-3 font-bold text-[#061B2E]"><div className="w-2 h-2 rounded-full bg-[#08BFE8]"></div> Backend Engineering</div>
                                    <div className="flex items-center gap-3 font-bold text-[#061B2E]"><div className="w-2 h-2 rounded-full bg-[#08BFE8]"></div> Mobile Development</div>
                                </div>
                            </div>
                            <div className="bg-[#08243A] rounded-[40px] p-6 md:p-8 lg:p-10 relative overflow-hidden text-sm md:text-base font-mono text-[#08BFE8] shadow-2xl h-[350px] md:h-[400px] flex flex-col justify-center">
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(8,191,232,1)_1px,transparent_1px),linear-gradient(90deg,rgba(8,191,232,1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
                                <div className="relative z-10 space-y-3 px-4 md:px-6">
                                    <div className="text-[#7F94A8]">{'// The foundation of our digital products'}</div>
                                    <div className="flex flex-wrap break-all"><span className="text-[#159ED9] mr-2">const</span> <span className="text-white">engineeringTeam</span> <span className="text-white mx-2">=</span> {'{'}</div>
                                    <div className="pl-6">focus: <span className="text-[#EAF8FC]">'Scalability'</span>,</div>
                                    <div className="pl-6">passion: <span className="text-[#EAF8FC]">'Clean Code'</span>,</div>
                                    <div className="pl-6 flex flex-wrap break-all">deploy: <span className="text-[#159ED9] mx-2">async</span> () <span className="text-white mx-2">{'=>'}</span> {'{'}</div>
                                    <div className="pl-12">await validateArchitecture();</div>
                                    <div className="pl-12 text-white">return shipToProduction();</div>
                                    <div className="pl-6">{'}'}</div>
                                    <div>{'};'}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Creative */}
                    <section id="creative" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px] border-t border-gray-200">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] w-full">
                                <div className="absolute top-0 right-5 md:right-10 w-2/3 h-2/3 bg-[#08BFE8] rounded-[40px] p-6 lg:p-8 text-white shadow-xl flex flex-col justify-end transition-transform hover:-translate-y-2 hover:shadow-2xl z-20">
                                    <h4 className="font-bold text-xl md:text-2xl">UI/UX Design</h4>
                                </div>
                                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[#EAF8FC] rounded-[30px] lg:rounded-[40px] p-6 lg:p-8 text-[#061B2E] border border-white flex flex-col justify-end shadow-lg transition-transform hover:-translate-y-2 z-10">
                                    <h4 className="font-bold text-xl md:text-2xl">Brand & Visual</h4>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-16 h-16 bg-[#159ED9] text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <PenTool size={32} />
                                </motion.div>
                                <span className="text-[#159ED9] font-bold text-sm tracking-widest uppercase mb-4 block">03 Creative Team</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-[#061B2E] mb-6 leading-tight">Meaningful experiences.</h2>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                                    Designers and strategists creating meaningful digital experiences. Operating at the intersection of human psychology and aesthetic excellence, ensuring every pixel carries intent.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Growth */}
                    <section id="growth" className="py-16 md:py-24 lg:py-32 scroll-mt-[120px] border-t border-gray-200">
                        <div className="bg-[#061B2E] rounded-[40px] px-6 py-12 md:px-8 md:py-16 lg:p-20 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#08BFE8]/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md text-[#08BFE8] rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 border border-white/10">
                                    <BarChart size={32} className="md:w-10 md:h-10" />
                                </div>
                                <span className="text-[#08BFE8] font-bold text-sm tracking-widest uppercase mb-4 block">04 Growth & Marketing</span>
                                <h2 className="text-[clamp(32px,5vw,56px)] font-heading font-black text-white mb-6 leading-tight">Visibility, engagement, growth.</h2>
                                <p className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed mb-10 md:mb-12 font-medium">
                                    Experts helping businesses build visibility, engagement and sustainable growth. Merging performance marketing with deep analytics to maximize digital presence.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 md:gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors">
                                        <div className="font-bold text-[#EAF8FC] text-sm md:text-base">SEO Strategy</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors">
                                        <div className="font-bold text-[#EAF8FC] text-sm md:text-base">Performance</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors">
                                        <div className="font-bold text-[#EAF8FC] text-sm md:text-base">Social Media</div>
                                    </div>
                                    <div className="bg-[#08BFE8] border border-[#08BFE8] rounded-2xl p-4 md:p-6 text-center shadow-[0_0_20px_rgba(8,191,232,0.3)]">
                                        <div className="font-bold text-white text-sm md:text-base">Data Analytics</div>
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

export default Team;
