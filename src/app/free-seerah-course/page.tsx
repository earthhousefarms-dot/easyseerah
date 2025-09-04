import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import EnhancedStructuredData from '@/components/EnhancedStructuredData';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Free Seerah Course Online | Complete Prophet Muhammad Biography Course',
  description: 'Learn Seerah completely FREE online. No books to buy, no fees. Interactive course covering the entire life of Prophet Muhammad ﷺ with lessons, timeline, quizzes, and resources.',
  keywords: 'free seerah course, seerah course online, learn seerah free, prophet muhammad course, islamic history course, seerah lessons free, simple seerah alternative free',
  alternates: {
    canonical: 'https://easyseerah.com/free-seerah-course',
  },
  openGraph: {
    title: 'Free Complete Seerah Course - Easy Seerah',
    description: 'Learn the biography of Prophet Muhammad ﷺ completely FREE. No books to purchase. Interactive online course with all resources included.',
    url: 'https://easyseerah.com/free-seerah-course',
    type: 'website',
  }
};

export default function FreeSeerahCourse() {
  const faqs = [
    {
      question: "Is Easy Seerah really completely free?",
      answer: "Yes! Easy Seerah is 100% free forever. Unlike books or paid courses, we believe Islamic education should be accessible to everyone. No hidden fees, no premium versions, just free comprehensive Seerah education."
    },
    {
      question: "How is Easy Seerah different from Simple Seerah?",
      answer: "While Simple Seerah is a book you purchase, Easy Seerah is a free interactive online platform. We offer interactive timelines, quizzes, activities, and constantly updated content. You get more than a book - you get a complete learning experience at no cost."
    },
    {
      question: "Do I need to buy any books or materials?",
      answer: "No! Everything you need is provided free online. We include lessons, activities, timelines, maps, quizzes, and downloadable resources. You never need to purchase anything to learn Seerah with us."
    },
    {
      question: "Is this suitable for children and adults?",
      answer: "Yes! Our content is organized by age groups and learning levels. We have simple stories for young children, detailed lessons for teens, and comprehensive content for adults. One platform for the whole family."
    },
    {
      question: "How long does the course take to complete?",
      answer: "You can learn at your own pace! The basic course can be completed in 20-30 hours, but you can take as long as you need. Content is always available and you can revisit any lesson anytime."
    },
    {
      question: "Is the content authentic and reliable?",
      answer: "Absolutely! All our content is based on authentic sources including Sahih Bukhari, Sahih Muslim, and classical Seerah works like Ibn Ishaq and Ibn Hisham. We cite all sources for verification."
    }
  ];

  return (
    <>
      <EnhancedStructuredData 
        type="course"
        title="Free Complete Seerah Course Online"
        description="Learn the complete biography of Prophet Muhammad ﷺ free online with interactive lessons and resources"
        url="https://easyseerah.com/free-seerah-course"
        faqs={faqs}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
                100% FREE - No Books to Buy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Learn Seerah Online - Completely Free
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Why buy expensive books when you can learn the complete Seerah of Prophet Muhammad ﷺ 
                online for FREE? Interactive lessons, timeline, quizzes, and resources - all at no cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/learn" 
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
                >
                  Start Free Course Now
                </Link>
                <Link 
                  href="#why-free" 
                  className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  Why It's Free
                </Link>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Easy Seerah vs Traditional Methods</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-emerald-600">✅ Easy Seerah (FREE)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Completely free forever</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Interactive timeline and maps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Quizzes and activities included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Updated regularly with new content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Accessible on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>No shipping or waiting</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 opacity-75">
                  <h3 className="font-bold text-xl mb-4 text-gray-600">📚 Traditional Books</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>Cost $20-50+ per book</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>Static text only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>No interactive features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>Can't be updated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>Need physical storage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">×</span>
                      <span>Shipping costs and delays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">What's Included (All Free)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="font-semibold text-xl mb-2">Complete Lessons</h3>
                  <p className="text-gray-600">
                    From birth to death, every important event in the Prophet's life covered in detail
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="font-semibold text-xl mb-2">Interactive Timeline</h3>
                  <p className="text-gray-600">
                    Visual timeline with maps showing the journey and important locations
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="font-semibold text-xl mb-2">Quizzes & Activities</h3>
                  <p className="text-gray-600">
                    Test your knowledge with interactive quizzes and engaging activities
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="font-semibold text-xl mb-2">For All Ages</h3>
                  <p className="text-gray-600">
                    Content adapted for children, teens, and adults - one platform for everyone
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="font-semibold text-xl mb-2">Mobile Friendly</h3>
                  <p className="text-gray-600">
                    Learn anywhere on any device - phone, tablet, or computer
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-semibold text-xl mb-2">Authentic Sources</h3>
                  <p className="text-gray-600">
                    All content from authentic hadith and classical Seerah sources
                  </p>
                </div>
              </div>
            </div>

            {/* Why Free Section */}
            <div id="why-free" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Why We're Free</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  We believe that Islamic education should be accessible to everyone, regardless of their 
                  financial situation. While others sell books and courses, we provide everything free because:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>📖 Knowledge of our Prophet ﷺ is a right, not a privilege</li>
                  <li>🌍 Muslims worldwide deserve equal access to quality Islamic education</li>
                  <li>💚 Spreading the Seerah is an act of worship and sadaqah jariyah</li>
                  <li>👨‍👩‍👧‍👦 Every family should be able to learn together without financial burden</li>
                </ul>
                <p className="font-semibold text-emerald-600">
                  No ads, no premium versions, no hidden costs. Just pure, authentic Seerah education for all.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Learning Seerah Today - 100% Free
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Join thousands learning the beautiful life of Prophet Muhammad ﷺ
              </p>
              <Link 
                href="/learn" 
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Begin Your Free Journey Now
              </Link>
              <p className="mt-4 text-sm opacity-90">
                No sign-up required • Start immediately • Free forever
              </p>
            </div>

            <FAQ items={faqs} className="mt-12" />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}