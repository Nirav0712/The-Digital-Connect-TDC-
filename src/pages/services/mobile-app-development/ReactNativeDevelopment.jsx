import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceCapabilities } from '../../../components/services/subservices/SubServiceCapabilities';
import { SubServiceProcess } from '../../../components/services/subservices/SubServiceProcess';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const ReactNativeDevelopment = () => {
    useSEO({ title: "React Native Services | The Digital Connect", description: "Deploying unified React components mapping gracefully down to rigid iOS and Android modules." });
    const theme = { accent: "text-purple-500", bg: "bg-purple-500", softBg: "bg-purple-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="Mobile App Development" parentRoute="/services/mobile-app-development" eyebrow="React Native" title="Web Talent Bridged to Native Device." description="Deploying unified React components mapping gracefully down to rigid iOS and Android modules." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We do not rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceCapabilities theme={theme} capabilities={[{ title: "Core Architecture", desc: "Constructing the primary robust systems bridging frontend aesthetics to logic.", icon: <Code /> },{ title: "Performance Scaling", desc: "Advanced caching schemas enabling lightning fast interactions globally.", icon: <Rocket /> },{ title: "User Interfaces", desc: "Human centered aesthetics dropping friction entirely.", icon: <Monitor /> }]} />
                <SubServiceProcess theme={theme} process={[{ title: 'Evaluate', desc: 'Understanding distinct workflows and limits.' },{ title: 'Architect', desc: 'Drafting robust foundational diagrams safely.' },{ title: 'Engineer', desc: 'Creating immaculate, scalable production setups.' },{ title: 'Deploy', desc: 'Zero downtime transition into immediate market utility.' }]} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default ReactNativeDevelopment;