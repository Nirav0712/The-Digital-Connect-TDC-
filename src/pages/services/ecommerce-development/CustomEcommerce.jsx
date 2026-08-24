import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { CustomEcommerceVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const CustomEcommerce = () => {
    useSEO({ title: "Shattering Standard Platform Limitations. | The Digital Connect", description: "Bespoke Node/React storefronts engineered entirely from scratch exclusively explicitly covering extraordinarily unique catalog and checkout demands." });
    const theme = {"accent":"text-brand-cyan","bg":"bg-brand-cyan/20","softBg":"bg-brand-bg-light"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="Custom Ecommerce" title="Shattering Standard Platform Limitations." description="Bespoke Node/React storefronts engineered entirely from scratch exclusively explicitly covering extraordinarily unique catalog and checkout demands." theme={theme} visual={CustomEcommerceVisual} />
                <SubServiceShared.Overview title="When standard boxed software completely fails" content={["Certain business models possess rulesets fundamentally incompatible with pre-packaged software. Intense digital ticket systems, massively variable product configurators, heavily localized multi-currency split-vendor routing—these concepts destroy standard Shopify environments.","We build custom platforms from absolute scratch natively utilizing React, Node.js, and PostgreSQL schemas. By owning the literal ground-level database engineering, you can execute logic scenarios entirely unconstrained by SaaS functionality limits.","This fundamentally translates into total market dominance immediately rendering competitors incapable of matching your bespoke dynamic UI/UX commercial workflows."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Bespoke DB Scoping", desc: "Constructing heavily normalized schema tables supporting intense product variable configurations.", icon: <Database />}, {title: "Intense Performance", desc: "Abolishing generic platform bloat resulting cleanly in immediate micro-second page transitions.", icon: <Zap />}, {title: "Multi-Vendor Architecture", desc: "Writing dynamic ledger code cleanly organizing split commissions across thousands of external vendors.", icon: <Store />}, {title: "Custom UI Integrations", desc: "Engineering complex 3D product configurators directly embedded natively inside the React app checkout loop.", icon: <Maximize />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["React","Next.js","Node.js","PostgreSQL","Stripe Connect","AWS"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Systems Mapping","desc":"Aggressively detailing exactly how bizarre checkout mutations flow securely affecting backend logistics."},{"title":"Secure API Creation","desc":"Building bulletproof endpoints facilitating bespoke cart math fundamentally avoiding massive client-side tampering."},{"title":"Deploy & Iteration","desc":"Continuously refining cloud architecture handling vast incoming global concurrent holiday traffic spikes."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Is it hard to manage products without Shopify?","a":"No. We simultaneously build a sleek secure internal React Admin Dashboard perfectly tied directly into the custom PostgreSQL database, functioning exactly like a normal CMS."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Payment Flows","href":"/services/ecommerce-development/payment-integration"},{"title":"SaaS Architecture","href":"/services/software-development/saas"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default CustomEcommerce;
