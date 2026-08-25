import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCard = ({ number, text }) => {
  return (
    <div className="border border-[rgba(24,197,232,0.18)] bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 transition-all hover:bg-[rgba(255,255,255,0.08)] flex flex-col items-center justify-center text-center">
      <p className="text-4xl lg:text-5xl font-heading font-extrabold text-[#FFFFFF] mb-2 tracking-tighter">{number}</p>
      <p className="text-[11px] lg:text-sm text-[#18C5E8] uppercase tracking-wider font-bold">{text}</p>
    </div>
  );
};

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-32 bg-[#03111F] relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#061A2E]/50 -z-10 rounded-l-[100px]"></div>
      <div className="max-w-7xl mx-auto px-5 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-[clamp(36px,10vw,60px)] font-heading font-extrabold tracking-tight leading-tight text-[#FFFFFF]">
            Technology <span className="text-[#18C5E8] italic">meets</span> creativity.
          </h2>
        </div>
        <div className="space-y-8 lg:space-y-12">
          <p className="text-lg lg:text-xl text-[#B9CAD7] leading-relaxed">
            The Digital Connect is a full-service digital agency focused on building platforms that push boundaries. With over a decade of experience, our team of designers, engineers, and strategists work collaboratively to transform complex problems into elegant, scalable digital solutions.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <StatCard number="10+" text="Years Exp" />
            <StatCard number="150+" text="Projects" />
            <StatCard number="50+" text="Clients" />
            <StatCard number="12+" text="Countries" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
