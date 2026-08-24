import React from 'react';
export const SubServiceProcess = ({ process, theme }) => (
    <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
                <span className={"text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block " + theme.accent}>Workflow</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717]">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {process.map((step, i) => (
                    <div key={i} className="relative group">
                        <div className={"w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-6 bg-white border-2 border-black/10 relative z-10 group-hover:scale-110 transition-transform " + theme.accent}>
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#171717] mb-3">{step.title}</h3>
                        <p className="text-[#171717]/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);