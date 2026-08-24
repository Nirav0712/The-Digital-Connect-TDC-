import React from 'react';
import Button from '../common/Button';
import GlowOrb from '../backgrounds/GlowOrb';

const FinalCTA = () => {
  return (
    <section className="py-32 bg-primary text-white text-center px-6 overflow-hidden relative">
      <GlowOrb className="w-[800px] h-[800px] top-[-30%] left-[-20%] bg-brand-peach opacity-20 animate-blob" />
      <GlowOrb className="w-[600px] h-[600px] bottom-[-20%] right-[-10%] bg-brand-purple opacity-20 animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight text-white leading-tight">
          Have an idea? <br /> Let's make it digital.
        </h2>
        <p className="text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
          We partner with ambitious brands to solve complex problems through design and robust engineering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button to="/contact" className="bg-white text-primary hover:bg-white/90">
            Start a Project
          </Button>
          <Button to="/contact" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
