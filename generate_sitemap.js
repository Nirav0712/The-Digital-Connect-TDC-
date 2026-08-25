import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { seoConfig } from './src/config/seoConfig.js';
const routes = Object.keys(seoConfig);

// Also we have the hire-team routes!
const hireData = [
    { slug: 'web-developers', sub: ['php-developer', 'python-developer', 'wordpress-developer', 'magento-developer', 'shopify-developer', 'golang-developer', 'ruby-on-rails-developer', 'java-developer', 'mean-stack-developer', 'mern-developer', 'full-stack-developer', 'django-developer', 'asp-net-developer', 'laravel-developer', 'net-core-developer', 'drupal-developer'] },
    { slug: 'mobile-app-developers', sub: ['ios-developer', 'android-developer', 'flutter-developer', 'ionic-developer', 'swift-developer', 'kotlin-developer', 'react-native-developer', 'unity-3d-developer', 'cross-platform-developer'] },
    { slug: 'javascript-developers', sub: ['react-developer', 'angular-developer', 'vue-js-developer', 'node-js-developer', 'next-js-developer', 'express-js-developer', 'typescript-developer', 'full-stack-javascript-developer'] },
    { slug: 'devops-developers', sub: ['aws-developer', 'azure-devops-developer', 'devsecops-developer', 'docker-developer', 'kubernetes-developer', 'cicd-developer', 'cloud-engineer', 'infrastructure-automation-developer'] },
    { slug: 'designers', sub: ['ui-ux-designer', 'graphic-designer', 'product-designer', 'web-designer', 'mobile-app-designer', 'brand-designer', 'motion-designer', 'game-designer'] },
    { slug: 'salesforce-integration-developers', sub: ['salesforce-developer', 'salesforce-consultant', 'salesforce-integration-developer', 'salesforce-admin', 'salesforce-commerce-cloud-developer', 'salesforce-marketing-cloud-developer', 'salesforce-crm-developer', 'salesforce-api-integration-developer'] }
];

const hireRoutes = [];
hireData.forEach(cat => {
    hireRoutes.push(`/hire-team/${cat.slug}`);
    cat.sub.forEach(sub => {
        hireRoutes.push(`/hire-team/${cat.slug}/${sub}`);
    });
});

const allRoutes = [...routes, ...hireRoutes];
const domain = "https://www.thedigitalconnect.com";
const date = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `    <url>
        <loc>${domain}${route}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${route === '/' ? '1.0' : route.split('/').length > 2 ? '0.6' : '0.8'}</priority>
    </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
console.log('Generated public/sitemap.xml with ' + allRoutes.length + ' entries.');
