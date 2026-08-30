export const megaMenuData = {
    company: {
        title: "Company",
        type: "editorial",
        items: [
            {
                id: "about-us",
                label: "About Us",
                leftDescription: "Who we are, what we build and why it matters.",
                eyebrow: "ABOUT THE DIGITAL CONNECT",
                heading: "Digital experiences built with purpose.",
                description: "Technology, strategy and creativity working together to help ambitious businesses move forward.",
                cta: "Explore About Us \u2192",
                href: "/about"
            },
            {
                id: "our-values",
                label: "Our Values",
                leftDescription: "The principles that shape our work and culture.",
                eyebrow: "OUR VALUES",
                heading: "Principles behind every decision.",
                description: "We believe great digital work starts with clarity, collaboration, curiosity and a commitment to meaningful outcomes.",
                valueIndicators: ["Innovation", "Integrity", "Collaboration", "Impact"],
                cta: "Explore Our Values \u2192",
                href: "/about/values"
            },
            {
                id: "our-team",
                label: "Our Team",
                leftDescription: "Meet the people behind our digital expertise.",
                eyebrow: "OUR TEAM",
                heading: "People who turn ideas into digital experiences.",
                description: "A multidisciplinary team of strategists, designers and engineers working together to create exceptional digital products.",
                cta: "Meet Our Team \u2192",
                href: "/about/team"
            }
        ]
    },
    services: {
        title: "Services",
        type: "services",
        items: [
            {
                id: "web-development",
                label: "Web Development",
                heading: "Web Development",
                description: "Build fast, scalable and high-performing digital experiences designed around your business goals.",
                icon: "Code",
                href: "/services/web-development",
                subServices: [
                    { title: "Frontend Development", href: "/services/web-development/frontend-development" },
                    { title: "Backend Development", href: "/services/web-development/backend-development" },
                    { title: "CMS Development", href: "/services/web-development/cms-development" },
                    { title: "API Integration", href: "/services/web-development/api-integration" },
                    { title: "Custom Web Applications", href: "/services/web-development/custom-web-applications" }
                ]
            },
            {
                id: "mobile-app-development",
                label: "Mobile App Development",
                heading: "Mobile App Development",
                description: "Create seamless mobile experiences for iOS and Android.",
                icon: "Smartphone",
                href: "/services/mobile-app-development",
                subServices: [
                    { title: "iOS Development", href: "/services/mobile-app-development/ios-development" },
                    { title: "Android Development", href: "/services/mobile-app-development/android-development" },
                    { title: "Flutter Development", href: "/services/mobile-app-development/flutter-development" },
                    { title: "React Native Development", href: "/services/mobile-app-development/react-native-development" },
                    { title: "Cross-platform Apps", href: "/services/mobile-app-development/cross-platform-apps" }
                ]
            },
            {
                id: "ui-ux-design",
                label: "UI/UX Design",
                heading: "UI/UX Design",
                description: "Design intuitive digital experiences that users love.",
                icon: "PenTool",
                href: "/services/ui-ux-design",
                subServices: [
                    { title: "UX Research", href: "/services/ui-ux-design/ux-research" },
                    { title: "UI Design", href: "/services/ui-ux-design/ui-design" },
                    { title: "Design Systems", href: "/services/ui-ux-design/design-systems" },
                    { title: "Prototyping", href: "/services/ui-ux-design/prototyping" },
                    { title: "Usability Testing", href: "/services/ui-ux-design/usability-testing" }
                ]
            },
            {
                id: "ecommerce-development",
                label: "Ecommerce Development",
                heading: "Ecommerce Development",
                description: "Create high-converting ecommerce experiences designed for growth.",
                icon: "ShoppingCart",
                href: "/services/ecommerce-development",
                subServices: [
                    { title: "Shopify", href: "/services/ecommerce-development/shopify" },
                    { title: "WooCommerce", href: "/services/ecommerce-development/woocommerce" },
                    { title: "Custom Ecommerce", href: "/services/ecommerce-development/custom-ecommerce" },
                    { title: "Payment Integration", href: "/services/ecommerce-development/payment-integration" },
                    { title: "Marketplace Development", href: "/services/ecommerce-development/marketplace-development" }
                ]
            },
            {
                id: "software-development",
                label: "Software Development",
                heading: "Custom Software Development",
                description: "Build scalable software solutions around complex business requirements.",
                icon: "Monitor",
                href: "/services/software-development",
                subServices: [
                    { title: "CRM", href: "/services/software-development/crm" },
                    { title: "ERP", href: "/services/software-development/erp" },
                    { title: "SaaS", href: "/services/software-development/saas" },
                    { title: "Business Automation", href: "/services/software-development/business-automation" },
                    { title: "API Development", href: "/services/software-development/api-development" }
                ]
            },
            {
                id: "digital-marketing",
                label: "Digital Marketing",
                heading: "Digital Marketing",
                description: "Grow your digital presence with data-driven marketing strategies.",
                icon: "TrendingUp",
                href: "/services/digital-marketing",
                subServices: [
                    { title: "SEO", href: "/services/digital-marketing/seo" },
                    { title: "PPC", href: "/services/digital-marketing/ppc" },
                    { title: "Social Media", href: "/services/digital-marketing/social-media" },
                    { title: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
                    { title: "Performance Marketing", href: "/services/digital-marketing/performance-marketing" }
                ]
            }
        ]
    },
    industries: {
        title: "Industries",
        type: "industries",
        items: [
            {
                id: "healthcare",
                label: "Healthcare",
                heading: "Healthcare",
                description: "Secure and user-focused digital products for modern healthcare providers and patients.",
                icon: "HeartPulse",
                href: "/industries/healthcare",
                subServices: [
                    { title: "Healthcare Platforms", href: "/industries/healthcare/platforms" },
                    { title: "Patient Apps", href: "/industries/healthcare/patient-apps" },
                    { title: "Healthcare Websites", href: "/industries/healthcare/websites" },
                    { title: "Appointment Systems", href: "/industries/healthcare/appointments" }
                ]
            },
            {
                id: "fintech",
                label: "Fintech",
                heading: "Fintech",
                description: "High-performance financial platforms designed for security, scale and usability.",
                icon: "CircleDollarSign",
                href: "/industries/fintech",
                subServices: [
                    { title: "Banking Portals", href: "/industries/fintech/banking-portals" },
                    { title: "Payments", href: "/industries/fintech/payments" },
                    { title: "Trading Platforms", href: "/industries/fintech/trading" },
                    { title: "Financial Dashboards", href: "/industries/fintech/dashboards" }
                ]
            },
            {
                id: "ecommerce",
                label: "Ecommerce",
                heading: "Ecommerce",
                description: "Digital commerce experiences built for conversion, operations and growth.",
                icon: "ShoppingBag",
                href: "/industries/ecommerce",
                subServices: [
                    { title: "Marketplaces", href: "/industries/ecommerce/marketplaces" },
                    { title: "B2B Portals", href: "/industries/ecommerce/b2b-portals" },
                    { title: "Inventory Systems", href: "/industries/ecommerce/inventory" },
                    { title: "POS Integration", href: "/industries/ecommerce/pos-integration" }
                ]
            },
            {
                id: "saas",
                label: "SaaS",
                heading: "SaaS",
                description: "Scalable SaaS platforms engineered for recurring growth and product intelligence.",
                icon: "Cloud",
                href: "/industries/saas",
                subServices: [
                    { title: "SaaS Architecture", href: "/industries/saas/architecture" },
                    { title: "Multi-tenant Platforms", href: "/industries/saas/multi-tenant" },
                    { title: "Billing Systems", href: "/industries/saas/billing" },
                    { title: "Analytics", href: "/industries/saas/analytics" }
                ]
            }
        ]
    },
    portfolio: {
        title: "Portfolio",
        type: "portfolio",
        items: [
            {
                id: "web-projects",
                label: "Web Projects",
                href: "/portfolio?filter=web",
                featuredProject: {
                    title: "Aura Luxury",
                    category: "Web Platforms",
                    description: "High-performance modern luxury website designed for scalability.",
                    tags: ["React", "Next.js", "Tailwind"],
                    href: "/portfolio/aura-luxury",
                    image: "bg-brand-primary-navy"
                }
            },
            {
                id: "mobile-apps",
                label: "Mobile Apps",
                href: "/portfolio?filter=mobile",
                featuredProject: {
                    title: "NeoBank Mobile",
                    category: "Mobile Application",
                    description: "Intuitive mobile experiences bringing enterprise tools to your pocket.",
                    tags: ["Flutter", "Dart", "Firebase"],
                    href: "/portfolio/neobank",
                    image: "bg-brand-deep-blue"
                }
            },
            {
                id: "ecommerce",
                label: "Ecommerce",
                href: "/portfolio?filter=ecommerce",
                featuredProject: {
                    title: "Urbanspace Realty",
                    category: "Ecommerce Platform",
                    description: "B2B portal and seamless ecommerce integration.",
                    tags: ["Shopify", "React"],
                    href: "/portfolio/urbanspace",
                    image: "bg-brand-cyan"
                }
            },
            {
                id: "saas",
                label: "SaaS",
                href: "/portfolio?filter=saas",
                featuredProject: {
                    title: "Nexus Analytics",
                    category: "SaaS Platform",
                    description: "Data intelligence for high-growth startups.",
                    tags: ["Vue", "Node.js", "AWS"],
                    href: "/portfolio/nexus",
                    image: "bg-brand-electric-cyan"
                }
            },
            {
                id: "ui-ux",
                label: "UI/UX",
                href: "/portfolio?filter=ui-ux",
                featuredProject: {
                    title: "HealthPlus Portal",
                    category: "Product Design",
                    description: "User-centric design system for healthcare providers.",
                    tags: ["Figma", "Design System"],
                    href: "/portfolio/healthplus",
                    image: "bg-brand-periwinkle"
                }
            },
            {
                id: "branding",
                label: "Branding",
                href: "/portfolio?filter=branding",
                featuredProject: {
                    title: "Acme Corporate",
                    category: "Brand Identity",
                    description: "Complete visual rebrand and positioning.",
                    tags: ["Illustrator", "Brand Guide"],
                    href: "/portfolio/acme",
                    image: "bg-brand-gold"
                }
            }
        ]
    },
    process: {
        title: "Process",
        type: "process",
        items: [
            {
                id: "discovery",
                number: "01",
                label: "Discovery",
                icon: "Search",
                title: "Discovery Phase",
                description: "We begin by understanding your business, users, goals and technical requirements to build a strong engineering foundation.",
                href: "/process#discovery"
            },
            {
                id: "strategy",
                number: "02",
                label: "Strategy",
                icon: "Map",
                title: "Strategic Planning",
                description: "Mapping out the digital roadmap and ecosystem for scalable growth and sustainable technology choices.",
                href: "/process#strategy"
            },
            {
                id: "design",
                number: "03",
                label: "UX/UI Design",
                icon: "PenTool",
                title: "UX/UI Design",
                description: "Creating comprehensive design systems that solve complex user problems and elevate your brand identity.",
                href: "/process#design"
            },
            {
                id: "development",
                number: "04",
                label: "Development",
                icon: "Code",
                title: "Development",
                description: "Writing clean, scalable code architecture following industry best practices and security standards.",
                href: "/process#development"
            },
            {
                id: "testing",
                number: "05",
                label: "Testing",
                icon: "CheckCircle",
                title: "Testing & QA",
                description: "Rigorous quality assurance, automated testing, and performance optimization across all environments.",
                href: "/process#testing"
            },
            {
                id: "launch",
                number: "06",
                label: "Launch",
                icon: "Rocket",
                title: "Deployment & Launch",
                description: "Smooth deployment pipelines, CI/CD setup, and controlled release strategies ensuring zero downtime.",
                href: "/process#launch"
            },
            {
                id: "optimization",
                number: "07",
                label: "Optimization",
                icon: "TrendingUp",
                title: "Ongoing Optimization",
                description: "Continuous monitoring, analytics tracking, and iterative improvements to drive sustained growth.",
                href: "/process#optimization"
            }
        ]
    },
    "hire-team": {
        title: "Hire Team",
        type: "directory",
        items: [
            {
                id: "hire-web-developers",
                label: "Hire Web Developers",
                href: "/hire-team/web-developers",
                roles: [
                    { title: "Hire PHP Developer", href: "/hire-team/web-developers/php-developer" },
                    { title: "Hire Python Developer", href: "/hire-team/web-developers/python-developer" },
                    { title: "Hire WordPress Developer", href: "/hire-team/web-developers/wordpress-developer" },
                    { title: "Hire Magento Developer", href: "/hire-team/web-developers/magento-developer" },
                    { title: "Hire Shopify Developer", href: "/hire-team/web-developers/shopify-developer" },
                    { title: "Hire Golang Developer", href: "/hire-team/web-developers/golang-developer" },
                    { title: "Hire Ruby on Rails Developer", href: "/hire-team/web-developers/ruby-on-rails-developer" },
                    { title: "Hire Java Developer", href: "/hire-team/web-developers/java-developer" },
                    { title: "Hire MEAN Stack Developer", href: "/hire-team/web-developers/mean-stack-developer" },
                    { title: "Hire MERN Developer", href: "/hire-team/web-developers/mern-developer" },
                    { title: "Hire Full Stack Developer", href: "/hire-team/web-developers/full-stack-developer" },
                    { title: "Hire Django Developer", href: "/hire-team/web-developers/django-developer" },
                    { title: "Hire ASP.NET Developer", href: "/hire-team/web-developers/asp-net-developer" },
                    { title: "Hire Laravel Developer", href: "/hire-team/web-developers/laravel-developer" },
                    { title: "Hire .NET Core Developer", href: "/hire-team/web-developers/net-core-developer" },
                    { title: "Hire Drupal Developer", href: "/hire-team/web-developers/drupal-developer" }
                ]
            },
            {
                id: "hire-mobile-app-developers",
                label: "Hire Mobile App Developers",
                href: "/hire-team/mobile-app-developers",
                roles: [
                    { title: "iOS Developer", href: "/hire-team/mobile-app-developers/ios-developer" },
                    { title: "Android Developer", href: "/hire-team/mobile-app-developers/android-developer" },
                    { title: "Flutter Developer", href: "/hire-team/mobile-app-developers/flutter-developer" },
                    { title: "Ionic Developer", href: "/hire-team/mobile-app-developers/ionic-developer" },
                    { title: "Swift Developer", href: "/hire-team/mobile-app-developers/swift-developer" },
                    { title: "Kotlin Developer", href: "/hire-team/mobile-app-developers/kotlin-developer" },
                    { title: "React Native Developer", href: "/hire-team/mobile-app-developers/react-native-developer" },
                    { title: "Cross Platform Developer", href: "/hire-team/mobile-app-developers/cross-platform-developer" },
                    { title: "Unity 3D Developer", href: "/hire-team/mobile-app-developers/unity-3d-developer" }
                ]
            },
            {
                id: "hire-javascript-developers",
                label: "Hire JavaScript Developers",
                href: "/hire-team/javascript-developers",
                roles: [
                    { title: "Hire React Developer", href: "/hire-team/javascript-developers/react-developer" },
                    { title: "Hire Angular Developer", href: "/hire-team/javascript-developers/angular-developer" },
                    { title: "Hire Node.js Developer", href: "/hire-team/javascript-developers/node-js-developer" },
                    { title: "Hire Next.js Developer", href: "/hire-team/javascript-developers/next-js-developer" }
                ]
            },
            {
                id: "hire-devops-developers",
                label: "Hire DevOps Developers",
                href: "/hire-team/devops-developers",
                roles: [
                    { title: "Azure DevOps Developer", href: "/hire-team/devops-developers/azure-devops-developer" },
                    { title: "AWS Developer", href: "/hire-team/devops-developers/aws-developer" },
                    { title: "DevSecOps Developer", href: "/hire-team/devops-developers/devsecops-developer" }
                ]
            },
            {
                id: "hire-designers",
                label: "Hire Designers",
                href: "/hire-team/designers",
                roles: [
                    { title: "Graphic Designer", href: "/hire-team/designers/graphic-designer" },
                    { title: "UI/UX Designer", href: "/hire-team/designers/ui-ux-designer" },
                    { title: "Game Designer", href: "/hire-team/designers/game-designer" }
                ]
            },
            {
                id: "hire-salesforce-integration-developers",
                label: "Hire Salesforce Integration Developers",
                href: "/hire-team/salesforce-integration-developers",
                roles: [
                    { title: "Hire Salesforce Developer", href: "/hire-team/salesforce-integration-developers/salesforce-developer" },
                    { title: "Hire Salesforce Consultant", href: "/hire-team/salesforce-integration-developers/salesforce-consultant" },
                    { title: "Hire Salesforce Integration Developer", href: "/hire-team/salesforce-integration-developers/salesforce-integration-developer" },
                    { title: "Hire Salesforce Admin", href: "/hire-team/salesforce-integration-developers/salesforce-admin" }
                ]
            }
        ]
    },
    careers: {
        title: "Careers",
        type: "careers",
        items: [
            {
                id: "careers",
                label: "Careers",
                leftDescription: "Build your future with The Digital Connect.",
                icon: "Briefcase",
                href: "/careers"
            },
            {
                id: "open-positions",
                label: "Open Positions",
                leftDescription: "Explore roles where your skills can make an impact.",
                icon: "Search",
                href: "/careers/open-positions"
            },
            {
                id: "life-at-tdc",
                label: "Life at The Digital Connect",
                leftDescription: "Discover how our team works, learns and grows.",
                icon: "HeartPulse",
                href: "/careers/life"
            },
            {
                id: "culture-values",
                label: "Culture & Values",
                leftDescription: "See what shapes our workplace and collaboration.",
                icon: "Star",
                href: "/careers/culture"
            },
            {
                id: "internship",
                label: "Internship Opportunities",
                leftDescription: "Start your career with real-world digital experience.",
                icon: "GraduationCap",
                href: "/careers/internships"
            }
        ],
        panel: {
            heading: "Build meaningful digital products with us.",
            description: "Join a team of driven engineers, thinkers, and makers who are pushing the boundaries of digital innovation.",
            benefits: ["Remote work possibilities", "Continuous learning budget", "Health and wellness", "Stock options"],
            cta: "View Open Positions \u2192",
            href: "/careers#open-positions"
        }
    }
};
