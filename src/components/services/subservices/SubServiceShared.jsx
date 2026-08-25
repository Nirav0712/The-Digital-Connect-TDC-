import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SubServiceShared = {
    Hero: ({ parentTitle, parentRoute, title, eyebrow, description, theme, visual: Visual }) => (
        <section className="relative pt-[100px] pb-16 lg:pt-[160px] lg:pb-32 px-5 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 items-center overflow-x-hidden">
            <div className="flex flex-col z-10 relative">
                <div className="flex items-center gap-2 text-[13px] md:text-sm font-semibold mb-6 md:mb-8 text-[#061A2E]/60 flex-wrap">
                    <Link to="/" className="hover:text-[#061A2E] transition-colors shrink-0">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <Link to="/services" className="hover:text-[#061A2E] transition-colors shrink-0">Services</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <Link to={parentRoute} className="hover:text-[#061A2E] transition-colors shrink-0 whitespace-nowrap">{parentTitle}</Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span className={theme.accent + " shrink-0 font-bold"}>{eyebrow}</span>
                </div>
                <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 " + theme.accent}>{eyebrow}</span>
                <h1 className="text-[clamp(40px,10vw,64px)] font-heading font-extrabold text-[#061A2E] leading-[1.05] mb-6 md:mb-8 tracking-tight max-w-[800px]">{title}</h1>
                <p className="text-[17px] md:text-xl text-[#061A2E]/70 leading-[1.6] mb-8 md:mb-10 max-w-xl">{description}</p>
                <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link to="/contact" className="bg-[brand-primary-navy] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-brand-cyan transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/portfolio" className="bg-transparent border border-brand-border text-[brand-primary-navy] px-8 py-4 rounded-full font-semibold text-sm hover:border-brand-cyan transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                        View Work
                    </Link>
                </div>
            </div>
            <div className="relative w-full aspect-square xl:aspect-[4/3] flex justify-center items-center">
                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 blur-3xl shadow-[0_0_100px_50px_rgba(0,0,0,0.1)] -z-10 animate-blob " + theme.bg}></div>
                {Visual && <Visual />}
            </div>
        </section>
    ),

    Overview: ({ title, content, theme }) => (
        <section className="py-16 lg:py-32 bg-white px-5 lg:px-8 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 relative z-10">
                <div className="lg:col-span-5 relative">
                    <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block " + theme.accent}>Overview</span>
                    <h2 className="text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-[1.15] sticky top-24 md:top-32">{title}</h2>
                </div>
                <div className="lg:col-span-7">
                    <div className="prose prose-lg prose-neutral max-w-none text-[brand-primary-navy]/70 space-y-6 text-lg leading-relaxed">
                        {content.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>
            </div>
        </section>
    ),

    Capabilities: ({ theme, capabilities, title = "What We Build", eyebrow = "Capabilities" }) => (
        <section className="py-16 lg:py-32 px-5 lg:px-8 bg-[#F7FAFC]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-10 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8">
                    <div className="max-w-2xl">
                        <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block " + theme.accent}>{eyebrow}</span>
                        <h2 className="text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-tight">{title}</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="group bg-white border border-[#D9E7EF] rounded-[24px] lg:rounded-3xl p-6 lg:p-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
                            <div className={"absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 " + theme.bg}></div>
                            <div className={"w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 " + theme.softBg + " " + theme.accent}>
                                {cap.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[brand-primary-navy] mb-4 group-hover:text-black transition-colors">{cap.title}</h3>
                            <p className="text-[brand-primary-navy]/60 leading-relaxed text-sm md:text-base">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Technology: ({ technologies, theme, title = "Technology Stack", eyebrow = "Engineering Core" }) => (
        <section className="py-24 bg-white px-6 lg:px-8 border-y border-brand-border overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
                <div className="w-full lg:w-1/3 shrink-0">
                    <span className={"text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block " + theme.accent}>{eyebrow}</span>
                    <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[brand-primary-navy] mb-6">{title}</h2>
                    <p className="text-[brand-primary-navy]/60 text-lg">We utilize industry-leading tools and frameworks to ensure stability, speed, and scalability for every project we deploy.</p>
                </div>
                <div className="w-full lg:w-2/3 flex flex-wrap gap-4 h-fit content-start">
                    {technologies.map((tech, i) => (
                        <div key={i} className={"px-6 py-3 rounded-xl border border-brand-border text-[15px] font-semibold bg-white shadow-sm hover:scale-105 hover:border-brand-cyan/30 hover:shadow-md transition-all cursor-default flex items-center gap-2 " + theme.accent}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Process: ({ process, theme, title = "Methodology", eyebrow = "How We Work" }) => (
        <section className="py-16 lg:py-32 px-5 lg:px-8 bg-white border-b border-[#D9E7EF] relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-black/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none hidden lg:block"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-12 lg:mb-24 text-center max-w-3xl mx-auto">
                    <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block " + theme.accent}>{eyebrow}</span>
                    <h2 className="text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-tight">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    <div className="hidden lg:block absolute top-[27px] left-[70px] right-[70px] h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent -z-10"></div>
                    {process.map((step, i) => (
                        <div key={i} className="relative group flex flex-col items-center text-center lg:items-start lg:text-left">
                            <div className={"w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-8 bg-white border-2 border-brand-border relative z-10 group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all shadow-sm " + theme.accent}>
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold text-[brand-primary-navy] mb-4">{step.title}</h3>
                            <p className="text-[brand-primary-navy]/60 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    Benefits: ({ benefits, theme }) => (
        <section className="py-16 lg:py-24 px-5 lg:px-8 bg-[#F7FAFC]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-10 lg:mb-16 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start">
                    <div className="max-w-xl">
                        <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block " + theme.accent}>Business Value</span>
                        <h2 className="text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-tight">Why This Matters</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((ben, i) => (
                        <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-shadow">
                            <div className={"w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold " + theme.softBg + " " + theme.accent}>
                                ${(i + 1)}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[brand-primary-navy] mb-3">{ben.title}</h3>
                                <p className="text-[brand-primary-navy]/60 leading-relaxed">{ben.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ),

    FAQ: ({ faqs, theme }) => (
        <section className="py-16 lg:py-24 px-5 lg:px-8 bg-white border-y border-[#D9E7EF]">
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-10 lg:mb-16 text-center">
                    <span className={"text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block " + theme.accent}>Common Questions</span>
                    <h2 className="text-[clamp(32px,7vw,52px)] font-heading font-extrabold text-[#061A2E] leading-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group border border-brand-border rounded-2xl bg-white overflow-hidden">
                            <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-semibold text-lg hover:text-black transition-colors select-none">
                                {faq.q}
                                <span className={"transition group-open:rotate-180 " + theme.accent}>
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-[brand-primary-navy]/60 px-6 pb-6 md:px-8 md:pb-8 leading-relaxed">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    ),

    Related: ({ links, theme }) => (
        <section className="py-16 lg:py-24 px-5 lg:px-8 bg-[#F7FAFC]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-[clamp(32px,7vw,48px)] font-heading font-extrabold text-[#061A2E] mb-10 lg:mb-12">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {links.map((link, i) => (
                        <Link key={i} to={link.href} className="group bg-white border border-brand-border rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 block relative overflow-hidden">
                            <h3 className="text-xl font-bold text-[brand-primary-navy] mb-4 pr-8 relative z-10">{link.title}</h3>
                            <div className={"absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-brand-border group-hover:border-transparent transition-all z-10 " + theme.bg + " " + theme.accent}>
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-all" color={link.arrowColor || 'currentColor'} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    ),

    CTA: ({ theme }) => (
        <section className={"py-20 lg:py-32 px-5 lg:px-8 relative overflow-hidden " + theme.softBg}>
            <div className={"absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block " + theme.bg}></div>
            <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center relative z-10">
                <h2 className="text-[clamp(36px,9vw,64px)] font-heading font-extrabold text-[#061A2E] mb-6 md:mb-8 tracking-tight">Have a project in mind?</h2>
                <p className="text-xl text-[brand-primary-navy]/70 leading-relaxed max-w-2xl mb-12">
                    Let's build something meaningful. Tell us what you're building and we'll engineer the solution collaboratively.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="bg-[brand-primary-navy] text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-brand-cyan transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto">
                        Start a Project <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/services" className="bg-white border-2 border-brand-border text-[brand-primary-navy] px-10 py-5 rounded-full font-bold text-sm tracking-wide uppercase hover:border-brand-cyan/30 hover:bg-[brand-off-white] transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default SubServiceShared;
