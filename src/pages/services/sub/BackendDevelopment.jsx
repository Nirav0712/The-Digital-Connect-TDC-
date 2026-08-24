import React from 'react';
import useSEO from '../../../hooks/useSEO';

import { motion } from 'framer-motion';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const ArchitectureDiagram = () => (
    <div className="w-full max-w-[450px] aspect-square relative z-20 flex flex-col items-center justify-center gap-6">
        {/* Client Block */}
        <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-white px-8 py-3 rounded-xl shadow-lg border border-border z-10"
        >
            <span className="font-bold text-sm">Client Application</span>
        </motion.div>

        {/* Data Flow */}
        <div className="flex gap-2 h-8 items-center cursor-pointer">
            <motion.div animate={{ height: [0, 20, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }} className="w-1 bg-brand-blue rounded-full" />
            <motion.div animate={{ height: [0, 20, 0], opacity: [0, 1, 0], rotate: 180 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.7, times: [0, 0.5, 1] }} className="w-1 bg-brand-mint rounded-full" />
        </div>

        {/* API Layer */}
        <div className="w-[80%] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 p-6 flex flex-col items-center z-10">
            <div className="w-full h-2 bg-brand-blue/30 rounded-full mb-6"></div>
            <span className="font-extrabold text-foreground mb-4">API Gateway & Logic</span>
            <div className="grid grid-cols-3 gap-3 w-full">
                <div className="h-2 bg-border rounded-full w-full"></div>
                <div className="h-2 bg-border rounded-full w-full"></div>
                <div className="h-2 bg-border rounded-full w-full"></div>
            </div>
        </div>

        {/* DB Flow */}
        <div className="w-1 h-8 bg-border rounded-full relative overflow-hidden">
            <motion.div
                animate={{ top: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-0 right-0 h-4 bg-brand-purple rounded-full"
            />
        </div>

        {/* Database */}
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-brand-soft border-2 border-border/50 w-32 h-20 rounded shadow-inner flex flex-col justify-center items-center gap-1 z-10"
        >
            <div className="bg-white w-24 h-2 rounded-full"></div>
            <div className="bg-white w-24 h-2 rounded-full"></div>
            <div className="bg-white w-24 h-2 rounded-full"></div>
        </motion.div>
    </div>
);

const BackendDevelopment = () => {
    return (
        <>
            <Helmet>
                
                
            </Helmet>

            <ServiceDetailLayout
                breadcrumb="Backend Development"
                title="Backend Development"
                subtitle="Scalable Data Infrastructure"
                description="Reliable architecture powering scalable digital products. We build the engine that secures data, runs logic, and connects your systems flawlessly."
                themeConfig={{
                    bg: 'bg-brand-blue/20',
                    text: 'text-blue-600',
                }}
                HeroVisual={ArchitectureDiagram}
                overview="A robust backend is entirely invisible to the user but determines the ultimate success, security, and scalability of your product. Our backend engineering teams design sophisticated microservices and monolithic architectures tailored precisely to your data requirements and traffic goals. We emphasize military-grade security, lightning-fast database queries, and stable API endpoints."
                technologies={['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS/Docker']}
                benefits={[
                    "Optimized relational and non-relational database models.",
                    "Scalable cloud architecture designed for high traffic.",
                    "Strict adherence to top-tier security standards (OWASP).",
                    "Automated testing and CI/CD pipelines.",
                    "Containerized deploy environments leveraging Docker and Kubernetes."
                ]}
            />
        </>
    );
};

export default BackendDevelopment;
