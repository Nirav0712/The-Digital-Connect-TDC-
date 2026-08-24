const fs = require('fs');
const path = require('path');

const generatePages = () => {
    const pages = [
        // UI/UX DESIGN
        {
            file: 'UXResearch.jsx', dir: 'ui-ux-design', comp: 'UXResearch',
            pRoute: '/services/ui-ux-design', pTitle: 'UI/UX Design', eyebrow: 'UX Research',
            title: 'Understand People Before Building for Them.',
            desc: 'Deep qualitative and quantitative behavioral research powering human-centered product development and eliminating vast engineering waste.',
            theme: { accent: 'text-brand-periwinkle', bg: 'bg-brand-periwinkle/20', softBg: 'bg-brand-cyan/10' },
            visual: 'UXResearchVisual', visualImport: 'import { UXResearchVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Data-driven insights over subjective opinions',
                content: [
                    'Many companies waste millions engineering products nobody genuinely wants because they assume they know their target demographic. Authentic UX Research violently removes assumption from the equation. We substitute opinion with rigorous, tested behavioral insight.',
                    'Through detailed user interviews, competitor disruption mapping, and massive A/B split-testing campaigns, we outline exact pain points causing friction in your existing ecosystem, isolating exactly where revenue is leaking.',
                    'By mapping the exact emotional User Journey natively from discovery to conversion, we build foundational blueprints that guarantee every button, layout, and copy aligns perfectly with what converts maximum capital.'
                ]
            },
            capabilities: [
                { title: 'User Interviews', desc: 'Conducting aggressive 1-on-1 qualitative analysis revealing hidden structural biases and desires.', icon: '<User />' },
                { title: 'Journey Mapping', desc: 'Visualizing exact touchpoints tracing the user from pure awareness down to absolute retention.', icon: '<Map />' },
                { title: 'Competitor Auditing', desc: 'Scientifically breaking down industry rivals to expose massive conversion flaws you can exploit.', icon: '<Search />' },
                { title: 'Usability Testing', desc: 'Deploying low-fidelity prototypes early to catch catastrophic UX flaws before committing code.', icon: '<Pointer />' },
                { title: 'Persona Development', desc: 'Synthesizing distinct psychographic profiles dictating exactly how disparate logic flows operate.', icon: '<Target />' }
            ],
            tech: ['Lookback', 'Hotjar', 'Miro', 'Figma', 'Google Analytics', 'Typeform'],
            process: [
                { title: 'Discovery Phase', desc: 'Extracting internal assumptions directly from stakeholders and contrasting them against actual market reality.' },
                { title: 'Insight Harvesting', desc: 'Running exhaustive interactive tests with physical human demographics mapping exact emotional friction.' },
                { title: 'Data Synthesis', desc: 'Transforming chaotic feedback directly into clear, actionable structural wireframing mandates.' }
            ],
            faq: [
                { q: 'Why shouldn\'t we just skip research and start designing?', a: 'Because designing blindly is catastrophically expensive. Changing a wireframe takes minutes. Changing committed React code takes weeks. Research ensures we execute flawlessly on the first production iteration.' },
                { q: 'How long does UX Research take?', a: 'Typically 2 to 4 weeks depending entirely on how rapidly we can recruit explicit target demographics for qualitative testing and interviews.' }
            ],
            related: [
                { title: 'Wireframing', href: '/services/ui-ux-design/wireframing' },
                { title: 'UI Design', href: '/services/ui-ux-design/ui-design' }
            ]
        },
        {
            file: 'Wireframing.jsx', dir: 'ui-ux-design', comp: 'Wireframing',
            pRoute: '/services/ui-ux-design', pTitle: 'UI/UX Design', eyebrow: 'Wireframing',
            title: 'Turn Ideas Into Clear Product Architectures.',
            desc: 'Low-fidelity structural blueprints isolating structural logic from surface visual aesthetics, guaranteeing frictionless navigation models.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-bg-light' },
            visual: 'WireframingVisual', visualImport: 'import { WireframingVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Nailing the mechanics before applying the paint',
                content: [
                    'Before rendering brand colors, typography, or micro-animations, the platform structure MUST be logically sound. Wireframing entirely isolates user experience functionality from visual distraction.',
                    'By mapping out skeletal constraints, we can aggressively debate layout hierarchies, button placements, and complex form architectures efficiently without wasting thousands of dollars updating high-fidelity vector graphics.',
                    'This is the absolute core architectural phase. The wireframes dictate exactly how the backend engineers structured databases, providing a seamless blueprint guiding all subsequent production.'
                ]
            },
            capabilities: [
                { title: 'Information Architecture', desc: 'Structuring massive complex datasets intuitively preventing deep navigation confusion natively.', icon: '<Layers />' },
                { title: 'Low Fidelity Layouts', desc: 'Rapid gray-box sketching ensuring macro page flow dominates effectively.', icon: '<Layout />' },
                { title: 'User Flow Diagrams', desc: 'Mapping exact conditional logic chains (\'If user clicks here, show X\').', icon: '<Map />' }
            ],
            tech: [],
            process: [],
            faq: [
                { q: 'Why are wireframes just gray boxes?', a: 'To entirely remove bias. When clients see colors, they inherently argue about branding rather than functionality. Gray boxes force everyone to focus exclusively on usability and conversion architecture.' }
            ],
            related: [
                { title: 'Prototyping', href: '/services/ui-ux-design/prototyping' },
                { title: 'Frontend Systems', href: '/services/web-development/frontend-development' }
            ]
        },
        {
            file: 'Prototyping.jsx', dir: 'ui-ux-design', comp: 'Prototyping',
            pRoute: '/services/ui-ux-design', pTitle: 'UI/UX Design', eyebrow: 'Prototyping',
            title: 'Experience The Product Before It Breathes.',
            desc: 'Lightning-fast interactive models validating complex user journeys instantaneously prior to committing exhaustive engineering resources.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-bg-light' },
            visual: 'PrototypingVisual', visualImport: 'import { PrototypingVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Clickable realism dictating instant validation',
                content: [
                    'Static images on a screen communicate absolutely nothing about how a fluid platform intimately feels. To truly understand velocity, bounce-rate risk, and layout mechanics, you must deploy an interactive prototype.',
                    'We connect hundreds of vector artboards dynamically inside Figma or Framer, mapping intricate click-events, hover-states, and modal transitions entirely without writing a solitary line of production code.',
                    'This enables aggressive stakeholder alignment instantly. You can load it practically on your actual iPhone and test the precise navigation mechanics exactly as a native user authentically would.'
                ]
            },
            capabilities: [
                { title: 'Micro-Interaction Design', desc: 'Simulating complex button states, dropdown logic, and form validations instantly.', icon: '<Zap />' },
                { title: 'High-Fidelity Flow', desc: 'Connecting massive artboard infrastructures allowing total holistic platform navigability.', icon: '<Pointer />' },
                { title: 'Investor Pitch Models', desc: 'Delivering flawless executable visual illusions allowing startups to raise mass capital securely.', icon: '<Maximize />' }
            ],
            tech: ['Figma', 'Framer', 'Protopie', 'Origami Studio'],
            process: [
                { title: 'Component Linking', desc: 'Mapping physical \'hotspots\' forcing intuitive screen-to-screen navigation natively.' },
                { title: 'Transition Implementation', desc: 'Deploying smart-animate physics granting organic weight to dynamic screen loads.' },
                { title: 'Usability Validation', desc: 'Deploying the executable prototype directly out to blind test groups monitoring click drops.' }
            ],
            faq: [
                { q: 'Can we use the prototype code in production?', a: 'No. Prototypes are strictly visual simulations lacking completely real underlying database architecture. The frontend team uses the prototype as the exact visual mandate to construct the real structural code subsequently.' }
            ],
            related: [
                { title: 'UI Design', href: '/services/ui-ux-design/ui-design' },
                { title: 'Design Systems', href: '/services/ui-ux-design/design-systems' }
            ]
        },
        {
            file: 'UIDesign.jsx', dir: 'ui-ux-design', comp: 'UIDesign',
            pRoute: '/services/ui-ux-design', pTitle: 'UI/UX Design', eyebrow: 'UI Design',
            title: 'Interfaces Operating With Distinct Purpose.',
            desc: 'Emotionally resonant high-fidelity interfaces perfectly balancing massive commercial conversion functionality with profound aesthetic beauty.',
            theme: { accent: 'text-brand-periwinkle', bg: 'bg-brand-periwinkle/20', softBg: 'bg-brand-cyan/10' },
            visual: 'UIDesignVisual', visualImport: 'import { UIDesignVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Every single pixel serving an explicit conversion goal',
                content: [
                    'Beautiful but functionally useless interfaces destroy companies instantly. Boring interfaces lose trust profoundly. The absolute apex of digital design lies directly where aesthetic excellence flawlessly overlaps with psychological human conversion.',
                    'We construct massive visual ecosystems heavily relying strictly on accessible typography scales, meticulous negative whitespace, and color psychology forcing exact directed visual hierarchy.',
                    'Every shadow, border-radius, and gradient serves an explicit role: guiding the user exactly toward the absolute highest friction value point, and removing all cognitive resistance intrinsically stopping them from converting.'
                ]
            },
            capabilities: [
                { title: 'Visual Hierarchy', desc: 'Utilizing sizing contrasts heavily forcing users explicitly down the optimal path natively.', icon: '<Layout />' },
                { title: 'Typography Architecture', desc: 'Selecting highly legible, premium font-faces scaling perfectly downwards dynamically to mobile viewports.', icon: '<Palette />' },
                { title: 'Color Psychology', desc: 'Implementing deep brand tokens evoking absolute exact emotional responses implicitly securing user trust.', icon: '<Target />' }
            ],
            tech: [],
            process: [
                { title: 'Moodboarding', desc: 'Extracting macro visual aspirations synthesizing massive visual inspiration entirely before execution.' },
                { title: 'Layout Construction', desc: 'Deploying typography, grids, and primary macro visual rulesets comprehensively onto the wireframes.' },
                { title: 'Micro Refinement', desc: 'Polishing intense shadow details, border contrasts, and absolute pixel-perfect spacing ratios.' }
            ],
            faq: [
                { q: 'Will the design be responsive?', a: 'Absolutely. We design utilizing strict 12-column grids forcing immaculate scaling natively down from huge 4k desktop monitors explicitly down to tight 320px mobile viewports flawlessly.' }
            ],
            related: [
                { title: 'Design Systems', href: '/services/ui-ux-design/design-systems' },
                { title: 'Frontend Web', href: '/services/web-development/frontend-development' }
            ]
        },
        {
            file: 'DesignSystems.jsx', dir: 'ui-ux-design', comp: 'DesignSystems',
            pRoute: '/services/ui-ux-design', pTitle: 'UI/UX Design', eyebrow: 'Design Systems',
            title: 'Infinite Consistency at Every Touchpoint.',
            desc: 'Scalable React-ready tokenized UX component libraries ensuring absolute infinite visual consistency universally aiding massive engineering team scaling.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-gold/10' },
            visual: 'DesignSystemsVisual', visualImport: 'import { DesignSystemsVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Ending visual fragmentation permanently',
                content: [
                    'As applications scale rapidly and engineering teams expand fiercely, visual integrity collapses effortlessly. A developer utilizes slightly different hex codes; a designer creates slightly different paddings. Immediately, the ecosystem feels disjointed, amateurish, and heavily broken.',
                    'A Design System is the absolute singular source of truth. We build massive, meticulously documented token libraries (Colors, Spacing, Typography) natively translated directly into functional UI components (Buttons, Inputs, Modals).',
                    'By deploying systems identical to Google\'s Material or Apple\'s HIG exclusively for your brand, your development speed exponentially multiples because engineers simply plug-and-play governed pre-built interfaces completely removing subjective visual decision making.'
                ]
            },
            capabilities: [
                { title: 'Design/Code Tokens', desc: 'Exporting raw base variables universally syncing Figma updates directly into CSS/Tailwind infrastructures instantly.', icon: '<Layers />' },
                { title: 'Component Libraries', desc: 'Building comprehensive master assets covering absolutely every single interactive state flawlessly.', icon: '<Component />' },
                { title: 'Interactive Documentation', desc: 'Delivering storybooks teaching newly hired engineers explicitly how to deploy aesthetics properly.', icon: '<Search />' }
            ],
            tech: ['Figma', 'Storybook', 'Tailwind', 'React', 'Zeroheight'],
            process: [
                { title: 'Foundation Definition', desc: 'Setting immutable baseline rules concerning primitive colors, semantic scaling, and global margins.' },
                { title: 'Component Engineering', desc: 'Constructing robust variants including explicit warning, error, success, hover, and loading states strictly.' },
                { title: 'Handoff Protocol', desc: 'Syncing native Figma variable tokens dynamically directly out into the actual production repository branch.' }
            ],
            faq: [
                { q: 'Is a Design System necessary for a small project?', a: 'No. Small projects operate fine organically. Design Systems are required specifically for mid-large platforms scaling aggressively needing extreme consistency across entirely different engineering squads.' }
            ],
            related: [
                { title: 'Frontend Architecture', href: '/services/web-development/frontend-development' },
                { title: 'Cross Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' }
            ]
        },

        // ECOMMERCE
        {
            file: 'Shopify.jsx', dir: 'ecommerce-development', comp: 'Shopify',
            pRoute: '/services/ecommerce-development', pTitle: 'Ecommerce Development', eyebrow: 'Shopify Development',
            title: 'Shopify Experiences Exclusively Designed to Scale.',
            desc: 'Custom headless Shopify architectures maximizing absolute storefront versatility mapping strictly to high-conversion checkout optimization.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-gold/10' },
            visual: 'ShopifyVisual', visualImport: 'import { ShopifyVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Escaping the generic template ecosystem',
                content: [
                    'Standard Shopify themes destroy conversion momentum identically. If your storefront looks exactly like ten thousand other generic dropshipping businesses, consumer trust heavily falters. We engineer heavily bespoke bespoke Shopify environments replacing themes entirely with custom Liquid operations or entirely Headless architectures.',
                    'By deploying custom Shopify Plus headless solutions utilizing Next.js / React on the frontend, we bypass native Shopify rendering limitations instantly. This explicitly delivers hyper-fast milliseconds page loading speeds which mathematically directly correlates to intense revenue increases natively.',
                    'We optimize absolutely everything: customizing complex filtering algorithms, executing robust ERP integrations, and redesigning the checkout process reducing heavy cart abandonment.'
                ]
            },
            capabilities: [
                { title: 'Headless Architecture', desc: 'Utilizing Hydrogen or Next.js explicitly separating the slow frontend allowing instant sub-millisecond route transitions.', icon: '<Layout />' },
                { title: 'Custom Theme Dev', desc: 'Authoring immaculate raw Liquid code fundamentally avoiding massively bloated pre-bought marketplace themes.', icon: '<Code />' },
                { title: 'ERP/CRM Syncing', desc: 'Fusing bespoke middleware explicitly pushing high-volume inventory data perfectly across fragmented global warehouses.', icon: '<Maximize />' },
                { title: 'Advanced Filtering', desc: 'Implementing rapid complex tag-based faceted search allowing immediate specific product discovery safely.', icon: '<Search />' },
                { title: 'Checkout Customization', desc: 'For Shopify Plus merchants, fully overhauling the checkout flow heavily aggressively reducing drop-off metrics.', icon: '<Target />' }
            ],
            tech: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Next.js', 'React', 'GraphQL', 'Klaviyo'],
            process: [
                { title: 'Platform Auditing', desc: 'Diagnosing heavy bottleneck applications dragging native server performance directly killing active conversions.' },
                { title: 'Custom Engineering', desc: 'Writing clean minimal logic rendering unique catalog experiences functioning fundamentally better.' },
                { title: 'Third-Party Webhooks', desc: 'Integrating aggressive multi-platform tools synchronizing exact analytics securely.' }
            ],
            faq: [
                { q: 'Why build headless Shopify?', a: 'Headless entirely unlocks UX potential. It separates the \'backend\' cart data from the \'frontend\' website screen, allowing us to build immersive ultra-fast bespoke pages that standard Shopify liquid templates structurally cannot ever support natively.' },
                { q: 'Can you migrate us from WooCommerce to Shopify?', a: 'Yes. We deploy rigorous ETL (Extract, Transform, Load) protocols safely shifting massive customer databases, complex ongoing subscriptions, and dense SKU catalogs completely securely preserving all metadata.' }
            ],
            related: [
                { title: 'Payment Integrations', href: '/services/ecommerce-development/payment-integration' },
                { title: 'Custom Ecommerce', href: '/services/ecommerce-development/custom-ecommerce' }
            ]
        },
        {
            file: 'WooCommerce.jsx', dir: 'ecommerce-development', comp: 'WooCommerce',
            pRoute: '/services/ecommerce-development', pTitle: 'Ecommerce Development', eyebrow: 'WooCommerce',
            title: 'Limitless Omnichannel Commerce Built on Code.',
            desc: 'Deeply customized open-source Woo commerce experiences granting complete data ownership and literally limitless platform structural capabilities.',
            theme: { accent: 'text-brand-periwinkle', bg: 'bg-brand-periwinkle/20', softBg: 'bg-brand-cyan/10' },
            visual: 'WooCommerceVisual', visualImport: 'import { WooCommerceVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Complete commercial autonomy and data control',
                content: [
                    'SaaS ecommerce platforms like Shopify command immense monthly fees and structurally limit what backend code you can explicitly alter. WooCommerce immediately solves this natively by providing 100% open-source structural access explicitly sitting on top of WordPress.',
                    'We construct heavy WooCommerce environments heavily optimized exclusively for high-traffic stores that demand extraordinarily specific checkout setups, incredibly dynamic subscription modeling, or highly explicit wholesale (B2B) permission tiering.',
                    'We heavily rewrite standard bloated WooCommerce infrastructures, offloading complex databases, enabling Redis caching, and securing immense massive catalog queries running flawlessly.'
                ]
            },
            capabilities: [
                { title: 'Total Data Ownership', desc: 'Housing your entire secure consumer history database natively completely safe from unexpected SaaS platform bans.', icon: '<Database />' },
                { title: 'Complex Subscriptions', desc: 'Engineering dynamic recurring box models explicitly executing intense billing variable logic flawlessly.', icon: '<Layers />' },
                { title: 'Wholesale B2B Access', desc: 'Deploying deep user permission tiers instantly altering product pricing dependent natively on logged-in roles.', icon: '<User />' }
            ],
            tech: [],
            process: [],
            faq: [
                { q: 'Is WooCommerce slow compared to Shopify?', a: 'Out of the box, yes, heavily. However, we engineer custom WordPress setups utilizing intense Redis server caching natively optimizing queries making it easily match standard Shopify loading metrics flawlessly.' }
            ],
            related: [
                { title: 'Custom Ecommerce', href: '/services/ecommerce-development/custom-ecommerce' },
                { title: 'CMS Development', href: '/services/web-development/cms-development' }
            ]
        },
        {
            file: 'CustomEcommerce.jsx', dir: 'ecommerce-development', comp: 'CustomEcommerce',
            pRoute: '/services/ecommerce-development', pTitle: 'Ecommerce Development', eyebrow: 'Custom Ecommerce',
            title: 'Shattering Standard Platform Limitations.',
            desc: 'Bespoke Node/React storefronts engineered entirely from scratch exclusively explicitly covering extraordinarily unique catalog and checkout demands.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-bg-light' },
            visual: 'CustomEcommerceVisual', visualImport: 'import { CustomEcommerceVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'When standard boxed software completely fails',
                content: [
                    'Certain business models possess rulesets fundamentally incompatible with pre-packaged software. Intense digital ticket systems, massively variable product configurators, heavily localized multi-currency split-vendor routing—these concepts destroy standard Shopify environments.',
                    'We build custom platforms from absolute scratch natively utilizing React, Node.js, and PostgreSQL schemas. By owning the literal ground-level database engineering, you can execute logic scenarios entirely unconstrained by SaaS functionality limits.',
                    'This fundamentally translates into total market dominance immediately rendering competitors incapable of matching your bespoke dynamic UI/UX commercial workflows.'
                ]
            },
            capabilities: [
                { title: 'Bespoke DB Scoping', desc: 'Constructing heavily normalized schema tables supporting intense product variable configurations.', icon: '<Database />' },
                { title: 'Intense Performance', desc: 'Abolishing generic platform bloat resulting cleanly in immediate micro-second page transitions.', icon: '<Zap />' },
                { title: 'Multi-Vendor Architecture', desc: 'Writing dynamic ledger code cleanly organizing split commissions across thousands of external vendors.', icon: '<Store />' },
                { title: 'Custom UI Integrations', desc: 'Engineering complex 3D product configurators directly embedded natively inside the React app checkout loop.', icon: '<Maximize />' }
            ],
            tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'AWS'],
            process: [
                { title: 'Systems Mapping', desc: 'Aggressively detailing exactly how bizarre checkout mutations flow securely affecting backend logistics.' },
                { title: 'Secure API Creation', desc: 'Building bulletproof endpoints facilitating bespoke cart math fundamentally avoiding massive client-side tampering.' },
                { title: 'Deploy & Iteration', desc: 'Continuously refining cloud architecture handling vast incoming global concurrent holiday traffic spikes.' }
            ],
            faq: [
                { q: 'Is it hard to manage products without Shopify?', a: 'No. We simultaneously build a sleek secure internal React Admin Dashboard perfectly tied directly into the custom PostgreSQL database, functioning exactly like a normal CMS.' }
            ],
            related: [
                { title: 'Payment Flows', href: '/services/ecommerce-development/payment-integration' },
                { title: 'SaaS Architecture', href: '/services/software-development/saas' }
            ]
        },
        {
            file: 'PaymentIntegration.jsx', dir: 'ecommerce-development', comp: 'PaymentIntegration',
            pRoute: '/services/ecommerce-development', pTitle: 'Ecommerce Development', eyebrow: 'Payment Integrations',
            title: 'Secure Cart Checkouts Facilitating Utmost Trust.',
            desc: 'Multi-gateway logic integrations strictly encompassing absolute PCI compliance natively and seamless intense global subscription recurring billing.',
            theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-bg-light' },
            visual: 'PaymentIntegrationVisual', visualImport: 'import { PaymentIntegrationVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Transforming friction actively into capital',
                content: [
                    'The highest point of categorical user anxiety directly exists inside the payment form. Sloppy redirect logic or confusing input fields actively cause monumental cart abandonment explicitly destroying acquired marketing revenue.',
                    'We strictly engineer incredibly frictionless, natively embedded payment gateways securely utilizing Stripe, PayPal, Braintree natively masking intense cryptographic security flawlessly behind beautiful human interfaces.',
                    'Additionally expanding into heavily complex automated workflows, generating dynamic scheduled recurring billing engines securely handling prorated logic, global tax localization integrations dynamically scaling out seamlessly cross-border.'
                ]
            },
            capabilities: [
                { title: 'Embedded Checkout', desc: 'Ensuring consumers submit credit payloads fundamentally without drastically leaving your actual brand domain remotely.', icon: '<LockKeyhole />' },
                { title: 'Subscription Math', desc: 'Architecting intense chron-job servers automatically handling complex failed-payment retry webhooks elegantly.', icon: '<Layers />' },
                { title: 'Multi-Currency Routing', desc: 'Automatically converting native currencies directly dependent intrinsically on dynamic localized localized IP data.', icon: '<Globe />' },
                { title: 'Split Escrow Ledgers', desc: 'Utilizing robust Stripe Connect fundamentally organizing multi-party payout timing completely safely natively.', icon: '<CreditCard />' }
            ],
            tech: ['Stripe', 'Braintree', 'Adyen', 'Node.js Webhooks', 'Plaid'],
            process: [
                { title: 'Security Architecture', desc: 'Rigorous PCI evaluation ensuring absolutely zero sensitive card data dynamically touches your own server.' },
                { title: 'Webhook Resiliency', desc: 'Drafting immense idempotent Node.js servers mathematically guaranteeing users are never billed incorrectly twice.' },
                { title: 'Interface Polishing', desc: 'Testing intense UX flows drastically minimizing physical required keyboard strikes completing orders instantly.' }
            ],
            faq: [
                { q: 'Do you store credit card numbers?', a: 'Absolutely never. We utilize strict tokenization APIs (like Stripe Elements). The card logic is immediately shipped to Stripe, which generates a secure token instantly allowing us to bill securely without assuming legal liability.' }
            ],
            related: [
                { title: 'Marketplace Development', href: '/services/ecommerce-development/marketplace-development' },
                { title: 'API Ecosystems', href: '/services/web-development/api-integration' }
            ]
        },
        {
            file: 'MarketplaceDev.jsx', dir: 'ecommerce-development', comp: 'MarketplaceDev',
            pRoute: '/services/ecommerce-development', pTitle: 'Ecommerce Development', eyebrow: 'Marketplaces',
            title: 'Massive B2B & B2C Multivendor Ecosystems.',
            desc: 'Engineering extraordinarily complex environments gracefully orchestrating immense buyer/seller relationships securely identically to Airbnb or Etsy native setups.',
            theme: { accent: 'text-brand-periwinkle', bg: 'bg-brand-periwinkle/20', softBg: 'bg-brand-cyan/10' },
            visual: 'MarketplaceVisual', visualImport: 'import { MarketplaceVisual } from \'../../../components/services/subservices/visuals/VisualsUIUX_Ecom\';',
            order: ['Hero', 'Overview', 'Capabilities', 'Technology', 'Process', 'FAQ', 'Related', 'CTA'],
            overview: {
                title: 'Orchestrating intense operational multi-party scale',
                content: [
                    'Standard ecommerce handles one seller distributing to many buyers. A Marketplace fundamentally changes this algorithm by introducing immense exponential logistical complexity: orchestrating thousands of independent untrusted sellers explicitly interfacing safely directly against millions of roaming buyers.',
                    'We explicitly author heavily complex monolithic platforms orchestrating vendor KYC verifications, intense independent inventory schemas natively avoiding chaotic duplication, and explicit secure escrow-based payment ledgers programmatically slicing commission fractions out accurately automatically.',
                    'These systems strictly demand absolute uncompromising custom architecture natively bypassing traditional boxed Shopify limitations fundamentally.'
                ]
            },
            capabilities: [
                { title: 'Vendor Dashboards', desc: 'Providing independent merchants sleek bespoke internal portals natively managing private localized metrics flawlessly.', icon: '<LayoutDashboard />' },
                { title: 'Algorithmic Escrow', desc: 'Holding buyer capital heavily securely inherently strictly waiting upon exact delivery validation logic clearing.', icon: '<LockKeyhole />' },
                { title: 'Micro-Review Ecosystems', desc: 'Building dense verified-purchase comment mechanics violently maintaining absolute holistic ecosystem trust.', icon: '<User />' },
                { title: 'Scale Search Tooling', desc: 'Deploying heavy Algolia tools instantaneously parsing millions of distinct fragmented SKUs accurately fast.', icon: '<Search />' }
            ],
            tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'Algolia', 'AWS S3'],
            process: [
                { title: 'Data Abstraction', desc: 'Designing immense database relation trees natively fundamentally isolating exact distinct merchant data payloads explicitly safely.' },
                { title: 'Payment Blueprinting', desc: 'Mapping out absolute rigorous logical financial pathways natively dynamically avoiding massive international legal constraints.' },
                { title: 'Platform Launch', desc: 'Deploying high-frequency environments robustly ready directly processing immense immense simultaneous API payloads cleanly.' }
            ],
            faq: [
                { q: 'How do you handle payouts to hundreds of vendors?', a: 'We natively integrate programmatic payment engines (like Stripe Connect) which dynamically splits the cart total into varying exact percentages routing them to respective localized vendor bank accounts implicitly securely.' }
            ],
            related: [
                { title: 'Custom Web Applications', href: '/services/web-development/custom-web-applications' },
                { title: 'Software Portals', href: '/services/software-development/saas' }
            ]
        }
    ];

    let imports = `import { Search, User, Map, Layout, Zap, Pointer, Palette, Target, Layers, Component, Maximize, Database, Store, ShoppingCart, CreditCard, LockKeyhole, Globe, LayoutDashboard, Code } from 'lucide-react';\n`;

    pages.forEach(p => {
        let code = `import React from 'react';\nimport useSEO from '../../../hooks/useSEO';\nimport PageTransition from '../../../components/common/PageTransition';\nimport { SubServiceShared } from '../../../components/services/subservices/SubServiceShared';\n${p.visualImport}\n${imports}\n\n`;
        code += `const ${p.comp} = () => {\n`;
        code += `    useSEO({ title: "${p.title} | The Digital Connect", description: "${p.desc}" });\n`;
        code += `    const theme = ${JSON.stringify(p.theme)};\n`;
        code += `    return (\n        <PageTransition>\n            <div className="w-full bg-white min-h-screen font-sans">\n`;

        p.order.forEach(section => {
            if (section === 'Hero') {
                code += `                <SubServiceShared.Hero parentTitle="${p.pTitle}" parentRoute="${p.pRoute}" eyebrow="${p.eyebrow}" title="${p.title}" description="${p.desc}" theme={theme} visual={${p.visual}} />\n`;
            }
            if (section === 'Overview') {
                code += `                <SubServiceShared.Overview title="${p.overview.title}" content={${JSON.stringify(p.overview.content)}} theme={theme} />\n`;
            }
            if (section === 'Capabilities') {
                code += `                <SubServiceShared.Capabilities theme={theme} capabilities={[${p.capabilities.map(c => `{title: "${c.title}", desc: "${c.desc}", icon: ${c.icon}}`).join(', ')}]} />\n`;
            }
            if (section === 'Technology') {
                code += `                <SubServiceShared.Technology theme={theme} technologies={${JSON.stringify(p.tech)}} />\n`;
            }
            if (section === 'Process') {
                code += `                <SubServiceShared.Process theme={theme} process={${JSON.stringify(p.process)}} />\n`;
            }
            if (section === 'FAQ') {
                code += `                <SubServiceShared.FAQ theme={theme} faqs={${JSON.stringify(p.faq)}} />\n`;
            }
            if (section === 'Related') {
                code += `                <SubServiceShared.Related theme={theme} links={${JSON.stringify(p.related)}} />\n`;
            }
            if (section === 'CTA') {
                code += `                <SubServiceShared.CTA theme={theme} />\n`;
            }
        });

        code += `            </div>\n        </PageTransition>\n    );\n};\n\nexport default ${p.comp};\n`;

        fs.writeFileSync(path.join(__dirname, 'src/pages/services', p.dir, p.file), code);
    });
    console.log("Generated UIUX and Ecommerce");
};

generatePages();
