import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Leadership = () => {
    useSEO({ title: "Leadership | The Digital Connect", description: "Meet the leadership team at The Digital Connect." });

    const leaders = [
        { role: "Executive Director", dept: "Leadership Team", name: "[Executive Name Placeholder]", expertise: "Enterprise Strategy & Operations" },
        { role: "CTO", dept: "Technology Leadership", name: "[CTO Name Placeholder]", expertise: "Cloud Architecture & Scalability" },
        { role: "Creative Director", dept: "Creative Leadership", name: "[Creative Director Placeholder]", expertise: "Brand Identity & UX/UI" },
        { role: "VP of Growth", dept: "Strategy & Growth", name: "[Growth VP Placeholder]", expertise: "Market Expansion & Partnerships" }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 bg-[#061B2E] text-center w-full">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-white mb-6">People Behind The Vision</h1>
                    <p className="text-[#DDF7FC] text-lg max-w-2xl mx-auto mb-16">The executives directing our global technical and creative strategies.</p>
                </section>

                <section className="py-24 max-w-[1320px] mx-auto px-5 md:px-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leaders.map((leader, i) => (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} key={i} className="flex flex-col sm:flex-row bg-[#F4FAFC] rounded-3xl overflow-hidden border border-[#DDF7FC] group">
                                <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto bg-[#DDF7FC] relative overflow-hidden group-hover:bg-[#19C7E8]/20 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center text-[#061B2E]/20 font-bold uppercase tracking-widest rotate-90">Photo</div>
                                </div>
                                <div className="w-full sm:w-2/3 p-8 flex flex-col justify-center bg-white relative">
                                    <div className="text-[10px] uppercase font-bold text-[#19C7E8] tracking-widest mb-2">{leader.dept}</div>
                                    <h3 className="text-2xl font-black text-[#08243A] mb-1">{leader.name}</h3>
                                    <div className="text-[#00A8D6] font-bold mb-4">{leader.role}</div>
                                    <p className="text-[#617386] text-sm mb-6">{leader.expertise}</p>
                                    <a href="#" className="w-8 h-8 rounded-full bg-[#F4FAFC] flex items-center justify-center text-[#061B2E] hover:bg-[#19C7E8] hover:text-white transition-colors">
                                        <Mail size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-[#F4FAFC]">
                    <div className="max-w-[1320px] mx-auto px-5 md:px-8 text-center">
                        <h2 className="text-4xl font-black text-[#061B2E] mb-16">How We Lead</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {['Vision', 'Ownership', 'Collaboration', 'Innovation'].map(val => (
                                <div key={val} className="bg-white p-8 rounded-2xl border border-[#DDF7FC] font-bold text-lg text-[#08243A] shadow-sm hover:shadow-md transition-shadow">
                                    {val}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default Leadership;
