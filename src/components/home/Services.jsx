import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/services';

const bgColors = [
  'bg-brand-lavender',
  'bg-brand-blue',
  'bg-brand-mint',
  'bg-brand-peach',
  'bg-brand-yellow',
  'bg-brand-purple'
];

const Services = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-soft to-transparent opacity-50 h-32 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="What we do" subtitle="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            const bgClass = bgColors[i % bgColors.length];
            return (
              <Link to={service.link} key={i} className={`group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden bg-white border border-border`}>
                {/* Subtle pastel background element */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${bgClass} opacity-20 group-hover:scale-150 group-hover:opacity-40 transition-transform duration-700 ease-out`}></div>

                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span className="text-xl font-heading font-extrabold text-muted-foreground/30">{service.id}</span>
                  <div className={`p-4 rounded-2xl ${bgClass} transition-colors`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 relative z-10 text-lg leading-relaxed">{service.desc}</p>
                <div className="flex justify-end mt-auto relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300`}>
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
