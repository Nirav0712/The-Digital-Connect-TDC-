import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { EcommerceData } from '../../data/industries/ecommerce';

const EcommerceVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col'>
    <div className='p-4 border-b border-[#D9E7EF] flex justify-between items-center'>
      <div className='w-20 h-4 bg-[#061A2E]/10 rounded'></div>
      <div className='flex gap-2'><div className='w-4 h-4 rounded-full bg-[#18C5E8]/40'></div></div>
    </div>
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow'>
      <motion.div whileHover={{scale: 1.02}} className='bg-[#F7FAFC] rounded-xl border border-[#D9E7EF] overflow-hidden flex flex-col'>
         <div className='h-3/5 bg-[#D9A72E]/10'></div>
         <div className='p-3 flex-grow flex flex-col gap-2 justify-end'>
            <div className='w-3/4 h-3 bg-[#061A2E]/10 rounded'></div><div className='w-1/2 h-3 bg-[#18C5E8]/30 rounded'></div>
         </div>
      </motion.div>
      <motion.div whileHover={{scale: 1.02}} className='bg-[#F7FAFC] rounded-xl border border-[#D9E7EF] overflow-hidden flex flex-col'>
         <div className='h-3/5 bg-[#18C5E8]/10'></div>
         <div className='p-3 flex-grow flex flex-col gap-2 justify-end'>
            <div className='w-3/4 h-3 bg-[#061A2E]/10 rounded'></div><div className='w-1/2 h-3 bg-[#18C5E8]/30 rounded'></div>
         </div>
      </motion.div>
    </div>
  </div>
);

const Ecommerce = () => {
  useSEO({
    title: "Ecommerce Digital Solutions | The Digital Connect",
    description: "Create fast, scalable ecommerce experiences designed around conversion, customer experience and long-term growth."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="ecommerce"
        eyebrow="ECOMMERCE TECHNOLOGY"
        headline="Digital Commerce Experiences That Turn Browsers Into Buyers."
        description="Create fast, scalable ecommerce experiences designed around conversion, customer experience and long-term growth."
        visual={EcommerceVisual}
        ctaText="Build Your Ecommerce Experience"
      />
      <IndustryOverview 
        title="Transforming Ecommerce with Digital Architecture"
        content={[
          EcommerceData.desc ? `"${EcommerceData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={EcommerceData.challenges} />
      
      <IndustryUniqueSection title="The Ecommerce Journey" variant="ecommerce">
         <div className="flex flex-wrap items-center justify-center gap-4 py-8">
            {[1, 2, 3, 4, 5].map((step, idx) => (
               <React.Fragment key={idx}>
                 <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm flex items-center justify-center text-[#061A2E] font-bold text-lg"
                 >
                   {step}
                 </motion.div>
                 {idx < 4 && (
                   <div className="hidden sm:block h-1 w-8 bg-[#18C5E8]/30 overflow-hidden relative">
                     <motion.div className="absolute top-0 bottom-0 left-0 bg-[#18C5E8]" initial={{width: 0}} animate={{width: '100%'}} transition={{duration: 1.5, repeat: Infinity, delay: idx * 0.2}} />
                   </div>
                 )}
               </React.Fragment>
            ))}
         </div>
      </IndustryUniqueSection>
      
      <IndustrySolutions solutions={EcommerceData.solutions} variant="ecommerce" />
      <IndustryCTA title="Build Your Ecommerce Experience →" variant="ecommerce" />
    </div>
  );
};
export default Ecommerce;
