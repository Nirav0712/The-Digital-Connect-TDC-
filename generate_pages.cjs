const fs = require('fs');

const pagesDir = 'src/pages/industries';
const dataDir = 'src/data/industries';
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const industries = [
    {
        id: 'healthcare',
        name: 'Healthcare',
        className: 'Healthcare',
        eyebrow: 'DIGITAL HEALTHCARE SOLUTIONS',
        headline: 'Technology That Puts Better Healthcare Experiences First.',
        desc: 'Build secure, intuitive digital platforms that improve patient engagement, streamline healthcare operations and help providers deliver better experiences.',
        visual: 'HealthcareVisual',
        challenges: ['Fragmented patient journeys', 'Manual workflows', 'Complex appointment management', 'Data accessibility', 'Patient engagement'],
        solutions: [
            { title: 'Patient Portals', desc: 'Secure platforms for patients to access records and manage care.' },
            { title: 'Healthcare Websites', desc: 'Accessible, fast, HIPAA-compliant websites.' },
            { title: 'Appointment Systems', desc: 'Automated booking and scheduling engines.' },
            { title: 'Telemedicine Platforms', desc: 'Secure video consultation and messaging systems.' },
            { title: 'Healthcare Management Software', desc: 'Internal operations and workflow automation.' },
            { title: 'Analytics Dashboards', desc: 'Actionable data visualization for providers.' }
        ],
        cta: 'Build Better Healthcare Experiences →'
    },
    {
        id: 'fintech',
        name: 'Fintech',
        className: 'Fintech',
        eyebrow: 'FINTECH DIGITAL SOLUTIONS',
        headline: 'Digital Banking Experiences Built for Trust and Scale.',
        desc: 'Design and develop secure financial products that make complex financial services simpler, faster and more accessible.',
        visual: 'FintechVisual',
        challenges: ['Security', 'Complex financial workflows', 'User trust', 'Compliance', 'Scalability'],
        solutions: [
            { title: 'Digital Banking', desc: 'End-to-end digital banking user experiences.' },
            { title: 'Payment Platforms', desc: 'Secure global payment processing integrations.' },
            { title: 'Investment Applications', desc: 'Real-time trading and wealth management UI.' },
            { title: 'Fintech Dashboards', desc: 'Financial data visualization and tracking.' },
            { title: 'Financial APIs', desc: 'Scalable infrastructure for financial services.' },
            { title: 'Transaction Systems', desc: 'High-volume ledger and balance operations.' }
        ],
        cta: 'Build Your Fintech Product →'
    },
    {
        id: 'ecommerce',
        name: 'Ecommerce',
        className: 'Ecommerce',
        eyebrow: 'ECOMMERCE TECHNOLOGY',
        headline: 'Digital Commerce Experiences That Turn Browsers Into Buyers.',
        desc: 'Create fast, scalable ecommerce experiences designed around conversion, customer experience and long-term growth.',
        visual: 'EcommerceVisual',
        challenges: ['Cart abandonment', 'Slow websites', 'Poor UX', 'Complex inventory', 'Payment friction'],
        solutions: [
            { title: 'Custom Ecommerce', desc: 'Headless storefronts built for scale.' },
            { title: 'Shopify', desc: 'Enterprise-grade Shopify Plus development.' },
            { title: 'WooCommerce', desc: 'Flexible open-source commerce platforms.' },
            { title: 'Marketplace Platforms', desc: 'Multi-vendor marketplace architectures.' },
            { title: 'Payment Integration', desc: 'Frictionless checkout experiences.' },
            { title: 'Product Management', desc: 'Real-time inventory sync and tracking.' }
        ],
        cta: 'Build Your Ecommerce Experience →'
    },
    {
        id: 'education',
        name: 'Education',
        className: 'Education',
        eyebrow: 'EDTECH SOLUTIONS',
        headline: 'Technology That Makes Learning More Connected.',
        desc: 'Build engaging digital learning platforms that connect students, teachers and institutions through intuitive technology.',
        visual: 'EducationVisual',
        challenges: ['Remote learning', 'Student engagement', 'Content management', 'Progress tracking', 'Institution management'],
        solutions: [
            { title: 'Learning Management Systems', desc: 'Custom LMS built for your specific curriculum.' },
            { title: 'Student Portals', desc: 'Unified dashboards for students and parents.' },
            { title: 'Online Course Platforms', desc: 'Scalable video and module delivery systems.' },
            { title: 'Education Websites', desc: 'Modern digital presence for institutions.' },
            { title: 'Assessment Systems', desc: 'Automated testing and grading platforms.' },
            { title: 'Learning Analytics', desc: 'Track performance and engagement metrics.' }
        ],
        cta: 'Build the Future of Learning →'
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        className: 'RealEstate',
        eyebrow: 'REAL ESTATE TECHNOLOGY',
        headline: 'Digital Experiences That Move Property Businesses Forward.',
        desc: 'Create modern property platforms that simplify discovery, management, communication and transactions.',
        visual: 'RealEstateVisual',
        challenges: ['Property discovery', 'Lead management', 'Listing management', 'Customer communication', 'Property data'],
        solutions: [
            { title: 'Property Portals', desc: 'Searchable property discovery platforms.' },
            { title: 'Real Estate Websites', desc: 'High-converting agency and developer sites.' },
            { title: 'Property Management Systems', desc: 'Admin portals for landlords and agencies.' },
            { title: 'Listing Platforms', desc: 'Dynamic inventory and multi-listing systems.' },
            { title: 'Lead Management', desc: 'Automated lead capture and nurturing tools.' },
            { title: 'Real Estate CRMs', desc: 'Custom relationship management workflows.' }
        ],
        cta: 'Build Your Property Platform →'
    },
    {
        id: 'travel',
        name: 'Travel',
        className: 'Travel',
        eyebrow: 'TRAVEL TECHNOLOGY',
        headline: 'Digital Journeys Designed Around the Traveler.',
        desc: 'Create seamless travel experiences that make discovery, booking and journey management effortless.',
        visual: 'TravelVisual',
        challenges: ['Complex booking flows', 'Multiple travel providers', 'Personalization', 'Real-time availability', 'Customer engagement'],
        solutions: [
            { title: 'Travel Booking Platforms', desc: 'End-to-end booking engines with real-time sync.' },
            { title: 'Hotel Platforms', desc: 'Direct booking systems for hospitality brands.' },
            { title: 'Tour Applications', desc: 'Mobile-first itinerary and experience planning.' },
            { title: 'Travel Management Systems', desc: 'B2B and corporate travel handling.' },
            { title: 'Booking APIs', desc: 'Integration with major GDS and bedbanks.' },
            { title: 'Travel Websites', desc: 'Inspiring digital presence for destinations.' }
        ],
        cta: 'Create Better Travel Experiences →'
    },
    {
        id: 'logistics',
        name: 'Logistics',
        className: 'Logistics',
        eyebrow: 'LOGISTICS TECHNOLOGY',
        headline: 'Connected Technology For Smarter Operations.',
        desc: 'Build digital logistics systems that improve visibility, automate workflows and keep operations moving efficiently.',
        visual: 'LogisticsVisual',
        challenges: ['Route optimization', 'Tracking', 'Manual operations', 'Inventory visibility', 'Delivery management'],
        solutions: [
            { title: 'Fleet Management', desc: 'Real-time tracking and vehicle administration.' },
            { title: 'Shipment Tracking', desc: 'Customer-facing tracking platforms.' },
            { title: 'Warehouse Systems', desc: 'Digital inventory and scanning solutions.' },
            { title: 'Logistics Dashboards', desc: 'Operational overview and metrics tracking.' },
            { title: 'Route Optimization', desc: 'Algorithm-driven delivery planning.' },
            { title: 'Delivery Platforms', desc: 'Complete last-mile delivery software.' }
        ],
        cta: 'Connect Your Logistics Operations →'
    },
    {
        id: 'saas',
        name: 'SaaS',
        className: 'SaaS',
        eyebrow: 'SAAS PRODUCT DEVELOPMENT',
        headline: 'From Product Idea to Scalable SaaS Platform.',
        desc: 'Design and develop SaaS products that are intuitive for users and built to scale with growing businesses.',
        visual: 'SaaSVisual',
        challenges: ['Product-market fit', 'Scalability', 'User onboarding', 'Performance', 'Subscription management'],
        solutions: [
            { title: 'SaaS MVP Development', desc: 'Rapid prototyping and scalable launch builds.' },
            { title: 'Multi-Tenant Architecture', desc: 'Secure, isolated data access for users.' },
            { title: 'Subscription Systems', desc: 'Complex billing and usage tracking.' },
            { title: 'Admin Dashboards', desc: 'Tenant management and support portals.' },
            { title: 'API Development', desc: 'Public and private scalable API layers.' },
            { title: 'Cloud Applications', desc: 'High-performance AWS/Cloud-native deployments.' }
        ],
        cta: 'Build Your SaaS Product →'
    }
];

industries.forEach(ind => {
    // Write data file
    const dataContent = `export const ${ind.className}Data = ${JSON.stringify(ind, null, 2)};\n`;
    fs.writeFileSync(`${dataDir}/${ind.id}.js`, dataContent);

    // Write page file
    const pageContent = `import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustrySolutions from '../../components/industries/IndustrySolutions';
import IndustryUniqueSection from '../../components/industries/IndustryUniqueSection';
import IndustryCTA from '../../components/industries/IndustryCTA';
import { ${ind.className}Data } from '../../data/industries/${ind.id}';

const ${ind.visual} = () => (
  <div className="w-full h-[300px] md:h-[400px] bg-white rounded-3xl shadow-xl border border-[#D9E7EF] overflow-hidden flex items-center justify-center relative">
    <motion.div 
      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute inset-0 bg-gradient-to-br from-[#18C5E8]/20 to-[#087EA4]/10 z-0"
    />
    <div className="text-[#061A2E]/40 font-bold text-xl md:text-2xl z-10 px-6 text-center">
      [${ind.name} specific UI]
    </div>
  </div>
);

const ${ind.className} = () => {
  useSEO({
    title: "${ind.name} Digital Solutions | The Digital Connect",
    description: "${ind.desc}"
  });

  return (
    <div className="bg-[#F7FAFC] pt-[72px] lg:pt-[76px]">
      <IndustryHero 
        variant="${ind.id}"
        eyebrow="${ind.eyebrow}"
        headline="${ind.headline}"
        description="${ind.desc}"
        visual={${ind.visual}}
        ctaText="${ind.cta.replace(' →', '')}"
      />
      <IndustryOverview 
        title="Transforming ${ind.name} with Digital Architecture"
        content={[
          ${ind.className}Data.desc ? \`"\${${ind.className}Data.desc}"\` : '""',
          "We partner with leading organizations to modernize outdated legacy systems and construct efficient digital workflows from the ground up."
        ]}
      />
      <IndustryChallenges challenges={${ind.className}Data.challenges} />
      
      <IndustryUniqueSection title="The ${ind.name} Journey" variant="${ind.id}">
         <div className="flex flex-wrap items-center justify-center gap-4 py-8">
            {[1, 2, 3, 4, 5].map((step, idx) => (
               <React.Fragment key={idx}>
                 <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-[#D9E7EF] shadow-sm flex items-center justify-center text-[#061A2E] font-bold text-lg"
                 >
                   {step}
                 </motion.div>
                 {idx < 4 && (
                   <div className="hidden sm:block h-1 w-8 bg-[#18C5E8]/30 overflow-hidden relative">
                     <motion.div className="absolute top-0 bottom-0 left-0 bg-[#18C5E8]" initial={{width: 0}} animate={{width: '100%'}} transition={{duration: 1.5, repeat: Infinity, delay: idx * 0.2}} />
                   </div>
                 )}
               </React.Fragment>
            ))}
         </div>
      </IndustryUniqueSection>
      
      <IndustrySolutions solutions={${ind.className}Data.solutions} variant="${ind.id}" />
      <IndustryCTA title="${ind.cta}" variant="${ind.id}" />
    </div>
  );
};
export default ${ind.className};
`;
    fs.writeFileSync(`${pagesDir}/${ind.className}.jsx`, pageContent);
});

console.log('Pages built.');
