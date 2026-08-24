import React from 'react';
import { Target, Users, Zap, Shield, HeartHandshake, Box } from 'lucide-react';
import GlowOrb from '../backgrounds/GlowOrb';

const reasons = [
  { title: 'Strategic Thinking', desc: 'We align our technical solutions with your core business objectives.', icon: Target },
  { title: 'Design Excellence', desc: 'Crafting visually stunning experiences that engage users.', icon: Users },
  { title: 'Technical Expertise', desc: 'Senior engineers building robust, scalable architectures.', icon: Zap },
  { title: 'Scalable Solutions', desc: 'Future-proof development designed to grow with you.', icon: Box },
  { title: 'Transparent Comm.', desc: 'Clear communication and constant updates throughout the project.', icon: HeartHandshake },
  { title: 'Long-Term Partnership', desc: 'We support your digital products long after the initial launch.', icon: Shield }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <GlowOrb className="w-[800px] h-[800px] top-[-20%] left-[-20%] bg-brand-lavender opacity-10" />
      <GlowOrb className="w-[600px] h-[600px] bottom-[-10%] right-[-10%] bg-brand-blue opacity-10 animate-blob" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0 lg:pr-12">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">
            Built for businesses <br />that think ahead.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We don't just write code. We partner with you to solve complex business challenges through strategic design and innovative technology.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-brand-lavender mb-6" />
                <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                <p className="text-white/60 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
