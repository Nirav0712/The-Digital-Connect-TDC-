const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const writeSync = (relPath, content) => {
    const fullPath = path.join(srcDir, relPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content.trim() + '\n');
};

const indexCssContent = `
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

@theme {
  --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --font-heading: 'Manrope', ui-sans-serif, system-ui, sans-serif;

  --color-brand-dark: #111111;
  --color-brand-soft: #F7F5F2;
  --color-brand-lavender: #E9E3FF;
  --color-brand-purple: #DCD2FF;
  --color-brand-blue: #DCEEFF;
  --color-brand-mint: #DDF5EA;
  --color-brand-peach: #FFE5D5;
  --color-brand-yellow: #FFF4C7;
  
  --color-background: #F7F5F2;
  --color-foreground: #171717;
  --color-muted-foreground: #666666;
  --color-border: #E8E6E2;
  
  --color-primary: #111111;
  --color-primary-foreground: #FFFFFF;
  
  --color-secondary: #FFFFFF;
  --color-secondary-foreground: #111111;
}

@layer base {
  :root {
    --background: #F7F5F2;
    --foreground: #171717;
    --border: #E8E6E2;
    --primary: #111111;
    --primary-foreground: #FFFFFF;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans;
    background-color: var(--color-brand-soft);
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading tracking-tight text-primary;
  }
}

/* Animations */
@keyframes blob-float {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes grid-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

.animate-blob {
  animation: blob-float 15s infinite alternate ease-in-out;
}

.animate-grid {
  animation: grid-move 20s infinite linear;
}

@media (prefers-reduced-motion: reduce) {
  .animate-blob, .animate-grid {
    animation: none;
    transform: none;
  }
}
`;
writeSync('index.css', indexCssContent);


const glowingOrbContent = `
import React from 'react';
import { motion } from 'framer-motion';

const GlowOrb = ({ className = '', color = 'bg-brand-lavender', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2, delay }}
      className={\`absolute rounded-full blur-3xl opacity-60 animate-blob pointer-events-none \${color} \${className}\`}
    />
  );
};
export default GlowOrb;
`;
writeSync('components/backgrounds/GlowOrb.jsx', glowingOrbContent);

const animatedGridContent = `
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
`;
writeSync('components/backgrounds/AnimatedGrid.jsx', animatedGridContent);

const headerContent = `
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${scrolled ? 'h-[72px] bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm' : 'h-[90px] bg-transparent'}\`}>
      <div className="w-full h-full max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-xl font-heading font-extrabold tracking-tight z-50">
          THE DIGITAL CONNECT
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Start a Project
          </Link>
        </nav>
        
        <button className="md:hidden z-50 p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-soft z-40 flex flex-col pt-[100px] px-6 pb-6"
          >
            <div className="flex flex-col gap-6 text-2xl font-heading font-bold">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="border-b border-border/50 pb-4">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link to="/contact" className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
`;
writeSync('components/layout/Header.jsx', headerContent);

const footerContent = `
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-heading font-extrabold tracking-tight mb-6 block">
              THE DIGITAL CONNECT
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 pr-4">
              We design and develop high-end digital experiences that scale.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Capabilities</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile Engineering</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/software-development" className="hover:text-white transition-colors">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} The Digital Connect. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
`;
writeSync('components/layout/Footer.jsx', footerContent);

const updatedButtonContent = `
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all rounded-full";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-primary border border-border hover:border-primary/20 hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-brand-lavender/50 text-foreground"
  };
  
  const classes = \`\${baseClasses} \${variants[variant]} \${className}\`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  return <button className={classes} {...props}>{children}</button>;
};
export default Button;
`;
writeSync('components/common/Button.jsx', updatedButtonContent);

console.log("Core styles and layouts updated.");
