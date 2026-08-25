import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const BrandStory = () => {
    useSEO({ title: "Our Story | The Digital Connect", description: "The timeline and evolution of The Digital Connect." });

    const timeline = [
        { num: "01", title: "The Beginning", desc: "Founded with a vision to bridge the gap between heavy enterprise engineering and beautiful design." },
        { num: "02", title: "Building Expertise", desc: "Expanding our team to include strict UI/UX strategists and deep backend architects." },
        { num: "03", title: "Expanding Digital Capabilities", desc: "Launching comprehensive mobile and cloud-native practices for global reach." },
        { num: "04", title: "Long-Term Partnerships", desc: "Solidifying recurring agency-of-record status with major international brands." },
        { num: "05", title: "The Future", desc: "Pioneering AI architectures and next-generation immersive web experiences." }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 max-w-[1320px] mx-auto text-center w-full border-b border-[#F4FAFC]">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-[#061B2E] mb-6">Our Story</h1>
                    <p className="text-[#617386] text-lg max-w-2xl mx-auto">From a small room of developers to a global digital powerhouse. Here is how we evolved.</p>
                </section>
                
                <section className="py-24 max-w-[800px] mx-auto px-5 w-full relative">
                    <div className="absolute left-[39px] md:left-[50%] top-24 bottom-24 w-px bg-[#DDF7FC]"></div>
                    {timeline.map((item, index) => (
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#19C7E8] shrink-0 z-10 flex items-center justify-center text-[#061B2E] font-bold shadow-[0_0_15px_rgba(25,181,216,0.3)] md:absolute md:left-1/2 md:-translate-x-1/2">
                                {item.num}
                            </div>
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                                <div className="bg-[#F4FAFC] p-8 rounded-3xl border border-[#DDF7FC]">
                                    <h3 className="text-xl font-bold text-[#061B2E] mb-3">{item.title}</h3>
                                    <p className="text-[#617386] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </PageTransition>
    );
};
export default BrandStory;
