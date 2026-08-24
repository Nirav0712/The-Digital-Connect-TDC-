const fs = require('fs');
const generators = ['generateWeb.cjs', 'generateMobile.cjs', 'generateUXEcom.cjs', 'generateSoftwareMarketing.cjs'];

generators.forEach(gen => {
    let code = fs.readFileSync(gen, 'utf8');

    if (gen === 'generateWeb.cjs') {
        code = code.replace(/theme:\s*\{[^}]+\}/g, `theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-soft-blue/20' }`);
    } else if (gen === 'generateMobile.cjs') {
        code = code.replace(/theme:\s*\{[^}]+\}/g, `theme: { accent: 'text-brand-electric-cyan', bg: 'bg-brand-electric-cyan/20', softBg: 'bg-brand-periwinkle/20' }`);
    } else if (gen === 'generateUXEcom.cjs') {
        code = code.replace(/theme:\s*\{\s*accent:\s*['"]text-(indigo|purple|pink|fuchsia|violet)-\d+['"][^}]+\}/g, `theme: { accent: 'text-brand-periwinkle', bg: 'bg-brand-periwinkle/20', softBg: 'bg-brand-cyan/10' }`);
        code = code.replace(/theme:\s*\{\s*accent:\s*['"]text-(emerald|teal|green|cyan|sky)-\d+['"][^}]+\}/g, `theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-gold/10' }`);
    } else if (gen === 'generateSoftwareMarketing.cjs') {
        code = code.replace(/theme:\s*\{\s*accent:\s*['"]text-(blue|indigo|slate|gray)-\d+['"][^}]+\}/g, `theme: { accent: 'text-brand-blue', bg: 'bg-brand-blue/20', softBg: 'bg-brand-cyan/10' }`);
        code = code.replace(/theme:\s*\{\s*accent:\s*['"]text-(orange|amber|yellow|red|rose)-\d+['"][^}]+\}/g, `theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-gold/10' }`);
    }

    code = code.replace(/theme:\s*\{\s*accent:\s*['"]text-[a-z]+-\d+['"][^}]+\}/g, `theme: { accent: 'text-brand-cyan', bg: 'bg-brand-cyan/20', softBg: 'bg-brand-bg-light' }`);

    fs.writeFileSync(gen, code);
});
console.log('Generators updated with new themes.');
