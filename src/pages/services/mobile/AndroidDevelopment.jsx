import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceProcess } from '../../../components/services/subservices/SubServiceProcess';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const AndroidDevelopment = () => {
    useSEO({ title: "Android Development Services | The Digital Connect", description: "Kotlin-based platforms running flawlessly across the massive fragmentation of global Android devices." });
    const theme = { accent: "text-emerald-500", bg: "bg-emerald-500", softBg: "bg-emerald-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="Mobile App Development" parentRoute="/services/mobile-app-development" eyebrow="Android Development" title="Android Apps Built for Real-World Scale." description="Kotlin-based platforms running flawlessly across the massive fragmentation of global Android devices." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We don't rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceProcess theme={theme} process={[{ title: 'Evaluate', desc: 'Understanding distinct workflows and limits.' },{ title: 'Architect', desc: 'Drafting robust foundational diagrams safely.' },{ title: 'Engineer', desc: 'Creating immaculate, scalable production setups.' },{ title: 'Deploy', desc: 'Zero downtime transition into immediate market utility.' }]} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default AndroidDevelopment;