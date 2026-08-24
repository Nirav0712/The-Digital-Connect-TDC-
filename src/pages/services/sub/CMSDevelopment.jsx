import React from 'react';
import useSEO from '../../../hooks/useSEO';

import { motion } from 'framer-motion';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const CMSDashboard = () => (
    <div className="w-full max-w-[500px] aspect-video bg-[#f8f9fc] rounded-xl shadow-xl overflow-hidden border border-border flex relative z-20">
        {/* Sidebar */}
        <div className="w-[25%] bg-white border-r border-border p-4 flex flex-col gap-4 shrink-0">
            <div className="h-6 w-6 bg-brand-peach/50 rounded-full mb-4"></div>
            <div className="flex flex-col gap-3">
                <div className="h-2 w-full bg-border rounded-full"></div>
                <div className="h-2 w-[80%] bg-border rounded-full"></div>
                <div className="h-2 w-[90%] bg-border rounded-full"></div>
                <div className="h-2 w-[70%] bg-brand-lavender rounded-full"></div>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div className="h-4 w-[40%] bg-border/80 rounded"></div>
                <div className="h-6 w-16 bg-brand-blue/30 rounded-full"></div>
            </div>

            <div className="flex-1 bg-white border border-border/50 rounded-lg p-4 shadow-sm">
                <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="h-3 w-1/3 bg-brand-peach rounded mb-4"
                />
                <div className="space-y-2 mb-6">
                    <div className="h-2 w-full bg-border/40 rounded"></div>
                    <div className="h-2 w-full bg-border/40 rounded"></div>
                    <div className="h-2 w-2/3 bg-border/40 rounded"></div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-brand-soft rounded flex items-center justify-center pointer-events-none">
                        <div className="w-4 h-4 bg-brand-lavender rounded-sm"></div>
                    </div>
                    <div className="aspect-square bg-brand-soft rounded flex items-center justify-center pointer-events-none">
                        <div className="w-4 h-4 bg-brand-mint rounded-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CMSDevelopment = () => {
    return (
        <>
            <Helmet>
                
                
            </Helmet>

            <ServiceDetailLayout
                breadcrumb="CMS Development"
                title="CMS Development"
                subtitle="Unify Your Content"
                description="Flexible content platforms that make managing your digital presence simple. Take back control of your website's content without needing developers for every edit."
                themeConfig={{
                    bg: 'bg-brand-peach/20',
                    text: 'text-orange-600',
                }}
                HeroVisual={CMSDashboard}
                overview="Content is the pillar of organic growth. However, managing it shouldn't require constant developer intervention. We architect powerful Headless CMS and traditional CMS solutions that give your marketing team total control over layout, imagery, and text without sacrificing the incredible performance of modern frameworks. We separate your content repository from your presentation layer for ultimate flexibility."
                technologies={['WordPress', 'Strapi', 'Contentful', 'Sanity', 'Prismic', 'Headless Architecture']}
                benefits={[
                    "Empower your marketing team to launch pages independently.",
                    "Omnichannel content delivery via Headless CMS structures.",
                    "Custom dashboard configurations for specific workflows.",
                    "Strict user roles and administration permissions.",
                    "Blazing fast performance unhindered by huge database loads."
                ]}
            />
        </>
    );
};

export default CMSDevelopment;
