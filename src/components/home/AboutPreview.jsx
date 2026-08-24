import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCard = ({ number, text }) => {
  return (
    <div className="border-t border-border pt-6">
      <p className="text-5xl font-heading font-extrabold text-primary mb-2 tracking-tighter">{number}</p>
      <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">{text}</p>
    </div>
  );
};

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-soft/50 -z-10 rounded-l-[100px]"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
            Technology <span className="text-brand-purple italic">meets</span> creativity.
          </h2>
        </div>
        <div className="space-y-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Digital Connect is a full-service digital agency focused on building platforms that push boundaries. With over a decade of experience, our team of designers, engineers, and strategists work collaboratively to transform complex problems into elegant, scalable digital solutions.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <StatCard number="10+" text="Years Experience" />
            <StatCard number="150+" text="Projects Delivered" />
            <StatCard number="50+" text="Happy Clients" />
            <StatCard number="12+" text="Countries Served" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
