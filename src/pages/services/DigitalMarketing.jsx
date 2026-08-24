import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { LineChart, BarChart, Target, Users, Search, Share2, Mail, BadgeDollarSign, Workflow, PieChart } from 'lucide-react';

const MarketingHeroVisual = () => (
  <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center z-20">

    {/* Main Analytics Dashboard */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="w-[90%] h-[75%] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-brand-purple/20 flex flex-col overflow-hidden z-10"
    >
      <div className="h-12 bg-[#FAF9F7] flex items-center px-4 justify-between border-b border-black/5">
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center"><LineChart className="w-4 h-4 text-brand-purple" /></div>
          <div className="flex flex-col justify-center gap-1">
            <div className="h-2 w-16 bg-black/10 rounded-full"></div>
            <div className="h-2 w-10 bg-black/5 rounded-full"></div>
          </div>
        </div>
        <div className="w-24 h-6 bg-brand-mint/20 rounded-full"></div>
      </div>

      <div className="p-6 flex flex-col gap-6 flex-1 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-brand-purple/5 border border-brand-purple/10 rounded-xl p-4 flex flex-col h-20 justify-center">
            <div className="text-[10px] tracking-wider text-black/50 font-bold mb-1">TRAFFIC</div>
            <div className="flex items-end gap-2">
              <div className="w-20 h-5 bg-brand-purple/60 rounded"></div>
              <div className="w-8 h-3 bg-brand-mint/60 rounded-full"></div>
            </div>
          </div>
          <div className="bg-brand-pink/5 border border-brand-pink/10 rounded-xl p-4 flex flex-col h-20 justify-center">
            <div className="text-[10px] tracking-wider text-black/50 font-bold mb-1">LEADS</div>
            <div className="flex items-end gap-2">
              <div className="w-16 h-5 bg-brand-pink/60 rounded"></div>
              <div className="w-8 h-3 bg-brand-mint/60 rounded-full"></div>
            </div>
          </div>
          <div className="bg-brand-mint/5 border border-brand-mint/10 rounded-xl p-4 flex flex-col h-20 justify-center">
            <div className="text-[10px] tracking-wider text-black/50 font-bold mb-1">CONVERSIONS</div>
            <div className="flex items-end gap-2">
              <div className="w-12 h-5 bg-brand-mint/60 rounded"></div>
            </div>
          </div>
          <div className="bg-[#171717] rounded-xl p-4 flex flex-col h-20 justify-center text-white">
            <div className="text-[10px] tracking-wider text-white/50 font-bold mb-1">ROI</div>
            <div className="text-xl font-heading font-extrabold">+340%</div>
          </div>
        </div>

        <div className="flex-1 bg-brand-soft/50 rounded-xl border border-black/5 relative overflow-hidden flex items-end px-4 gap-2 pt-4">
          {[30, 45, 25, 60, 40, 80, 50, 100].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: '0%' }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex-1 bg-gradient-to-t from-brand-purple/40 to-brand-purple rounded-t-sm"
            ></motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Floating Target Lead */}
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[5%] -left-[5%] bg-white p-4 rounded-xl shadow-2xl border border-brand-pink/20 z-20 flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center">
        <Target className="w-6 h-6 text-brand-pink" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3 w-16 bg-black/10 rounded-full"></div>
        <div className="h-2 w-24 bg-black/5 rounded-full"></div>
      </div>
    </motion.div>

  </div>
);

const MarketingUniqueVisual = () => (
  <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-16 px-4">
    <h3 className="text-2xl font-bold font-heading mb-16 text-center text-[#171717]">The Growth Funnel</h3>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">

      <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-black/5 -translate-y-1/2 -z-10 rounded-full"></div>

      {[
        { title: "Traffic", icon: <Users />, color: "text-blue-500", delay: 0 },
        { title: "Leads", icon: <Target />, color: "text-brand-purple", delay: 0.2 },
        { title: "Conversions", icon: <Workflow />, color: "text-brand-pink", delay: 0.4 },
        { title: "Revenue", icon: <BadgeDollarSign />, color: "text-brand-mint", delay: 0.6 }
      ].map((step, i) => (
        <div key={i} className="flex flex-col flex-1 items-center gap-4 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: step.delay, duration: 0.4 }}
            className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center relative z-10"
          >
            {React.cloneElement(step.icon, { className: `w-8 h-8 mx-auto ${step.color}` })}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
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

const DigitalMarketing = () => {
  useSEO({
    title: "Digital Marketing Services | The Digital Connect",
    description: "We combine strategy, content, search and performance marketing to help brands reach the right audience and generate measurable growth."
  });

  return (
    <MainServiceLayout
      breadcrumb="Digital Marketing"
      title="Turn Digital Attention Into Business Growth."
      subtitle="Performance Marketing"
      description="We combine strategy, content, search and performance marketing to help brands reach the right audience and generate measurable growth."
      themeConfig={{
        bg: 'bg-brand-purple/10',
        accentText: 'text-purple-600',
        glowColor: 'bg-brand-purple'
      }}
      HeroVisual={MarketingHeroVisual}
      overview={{
        title: "Stop buying clicks. Start buying growth.",
        content: "A beautiful website without traffic is a billboard in the desert. We deploy aggressive, data-driven marketing frameworks prioritizing explicit ROI over vanity metrics. By combining extremely technical SEO, sharp performance media, and behavioral conversion optimization, we establish a relentless digital sales funnel that aggressively scales your market share."
      }}
      capabilities={[
        { icon: <Search />, title: "Search Engine Optimization", desc: "Technical, On-Page, and Content SEO designed to dominate extremely competitive search verticals organically." },
        { icon: <BarChart />, title: "Performance Marketing", desc: "Hyper-targeted Google Ads & Meta Ads optimizing ROAS (Return On Ad Spend) meticulously." },
        { icon: <Target />, title: "Lead Generation", desc: "Full-funnel B2B structures generating pre-qualified SQL (Sales Qualified Leads)." },
        { icon: <Share2 />, title: "Social Media Strategy", desc: "Omnichannel brand positioning across LinkedIn, Instagram, TikTok and X." },
        { icon: <PieChart />, title: "Conversion Optimization", desc: "A/B testing layout layouts structurally turning passive traffic into active buyers." },
        { icon: <Mail />, title: "Email Automation", desc: "Drip campaigns and newsletters actively nurturing your existing databases." }
      ]}
      technologies={['Google Analytics 4', 'Google Tag Manager', 'Google Ads', 'Meta Business Manager', 'Ahrefs', 'Semrush', 'HubSpot', 'Mailchimp']}
      UniqueVisual={MarketingUniqueVisual}
      processSteps={[
        { title: "Audit & Research", desc: "Vetting historical data, competitors, and lost keyword opportunities." },
        { title: "Strategy Formulation", desc: "Setting strict KPIs and assigning media budgets scientifically." },
        { title: "Asset Creation", desc: "Deploying high-converting ad creatives and SEO-optimized structures." },
        { title: "Execution", desc: "Activating campaigns across Search, Social, and Email networks." },
        { title: "Measurement", desc: "Tracking granular attribution directly mapping clicks to closed revenue." },
        { title: "Optimization", desc: "Continuously killing underperforming assets and scaling winning channels." }
      ]}
      benefits={[
        { title: "More Visibility", desc: "Owning the digital real-estate where your highly intended buyers search." },
        { title: "Qualified Traffic", desc: "We completely ignore bot traffic and vanity clicks, focusing entirely on intent." },
        { title: "Better Leads", desc: "Funneling prospects cleanly so your sales team talks to actual buyers." },
        { title: "Higher Conversions", desc: "Eliminating friction to drastically lower your Cost Per Acquisition (CPA)." },
        { title: "Data-Driven Decisions", desc: "Zero guesswork relying strictly on empirical analytics." },
        { title: "Measurable ROI", desc: "Complete transparency proving exactly how much revenue every ad dollar generates." },
      ]}
      faqs={[
        { q: "How long does SEO take to show results?", a: "Unlike paid media, SEO is a formidable long-term asset. While initial technical fixes show minor bumps immediately, true organic market domination generally takes 3 to 6 months of relentless content and link-building." },
        { q: "Do you guarantee ROAS (Return On Ad Spend)?", a: "No agency can ethically 'guarantee' a specific exact ROAS due to external market factors. However, we relentlessly optimize campaigns and kill losing ads rapidly, historically scaling our clients with profound profitability." },
        { q: "What advertising platforms do you use?", a: "We focus on Google Ads for High-Intent Search, Meta (Facebook/Instagram) for Retargeting and Lifestyle/B2C scaling, and LinkedIn Ads specifically for high-ticket B2B lead generation." },
        { q: "Do you create the ad assets?", a: "Yes. Our internal UI/UX and content teams design all ad creatives, write all copywriting, and develop all required Landing Pages seamlessly." }
      ]}
    />
  );
};

export default DigitalMarketing;
