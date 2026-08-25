const fs = require('fs');
const path = require('path');

const makeDir = (dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

makeDir('src/components/company');
makeDir('src/pages/about');

const files = {
    'src/components/company/CompanySubNavigation.jsx': `import React from 'react';
import { NavLink } from 'react-router-dom';
import { Target, BookOpen, Users, Globe2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/about/mission', label: 'Our Mission', icon: Target },
  { path: '/about/brand-story', label: 'Brand Story', icon: BookOpen },
  { path: '/about/leadership', label: 'Leadership', icon: Users },
  { path: '/contact', label: 'Global Presence', icon: Globe2 }
];

export const CompanySubNavigation = () => {
  return (
    <div className="w-full bg-[#061B2E] border-b border-white/10 relative z-20">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <ul className="flex overflow-x-auto gap-3 md:gap-6 no-scrollbar py-4 md:py-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path} className="shrink-0 flex">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    \`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 \${
                      isActive 
                        ? 'bg-[#19B5D8]/10 border-[#19B5D8]/50 text-white shadow-[0_0_15px_rgba(25,181,216,0.15)]' 
                        : 'bg-white/5 border-transparent text-[#64748B] hover:bg-white/10 hover:text-white'
                    }\`
                  }
                >
                  <Icon size={16} />
                  <span className="font-bold text-sm whitespace-nowrap">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const CompanyGridNav = () => {
  const gridItems = [
    { path: '/about/mission', label: 'Our Mission', desc: 'Discover what drives us forward.', icon: Target },
    { path: '/about/brand-story', label: 'Brand Story', desc: 'The evolution of our agency.', icon: BookOpen },
    { path: '/about/leadership', label: 'Leadership', desc: 'Meet our executive team.', icon: Users },
    { path: '/contact', label: 'Global Presence', desc: 'Our locations worldwide.', icon: Globe2 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 w-full">
      {gridItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <NavLink to={item.path} key={item.path} className="group flex flex-col p-6 rounded-3xl bg-white border border-[#D7E6EC] hover:border-[#19B5D8] hover:shadow-[0_10px_30px_-15px_rgba(25,181,216,0.3)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#19B5D8]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
             <div className="w-12 h-12 bg-[#F2FAFC] rounded-2xl flex items-center justify-center text-[#061B2E] mb-6 group-hover:bg-[#19B5D8] group-hover:text-white transition-colors duration-300">
               <Icon size={24} />
             </div>
             <h3 className="text-xl font-bold text-[#061B2E] mb-2">{item.label}</h3>
             <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
             <div className="flex items-center gap-2 text-[#19B5D8] text-sm font-bold opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-auto">
               Explore <ArrowRight size={16} />
             </div>
          </NavLink>
        );
      })}
    </div>
  );
};
`,
    'src/pages/about/About.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation, CompanyGridNav } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const About = () => {
    useSEO({ title: "The Digital Connect | About Us", description: "Learn about The Digital Connect, our vision, and how we bring technology and design together." });

    return (
        <PageTransition>
            <div className="w-full bg-[#F4FAFC] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                
                <section className="relative pt-20 pb-32 overflow-hidden bg-[#061B2E] text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage:'radial-gradient(#19C7E8 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>
                    <div className="max-w-[1320px] mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
                        <span className="text-[#19C7E8] font-bold tracking-widest text-sm uppercase mb-6">About Us</span>
                        <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black leading-tight mb-8">
                            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19C7E8] to-[#00A8D6]">With Purpose.</span>
                        </h1>
                        <p className="text-[#617386] md:text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
                            We are a premium digital agency specializing in full-stack engineering, UX/UI architecture, and high-performance branding platforms.
                        </p>
                        
                        <CompanyGridNav />
                    </div>
                </section>
                
                <section className="py-24 max-w-[1320px] mx-auto px-5 md:px-8">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="flex flex-col gap-6">
                         <h2 className="text-4xl font-heading font-black text-[#061B2E]">Connecting Strategy with Execution.</h2>
                         <p className="text-[#617386] leading-relaxed text-lg">We started with a simple belief: the best digital products are born at the intersection of business strategy and technical excellence. We operate as a seamless extension of your internal team.</p>
                      </div>
                      <div className="bg-white rounded-3xl p-8 border border-[#DDF7FC] shadow-xl relative overflow-hidden">
                         <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#19C7E8]/10 rounded-full blur-3xl"></div>
                         <div className="grid grid-cols-2 gap-8 relative z-10">
                            <div><div className="text-4xl font-black text-[#00A8D6] mb-2">12+</div><div className="text-sm font-bold text-[#061B2E] uppercase">Years Experience</div></div>
                            <div><div className="text-4xl font-black text-[#00A8D6] mb-2">250+</div><div className="text-sm font-bold text-[#061B2E] uppercase">Projects Delivered</div></div>
                            <div><div className="text-4xl font-black text-[#00A8D6] mb-2">50+</div><div className="text-sm font-bold text-[#061B2E] uppercase">Engineers</div></div>
                            <div><div className="text-4xl font-black text-[#00A8D6] mb-2">15</div><div className="text-sm font-bold text-[#061B2E] uppercase">Countries</div></div>
                         </div>
                      </div>
                   </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default About;
`,
    'src/pages/about/Mission.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const Mission = () => {
    useSEO({ title: "Our Mission | The Digital Connect", description: "Our mission to deliver impactful technology." });

    const principles = [
        { title: "Customer First", desc: "Prioritizing end-user success above technical ego." },
        { title: "Strategic Thinking", desc: "Every architecture choice must have a business ROI." },
        { title: "Innovation", desc: "Consistently researching next-gen integrations safely." },
        { title: "Quality", desc: "Zero tolerance for technical debt or sloppy rollouts." },
        { title: "Long-Term Value", desc: "Building scalable foundations that survive business pivots." }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 max-w-[1320px] mx-auto text-center w-full">
                    <h1 className="text-[clamp(48px,10vw,90px)] font-heading font-black text-[#061B2E] leading-none mb-6">Our Mission</h1>
                    <p className="text-xl text-[#00A8D6] font-bold max-w-3xl mx-auto">Technology With Purpose. Experiences With Impact.</p>
                </section>
                
                <section className="py-16 bg-[#F4FAFC]">
                    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
                       <h2 className="text-3xl font-bold text-[#061B2E] mb-12 text-center">Mission Principles</h2>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {principles.map((p, i) => (
                               <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} key={i} className="bg-white p-8 rounded-2xl border border-[#DDF7FC] shadow-sm">
                                   <div className="text-3xl font-black text-[#19C7E8]/20 mb-4">0{i+1}</div>
                                   <h3 className="text-xl font-bold text-[#08243A] mb-3">{p.title}</h3>
                                   <p className="text-[#617386]">{p.desc}</p>
                               </motion.div>
                           ))}
                       </div>
                    </div>
                </section>
                
                <section className="py-32 bg-[#061B2E] text-center px-5 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Build Something Meaningful</h2>
                    <button className="bg-[#19C7E8] text-[#061B2E] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">Start A Project</button>
                </section>
            </div>
        </PageTransition>
    );
};
export default Mission;
`,
    'src/pages/about/BrandStory.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const BrandStory = () => {
    useSEO({ title: "Our Story | The Digital Connect", description: "The timeline and evolution of The Digital Connect." });

    const timeline = [
        { num: "01", title: "The Beginning", desc: "Founded with a vision to bridge the gap between heavy enterprise engineering and beautiful design." },
        { num: "02", title: "Building Expertise", desc: "Expanding our team to include strict UI/UX strategists and deep backend architects." },
        { num: "03", title: "Expanding Digital Capabilities", desc: "Launching comprehensive mobile and cloud-native practices for global reach." },
        { num: "04", title: "Long-Term Partnerships", desc: "Solidifying recurring agency-of-record status with major international brands." },
        { num: "05", title: "The Future", desc: "Pioneering AI architectures and next-generation immersive web experiences." }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 max-w-[1320px] mx-auto text-center w-full border-b border-[#F4FAFC]">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-[#061B2E] mb-6">Our Story</h1>
                    <p className="text-[#617386] text-lg max-w-2xl mx-auto">From a small room of developers to a global digital powerhouse. Here is how we evolved.</p>
                </section>
                
                <section className="py-24 max-w-[800px] mx-auto px-5 w-full relative">
                    <div className="absolute left-[39px] md:left-[50%] top-24 bottom-24 w-px bg-[#DDF7FC]"></div>
                    {timeline.map((item, index) => (
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} key={index} className={\`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 \${index % 2 === 0 ? 'md:flex-row-reverse' : ''}\`}>
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#19C7E8] shrink-0 z-10 flex items-center justify-center text-[#061B2E] font-bold shadow-[0_0_15px_rgba(25,181,216,0.3)] md:absolute md:left-1/2 md:-translate-x-1/2">
                                {item.num}
                            </div>
                            <div className={\`w-full md:w-1/2 \${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}\`}>
                                <div className="bg-[#F4FAFC] p-8 rounded-3xl border border-[#DDF7FC]">
                                    <h3 className="text-xl font-bold text-[#061B2E] mb-3">{item.title}</h3>
                                    <p className="text-[#617386] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </PageTransition>
    );
};
export default BrandStory;
`,
    'src/pages/about/Leadership.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Leadership = () => {
    useSEO({ title: "Leadership | The Digital Connect", description: "Meet the leadership team at The Digital Connect." });

    const leaders = [
        { role: "Executive Director", dept: "Leadership Team", name: "[Executive Name Placeholder]", expertise: "Enterprise Strategy & Operations" },
        { role: "CTO", dept: "Technology Leadership", name: "[CTO Name Placeholder]", expertise: "Cloud Architecture & Scalability" },
        { role: "Creative Director", dept: "Creative Leadership", name: "[Creative Director Placeholder]", expertise: "Brand Identity & UX/UI" },
        { role: "VP of Growth", dept: "Strategy & Growth", name: "[Growth VP Placeholder]", expertise: "Market Expansion & Partnerships" }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 bg-[#061B2E] text-center w-full">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-white mb-6">People Behind The Vision</h1>
                    <p className="text-[#DDF7FC] text-lg max-w-2xl mx-auto mb-16">The executives directing our global technical and creative strategies.</p>
                </section>
                
                <section className="py-24 max-w-[1320px] mx-auto px-5 md:px-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leaders.map((leader, i) => (
                            <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay:i*0.1}} key={i} className="flex flex-col sm:flex-row bg-[#F4FAFC] rounded-3xl overflow-hidden border border-[#DDF7FC] group">
                                <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto bg-[#DDF7FC] relative overflow-hidden group-hover:bg-[#19C7E8]/20 transition-colors">
                                   <div className="absolute inset-0 flex items-center justify-center text-[#061B2E]/20 font-bold uppercase tracking-widest rotate-90">Photo</div>
                                </div>
                                <div className="w-full sm:w-2/3 p-8 flex flex-col justify-center bg-white relative">
                                    <div className="text-[10px] uppercase font-bold text-[#19C7E8] tracking-widest mb-2">{leader.dept}</div>
                                    <h3 className="text-2xl font-black text-[#08243A] mb-1">{leader.name}</h3>
                                    <div className="text-[#00A8D6] font-bold mb-4">{leader.role}</div>
                                    <p className="text-[#617386] text-sm mb-6">{leader.expertise}</p>
                                    <a href="#" className="w-8 h-8 rounded-full bg-[#F4FAFC] flex items-center justify-center text-[#061B2E] hover:bg-[#19C7E8] hover:text-white transition-colors">
                                        <Linkedin size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-[#F4FAFC]">
                    <div className="max-w-[1320px] mx-auto px-5 md:px-8 text-center">
                        <h2 className="text-4xl font-black text-[#061B2E] mb-16">How We Lead</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {['Vision', 'Ownership', 'Collaboration', 'Innovation'].map(val => (
                                <div key={val} className="bg-white p-8 rounded-2xl border border-[#DDF7FC] font-bold text-lg text-[#08243A] shadow-sm hover:shadow-md transition-shadow">
                                    {val}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default Leadership;
`,
    'src/pages/about/Values.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { ShieldCheck, Zap, HeartHandshake, Award, Users, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

const Values = () => {
    useSEO({ title: "Our Values | The Digital Connect", description: "Values that shape our engineering and design." });

    const values = [
        { title: "Integrity", desc: "Honesty in every line of code and contract.", stmt: "We don't hide technical debt.", icon: ShieldCheck },
        { title: "Innovation", desc: "Constantly pushing digital boundaries.", stmt: "Always learning, always adapting.", icon: Zap },
        { title: "Customer First", desc: "Your ROI defines our success.", stmt: "We listen before we build.", icon: HeartHandshake },
        { title: "Excellence", desc: "Outstanding quality in every deliverable.", stmt: "Good is the enemy of great.", icon: Award },
        { title: "Collaboration", desc: "Operating as one unified team.", stmt: "Egos left at the door.", icon: Users },
        { title: "Accountability", desc: "We own our results entirely.", stmt: "We deliver what we promise.", icon: Crosshair }
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 bg-[#061B2E] text-center w-full">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-white mb-6">Values That Shape Everything</h1>
                    <p className="text-[#DDF7FC] text-lg max-w-2xl mx-auto mb-8">The core principles that dictate our daily engineering and design philosophy.</p>
                </section>
                
                <section className="py-24 max-w-[1320px] mx-auto px-5 md:px-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.05}} key={i} className="bg-[#F4FAFC] p-8 rounded-3xl border border-[#DDF7FC] group hover:border-[#19C7E8] transition-colors relative overflow-hidden">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#19C7E8]/10 rounded-full blur-2xl group-hover:bg-[#19C7E8]/20 transition-colors"></div>
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#19C7E8] mb-6 shadow-sm">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#08243A] mb-2">{v.title}</h3>
                                    <p className="text-[#617386] mb-6">{v.desc}</p>
                                    <div className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-[#00A8D6] inline-block border border-[#DDF7FC]">{v.stmt}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default Values;
`,
    'src/pages/about/Team.jsx': `import React from 'react';
import useSEO from '../../hooks/useSEO';
import PageTransition from '../../components/common/PageTransition';
import { CompanySubNavigation } from '../../components/company/CompanySubNavigation';
import { motion } from 'framer-motion';

const Team = () => {
    useSEO({ title: "Our Team | The Digital Connect", description: "Meet the engineers, designers, and strategists at The Digital Connect." });

    const departments = [
        "Design Team", "Development Team", "Strategy & Marketing", "Project Management"
    ];

    return (
        <PageTransition>
            <div className="w-full bg-[#FFFFFF] min-h-screen font-sans flex flex-col">
                <CompanySubNavigation />
                <section className="pt-24 pb-16 px-5 md:px-8 text-center w-full border-b border-[#F4FAFC]">
                    <h1 className="text-[clamp(40px,8vw,72px)] font-heading font-black text-[#061B2E] mb-6">People Who Make Digital Happen</h1>
                    <p className="text-[#617386] text-lg max-w-2xl mx-auto mb-8">Passionate technologists embedded into a creative ecosystem.</p>
                </section>
                
                <section className="py-24 max-w-[1320px] mx-auto px-5 md:px-8 w-full">
                   {departments.map((dept, i) => (
                       <div key={i} className="mb-20">
                          <h2 className="text-3xl font-black text-[#08243A] mb-8 border-b border-[#DDF7FC] pb-4">{dept}</h2>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {[1,2,3,4].map(member => (
                                  <div key={member} className="group cursor-pointer">
                                     <div className="w-full aspect-square bg-[#F4FAFC] rounded-2xl mb-4 overflow-hidden relative border border-[#DDF7FC]">
                                         <div className="absolute inset-0 bg-[#061B2E] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                         <div className="absolute inset-0 flex items-center justify-center text-[#617386]/30 font-bold uppercase text-xs">Avatar</div>
                                     </div>
                                     <h3 className="font-bold text-[#08243A] text-lg">[Name Placeholder]</h3>
                                     <div className="text-[#19C7E8] text-sm font-bold mb-1">[Role]</div>
                                     <div className="text-[#617386] text-xs">Senior Expertise</div>
                                  </div>
                              ))}
                          </div>
                       </div>
                   ))}
                </section>
                
                <section className="py-32 bg-[#061B2E] text-center px-5 flex flex-col items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(25,199,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(25,199,232,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-10 relative z-10">Work With Our Team</h2>
                    <button className="bg-[#19C7E8] text-[#061B2E] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors relative z-10">Join Us Today</button>
                </section>
            </div>
        </PageTransition>
    );
};
export default Team;
`
};

for (const [filepath, content] of Object.entries(files)) {
    fs.writeFileSync(filepath, content);
}
console.log('Company pages generated.');
