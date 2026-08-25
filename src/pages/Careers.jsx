import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Users, Lightbulb, MapPin, Code, Cpu, Target, Layers } from 'lucide-react';
import Button from '../components/common/Button';

const benefits = [
  { title: 'Meaningful Work', description: 'Be part of projects that directly impact digital landscapes and business performance.', icon: <Target className="text-brand-electric-cyan" size={28} /> },
  { title: 'Continuous Learning', description: 'Access to learning resources, certifications, and mentorship to keep your skills sharp.', icon: <GraduationCap className="text-brand-electric-cyan" size={28} /> },
  { title: 'Collaborative Culture', description: 'Work alongside ambitious peers in an environment that prioritizes team success.', icon: <Users className="text-brand-electric-cyan" size={28} /> },
  { title: 'Creative Freedom', description: 'We believe good ideas can come from anywhere. You have the freedom to innovate.', icon: <Lightbulb className="text-brand-electric-cyan" size={28} /> },
  { title: 'Growth Opportunities', description: 'Clear paths for career advancement shaped by your personal goals and contributions.', icon: <Layers className="text-brand-electric-cyan" size={28} /> },
  { title: 'Modern Technology', description: 'Work with the latest modern frameworks, infrastructure, and methodologies.', icon: <Cpu className="text-brand-electric-cyan" size={28} /> }
];

const cultureItems = [
  'Think boldly', 'Communicate openly', 'Take ownership', 'Learn continuously', 'Build with purpose', 'Celebrate progress'
];

const jobs = [
  { id: 1, title: 'Frontend Developer', dept: 'Engineering', location: 'Remote / India', exp: '3+ Years', desc: 'Build highly interactive, performance-obsessed user interfaces using React and modern CSS architectures.' },
  { id: 2, title: 'Backend Developer', dept: 'Engineering', location: 'Remote / India', exp: '3+ Years', desc: 'Architect robust and highly scalable server-side systems, logic and RESTful/GraphQL APIs using modern Node/Python.' },
  { id: 3, title: 'Full Stack Developer', dept: 'Engineering', location: 'Remote / India', exp: '5+ Years', desc: 'Own end-to-end solutions combining elegant front-ends with robust and secure backend infrastructure.' },
  { id: 4, title: 'UI/UX Designer', dept: 'Design', location: 'Remote / India', exp: '2+ Years', desc: 'Translate complex logic into intuitive and stunning user experiences across web and mobile.' },
  { id: 5, title: 'Digital Marketing Spec.', dept: 'Marketing', location: 'Remote', exp: '4+ Years', desc: 'Drive conversion outcomes using data-driven funnels, SEO, and omnichannel strategy execution.' },
  { id: 6, title: 'Project Manager', dept: 'Management', location: 'Remote', exp: '5+ Years', desc: 'Guide the product lifecycle uniting business objectives with engineering resources and design.' }
];

const Careers = () => {
  return (
    <div className="w-full min-h-screen bg-brand-bg-light overflow-x-hidden pt-[72px]">
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-brand-primary-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-deep-blue/60 via-brand-primary-navy to-brand-primary-navy"></div>
        <div className="absolute right-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-brand-primary-navy/80 to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight mb-6">
              Build What Matters. <br />
              <span className="text-brand-electric-cyan">Grow With Us.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl">
              We bring together strategists, designers, developers and problem-solvers who believe great digital experiences are built through curiosity, collaboration and craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#open-positions">
                <Button className="w-full sm:w-auto text-lg h-14 px-8 bg-brand-cyan text-brand-primary-navy hover:bg-brand-electric-cyan">
                  View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/about/team">
                <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/20 text-white hover:bg-white/10">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-brand-off-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-light-blue font-bold tracking-widest uppercase text-sm mb-3 block">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy leading-tight">
              More Than a Job. <span className="text-brand-cyan relative">A Place to Build.<svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-cyan/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-border/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-cyan/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-bg-light rounded-2xl flex items-center justify-center mb-6 border border-brand-border">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-primary-navy mb-3">{benefit.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CULTURE */}
      <section className="py-24 bg-white relative border-y border-brand-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-3 block">Our Culture</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy leading-tight mb-6">
                How We Work Together
              </h2>
              <p className="text-brand-text-muted text-lg mb-8">
                A great team is built on shared values. We cultivate an environment where talent can thrive without rigid corporate boundaries.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cultureItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`p-6 rounded-2xl border ${idx % 2 === 0 ? 'bg-brand-primary-navy text-white border-transparent' : 'bg-brand-off-white text-brand-primary-navy border-brand-border'} flex items-center justify-center text-center font-bold text-xl hover:scale-[1.02] transition-transform shadow-sm`}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="py-24 bg-brand-off-white relative">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-primary-navy leading-tight mb-16">
            Your Growth Journey
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto">
            {['Explore', 'Join', 'Learn', 'Contribute', 'Lead', 'Grow'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white border-2 border-brand-cyan/20 text-brand-primary-navy px-6 py-3 rounded-full font-bold shadow-sm"
                >
                  {step}
                </motion.div>
                {idx < arr.length - 1 && (
                  <div className="hidden sm:block text-brand-light-blue shrink-0">
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary-navy leading-tight mb-4">
                Open Positions
              </h2>
              <p className="text-brand-text-muted text-lg max-w-xl">
                Join our rapidly growing team. If you don't see your exact role listed, we still want to hear from you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-brand-off-white border border-brand-border p-8 rounded-3xl hover:border-brand-cyan transition-colors flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-heading text-brand-primary-navy group-hover:text-brand-cyan transition-colors">{job.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-brand-border">
                    <Briefcase size={18} className="text-brand-light-blue" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white border border-brand-border px-3 py-1 rounded-full text-brand-text-muted">
                    {job.dept}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-white border border-brand-border px-3 py-1 rounded-full text-brand-text-muted inline-flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-white border border-brand-border px-3 py-1 rounded-full text-brand-text-muted">
                    {job.exp}
                  </span>
                </div>

                <p className="text-brand-text-muted mb-8 flex-1">{job.desc}</p>

                <Link to={`/careers/${job.id}`} className="mt-auto">
                  <Button variant="outline" className="w-full justify-between group-hover:bg-brand-primary-navy group-hover:text-white group-hover:border-brand-primary-navy">
                    View Position <ArrowRight size={18} />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS CTA */}
      <section className="relative py-24 bg-brand-primary-navy text-white overflow-hidden m-4 md:m-8 rounded-3xl text-center">
        <div className="absolute inset-0 bg-brand-light-blue opacity-10"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            We're always interested in meeting talented people who can bring new perspectives to our team.
          </p>
          <Link to="/contact">
            <Button className="h-16 px-10 text-lg bg-brand-cyan text-brand-primary-navy hover:bg-white shadow-[0_0_30px_rgba(24,197,232,0.4)] transition-all">
              Send Your Profile <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
