import React from 'react';
import { servicesData } from '../data/services';
import ServicesComponent from '../components/home/Services';
import FinalCTA from '../components/home/FinalCTA';
import GlowOrb from '../components/backgrounds/GlowOrb';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-32 px-6 bg-white relative overflow-hidden text-center border-b border-border">
        <GlowOrb className="w-[500px] h-[500px] top-[-20%] left-[20%] bg-brand-blue opacity-30 animate-blob" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight">
            Digital solutions designed around your business.
          </h1>
        </div>
      </section>

      {/* Reuse the animated services block from home */}
      <ServicesComponent />

      <FinalCTA />
    </div>
  );
};
export default ServicesPage;
