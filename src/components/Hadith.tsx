"use client";

import { useState } from "react";

const hadithCollections = [
  {
    id: 1,
    name: "Sahih Bukhari",
    author: "Imam Muhammad al-Bukhari",
    arabic: "صحيح البخاري",
    hadiths: "7,563",
    description: "The most authentic book after the Quran",
    status: "Available",
    link: "https://sunnah.com/bukhari"
  },
  {
    id: 2,
    name: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj",
    arabic: "صحيح مسلم",
    hadiths: "7,190",
    description: "Second most authentic hadith collection",
    status: "Available",
    link: "https://sunnah.com/muslim"
  },
  {
    id: 3,
    name: "Sunan Abu Dawood",
    author: "Imam Abu Dawood",
    arabic: "سنن أبي داود",
    hadiths: "5,274",
    description: "Focus on legal hadiths",
    status: "Available",
    link: "https://sunnah.com/abudawud"
  },
  {
    id: 4,
    name: "Jami' at-Tirmidhi",
    author: "Imam at-Tirmidhi",
    arabic: "جامع الترمذي",
    hadiths: "3,956",
    description: "Known for classification of hadith authenticity",
    status: "Available",
    link: "https://sunnah.com/tirmidhi"
  },
  {
    id: 5,
    name: "Sunan an-Nasa'i",
    author: "Imam an-Nasa'i",
    arabic: "سنن النسائي",
    hadiths: "5,758",
    description: "Known for strict authentication",
    status: "Available",
    link: "https://sunnah.com/nasai"
  },
  {
    id: 6,
    name: "Sunan Ibn Majah",
    author: "Imam Ibn Majah",
    arabic: "سنن ابن ماجه",
    hadiths: "4,341",
    description: "Sixth book of the Six Authentic Books",
    status: "Available",
    link: "https://sunnah.com/ibnmajah"
  }
];

const sampleHadiths = [
  {
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik",
    source: "Sahih Bukhari",
    topic: "Brotherhood"
  },
  {
    text: "The best of you are those who are best to their families.",
    narrator: "Aisha (RA)",
    source: "Jami' at-Tirmidhi",
    topic: "Family"
  },
  {
    text: "Seeking knowledge is an obligation upon every Muslim.",
    narrator: "Anas ibn Malik",
    source: "Sunan Ibn Majah",
    topic: "Knowledge"
  },
  {
    text: "The strong believer is better and more beloved to Allah than the weak believer.",
    narrator: "Abu Hurairah",
    source: "Sahih Muslim",
    topic: "Faith"
  },
  {
    text: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    narrator: "Abu Hurairah",
    source: "Sahih Bukhari",
    topic: "Speech"
  }
];

const hadithTopics = [
  { name: "Faith (Iman)", icon: "🤲", count: "500+" },
  { name: "Prayer (Salah)", icon: "🕌", count: "300+" },
  { name: "Charity (Zakat)", icon: "💝", count: "200+" },
  { name: "Fasting (Sawm)", icon: "🌙", count: "150+" },
  { name: "Pilgrimage (Hajj)", icon: "🕋", count: "100+" },
  { name: "Character (Akhlaq)", icon: "✨", count: "400+" },
  { name: "Family & Marriage", icon: "👨‍👩‍👧‍👦", count: "250+" },
  { name: "Business & Trade", icon: "⚖️", count: "180+" }
];

export default function Hadith() {
  const [selectedCollection, setSelectedCollection] = useState<typeof hadithCollections[0] | null>(null);
  const [selectedHadith, setSelectedHadith] = useState<typeof sampleHadiths[0] | null>(null);

  return (
    <section id="hadith" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hadith & Sunnah Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore authentic sayings and teachings of Prophet Muhammad ﷺ
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Six Authentic Books (Kutub al-Sittah)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hadithCollections.map((collection) => (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{collection.name}</h4>
                    <p className="text-indigo-600 text-sm">{collection.arabic}</p>
                  </div>
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                    {collection.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{collection.author}</p>
                <p className="text-gray-700 mb-3">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">📚 {collection.hadiths} hadiths</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sample Hadiths
            </h3>
            <div className="space-y-4">
              {sampleHadiths.map((hadith, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedHadith(hadith)}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer"
                >
                  <p className="text-gray-700 mb-2 italic">&ldquo;{hadith.text}&rdquo;</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">📖 {hadith.source}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                      {hadith.topic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Browse by Topics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hadithTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">{topic.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{topic.name}</p>
                      <p className="text-sm text-gray-500">{topic.count} hadiths</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Understanding Hadith Sciences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📊 Classification</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Sahih (Authentic)</li>
                <li>• Hasan (Good)</li>
                <li>• Da&apos;if (Weak)</li>
                <li>• Mawdu&apos; (Fabricated)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔗 Chain of Narration</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Mutawatir (Mass transmitted)</li>
                <li>• Ahad (Single chain)</li>
                <li>• Isnad (Chain verification)</li>
                <li>• Matn (Text analysis)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📚 Study Resources</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Online databases</li>
                <li>• Scholarly commentaries</li>
                <li>• Authentication tools</li>
                <li>• Translation services</li>
              </ul>
            </div>
          </div>
        </div>

        {selectedCollection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCollection.name}</h3>
                  <p className="text-indigo-600">{selectedCollection.arabic}</p>
                </div>
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 mb-4">{selectedCollection.description}</p>
              <p className="text-gray-600 mb-6">
                Compiled by <strong>{selectedCollection.author}</strong> containing{" "}
                <strong>{selectedCollection.hadiths}</strong> authentic narrations.
              </p>
              <a
                href={selectedCollection.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-block"
              >
                Read Online →
              </a>
            </div>
          </div>
        )}

        {selectedHadith && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-gray-900">Hadith Details</h3>
                <button
                  onClick={() => setSelectedHadith(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">&ldquo;{selectedHadith.text}&rdquo;</p>
              <div className="space-y-2 text-sm">
                <p><strong>Narrator:</strong> {selectedHadith.narrator}</p>
                <p><strong>Source:</strong> {selectedHadith.source}</p>
                <p><strong>Topic:</strong> {selectedHadith.topic}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}