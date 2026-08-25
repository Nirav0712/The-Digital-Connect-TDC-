import React from 'react';
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
                    `flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#19B5D8]/10 border-[#19B5D8]/50 text-white shadow-[0_0_15px_rgba(25,181,216,0.15)]' 
                        : 'bg-white/5 border-transparent text-[#64748B] hover:bg-white/10 hover:text-white'
                    }`
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
