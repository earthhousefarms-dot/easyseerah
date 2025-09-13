"use client";

import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Year of the Elephant",
    excerpt: "The miraculous event that occurred in the year of Prophet Muhammad's ﷺ birth",
    content: "In the year 570 CE, Abraha, the Abyssinian governor of Yemen, marched with a great army that included war elephants to destroy the Ka'bah. As they approached Mecca, Allah sent flocks of birds carrying stones that destroyed the entire army, protecting the sacred house.",
    category: "Miracles",
    readTime: "5 min",
    image: "🐘"
  },
  {
    id: 2,
    title: "The Splitting of the Chest",
    excerpt: "A purification miracle in the Prophet's childhood",
    content: "When Prophet Muhammad ﷺ was a young child living with his foster family, two angels came and opened his chest, removed his heart, washed it with Zamzam water, and filled it with wisdom and faith before returning it.",
    category: "Childhood",
    readTime: "4 min",
    image: "👼"
  },
  {
    id: 3,
    title: "The Black Stone Dispute",
    excerpt: "How wisdom prevented bloodshed among the tribes",
    content: "When the Quraysh were rebuilding the Ka'bah, they disputed over who would have the honor of placing the Black Stone. They agreed to let the next person to enter decide. Prophet Muhammad ﷺ entered and wisely placed the stone on a cloth, allowing all tribal leaders to carry it together.",
    category: "Wisdom",
    readTime: "3 min",
    image: "🕋"
  },
  {
    id: 4,
    title: "The Cave of Hira",
    excerpt: "The beginning of revelation",
    content: "Prophet Muhammad ﷺ would retreat to Cave Hira for contemplation. At age 40, Angel Jibreel appeared and commanded 'Read!' three times. Despite not knowing how to read, the Prophet ﷺ miraculously recited the first verses of the Quran.",
    category: "Revelation",
    readTime: "6 min",
    image: "📖"
  },
  {
    id: 5,
    title: "The Night Journey",
    excerpt: "A miraculous journey through space and time",
    content: "In one night, Prophet Muhammad ﷺ traveled from Mecca to Jerusalem on the Buraq, led prayer with all prophets at Al-Aqsa, then ascended through the seven heavens, meeting various prophets and receiving the command for five daily prayers.",
    category: "Miracles",
    readTime: "8 min",
    image: "🌙"
  },
  {
    id: 6,
    title: "The Spider and the Dove",
    excerpt: "Divine protection during the Hijrah",
    content: "During the migration to Medina, Prophet Muhammad ﷺ and Abu Bakr hid in Cave Thawr. Allah sent a spider to weave its web and a dove to build its nest at the entrance, making the pursuers believe no one had entered recently.",
    category: "Migration",
    readTime: "4 min",
    image: "🕷️"
  },
  {
    id: 7,
    title: "The Boy and the Date",
    excerpt: "Teaching honesty to children",
    content: "A mother called her child saying 'Come, I will give you something.' The Prophet ﷺ asked what she intended to give. She said 'Dates.' He ﷺ said: 'If you had not given him anything, it would have been recorded as a lie.' This teaches us to always be truthful, even with children.",
    category: "Character",
    readTime: "3 min",
    image: "🌴"
  },
  {
    id: 8,
    title: "The Crying Camel",
    excerpt: "Mercy to all creatures",
    content: "A camel came to the Prophet ﷺ with tears in its eyes, complaining. The Prophet ﷺ asked who owned it and told the owner: 'Do you not fear Allah regarding this animal? It complains that you starve it and overwork it.' This shows his mercy extended to all creatures.",
    category: "Mercy",
    readTime: "4 min",
    image: "🐪"
  },
  {
    id: 9,
    title: "The Old Woman's Question",
    excerpt: "Gentle humor with wisdom",
    content: "An old woman asked the Prophet ﷺ to pray she enters Paradise. He said: 'Old women don't enter Paradise.' She began crying. He then smiled and explained: 'You will enter as a young woman, for Allah will recreate everyone in their best form.' This shows his kind humor.",
    category: "Wisdom",
    readTime: "3 min",
    image: "👵"
  },
  {
    id: 10,
    title: "The Tree That Wept",
    excerpt: "Even trees loved the Prophet ﷺ",
    content: "The Prophet ﷺ used to give sermons leaning on a palm tree trunk. When a pulpit was built, the tree began crying like a child. The Prophet ﷺ went to it and embraced it until it calmed down. He said: 'It was crying because it missed hearing the remembrance of Allah.'",
    category: "Miracles",
    readTime: "4 min",
    image: "🌳"
  },
  {
    id: 11,
    title: "Feeding the Multitude",
    excerpt: "Blessing in food",
    content: "During the Battle of the Trench, Jabir invited the Prophet ﷺ for a meal meant for a few people. The Prophet ﷺ invited all 1000 companions. Miraculously, everyone ate their fill from one small pot of meat and bread, and food still remained. This was a miracle of blessing (barakah).",
    category: "Miracles",
    readTime: "5 min",
    image: "🍞"
  },
  {
    id: 12,
    title: "The Bedouin's Gift",
    excerpt: "Generosity beyond measure",
    content: "A Bedouin gave the Prophet ﷺ a small gift. In return, the Prophet ﷺ gave him many camels, goats, and supplies. The man returned to his tribe saying: 'Accept Islam! Muhammad gives like one who fears no poverty.' This was his way - always giving more than receiving.",
    category: "Generosity",
    readTime: "4 min",
    image: "🎁"
  }
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Inspiring Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beautiful stories from the life of Prophet Muhammad ﷺ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-center">{story.image}</div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                  {story.category}
                </span>
                <span className="text-sm text-gray-500">{story.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
              <p className="text-gray-600 line-clamp-2">{story.excerpt}</p>
              <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium">
                Read Story →
              </button>
            </div>
          ))}
        </div>

        {selectedStory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-5xl mb-4">{selectedStory.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedStory.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                      {selectedStory.category}
                    </span>
                    <span className="text-sm text-gray-500">{selectedStory.readTime} read</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedStory.content}</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
                  Share Story
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}