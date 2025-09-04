'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnhancedStructuredData from '@/components/EnhancedStructuredData';
import { useState } from 'react';

export default function Resources() {
  const [copied, setCopied] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://easyseerah.com/resources');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resources = [
    {
      title: "Complete Seerah Timeline PDF",
      description: "Visual timeline from birth to death of Prophet Muhammad ﷺ",
      downloads: "50,000+",
      format: "PDF",
      size: "2.5 MB",
      link: "/downloads/seerah-timeline.pdf",
      category: "Timeline",
      featured: true
    },
    {
      title: "Seerah Workbook for Kids (Ages 5-10)",
      description: "30 pages of activities, coloring, and exercises",
      downloads: "35,000+",
      format: "PDF",
      size: "5.2 MB",
      link: "/downloads/seerah-kids-workbook.pdf",
      category: "Kids",
      featured: true
    },
    {
      title: "40 Authentic Hadith about the Prophet ﷺ",
      description: "Carefully selected hadith with references",
      downloads: "42,000+",
      format: "PDF",
      size: "1.8 MB",
      link: "/downloads/40-hadith-prophet.pdf",
      category: "Hadith"
    },
    {
      title: "Ramadan Seerah Calendar",
      description: "30-day Seerah learning plan for Ramadan",
      downloads: "28,000+",
      format: "PDF",
      size: "3.1 MB",
      link: "/downloads/ramadan-seerah-calendar.pdf",
      category: "Ramadan",
      featured: true
    },
    {
      title: "Seerah Lesson Plans for Teachers",
      description: "12 complete lesson plans with activities",
      downloads: "15,000+",
      format: "PDF",
      size: "4.5 MB",
      link: "/downloads/seerah-lesson-plans.pdf",
      category: "Teaching"
    },
    {
      title: "Battles of the Prophet Map Pack",
      description: "Detailed maps of Badr, Uhud, Khandaq, etc.",
      downloads: "22,000+",
      format: "PDF",
      size: "6.8 MB",
      link: "/downloads/battles-maps.pdf",
      category: "Maps"
    },
    {
      title: "Seerah Quiz Questions (500+)",
      description: "Question bank for teachers and parents",
      downloads: "18,000+",
      format: "PDF",
      size: "1.2 MB",
      link: "/downloads/seerah-quiz-bank.pdf",
      category: "Quiz"
    },
    {
      title: "Prophet's Family Tree Poster",
      description: "Beautiful genealogy chart (printable A3/A2)",
      downloads: "31,000+",
      format: "PDF",
      size: "8.3 MB",
      link: "/downloads/family-tree-poster.pdf",
      category: "Posters"
    }
  ];

  return (
    <>
      <EnhancedStructuredData 
        type="homepage"
        title="Free Seerah Resources and Downloads"
        description="Download free Seerah PDFs, worksheets, timeline, and teaching materials"
        url="https://easyseerah.com/resources"
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Free Seerah Resources
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Download professional Seerah teaching materials, worksheets, timelines, and more. 
                Everything 100% free. No sign-up required.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
                  📊 500,000+ Downloads
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  📚 50+ Resources
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  ✅ Always Free
                </div>
              </div>
            </div>

            {/* Featured Resources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">🌟 Most Popular Downloads</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(r => r.featured).map((resource, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        {resource.category}
                      </span>
                      <span className="text-xs text-gray-600">{resource.downloads} downloads</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{resource.format} • {resource.size}</span>
                      <a 
                        href={resource.link}
                        className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
                        download
                      >
                        Download
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Resources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">📁 All Free Resources</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left px-6 py-4 font-semibold text-gray-900">Resource</th>
                        <th className="text-left px-6 py-4 font-semibold text-gray-900 hidden md:table-cell">Category</th>
                        <th className="text-left px-6 py-4 font-semibold text-gray-900 hidden lg:table-cell">Downloads</th>
                        <th className="text-left px-6 py-4 font-semibold text-gray-900 hidden sm:table-cell">Size</th>
                        <th className="text-center px-6 py-4 font-semibold text-gray-900">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {resources.map((resource, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-gray-900">{resource.title}</div>
                              <div className="text-sm text-gray-600">{resource.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {resource.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">
                            {resource.downloads}
                          </td>
                          <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">
                            {resource.size}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <a 
                              href={resource.link}
                              className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                              download
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Share These Resources</h2>
              <p className="text-xl mb-6 opacity-95">
                Help others learn Seerah by sharing these free resources with your community, 
                Islamic school, or social media.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=Free%20Seerah%20resources%20for%20everyone!%20Download%20PDFs,%20worksheets,%20and%20teaching%20materials%20at%20https://easyseerah.com/resources`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Share on Twitter
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://easyseerah.com/resources`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Share on Facebook
                </a>
                <button 
                  onClick={handleCopyLink}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* Attribution Section */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Using Our Resources?</h3>
              <p className="text-gray-700 mb-4">
                All resources are free to use for personal, educational, and non-commercial purposes. 
                We only ask that you:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Share EasySeerah.com with others who might benefit
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Keep the attribution/credit on PDFs intact
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  Link back to us if you share online
                </li>
              </ul>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}