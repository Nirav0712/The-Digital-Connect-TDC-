import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { ShoppingCart, ShoppingBag, CreditCard, Package, TrendingUp, Filter, Search } from 'lucide-react';

const EcommerceHeroVisual = () => (
  <div className="relative w-full max-w-[500px] h-[500px] z-20">

    {/* Main Dashboard */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[10%] left-[5%] w-[90%] h-[75%] bg-white rounded-2xl shadow-xl border border-black/5 flex overflow-hidden z-10"
    >
      <div className="w-[30%] border-r border-black/5 bg-[#FAF9F7] p-4 flex flex-col gap-3">
        <div className="w-full h-8 bg-black/5 rounded-lg mb-4"></div>
        <div className="w-3/4 h-3 bg-brand-peach/40 rounded-full"></div>
        <div className="w-1/2 h-3 bg-black/5 rounded-full"></div>
        <div className="w-2/3 h-3 bg-black/5 rounded-full"></div>
        <div className="w-4/5 h-3 bg-brand-mint/40 rounded-full mt-auto"></div>
      </div>
      <div className="w-[70%] p-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="w-32 h-6 bg-black/10 rounded-lg"></div>
          <div className="w-8 h-8 bg-brand-mint/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 border border-black/5 bg-white rounded-xl shadow-sm flex flex-col justify-center px-4">
            <div className="text-[10px] text-black/40 font-bold mb-1">REVENUE</div>
            <div className="w-16 h-4 bg-brand-mint/60 rounded"></div>
          </div>
          <div className="h-20 border border-black/5 bg-white rounded-xl shadow-sm flex flex-col justify-center px-4">
            <div className="text-[10px] text-black/40 font-bold mb-1">ORDERS</div>
            <div className="w-12 h-4 bg-brand-peach/60 rounded"></div>
          </div>
        </div>

        <div className="flex-1 bg-black/5 rounded-xl border border-black/5 relative overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 w-1/4 bg-brand-mint/30 h-[40%]"
            animate={{ height: ['40%', '60%', '40%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[25%] w-1/4 bg-brand-peach/30 h-[70%]"
            animate={{ height: ['70%', '50%', '70%'] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[50%] w-1/4 bg-brand-mint/40 h-[30%]"
            animate={{ height: ['30%', '80%', '30%'] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[75%] w-1/4 bg-brand-peach/50 h-[90%]"
            animate={{ height: ['90%', '60%', '90%'] }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
          ></motion.div>
        </div>
      </div>
    </motion.div>

    {/* Floating Product Card */}
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[5%] -left-[5%] w-[180px] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-20 flex flex-col"
    >
      <div className="w-full h-[120px] bg-brand-peach/20 flex flex-col items-center justify-center relative">
        <ShoppingCart className="w-10 h-10 text-brand-peach/60" />
        <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col gap-2">
        <div className="h-3 w-3/4 bg-black/10 rounded-full"></div>
        <div className="h-4 w-1/2 bg-brand-mint/80 rounded-full mb-2"></div>
        <div className="h-8 w-full bg-[#171717] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
          Add to Cart
        </div>
      </div>
    </motion.div>

  </div>
);

const EcommerceUniqueVisual = () => (
  <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-16 px-4">
    <h3 className="text-2xl font-bold font-heading mb-16 text-center text-[#171717]">The Conversion Funnel</h3>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative h-[600px] md:h-auto">
      {/* Connecting line */}
      <div className="absolute top-1/2 left-4 md:left-0 md:top-1/2 w-1 h-full md:w-full md:h-1 bg-black/5 -translate-y-1/2 md:-translate-y-1/2 -z-10 rounded-full"></div>

      {/* Animated Dot */}
      <motion.div
        className="hidden md:block absolute top-[50%] left-0 w-3 h-3 rounded-full bg-brand-mint -translate-y-[50%] z-0"
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {[
        { title: "Product", icon: <Search />, color: "text-blue-500", delay: 0 },
        { title: "Cart", icon: <ShoppingCart />, color: "text-brand-peach", delay: 0.2 },
        { title: "Payment", icon: <CreditCard />, color: "text-yellow-500", delay: 0.4 },
        { title: "Order", icon: <Package />, color: "text-brand-mint", delay: 0.6 },
        { title: "Analytics", icon: <TrendingUp />, color: "text-purple-500", delay: 0.8 }
      ].map((step, i) => (
        <div key={i} className="flex flex-row md:flex-col flex-1 items-center gap-6 md:gap-4 relative group w-full md:w-auto ml-12 md:ml-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: step.delay, duration: 0.3 }}
            className="w-16 h-16 rounded-full bg-white border border-black/10 shadow-xl flex items-center justify-center relative z-10"
          >
            {React.cloneElement(step.icon, { className: `w-7 h-7 mx-auto ${step.color}` })}
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

const EcommerceDevelopment = () => {
  useSEO({
    title: "Ecommerce Development Services | The Digital Connect",
    description: "We create high-performing ecommerce experiences that make shopping easier, faster and more engaging."
  });

  return (
    <MainServiceLayout
      breadcrumb="Ecommerce Development"
      title="Digital Stores Built for Growth."
      subtitle="Ecommerce Architecture"
      description="We create high-performing ecommerce experiences that make shopping easier, faster and more engaging."
      themeConfig={{
        bg: 'bg-brand-mint/10',
        accentText: 'text-emerald-700',
        glowColor: 'bg-brand-mint'
      }}
      HeroVisual={EcommerceHeroVisual}
      overview={{
        title: "Where design meets conversion.",
        content: "A successful ecommerce store isn't simply a digital catalog; it's a high-velocity sales engine. Every millisecond of load time, every pixel of product display, and every step of the checkout flow directly dictates your revenue. We build blazing-fast scalable storefronts that completely remove purchasing friction, allowing your customers to confidently buy while providing you with granular operational data."
      }}
      capabilities={[
        { icon: <ShoppingBag />, title: "Shopify Development", desc: "Custom headless Shopify architecture maximizing theme versatility." },
        { icon: <ShoppingCart />, title: "WooCommerce", desc: "Deeply tailored WordPress commerce providing limitless extensibility." },
        { icon: <Search />, title: "Custom Ecommerce", desc: "Bespoke Node/React storefronts for wildly unique catalog demands." },
        { icon: <CreditCard />, title: "Payment Integration", desc: "Military-grade integrations with Stripe, PayPal, and regional providers." },
        { icon: <Package />, title: "Order Management", desc: "Automated fulfillment funnels hooking directly into your warehouse." },
        { icon: <TrendingUp />, title: "Conversion Optimization", desc: "A/B data testing designed to squeeze maximum ROI from your traffic." }
      ]}
      technologies={['Shopify Plus', 'WooCommerce', 'React', 'Node.js', 'Next.js Commerce', 'Stripe API', 'GraphQL', 'AWS']}
      UniqueVisual={EcommerceUniqueVisual}
      processSteps={[
        { title: "Catalog Strategy", desc: "Structuring product taxonomy, variants, and inventory databases natively." },
        { title: "UX/UI Design", desc: "Designing high-converting product pages and frictionless mobile carts." },
        { title: "Development", desc: "Integrating secure payment gateways and dynamic real-time inventory logic." },
        { title: "Data Migration", desc: "Seamlessly porting legacy customers, past orders, and current stock." },
        { title: "Fulfillment Sync", desc: "Connecting your storefront natively to 3PL logistics networks." },
        { title: "Go-Live Readiness", desc: "Stress-testing servers prior to massive marketing traffic drops." },
        { title: "Growth Marketing", desc: "Post-launch SEO and integrated cart-abandonment flows." }
      ]}
      benefits={[
        { title: "Fast Checkout", desc: "Lightning fast one-click purchases significantly minimizing cart abandonment." },
        { title: "Mobile Commerce", desc: "Flawless finger-friendly swiping designed specifically for mobile shoppers." },
        { title: "Secure Payments", desc: "PCI-compliant backend protocols fully isolating sensitive financial data." },
        { title: "Scalable Catalog", desc: "Architectures that handle 10 products or 100,000 without blinking." },
        { title: "Inventory Automation", desc: "Eliminating manual tracking by hooking directly into your ERP systems." },
        { title: "Granular Analytics", desc: "Detailed tracking exposing exactly where users drop off and convert." },
      ]}
      faqs={[
        { q: "Which platform is best for Ecommerce?", a: "For rapid scaling and simplicity, Shopify is King. If you need complete control over data and deep CMS integrations, WooCommerce is excellent. For massive bespoke complexity, we build Custom Headless stores." },
        { q: "Can you migrate my existing store?", a: "Yes. We execute data migrations flawlessly transferring customers, active subscriptions, historical orders, and product data with zero downtime." },
        { q: "Do you integrate with ERPs (like NetSuite)?", a: "Absolutely. Most of our enterprise clients require two-way structural API implementations between their digital storefront and internal ERP/CRM." },
        { q: "How do you handle high-traffic sales (Black Friday)?", a: "We utilize cloud caching and scalable architectures (often relying heavily on CDNs and decoupled frontends) to weather insane traffic spikes seamlessly." }
      ]}
    />
  );
};

export default EcommerceDevelopment;
