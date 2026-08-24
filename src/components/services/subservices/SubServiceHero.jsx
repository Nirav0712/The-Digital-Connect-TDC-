import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const SubServiceHero = ({ parentTitle, parentRoute, title, eyebrow, description, theme, visual: Visual }) => (
    <section className="relative pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col z-10">
            <div className="flex items-center gap-2 text-sm font-semibold mb-8 text-[#171717]/60 flex-wrap">
                <Link to="/" className="hover:text-[#171717] transition-colors shrink-0">Home</Link>
                <ChevronRight className="w-4 h-4 shrink-0" />
                <Link to="/services" className="hover:text-[#171717] transition-colors shrink-0">Services</Link>
                <ChevronRight className="w-4 h-4 shrink-0" />
                <Link to={parentRoute} className="hover:text-[#171717] transition-colors shrink-0 whitespace-nowrap">{parentTitle}</Link>
                <ChevronRight className="w-4 h-4 shrink-0" />
                <span className={theme.accent + " shrink-0"}>{eyebrow}</span>
            </div>
            <span className={"text-[13px] font-bold tracking-[0.2em] uppercase mb-6 " + theme.accent}>{eyebrow}</span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-extrabold text-[#171717] leading-[1.1] mb-8 tracking-tight">{title}</h1>
            <p className="text-lg md:text-xl text-[#171717]/70 leading-relaxed mb-10 max-w-xl">{description}</p>
            <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/contact" className="bg-[#171717] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                    Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
        <div className="relative w-full aspect-square md:aspect-video xl:aspect-square flex justify-center xl:justify-end items-center">
            <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 blur-3xl -z-10 " + theme.bg}></div>
            {Visual && <Visual />}
        </div>
    </section>
);