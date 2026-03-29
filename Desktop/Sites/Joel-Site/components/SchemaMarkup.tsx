"use client";

interface SchemaMarkupProps {
  type?: "home" | "marketing";
}

export default function SchemaMarkup({ type = "home" }: SchemaMarkupProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jmdigitalsolutions.com/#organization",
    name: "JM Digital Solutions",
    url: "https://jmdigitalsolutions.com",
    logo: {
      "@type": "ImageObject",
      url: "https://jmdigitalsolutions.com/logo.png",
    },
    description:
      "Custom websites and digital marketing for restaurants, wellness spaces, and local businesses in Luxembourg and Switzerland.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Joel Magalhaes",
    },
    sameAs: [
      "https://www.linkedin.com/company/jmdigitalsolutions",
      "https://github.com/jmdigitalsolutions",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "LU",
      addressRegion: "Luxembourg",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Luxembourg",
      },
      {
        "@type": "Country",
        name: "Switzerland",
      },
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Belgium",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jmdigitalsolutions.com/#business",
    name: "JM Digital Solutions",
    image: "https://jmdigitalsolutions.com/logo.png",
    url: "https://jmdigitalsolutions.com",
    telephone: "+352-621-XXX-XXX",
    email: "hello@jmdigitalsolutions.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LU",
      addressRegion: "Luxembourg",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.6116,
      longitude: 6.1319,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "27",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const webDesignService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://jmdigitalsolutions.com/#webdesign",
    serviceType: "Web Design & Development",
    provider: {
      "@id": "https://jmdigitalsolutions.com/#organization",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Luxembourg",
      },
      {
        "@type": "Country",
        name: "Switzerland",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "One-Page Website",
            description:
              "Perfect for small businesses, consultants, or local services. Fast, mobile-optimized single-page site.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Page Website",
            description:
              "Full website with multiple pages, custom design, and content management system.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce Website",
            description:
              "Complete online store with product catalog, shopping cart, and payment integration.",
          },
        },
      ],
    },
  };

  const marketingService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://jmdigitalsolutions.com/marketing#service",
    serviceType: "Digital Marketing Services",
    provider: {
      "@id": "https://jmdigitalsolutions.com/#organization",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Luxembourg",
      },
      {
        "@type": "Country",
        name: "Switzerland",
      },
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Belgium",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversion Rate Optimization",
            description:
              "Increase conversions with data-driven testing, user research, and optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Content Strategy",
            description:
              "Rank higher on Google with technical SEO, content optimization, and link building.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paid Advertising",
            description:
              "Google Ads, Meta Ads, and LinkedIn campaigns that drive qualified leads.",
          },
        },
      ],
    },
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@id": "https://jmdigitalsolutions.com/#business",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: "Sophie Laurent",
    },
    reviewBody:
      "Joel transformed our restaurant website into a real booking machine. Reservations up 60%, and we finally show up on Google. Highly recommend!",
    datePublished: "2024-10-15",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jmdigitalsolutions.com/#website",
    url: "https://jmdigitalsolutions.com",
    name: "JM Digital Solutions",
    description:
      "Custom websites and digital marketing for local businesses in Europe",
    publisher: {
      "@id": "https://jmdigitalsolutions.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jmdigitalsolutions.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = type === "marketing" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jmdigitalsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marketing Services",
        item: "https://jmdigitalsolutions.com/marketing",
      },
    ],
  } : null;

  const schemas: any[] = [
    organizationSchema,
    localBusinessSchema,
    webDesignService,
    reviewSchema,
    websiteSchema,
  ];

  if (type === "marketing") {
    schemas.push(marketingService);
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
