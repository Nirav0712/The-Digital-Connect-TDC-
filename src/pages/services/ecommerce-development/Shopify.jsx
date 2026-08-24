import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { ShopifyVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const Shopify = () => {
    useSEO({ title: "Shopify Experiences Exclusively Designed to Scale. | The Digital Connect", description: "Custom headless Shopify architectures maximizing absolute storefront versatility mapping strictly to high-conversion checkout optimization." });
    const theme = {"accent":"text-brand-cyan","bg":"bg-brand-cyan/20","softBg":"bg-brand-gold/10"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="Shopify Development" title="Shopify Experiences Exclusively Designed to Scale." description="Custom headless Shopify architectures maximizing absolute storefront versatility mapping strictly to high-conversion checkout optimization." theme={theme} visual={ShopifyVisual} />
                <SubServiceShared.Overview title="Escaping the generic template ecosystem" content={["Standard Shopify themes destroy conversion momentum identically. If your storefront looks exactly like ten thousand other generic dropshipping businesses, consumer trust heavily falters. We engineer heavily bespoke bespoke Shopify environments replacing themes entirely with custom Liquid operations or entirely Headless architectures.","By deploying custom Shopify Plus headless solutions utilizing Next.js / React on the frontend, we bypass native Shopify rendering limitations instantly. This explicitly delivers hyper-fast milliseconds page loading speeds which mathematically directly correlates to intense revenue increases natively.","We optimize absolutely everything: customizing complex filtering algorithms, executing robust ERP integrations, and redesigning the checkout process reducing heavy cart abandonment."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Headless Architecture", desc: "Utilizing Hydrogen or Next.js explicitly separating the slow frontend allowing instant sub-millisecond route transitions.", icon: <Layout />}, {title: "Custom Theme Dev", desc: "Authoring immaculate raw Liquid code fundamentally avoiding massively bloated pre-bought marketplace themes.", icon: <Code />}, {title: "ERP/CRM Syncing", desc: "Fusing bespoke middleware explicitly pushing high-volume inventory data perfectly across fragmented global warehouses.", icon: <Maximize />}, {title: "Advanced Filtering", desc: "Implementing rapid complex tag-based faceted search allowing immediate specific product discovery safely.", icon: <Search />}, {title: "Checkout Customization", desc: "For Shopify Plus merchants, fully overhauling the checkout flow heavily aggressively reducing drop-off metrics.", icon: <Target />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Shopify Plus","Liquid","Hydrogen","Next.js","React","GraphQL","Klaviyo"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Platform Auditing","desc":"Diagnosing heavy bottleneck applications dragging native server performance directly killing active conversions."},{"title":"Custom Engineering","desc":"Writing clean minimal logic rendering unique catalog experiences functioning fundamentally better."},{"title":"Third-Party Webhooks","desc":"Integrating aggressive multi-platform tools synchronizing exact analytics securely."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Why build headless Shopify?","a":"Headless entirely unlocks UX potential. It separates the 'backend' cart data from the 'frontend' website screen, allowing us to build immersive ultra-fast bespoke pages that standard Shopify liquid templates structurally cannot ever support natively."},{"q":"Can you migrate us from WooCommerce to Shopify?","a":"Yes. We deploy rigorous ETL (Extract, Transform, Load) protocols safely shifting massive customer databases, complex ongoing subscriptions, and dense SKU catalogs completely securely preserving all metadata."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Payment Integrations","href":"/services/ecommerce-development/payment-integration"},{"title":"Custom Ecommerce","href":"/services/ecommerce-development/custom-ecommerce"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default Shopify;
