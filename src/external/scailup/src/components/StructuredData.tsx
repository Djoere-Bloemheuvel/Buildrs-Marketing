import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'product';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const generateStructuredData = () => {
      switch (type) {
        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Buildrs.AI",
            "alternateName": "Buildrs AI",
            "url": "https://buildrs.ai",
            "logo": "https://buildrs.ai/logo.png",
            "description": "Elite AI Engineering Studio gespecialiseerd in Custom AI SaaS, automatisering en consultancy voor enterprise klanten.",
            "foundingDate": "2024",
            "founders": [{
              "@type": "Person",
              "name": "Buildrs.AI Team"
            }],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL",
              "addressLocality": "Nederland"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Dutch", "English"]
            },
            "sameAs": [
              "https://twitter.com/buildrs_ai"
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Nederland"
            }
          };

        case 'website':
          return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Buildrs.AI",
            "url": "https://buildrs.ai",
            "description": "Elite AI Engineering Studio voor Custom AI SaaS, automatisering en consultancy",
            "publisher": {
              "@type": "Organization",
              "name": "Buildrs.AI"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://buildrs.ai/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          };

        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data?.name || "AI Engineering Services",
            "description": data?.description || "Premium AI-oplossingen voor enterprise klanten",
            "provider": {
              "@type": "Organization",
              "name": "Buildrs.AI",
              "url": "https://buildrs.ai"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Nederland"
            },
            "serviceType": "Artificial Intelligence Engineering",
            "category": "Technology Services"
          };

        default:
          return null;
      }
    };

    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.id = `structured-data-${type}`;

    // Remove existing script if it exists
    const existingScript = document.getElementById(`structured-data-${type}`);
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = generateStructuredData();
    if (structuredData) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
