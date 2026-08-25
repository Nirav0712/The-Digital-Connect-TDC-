import React from 'react';
import { motion } from 'framer-motion';

const TechnologyOrbit = () => {
    return (
        <div className="relative w-full max-w-[250px] aspect-square flex items-center justify-center mt-4">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#19B5D8]/20"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[#0A263D]/10"
            />
            {/* Center point */}
            <div className="w-3 h-3 bg-[#19B5D8] rounded-full shadow-[0_0_15px_#19B5D8] z-10" />
            {/* Orbiting nodes */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0A263D] rounded-full border border-white" />
                <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-[#63D3E8] rounded-full" />
            </motion.div>
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
            >
                <div className="absolute top-1/4 left-0 w-2 h-2 bg-[#19B5D8] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 bg-[#061B2E] rounded-full border border-white" />
            </motion.div>
        </div>
    );
};
export default TechnologyOrbit;
