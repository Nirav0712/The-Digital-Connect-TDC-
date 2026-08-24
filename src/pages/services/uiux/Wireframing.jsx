import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceHero } from '../../../components/services/subservices/SubServiceHero';
import { SubServiceOverview } from '../../../components/services/subservices/SubServiceOverview';
import { SubServiceCapabilities } from '../../../components/services/subservices/SubServiceCapabilities';
import { RelatedSubServices } from '../../../components/services/subservices/RelatedSubServices';
import { SubServiceCTA } from '../../../components/services/subservices/SubServiceCTA';
import { Code, Monitor, Rocket } from 'lucide-react';

const Wireframing = () => {
    useSEO({ title: "Wireframing Services | The Digital Connect", description: "Low-fidelity architectural blueprints isolating structural logic from surface visual aesthetics." });
    const theme = { accent: "text-gray-600", bg: "bg-gray-400", softBg: "bg-gray-50" };

    return (
        <PageTransition>
            <div className="w-full bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
                <SubServiceHero parentTitle="UI/UX Design" parentRoute="/services/ui-ux-design" eyebrow="Wireframing" title="Turn Ideas Into Clear Product Structures." description="Low-fidelity architectural blueprints isolating structural logic from surface visual aesthetics." theme={theme} />
                <SubServiceOverview title="Engineered for performance." content="We don't rely on cookie-cutter solutions or simple drag-and-drop mechanics. Our engineering and marketing teams integrate deeply into your business logic, extracting exactly what makes you unique and mapping it algorithmically to the digital interfaces that generate unquestionable authority." />
                <SubServiceCapabilities theme={theme} capabilities={[{ title: "Core Architecture", desc: "Constructing the primary robust systems bridging frontend aesthetics to logic.", icon: <Code /> },{ title: "Performance Scaling", desc: "Advanced caching schemas enabling lightning fast interactions globally.", icon: <Rocket /> },{ title: "User Interfaces", desc: "Human centered aesthetics dropping friction entirely.", icon: <Monitor /> }]} />
                <RelatedSubServices theme={theme} links={[{ title: 'Backend Engineering', href: '/services/web-development/backend-development' },{ title: 'App Development', href: '/services/mobile-app-development' },{ title: 'Performance Media', href: '/services/digital-marketing/performance-marketing' }]} />
                <SubServiceCTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default Wireframing;