import Script from 'next/script';

export default function StructuredData({ type = 'person', data = {} }) {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tarik Aziz",
          "jobTitle": "Full-Stack MERN Developer",
          "description": "Full-Stack MERN Developer specializing in React, Node.js, MongoDB, and modern web technologies",
          "url": "https://tarikaziz.com",
          "image": "https://tarikaziz.com/Tarik_Aziz_Full_Stack_MERN_Developer.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://github.com/tarikaziz0933",
            "https://linkedin.com/in/tarikaziz0933",
            "https://www.facebook.com/tarik.aziz.659575"
          ],
          "knowsAbout": [
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Full-Stack Development",
            "Web Development",
            "MERN Stack"
          ],
          "offers": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development Services",
              "description": "Full-stack web development, eCommerce solutions, and custom web applications"
            }
          },
          ...data
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tarik Aziz - Full Stack Developer",
          "url": "https://tarikaziz.com",
          "logo": "https://tarikaziz.com/Tarik_Aziz_Full_Stack_MERN_Developer.jpg",
          "description": "Professional web development services specializing in MERN stack development",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9732950781",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Bengali"]
          },
          "founder": {
            "@type": "Person",
            "name": "Tarik Aziz"
          },
          ...data
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Tarik Aziz - Full Stack MERN Developer",
          "url": "https://tarikaziz.com",
          "description": "Professional portfolio and services of Tarik Aziz, Full-Stack MERN Developer in Kolkata",
          "author": {
            "@type": "Person",
            "name": "Tarik Aziz"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://tarikaziz.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items || []
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Web Development Services",
          "description": data.description || "Professional web development services",
          "provider": {
            "@type": "Person",
            "name": "Tarik Aziz"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Kolkata, India"
          },
          "serviceType": "Web Development",
          ...data
        };

      default:
        return data;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}