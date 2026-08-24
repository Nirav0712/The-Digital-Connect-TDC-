import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const navLinks = [
    { label: 'Company', id: 'company', path: '/about' },
    { label: 'Services', id: 'services', path: '/services' },
    { label: 'Industries', id: 'industries', path: '/industries' },
    { label: 'Portfolio', id: 'portfolio', path: '/portfolio' },
    { label: 'Process', id: 'process', path: '/process' },
    { label: 'Careers', id: 'careers', path: '/careers' }
];

const DesktopNavigation = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const timeoutRef = useRef(null);
    const location = useLocation();

    const handleMouseEnter = (menuId) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(menuId);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150); // 150ms delay
    };

    const isPathActive = (routePath, id) => {
        // Check if current route matches or is deep-nested under it
        if (routePath === '/' && location.pathname !== '/') return false;
        const cleanPath = routePath.split('#')[0];
        return location.pathname.startsWith(cleanPath) || location.pathname.includes(`/${id}`);
    };

    return (
        <>
            <nav
                className="flex items-center gap-[18px] xl:gap-[32px] h-full relative"
                onMouseLeave={handleMouseLeave}
            >
                {navLinks.map((link) => {
                    const isActive = isPathActive(link.path, link.id) || activeMenu === link.id;

                    return (
                        <div
                            key={link.id}
                            className="h-full flex items-center relative group select-none"
                            onMouseEnter={() => handleMouseEnter(link.id)}
                        >
                            <Link
                                to={link.path}
                                onClick={() => setActiveMenu(null)}
                                className={`text-[14px] xl:text-[15px] font-bold transition-colors duration-200 py-6 hover:text-brand-electric-cyan ${activeMenu === link.id ? 'text-brand-electric-cyan' : 'text-brand-primary-navy'}`}
                                aria-expanded={activeMenu === link.id}
                            >
                                {link.label}
                            </Link>

                            {/* Active Indicator Underline */}
                            <div
                                className={`absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ${isActive ? 'w-full bg-brand-cyan/20' : 'w-0 bg-transparent group-hover:w-1/2 group-hover:bg-brand-cyan/10'
                                    }`}
                            />
                        </div>
                    );
                })}

                {/* Invisible Bridge */}
                {activeMenu && (
                    <div className="absolute top-full left-0 right-0 h-4 bg-transparent z-[1050]" />
                )}
            </nav>

            {/* Mega Menu positioning container - Absolutely centered relative to the Header max-w-1400px container */}
            <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] xl:w-[calc(100vw-80px)] max-w-[1180px] pointer-events-none hidden lg:block"
                style={{ zIndex: 1100 }}
            >
                <div
                    className="w-full flex justify-center pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter(activeMenu)}
                    onMouseLeave={handleMouseLeave}
                >
                    <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
            </div>
        </>
    );
};

export default DesktopNavigation;
