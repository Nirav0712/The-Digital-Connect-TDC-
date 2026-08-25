import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { LogisticsData } from '../../data/industries/logistics';

const LogisticsVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-[#03111F] rounded-3xl shadow-xl border border-white/10 overflow-hidden relative'>
    <div className='absolute inset-0 opacity-10' style={{backgroundImage: 'linear-gradient(rgba(24, 197, 232, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 197, 232, 0.4) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
    <motion.div animate={{opacity: [0.5, 1, 0.5]}} transition={{duration: 2, repeat:Infinity}} className='absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#D9A72E] shadow-[0_0_15px_#D9A72E]'></motion.div>
    <motion.div animate={{opacity: [0.5, 1, 0.5]}} transition={{duration: 2, repeat:Infinity, delay:1}} className='absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-[#18C5E8] shadow-[0_0_15px_#18C5E8]'></motion.div>
    {/* Map Path */}
    <svg className='absolute inset-0 w-full h-full' style={{filter: 'drop-shadow(0 0 4px rgba(24,197,232,0.5))'}}>
       <path d='M 100 100 Q 200 200 300 300' fill='none' stroke='white' strokeWidth='2' strokeDasharray='5,5' />
    </svg>
    <div className='absolute bottom-6 left-6 w-48 bg-[#0B1724] border border-white/20 p-4 rounded-xl'>
       <div className='text-[#18C5E8] text-xs font-bold mb-2'>IN TRANSIT</div>
       <div className='w-full h-2 rounded-full bg-white/10'><motion.div animate={{width: ['10%', '80%', '10%']}} transition={{duration:5, repeat:Infinity}} className='h-full bg-[#18C5E8] rounded-full'></motion.div></div>
    </div>
  </div>
);

const Logistics = () => {
  useSEO({
    title: "Logistics Digital Solutions | The Digital Connect",
    description: "Build digital logistics systems that improve visibility, automate workflows and keep operations moving efficiently."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="logistics"
        eyebrow="LOGISTICS TECHNOLOGY"
        headline="Connected Technology For Smarter Operations."
        description="Build digital logistics systems that improve visibility, automate workflows and keep operations moving efficiently."
        visual={LogisticsVisual}
        ctaText="Connect Your Logistics Operations"
      />
      <IndustryOverview 
        title="Transforming Logistics with Digital Architecture"
        content={[
          LogisticsData.desc ? `"${LogisticsData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={LogisticsData.challenges} />
      
      <IndustryUniqueSection title="The Logistics Journey" variant="logistics">
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
      
      <IndustrySolutions solutions={LogisticsData.solutions} variant="logistics" />
      <IndustryCTA title="Connect Your Logistics Operations →" variant="logistics" />
    </div>
  );
};
export default Logistics;
