import fs from 'fs';
import path from 'path';

function traverse(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // Fix grids: grid-cols-2 -> grid-cols-1 md:grid-cols-2
            content = content.replace(/(?<!(?:sm|md|lg|xl|2xl):)\bgrid-cols-2\b/g, 'grid-cols-1 md:grid-cols-2');
            content = content.replace(/(?<!(?:sm|md|lg|xl|2xl):)\bgrid-cols-3\b/g, 'grid-cols-1 lg:grid-cols-3');
            content = content.replace(/(?<!(?:sm|md|lg|xl|2xl):)\bgrid-cols-4\b/g, 'grid-cols-1 lg:grid-cols-4');
            content = content.replace(/(?<!(?:sm|md|lg|xl|2xl):)\bgrid-cols-5\b/g, 'grid-cols-1 lg:grid-cols-5');

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed', fullPath);
            }
        }
    });
}
traverse('./src');
