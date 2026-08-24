import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceProcess } from '../../../components/services/subservices/SubServiceProcess';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const PaymentIntegration = () => {
    useSEO({ title: "Payment Integration Services | The Digital Connect", description: "Secure, multi-gateway integration ensuring absolute PCI compliance and seamless subscription recurring billing." });
    const theme = { accent: "text-blue-500", bg: "bg-blue-500", softBg: "bg-blue-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="Payment Integration" title="Checkout Experiences Built for Trust." description="Secure, multi-gateway integration ensuring absolute PCI compliance and seamless subscription recurring billing." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We don't rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceProcess theme={theme} process={[{ title: 'Evaluate', desc: 'Understanding distinct workflows and limits.' },{ title: 'Architect', desc: 'Drafting robust foundational diagrams safely.' },{ title: 'Engineer', desc: 'Creating immaculate, scalable production setups.' },{ title: 'Deploy', desc: 'Zero downtime transition into immediate market utility.' }]} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default PaymentIntegration;