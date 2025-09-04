import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import EnhancedStructuredData from '@/components/EnhancedStructuredData';

export const metadata: Metadata = {
  title: 'What is Seerah? | Complete Guide to Prophet Muhammad\'s Biography',
  description: 'Learn what Seerah means, why studying Seerah is important, and how to learn the biography of Prophet Muhammad ﷺ. Comprehensive guide to understanding Seerah.',
  keywords: 'what is seerah, seerah meaning, importance of seerah, learn seerah, prophet muhammad biography, sirah, seerah definition',
  alternates: {
    canonical: 'https://easyseerah.com/what-is-seerah',
  },
  openGraph: {
    title: 'What is Seerah? Complete Guide to Prophet Muhammad\'s Biography',
    description: 'Discover the meaning of Seerah, its importance in Islamic education, and comprehensive resources for learning the life of Prophet Muhammad ﷺ.',
    url: 'https://easyseerah.com/what-is-seerah',
    type: 'article',
    images: [
      {
        url: '/og-what-is-seerah.png',
        width: 1200,
        height: 630,
        alt: 'What is Seerah - Easy Seerah Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Seerah? Complete Guide',
    description: 'Learn the meaning and importance of Seerah - the biography of Prophet Muhammad ﷺ',
  }
};

export default function WhatIsSeerah() {
  const faqs = [
    {
      question: "What does Seerah mean in Arabic?",
      answer: "Seerah (السيرة) literally means 'journey' or 'path' in Arabic. In Islamic context, it specifically refers to the biography and life story of Prophet Muhammad ﷺ, encompassing his character, actions, sayings, and entire life journey from birth to death."
    },
    {
      question: "Why is studying Seerah important for Muslims?",
      answer: "Studying Seerah is essential because Prophet Muhammad ﷺ is the perfect role model for Muslims. Through Seerah, we learn how to implement Quranic teachings practically, understand the context of revelations, strengthen our faith, and develop our character according to prophetic guidance."
    },
    {
      question: "What are the main periods of the Prophet's Seerah?",
      answer: "The Seerah is typically divided into three main periods: 1) Pre-Prophethood (570-610 CE) covering his birth to age 40, 2) Makkan Period (610-622 CE) including the first revelations and persecution, and 3) Madinan Period (622-632 CE) establishing the Islamic state and community."
    },
    {
      question: "What are the best sources for learning authentic Seerah?",
      answer: "The most authentic sources include early biographies like Ibn Ishaq and Ibn Hisham, Sahih Hadith collections (Bukhari and Muslim), and works by classical scholars. Modern resources include books by Martin Lings, Dr. Yasir Qadhi's Seerah series, and authenticated online courses."
    },
    {
      question: "How long does it take to study the complete Seerah?",
      answer: "A comprehensive study of Seerah can take anywhere from a few months to years depending on the depth. A basic overview can be completed in 20-30 hours of study, while detailed academic study with hadith analysis can take several years."
    },
    {
      question: "Is Seerah suitable for children to learn?",
      answer: "Yes, Seerah is excellent for children when presented age-appropriately. Children can learn valuable moral lessons, develop love for the Prophet ﷺ, and understand Islamic values through engaging stories from his life. Many resources are specifically designed for young learners."
    }
  ];

  const relatedLinks = [
    {
      href: "/seerah-for-kids",
      title: "Seerah for Kids",
      description: "Age-appropriate Seerah lessons and activities for children",
      category: "Learning"
    },
    {
      href: "/learn",
      title: "Interactive Seerah Course",
      description: "Start your comprehensive Seerah journey with our guided course",
      category: "Course"
    },
    {
      href: "/#timeline",
      title: "Seerah Timeline",
      description: "Visual timeline of major events in the Prophet's life",
      category: "Resources"
    },
    {
      href: "/#sahaba",
      title: "Stories of Sahaba",
      description: "Learn about the blessed companions of the Prophet ﷺ",
      category: "Stories"
    },
    {
      href: "/#hadith",
      title: "Hadith Collection",
      description: "Authentic sayings and teachings of Prophet Muhammad ﷺ",
      category: "Hadith"
    },
    {
      href: "/#resources",
      title: "Seerah Resources",
      description: "Books, videos, and materials for deeper study",
      category: "Resources"
    }
  ];

  return (
    <>
      <EnhancedStructuredData 
        type="article"
        title="What is Seerah? Complete Guide to Prophet Muhammad's Biography"
        description="Learn what Seerah means, why studying Seerah is important, and how to learn the biography of Prophet Muhammad ﷺ."
        url="https://easyseerah.com/what-is-seerah"
        datePublished="2024-01-15T00:00:00+00:00"
        dateModified={new Date().toISOString()}
        faqs={faqs}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <Breadcrumbs 
          items={[
            { label: "What is Seerah?", href: "/what-is-seerah" }
          ]}
        />
        
        <main className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is Seerah? Understanding the Biography of Prophet Muhammad ﷺ
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Definition of Seerah</h2>
                <p className="text-gray-700 mb-4">
                  Seerah (السيرة) is an Arabic word that means "journey" or "path." In Islamic context, 
                  Seerah specifically refers to the biography and life story of Prophet Muhammad ﷺ, 
                  the final messenger of Allah. The study of Seerah encompasses every aspect of the 
                  Prophet's life, from his birth in Makkah to his death in Madinah.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Study Seerah?</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Understanding Islam:</strong> The Seerah provides practical examples of how to implement Quranic teachings</li>
                  <li><strong>Role Model:</strong> Prophet Muhammad ﷺ is the perfect example for Muslims to follow</li>
                  <li><strong>Strengthening Faith:</strong> Learning about the Prophet's struggles and triumphs increases iman</li>
                  <li><strong>Historical Context:</strong> Seerah helps understand the circumstances of Quranic revelations</li>
                  <li><strong>Personal Development:</strong> The Prophet's character traits serve as guidance for self-improvement</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Main Periods of Seerah</h2>
                
                <div className="bg-emerald-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">1. Pre-Prophethood (570-610 CE)</h3>
                  <p className="text-gray-700">
                    The first 40 years of the Prophet's life, including his birth, childhood as an orphan, 
                    youth, marriage to Khadijah, and his reputation as Al-Amin (the trustworthy).
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">2. Makkan Period (610-622 CE)</h3>
                  <p className="text-gray-700">
                    The 13 years in Makkah after receiving prophethood, characterized by secret preaching, 
                    persecution, the boycott, and the Year of Sorrow.
                  </p>
                </div>

                <div className="bg-cyan-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">3. Madinan Period (622-632 CE)</h3>
                  <p className="text-gray-700">
                    The 10 years in Madinah, establishing the Islamic state, major battles (Badr, Uhud, Khandaq), 
                    treaties, conquest of Makkah, and the farewell pilgrimage.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Topics in Seerah Studies</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold">Family & Lineage</h3>
                    <p className="text-gray-600">The Prophet's ancestry, family members, and descendants</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold">Miracles & Signs</h3>
                    <p className="text-gray-600">The Isra and Mi'raj, splitting of the moon, and other miracles</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold">Battles & Expeditions</h3>
                    <p className="text-gray-600">Military campaigns and their strategic importance</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold">Companions (Sahaba)</h3>
                    <p className="text-gray-600">Stories and contributions of the Prophet's companions</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to Study Seerah Effectively</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Start with authentic sources like Ibn Ishaq, Ibn Hisham, and Sahih hadith collections</li>
                  <li>Follow a chronological approach to understand the progression of events</li>
                  <li>Connect Seerah events with Quranic revelations for deeper understanding</li>
                  <li>Reflect on the lessons and how they apply to modern life</li>
                  <li>Join study circles or online courses for guided learning</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Benefits of Learning Seerah</h2>
                <p className="text-gray-700 mb-4">
                  Studying Seerah is not just about learning history; it's about transforming our lives. 
                  Through Seerah, we learn patience from the Prophet's trials, mercy from his interactions, 
                  leadership from his governance, and spirituality from his worship. Every Muslim should 
                  make Seerah study a regular part of their Islamic education.
                </p>
              </section>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Start Your Seerah Journey</h2>
                <p className="text-gray-700 mb-4">
                  Begin learning the beautiful story of Prophet Muhammad ﷺ with our interactive 
                  Seerah course. From his blessed birth to the establishment of the Muslim Ummah, 
                  explore every significant event with authentic narrations and practical lessons.
                </p>
                <a href="/learn" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Start Learning Seerah
                </a>
              </div>
            </div>
          </article>
          
          <FAQ items={faqs} className="mt-12" />
          
          <InternalLinks 
            title="Explore More Seerah Content"
            links={relatedLinks}
            variant="grid"
            className="mt-12 bg-gray-50"
          />
        </div>
      </main>
      
      <Footer />
      </div>
    </>
  );
}