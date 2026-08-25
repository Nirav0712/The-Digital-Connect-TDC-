import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import GlowOrb from '../backgrounds/GlowOrb';
import AnimatedGrid from '../backgrounds/AnimatedGrid';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[auto] md:min-h-[90vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#F7FAFC]">
      {/* Background Motion System */}
      <div className="hidden md:block">
        <AnimatedGrid />
      </div>
      <GlowOrb className="hidden md:block w-[600px] h-[600px] top-[-10%] left-[-10%]" color="bg-brand-cyan" />
      <GlowOrb className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bottom-[-5%] right-[-5%] md:bottom-[-10%] md:right-[10%] animate-blob" style={{ animationDelay: '2s' }} color="bg-brand-soft-blue" />
      <GlowOrb className="hidden md:block w-[400px] h-[400px] top-[20%] right-[-5%] animate-blob" style={{ animationDelay: '5s' }} color="bg-brand-electric-cyan" />

      {/* Floating Labels */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[10%] hidden lg:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-cyan"></span> UI/UX Design
      </motion.div>
      {/* <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[15%] hidden lg:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-deep-blue"></span> Web Development
      </motion.div> */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] right-[5%] hidden xl:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-electric-cyan"></span> Digital Solutions
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-[#D9E7EF] text-sm font-bold mb-6 md:mb-8 shadow-sm text-[#063B63]">
            The Digital Connect
          </span>
          <h1 className="text-responsive-h1 font-extrabold tracking-tighter leading-[1.02] mb-6 text-[#061A2E]">
            Digital Experiences <br /> Built to Move <br />
            <span className="text-[#087EA4]">
              Businesses Forward.
            </span>
          </h1>
          <p className="text-responsive-body md:text-2xl text-[#607080] mb-8 md:mb-10 max-w-2xl leading-[1.6]">
            The Digital Connect creates high-performance websites, applications and digital experiences that help ambitious businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" className="group text-[16px] py-3.5 sm:py-2.5 w-full sm:w-auto justify-center" variant="primary">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/portfolio" className="bg-white border hover:border-brand-border/80 shadow-sm hover:bg-white/80 text-foreground text-[16px] py-3.5 sm:py-2.5 w-full sm:w-auto justify-center" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand-lavender/40 to-brand-blue/40 backdrop-blur-3xl border border-white/50 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center backdrop-blur-md shadow-sm">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                Creative Studio
              </div>
            </div>

            <div className="relative z-10 w-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm border border-white/50">
              <div className="w-16 h-2 bg-brand-primary-navy/50 rounded-full mb-4"></div>
              <div className="w-full h-8 bg-brand-deep-blue/30 rounded-lg mb-2"></div>
              <div className="w-3/4 h-8 bg-brand-deep-blue/30 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-electric-cyan/50"></div>
                <div className="w-8 h-8 rounded-full bg-brand-soft-blue/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
