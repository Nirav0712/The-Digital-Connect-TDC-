import React from 'react';
import useSEO from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import MainServiceLayout from '../../components/services/MainServiceLayout';
import { Smartphone, Apple, Wifi, ShieldCheck, Gamepad2, Settings, Server, BellRing } from 'lucide-react';

const MobileHeroVisual = () => (
  <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center z-20">

    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="w-[220px] h-[450px] bg-white rounded-[40px] shadow-2xl border-4 border-[#171717] overflow-hidden relative z-20"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#171717] rounded-b-xl z-30"></div>

      <div className="p-4 pt-10 h-full flex flex-col gap-3 bg-brand-mint/5">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-brand-blue/20"></div>
          <div className="w-16 h-3 bg-black/5 rounded-full"></div>
        </div>
        <div className="h-24 w-full bg-brand-mint/20 rounded-xl mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="aspect-square bg-white rounded-xl shadow-sm"></div>
          <div className="aspect-square bg-white rounded-xl shadow-sm"></div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-auto h-12 w-full bg-brand-blue rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg"
        >
          Launch App
        </motion.div>
      </div>
    </motion.div>

    {/* Floating Notification */}
    <motion.div
      animate={{ x: [0, -10, 0], opacity: [0, 1, 0.8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      className="absolute top-[30%] -right-8 lg:-right-16 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30 border border-black/5"
    >
      <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center">
        <BellRing className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-2 w-16 bg-black/10 rounded-full"></div>
        <div className="h-2 w-24 bg-black/5 rounded-full"></div>
      </div>
    </motion.div>

    {/* Floating Code block */}
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
      className="absolute bottom-[10%] -left-4 lg:-left-12 bg-[#171717] text-white p-4 rounded-2xl shadow-xl z-30 border border-white/10"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <div className="text-[10px] font-mono text-brand-mint">&lt;App.Mobile /&gt;</div>
      <div className="text-[10px] font-mono text-brand-blue ml-2">compile: success</div>
    </motion.div>

  </div>
);

const MobileUniqueVisual = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full max-w-4xl mx-auto py-16">
    {/* iOS Phone */}
    <motion.div whileHover={{ scale: 1.05 }} className="w-48 h-[360px] bg-white rounded-[32px] shadow-2xl flex flex-col items-center justify-center border-[6px] border-[#171717] z-10 relative overflow-hidden">
      <div className="absolute top-0 w-24 h-4 bg-[#171717] rounded-b-xl z-20"></div>
      <Apple className="w-12 h-12 text-[#171717] mb-3 opacity-20" />
      <span className="font-bold text-sm tracking-widest uppercase">iOS</span>
    </motion.div>

    {/* Connection flow */}
    <div className="flex flex-col items-center gap-4 relative w-32 shrink-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-2 border-dashed border-brand-mint rounded-full flex items-center justify-center bg-white shadow-lg relative z-10"
      >
        <Server className="w-6 h-6 text-brand-blue" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-brand-lavender via-brand-mint to-brand-blue -z-10 blur-[1px]"></div>
    </div>

    {/* Android Phone */}
    <motion.div whileHover={{ scale: 1.05 }} className="w-48 h-[360px] bg-white rounded-[32px] shadow-2xl flex flex-col items-center justify-center border-4 border-gray-300 z-10 relative overflow-hidden">
      {/* Punch hole */}
      <div className="absolute top-3 w-3 h-3 bg-[#171717] rounded-full z-20"></div>
      <Smartphone className="w-12 h-12 text-brand-mint mb-3 opacity-80" />
      <span className="font-bold text-sm tracking-widest uppercase">Android</span>
    </motion.div>
  </div>
);

const MobileDevelopment = () => {
  useSEO({
    title: "Mobile App Development Services | The Digital Connect",
    description: "We build intuitive, reliable and scalable mobile applications that turn ideas into meaningful digital products."
  });

  return (
    <MainServiceLayout
      breadcrumb="Mobile App Development"
      title="Mobile Experiences People Love to Use."
      subtitle="Transforming ideas into apps"
      description="We build intuitive, reliable and scalable mobile applications for iOS and Android that turn ideas into meaningful digital products."
      themeConfig={{
        bg: 'bg-brand-mint/10',
        accentText: 'text-emerald-700',
        glowColor: 'bg-brand-mint'
      }}
      HeroVisual={MobileHeroVisual}
      overview={{
        title: "Engineering engaging mobile ecosystems.",
        content: "People spend over 4 hours a day on their smartphones. To capture that attention, your app needs to be flawless. We engineer high-performance native and cross-platform mobile apps that deliver stunning interfaces, buttery-smooth animations, and robust backend integrations. We don't just write code; we design experiences that drive retention and build loyalty."
      }}
      capabilities={[
        { icon: <Apple />, title: "iOS Development", desc: "Native Swift applications pushing the boundaries of the Apple ecosystem." },
        { icon: <Smartphone />, title: "Android Development", desc: "High-performance Kotlin apps deployed flawlessly across thousands of devices." },
        { icon: <Gamepad2 />, title: "Cross-Platform Development", desc: "React Native & Flutter builds delivering native feel with single-codebase efficiency." },
        { icon: <Settings />, title: "API Integration", desc: "Seamless connections to your existing web systems and cloud databases." },
        { icon: <ShieldCheck />, title: "App Security", desc: "Enterprise-grade encryption and secure auth flows protecting user data." },
        { icon: <Wifi />, title: "Push Notifications", desc: "Automated engagement funnels utilizing real-time cloud messaging." }
      ]}
      technologies={['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase', 'GraphQL', 'SQLite', 'Redux', 'AWS Mobile']}
      UniqueVisual={MobileUniqueVisual}
      processSteps={[
        { title: "Research & Validation", desc: "Validating the core concept against market demands and user behavior." },
        { title: "Product Strategy", desc: "Defining feature sets, MVP scope, and long-term monetization." },
        { title: "UX/UI Design", desc: "Crafting finger-friendly interfaces ensuring maximum usability." },
        { title: "Development", desc: "Writing clean, scalable code for frontend UI and backend infrastructure." },
        { title: "QA Testing", desc: "Comprehensive testing on physical devices for crashes and bugs." },
        { title: "App Store Launch", desc: "Handling Apple App Store and Google Play submissions smoothly." },
        { title: "Continuous Growth", desc: "Monitoring analytics, crash reports, and releasing seamless updates." }
      ]}
      benefits={[
        { title: "Smooth UX", desc: "Fluid 60fps animations bridging interactions perfectly." },
        { title: "Reliable Performance", desc: "Highly optimized memory management preventing crashes." },
        { title: "Scalable Backend", desc: "Server architectures built to handle millions of active users." },
        { title: "Secure Architecture", desc: "Encrypted data storage and highly secure API authentications." },
        { title: "Cross-Platform Capability", desc: "Reduce time-to-market dramatically utilizing shared codebases." },
        { title: "Offline Support", desc: "Intelligent local data caching allowing usage without internet." },
      ]}
      faqs={[
        { q: "Should I build Native or Cross-Platform?", a: "It depends on your app's requirements. If you need heavy 3D rendering or deep OS integrations, Native (Swift/Kotlin) is best. For 90% of business apps, Cross-Platform (React Native/Flutter) offers native-like performance at a fraction of the cost and time." },
        { q: "How much does it cost to build an app?", a: "Costs vary wildly based on complexity, ranging from $15,000 for a simple MVP to over $100,000 for enterprise systems. We provide accurate scopes after a brief discovery call." },
        { q: "Do you handle App Store submissions?", a: "Yes, we handle all compliance, Developer Account setups, asset generation, and final submissions for both the Apple App Store and Google Play Store." },
        { q: "Can my app connect to my existing website?", a: "Absolutely. We build headless architectures and custom APIs that allow your mobile app and website to share the exact same real-time database seamlessly." },
        { q: "Will I own the source code?", a: "Yes. Once the project is completed and paid, you retain 100% ownership of all IP and source code." }
      ]}
    />
  );
};

export default MobileDevelopment;
