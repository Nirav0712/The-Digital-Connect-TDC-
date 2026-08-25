import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { SaaSData } from '../../data/industries/saas';

const SaaSVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-2xl border border-[#D9E7EF] overflow-hidden flex relative'>
    <div className='w-16 bg-[#061A2E] flex flex-col items-center py-6 gap-6'>
       <div className='w-8 h-8 rounded bg-[#18C5E8]/20'></div>
       <div className='w-6 h-6 rounded bg-white/10'></div>
       <div className='w-6 h-6 rounded bg-white/10'></div>
    </div>
    <div className='flex-grow p-6 flex flex-col gap-6 bg-[#F7FAFC]'>
       <div className='flex justify-between items-center'><div className='w-32 h-6 bg-[#061A2E]/10 rounded'></div><div className='w-10 h-10 rounded-full bg-[#D9A72E]/20'></div></div>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {[1,2,3].map(i => <div key={i} className='bg-white rounded-xl border border-[#D9E7EF] p-4 flex flex-col gap-2'><div className='text-xs font-bold text-[#087EA4]'>METRIC {i}</div><div className='w-full h-4 bg-[#061A2E]/20 rounded'></div></div>)}
       </div>
       <motion.div animate={{opacity: [0.8, 1, 0.8]}} transition={{duration:3, repeat:Infinity}} className='flex-grow bg-white rounded-xl border border-[#D9E7EF] p-4 relative overflow-hidden'>
          <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#18C5E8]/10 to-transparent'></div>
          <svg className='absolute bottom-0 left-0 w-full h-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
             <path d='M0 100 Q 25 50 50 80 T 100 20 L 100 100 Z' fill='rgba(24,197,232,0.1)' />
             <path d='M0 100 Q 25 50 50 80 T 100 20' fill='none' stroke='#18C5E8' strokeWidth='2' />
          </svg>
       </motion.div>
    </div>
  </div>
);

const SaaS = () => {
  useSEO({
    title: "SaaS Digital Solutions | The Digital Connect",
    description: "Design and develop SaaS products that are intuitive for users and built to scale with growing businesses."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="saas"
        eyebrow="SAAS PRODUCT DEVELOPMENT"
        headline="From Product Idea to Scalable SaaS Platform."
        description="Design and develop SaaS products that are intuitive for users and built to scale with growing businesses."
        visual={SaaSVisual}
        ctaText="Build Your SaaS Product"
      />
      <IndustryOverview 
        title="Transforming SaaS with Digital Architecture"
        content={[
          SaaSData.desc ? `"${SaaSData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={SaaSData.challenges} />
      
      <IndustryUniqueSection title="The SaaS Journey" variant="saas">
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
      
      <IndustrySolutions solutions={SaaSData.solutions} variant="saas" />
      <IndustryCTA title="Build Your SaaS Product →" variant="saas" />
    </div>
  );
};
export default SaaS;
