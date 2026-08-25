import React from 'react';
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
