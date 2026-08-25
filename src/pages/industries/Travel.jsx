import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { TravelData } from '../../data/industries/travel';

const TravelVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col p-6 gap-6 relative'>
    <div className='absolute -right-10 -top-10 w-40 h-40 bg-[#18C5E8]/10 rounded-full blur-3xl'></div>
    <div className='flex justify-between items-end border-b border-[#D9E7EF] pb-4'>
       <div className='text-[#061A2E] font-bold text-2xl'>London</div>
       <div className='hidden sm:flex flex-grow justify-center relative'>
          <div className='w-1/2 h-px border-t border-dashed border-[#18C5E8]/50 relative'>
             <motion.div animate={{x: ['0%', '100%']}} transition={{duration:3, repeat:Infinity}} className='absolute -top-2 w-4 h-4 rounded-full bg-[#18C5E8]'></motion.div>
          </div>
       </div>
       <div className='text-[#061A2E] font-bold text-2xl'>Tokyo</div>
    </div>
    <div className='flex-grow grid grid-cols-1 md:grid-cols-2 gap-4'>
       <div className='bg-[#F7FAFC] rounded-2xl border border-[#D9E7EF] p-4 flex flex-col gap-2'>
         <div className='h-2 w-1/3 bg-[#087EA4]/30 rounded mb-4'></div>
         <div className='h-full bg-gradient-to-t from-[#D9A72E]/20 to-transparent rounded-xl'></div>
       </div>
       <div className='bg-[#F7FAFC] rounded-2xl border border-[#D9E7EF] p-4 flex flex-col gap-2'>
         <div className='h-2 w-1/3 bg-[#18C5E8]/30 rounded mb-4'></div>
         <div className='h-full bg-gradient-to-t from-[#063B63]/20 to-transparent rounded-xl'></div>
       </div>
    </div>
  </div>
);

const Travel = () => {
  useSEO({
    title: "Travel Digital Solutions | The Digital Connect",
    description: "Create seamless travel experiences that make discovery, booking and journey management effortless."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="travel"
        eyebrow="TRAVEL TECHNOLOGY"
        headline="Digital Journeys Designed Around the Traveler."
        description="Create seamless travel experiences that make discovery, booking and journey management effortless."
        visual={TravelVisual}
        ctaText="Create Better Travel Experiences"
      />
      <IndustryOverview 
        title="Transforming Travel with Digital Architecture"
        content={[
          TravelData.desc ? `"${TravelData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={TravelData.challenges} />
      
      <IndustryUniqueSection title="The Travel Journey" variant="travel">
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
      
      <IndustrySolutions solutions={TravelData.solutions} variant="travel" />
      <IndustryCTA title="Create Better Travel Experiences →" variant="travel" />
    </div>
  );
};
export default Travel;
