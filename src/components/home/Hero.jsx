import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import GlowOrb from '../backgrounds/GlowOrb';
import AnimatedGrid from '../backgrounds/AnimatedGrid';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-soft">
      {/* Background Motion System */}
      <AnimatedGrid />
      <GlowOrb className="w-[600px] h-[600px] top-[-10%] left-[-10%]" color="bg-brand-lavender" />
      <GlowOrb className="w-[500px] h-[500px] bottom-[-10%] right-[10%] animate-blob" style={{ animationDelay: '2s' }} color="bg-brand-blue" />
      <GlowOrb className="w-[400px] h-[400px] top-[20%] right-[-5%] animate-blob" style={{ animationDelay: '5s' }} color="bg-brand-peach" />

      {/* Floating Labels */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[10%] hidden lg:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-lavender"></span> UI/UX Design
      </motion.div>
      {/* <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[15%] hidden lg:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-blue"></span> Web Development
      </motion.div> */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] right-[5%] hidden xl:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm text-sm font-medium z-10"
      >
        <span className="w-2 h-2 rounded-full bg-brand-peach"></span> Digital Solutions
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-border text-sm font-bold mb-8 shadow-sm">
            The Digital Connect
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tighter leading-[1.05] mb-8">
            Digital Experiences <br /> Built to Move <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Businesses Forward.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            The Digital Connect creates high-performance websites, applications and digital experiences that help ambitious businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button to="/contact" className="group text-base" variant="primary">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/portfolio" className="bg-white border-none shadow-sm hover:bg-white/80 text-foreground text-base" variant="secondary">
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
              <div className="w-16 h-2 bg-brand-purple/50 rounded-full mb-4"></div>
              <div className="w-full h-8 bg-brand-blue/30 rounded-lg mb-2"></div>
              <div className="w-3/4 h-8 bg-brand-mint/30 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-peach/50"></div>
                <div className="w-8 h-8 rounded-full bg-brand-yellow/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
