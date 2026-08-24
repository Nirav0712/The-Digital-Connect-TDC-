import React from 'react';
import SectionHeading from '../common/SectionHeading';

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading title="Client Testimonials" subtitle="What They Say" centered />
        <div className="max-w-4xl mx-auto mt-12 bg-secondary/20 p-12 rounded-2xl border border-border">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic text-foreground">
            "They didn't just build what we asked for. They asked the right questions to build what our business actually needed to succeed."
          </p>
          <div>
            <h4 className="font-bold text-lg">Sarah Jenkins</h4>
            <span className="text-muted-foreground text-sm uppercase tracking-wider block mt-1">CTO, TechNova</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
