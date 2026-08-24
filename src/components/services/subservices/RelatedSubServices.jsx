import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const RelatedSubServices = ({ links, theme }) => (
    <section className="py-24 px-6 lg:px-8 bg-[#FAF9F7] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-heading font-extrabold text-[#171717] mb-12">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {links.map((link, i) => (
                    <Link key={i} to={link.href} className="group bg-white border border-black/5 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 block">
                        <h3 className="text-lg font-bold text-[#171717] mb-4 group-hover:text-primary transition-colors">{link.title}</h3>
                        <div className={"w-10 h-10 rounded-full flex items-center justify-center border border-black/10 group-hover:border-transparent transition-all " + theme.bg + " " + theme.accent}>
                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-all" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);