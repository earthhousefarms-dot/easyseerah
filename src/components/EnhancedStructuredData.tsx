interface StructuredDataProps {
  type?: 'homepage' | 'article' | 'course' | 'faq' | 'about';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function EnhancedStructuredData({
  type = 'homepage',
  title,
  description,
  url,
  image,
  author,
  datePublished,
  dateModified,
  faqs
}: StructuredDataProps) {
  const baseUrl = 'https://easyseerah.com';
  
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Easy Seerah",
        "description": "Learn Seerah - The complete biography and life story of Prophet Muhammad ﷺ",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Easy Seerah",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          "url": `${baseUrl}/logo.png`,
          "contentUrl": `${baseUrl}/logo.png`,
          "width": 512,
          "height": 512,
          "caption": "Easy Seerah Logo"
        },
        "image": {
          "@id": `${baseUrl}/#logo`
        },
        "sameAs": [
          "https://twitter.com/easyseerah",
          "https://facebook.com/easyseerah",
          "https://instagram.com/easyseerah",
          "https://youtube.com/@easyseerah"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${baseUrl}/#educational`,
        "name": "Easy Seerah Islamic Education",
        "description": "Online platform for learning the Seerah (biography) of Prophet Muhammad ﷺ",
        "url": baseUrl,
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "teaches": [
          "Seerah of Prophet Muhammad",
          "Islamic History",
          "Hadith Studies",
          "Sahaba Stories",
          "Islamic Ethics",
          "Quranic Studies"
        ]
      }
    ]
  };

  if (type === 'article' && title) {
    baseSchema["@graph"].push({
      "@type": "Article",
      "@id": `${url || baseUrl}/#article`,
      "isPartOf": {
        "@id": `${baseUrl}/#website`
      },
      "author": {
        "@type": "Person",
        "name": author || "Easy Seerah Team",
        "@id": `${baseUrl}/#author`
      },
      "headline": title,
      "datePublished": datePublished || new Date().toISOString(),
      "dateModified": dateModified || new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url || baseUrl
      },
      "publisher": {
        "@id": `${baseUrl}/#organization`
      },
      "image": image ? {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      } : `${baseUrl}/og-image.png`,
      "articleSection": "Islamic Education",
      "inLanguage": "en-US",
      "description": description
    });
  }

  if (type === 'course') {
    baseSchema["@graph"].push({
      "@type": "Course",
      "name": title || "Complete Seerah Course",
      "description": description || "Comprehensive online course covering the entire life of Prophet Muhammad ﷺ",
      "provider": {
        "@id": `${baseUrl}/#organization`
      },
      "educationalLevel": "All Levels",
      "teaches": "Seerah of Prophet Muhammad",
      "inLanguage": ["en", "ar"],
      "availableOnline": true,
      "isAccessibleForFree": true,
      "url": url || `${baseUrl}/learn`,
      "coursePrerequisites": "None - suitable for beginners",
      "educationalUse": "Islamic Education",
      "learningResourceType": "Interactive Course",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H",
        "instructor": {
          "@type": "Person",
          "name": "Easy Seerah Instructors"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString()
      }
    });
  }

  if (type === 'faq' && faqs && faqs.length > 0) {
    baseSchema["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  baseSchema["@graph"].push({
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...(url && url !== baseUrl ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title || "Page",
        "item": url
      }] : [])
    ]
  });

  baseSchema["@graph"].push({
    "@type": "WebPage",
    "@id": `${url || baseUrl}/#webpage`,
    "url": url || baseUrl,
    "name": title || "Easy Seerah - Learn the Biography of Prophet Muhammad ﷺ",
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "about": {
      "@type": "Thing",
      "name": "Seerah of Prophet Muhammad",
      "description": "The life story and biography of Prophet Muhammad ﷺ"
    },
    "primaryImageOfPage": image || `${baseUrl}/og-image.png`,
    "datePublished": datePublished || "2024-01-01T00:00:00+00:00",
    "dateModified": dateModified || new Date().toISOString(),
    "description": description || "Learn the complete Seerah (biography) of Prophet Muhammad ﷺ through interactive lessons and authentic resources.",
    "inLanguage": "en-US",
    "potentialAction": [{
      "@type": "ReadAction",
      "target": [url || baseUrl]
    }]
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}