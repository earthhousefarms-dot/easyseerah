export default function Lessons() {
  const lessons = [
    {
      title: "Patience in Adversity",
      description: "The Prophet ﷺ faced numerous trials including loss of loved ones, persecution, and rejection, yet remained patient and steadfast.",
      icon: "🌱",
      verses: ["Indeed, with hardship comes ease - Quran 94:6"]
    },
    {
      title: "Kindness to All",
      description: "He was known as 'Mercy to all worlds' and showed compassion even to those who opposed him.",
      icon: "❤️",
      verses: ["We have not sent you except as a mercy to the worlds - Quran 21:107"]
    },
    {
      title: "Truthfulness",
      description: "Known as Al-Amin (The Trustworthy) even before prophethood, he never spoke a lie.",
      icon: "✨",
      verses: ["O you who believe! Fear Allah and be with those who are truthful - Quran 9:119"]
    },
    {
      title: "Forgiveness",
      description: "At the conquest of Mecca, he forgave all his enemies who had persecuted him for years.",
      icon: "🕊️",
      verses: ["The good deed and the evil deed are not alike. Repel evil with good - Quran 41:34"]
    },
    {
      title: "Humility",
      description: "Despite being a prophet and leader, he lived simply, mended his own clothes, and served his family.",
      icon: "🤲",
      verses: ["And the servants of the Most Merciful walk upon the earth humbly - Quran 25:63"]
    },
    {
      title: "Justice and Equality",
      description: "He established that all humans are equal regardless of race, color, or status.",
      icon: "⚖️",
      verses: ["O mankind, We created you from male and female and made you peoples and tribes that you may know one another - Quran 49:13"]
    },
    {
      title: "Excellence in Work",
      description: "He taught us to perfect whatever we do. 'Allah loves when one does a job, to do it with excellence.'",
      icon: "⭐",
      verses: ["Indeed, Allah loves those who do good - Quran 2:195"]
    },
    {
      title: "Family Values",
      description: "The best among you is the one who is best to his family. He helped with housework and played with children.",
      icon: "👨‍👩‍👧‍👦",
      verses: ["And live with them in kindness - Quran 4:19"]
    },
    {
      title: "Seeking Knowledge",
      description: "He emphasized learning from cradle to grave. 'Seeking knowledge is obligatory upon every Muslim.'",
      icon: "📚",
      verses: ["Say: Are those who know equal to those who do not know? - Quran 39:9"]
    }
  ];

  return (
    <section id="lessons" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Timeless Lessons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wisdom from the Prophet&apos;s ﷺ life applicable to our modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{lesson.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {lesson.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {lesson.description}
              </p>
              {lesson.verses.map((verse, vIndex) => (
                <p key={vIndex} className="text-sm text-emerald-600 italic">
                  {verse}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Learn the Seerah?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Strengthen Your Faith</h4>
                <p className="text-gray-600">Understanding the Prophet&apos;s life deepens your connection with Islam</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Perfect Role Model</h4>
                <p className="text-gray-600">Learn from the best example for all aspects of life</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Historical Understanding</h4>
                <p className="text-gray-600">Gain context for the revelation of the Quran</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Practical Guidance</h4>
                <p className="text-gray-600">Apply prophetic wisdom to modern challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}