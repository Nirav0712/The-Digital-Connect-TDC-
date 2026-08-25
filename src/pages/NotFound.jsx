import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, LayoutGrid, MonitorSmartphone, Mail } from 'lucide-react';
import SEO from '../components/seo/SEO';

const NotFound = () => {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center pt-[72px] bg-brand-primary-navy relative overflow-hidden px-5">
      {/* Optional SEO tag to prevent indexing of 404s */}
      <SEO
        title="Page Not Found | The Digital Connect"
        description="The page you are looking for does not exist or has been moved."
      />
      <meta name="robots" content="noindex, follow" />

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[#08BFE8]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto w-full py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(100px,15vw,180px)] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 leading-none mb-4 select-none"
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(24px,4vw,36px)] font-heading font-black text-white mb-6"
        >
          Looks like you've moved off the grid.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A3B8CC] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          The page you're searching for has been moved, renamed, or doesn't exist. Let's get you back to familiar territory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12"
        >
          <Link to="/" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#08BFE8]/50 p-4 rounded-xl text-white font-bold hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#08BFE8]/20 flex items-center justify-center text-[#08BFE8] group-hover:scale-110 transition-transform"><Home size={20} /></div>
            Back to Home
          </Link>
          <Link to="/services" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#08BFE8]/50 p-4 rounded-xl text-white font-bold hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#08BFE8]/20 flex items-center justify-center text-[#08BFE8] group-hover:scale-110 transition-transform"><MonitorSmartphone size={20} /></div>
            Our Services
          </Link>
          <Link to="/industries" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#08BFE8]/50 p-4 rounded-xl text-white font-bold hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#08BFE8]/20 flex items-center justify-center text-[#08BFE8] group-hover:scale-110 transition-transform"><LayoutGrid size={20} /></div>
            Industries
          </Link>
          <Link to="/contact" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#08BFE8]/50 p-4 rounded-xl text-white font-bold hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#08BFE8]/20 flex items-center justify-center text-[#08BFE8] group-hover:scale-110 transition-transform"><Mail size={20} /></div>
            Contact Us
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-[#08BFE8] font-bold hover:text-white transition-colors">
            Return to the beginning <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
