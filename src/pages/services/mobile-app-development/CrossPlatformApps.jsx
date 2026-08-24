import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceCapabilities } from '../../../components/services/subservices/SubServiceCapabilities';
import { SubServiceTechnology } from '../../../components/services/subservices/SubServiceTechnology';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const CrossPlatformApps = () => {
    useSEO({ title: "Cross-Platform Apps Services | The Digital Connect", description: "Simultaneous multi-store deployments slicing production time inherently without quality drop." });
    const theme = { accent: "text-orange-500", bg: "bg-orange-500", softBg: "bg-orange-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="Mobile App Development" parentRoute="/services/mobile-app-development" eyebrow="Cross-Platform Apps" title="Unifying Distinct Operations." description="Simultaneous multi-store deployments slicing production time inherently without quality drop." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We do not rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceCapabilities theme={theme} capabilities={[{ title: "Core Architecture", desc: "Constructing the primary robust systems bridging frontend aesthetics to logic.", icon: <Code /> },{ title: "Performance Scaling", desc: "Advanced caching schemas enabling lightning fast interactions globally.", icon: <Rocket /> },{ title: "User Interfaces", desc: "Human centered aesthetics dropping friction entirely.", icon: <Monitor /> }]} />
                <SubServiceTechnology theme={theme} technologies={['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Figma', 'PostgreSQL', 'Tailwind CSS']} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default CrossPlatformApps;