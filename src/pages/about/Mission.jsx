import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const Mission = () => {
    useSEO({ title: "Our Mission | The Digital Connect", description: "Our mission to deliver impactful technology." });

    const principles = [
        { title: "Customer First", desc: "Prioritizing end-user success above technical ego." },
        { title: "Strategic Thinking", desc: "Every architecture choice must have a business ROI." },
        { title: "Innovation", desc: "Consistently researching next-gen integrations safely." },
        { title: "Quality", desc: "Zero tolerance for technical debt or sloppy rollouts." },
        { title: "Long-Term Value", desc: "Building scalable foundations that survive business pivots." }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 max-w-[1320px] mx-auto text-center w-full">
                    <h1 className="text-[clamp(48px,10vw,90px)] font-heading font-black text-[#061B2E] leading-none mb-6">Our Mission</h1>
                    <p className="text-xl text-[#00A8D6] font-bold max-w-3xl mx-auto">Technology With Purpose. Experiences With Impact.</p>
                </section>
                
                <section className="py-16 bg-[#F4FAFC]">
                    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
                       <h2 className="text-3xl font-bold text-[#061B2E] mb-12 text-center">Mission Principles</h2>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {principles.map((p, i) => (
                               <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} key={i} className="bg-white p-8 rounded-2xl border border-[#DDF7FC] shadow-sm">
                                   <div className="text-3xl font-black text-[#19C7E8]/20 mb-4">0{i+1}</div>
                                   <h3 className="text-xl font-bold text-[#08243A] mb-3">{p.title}</h3>
                                   <p className="text-[#617386]">{p.desc}</p>
                               </motion.div>
                           ))}
                       </div>
                    </div>
                </section>
                
                <section className="py-32 bg-[#061B2E] text-center px-5 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Build Something Meaningful</h2>
                    <button className="bg-[#19C7E8] text-[#061B2E] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">Start A Project</button>
                </section>
            </div>
        </PageTransition>
    );
};
export default Mission;
