const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const directories = [
    'assets/images',
    'assets/icons',
    'assets/logos',
    'components/common',
    'components/layout',
    'components/home',
    'components/portfolio',
    'components/caseStudies',
    'components/blog',
    'components/forms',
    'pages/services',
    'pages/industries',
    'pages/projects',
    'data',
    'hooks',
    'utils',
    'routes'
];

directories.forEach(dir => {
    fs.mkdirSync(path.join(srcDir, dir), { recursive: true });
});

const createComponent = (filePath, componentName) => {
    const content = `import React from 'react';

const ${componentName} = () => {
  return (
    <div className="w-full flex-grow flex items-center justify-center p-8 bg-background">
      <h1 className="text-4xl font-bold text-primary">${componentName} Page</h1>
    </div>
  );
};

export default ${componentName};
`;
    const fullPath = path.join(srcDir, filePath);
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content);
    }
};

const pagesToCreate = [
    ['pages/Home.jsx', 'Home'],
    ['pages/About.jsx', 'About'],
    ['pages/Services.jsx', 'Services'],
    ['pages/Portfolio.jsx', 'Portfolio'],
    ['pages/CaseStudies.jsx', 'CaseStudies'],
    ['pages/Process.jsx', 'Process'],
    ['pages/Technologies.jsx', 'Technologies'],
    ['pages/Careers.jsx', 'Careers'],
    ['pages/Blog.jsx', 'Blog'],
    ['pages/Contact.jsx', 'Contact'],
    ['pages/PrivacyPolicy.jsx', 'PrivacyPolicy'],
    ['pages/Terms.jsx', 'Terms'],
    ['pages/NotFound.jsx', 'NotFound'],

    // Services
    ['pages/services/WebDevelopment.jsx', 'WebDevelopment'],
    ['pages/services/MobileDevelopment.jsx', 'MobileDevelopment'],
    ['pages/services/UIUXDesign.jsx', 'UIUXDesign'],
    ['pages/services/Ecommerce.jsx', 'Ecommerce'],
    ['pages/services/SoftwareDevelopment.jsx', 'SoftwareDevelopment'],
    ['pages/services/DigitalMarketing.jsx', 'DigitalMarketing'],

    // Industries
    ['pages/industries/Healthcare.jsx', 'Healthcare'],
    ['pages/industries/Fintech.jsx', 'Fintech'],
    ['pages/industries/Ecommerce.jsx', 'EcommerceIndustry'],
    ['pages/industries/Education.jsx', 'Education'],
    ['pages/industries/RealEstate.jsx', 'RealEstate'],
    ['pages/industries/Travel.jsx', 'Travel'],

    // Projects
    ['pages/projects/ProjectDetails.jsx', 'ProjectDetails'],

    // Various templates
    ['components/blog/BlogTemplate.jsx', 'BlogTemplate'],
    ['components/caseStudies/CaseStudyTemplate.jsx', 'CaseStudyTemplate'],
];

pagesToCreate.forEach(([filePath, componentName]) => {
    createComponent(filePath, componentName);
});

// Layouts and commons
const createBasicComponent = (filePath, componentName, content) => {
    const fullPath = path.join(srcDir, filePath);
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content);
    }
};

createBasicComponent('components/layout/Header.jsx', 'Header', `import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center px-6">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">AGENCY.</Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/about" className="text-sm font-medium hover:text-accent">About</Link>
          <Link to="/services" className="text-sm font-medium hover:text-accent">Services</Link>
          <Link to="/portfolio" className="text-sm font-medium hover:text-accent">Portfolio</Link>
        </nav>
        <Link to="/contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Contact Us</Link>
      </div>
    </header>
  );
};
export default Header;
`);

createBasicComponent('components/layout/Footer.jsx', 'Footer', `import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
`);

createBasicComponent('components/common/ScrollToTop.jsx', 'ScrollToTop', `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
`);
