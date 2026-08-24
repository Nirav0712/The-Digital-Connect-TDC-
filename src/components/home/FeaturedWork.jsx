import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { projectsData } from '../../data/projects';

const FeaturedWork = () => {
  // Taking first 3 projects for the asymmetric grid
  const projects = projectsData.slice(0, 3);

  return (
    <section className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <SectionHeading title="Selected work" subtitle="Featured Portfolio" />
          <Button variant="outline" to="/portfolio" className="mb-12">View All Work</Button>
        </div>

        {/* Asymmetric grid: Large project, two smaller ones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Link
              to={`/portfolio/${project.slug}`}
              key={i}
              className={`group block overflow-hidden rounded-[2rem] bg-white border border-border shadow-sm ${i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/5]'}`}
            >
              <div className="w-full h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-1.5 rounded-full bg-brand-lavender/50 text-foreground text-sm font-bold tracking-wide">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </div>
                </div>

                <div className={`mt-10 overflow-hidden rounded-2xl flex-grow ${project.image}`}>
                  <div className="w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ease-out bg-brand-soft flex items-center justify-center text-muted-foreground/30 font-bold text-4xl border border-border">
                    {project.title} Visual
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-3xl font-bold font-heading mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-lg">Platform Development, UI/UX</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedWork;
