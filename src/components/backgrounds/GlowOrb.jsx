import React from 'react';
import { motion } from 'framer-motion';

const GlowOrb = ({ className = '', color = 'bg-brand-lavender', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2, delay }}
      className={`absolute rounded-full blur-3xl opacity-60 animate-blob pointer-events-none ${color} ${className}`}
    />
  );
};
export default GlowOrb;
