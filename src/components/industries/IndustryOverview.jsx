import React from 'react';

export const IndustryOverview = ({ title, content }) => (
  <section className='py-16 lg:py-32 bg-white px-5 lg:px-8 relative overflow-hidden'>
    <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 relative z-10'>
      <div className='lg:col-span-5 relative'>
        <span className='text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block text-[#18C5E8]'>Overview</span>
        <h2 className='text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-[1.15] sticky top-24 md:top-32'>{title}</h2>
      </div>
      <div className='lg:col-span-7'>
        <div className='prose prose-lg prose-neutral max-w-none text-[#607080] space-y-6 text-lg md:text-xl leading-[1.7]'>
          {content.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  </section>
);
export default IndustryOverview;