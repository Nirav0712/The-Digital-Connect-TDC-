import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../../config/seoConfig';

const SEO = ({ title, description, keywords, ogImage, type = "website", schema }) => {
    const location = useLocation();
    const pathname = location.pathname;

    // Determine values, prioritizing passed props over centralized config
    const config = seoConfig[pathname] || {};

    // Construct final metadata
    const finalTitle = title || config.title || "The Digital Connect | Premium Web, Mobile & Software";
    const finalDescription = description || config.description || "Premium digital agency specializing in custom software, mobile apps, and scalable web solutions driving business growth.";
    const finalUrl = `https://www.thedigitalconnect.com${pathname}`;
    const finalOgImage = ogImage || "https://www.thedigitalconnect.com/og-image.jpg";

    // Default Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Digital Connect",
        "url": "https://www.thedigitalconnect.com",
        "logo": "https://www.thedigitalconnect.com/logo.png",
        "description": "Premium digital agency specializing in full-stack engineering, UX/UI architecture, and high-performance digital experiences.",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "info@thedigitalconnect.in",
            "telephone": "+91 9925843531"
        },
        "sameAs": [
            "https://www.linkedin.com/company/the-digital-connect",
            "https://twitter.com/thedigitalconnect"
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalOgImage} />
            <meta property="og:site_name" content="The Digital Connect" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalUrl} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalOgImage} />

            {/* JSON-LD Schemas */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
