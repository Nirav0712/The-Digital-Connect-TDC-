import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = ['Discover', 'Strategize', 'Design', 'Build', 'Test', 'Launch', 'Grow'];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <SectionHeading title="Our Process" subtitle="How We Work" centered />
          <p className="text-muted-foreground text-xl">A proven methodology designed to deliver exceptional digital products on time and on budget.</p>
        </div>

        <div className="relative hidden md:block mt-32">
          {/* Background Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-border rounded-full transform -translate-y-1/2"></div>

          {/* Animated Progress Line */}
          <motion.div
            style={{ width }}
            className="absolute top-0 left-0 h-1 bg-primary rounded-full transform -translate-y-1/2 z-10 origin-left"
          ></motion.div>

          {/* Steps */}
          <div className="flex justify-between relative z-20">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-border group-hover:border-primary transition-colors duration-300 transform -translate-y-1/2 mt-0.5"></div>
                <div className="mt-8 text-center">
                  <span className="text-xl font-heading font-extrabold text-border group-hover:text-primary transition-colors duration-300 block mb-2">0{i + 1}</span>
                  <h3 className="font-bold text-lg">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Process */}
        <div className="md:hidden space-y-10 border-l-2 border-border pl-6 ml-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-border"></div>
              <span className="text-lg font-heading font-extrabold text-muted-foreground/40 block mb-1">0{i + 1}</span>
              <h3 className="font-bold text-xl">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
