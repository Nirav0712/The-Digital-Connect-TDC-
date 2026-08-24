import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'Industries', path: '/industries' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'h-[72px] bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm' : 'h-[90px] bg-transparent'}`}>
      <div className="w-full h-full max-w-7xl mx-auto flex justify-between items-center px-6 relative z-[1000]">
        <Link to="/" className="text-xl font-heading font-extrabold tracking-tight">
          THE DIGITAL CONNECT
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center p-2 relative z-[2100] cursor-pointer pointer-events-auto w-[44px] h-[44px]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
    </header>
  );
};
export default Header;
