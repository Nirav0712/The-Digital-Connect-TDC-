import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, 'src', 'pages', 'hire');

// Ensure directory exists
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
}

const hireData = [
    {
        id: 'web-developers',
        name: 'Hire Web Developers',
        slug: 'web-developers',
        desc: 'Build scalable, high-performance websites and web applications with experienced developers who understand modern architecture, user experience and business goals.',
        visual: 'architecture',
        sub: [
            { name: 'PHP Developer', slug: 'php-developer', tech: 'PHP' },
            { name: 'Python Developer', slug: 'python-developer', tech: 'Python' },
            { name: 'WordPress Developer', slug: 'wordpress-developer', tech: 'WordPress' },
            { name: 'Magento Developer', slug: 'magento-developer', tech: 'Magento' },
            { name: 'Shopify Developer', slug: 'shopify-developer', tech: 'Shopify' },
            { name: 'Golang Developer', slug: 'golang-developer', tech: 'Golang' },
            { name: 'Ruby on Rails Developer', slug: 'ruby-on-rails-developer', tech: 'Ruby on Rails' },
            { name: 'Java Developer', slug: 'java-developer', tech: 'Java' },
            { name: 'MEAN Stack Developer', slug: 'mean-stack-developer', tech: 'MEAN Stack' },
            { name: 'MERN Developer', slug: 'mern-developer', tech: 'MERN' },
            { name: 'Full Stack Developer', slug: 'full-stack-developer', tech: 'Full Stack' },
            { name: 'Django Developer', slug: 'django-developer', tech: 'Django' },
            { name: 'ASP.NET Developer', slug: 'asp-net-developer', tech: 'ASP.NET' },
            { name: 'Laravel Developer', slug: 'laravel-developer', tech: 'Laravel' },
            { name: '.NET Core Developer', slug: 'net-core-developer', tech: '.NET Core' },
            { name: 'Drupal Developer', slug: 'drupal-developer', tech: 'Drupal' }
        ]
    },
    {
        id: 'mobile-app-developers',
        name: 'Hire Mobile App Developers',
        slug: 'mobile-app-developers',
        desc: 'Hire skilled mobile application developers to build scalable native and cross-platform mobile applications for iOS and Android platforms.',
        visual: 'mobile',
        sub: [
            { name: 'iOS Developer', slug: 'ios-developer', tech: 'iOS' },
            { name: 'Android Developer', slug: 'android-developer', tech: 'Android' },
            { name: 'Flutter Developer', slug: 'flutter-developer', tech: 'Flutter' },
            { name: 'Ionic Developer', slug: 'ionic-developer', tech: 'Ionic' },
            { name: 'Swift Developer', slug: 'swift-developer', tech: 'Swift' },
            { name: 'Kotlin Developer', slug: 'kotlin-developer', tech: 'Kotlin' },
            { name: 'React Native Developer', slug: 'react-native-developer', tech: 'React Native' },
            { name: 'Unity 3D Developer', slug: 'unity-3d-developer', tech: 'Unity 3D' },
            { name: 'Cross Platform Developer', slug: 'cross-platform-developer', tech: 'Cross Platform' }
        ]
    },
    {
        id: 'javascript-developers',
        name: 'Hire JavaScript Developers',
        slug: 'javascript-developers',
        desc: 'Leverage the power of modern JavaScript frameworks. Hire expert JavaScript developers to create lightning-fast single-page applications and robust backend services.',
        visual: 'javascript',
        sub: [
            { name: 'React Developer', slug: 'react-developer', tech: 'React' },
            { name: 'Angular Developer', slug: 'angular-developer', tech: 'Angular' },
            { name: 'Vue.js Developer', slug: 'vue-js-developer', tech: 'Vue.js' },
            { name: 'Node.js Developer', slug: 'node-js-developer', tech: 'Node.js' },
            { name: 'Next.js Developer', slug: 'next-js-developer', tech: 'Next.js' },
            { name: 'Express.js Developer', slug: 'express-js-developer', tech: 'Express.js' },
            { name: 'TypeScript Developer', slug: 'typescript-developer', tech: 'TypeScript' },
            { name: 'Full Stack JavaScript Developer', slug: 'full-stack-javascript-developer', tech: 'Full Stack JavaScript' }
        ]
    },
    {
        id: 'devops-developers',
        name: 'Hire DevOps Developers',
        slug: 'devops-developers',
        desc: 'Accelerate your delivery pipeline. Hire certified DevOps developers focusing on cloud infrastructure, CI/CD, automation, scalability and secure deployment.',
        visual: 'devops',
        sub: [
            { name: 'AWS Developer', slug: 'aws-developer', tech: 'AWS' },
            { name: 'Azure DevOps Developer', slug: 'azure-devops-developer', tech: 'Azure DevOps' },
            { name: 'DevSecOps Developer', slug: 'devsecops-developer', tech: 'DevSecOps' },
            { name: 'Docker Developer', slug: 'docker-developer', tech: 'Docker' },
            { name: 'Kubernetes Developer', slug: 'kubernetes-developer', tech: 'Kubernetes' },
            { name: 'CI/CD Developer', slug: 'cicd-developer', tech: 'CI/CD' },
            { name: 'Cloud Engineer', slug: 'cloud-engineer', tech: 'Cloud' },
            { name: 'Infrastructure Automation Developer', slug: 'infrastructure-automation-developer', tech: 'Infrastructure Automation' }
        ]
    },
    {
        id: 'designers',
        name: 'Hire Designers',
        slug: 'designers',
        desc: 'Elevate your digital products with world-class design. Hire UI/UX and product designers who merge aesthetics with intuitive user experiences.',
        visual: 'designers',
        sub: [
            { name: 'UI/UX Designer', slug: 'ui-ux-designer', tech: 'UI/UX' },
            { name: 'Graphic Designer', slug: 'graphic-designer', tech: 'Graphic Design' },
            { name: 'Product Designer', slug: 'product-designer', tech: 'Product Design' },
            { name: 'Web Designer', slug: 'web-designer', tech: 'Web Design' },
            { name: 'Mobile App Designer', slug: 'mobile-app-designer', tech: 'Mobile App Design' },
            { name: 'Brand Designer', slug: 'brand-designer', tech: 'Brand Design' },
            { name: 'Motion Designer', slug: 'motion-designer', tech: 'Motion Design' },
            { name: 'Game Designer', slug: 'game-designer', tech: 'Game Design' }
        ]
    },
    {
        id: 'salesforce-integration-developers',
        name: 'Hire Salesforce Integration Developers',
        slug: 'salesforce-integration-developers',
        desc: 'Maximize your CRM capabilities. Hire expert Salesforce consultants and integration developers to architect and connect your entire business ecosystem.',
        visual: 'salesforce',
        sub: [
            { name: 'Salesforce Developer', slug: 'salesforce-developer', tech: 'Salesforce Core' },
            { name: 'Salesforce Consultant', slug: 'salesforce-consultant', tech: 'Salesforce Strategy' },
            { name: 'Salesforce Integration Developer', slug: 'salesforce-integration-developer', tech: 'Salesforce Integrations' },
            { name: 'Salesforce Admin', slug: 'salesforce-admin', tech: 'Salesforce Admin' },
            { name: 'Salesforce Commerce Cloud Developer', slug: 'salesforce-commerce-cloud-developer', tech: 'Commerce Cloud' },
            { name: 'Salesforce Marketing Cloud Developer', slug: 'salesforce-marketing-cloud-developer', tech: 'Marketing Cloud' },
            { name: 'Salesforce CRM Developer', slug: 'salesforce-crm-developer', tech: 'Salesforce CRM' },
            { name: 'Salesforce API Integration Developer', slug: 'salesforce-api-integration-developer', tech: 'Salesforce APIs' }
        ]
    }
];

function toPascal(str) {
    return str.split(/[-\s]/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('').replace(/[^a-zA-Z0-9]/g, '');
}

function getVisual(type) {
    if (type === 'architecture') {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#061B2E] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,191,232,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <motion.div animate={{scale:[1,1.05,1]}} transition={{duration:4, repeat:Infinity}} className="w-3/4 h-3/4 border-[10px] border-white/5 rounded-2xl flex items-center justify-center relative">
               <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#08BFE8] rounded-md"></div>
               <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#08BFE8] rounded-md"></div>
               <div className="flex gap-4">
                  <div className="w-4 h-24 bg-white/10 rounded-full"></div>
                  <div className="w-4 h-32 bg-[#08BFE8]/80 rounded-full"></div>
                  <div className="w-4 h-16 bg-white/10 rounded-full"></div>
               </div>
            </motion.div>
        </div>`;
    } else if (type === 'mobile') {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#061B2E] to-[#08243A] rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl border border-[#08BFE8]/20">
            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-48 h-[80%] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-800 p-2 relative z-10 flex flex-col items-center">
                 <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mt-2 mb-4"></div>
                 <div className="w-full grid grid-cols-2 gap-2 px-2">
                     <div className="h-16 bg-[#08BFE8]/20 rounded-xl"></div>
                     <div className="h-16 bg-gray-100 rounded-xl"></div>
                     <div className="h-16 bg-gray-100 rounded-xl"></div>
                     <div className="h-16 bg-[#08BFE8]/20 rounded-xl"></div>
                 </div>
            </motion.div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, ease: "linear", repeat: Infinity }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(8,191,232,0.3)_360deg)] z-0 rounded-full blur-2xl"></motion.div>
        </div>`;
    } else if (type === 'javascript') {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#03111F] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
            <div className="absolute text-[#D9A72E]/10 right-4 bottom-4 font-mono text-8xl font-black">JS</div>
            <svg className="w-full h-full absolute inset-0 z-0 opacity-30">
               <motion.path d="M50 100 Q 150 10 250 120 T 450 80" fill="none" stroke="#D9A72E" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}/>
            </svg>
            <div className="flex flex-wrap gap-4 justify-center z-10 w-[80%]">
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:0}} className="px-4 py-2 bg-white/5 border border-[#D9A72E]/30 rounded-lg text-white font-mono text-sm shadow-[0_0_15px_rgba(217,167,46,0.2)]">async</motion.div>
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:1}} className="px-4 py-2 bg-[#D9A72E] text-black font-bold border border-[#D9A72E]/30 rounded-lg font-mono text-sm">await</motion.div>
               <motion.div animate={{y:[0,-10,0]}} transition={{duration:3, repeat:Infinity, delay:2}} className="px-4 py-2 bg-white/5 border border-[#D9A72E]/30 rounded-lg text-white font-mono text-sm shadow-[0_0_15px_rgba(217,167,46,0.2)]">Promise</motion.div>
            </div>
        </div>`;
    } else if (type === 'devops') {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#061B2E] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/30 shadow-2xl">
             <div className="grid grid-cols-3 gap-6 w-full max-w-[300px]">
                  <div className="flex items-center justify-center col-span-3">
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} className="w-16 h-16 border-4 border-dashed border-[#18C5E8] rounded-full flex items-center justify-center"><div className="w-6 h-6 bg-[#18C5E8] rounded-full shadow-[0_0_15px_#18C5E8]"></div></motion.div>
                  </div>
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xs text-white/50">CI</motion.div>
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="h-12 bg-[#08BFE8]/20 border border-[#08BFE8]/50 rounded-lg flex items-center justify-center text-xs text-[#08BFE8] font-bold">AWS</motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} className="h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xs text-white/50">CD</motion.div>
             </div>
        </div>`;
    } else if (type === 'designers') {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#18C5E8]/10 to-transparent rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#18C5E8]/20 shadow-xl">
             <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#18C5E8]/30 rounded-full blur-3xl"></div>
             
             <motion.div whileHover={{ scale: 1.05 }} className="w-48 h-32 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-4 flex flex-col relative z-10 rotate-[-5deg]">
                 <div className="w-full h-8 bg-gray-100 rounded-lg mb-2"></div>
                 <div className="w-2/3 h-4 bg-gray-100 rounded-md"></div>
             </motion.div>
             
             <motion.div whileHover={{ scale: 1.05 }} className="w-40 h-40 bg-[#061B2E] rounded-[2rem] shadow-2xl border border-gray-700 p-4 flex items-center justify-center absolute z-20 right-[15%] rotate-[10deg]">
                 <div className="w-16 h-16 border-[6px] border-[#18C5E8] rounded-full"></div>
             </motion.div>
        </div>`;
    } else {
        return `
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#061B2E] rounded-3xl relative overflow-hidden flex items-center justify-center border border-[#08BFE8]/20 shadow-2xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,191,232,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
             <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-32 bg-[#08BFE8]/20 border border-[#08BFE8] backdrop-blur-md rounded-2xl flex items-center justify-center">
                 <div className="w-16 h-1 bg-[#08BFE8] rounded-full shadow-[0_0_10px_#08BFE8] rotate-45 absolute"></div>
                 <div className="w-16 h-1 bg-[#08BFE8] rounded-full shadow-[0_0_10px_#08BFE8] -rotate-45 absolute"></div>
             </motion.div>
        </div>`;
    }
}

function generateMainCategoryPage(cat) {
    const componentName = toPascal(cat.name);
    const content = `
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Users, Target, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const ${componentName} = () => {
    return (
        <PageTransition>
            <SEO title="\${cat.name} | The Digital Connect" description="\${cat.desc}" />
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">${cat.name}</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-6 z-10 w-full min-w-0">
                        <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-[#08BFE8] font-bold tracking-[0.2em] text-xs uppercase block">
                            HIRE EXPERTS
                        </motion.span>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[clamp(36px,5vw,56px)] font-heading font-black text-[#061B2E] leading-tight">
                            ${cat.name}
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-[#7F94A8] text-lg leading-relaxed max-w-xl">
                            ${cat.desc}
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="pt-4 flex flex-wrap gap-4">
                            <Link to="/contact" className="inline-flex bg-[#08BFE8] text-white px-8 py-4 rounded-xl font-bold items-center hover:bg-[#159ED9] transition-all shadow-lg shadow-[#08BFE8]/20">
                                Hire Developers <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/contact" className="inline-flex bg-white text-[#061B2E] border border-gray-200 px-8 py-4 rounded-xl font-bold items-center hover:bg-gray-50 transition-colors">
                                Discuss Your Project
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative w-full">
                        ${getVisual(cat.visual)}
                    </div>
                </section>

                {/* EXPERTISE GRID */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-[1320px] mx-auto px-5">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-4">Our ${cat.name.replace('Hire ', '')} Expertise</h2>
                            <p className="text-[#7F94A8] text-lg">Select a specialization below to learn more about our dedicated resources.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            ${cat.sub.map(s => `
                            <Link to="/hire-team/${cat.slug}/${s.slug}" className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl hover:border-[#08BFE8] hover:shadow-lg hover:shadow-[#08BFE8]/10 transition-all group flex flex-col min-w-0">
                                <h3 className="font-bold text-[#061B2E] text-lg mb-2 group-hover:text-[#08BFE8] transition-colors">${s.name}</h3>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[#08BFE8]">
                                    Learn More <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>`).join('\n')}
                        </div>
                    </div>
                </section>

                {/* WHY HIRE WITH US */}
                <section className="py-16 lg:py-24 max-w-[1320px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-6">Why partner with our team?</h2>
                            <p className="text-[#7F94A8] text-lg mb-8 leading-relaxed">
                                We go beyond simple staff augmentation. Our developers integrate seamlessly into your workflows, bringing architectural prowess, clean code practices, and a commitment to scalable project delivery.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Users size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Top-Tier Talent</h4><p className="text-[#7F94A8]">Rigorous vetting ensures only the top 3% of technical experts join your project.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Shield size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Quality & Security</h4><p className="text-[#7F94A8]">Strict adherence to clean code architectures and global enterprise security standards.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#08BFE8]/10 text-[#08BFE8] flex items-center justify-center shrink-0"><Clock size={24} /></div>
                                    <div><h4 className="font-bold text-[#061B2E] text-lg">Time-Zone Aligned</h4><p className="text-[#7F94A8]">Flexible working hours ensuring robust communication pipelines and minimal latency.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#061B2E] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#08BFE8]/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <h3 className="text-2xl font-black mb-8 relative z-10">Engagement Models</h3>
                            <div className="space-y-4 relative z-10">
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Dedicated Developers</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Full-Time Extended Team</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Project-Based Delivery</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between"><span className="font-bold">Hourly Support & Maintenance</span> <CheckCircle2 className="text-[#08BFE8]" size={20} /></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#061B2E] to-[#08243A] py-16 lg:py-24 px-5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#08BFE8_1px,transparent_1px)] opacity-[0.05] bg-[size:24px_24px]"></div>
                    <div className="max-w-2xl mx-auto relative z-10 text-white">
                        <h2 className="text-[clamp(28px,4vw,48px)] font-heading font-black mb-6 leading-tight">Need the right talent for your next project?</h2>
                        <p className="text-[#B9CAD7] text-lg mb-8">Scale your operations instantly with pre-vetted engineers.</p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                            Let's Build Your Team <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default ${componentName};
`;
    return content;
}

function generateSubCategoryPage(cat, sub) {
    const componentName = toPascal(sub.name);
    // Generic layout for sub item
    const content = `
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Layout, Database, Code2, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../../components/seo/SEO';
import PageTransition from '../../../components/common/PageTransition';

const ${componentName} = () => {
    return (
        <PageTransition>
            <SEO title="\${sub.name} | The Digital Connect" description="Hire experienced \${sub.tech} developers to build scalable, secure and high-performance applications." />
            <div className="w-full bg-[#FAFAFA] min-h-screen font-sans">
                {/* BREADCRUMBS */}
                <div className="pt-[90px] md:pt-[100px] px-5 max-w-[1320px] mx-auto text-sm font-medium text-[#7F94A8] flex flex-wrap items-center gap-2">
                    <Link to="/" className="hover:text-[#08BFE8] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/hire-team" className="hover:text-[#08BFE8] transition-colors">Hire Team</Link>
                    <ChevronRight size={14} />
                    <Link to="/hire-team/${cat.slug}" className="hover:text-[#08BFE8] transition-colors">${cat.name.replace('Hire ', '')}</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#061B2E] font-bold min-w-0 truncate">${sub.name}</span>
                </div>

                {/* HERO */}
                <section className="py-10 md:py-16 px-5 max-w-[1320px] mx-auto text-center">
                    <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#08BFE8]/10 text-[#08BFE8] text-sm font-bold tracking-wide uppercase mb-6 border border-[#08BFE8]/20">
                        EXPERT TALENT
                    </motion.div>
                    <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-[clamp(36px,6vw,64px)] font-heading font-black text-[#061B2E] leading-tight mb-6 max-w-4xl mx-auto">
                        Hire ${sub.name}s
                    </motion.h1>
                    <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-[#7F94A8] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        Accelerate your product roadmap by hiring highly vetted, dedicated ${sub.tech} engineers. We provide fully managed talent capable of architecting complex solutions and scaling enterprise applications.
                    </motion.p>
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}}>
                        <Link to="/contact" className="inline-flex bg-[#061B2E] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold items-center hover:bg-[#08BFE8] transition-all shadow-xl hover:shadow-[#08BFE8]/30">
                            Hire a ${sub.tech} Expert <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </motion.div>
                </section>

                {/* WHAT WE CAN BUILD */}
                <section className="py-16 bg-[#061B2E] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-[1320px] mx-auto px-5 relative z-10">
                        <div className="mb-12">
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black mb-4">What Our ${sub.tech} Developers Build</h2>
                            <p className="text-[#A3B8CC] text-lg max-w-2xl">From powerful monoliths to scalable microservices, our experts deliver production-ready software.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Layout size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Custom Applications</h3>
                                <p className="text-[#A3B8CC] text-sm">Tailor-made software architecture built exactly to your specific operational specifications.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Database size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Enterprise Solutions</h3>
                                <p className="text-[#A3B8CC] text-sm">Highly secure, scalable pipelines capable of handling massive organizational throughput.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Server size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">API Development</h3>
                                <p className="text-[#A3B8CC] text-sm">Robust RESTful and GraphQL endpoints seamlessly connecting your digital infrastructure.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#08BFE8]/50 transition-colors">
                                <Code2 size={32} className="text-[#08BFE8] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Legacy Migration</h3>
                                <p className="text-[#A3B8CC] text-sm">Securely upgrading outdated technological stacks into modern, performant ${sub.tech} ecosystems.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY HIRE */}
                <section className="py-16 md:py-24 max-w-[1320px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Pre-Vetted Talent</h4>
                                <p className="text-sm text-[#7F94A8]">We put our engineers through intensive technical assessments.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 lg:-mt-8 lg:mb-8">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Fast Onboarding</h4>
                                <p className="text-sm text-[#7F94A8]">Scale your team in days, not months. Skip the standard recruitment delays.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Zero Overhead</h4>
                                <p className="text-sm text-[#7F94A8]">No internal HR management, office costs, or compliance friction.</p>
                            </div>
                            <div className="bg-[#EAF8FC] p-6 rounded-2xl border border-[#08BFE8]/20 flex flex-col gap-3 lg:-mt-8 lg:mb-8">
                                <CheckCircle2 className="text-[#08BFE8]" size={24} />
                                <h4 className="font-bold text-[#061B2E]">Agile Execution</h4>
                                <p className="text-sm text-[#061B2E]/80">Seamless integration directly into your internal Jira/Sprint cycles.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black text-[#061B2E] mb-6">Development Process</h2>
                            <p className="text-[#7F94A8] text-lg mb-8">Our rigorous operational standard ensures you receive beautiful, production-ready code on time.</p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">01</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Discover & Resource Allocation</h4><p className="text-sm text-[#7F94A8]">We map your technical requirements to the perfect ${sub.tech} engineers.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">02</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Integration & Sprint Planning</h4><p className="text-sm text-[#7F94A8]">Seamless onboarding into your existing CI/CD and communication channels.</p></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-black text-2xl text-[#08BFE8]/30">03</div>
                                    <div><h4 className="font-bold text-[#061B2E]">Development & QA</h4><p className="text-sm text-[#7F94A8]">Iterative delivery backed by strict code reviews and automated testing.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-[#FAFAFA] py-16 px-5 text-center">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100">
                        <h2 className="text-[clamp(28px,4vw,40px)] font-heading font-black mb-6 text-[#061B2E]">Looking for skilled ${sub.tech} developers?</h2>
                        <p className="text-[#7F94A8] text-lg mb-8 max-w-2xl mx-auto">Connect with us today to discuss your technical constraints and discover how our dedicated talent can drive your product forward.</p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-[#08BFE8] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#159ED9] transition-colors shadow-lg shadow-[#08BFE8]/30">
                            Hire ${sub.name}s <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};
export default ${componentName};
`;
    return content;
}

const routesFileParts = [];
routesFileParts.push(`import React from 'react';\nimport { Routes, Route } from 'react-router-dom';`);

hireData.forEach(cat => {
    // Generate Main Category
    const catDir = path.join(baseDir, cat.slug);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

    const catComp = toPascal(cat.name);
    fs.writeFileSync(path.join(catDir, `${catComp}.jsx`), generateMainCategoryPage(cat));
    console.log(`Generated ${catComp}.jsx`);

    routesFileParts.push(`import ${catComp} from '../pages/hire/${cat.slug}/${catComp}';`);

    // Generate sub categories
    cat.sub.forEach(sub => {
        const subComp = toPascal(sub.name);
        fs.writeFileSync(path.join(catDir, `${subComp}.jsx`), generateSubCategoryPage(cat, sub));
        console.log(`Generated ${subComp}.jsx`);
        routesFileParts.push(`import ${subComp} from '../pages/hire/${cat.slug}/${subComp}';`);
    });
});

let routeElements = hireData.map(cat => {
    let routes = `      <Route path="/hire-team/${cat.slug}" element={<${toPascal(cat.name)} />} />\n`;
    cat.sub.forEach(sub => {
        routes += `      <Route path="/hire-team/${cat.slug}/${sub.slug}" element={<${toPascal(sub.name)} />} />\n`;
    });
    return routes;
}).join('');

const routesContent = `
${routesFileParts.join('\n')}

const HireRoutes = () => {
  return (
    <>
${routeElements}
    </>
  );
};
export default HireRoutes;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'routes', 'HireRoutes.jsx'), routesContent);
console.log('Generated src/routes/HireRoutes.jsx');
