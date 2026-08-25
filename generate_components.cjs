const fs = require('fs');
const dir = 'src/components/industries';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const compMap = {
    'IndustryHero.jsx': `import React from 'react';
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
    <section className={\`relative pt-[100px] pb-16 lg:pt-[160px] lg:pb-32 px-5 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 items-center overflow-x-hidden \${bgThemes[variant] || 'bg-[#F7FAFC]'}\`}>
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
export default IndustryHero;`,
    'IndustryOverview.jsx': `import React from 'react';

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
export default IndustryOverview;`,
    'IndustryChallenges.jsx': `import React from 'react';
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
export default IndustryChallenges;`,
    'IndustrySolutions.jsx': `import React from 'react';
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
export default IndustrySolutions;`,
    'IndustryUniqueSection.jsx': `import React from 'react';
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
export default IndustryUniqueSection;`,
    'IndustryCTA.jsx': `import React from 'react';
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
export default IndustryCTA;`
};

for (const [file, content] of Object.entries(compMap)) {
    fs.writeFileSync(dir + '/' + file, content);
}
console.log('Components created.');
