import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { Code2, Cog, LayoutDashboard, Terminal, Briefcase, FileSpreadsheet, UserCheck, HardDrive, Cpu, LineChart } from 'lucide-react';

const SoftwareHeroVisual = () => (
  <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center z-20">

    {/* Main SaaS Dashboard Container */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[10%] w-[95%] h-[80%] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col overflow-hidden z-10"
    >
      {/* Header */}
      <div className="h-12 border-b border-black/5 bg-[#FAF9F7] flex items-center px-6 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand-lavender rounded-sm"></div>
          <div className="w-20 h-4 bg-black/10 rounded-full"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand-yellow/30 rounded-full"></div>
          <div className="w-6 h-6 bg-brand-blue/30 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[20%] border-r border-black/5 hidden md:flex flex-col gap-4 p-4">
          <div className="w-full h-3 bg-brand-lavender/30 rounded"></div>
          <div className="w-3/4 h-3 bg-black/5 rounded"></div>
          <div className="w-4/5 h-3 bg-black/5 rounded"></div>
          <div className="w-2/3 h-3 bg-black/5 rounded"></div>
          <div className="w-full h-3 bg-black/5 rounded mt-auto"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 flex flex-col gap-6 bg-[#FAF9F7]/50 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="w-32 h-6 bg-black/10 rounded-lg"></div>
            <div className="w-24 h-6 bg-brand-blue/20 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="h-20 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-center">
              <div className="text-[9px] font-bold text-black/40 mb-2">REVENUE</div>
              <div className="w-3/4 h-3 bg-brand-lavender/60 rounded flex-1"></div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="h-20 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-center">
              <div className="text-[9px] font-bold text-black/40 mb-2">USERS</div>
              <div className="w-1/2 h-3 bg-brand-yellow/60 rounded flex-1"></div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="h-20 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col justify-center">
              <div className="text-[9px] font-bold text-black/40 mb-2">TASKS</div>
              <div className="w-full h-3 bg-brand-blue/60 rounded flex-1"></div>
            </motion.div>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col gap-4">
            <div className="w-full h-4 bg-black/5 rounded-full mb-2"></div>

            {/* Animated List */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.2), repeat: Infinity, repeatDelay: 5 }}
                className="flex items-center gap-4 border-b border-black/5 pb-2"
              >
                <div className="w-6 h-6 rounded bg-brand-lavender/20 shrink-0"></div>
                <div className="w-1/3 h-2 bg-black/10 rounded-full"></div>
                <div className="w-1/4 h-2 bg-brand-blue/30 rounded-full ml-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating Code Snippet */}
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[2%] -right-[5%] w-[220px] bg-[#171717] text-white p-5 rounded-2xl shadow-2xl overflow-hidden z-20 border border-white/10"
    >
      <div className="text-[10px] font-mono text-brand-yellow/80 mb-2">import {'{ automation }'} from './core';</div>
      <div className="text-[10px] font-mono text-brand-blue/80 mb-2">const sys = new BusinessLogic();</div>
      <div className="text-[10px] font-mono text-white mb-2 ml-4">await sys.optimizeWorkflow();</div>
      <div className="text-[10px] font-mono text-brand-mint/80 mt-4">&gt; Process deployed successfully</div>
    </motion.div>

  </div>
);

const SoftwareUniqueVisual = () => (
  <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-16 px-4">
    <h3 className="text-2xl font-bold font-heading mb-16 text-center text-[#171717]">The Operational Workflow</h3>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">

      {/* Animated Data Stream */}
      <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-black/5 -translate-y-1/2 -z-10 rounded-full overflow-hidden">
        <motion.div
          className="h-full w-1/4 bg-brand-lavender/50 rounded-full"
          animate={{ left: ['-25%', '125%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'relative' }}
        />
      </div>

      {[
        { title: "User Input", icon: <UserCheck />, color: "text-blue-500", delay: 0 },
        { title: "Application", icon: <LayoutDashboard />, color: "text-brand-lavender", delay: 0.2 },
        { title: "Automation", icon: <Cpu />, color: "text-yellow-500", delay: 0.4 },
        { title: "Data Storage", icon: <HardDrive />, color: "text-brand-blue", delay: 0.6 },
        { title: "Output/Reports", icon: <LineChart />, color: "text-green-500", delay: 0.8 }
      ].map((step, i) => (
        <div key={i} className="flex flex-col flex-1 items-center gap-4 relative group">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ delay: step.delay, duration: 0.4 }}
            className="w-20 h-20 rounded-2xl bg-white border border-black/10 shadow-xl flex items-center justify-center relative z-10"
          >
            {React.cloneElement(step.icon, { className: `w-8 h-8 mx-auto ${step.color}` })}
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay + 0.2, duration: 0.5 }}
            className="font-bold text-sm text-[#171717] px-2 text-center"
          >
            {step.title}
          </motion.span>
        </div>
      ))}
    </div>
  </div>
);

const SoftwareDevelopment = () => {
  useSEO({
    title: "Custom Software Development Services | The Digital Connect",
    description: "We develop custom software that simplifies complex workflows, automates repetitive processes and gives teams better control over their operations."
  });

  return (
    <MainServiceLayout
      breadcrumb="Software Development"
      title="Software Built Around Your Business."
      subtitle="Custom Systems Engineering"
      description="We develop custom software that simplifies complex workflows, automates repetitive processes and gives teams better control over their operations."
      themeConfig={{
        bg: 'bg-brand-lavender/10',
        accentText: 'text-purple-700',
        glowColor: 'bg-brand-lavender'
      }}
      HeroVisual={SoftwareHeroVisual}
      overview={{
        title: "Stop conforming to your software.",
        content: "Off-the-shelf software rarely fits a unique business perfectly. You end up bending your operational processes to fit the tool. We reverse that paradigm. We architect custom SaaS platforms, CRMs, ERPs, and internal dashboards meticulously engineered to map exactly to your operations, streamlining massive logistics workflows and providing deep proprietary analytics."
      }}
      capabilities={[
        { icon: <LayoutDashboard />, title: "Custom Software", desc: "Bespoke platforms designed from absolute scratch locking into your specific needs." },
        { icon: <Code2 />, title: "SaaS Platforms", desc: "Subscription-ready architectures built for massive multi-tenant scalability." },
        { icon: <Briefcase />, title: "CRM Systems", desc: "Sales and relationship trackers tailored to your unique sales funnel." },
        { icon: <FileSpreadsheet />, title: "ERP Software", desc: "Total enterprise resource planning mapping operations holistically." },
        { icon: <Cog />, title: "Business Automation", desc: "Crushing repetitive manual tasks via intelligent background jobs and APIs." },
        { icon: <Terminal />, title: "Internal Tools", desc: "Private dashboard components heavily boosting team output metrics." }
      ]}
      technologies={['React', 'Node.js', 'Python', 'PHP', 'Laravel', '.NET', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker']}
      UniqueVisual={SoftwareUniqueVisual}
      processSteps={[
        { title: "Business Analysis", desc: "Deeply auditing your existing manual processes and operational bottlenecks." },
        { title: "Architecture", desc: "Drafting robust server infrastructure, database models, and API logic." },
        { title: "UX/UI Design", desc: "Structuring massive data into clean, frictionless dashboard interfaces." },
        { title: "Development", desc: "Sprinting through frontend SPA construction and deep backend systems logic." },
        { title: "Testing", desc: "Rigorous continuous integration evaluating edge cases and security holes." },
        { title: "Deployment", desc: "Seamless onboarding and hosting migration into strict cloud environments." },
        { title: "Maintenance", desc: "Constant scaling, data backups, and feature iterative releases." }
      ]}
      benefits={[
        { title: "Custom Workflows", desc: "Code entirely reflecting how your specific staff functions naturally." },
        { title: "Scalable Architecture", desc: "Systems that perform flawlessly whether you have 10 employees or 10,000." },
        { title: "Hyper Automation", desc: "Saving hundreds of labor-hours by delegating tasks to scheduled scripts." },
        { title: "Data Visibility", desc: "Live unified reporting granting absolute executive oversight instantly." },
        { title: "Strict Security", desc: "Role-based access hierarchies locking down exact data visibility." },
        { title: "Tight Integration", desc: "Syncing natively with your current tools (Stripe, Slack, AWS)." },
      ]}
      faqs={[
        { q: "Is custom software worth the high initial investment?", a: "Off-the-shelf software incurs infinite scaling subscription costs and immense labor waste from inefficiencies. Custom software is an asset you own 100%, providing immediate ROI via massive operational efficiency and eliminating per-seat SaaS bloat." },
        { q: "How do you ensure data security?", a: "We utilize robust authentication (OAuth/JWT), enterprise-grade encryption for Data-in-Transit and Data-at-Rest, alongside rigorous penetration testing before launch." },
        { q: "Can we integrate this with our current accounting tools?", a: "Yes. Practically all Custom Software we develop integrates natively with tools like QuickBooks, Xero, Stripe, or any platform supporting a REST/GraphQL API." },
        { q: "Who owns the software once it's built?", a: "You do. We provide unparalleled transparency and transfer 100% of the Intellectual Property and raw Source Code to your organization." }
      ]}
    />
  );
};

export default SoftwareDevelopment;
