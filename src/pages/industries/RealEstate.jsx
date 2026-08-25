import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { RealEstateData } from '../../data/industries/real-estate';

const RealEstateVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-[#F7FAFC] rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden relative'>
    {/* Map stricture */}
    <div className='absolute inset-0 opacity-20' style={{backgroundImage: 'radial-gradient(#18C5E8 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
    <motion.div animate={{y: [-5, 5, -5]}} transition={{duration:4, repeat:Infinity}} className='absolute top-1/4 left-1/4 w-8 h-8 bg-[#061A2E] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-[10px]'>$</motion.div>
    <motion.div animate={{y: [5, -5, 5]}} transition={{duration:3.5, repeat:Infinity}} className='absolute bottom-1/3 right-1/4 w-8 h-8 bg-[#18C5E8] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-[10px]'>$</motion.div>
    <div className='absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-[#D9E7EF] flex gap-4'>
       <div className='w-1/3 h-16 bg-[#061A2E]/5 rounded-lg'></div>
       <div className='flex-grow flex flex-col gap-2 justify-center'>
          <div className='w-full h-3 bg-[#061A2E]/20 rounded'></div><div className='w-1/2 h-3 bg-[#18C5E8]/40 rounded'></div>
       </div>
    </div>
  </div>
);

const RealEstate = () => {
  useSEO({
    title: "Real Estate Digital Solutions | The Digital Connect",
    description: "Create modern property platforms that simplify discovery, management, communication and transactions."
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="real-estate"
        eyebrow="REAL ESTATE TECHNOLOGY"
        headline="Digital Experiences That Move Property Businesses Forward."
        description="Create modern property platforms that simplify discovery, management, communication and transactions."
        visual={RealEstateVisual}
        ctaText="Build Your Property Platform"
      />
      <IndustryOverview 
        title="Transforming Real Estate with Digital Architecture"
        content={[
          RealEstateData.desc ? `"${RealEstateData.desc}"` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={RealEstateData.challenges} />
      
      <IndustryUniqueSection title="The Real Estate Journey" variant="real-estate">
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
      
      <IndustrySolutions solutions={RealEstateData.solutions} variant="real-estate" />
      <IndustryCTA title="Build Your Property Platform →" variant="real-estate" />
    </div>
  );
};
export default RealEstate;
