"use client";

import { useState } from "react";

const tourLocations = [
  {
    id: "halima",
    name: "Halima's Village",
    arabicName: "قرية حليمة السعدية",
    region: "Banu Sa'd Territory",
    coordinates: { lat: 21.2, lng: 40.7 },
    period: "Childhood (Age 0-5)",
    significance: "Where Prophet Muhammad ﷺ spent his early childhood",
    image: "🏘️",
    color: "from-amber-500 to-orange-600",
    stories: [
      {
        title: "The Blessed Foster Mother",
        content: "Halima al-Sa'diyya was chosen to be the foster mother of Prophet Muhammad ﷺ. Despite initial hesitation due to his orphan status, she accepted him and found immense blessings in her household."
      },
      {
        title: "The Opening of the Chest",
        content: "At age 4, while playing with other children, two angels came and opened the Prophet's chest, removed his heart, washed it with Zamzam water, and returned it purified."
      },
      {
        title: "Blessings in the Desert",
        content: "During the Prophet's stay with Halima, her family experienced unprecedented prosperity - their animals gave more milk, their land became fertile, and peace prevailed in their household."
      }
    ],
    facts: [
      "Located in the desert region of Banu Sa'd tribe",
      "Prophet ﷺ learned pure Arabic dialect here",
      "Spent approximately 4-5 years in the desert",
      "His foster siblings: Abdullah, Anisa, and Shayma",
      "Halima visited Prophet ﷺ after Prophethood"
    ]
  },
  {
    id: "makkah",
    name: "Makkah",
    arabicName: "مكة المكرمة",
    region: "Hijaz",
    coordinates: { lat: 21.4225, lng: 39.8262 },
    period: "Birth to Migration (53 years)",
    significance: "Birthplace and home of Prophet Muhammad ﷺ",
    image: "🕋",
    color: "from-gray-700 to-gray-900",
    stories: [
      {
        title: "The Year of the Elephant",
        content: "Prophet Muhammad ﷺ was born in the Year of the Elephant (570 CE), when Abraha's army with elephants was miraculously destroyed by birds carrying stones."
      },
      {
        title: "The First Revelation",
        content: "At age 40, in the Cave of Hira on Mount Noor, Angel Jibreel brought the first revelation: 'Read in the name of your Lord who created.'"
      },
      {
        title: "The Night Journey",
        content: "From Masjid al-Haram, the Prophet ﷺ was taken on the miraculous night journey (Isra and Mi'raj) to Jerusalem and then to the heavens."
      }
    ],
    facts: [
      "Home to the Holy Kaaba - Qibla of Muslims",
      "Contains Mount Hira where first revelation occurred",
      "Site of Dar al-Arqam - first Islamic school",
      "Valley of Abu Talib - 3 years of boycott",
      "Population during Prophet's time: ~10,000"
    ]
  },
  {
    id: "taif",
    name: "Taif",
    arabicName: "الطائف",
    region: "Hijaz Mountains",
    coordinates: { lat: 21.2703, lng: 40.4158 },
    period: "Year of Sorrow (619 CE)",
    significance: "Site of the Prophet's most difficult trial",
    image: "🏔️",
    color: "from-green-600 to-teal-700",
    stories: [
      {
        title: "The Journey to Taif",
        content: "After losing his uncle Abu Talib and wife Khadijah, the Prophet ﷺ walked to Taif seeking support. The journey took about 60 km on foot through mountainous terrain."
      },
      {
        title: "The Rejection and Stoning",
        content: "The leaders of Taif not only rejected his message but set street children to stone him until his shoes filled with blood. Despite this, he refused to curse them."
      },
      {
        title: "The Garden of Utbah",
        content: "Taking refuge in a garden, the Prophet ﷺ made his famous dua of distress. The Christian slave Addas recognized his prophethood and kissed his hands and feet."
      }
    ],
    facts: [
      "Located 60 km southeast of Makkah",
      "Known for its cool climate and gardens",
      "The Prophet ﷺ walked there with Zayd ibn Harithah",
      "Angel Jibreel offered to destroy the city",
      "Prophet ﷺ hoped their descendants would accept Islam"
    ]
  },
  {
    id: "hudaybiyah",
    name: "Hudaybiyah",
    arabicName: "الحديبية",
    region: "Outskirts of Makkah",
    coordinates: { lat: 21.4411, lng: 39.7282 },
    period: "6th Year of Hijrah",
    significance: "Site of the historic peace treaty",
    image: "📜",
    color: "from-blue-600 to-indigo-700",
    stories: [
      {
        title: "The Dream and Journey",
        content: "The Prophet ﷺ saw a dream of performing Umrah. He set out with 1,400 companions in Ihram, unarmed except for travel swords, demonstrating peaceful intentions."
      },
      {
        title: "The Pledge of Ridwan",
        content: "When rumors spread that Uthman was killed, the Prophet ﷺ took a pledge under a tree. Allah revealed: 'Indeed, Allah was pleased with the believers when they pledged allegiance to you under the tree.'"
      },
      {
        title: "The Treaty Terms",
        content: "Despite seemingly unfavorable terms, the Prophet ﷺ accepted the treaty. It became a 'Manifest Victory' leading to the peaceful conquest of Makkah two years later."
      }
    ],
    facts: [
      "Located 20 km from Makkah",
      "Treaty signed in Dhul Qa'dah, 6 AH",
      "10-year peace agreement with Quraysh",
      "Led to 10,000+ converting to Islam in 2 years",
      "Site of Bayah Ridwan under the tree"
    ]
  },
  {
    id: "badr",
    name: "Badr",
    arabicName: "بدر",
    region: "Between Makkah and Madinah",
    coordinates: { lat: 23.7564, lng: 38.7784 },
    period: "2nd Year of Hijrah",
    significance: "First major battle of Islam",
    image: "⚔️",
    color: "from-red-600 to-rose-700",
    stories: [
      {
        title: "The Outnumbered Army",
        content: "313 Muslims faced 1,000 well-equipped Makkans. The Prophet ﷺ spent the night in prayer: 'O Allah, if this small group perishes, You will not be worshiped on earth.'"
      },
      {
        title: "Divine Assistance",
        content: "Allah sent angels to fight alongside the believers. The Prophet ﷺ threw a handful of dust saying 'May their faces be disfigured!' and it reached every enemy soldier."
      },
      {
        title: "The Prisoners of War",
        content: "The Prophet ﷺ treated prisoners with unprecedented mercy. Those who could teach reading to 10 Muslim children were freed. This started the tradition of education through captives."
      }
    ],
    facts: [
      "Located 130 km southwest of Madinah",
      "Fought on 17th Ramadan, 2 AH",
      "Muslims: 313 vs Quraysh: 1,000",
      "14 Muslims martyred, 70 Makkans killed",
      "First time prisoners of war were treated humanely"
    ]
  },
  {
    id: "uhud",
    name: "Mount Uhud",
    arabicName: "جبل أحد",
    region: "North of Madinah",
    coordinates: { lat: 24.5014, lng: 39.6111 },
    period: "3rd Year of Hijrah",
    significance: "Site of the second major battle",
    image: "⛰️",
    color: "from-purple-600 to-pink-700",
    stories: [
      {
        title: "The Initial Victory",
        content: "Muslims initially defeated the Makkan army. However, when archers left their positions for spoils of war, Khalid ibn Walid's cavalry attacked from behind."
      },
      {
        title: "The Prophet's Injury",
        content: "The Prophet ﷺ was injured - his tooth was broken and face bloodied. He said: 'How can a people prosper who injured their Prophet's face while he calls them to their Lord?'"
      },
      {
        title: "Hamza's Martyrdom",
        content: "The Prophet's beloved uncle Hamza was martyred by Wahshi. The Prophet ﷺ was deeply grieved and said: 'There will never be a day when I will be struck with a calamity like yours.'"
      }
    ],
    facts: [
      "Located 5 km north of Madinah",
      "Fought on 7th Shawwal, 3 AH",
      "Muslims: 700 vs Quraysh: 3,000",
      "70 Muslims martyred including Hamza",
      "Lesson: importance of following orders"
    ]
  },
  {
    id: "madinah",
    name: "Madinah",
    arabicName: "المدينة المنورة",
    region: "Hijaz",
    coordinates: { lat: 24.4686, lng: 39.6142 },
    period: "Migration to Death (10 years)",
    significance: "City of the Prophet and first Islamic state",
    image: "🕌",
    color: "from-emerald-600 to-green-700",
    stories: [
      {
        title: "The Warm Welcome",
        content: "Upon arrival, the entire city came out singing 'Tala'al Badru Alayna'. Every family wanted to host the Prophet ﷺ. He let his camel choose where to stop."
      },
      {
        title: "Building the Mosque",
        content: "The Prophet ﷺ personally participated in building Masjid Nabawi, carrying bricks and stones. He established it as the center of the Islamic state."
      },
      {
        title: "The Brotherhood",
        content: "He established brotherhood between Muhajirun and Ansar. The Ansar shared their wealth so generously that revelation came praising them and limiting inheritance to blood relatives."
      }
    ],
    facts: [
      "Originally called Yathrib",
      "Renamed 'Madinat un-Nabi' (City of the Prophet)",
      "Site of Prophet's Mosque and grave",
      "First Islamic constitution written here",
      "Population grew from 10,000 to 30,000 in Prophet's time"
    ]
  }
];

export default function SeerahTours() {
  const [selectedLocation, setSelectedLocation] = useState<typeof tourLocations[0] | null>(null);
  const [showMap, setShowMap] = useState(false);

  const downloadPDF = (location: typeof tourLocations[0]) => {
    const content = `
EASYSEERAH TOURS - FACT SHEET

${location.name} (${location.arabicName})
=====================================

LOCATION: ${location.region}
PERIOD: ${location.period}
SIGNIFICANCE: ${location.significance}

KEY STORIES:
${location.stories.map(s => `\n${s.title}\n${s.content}`).join('\n')}

IMPORTANT FACTS:
${location.facts.map(f => `• ${f}`).join('\n')}

=====================================
Visit easyseerah.com for more information
Follow us @easyseerah on social media
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `easyseerah-${location.id}-factsheet.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seerah Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Journey through the blessed places of the Prophet&apos;s ﷺ life with virtual tours and downloadable guides
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Interactive Tour Map</h3>
            <button
              onClick={() => setShowMap(!showMap)}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              {showMap ? "Hide Map" : "View Map"} 🗺️
            </button>
          </div>

          {showMap && (
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tourLocations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className="text-center cursor-pointer hover:scale-110 transition-transform"
                  >
                    <div className="text-4xl mb-2">{loc.image}</div>
                    <p className="text-sm font-medium">{loc.name}</p>
                    <p className="text-xs text-gray-600">📍 {loc.region}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => setSelectedLocation(location)}
            >
              <div className={`h-32 bg-gradient-to-br ${location.color} flex items-center justify-center`}>
                <span className="text-6xl">{location.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.arabicName}</p>
                <p className="text-gray-700 mb-3">{location.significance}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">📍 {location.region}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPDF(location);
                    }}
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    Download PDF ↓
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 mb-2">Virtual Tours</h3>
            <p className="text-gray-600">Experience 360° views and detailed narratives of each location</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-gray-900 mb-2">Study Guides</h3>
            <p className="text-gray-600">Download comprehensive PDF guides for offline reading</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="font-bold text-gray-900 mb-2">Audio Narrations</h3>
            <p className="text-gray-600">Listen to stories and descriptions of each blessed location</p>
          </div>
        </div>

        {selectedLocation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedLocation.name}</h3>
                  <p className="text-xl text-gray-600">{selectedLocation.arabicName}</p>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className={`h-48 bg-gradient-to-br ${selectedLocation.color} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-8xl">{selectedLocation.image}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">📍 Region</p>
                  <p className="font-semibold">{selectedLocation.region}</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">📅 Historical Period</p>
                  <p className="font-semibold">{selectedLocation.period}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Historical Stories</h4>
                <div className="space-y-4">
                  {selectedLocation.stories.map((story, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2">{story.title}</h5>
                      <p className="text-gray-700">{story.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Important Facts</h4>
                <ul className="space-y-2">
                  {selectedLocation.facts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => downloadPDF(selectedLocation)}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Download Fact Sheet 📄
                </button>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}