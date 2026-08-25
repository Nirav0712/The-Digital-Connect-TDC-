import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { FintechData } from '../../data/industries/fintech';

const FintechVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col relative'>
    <div className='bg-[#03111F] p-4 flex justify-between items-center text-white'>
      <span className='font-bold text-[#8EC8E8]'>FinSight Analytics</span>
      <div className='w-24 h-4 bg-white/10 rounded-full'></div>
    </div>
    <div className='p-6 flex-grow relative bg-[#061A2E] flex flex-col gap-4'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {[1,2,3].map(i => <div key={i} className='bg-white/5 border border-white/10 rounded-lg p-3 h-16'></div>)}
      </div>
      <div className='flex-grow bg-[#0B1724] rounded-lg border border-white/5 p-4 flex items-end gap-2'>
        {[40,70,45,90,60,110,80].map((h, i) => (
          <motion.div key={i} initial={{height: 10}} animate={{height: h}} transition={{duration:1.5, repeat:Infinity, repeatType: 'reverse', delay: i*0.1}} className='flex-grow bg-[#18C5E8] rounded-t-sm opacity-80'></motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Fintech = () => {
  useSEO({
    title: "Fintech Digital Solutions | The Digital Connect",
    description: "Design and develop secure financial products that make complex financial services simpler, faster and more accessible."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="fintech"
        eyebrow="FINTECH DIGITAL SOLUTIONS"
        headline="Digital Banking Experiences Built for Trust and Scale."
        description="Design and develop secure financial products that make complex financial services simpler, faster and more accessible."
        visual={FintechVisual}
        ctaText="Build Your Fintech Product"
      />
      <IndustryOverview 
        title="Transforming Fintech with Digital Architecture"
        content={[
          FintechData.desc ? `"${FintechData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={FintechData.challenges} />
      
      <IndustryUniqueSection title="The Fintech Journey" variant="fintech">
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
      
      <IndustrySolutions solutions={FintechData.solutions} variant="fintech" />
      <IndustryCTA title="Build Your Fintech Product →" variant="fintech" />
    </div>
  );
};
export default Fintech;
