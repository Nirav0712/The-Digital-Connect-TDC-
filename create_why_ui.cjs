const fs = require('fs');
const path = require('path');

const sectionsDir = 'src/components/sections';
const dataDir = 'src/data';

if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const filesToCreate = {
    'src/data/whyChooseUsData.js': `import { Target, PenTool, Zap, Box, MessageSquare, Shield } from 'lucide-react';

export const whyChooseUsData = [
  {
    num: "01",
    title: "Strategic Thinking",
    desc: "We align our technical solutions with your core business objectives.",
    icon: Target
  },
  {
    num: "02",
    title: "Design Excellence",
    desc: "Crafting visually stunning experiences that engage users.",
    icon: PenTool
  },
  {
    num: "03",
    title: "Technical Expertise",
    desc: "Senior engineers building robust, scalable architectures.",
    icon: Zap
  },
  {
    num: "04",
    title: "Scalable Solutions",
    desc: "Future-proof development designed to grow with you.",
    icon: Box
  },
  {
    num: "05",
    title: "Transparent Communication",
    desc: "Clear communication and constant updates throughout the project.",
    icon: MessageSquare
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    desc: "We support your digital products long after the initial launch.",
    icon: Shield
  }
];
`,
    'src/components/sections/TechnologyOrbit.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const TechnologyOrbit = () => {
    return (
        <div className="relative w-full max-w-[250px] aspect-square flex items-center justify-center mt-4">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#19B5D8]/20"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[#0A263D]/10"
            />
            {/* Center point */}
            <div className="w-3 h-3 bg-[#19B5D8] rounded-full shadow-[0_0_15px_#19B5D8] z-10" />
            {/* Orbiting nodes */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0A263D] rounded-full border border-white" />
                <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-[#63D3E8] rounded-full" />
            </motion.div>
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
            >
                <div className="absolute top-1/4 left-0 w-2 h-2 bg-[#19B5D8] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 bg-[#061B2E] rounded-full border border-white" />
            </motion.div>
        </div>
    );
};
export default TechnologyOrbit;
`,
    'src/components/sections/FeatureRow.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeatureRow = ({ item, index }) => {
    const Icon = item.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group w-full bg-white xl:bg-[#F2FAFC]/30 border border-[#D7E6EC] hover:bg-white hover:border-[#19B5D8] hover:-translate-x-1 hover:shadow-[0_10px_30px_-15px_rgba(25,181,216,0.3)] rounded-[20px] md:rounded-3xl p-5 md:p-6 lg:p-8 flex items-center md:items-start gap-4 md:gap-6 transition-all duration-500 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#19B5D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Number on Left */}
            <div className="text-[36px] md:text-[48px] leading-none font-heading font-black shrink-0 text-transparent [-webkit-text-stroke:1px_rgba(6,27,46,0.15)] group-hover:[-webkit-text-stroke:0px] group-hover:text-[#19B5D8] transition-all duration-300 relative z-10 w-[42px] md:w-[60px]">
                {item.num}
            </div>
            
            {/* Center minimal icon (Desktop focused) */}
            <div className="hidden md:flex w-12 h-12 shrink-0 rounded-full border border-[#D7E6EC] group-hover:border-[#19B5D8]/30 items-center justify-center bg-white group-hover:shadow-[0_0_15px_rgba(25,181,216,0.2)] transition-all duration-300 relative z-10">
                <Icon size={22} className="text-[#061B2E] group-hover:text-[#19B5D8] transition-colors duration-300" strokeWidth={1.5} />
            </div>

            {/* Right side content */}
            <div className="flex-1 relative z-10 min-w-0">
               <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <div className="md:hidden w-7 h-7 rounded-full bg-[#F2FAFC] flex items-center justify-center text-[#19B5D8] shrink-0">
                      <Icon size={14} className="text-[#19B5D8]" strokeWidth={2} />
                   </div>
                   <h3 className="font-bold text-[#061B2E] text-base md:text-xl truncate md:whitespace-normal">{item.title}</h3>
               </div>
               <p className="text-[#64748B] text-[15px] md:text-base leading-[1.6] md:leading-relaxed break-words">{item.desc}</p>
            </div>

            {/* Arrow on hover (Desktop) */}
            <div className="hidden lg:flex w-10 h-10 shrink-0 justify-center items-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 relative z-10">
                <ArrowRight className="text-[#19B5D8]" size={20} />
            </div>
        </motion.div>
    );
};
export default FeatureRow;
`,
    'src/components/sections/WhyChooseUs.jsx': `import React from 'react';
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
`
};

for (const [filepath, content] of Object.entries(filesToCreate)) {
    fs.writeFileSync(filepath, content);
}
console.log('Files generated.');
