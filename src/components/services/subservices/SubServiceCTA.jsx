import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export const SubServiceCTA = ({ theme }) => (
    <section className={"py-32 px-6 lg:px-8 " + theme.softBg}>
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#171717] mb-6">Have a project in mind?</h2>
            <p className="text-lg md:text-xl text-[#171717]/70 leading-relaxed max-w-2xl mb-12">
                Let's build something meaningful. Tell us what you're building and we'll engineer the solution.
            </p>
            <div className="flex gap-4">
                <Link to="/contact" className="bg-[#171717] text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-black transition-all shadow-lg flex items-center gap-3">
                    Start a Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white border border-black/10 text-[#171717] px-10 py-5 rounded-full font-bold text-sm hover:border-black/30 transition-all flex items-center gap-3">
                    Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    </section>
);