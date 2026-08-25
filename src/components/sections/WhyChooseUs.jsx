import React from 'react';
import { motion } from 'framer-motion';
import TechnologyOrbit from './TechnologyOrbit';
import FeatureRow from './FeatureRow';
import { whyChooseUsData } from '../../data/whyChooseUsData';

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden w-full pt-[64px] pb-[64px] md:py-[80px] xl:pt-[120px] xl:pb-[140px]" style={{ background: 'linear-gradient(135deg, #F5FBFD 0%, #FFFFFF 55%, #EFFAFF 100%)' }}>
            
            {/* Subtle decorative background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#19B5D8]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-[#63D3E8]/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0A263D 1px, transparent 1px), linear-gradient(90deg, #0A263D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1320px] mx-auto px-5 md:px-8 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-14 xl:gap-20">
                
                {/* Left: Editorial Column */}
                <div className="xl:col-span-4 self-start flex flex-col items-start xl:sticky xl:top-[120px]">
                    <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 text-[#19B5D8]">
                        Why The Digital Connect
                    </span>
                    <h2 className="text-[clamp(36px,10vw,48px)] xl:text-[clamp(42px,4vw,64px)] font-heading font-black text-[#061B2E] tracking-tight leading-[1.05] mb-5 md:mb-6">
                        Built for businesses<br className="hidden md:block"/> that think ahead.
                    </h2>
                    <p className="text-[15px] md:text-[17px] xl:text-[18px] text-[#64748B] leading-[1.6] xl:leading-relaxed max-w-lg mb-8 md:mb-10">
                        We don't just write code. We partner with you to solve complex business challenges through strategic design and innovative technology.
                    </p>
                    
                    {/* Progress Visual */}
                    <div className="w-full max-w-[180px] h-px bg-[#061B2E]/10 relative mb-8 xl:mb-12">
                        <motion.div 
                           animate={{ x: ['0%', '100%', '0%'] }} 
                           transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                           className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-[#19B5D8] shadow-[0_0_8px_#19B5D8]" 
                        />
                    </div>
                    
                    <div className="hidden xl:block">
                       <TechnologyOrbit />
                    </div>
                </div>

                {/* Right: Feature List Rows */}
                <div className="xl:col-span-8 flex flex-col gap-3 md:gap-4 xl:gap-5 w-full max-w-full overflow-hidden">
                    {whyChooseUsData.map((item, index) => (
                        <FeatureRow key={item.num} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
