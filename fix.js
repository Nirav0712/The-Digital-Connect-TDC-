const fs = require('fs');
let content = fs.readFileSync('generate_sub_pages.js', 'utf8');
content = content.split('\\`').join('`');
fs.writeFileSync('generate_sub_pages.js', content);
