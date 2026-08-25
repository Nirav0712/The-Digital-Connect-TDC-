import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Target, PenTool, Code, CheckCircle, Rocket, TrendingUp, Layers, Users, Zap, Shield } from 'lucide-react';
import Button from '../components/common/Button';

const processSteps = [
  {
    id: '01',
    title: 'Discover',
    icon: <Search className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Understand business goals',
    items: ['Identify challenges', 'Research users and market', 'Define project requirements']
  },
  {
    id: '02',
    title: 'Define',
    icon: <Target className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Create project strategy',
    items: ['Establish scope', 'Define technology direction', 'Set measurable objectives']
  },
  {
    id: '03',
    title: 'Design',
    icon: <PenTool className="text-brand-electric-cyan" size={32} />,
    subtitle: 'UX research & Design',
    items: ['Information architecture', 'Wireframes', 'UI design', 'Interactive prototypes']
  },
  {
    id: '04',
    title: 'Build',
    icon: <Code className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Development',
    items: ['Frontend development', 'Backend development', 'API integrations', 'CMS / platform development']
  },
  {
    id: '05',
    title: 'Validate',
    icon: <CheckCircle className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Testing & QA',
    items: ['Functional testing', 'Performance testing', 'Responsive testing', 'Security & UX validation']
  },
  {
    id: '06',
    title: 'Launch',
    icon: <Rocket className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Production deployment',
    items: ['Performance optimization', 'Analytics setup', 'Technical handover']
  },
  {
    id: '07',
    title: 'Grow',
    icon: <TrendingUp className="text-brand-electric-cyan" size={32} />,
    subtitle: 'Continuous improvements',
    items: ['Maintenance', 'Performance monitoring', 'New feature development']
  }
];

const strategyCards = [
  {
    title: 'Business First',
    description: 'Every technical decision maps directly to measurable business outcomes and long-term viability.',
    icon: <Layers size={28} className="text-brand-electric-cyan" />
  },
  {
    title: 'User Focused',
    description: 'Architecting interfaces and journeys based on how real humans use digital products.',
    icon: <Users size={28} className="text-brand-electric-cyan" />
  },
  {
    title: 'Technology Driven',
    description: 'Using modern frameworks to build secure, scalable, and extremely fast applications.',
    icon: <Zap size={28} className="text-brand-electric-cyan" />
  },
  {
    title: 'Performance Obsessed',
    description: 'Optimization is built-in from day one. Speed and reliable uptime are non-negotiable.',
    icon: <Shield size={28} className="text-brand-electric-cyan" />
  }
];

const Process = () => {
  return (
    <div className="w-full min-h-screen bg-brand-bg-light overflow-x-hidden pt-[72px]">
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-brand-primary-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,197,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(24,197,232,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-deep-blue rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-6">
              A Smarter Process. <br />
              <span className="text-brand-cyan">Better Digital Outcomes.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl">
              From the first conversation to final launch and beyond, our process combines strategy, design, technology, and continuous improvement to turn complex ideas into digital experiences that perform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-lg h-14 px-8 bg-brand-cyan text-brand-primary-navy hover:bg-brand-electric-cyan shadow-[0_0_20px_rgba(24,197,232,0.3)]">
                  Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/20 text-white hover:bg-white/10">
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS JOURNEY */}
      <section className="py-24 bg-white relative relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-3 block">Step-by-Step</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy leading-tight">
              The Journey to Digital Excellence
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-border md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Icon Node */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 md:top-1/2 w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-white border-[4px] border-brand-cyan text-brand-primary-navy font-bold rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                      <span className="text-xs md:text-sm">{step.id}</span>
                    </div>

                    {/* Content Block */}
                    <div className={`flex-1 pl-[70px] md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`bg-brand-off-white p-8 rounded-2xl border border-brand-border hover:shadow-xl hover:border-brand-cyan/30 transition-all duration-300 relative ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                          <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold font-heading text-brand-primary-navy">{step.title}</h3>
                        </div>
                        <p className="text-brand-cyan font-semibold mb-4">{step.subtitle}</p>
                        <ul className={`space-y-2 text-brand-text-muted ${isEven ? '' : 'md:inline-block md:text-right'}`}>
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 justify-start md:justify-[inherit]">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-light-blue shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="hidden md:block flex-1"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY SECTION */}
      <section className="py-24 bg-brand-off-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <span className="text-brand-light-blue font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy max-w-2xl leading-tight">
              Built Around Your Business
            </h2>
            <p className="text-brand-text-muted text-lg mt-6 max-w-2xl">
              We believe that strategy, design, and engineering must work seamlessly together. Our approach focuses on delivering holistic solutions that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-brand-border/60 hover:shadow-2xl hover:shadow-brand-primary-navy/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-bg-light rounded-2xl flex items-center justify-center mb-6 border border-brand-border">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-primary-navy mb-3">{card.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="py-24 bg-white relative border-y border-brand-border">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-3 block">Collaboration</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy max-w-3xl mx-auto leading-tight mb-16">
            One Team. One Clear Direction.
          </h2>

          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex items-center justify-between min-w-[800px] relative px-4">
              {/* Line connecting */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-brand-border -translate-y-1/2 z-0"></div>

              {['Strategy', 'Design', 'Development', 'QA', 'Launch', 'Growth'].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center gap-4 bg-white px-2"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary-navy text-brand-cyan flex items-center justify-center shadow-lg border-4 border-white font-bold text-xl cursor-default hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-brand-primary-navy whitespace-nowrap">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-brand-primary-navy text-white overflow-hidden m-4 md:m-8 rounded-3xl">
        <div className="absolute inset-0 bg-brand-deep-blue opacity-50 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
            Ready to build what's next?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a digital experience designed for real business impact.
          </p>
          <Link to="/contact">
            <Button className="h-16 px-10 text-lg bg-brand-cyan text-brand-primary-navy hover:bg-white shadow-[0_0_30px_rgba(24,197,232,0.4)] transition-all">
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
