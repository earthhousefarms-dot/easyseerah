export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://easyseerah.com/#website",
        "url": "https://easyseerah.com",
        "name": "Easy Seerah",
        "description": "Learn Seerah - The complete biography and life story of Prophet Muhammad ﷺ",
        "publisher": {
          "@id": "https://easyseerah.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://easyseerah.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://easyseerah.com/#organization",
        "name": "Easy Seerah",
        "url": "https://easyseerah.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://easyseerah.com/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/easyseerah",
          "https://facebook.com/easyseerah",
          "https://instagram.com/easyseerah"
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://easyseerah.com/#educational",
        "name": "Easy Seerah Islamic Education",
        "description": "Online platform for learning the Seerah (biography) of Prophet Muhammad ﷺ",
        "url": "https://easyseerah.com",
        "areaServed": "Worldwide",
        "educationalCredentialAwarded": "Islamic Education Certificate",
        "teaches": [
          "Seerah",
          "Islamic History",
          "Hadith Studies",
          "Prophet Muhammad Biography",
          "Sahaba Stories"
        ]
      },
      {
        "@type": "Course",
        "name": "Complete Seerah Course",
        "description": "Comprehensive online course covering the entire life of Prophet Muhammad ﷺ from birth to death",
        "provider": {
          "@id": "https://easyseerah.com/#organization"
        },
        "educationalLevel": "All Levels",
        "teaches": "Seerah of Prophet Muhammad",
        "inLanguage": "en",
        "availableOnline": true,
        "isAccessibleForFree": true,
        "url": "https://easyseerah.com/learn",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT10H"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Seerah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seerah refers to the biography and life story of Prophet Muhammad ﷺ, including his character, teachings, and experiences from birth to death."
            }
          },
          {
            "@type": "Question",
            "name": "Why is learning Seerah important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Learning Seerah helps Muslims understand their Prophet's life, follow his example, strengthen their faith, and apply his teachings in daily life."
            }
          },
          {
            "@type": "Question",
            "name": "Is Easy Seerah suitable for children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Easy Seerah is designed for all ages with interactive content, stories, and visual learning tools perfect for children and adults alike."
            }
          },
          {
            "@type": "Question",
            "name": "What resources does Easy Seerah provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Easy Seerah provides interactive timelines, authentic hadith collections, Sahaba stories, educational lessons, quizzes, and downloadable resources for comprehensive Seerah learning."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://easyseerah.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Learn Seerah",
            "item": "https://easyseerah.com/learn"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}