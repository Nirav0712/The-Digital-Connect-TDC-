import React from 'react';
import SectionHeading from '../common/SectionHeading';

const techs = [
  'React', 'Next.js', 'Vue', 'Node.js', 'Laravel', 'Python', 'Flutter', 'React Native', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
];

const Technologies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading title="Technology Ecosystem" subtitle="Our Stack" centered />
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-12">
          {techs.map((tech, i) => (
            <span key={i} className="px-6 py-3 rounded-full border border-border bg-secondary/30 text-sm font-medium hover:border-primary/50 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technologies;
