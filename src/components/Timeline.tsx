"use client";

import { useState } from "react";

const timelineEvents = [
  {
    year: "570 CE",
    title: "Birth of Prophet Muhammad ﷺ",
    description: "Born in Mecca in the Year of the Elephant to Abdullah and Aminah",
    category: "early-life",
    icon: "🌟"
  },
  {
    year: "575 CE",
    title: "Life with Banu Sa'ad",
    description: "Spent early childhood with Halima Sa'diyya in the desert",
    category: "early-life",
    icon: "🏜️"
  },
  {
    year: "578 CE",
    title: "Death of Mother Aminah",
    description: "Became an orphan and was cared for by grandfather Abdul Muttalib",
    category: "early-life",
    icon: "🤲"
  },
  {
    year: "595 CE",
    title: "Marriage to Khadijah",
    description: "Married Khadijah bint Khuwaylid, a successful businesswoman",
    category: "family",
    icon: "💍"
  },
  {
    year: "610 CE",
    title: "First Revelation",
    description: "Received the first revelation from Angel Jibreel in Cave Hira",
    category: "revelation",
    icon: "📖"
  },
  {
    year: "613 CE",
    title: "Public Preaching Begins",
    description: "Started calling people to Islam publicly in Mecca",
    category: "dawah",
    icon: "📢"
  },
  {
    year: "615 CE",
    title: "Migration to Abyssinia",
    description: "First group of Muslims migrated to Abyssinia for safety",
    category: "migration",
    icon: "🚢"
  },
  {
    year: "619 CE",
    title: "Year of Sorrow",
    description: "Lost both wife Khadijah and uncle Abu Talib",
    category: "trials",
    icon: "😢"
  },
  {
    year: "620 CE",
    title: "Night Journey (Isra & Mi'raj)",
    description: "Miraculous journey to Jerusalem and ascension to the heavens",
    category: "miracle",
    icon: "🌙"
  },
  {
    year: "622 CE",
    title: "Hijrah to Medina",
    description: "Migration to Medina marking the start of the Islamic calendar",
    category: "migration",
    icon: "🕌"
  },
  {
    year: "624 CE",
    title: "Battle of Badr",
    description: "First major battle, Muslims victorious despite being outnumbered",
    category: "battle",
    icon: "⚔️"
  },
  {
    year: "625 CE",
    title: "Battle of Uhud",
    description: "Second major battle with important lessons in obedience",
    category: "battle",
    icon: "🛡️"
  },
  {
    year: "627 CE",
    title: "Battle of the Trench",
    description: "Successful defense of Medina using strategic trench warfare",
    category: "battle",
    icon: "🏰"
  },
  {
    year: "628 CE",
    title: "Treaty of Hudaybiyyah",
    description: "Peace treaty with Meccans that led to spread of Islam",
    category: "treaty",
    icon: "📜"
  },
  {
    year: "630 CE",
    title: "Conquest of Mecca",
    description: "Peaceful conquest of Mecca and forgiveness of enemies",
    category: "victory",
    icon: "🕋"
  },
  {
    year: "632 CE",
    title: "Farewell Pilgrimage",
    description: "Final pilgrimage and sermon with universal message of equality",
    category: "pilgrimage",
    icon: "🕊️"
  },
  {
    year: "632 CE",
    title: "Passing of the Prophet ﷺ",
    description: "Returned to Allah at age 63 in Medina",
    category: "passing",
    icon: "⭐"
  }
];

const categories = [
  { id: "all", name: "All Events", color: "bg-gray-500" },
  { id: "early-life", name: "Early Life", color: "bg-blue-500" },
  { id: "family", name: "Family", color: "bg-pink-500" },
  { id: "revelation", name: "Revelation", color: "bg-purple-500" },
  { id: "dawah", name: "Dawah", color: "bg-green-500" },
  { id: "migration", name: "Migration", color: "bg-yellow-500" },
  { id: "battle", name: "Battles", color: "bg-red-500" },
  { id: "treaty", name: "Treaties", color: "bg-indigo-500" },
  { id: "victory", name: "Victory", color: "bg-emerald-500" },
  { id: "pilgrimage", name: "Pilgrimage", color: "bg-teal-500" },
  { id: "trials", name: "Trials", color: "bg-orange-500" },
  { id: "miracle", name: "Miracles", color: "bg-cyan-500" },
  { id: "passing", name: "Passing", color: "bg-gray-600" }
];

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const filteredEvents = selectedCategory === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the major events in Prophet Muhammad&apos;s ﷺ life journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400"></div>
          
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8"
                }`}
              >
                <div
                  onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{event.icon}</span>
                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className={`text-gray-600 ${expandedEvent === index ? "" : "line-clamp-2"}`}>
                    {event.description}
                  </p>
                  {expandedEvent === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Learn More →
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}