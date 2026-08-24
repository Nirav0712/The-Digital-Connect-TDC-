import React from 'react';
import useSEO from '../../../hooks/useSEO';

import { motion } from 'framer-motion';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const SaasDashboard = () => (
    <div className="w-full max-w-[500px] aspect-video bg-white rounded-xl shadow-2xl overflow-hidden border border-border flex flex-col relative z-20">
        <div className="h-12 border-b border-border bg-brand-soft/50 flex items-center px-4 justify-between shrink-0">
            <div className="w-24 h-4 bg-brand-yellow/30 rounded"></div>
            <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-lavender"></div>
                <div className="w-6 h-6 rounded-full bg-brand-blue"></div>
            </div>
        </div>

        <div className="flex-1 p-6 grid grid-cols-12 gap-4">
            {/* Sidebar simplified */}
            <div className="col-span-3 border-r border-border/50 pr-4 flex flex-col gap-3">
                <div className="h-3 w-full bg-brand-purple/20 rounded"></div>
                <div className="h-3 w-3/4 bg-border/50 rounded"></div>
                <div className="h-3 w-5/6 bg-border/50 rounded"></div>
                <div className="h-3 w-1/2 bg-border/50 rounded mt-auto"></div>
            </div>

            {/* Main Stats */}
            <div className="col-span-9 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-brand-soft rounded-lg p-3">
                        <div className="h-2 w-1/2 bg-border mb-2 rounded"></div>
                        <div className="h-4 w-3/4 bg-brand-purple rounded"></div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-brand-soft rounded-lg p-3">
                        <div className="h-2 w-1/2 bg-border mb-2 rounded"></div>
                        <div className="h-4 w-1/2 bg-brand-yellow rounded"></div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-brand-soft rounded-lg p-3">
                        <div className="h-2 w-1/2 bg-border mb-2 rounded"></div>
                        <div className="h-4 w-full bg-brand-mint rounded"></div>
                    </motion.div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 border border-border/50 rounded-lg p-4 relative overflow-hidden flex items-end gap-2">
                    <motion.div animate={{ height: ['40%', '60%', '40%'] }} transition={{ duration: 4, repeat: Infinity }} className="w-full bg-brand-lavender/60 rounded-t-sm" />
                    <motion.div animate={{ height: ['30%', '80%', '30%'] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }} className="w-full bg-brand-blue/60 rounded-t-sm" />
                    <motion.div animate={{ height: ['70%', '50%', '70%'] }} transition={{ duration: 4, delay: 1, repeat: Infinity }} className="w-full bg-brand-peach/60 rounded-t-sm" />
                    <motion.div animate={{ height: ['90%', '70%', '90%'] }} transition={{ duration: 4, delay: 1.5, repeat: Infinity }} className="w-full bg-brand-purple/60 rounded-t-sm" />
                    <motion.div animate={{ height: ['50%', '100%', '50%'] }} transition={{ duration: 4, delay: 2, repeat: Infinity }} className="w-full bg-brand-mint/60 rounded-t-sm" />
                </div>
            </div>
        </div>
    </div>
);

const CustomWebApplications = () => {
    return (
        <>
            <Helmet>
                
                
            </Helmet>

            <ServiceDetailLayout
                breadcrumb="Custom Web Apps"
                title="Custom Web Applications"
                subtitle="Complex Problems, Elegant Solutions"
                description="Purpose-built web applications designed around the way your business works. We engineer bespoke platforms from scratch to eliminate bottlenecks."
                themeConfig={{
                    bg: 'bg-brand-yellow/30',
                    text: 'text-amber-700',
                }}
                HeroVisual={SaasDashboard}
                overview="Off-the-shelf software rarely fits a unique business perfectly. You end up bending your processes to fit the tool. We reverse that paradigm. Our custom web applications (Dashboards, CRMs, ERPs, SaaS platforms) are meticulously engineered to map exactly to your operations, streamlining workflows and providing deep proprietary analytics."
                technologies={['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'WebSockets', 'GraphQL']}
                benefits={[
                    "100% ownership of your source code and intellectual property.",
                    "Perfect translation of your unique business logic into software.",
                    "Scalable infrastructure designed for Enterprise workloads.",
                    "Secure user hierarchies and sophisticated access control.",
                    "Fluid SaaS-level user interfaces that require zero training."
                ]}
            />
        </>
    );
};

export default CustomWebApplications;
