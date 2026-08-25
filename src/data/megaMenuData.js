export const megaMenuData = {
    company: {
        title: "Company",
        items: [
            {
                id: "about-us",
                label: "About Us",
                heading: "About The Digital Connect",
                description: "Technology, creativity and strategy working together to build meaningful digital experiences.",
                subServices: [
                    { title: "Our Mission", href: "/about/mission" },
                    { title: "Brand Story", href: "/about/brand-story" },
                    { title: "Leadership", href: "/about/leadership" },
                    { title: "Global Presence", href: "/contact" }
                ],
                cta: "Learn More \u2192",
                href: "/about",
                background: "bg-brand-primary-navy text-white",
                imageText: "Agency"
            },
            {
                id: "our-values",
                label: "Our Values",
                heading: "What Drives Us",
                description: "Core principles guiding our technical engineering and design philosophy.",
                subServices: [
                    { title: "Innovation First", href: "/about/values#innovation" },
                    { title: "Customer Obsession", href: "/about/values#customer-obsession" },
                    { title: "Quality Without Compromise", href: "/about/values#quality" },
                    { title: "Continuous Growth", href: "/about/values#growth" }
                ],
                cta: "Explore Values \u2192",
                href: "/about/values",
                background: "bg-brand-cyan/20 border-brand-cyan text-brand-primary-navy",
                imageText: "Values"
            },
            {
                id: "team",
                label: "Our Team",
                heading: "The People Behind the Platform",
                description: "Meet the engineers, designers, and strategists crafting digital excellence.",
                subServices: [
                    { title: "Leadership Team", href: "/about/team#leadership" },
                    { title: "Engineering Team", href: "/about/team#engineering" },
                    { title: "Creative Team", href: "/about/team#creative" },
                    { title: "Growth & Marketing", href: "/about/team#growth" }
                ],
                cta: "Meet the Team \u2192",
                href: "/about/team",
                background: "bg-brand-deep-blue text-white",
                imageText: "Team"
            }
        ]
    },
    services: {
        title: "Services",
        items: [
            {
                id: "web-development",
                label: "Web Development",
                heading: "Web Development",
                description: "Build fast, scalable and high-performing digital experiences designed around your business goals.",
                subServices: [
                    { title: "Frontend Development", href: "/services/web-development/frontend-development" },
                    { title: "Backend Development", href: "/services/web-development/backend-development" },
                    { title: "CMS Development", href: "/services/web-development/cms-development" },
                    { title: "API Integration", href: "/services/web-development/api-integration" },
                    { title: "Custom Web Applications", href: "/services/web-development/custom-web-applications" }
                ],
                cta: "Explore Web Development \u2192",
                href: "/services/web-development",
                background: "bg-brand-primary-navy text-white",
                imageText: "Web Dev"
            },
            {
                id: "mobile-development",
                label: "Mobile App Development",
                heading: "Mobile App Development",
                description: "Create seamless mobile experiences for iOS and Android users.",
                subServices: [
                    { title: "iOS Development", href: "/services/mobile-app-development/ios-development" },
                    { title: "Android Development", href: "/services/mobile-app-development/android-development" },
                    { title: "Flutter", href: "/services/mobile-app-development/flutter-development" },
                    { title: "React Native", href: "/services/mobile-app-development/react-native-development" },
                    { title: "Cross-Platform Apps", href: "/services/mobile-app-development/cross-platform-apps" }
                ],
                cta: "Explore Mobile Development \u2192",
                href: "/services/mobile-app-development",
                background: "bg-brand-deep-blue text-white",
                imageText: "Mobile"
            },
            {
                id: "uiux-design",
                label: "UI/UX Design",
                heading: "UI/UX Design",
                description: "Design intuitive digital experiences that users love.",
                subServices: [
                    { title: "UX Research", href: "/services/ui-ux-design/ux-research" },
                    { title: "Wireframing", href: "/services/ui-ux-design/wireframing" },
                    { title: "Prototyping", href: "/services/ui-ux-design/prototyping" },
                    { title: "UI Design", href: "/services/ui-ux-design/ui-design" },
                    { title: "Design Systems", href: "/services/ui-ux-design/design-systems" }
                ],
                cta: "Explore UI/UX Design \u2192",
                href: "/services/ui-ux-design",
                background: "bg-brand-periwinkle/30 text-brand-primary-navy",
                imageText: "UI/UX"
            },
            {
                id: "ecommerce",
                label: "Ecommerce Development",
                heading: "Ecommerce Development",
                description: "Create high-converting ecommerce experiences designed for growth.",
                subServices: [
                    { title: "Shopify", href: "/services/ecommerce-development/shopify" },
                    { title: "WooCommerce", href: "/services/ecommerce-development/woocommerce" },
                    { title: "Custom Ecommerce", href: "/services/ecommerce-development/custom-ecommerce" },
                    { title: "Payment Integration", href: "/services/ecommerce-development/payment-integration" },
                    { title: "Marketplace Development", href: "/services/ecommerce-development/marketplace-development" }
                ],
                cta: "Explore Ecommerce \u2192",
                href: "/services/ecommerce-development",
                background: "bg-brand-cyan/20 border-brand-cyan text-brand-primary-navy",
                imageText: "Ecommerce"
            },
            {
                id: "software",
                label: "Software Development",
                heading: "Custom Software Development",
                description: "Build scalable software solutions around complex business requirements.",
                subServices: [
                    { title: "CRM", href: "/services/software-development/crm" },
                    { title: "ERP", href: "/services/software-development/erp" },
                    { title: "SaaS", href: "/services/software-development/saas" },
                    { title: "Business Automation", href: "/services/software-development/business-automation" },
                    { title: "API Development", href: "/services/software-development/api-development" }
                ],
                cta: "Explore Software Development \u2192",
                href: "/services/software-development",
                background: "bg-brand-gold/20 text-brand-primary-navy",
                imageText: "Software"
            },
            {
                id: "marketing",
                label: "Digital Marketing",
                heading: "Digital Marketing",
                description: "Grow your digital presence with data-driven marketing strategies.",
                subServices: [
                    { title: "SEO", href: "/services/digital-marketing/seo" },
                    { title: "PPC", href: "/services/digital-marketing/ppc" },
                    { title: "Social Media", href: "/services/digital-marketing/social-media" },
                    { title: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
                    { title: "Performance Marketing", href: "/services/digital-marketing/performance-marketing" }
                ],
                cta: "Explore Digital Marketing \u2192",
                href: "/services/digital-marketing",
                background: "bg-brand-electric-cyan/20 text-brand-primary-navy",
                imageText: "Marketing"
            }
        ]
    },
    industries: {
        title: "Industries",
        items: [
            {
                id: "healthcare",
                label: "Healthcare",
                heading: "Healthcare",
                description: "Digital solutions designed for modern healthcare businesses.",
                subServices: [
                    { title: "Healthcare Platforms", href: "/industries/healthcare/healthcare-platforms" },
                    { title: "Patient Apps", href: "/industries/healthcare/patient-apps" },
                    { title: "Healthcare Websites", href: "/industries/healthcare/healthcare-websites" },
                    { title: "Appointment Systems", href: "/industries/healthcare/appointment-systems" }
                ],
                cta: "Explore Healthcare \u2192",
                href: "/industries/healthcare",
                background: "bg-brand-cyan/20 border-brand-cyan text-brand-primary-navy",
                imageText: "Healthcare"
            },
            {
                id: "fintech",
                label: "Fintech",
                heading: "Fintech",
                description: "Secure, scalable applications for modern financial institutions.",
                subServices: [
                    { title: "Banking Portals", href: "/industries/fintech/banking-portals" },
                    { title: "Payments", href: "/industries/fintech/payments" },
                    { title: "Trading", href: "/industries/fintech/trading" },
                    { title: "Dashboards", href: "/industries/fintech/dashboards" }
                ],
                cta: "Explore Fintech \u2192",
                href: "/industries/fintech",
                background: "bg-brand-electric-cyan/20 text-brand-primary-navy",
                imageText: "Fintech"
            },
            {
                id: "ecommerce-industry",
                label: "Ecommerce",
                heading: "Ecommerce",
                description: "Tailored retail and D2C brand experiences that maximize conversion.",
                subServices: [
                    { title: "Marketplaces", href: "/industries/ecommerce/marketplaces" },
                    { title: "B2B Portals", href: "/industries/ecommerce/b2b-portals" },
                    { title: "Inventory", href: "/industries/ecommerce/inventory" },
                    { title: "POS Integration", href: "/industries/ecommerce/pos-integration" }
                ],
                cta: "Explore Ecommerce \u2192",
                href: "/industries/ecommerce",
                background: "bg-brand-periwinkle/30 text-brand-primary-navy",
                imageText: "Retail"
            },
            {
                id: "saas",
                label: "SaaS",
                heading: "Software as a Service",
                description: "Engineering robust platforms for subscription based software businesses.",
                subServices: [
                    { title: "Architecture", href: "/industries/saas/architecture" },
                    { title: "Multi-Tenant", href: "/industries/saas/multi-tenant" },
                    { title: "Billing", href: "/industries/saas/billing" },
                    { title: "Analytics", href: "/industries/saas/analytics" }
                ],
                cta: "Explore SaaS \u2192",
                href: "/industries/saas",
                background: "bg-brand-deep-blue text-white",
                imageText: "SaaS"
            }
        ]
    },
    portfolio: {
        title: "Portfolio",
        items: [
            {
                id: "all-projects",
                label: "All Projects",
                heading: "Featured Work",
                description: "Explore our archive of premium digital solutions for global agencies.",
                subServices: [
                    { title: "NeoBank App", href: "/portfolio" },
                    { title: "HealthPlus Portal", href: "/portfolio" },
                    { title: "Aura Luxury", href: "/portfolio" },
                    { title: "Nexus Analytics", href: "/portfolio" }
                ],
                cta: "View All Projects \u2192",
                href: "/portfolio",
                background: "bg-brand-primary-navy text-white",
                imageText: "All Work"
            },
            {
                id: "web-projects",
                label: "Web",
                heading: "Web Platforms",
                description: "High-performance websites designed for scalability and aesthetic dominance.",
                subServices: [
                    { title: "Aura Luxury", href: "/portfolio?filter=web" },
                    { title: "Urbanspace Realty", href: "/portfolio?filter=web" },
                    { title: "Acme Corporate", href: "/portfolio?filter=web" }
                ],
                cta: "View Web Projects \u2192",
                href: "/portfolio?filter=web",
                background: "bg-brand-deep-blue text-white",
                imageText: "Web"
            },
            {
                id: "mobile-projects",
                label: "Mobile",
                heading: "Mobile Applications",
                description: "Intuitive mobile experiences bringing enterprise tools to your pocket.",
                subServices: [
                    { title: "NeoBank Mobile", href: "/portfolio?filter=mobile" },
                    { title: "Global Freight", href: "/portfolio?filter=mobile" }
                ],
                cta: "View Mobile Projects \u2192",
                href: "/portfolio?filter=mobile",
                background: "bg-brand-periwinkle/30 text-brand-primary-navy",
                imageText: "Mobile"
            }
        ]
    },
    process: {
        title: "Process",
        items: [
            {
                id: "discovery",
                label: "Discovery",
                heading: "Discovery Phase",
                description: "We begin by understanding your business, users, goals and technical requirements.",
                subServices: [
                    { title: "Business Analysis", href: "/process#discovery" },
                    { title: "User Research", href: "/process#discovery" },
                    { title: "Requirements Setup", href: "/process#discovery" },
                    { title: "Technical Discovery", href: "/process#discovery" }
                ],
                cta: "Explore Our Process \u2192",
                href: "/process#discovery",
                background: "bg-brand-cyan/20 border-brand-cyan text-brand-primary-navy",
                imageText: "Phase 1"
            },
            {
                id: "strategy",
                label: "Strategy",
                heading: "Strategic Planning",
                description: "Mapping out the digital roadmap and ecosystem for scalable growth.",
                subServices: [
                    { title: "Product Roadmap", href: "/process#strategy" },
                    { title: "Technology Stack", href: "/process#strategy" },
                    { title: "Information Arch", href: "/process#strategy" },
                    { title: "Data Modeling", href: "/process#strategy" }
                ],
                cta: "Explore Our Process \u2192",
                href: "/process#strategy",
                background: "bg-brand-deep-blue text-white",
                imageText: "Phase 2"
            },
            {
                id: "design",
                label: "Design",
                heading: "UI/UX Engineering",
                description: "Creating comprehensive design systems that solve complex user problems.",
                subServices: [
                    { title: "Wireframing", href: "/process#design" },
                    { title: "Prototyping", href: "/process#design" },
                    { title: "Visual Design", href: "/process#design" },
                    { title: "Usability Testing", href: "/process#design" }
                ],
                cta: "Explore Our Process \u2192",
                href: "/process#design",
                background: "bg-brand-primary-navy text-white",
                imageText: "Phase 3"
            }
        ]
    },
    careers: {
        title: "Careers",
        items: [
            {
                id: "open-positions",
                label: "Open Positions",
                heading: "Join The Digital Connect",
                description: "We are always looking for ambitious engineers and creative thinkers.",
                subServices: [
                    { title: "Frontend Engineer", href: "/careers" },
                    { title: "Product Designer", href: "/careers" },
                    { title: "Backend Developer", href: "/careers" },
                    { title: "Project Manager", href: "/careers" }
                ],
                cta: "View Open Roles \u2192",
                href: "/careers",
                background: "bg-brand-periwinkle/30 text-brand-primary-navy",
                imageText: "Careers"
            }
        ]
    }
};
