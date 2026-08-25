import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const IndustryCTA = ({ title, variant }) => (
  <section className='py-20 lg:py-32 px-5 lg:px-8 relative overflow-hidden bg-[#061A2E] text-white'>
    <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(#18C5E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    <div className='max-w-[1000px] mx-auto text-center relative z-10'>
      <h2 className='text-[clamp(36px,9vw,64px)] font-heading font-extrabold text-white mb-6 md:mb-8 tracking-tight'>{title}</h2>
      <p className='text-xl text-[#8EC8E8] leading-relaxed max-w-2xl mx-auto mb-12'>Let's architect a scalable platform engineered entirely for your unique business logic.</p>
      <Link to='/contact' className='bg-[#18C5E8] text-[#03111F] px-10 py-5 rounded-xl font-extrabold text-[16px] tracking-wide hover:bg-white transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 w-full sm:w-auto justify-center'>
        Start a Project <ArrowRight className='w-5 h-5' />
      </Link>
    </div>
  </section>
);
export default IndustryCTA;