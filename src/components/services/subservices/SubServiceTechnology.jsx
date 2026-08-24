import React from 'react';
export const SubServiceTechnology = ({ technologies, theme }) => (
    <section className="py-24 bg-white px-6 lg:px-8 border-y border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 shrink-0">
                <h2 className="text-3xl font-heading font-extrabold text-[#171717] mb-4">Technology Stack</h2>
                <p className="text-[#171717]/60">Powered by the most robust modern frameworks.</p>
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                    <span key={i} className={"px-5 py-2.5 rounded-full border border-black/10 text-sm font-medium bg-white shadow-sm hover:scale-105 transition-transform cursor-default " + theme.accent}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </section>
);