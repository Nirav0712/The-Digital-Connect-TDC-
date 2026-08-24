import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { WooCommerceVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const WooCommerce = () => {
    useSEO({ title: "Limitless Omnichannel Commerce Built on Code. | The Digital Connect", description: "Deeply customized open-source Woo commerce experiences granting complete data ownership and literally limitless platform structural capabilities." });
    const theme = {"accent":"text-brand-periwinkle","bg":"bg-brand-periwinkle/20","softBg":"bg-brand-cyan/10"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="WooCommerce" title="Limitless Omnichannel Commerce Built on Code." description="Deeply customized open-source Woo commerce experiences granting complete data ownership and literally limitless platform structural capabilities." theme={theme} visual={WooCommerceVisual} />
                <SubServiceShared.Overview title="Complete commercial autonomy and data control" content={["SaaS ecommerce platforms like Shopify command immense monthly fees and structurally limit what backend code you can explicitly alter. WooCommerce immediately solves this natively by providing 100% open-source structural access explicitly sitting on top of WordPress.","We construct heavy WooCommerce environments heavily optimized exclusively for high-traffic stores that demand extraordinarily specific checkout setups, incredibly dynamic subscription modeling, or highly explicit wholesale (B2B) permission tiering.","We heavily rewrite standard bloated WooCommerce infrastructures, offloading complex databases, enabling Redis caching, and securing immense massive catalog queries running flawlessly."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Total Data Ownership", desc: "Housing your entire secure consumer history database natively completely safe from unexpected SaaS platform bans.", icon: <Database />}, {title: "Complex Subscriptions", desc: "Engineering dynamic recurring box models explicitly executing intense billing variable logic flawlessly.", icon: <Layers />}, {title: "Wholesale B2B Access", desc: "Deploying deep user permission tiers instantly altering product pricing dependent natively on logged-in roles.", icon: <User />}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Is WooCommerce slow compared to Shopify?","a":"Out of the box, yes, heavily. However, we engineer custom WordPress setups utilizing intense Redis server caching natively optimizing queries making it easily match standard Shopify loading metrics flawlessly."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Custom Ecommerce","href":"/services/ecommerce-development/custom-ecommerce"},{"title":"CMS Development","href":"/services/web-development/cms-development"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default WooCommerce;
