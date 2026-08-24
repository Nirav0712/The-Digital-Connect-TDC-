import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { MarketplaceVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const MarketplaceDev = () => {
    useSEO({ title: "Massive B2B & B2C Multivendor Ecosystems. | The Digital Connect", description: "Engineering extraordinarily complex environments gracefully orchestrating immense buyer/seller relationships securely identically to Airbnb or Etsy native setups." });
    const theme = {"accent":"text-brand-periwinkle","bg":"bg-brand-periwinkle/20","softBg":"bg-brand-cyan/10"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="Marketplaces" title="Massive B2B & B2C Multivendor Ecosystems." description="Engineering extraordinarily complex environments gracefully orchestrating immense buyer/seller relationships securely identically to Airbnb or Etsy native setups." theme={theme} visual={MarketplaceVisual} />
                <SubServiceShared.Overview title="Orchestrating intense operational multi-party scale" content={["Standard ecommerce handles one seller distributing to many buyers. A Marketplace fundamentally changes this algorithm by introducing immense exponential logistical complexity: orchestrating thousands of independent untrusted sellers explicitly interfacing safely directly against millions of roaming buyers.","We explicitly author heavily complex monolithic platforms orchestrating vendor KYC verifications, intense independent inventory schemas natively avoiding chaotic duplication, and explicit secure escrow-based payment ledgers programmatically slicing commission fractions out accurately automatically.","These systems strictly demand absolute uncompromising custom architecture natively bypassing traditional boxed Shopify limitations fundamentally."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Vendor Dashboards", desc: "Providing independent merchants sleek bespoke internal portals natively managing private localized metrics flawlessly.", icon: <LayoutDashboard />}, {title: "Algorithmic Escrow", desc: "Holding buyer capital heavily securely inherently strictly waiting upon exact delivery validation logic clearing.", icon: <LockKeyhole />}, {title: "Micro-Review Ecosystems", desc: "Building dense verified-purchase comment mechanics violently maintaining absolute holistic ecosystem trust.", icon: <User />}, {title: "Scale Search Tooling", desc: "Deploying heavy Algolia tools instantaneously parsing millions of distinct fragmented SKUs accurately fast.", icon: <Search />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Next.js","Node.js","PostgreSQL","Stripe Connect","Algolia","AWS S3"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Data Abstraction","desc":"Designing immense database relation trees natively fundamentally isolating exact distinct merchant data payloads explicitly safely."},{"title":"Payment Blueprinting","desc":"Mapping out absolute rigorous logical financial pathways natively dynamically avoiding massive international legal constraints."},{"title":"Platform Launch","desc":"Deploying high-frequency environments robustly ready directly processing immense immense simultaneous API payloads cleanly."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"How do you handle payouts to hundreds of vendors?","a":"We natively integrate programmatic payment engines (like Stripe Connect) which dynamically splits the cart total into varying exact percentages routing them to respective localized vendor bank accounts implicitly securely."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Custom Web Applications","href":"/services/web-development/custom-web-applications"},{"title":"Software Portals","href":"/services/software-development/saas"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default MarketplaceDev;
