import React from 'react';
export const IndustryUniqueSection = ({ title, children, variant }) => (
  <section className='py-16 lg:py-32 bg-white px-5 lg:px-8 border-y border-[#D9E7EF] overflow-hidden'>
    <div className='max-w-[1400px] mx-auto'>
      <div className='mb-16 text-center max-w-3xl mx-auto'>
        <h2 className='text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] mb-4'>{title}</h2>
      </div>
      <div className='w-full'>
        {children}
      </div>
    </div>
  </section>
);
export default IndustryUniqueSection;