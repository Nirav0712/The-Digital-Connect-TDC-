import React from 'react';

const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && <span className="text-secondary-foreground font-medium uppercase tracking-wider text-sm mb-3 block">{subtitle}</span>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
};
export default SectionHeading;
