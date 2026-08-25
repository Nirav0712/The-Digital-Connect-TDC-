const fs = require('fs');

const visualMap = {
    'Healthcare': `const HealthcareVisual = () => (
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
);`,
    'Fintech': `const FintechVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col relative'>
    <div className='bg-[#03111F] p-4 flex justify-between items-center text-white'>
      <span className='font-bold text-[#8EC8E8]'>FinSight Analytics</span>
      <div className='w-24 h-4 bg-white/10 rounded-full'></div>
    </div>
    <div className='p-6 flex-grow relative bg-[#061A2E] flex flex-col gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        {[1,2,3].map(i => <div key={i} className='bg-white/5 border border-white/10 rounded-lg p-3 h-16'></div>)}
      </div>
      <div className='flex-grow bg-[#0B1724] rounded-lg border border-white/5 p-4 flex items-end gap-2'>
        {[40,70,45,90,60,110,80].map((h, i) => (
          <motion.div key={i} initial={{height: 10}} animate={{height: h}} transition={{duration:1.5, repeat:Infinity, repeatType: 'reverse', delay: i*0.1}} className='flex-grow bg-[#18C5E8] rounded-t-sm opacity-80'></motion.div>
        ))}
      </div>
    </div>
  </div>
);`,
    'Ecommerce': `const EcommerceVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex flex-col'>
    <div className='p-4 border-b border-[#D9E7EF] flex justify-between items-center'>
      <div className='w-20 h-4 bg-[#061A2E]/10 rounded'></div>
      <div className='flex gap-2'><div className='w-4 h-4 rounded-full bg-[#18C5E8]/40'></div></div>
    </div>
    <div className='p-6 grid grid-cols-2 gap-4 flex-grow'>
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
);`,
    'Education': `const EducationVisual = () => (
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
);`,
    'RealEstate': `const RealEstateVisual = () => (
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
);`,
    'Travel': `const TravelVisual = () => (
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
    <div className='flex-grow grid grid-cols-2 gap-4'>
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
);`,
    'Logistics': `const LogisticsVisual = () => (
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
);`,
    'SaaS': `const SaaSVisual = () => (
  <div className='w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-2xl border border-[#D9E7EF] overflow-hidden flex relative'>
    <div className='w-16 bg-[#061A2E] flex flex-col items-center py-6 gap-6'>
       <div className='w-8 h-8 rounded bg-[#18C5E8]/20'></div>
       <div className='w-6 h-6 rounded bg-white/10'></div>
       <div className='w-6 h-6 rounded bg-white/10'></div>
    </div>
    <div className='flex-grow p-6 flex flex-col gap-6 bg-[#F7FAFC]'>
       <div className='flex justify-between items-center'><div className='w-32 h-6 bg-[#061A2E]/10 rounded'></div><div className='w-10 h-10 rounded-full bg-[#D9A72E]/20'></div></div>
       <div className='grid grid-cols-3 gap-4'>
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
);`
};

for (const ind of Object.keys(visualMap)) {
    const filePath = `src/pages/industries/${ind}.jsx`;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace the generic component regex
        content = content.replace(/const \w+Visual = \(\) => \([\s\S]*?\[.*? specific UI\][\s\S]*?<\/div>\s*\);\n/gm, visualMap[ind] + '\n');
        fs.writeFileSync(filePath, content);
    }
}
console.log('Visuals updated.');
