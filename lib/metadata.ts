// Structured data and metadata utilities for SEO

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Frame Falcon Studios',
    url: 'https://framefalcon.com',
    logo: 'https://framefalcon.com/falcon-logo.png',
    description: 'Premier video and audio production company specializing in teledrama editing, TV commercials, music videos, color grading, AI music production, and social media content.',
    sameAs: [
        // Add your social media URLs here when available
        // 'https://facebook.com/framefalcon',
        // 'https://instagram.com/framefalcon',
        // 'https://youtube.com/@framefalcon',
        // 'https://twitter.com/framefalcon',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Sinhala'],
    },
    areaServed: {
        '@type': 'Country',
        name: 'Sri Lanka',
    },
    serviceType: [
        'Video Production',
        'Audio Production',
        'Teledrama Editing',
        'TV Commercials',
        'Music Video Editing',
        'Color Grading',
        'AI Music Production',
        'Social Media Content Creation',
        'Post Production',
    ],
}

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://framefalcon.com',
    name: 'Frame Falcon Studios',
    image: 'https://framefalcon.com/falcon-logo.png',
    url: 'https://framefalcon.com',
    telephone: '', // Add phone number when available
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
        addressLocality: 'Sri Lanka',
    },
    geo: {
        '@type': 'GeoCoordinates',
        // Add coordinates when available
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
    },
}

export const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Video and Audio Production',
    provider: {
        '@type': 'Organization',
        name: 'Frame Falcon Studios',
        url: 'https://framefalcon.com',
    },
    areaServed: {
        '@type': 'Country',
        name: 'Sri Lanka',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Video and Audio Production Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Teledrama Editing',
                    description: 'Professional teledrama editing services',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'TV Commercials',
                    description: 'High-quality TV commercial production',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Music Video Editing',
                    description: 'Creative music video editing and production',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Color Grading',
                    description: 'Professional color grading services',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'AI Music Production',
                    description: 'Affordable AI-based music production',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Social Media Content',
                    description: 'Engaging social media video content creation',
                },
            },
        ],
    },
}
