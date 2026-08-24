import React from 'react';
import useSEO from '../../../hooks/useSEO';

import { motion } from 'framer-motion';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const BrowserMockup = () => (
    <div className="w-full max-w-[500px] aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden border border-border flex flex-col relative z-20">
        {/* Browser Bar */}
        <div className="h-10 bg-brand-soft border-b border-border flex items-center px-4 gap-2 shrink-0">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-brand-peach"></div>
                <div className="w-3 h-3 rounded-full bg-brand-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-brand-mint"></div>
            </div>
            <div className="ml-4 flex-1 h-5 bg-white rounded-md max-w-[200px]"></div>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col gap-4 relative">
            <motion.div
                animate={{ width: ['40%', '45%', '40%'] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-8 bg-brand-lavender/50 rounded-lg w-[40%]"
            />
            <div className="space-y-2 mt-4">
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
                    className="h-4 bg-border/40 rounded w-full"
                />
                <div className="h-4 bg-border/40 rounded w-[85%]"></div>
                <div className="h-4 bg-border/40 rounded w-[90%]"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="aspect-video bg-brand-blue/30 rounded-xl"
                />
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="aspect-video bg-brand-peach/30 rounded-xl"
                />
            </div>
        </div>

        <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-mint rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-[-1]"
        />
    </div>
);

const FrontendDevelopment = () => {
    return (
        <>
            <Helmet>
                
                
            </Helmet>

            <ServiceDetailLayout
                breadcrumb="Frontend Development"
                title="Frontend Development"
                subtitle="Interfaces That Engage"
                description="Fast, intuitive interfaces built for modern users. We transform complex data and logic into beautiful, responsive web applications."
                themeConfig={{
                    bg: 'bg-brand-lavender/30',
                    text: 'text-brand-purple',
                }}
                HeroVisual={BrowserMockup}
                overview="The frontend of your application is the bridge between your brand and your users. We engineer high-performance, accessible, and responsive user interfaces that load instantly and interact smoothly. Our architectures follow strict component-driven development practices ensuring long-term scalability and flawless user experience across all devices."
                technologies={['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Webpack']}
                benefits={[
                    "Lightning fast load times and optimized Core Web Vitals.",
                    "Pixel-perfect implementation of UI/UX designs.",
                    "Responsive across all screen sizes and modern devices.",
                    "Accessible WCAG compliant structures.",
                    "Component-driven architecture for rapid scalability."
                ]}
            />
        </>
    );
};

export default FrontendDevelopment;
