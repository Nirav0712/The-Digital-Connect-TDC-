import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { HealthcareData } from '../../data/industries/healthcare';

const HealthcareVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col relative'>
    <div className='bg-[#F2FAFC] border-b border-[#18C5E8]/20 p-4 flex items-center justify-between'>
      <div className='flex gap-2 items-center'><div className='w-8 h-8 rounded-full bg-[#18C5E8]/20 flex items-center justify-center text-[#18C5E8]'>+</div><span className='font-bold text-[#061A2E]'>Patient Portal</span></div>
    </div>
    <div className='p-6 flex-grow flex gap-4 relative overflow-hidden'>
      <motion.div animate={{y: [0, -10, 0]}} transition={{duration:3, repeat:Infinity}} className='w-1/3 bg-[#F7FAFC] rounded-xl border border-[#D9E7EF] p-4 flex flex-col gap-3'>
        <div className='h-2 bg-[#18C5E8]/30 rounded w-full'></div>
        <div className='h-2 bg-[#18C5E8]/20 rounded w-2/3'></div>
        <div className='mt-4 h-16 bg-[#18C5E8]/10 rounded border border-[#18C5E8]/20'></div>
      </motion.div>
      <div className='w-2/3 flex flex-col gap-4'>
        <div className='flex gap-4'>
          <motion.div animate={{opacity: [0.5, 1, 0.5]}} transition={{duration:2, repeat:Infinity}} className='w-1/2 h-20 bg-gradient-to-r from-[#18C5E8]/10 to-transparent border border-[#18C5E8]/20 rounded-xl'></motion.div>
          <div className='w-1/2 h-20 bg-[#F7FAFC] border border-[#D9E7EF] rounded-xl flex items-center justify-center text-[#061A2E]/40 text-sm font-bold'>Activity</div>
        </div>
        <div className='flex-grow bg-[#061A2E]/5 rounded-xl border border-[#D9E7EF] relative overflow-hidden flex items-end'>
           <motion.div animate={{width: ['10%', '60%', '10%']}} transition={{duration:4, repeat:Infinity}} className='h-32 bg-[#18C5E8]/10 border-t border-[#18C5E8]/30 w-1/2'></motion.div>
        </div>
      </div>
    </div>
  </div>
);

const Healthcare = () => {
  useSEO({
    title: "Healthcare Digital Solutions | The Digital Connect",
    description: "Build secure, intuitive digital platforms that improve patient engagement, streamline healthcare operations and help providers deliver better experiences."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="healthcare"
        eyebrow="DIGITAL HEALTHCARE SOLUTIONS"
        headline="Technology That Puts Better Healthcare Experiences First."
        description="Build secure, intuitive digital platforms that improve patient engagement, streamline healthcare operations and help providers deliver better experiences."
        visual={HealthcareVisual}
        ctaText="Build Better Healthcare Experiences"
      />
      <IndustryOverview 
        title="Transforming Healthcare with Digital Architecture"
        content={[
          HealthcareData.desc ? `"${HealthcareData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={HealthcareData.challenges} />
      
      <IndustryUniqueSection title="The Healthcare Journey" variant="healthcare">
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
      
      <IndustrySolutions solutions={HealthcareData.solutions} variant="healthcare" />
      <IndustryCTA title="Build Better Healthcare Experiences →" variant="healthcare" />
    </div>
  );
};
export default Healthcare;
