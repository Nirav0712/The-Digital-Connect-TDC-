import React from 'react';
import useSEO from '../../../hooks/useSEO';

import { motion } from 'framer-motion';
import ServiceDetailLayout from '../../../components/services/ServiceDetailLayout';

const IntegrationDiagram = () => (
    <div className="w-full max-w-[400px] aspect-square relative z-20 flex items-center justify-center">
        {/* Center Node */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 rounded-full border-2 border-dashed border-brand-mint flex items-center justify-center z-10 bg-white"
        >
            <div className="w-16 h-16 rounded-full bg-brand-mint/20 border border-brand-mint flex items-center justify-center font-bold text-xs">
                API
            </div>
        </motion.div>

        {/* Connecting Lines and Outer Nodes */}
        <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
            <motion.circle cx="200" cy="200" r="120" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeDasharray="5,5"
                animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }}
            />
            <line x1="200" y1="200" x2="200" y2="60" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="200" y1="200" x2="80" y2="280" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="200" y1="200" x2="320" y2="280" stroke="#e5e7eb" strokeWidth="2" />

            {/* Moving Particles */}
            <motion.circle cx="200" cy="130" r="4" fill="#3b82f6" animate={{ cy: [200, 60], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="140" cy="240" r="4" fill="#10b981" animate={{ cx: [200, 80], cy: [200, 280], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} />
            <motion.circle cx="260" cy="240" r="4" fill="#8b5cf6" animate={{ cx: [200, 320], cy: [200, 280], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.2, repeat: Infinity }} />
        </svg>

        {/* End Nodes */}
        <div className="absolute top-8 w-16 h-16 bg-white border border-border shadow-sm rounded-xl flex items-center justify-center text-[10px] font-bold">CRM</div>
        <div className="absolute bottom-16 left-8 w-16 h-16 bg-white border border-border shadow-sm rounded-xl flex items-center justify-center text-[10px] font-bold">ERP</div>
        <div className="absolute bottom-16 right-8 w-16 h-16 bg-white border border-border shadow-sm rounded-xl flex items-center justify-center text-[10px] font-bold">Payment</div>
    </div>
);

const APIIntegration = () => {
    return (
        <>
            <Helmet>
                
                
            </Helmet>

            <ServiceDetailLayout
                breadcrumb="API Integration"
                title="API Integration"
                subtitle="Systems Working Together"
                description="Connect your systems, services and data seamlessly. We eliminate organizational silos by building customized bridges between your isolated software."
                themeConfig={{
                    bg: 'bg-brand-mint/20',
                    text: 'text-emerald-700',
                }}
                HeroVisual={IntegrationDiagram}
                overview="Modern businesses rely on dozens of distinct software applications to function—from payment gateways to accounting software and CRMs. However, if they don't communicate, manual data entry slows your growth. Our integration architects design custom RESTful and GraphQL APIs that establish secure, automated data synchronization across your entire tech stack."
                technologies={['REST APIs', 'GraphQL', 'OAuth 2.0', 'Webhooks', 'JWT Authentication', 'Zapier/Make', 'Serverless Functions']}
                benefits={[
                    "Eliminate manual data entry and human error.",
                    "Real-time synchronized data across entirely different platforms.",
                    "Secure OAuth 2.0 implementations protecting customer data.",
                    "Reliable webhook handlers for instantaneous event triggering.",
                    "Third-party integrations (Stripe, Salesforce, HubSpot)."
                ]}
            />
        </>
    );
};

export default APIIntegration;
