import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/home/FinalCTA';
import GlowOrb from '../components/backgrounds/GlowOrb';

const filters = ['All', 'Web', 'Mobile', 'UI/UX', 'Ecommerce', 'Software'];

// Extend projects with categories for demo
const extendedProjects = [
  ...projectsData,
  { slug: 'logistic-dashboard', title: 'Global Freight Platform', category: 'Software', image: 'bg-brand-blue' },
  { slug: 'realestate-app', title: 'Urbanspace Realty', category: 'Mobile', image: 'bg-brand-peach' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? extendedProjects
    : extendedProjects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 px-6 bg-brand-soft relative overflow-hidden text-center">
        <GlowOrb className="w-[800px] h-[800px] top-[-50%] left-[10%] bg-brand-lavender opacity-30 animate-blob" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight">
            Work that speaks for itself.
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeFilter === f ? 'bg-primary text-white shadow-md' : 'bg-brand-soft text-muted-foreground hover:bg-border'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group rounded-[2rem] overflow-hidden bg-white border border-border shadow-sm flex flex-col ${i % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/5]'}`}
                >
                  <Link to={`/portfolio/${project.slug}`} className="w-full h-full flex flex-col">
                    <div className={`flex-grow relative overflow-hidden ${project.image || 'bg-brand-soft'}`}>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10"></div>
                      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 font-heading font-bold text-4xl text-black/10 flex items-center justify-center">Visual</div>
                    </div>
                    <div className="p-8 bg-white z-20">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider block mb-2">{project.category}</span>
                      <h3 className="text-3xl font-heading font-extrabold group-hover:text-primary">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No projects found for this category.</div>
          )}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
};
export default Portfolio;
