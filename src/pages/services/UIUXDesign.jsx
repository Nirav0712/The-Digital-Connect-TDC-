import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { Layers, MonitorPlay, Palette, Grid, Component, Eye, Fingerprint, MousePointerClick } from 'lucide-react';

const UIUXHeroVisual = () => (
  <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center z-20">

    {/* Wireframe Card */}
    <motion.div
      animate={{ y: [0, -10, 0], x: [0, -10, 0], rotate: [-5, -2, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[10%] left-[5%] w-[200px] bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex flex-col gap-3 z-10 opacity-70"
    >
      <div className="text-[10px] font-bold text-black/40 tracking-widest mb-1">WIREFRAME</div>
      <div className="w-full h-24 border-2 border-dashed border-black/10 rounded-lg flex items-center justify-center">
        <Grid className="w-8 h-8 text-black/10" />
      </div>
      <div className="w-3/4 h-2 bg-black/5 rounded-full mt-2"></div>
      <div className="w-1/2 h-2 bg-black/5 rounded-full"></div>
    </motion.div>

    {/* Prototype Card */}
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[20%] right-[5%] w-[220px] bg-white rounded-2xl shadow-2xl border border-brand-lavender/30 p-4 flex flex-col gap-3 z-20"
    >
      <div className="text-[10px] font-bold text-brand-lavender tracking-widest mb-1 flex items-center justify-between">
        PROTOTYPE <MousePointerClick className="w-3 h-3" />
      </div>
      <div className="w-full h-28 bg-brand-lavender/10 rounded-lg border border-brand-lavender/20 flex flex-col p-3 gap-2 relative overflow-hidden">
        <div className="w-full h-6 bg-white rounded shadow-sm"></div>
        <div className="flex gap-2">
          <div className="w-1/2 h-6 bg-white rounded shadow-sm"></div>
          <div className="w-1/2 h-6 bg-brand-peach/30 rounded shadow-sm"></div>
        </div>
        <motion.div
          animate={{ left: ['10%', '80%', '10%'], top: ['20%', '70%', '20%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-3 h-3 rounded-full bg-brand-lavender shadow-md z-10"
        ></motion.div>
      </div>
    </motion.div>

    {/* Final UI Card */}
    <motion.div
      animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[25%] left-[25%] w-[260px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-brand-peach/30 p-5 flex flex-col gap-4 z-30"
    >
      <div className="text-[10px] font-bold text-brand-peach tracking-widest mb-1 flex items-center gap-1">
        <Palette className="w-3 h-3" /> FINAL UI
      </div>
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-brand-peach/40 via-brand-pink/20 to-brand-lavender/30 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative z-10 grid grid-cols-2 gap-3 w-full px-4">
          <div className="h-10 bg-white rounded-lg shadow-sm border border-white/50"></div>
          <div className="h-10 bg-[#171717] rounded-lg shadow-sm"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-8 bg-brand-soft rounded-lg flex items-center px-3">
          <div className="w-full h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </motion.div>

  </div>
);

const UIUXUniqueVisual = () => (
  <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-16 px-4">
    <h3 className="text-2xl font-bold font-heading mb-16 text-center text-[#171717]">From Idea to Interface</h3>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
      {/* Connecting line */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-black/5 -translate-y-1/2 -z-10"></div>

      {[
        { title: "Research", icon: <Eye />, color: "text-blue-500", delay: 0 },
        { title: "Wireframe", icon: <Grid />, color: "text-gray-500", delay: 0.2 },
        { title: "Prototype", icon: <MonitorPlay />, color: "text-brand-lavender", delay: 0.4 },
        { title: "UI Design", icon: <Palette />, color: "text-brand-peach", delay: 0.6 },
        { title: "Testing", icon: <Fingerprint />, color: "text-green-500", delay: 0.8 }
      ].map((step, i) => (
        <div key={i} className="flex flex-col flex-1 items-center gap-4 relative group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay, duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-white border border-black/10 shadow-lg flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300"
          >
            {React.cloneElement(step.icon, { className: `w-7 h-7 mx-auto ${step.color}` })}
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay + 0.2, duration: 0.5 }}
            className="font-bold text-sm text-[#171717] px-2 text-center"
          >
            {step.title}
          </motion.span>
        </div>
      ))}
    </div>
  </div>
);

const UIUXDesign = () => {
  useSEO({
    title: "UI/UX Design Services | The Digital Connect",
    description: "We create intuitive digital experiences that balance user needs, business goals and beautiful visual systems."
  });

  return (
    <MainServiceLayout
      breadcrumb="UI/UX Design"
      title="Interfaces Designed Around People."
      subtitle="Human-Centered Design"
      description="We create intuitive digital experiences that balance user needs, business goals and beautiful visual systems."
      themeConfig={{
        bg: 'bg-brand-peach/10',
        accentText: 'text-orange-600',
        glowColor: 'bg-brand-peach'
      }}
      HeroVisual={UIUXHeroVisual}
      overview={{
        title: "Aesthetics driven by analytics.",
        content: "Great design is rarely just about making things look inherently beautiful; it’s about engineering visual systems that gracefully solve complex user problems. We utilize profound empathy, deep research, and rapid prototyping to build user interfaces that drastically reduce friction, elevate brand perception, and push conversion metrics through the roof."
      }}
      capabilities={[
        { icon: <Eye />, title: "UX Research", desc: "Understanding behavior patterns through deep qualitative and quantitative analysis." },
        { icon: <Layers />, title: "Information Architecture", desc: "Structuring complex data into intuitive, navigable hierarchies." },
        { icon: <Grid />, title: "Wireframing", desc: "Low-fidelity structural blueprints isolating logic from aesthetics." },
        { icon: <MonitorPlay />, title: "Prototyping", desc: "Interactive clickable models validating ideas before writing code." },
        { icon: <Palette />, title: "UI Design", desc: "High-fidelity, pixel-perfect interfaces dripping with brand personality." },
        { icon: <Component />, title: "Design Systems", desc: "Scalable component libraries ensuring absolute consistency globally." }
      ]}
      technologies={['Figma', 'FigJam', 'Adobe Creative Cloud', 'Framer', 'Provi', 'Design Tokens', 'Storybook']}
      UniqueVisual={UIUXUniqueVisual}
      processSteps={[
        { title: "Understand", desc: "Aligning deep business metrics with primary and secondary user personas." },
        { title: "Define", desc: "Mapping intricate user journeys and establishing core Information Architecture." },
        { title: "Ideate", desc: "Brainstorming wireframes across multiple iterations to rapidly unblock friction." },
        { title: "Prototype", desc: "Connecting wireframes into functional prototypes for immediate validation." },
        { title: "Test", desc: "Presenting prototypes to real users and iterating based on observed metrics." },
        { title: "Design", desc: "Applying the final visual layer (Colors, typography, micro-interactions)." },
        { title: "Handstill", desc: "Seamless code-ready handoff using comprehensive Design Systems." }
      ]}
      benefits={[
        { title: "Clear User Journeys", desc: "Frictionless paths ensuring users achieve their goals intuitively." },
        { title: "Higher Engagement", desc: "Beautiful interactions that keep users active inside your product." },
        { title: "Consistent Branding", desc: "A unified visual identity radiating trust and professionalism." },
        { title: "Better Accessibility", desc: "Designs functioning seamlessly for users of all abilities (WCAG)." },
        { title: "Faster Development", desc: "Engineers build 50% faster when working from pristine Design Systems." },
        { title: "Improved Conversion", desc: "Scientifically structured layouts explicitly designed to drive action." },
      ]}
      faqs={[
        { q: "What is the difference between UI and UX?", a: "UX (User Experience) is how a product feels and works—the logic, research, and flow. UI (User Interface) is how it looks—the colors, typography, buttons, and visual aesthetic. They must work together perfectly." },
        { q: "Do you redesign existing platforms?", a: "Yes. Our UX Audit process evaluates your current platform, identifies massive drop-off points, and provides a systematic redesign roadmap." },
        { q: "What tools do you use?", a: "We are heavily specialized in Figma. It allows real-time collaboration with you, seamless prototyping, and perfect dev-handoff." },
        { q: "Do you provide HTML/CSS after designing?", a: "Yes! We are a full-service agency. While we can just deliver Figma files, our engineering teams usually take our designs and build them flawlessly in React or standard web frameworks." }
      ]}
    />
  );
};

export default UIUXDesign;
