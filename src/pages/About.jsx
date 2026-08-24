import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import FinalCTA from '../components/home/FinalCTA';
import GlowOrb from '../components/backgrounds/GlowOrb';

const values = [
  { title: 'Innovation', desc: 'Pushing boundaries with modern tech.' },
  { title: 'Integrity', desc: 'Honest communication at all times.' },
  { title: 'Collaboration', desc: 'We work as an extension of your team.' },
  { title: 'Quality', desc: 'Refusing to compromise on excellence.' },
  { title: 'Transparency', desc: 'Clear processes and visible progress.' },
  { title: 'Growth', desc: 'Focusing on metrics that drive scale.' }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 px-6 bg-brand-soft relative overflow-hidden text-center">
        <GlowOrb className="w-[600px] h-[600px] top-[-50%] left-[-10%] bg-brand-peach opacity-40 animate-blob" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-6 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight">
            We connect ideas, technology and people.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Who We Are" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The Digital Connect is a premium digital agency specializing in full-stack development, UX/UI design, and high-performance branding platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started with a simple belief: the best digital products are born at the intersection of business strategy and technical excellence.
            </p>
          </div>
          <div className="aspect-square bg-brand-lavender rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-primary/30 font-bold text-3xl">Creative Space</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-brand-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Core Values" subtitle="What Drives Us" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {values.map((v, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-border shadow-sm hover:border-primary/20 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-mint mb-6"></div>
                <h3 className="text-2xl font-bold font-heading mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </div>
  );
};
export default About;
