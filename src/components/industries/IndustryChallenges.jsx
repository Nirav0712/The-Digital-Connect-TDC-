import React from 'react';
import { AlertCircle } from 'lucide-react';

export const IndustryChallenges = ({ challenges, title = 'Industry Challenges' }) => (
  <section className='py-16 lg:py-24 bg-[#03111F] text-white px-5 lg:px-8 relative overflow-hidden'>
    <div className='max-w-[1400px] mx-auto'>
      <div className='mb-12'>
        <h2 className='text-[clamp(32px,7vw,48px)] font-heading font-extrabold mb-4'>{title}</h2>
        <p className='text-[#8EC8E8] text-lg max-w-2xl'>What holds most businesses back in this sector.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {challenges.map((challenge, i) => (
          <div key={i} className='bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors'>
            <AlertCircle className='text-[#18C5E8] w-8 h-8 mb-6' />
            <p className='text-lg font-semibold text-white'>{challenge}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default IndustryChallenges;