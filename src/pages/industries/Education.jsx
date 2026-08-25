import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { EducationData } from '../../data/industries/education';

const EducationVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-[#061A2E] rounded-3xl shadow-xl border border-white/10 overflow-hidden flex p-4 gap-4'>
    <div className='w-1/4 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-3 p-3'>
       <div className='w-full h-8 rounded bg-[#18C5E8]/20'></div>
       <div className='w-3/4 h-4 rounded bg-white/10 mt-4'></div>
       <div className='w-1/2 h-4 rounded bg-white/10'></div>
    </div>
    <div className='flex-grow flex flex-col gap-4'>
       <div className='h-1/3 bg-gradient-to-r from-[#D9A72E]/20 to-[#18C5E8]/20 rounded-xl border border-white/10 p-4 flex flex-col justify-end gap-2'>
         <span className='text-white font-bold tracking-wider text-sm'>COURSE PROGRESS</span>
         <div className='w-full h-2 bg-white/10 rounded overflow-hidden'><motion.div animate={{width: ['10%', '80%', '80%']}} transition={{duration: 3, repeat: Infinity}} className='h-full bg-[#18C5E8]'></motion.div></div>
       </div>
       <div className='flex-grow grid grid-cols-2 gap-4'>
         <div className='bg-white/5 rounded-xl border border-white/10'></div>
         <div className='bg-white/5 rounded-xl border border-white/10'></div>
       </div>
    </div>
  </div>
);

const Education = () => {
  useSEO({
    title: "Education Digital Solutions | The Digital Connect",
    description: "Build engaging digital learning platforms that connect students, teachers and institutions through intuitive technology."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="education"
        eyebrow="EDTECH SOLUTIONS"
        headline="Technology That Makes Learning More Connected."
        description="Build engaging digital learning platforms that connect students, teachers and institutions through intuitive technology."
        visual={EducationVisual}
        ctaText="Build the Future of Learning"
      />
      <IndustryOverview 
        title="Transforming Education with Digital Architecture"
        content={[
          EducationData.desc ? `"${EducationData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={EducationData.challenges} />
      
      <IndustryUniqueSection title="The Education Journey" variant="education">
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
      
      <IndustrySolutions solutions={EducationData.solutions} variant="education" />
      <IndustryCTA title="Build the Future of Learning →" variant="education" />
    </div>
  );
};
export default Education;
