import React from 'react';
import { ArrowRight } from 'lucide-react';

export const IndustrySolutions = ({ solutions, variant }) => (
  <section className='py-16 lg:py-32 bg-[#F7FAFC] px-5 lg:px-8'>
    <div className='max-w-[1400px] mx-auto'>
      <div className='mb-12 lg:mb-20'>
        <span className='text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block text-[#087EA4]'>Digital Solutions</span>
        <h2 className='text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-tight'>What We Build</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
        {solutions.map((sol, i) => (
          <div key={i} className='bg-white border border-[#D9E7EF] p-8 rounded-3xl group hover:-translate-y-2 hover:border-[#087EA4]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col'>
            <h3 className='text-xl lg:text-2xl font-bold text-[#061A2E] mb-4'>{sol.title}</h3>
            <p className='text-[#607080] mb-8 leading-relaxed'>{sol.desc}</p>
            <div className='mt-auto flex justify-end'>
              <div className='w-12 h-12 rounded-full border border-[#D9E7EF] flex items-center justify-center group-hover:bg-[#061A2E] group-hover:text-white transition-colors duration-300'>
                <ArrowRight className='w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default IndustrySolutions;