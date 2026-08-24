import React from 'react';

const ClientLogos = () => {
  const logos = ['Acme Corp', 'GlobalBank', 'TechNova', 'HealthPlus', 'Zenith Logistics', 'Quantum'];
  return (
    <section className="py-12 border-b border-border bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Trusted by ambitious businesses</p>
      </div>
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-grid whitespace-nowrap min-w-full" style={{ animationDirection: 'normal', animation: 'blob-float 30s infinite linear' }}>
          {/* We'll use CSS marquee alternative manually for now */}
          <div className="flex gap-16 md:gap-32 w-full justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <div key={i} className="text-xl md:text-3xl font-heading font-extrabold hover:text-primary transition-colors duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientLogos;
