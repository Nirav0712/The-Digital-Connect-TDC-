import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#03111F] text-white pt-16 md:pt-24 pb-10 md:pb-12 px-5 lg:px-8 overflow-hidden relative tech-grid-dark">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#063B63]/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00A9D6]/5 rounded-full blur-[80px] md:blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      {/* Decorative Gold Accent Line */}
      <div className="absolute top-0 left-6 md:left-12 w-16 md:w-24 h-1 bg-[#D9A72E]/80 rounded-b-lg"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="The Digital Connect" className="auto h-8 lg:h-10 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="text-xl font-heading font-extrabold tracking-tight hidden">
                THE DIGITAL CONNECT
              </span>
            </Link>
            <p className="text-[#B9CAD7] leading-relaxed mb-6 pr-4">
              We design and develop high-end digital architecture that aggressively scales enterprise functionality.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-[#B9CAD7]">
              <li><Link to="/about" className="hover:text-brand-electric-cyan transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-electric-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-brand-electric-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-electric-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Capabilities</h4>
            <ul className="space-y-4 text-[#B9CAD7]">
              <li><Link to="/services/web-development" className="hover:text-brand-electric-cyan transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-brand-electric-cyan transition-colors">Mobile Engineering</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-brand-electric-cyan transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/software-development" className="hover:text-brand-electric-cyan transition-colors">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
            <ul className="space-y-4 text-[#B9CAD7]">
              <li><a href="#" className="hover:text-brand-electric-cyan transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-electric-cyan transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-electric-cyan transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-electric-cyan transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[#00A9D6]/20 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 text-[#B9CAD7]/60 text-[14px]">
          <p className="text-center lg:text-left">&copy; {new Date().getFullYear()} The Digital Connect. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <Link to="/privacy-policy" className="hover:text-[#18C5E8] transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#18C5E8] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
