import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceProcess } from '../../../components/services/subservices/SubServiceProcess';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const BusinessAutomation = () => {
    useSEO({ title: "Business Automation Services | The Digital Connect", description: "Connecting distinct internal platforms programmatically to remove human bottlenecks entirely in realtime." });
    const theme = { accent: "text-pink-600", bg: "bg-pink-500", softBg: "bg-pink-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="Software Development" parentRoute="/services/software-development" eyebrow="Business Automation" title="Replace Repetitive Work With Intelligent Workflows." description="Connecting distinct internal platforms programmatically to remove human bottlenecks entirely in realtime." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We don't rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceProcess theme={theme} process={[{ title: 'Evaluate', desc: 'Understanding distinct workflows and limits.' },{ title: 'Architect', desc: 'Drafting robust foundational diagrams safely.' },{ title: 'Engineer', desc: 'Creating immaculate, scalable production setups.' },{ title: 'Deploy', desc: 'Zero downtime transition into immediate market utility.' }]} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default BusinessAutomation;