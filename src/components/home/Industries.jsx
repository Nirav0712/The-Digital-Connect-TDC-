import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Heart, Landmark, ShoppingBag, Book, Home, Plane, Truck, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Healthcare', icon: Heart, link: '/industries/healthcare', bg: 'bg-[#E8F8FA] hover:bg-[#D1F1F6]' },
  { name: 'Fintech', icon: Landmark, link: '/industries/fintech', bg: 'bg-[#E8F0FA] hover:bg-[#D1E2F6]' },
  { name: 'Ecommerce', icon: ShoppingBag, link: '/industries/ecommerce', bg: 'bg-[#E8FAED] hover:bg-[#D1F6DF]' },
  { name: 'Education', icon: Book, link: '/industries/education', bg: 'bg-[#FAE8E8] hover:bg-[#F6D1D1]' },
  { name: 'Real Estate', icon: Home, link: '/industries/real-estate', bg: 'bg-[#FDF6E3] hover:bg-[#FAEDC8]' },
  { name: 'Travel', icon: Plane, link: '/industries/travel', bg: 'bg-[#F0E8FA] hover:bg-[#E2D1F6]' },
  { name: 'Logistics', icon: Truck, link: '/industries/logistics', bg: 'bg-[#F2F4F7] hover:bg-[#E3E8ED]' },
  { name: 'SaaS', icon: Cloud, link: '/industries/saas', bg: 'bg-[#EAF3FF] hover:bg-[#D4E8FF]' }
];

const Industries = () => {
  return (
    <section className="py-16 lg:py-24 bg-white md:bg-secondary/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <SectionHeading title="Industries We Serve" subtitle="Domain Expertise" centered />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 md:mt-12">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link to={ind.link} key={i} className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-[20px] border border-[#D9E7EF] transition-all text-center group ${ind.bg}`}>
                <Icon className="w-10 h-10 mb-4 text-[#061A2E]/60 group-hover:text-[#061A2E] transition-colors" />
                <h3 className="font-semibold text-lg text-[#061A2E]">{ind.name}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default Industries;
