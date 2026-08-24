import React from 'react';
export const SubServiceCapabilities = ({ theme, capabilities }) => (
    <section className="py-24 px-6 lg:px-8 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
                <span className={"text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block " + theme.accent}>Capabilities</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717]">What We Build</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, i) => (
                    <div key={i} className="bg-white border border-black/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                        <div className={"w-12 h-12 rounded-xl mb-6 flex items-center justify-center " + theme.softBg + " " + theme.accent}>
                            {cap.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#171717] mb-3">{cap.title}</h3>
                        <p className="text-[#171717]/60 leading-relaxed text-sm">{cap.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);