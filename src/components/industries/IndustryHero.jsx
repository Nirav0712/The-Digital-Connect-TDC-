import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const bgThemes = {
  healthcare: 'bg-[#F2FAFC]',
  fintech: 'bg-[#F4F7FB]',
  ecommerce: 'bg-[#F7FCF5]',
  education: 'bg-[#FCF5F5]',
  'real-estate': 'bg-[#FCFBF5]',
  travel: 'bg-[#F5EDFA]',
  logistics: 'bg-[#F0F2F5]',
  saas: 'bg-[#F0F5FF]'
};

export const IndustryHero = ({ variant, eyebrow, headline, description, visual: Visual, ctaText = 'Start a Project', ctaLink = '/contact' }) => {
  return (
    <section className={`relative pt-[100px] pb-16 lg:pt-[160px] lg:pb-32 px-5 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 items-center overflow-x-hidden ${bgThemes[variant] || 'bg-[#F7FAFC]'}`}>
      <div className='flex flex-col z-10 relative'>
        <div className='flex items-center gap-2 text-[13px] md:text-sm font-semibold mb-6 md:mb-8 text-[#061A2E]/60 flex-wrap'>
          <Link to='/' className='hover:text-[#061A2E] transition-colors shrink-0'>Home</Link>
          <ChevronRight className='w-3.5 h-3.5 shrink-0' />
          <Link to='/industries' className='hover:text-[#061A2E] transition-colors shrink-0'>Industries</Link>
          <ChevronRight className='w-3.5 h-3.5 shrink-0' />
          <span className='text-[#087EA4] shrink-0 font-bold capitalize'>{variant.replace('-', ' ')}</span>
        </div>
        <span className='text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 text-[#18C5E8]'>{eyebrow}</span>
        <h1 className='text-[clamp(40px,9vw,64px)] font-heading font-extrabold text-[#061A2E] leading-[1.05] mb-6 md:mb-8 tracking-tight max-w-[800px]'>{headline}</h1>
        <p className='text-[17px] md:text-xl text-[#607080] leading-[1.6] mb-8 md:mb-10 max-w-xl'>{description}</p>
        <div className='flex'>
          <Link to={ctaLink} className='bg-[#061A2E] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#087EA4] transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto'>
            {ctaText}
          </Link>
        </div>
      </div>
      <div className='relative w-full flex justify-center items-center'>
        {Visual && <Visual />}
      </div>
    </section>
  );
};
export default IndustryHero;