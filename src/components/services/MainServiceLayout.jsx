import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '../common/PageTransition';

const MainServiceLayout = ({
    breadcrumb,
    title,
    subtitle,
    description,
    themeConfig,
    HeroVisual,
    overview,
    capabilities,
    technologies,
    UniqueVisual,
    processSteps,
    benefits,
    faqs
}) => {
    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">

                {/* 1. HERO SECTION */}
                <section className="relative pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col z-10">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-8 text-[#171717]/60">
                            <Link to="/" className="hover:text-[#171717] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link to="/services" className="hover:text-[#171717] transition-colors">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className={themeConfig.accentText}>{breadcrumb}</span>
                        </div>
                        <span className={`text-[13px] font-bold tracking-[0.2em] uppercase mb-6 ${themeConfig.accentText}`}>
                            {breadcrumb}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-extrabold text-[#171717] leading-[1.1] mb-8 tracking-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-[#171717]/70 leading-relaxed mb-10 max-w-xl">
                            {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="/contact" className="bg-[#171717] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-black transition-all shadow-lg shadow-black/10 flex items-center gap-2">
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/portfolio" className="bg-white border border-black/10 text-[#171717] px-8 py-4 rounded-full font-semibold text-sm hover:border-black/30 transition-all flex items-center gap-2">
                                Explore Our Work
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-end items-center">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 blur-3xl ${themeConfig.glowColor} -z-10`}></div>
                        <HeroVisual />
                    </div>
                </section>

                {/* 3. OVERVIEW SECTION */}
                <section className="py-24 bg-white px-6 lg:px-8">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717] mb-6">
                                {overview.title}
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-[#171717]/70 leading-relaxed">
                                {overview.content}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. CAPABILITIES SECTION */}
                <section className="py-24 px-6 lg:px-8 bg-[#FAF9F7]">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-16">
                            <span className={`text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block ${themeConfig.accentText}`}>What We Build</span>
                            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717] mb-6">Capabilities</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.map((cap, i) => (
                                cap.href ? (
                                    <Link key={i} to={cap.href} className="group bg-white border border-black/5 rounded-2xl p-8 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col items-start block">
                                        <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${themeConfig.bg} ${themeConfig.accentText}`}>
                                            {cap.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#171717] mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                                        <p className="text-[#171717]/60 leading-relaxed text-sm mb-6 flex-1">{cap.desc}</p>
                                        <span className="text-sm font-semibold flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary mt-auto">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </Link>
                                ) : (
                                    <div key={i} className="bg-white border border-black/5 rounded-2xl p-8 flex flex-col items-start block transition-shadow">
                                        <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${themeConfig.bg} ${themeConfig.accentText}`}>
                                            {cap.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#171717] mb-3">{cap.title}</h3>
                                        <p className="text-[#171717]/60 leading-relaxed text-sm">{cap.desc}</p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. TECHNOLOGIES */}
                <section className="py-24 bg-white px-6 lg:px-8 border-y border-black/5 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3 shrink-0">
                            <h2 className="text-3xl font-heading font-extrabold text-[#171717] mb-4">Technologies</h2>
                            <p className="text-[#171717]/60">The modern stack we use to build scalable products.</p>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-wrap gap-3">
                            {technologies.map((tech, i) => (
                                <span key={i} className={`px-5 py-2.5 rounded-full border border-black/10 text-sm font-medium ${themeConfig.accentText} bg-white shadow-sm`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. UNIQUE VISUAL SECTION */}
                <section className={`py-32 px-6 lg:px-8 ${themeConfig.bg} overflow-hidden`}>
                    <div className="max-w-[1400px] mx-auto">
                        <UniqueVisual />
                    </div>
                </section>

                {/* 7. PROCESS */}
                <section className="py-24 px-6 lg:px-8 bg-white">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-16">
                            <span className={`text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block ${themeConfig.accentText}`}>How We Work</span>
                            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717]">Our Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                            {processSteps.map((step, i) => (
                                <div key={i} className="relative">
                                    {i !== processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-6 flex-1 w-full h-[1px] bg-black/10 left-12"></div>
                                    )}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 bg-white border-2 border-black/10 text-[#171717] relative z-10`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#171717] mb-3">{step.title}</h3>
                                    <p className="text-[#171717]/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. BENEFITS */}
                <section className="py-24 px-6 lg:px-8 bg-[#FAF9F7]">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717] mb-6">Why Partner With Us?</h2>
                            <p className="text-[#171717]/60 leading-relaxed mb-8">We don't just write code or push pixels. We engineer solutions designed to yield massive enterprise growth.</p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className={`w-6 h-6 shrink-0 ${themeConfig.accentText}`} />
                                    <div>
                                        <h4 className="font-bold text-[#171717] mb-2">{benefit.title}</h4>
                                        <p className="text-[#171717]/60 text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. FAQ */}
                <section className="py-24 px-6 lg:px-8 bg-white border-t border-black/5">
                    <div className="max-w-[800px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717]">Frequently Asked Questions</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group border border-black/10 rounded-2xl bg-[#FAF9F7] overflow-hidden">
                                    <summary className="font-bold p-6 cursor-pointer flex justify-between items-center text-[#171717] hover:text-primary transition-colors select-none">
                                        {faq.q}
                                        <span className="text-2xl transition-transform group-open:rotate-45 block">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-[#171717]/60 leading-relaxed text-sm">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. FINAL CTA */}
                <section className={`py-32 px-6 lg:px-8 ${themeConfig.bg}`}>
                    <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#171717] mb-6">Have a project in mind?</h2>
                        <p className="text-lg md:text-xl text-[#171717]/70 leading-relaxed max-w-2xl mb-12">
                            Tell us what you're building and we'll help you turn the idea into a digital experience that works.
                        </p>
                        <Link to="/contact" className="bg-[#171717] text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-black transition-all shadow-lg flex items-center gap-3">
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </div>
        </PageTransition>
    );
};

export default MainServiceLayout;
