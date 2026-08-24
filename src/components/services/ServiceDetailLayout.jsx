import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const ServiceDetailLayout = ({
    breadcrumb,
    title,
    subtitle,
    description,
    themeConfig,
    HeroVisual,
    overview,
    technologies,
    processSteps,
    benefits
}) => {
    const { bg, text, accent } = themeConfig;

    return (
        <div className={`min-h-screen bg-[#F7F5F2]`}>
            {/* Hero Section */}
            <section className={`relative pt-32 pb-24 overflow-hidden ${bg} border-b border-border/30 rounded-b-[40px] md:rounded-b-[60px]`}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[100px] z-0"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span>{breadcrumb}</span>
                        </div>

                        <span className={`inline-block py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm text-sm font-bold mb-6 ${text}`}>
                            {subtitle}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            {title.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                    {word} {i === 0 && <br className="hidden md:block" />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button to="/contact" className="group text-sm font-semibold" variant="primary">
                                Start a Project
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end"
                    >
                        {HeroVisual && <HeroVisual />}
                    </motion.div>
                </div>
            </section>

            {/* Overview & Benefits */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-heading font-extrabold mb-6">Overview</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {overview}
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
                        <h3 className="text-xl font-heading font-bold mb-6">Core Benefits</h3>
                        <div className="flex flex-col gap-4">
                            {benefits.map((bg, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    <p className="text-foreground font-medium">{bg}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technologies */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-extrabold mb-10 text-center">Technologies We Use</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {technologies.map((tech, i) => (
                            <div key={i} className="px-6 py-3 bg-white border border-border rounded-full font-semibold text-sm shadow-sm hover:-translate-y-1 transition-all duration-300">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process CTA */}
            <section className={`py-24 ${bg} border-y border-border/30`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-heading font-extrabold mb-6">Ready to scale?</h2>
                    <p className="text-xl text-muted-foreground mb-10">We engineer solutions that push boundaries and drive real growth.</p>
                    <Button to="/contact" variant="primary" className="text-base px-8 py-4">
                        Start the Conversation
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailLayout;
