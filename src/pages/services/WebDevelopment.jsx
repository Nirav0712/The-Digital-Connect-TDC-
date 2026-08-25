import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { Cloud, Database, Monitor, Search, Lock, Zap, MousePointer2, Code } from 'lucide-react';

const WebHeroVisual = () => (
  <div className="relative w-full max-w-[500px] h-[500px] z-20">
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[10%] left-[5%] w-[80%] h-[70%] bg-white rounded-2xl shadow-2xl border border-black/5 flex flex-col overflow-hidden"
    >
      <div className="h-10 bg-[#FAF9F7] border-b border-black/5 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="ml-4 w-32 h-4 bg-black/5 rounded-full"></div>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="h-6 w-3/4 bg-brand-lavender/30 rounded-lg"></div>
        <div className="h-4 w-1/2 bg-black/5 rounded-lg mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-brand-blue/10 rounded-xl"></div>
          <div className="h-24 bg-brand-peach/10 rounded-xl"></div>
        </div>
      </div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[20%] right-0 bg-white p-5 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 z-30"
    >
      <div className="w-12 h-12 rounded-full bg-brand-lavender/20 flex items-center justify-center">
        <Zap className="text-brand-lavender w-6 h-6" />
      </div>
      <div>
        <div className="text-xs font-bold text-black/50 mb-1">PERFORMANCE</div>
        <div className="text-xl font-heading font-extrabold text-[#171717]">99.9%</div>
      </div>
    </motion.div>
  </div>
);

const WebUniqueVisual = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-4xl mx-auto py-12">
    <motion.div whileHover={{ scale: 1.05 }} className="w-40 h-40 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center border border-black/5 z-10">
      <Monitor className="w-12 h-12 text-brand-lavender mb-3" />
      <span className="font-bold text-sm">Browser</span>
    </motion.div>

    <div className="flex flex-col gap-2 relative">
      <motion.div
        animate={{ x: [0, 50, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-1 bg-brand-blue/50 rounded-full"
      />
      <motion.div
        animate={{ x: [50, 0, 50], opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="w-16 h-1 bg-brand-peach/50 rounded-full"
      />
    </div>

    <motion.div whileHover={{ scale: 1.05 }} className="w-40 h-40 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center border border-black/5 z-10">
      <Cloud className="w-12 h-12 text-brand-blue mb-3" />
      <span className="font-bold text-sm">API Gateway</span>
    </motion.div>

    <div className="flex flex-col gap-2 relative">
      <motion.div
        animate={{ x: [0, 50, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        className="w-16 h-1 bg-brand-blue/50 rounded-full"
      />
    </div>

    <motion.div whileHover={{ scale: 1.05 }} className="w-40 h-40 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center border border-black/5 z-10">
      <Database className="w-12 h-12 text-[#171717] mb-3" />
      <span className="font-bold text-sm">Database</span>
    </motion.div>
  </div>
);

const WebDevelopment = () => {
  useSEO({
    title: "Web Development Services | The Digital Connect",
    description: "We design and develop fast, scalable and conversion-focused websites and web platforms that help businesses build credibility and grow digitally."
  });

  return (
    <MainServiceLayout
      breadcrumb="Web Development"
      title="Web Experiences Built to Perform."
      subtitle="Custom Web Engineering"
      description="We design and develop fast, scalable and conversion-focused websites and web platforms that help businesses build credibility, attract customers and grow digitally."
      themeConfig={{
        bg: 'bg-brand-lavender/10',
        accentText: 'text-purple-600',
        glowColor: 'bg-brand-lavender'
      }}
      HeroVisual={WebHeroVisual}
      overview={{
        title: "Strategy meets engineering.",
        content: "Your website is the center of your digital ecosystem. It requires more than just good design; it demands robust architecture, seamless performance, and search engine visibility. We combine user-centric strategy, stunning UX, and rigorous engineering to create modern web experiences that load instantly, secure your data, and turn casual visitors into loyal customers."
      }}
      capabilities={[
        { icon: <Monitor />, title: "Corporate Websites", desc: "Premium online presences engineered to establish industry authority.", href: "/services/web-development/frontend-development" },
        { icon: <Code />, title: "Custom Web Applications", desc: "Bespoke SaaS and web platforms solving complex business workflows.", href: "/services/web-development/custom-web-applications" },
        { icon: <Search />, title: "CMS Websites", desc: "Flexible content-managed platforms granting marketing teams full autonomy.", href: "/services/web-development/cms-development" },
        { icon: <Zap />, title: "Backend Architecture", desc: "Scalable server logic, databases, and microservices powering enterprise scale.", href: "/services/web-development/backend-development" },
        { icon: <Cloud />, title: "API Integration", desc: "Seamless system connectivity across CRMs, payment gateways, and data networks.", href: "/services/web-development/api-integration" },
        { icon: <MousePointer2 />, title: "Landing Pages", desc: "High-converting standalone digital experiences for marketing campaigns." }
      ]}
      technologies={['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'HTML5', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS']}
      UniqueVisual={WebUniqueVisual}
      processSteps={[
        { title: "Discovery", desc: "We analyze your business objectives, target audience, and market landscape." },
        { title: "Strategy", desc: "Defining the technical stack, sitemap, and architecture." },
        { title: "UX/UI Design", desc: "Creating wireframes and high-fidelity prototypes centered around user flows." },
        { title: "Development", desc: "Agile engineering of frontend interfaces and backend infrastructure." },
        { title: "Testing", desc: "Rigorous QA testing for security, responsiveness, and performance." },
        { title: "Launch", desc: "Zero-downtime deployment and handover." },
        { title: "Optimization", desc: "Ongoing support and performance marketing integration." }
      ]}
      benefits={[
        { title: "Fast Performance", desc: "Lightning-fast load times through optimized assets and edge caching." },
        { title: "Scalable Architecture", desc: "Codebases built to handle increasing traffic without bottlenecking." },
        { title: "Responsive Design", desc: "Flawless rendering across thousands of devices and screen sizes natively." },
        { title: "SEO-Friendly Structure", desc: "Pre-rendered semantic HTML and server-side logic maximizing visibility." },
        { title: "Secure Development", desc: "Adherence to top-tier security standards preventing vulnerabilities." },
        { title: "Easy Maintenance", desc: "Clean, documented code combined with headless CMS platforms." },
      ]}
      faqs={[
        { q: "How long does it take to develop a custom website?", a: "A custom corporate website generally takes 6 to 12 weeks from strategy to deployment, while complex web applications may take 3 to 6 months depending on features and API integrations." },
        { q: "Will I have control over the content?", a: "Yes. We integrate modern Headless CMS platforms (like Sanity, Strapi, or WordPress) enabling you to effortlessly update text, images, and pages without writing code." },
        { q: "Are your websites optimized for SEO?", a: "Absolutely. We employ server-side rendering (using frameworks like Next.js) and semantic HTML, ensuring your platform ranks competitively and handles metadata dynamically." },
        { q: "Do you provide hosting and maintenance?", a: "Yes, we handle the entire DevOps pipeline leveraging cloud platforms like AWS or Vercel, and offer monthly retaining contracts for security updates and continuous feature releases." },
        { q: "Can you integrate with my existing CRM?", a: "We specialize in complex API architectures and commonly integrate web products natively with Salesforce, HubSpot, Stripe, and specialized internal enterprise systems." }
      ]}
    />
  );
};

export default WebDevelopment;
