import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Heart, Landmark, ShoppingBag, Book, Home, Plane, Truck, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Healthcare', icon: Heart, link: '/industries/healthcare' },
  { name: 'Fintech', icon: Landmark, link: '/industries/fintech' },
  { name: 'Ecommerce', icon: ShoppingBag, link: '/industries/ecommerce' },
  { name: 'Education', icon: Book, link: '/industries/education' },
  { name: 'Real Estate', icon: Home, link: '/industries/real-estate' },
  { name: 'Travel', icon: Plane, link: '/industries/travel' },
  { name: 'Logistics', icon: Truck, link: '/industries/logistics' },
  { name: 'SaaS', icon: Cloud, link: '/industries/saas' }
];

const Industries = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Industries We Serve" subtitle="Domain Expertise" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link to={ind.link} key={i} className="flex flex-col items-center justify-center p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                <Icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <h3 className="font-semibold">{ind.name}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default Industries;
