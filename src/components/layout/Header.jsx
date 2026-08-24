import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from './DesktopNavigation';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 h-[72px] bg-brand-off-white/92 backdrop-blur-md ${scrolled ? 'shadow-sm border-b border-brand-border' : 'border-b border-transparent'}`}>
      <div className="w-full h-full max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center relative z-[1000]">

        {/* LEFT COLUMN: Logo */}
        <div className="justify-self-start flex shrink-0 h-full items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="The Digital Connect" className="auto h-8 lg:h-10 object-contain hidden lg:block" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className="text-[20px] lg:text-[22px] font-extrabold tracking-[-0.03em] font-heading whitespace-nowrap text-brand-primary-navy">
              THE DIGITAL CONNECT
            </span>
          </Link>
        </div>

        {/* CENTER COLUMN: Navigation + Mega Menu Logic */}
        <div className="hidden lg:flex justify-self-center h-full">
          <DesktopNavigation />
        </div>

        {/* RIGHT COLUMN: Contact Us (Desktop) */}
        <div className="hidden lg:flex justify-self-end">
          <Link
            to="/contact"
            className="bg-brand-primary-navy text-white rounded-lg px-6 py-2.5 text-sm font-bold hover:bg-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 border border-transparent"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT COLUMN: Mobile Hamburger (Mobile) */}
        <div className="lg:hidden justify-self-end flex">
          <button
            type="button"
            className="flex items-center justify-center p-2 relative z-[2100] cursor-pointer pointer-events-auto w-[44px] h-[44px] text-brand-primary-navy hover:text-brand-cyan transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
