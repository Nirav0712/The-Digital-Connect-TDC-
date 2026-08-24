import React from 'react';
import useSEO from '../../../hooks/useSEO';
import PageTransition from '../../../components/common/PageTransition';
import { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';
import { PaymentIntegrationVisual } from '../../../components/services/subservices/visuals/VisualsUIUX_Ecom';
import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';


const PaymentIntegration = () => {
    useSEO({ title: "Secure Cart Checkouts Facilitating Utmost Trust. | The Digital Connect", description: "Multi-gateway logic integrations strictly encompassing absolute PCI compliance natively and seamless intense global subscription recurring billing." });
    const theme = {"accent":"text-blue-500","bg":"bg-blue-500","softBg":"bg-blue-50"};
    return (
        <PageTransition>
            <div className="w-full bg-white min-h-screen font-sans">
                <SubServiceShared.Hero parentTitle="Ecommerce Development" parentRoute="/services/ecommerce-development" eyebrow="Payment Integrations" title="Secure Cart Checkouts Facilitating Utmost Trust." description="Multi-gateway logic integrations strictly encompassing absolute PCI compliance natively and seamless intense global subscription recurring billing." theme={theme} visual={PaymentIntegrationVisual} />
                <SubServiceShared.Overview title="Transforming friction actively into capital" content={["The highest point of categorical user anxiety directly exists inside the payment form. Sloppy redirect logic or confusing input fields actively cause monumental cart abandonment explicitly destroying acquired marketing revenue.","We strictly engineer incredibly frictionless, natively embedded payment gateways securely utilizing Stripe, PayPal, Braintree natively masking intense cryptographic security flawlessly behind beautiful human interfaces.","Additionally expanding into heavily complex automated workflows, generating dynamic scheduled recurring billing engines securely handling prorated logic, global tax localization integrations dynamically scaling out seamlessly cross-border."]} theme={theme} />
                <SubServiceShared.Capabilities theme={theme} capabilities={[{title: "Embedded Checkout", desc: "Ensuring consumers submit credit payloads fundamentally without drastically leaving your actual brand domain remotely.", icon: <LockKeyhole />}, {title: "Subscription Math", desc: "Architecting intense chron-job servers automatically handling complex failed-payment retry webhooks elegantly.", icon: <Layers />}, {title: "Multi-Currency Routing", desc: "Automatically converting native currencies directly dependent intrinsically on dynamic localized localized IP data.", icon: <Globe />}, {title: "Split Escrow Ledgers", desc: "Utilizing robust Stripe Connect fundamentally organizing multi-party payout timing completely safely natively.", icon: <CreditCard />}]} />
                <SubServiceShared.Technology theme={theme} technologies={["Stripe","Braintree","Adyen","Node.js Webhooks","Plaid"]} />
                <SubServiceShared.Process theme={theme} process={[{"title":"Security Architecture","desc":"Rigorous PCI evaluation ensuring absolutely zero sensitive card data dynamically touches your own server."},{"title":"Webhook Resiliency","desc":"Drafting immense idempotent Node.js servers mathematically guaranteeing users are never billed incorrectly twice."},{"title":"Interface Polishing","desc":"Testing intense UX flows drastically minimizing physical required keyboard strikes completing orders instantly."}]} />
                <SubServiceShared.FAQ theme={theme} faqs={[{"q":"Do you store credit card numbers?","a":"Absolutely never. We utilize strict tokenization APIs (like Stripe Elements). The card logic is immediately shipped to Stripe, which generates a secure token instantly allowing us to bill securely without assuming legal liability."}]} />
                <SubServiceShared.Related theme={theme} links={[{"title":"Marketplace Development","href":"/services/ecommerce-development/marketplace-development"},{"title":"API Ecosystems","href":"/services/web-development/api-integration"}]} />
                <SubServiceShared.CTA theme={theme} />
            </div>
        </PageTransition>
    );
};

export default PaymentIntegration;
