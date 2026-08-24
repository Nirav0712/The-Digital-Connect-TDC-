import React from 'react';

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <div 
        className="absolute inset-[-100%] animate-grid"
        style={{
          backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
    </div>
  );
};
export default AnimatedGrid;
