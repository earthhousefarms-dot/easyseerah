"use client";

import { useState } from "react";

const sahabaList = [
  {
    id: 1,
    name: "Abu Bakr As-Siddiq",
    title: "The Truthful",
    period: "573-634 CE",
    description: "First adult male to accept Islam, closest companion of the Prophet ﷺ, first Caliph",
    achievements: [
      "First to believe in Isra and Mi'raj without hesitation",
      "Accompanied Prophet ﷺ during Hijrah",
      "Donated all his wealth for Islam",
      "Led the Muslims after Prophet's passing"
    ],
    quote: "If I were to take a close friend other than my Lord, I would have taken Abu Bakr.",
    category: "Rashidun"
  },
  {
    id: 2,
    name: "Umar Ibn Al-Khattab",
    title: "Al-Farooq",
    period: "584-644 CE",
    description: "Second Caliph, known for his justice and strength, expanded the Muslim empire",
    achievements: [
      "Established the Islamic calendar",
      "Created administrative systems",
      "Conquered Persian and Byzantine territories",
      "Known for justice even with non-Muslims"
    ],
    quote: "I fear the day when the disbelievers are proud of their falsehood, and the Muslims are shy of their faith.",
    category: "Rashidun"
  },
  {
    id: 3,
    name: "Uthman Ibn Affan",
    title: "Dhun-Nurayn",
    period: "576-656 CE",
    description: "Third Caliph, compiled the Quran, known for his generosity and modesty",
    achievements: [
      "Compiled the standardized Quran",
      "Equipped the army of hardship",
      "Purchased well for Muslims",
      "Married two daughters of the Prophet ﷺ"
    ],
    quote: "The most truthful speech is the Book of Allah.",
    category: "Rashidun"
  },
  {
    id: 4,
    name: "Ali Ibn Abi Talib",
    title: "The Lion of Allah",
    period: "600-661 CE",
    description: "Fourth Caliph, cousin and son-in-law of Prophet ﷺ, known for knowledge and bravery",
    achievements: [
      "First youth to accept Islam",
      "Slept in Prophet's bed during Hijrah",
      "Hero of Badr, Uhud, and Khaybar",
      "Gate of knowledge in Islam"
    ],
    quote: "Do not be a slave to others when Allah has created you free.",
    category: "Rashidun"
  },
  {
    id: 5,
    name: "Bilal Ibn Rabah",
    title: "The Muezzin",
    period: "580-640 CE",
    description: "First muezzin of Islam, former slave who became a symbol of equality in Islam",
    achievements: [
      "Endured severe torture for his faith",
      "First to call Adhan",
      "Participated in all major battles",
      "Symbol of racial equality in Islam"
    ],
    quote: "Ahad, Ahad (One, One) - his words under torture",
    category: "Early Muslims"
  },
  {
    id: 6,
    name: "Khadijah Bint Khuwaylid",
    title: "Mother of Believers",
    period: "555-619 CE",
    description: "First wife of Prophet ﷺ, first to accept Islam, successful businesswoman",
    achievements: [
      "First person to accept Islam",
      "Supported Prophet ﷺ emotionally and financially",
      "Mother of Fatima (RA)",
      "Sacrificed wealth for Islam"
    ],
    quote: "Allah will never disgrace you. You keep good relations, help the poor, serve guests generously.",
    category: "Women"
  },
  {
    id: 7,
    name: "Aisha Bint Abu Bakr",
    title: "The Scholar",
    period: "614-678 CE",
    description: "Wife of Prophet ﷺ, greatest female scholar of Islam, narrated many hadiths",
    achievements: [
      "Narrated 2,210 hadiths",
      "Taught many companions",
      "Expert in Quran, Hadith, and Fiqh",
      "Known for her intelligence and memory"
    ],
    quote: "The best women are the riders of camels; the women of Quraysh.",
    category: "Women"
  },
  {
    id: 8,
    name: "Hamza Ibn Abdul-Muttalib",
    title: "Lion of Allah",
    period: "570-625 CE",
    description: "Uncle of Prophet ﷺ, fierce warrior, martyr of Uhud",
    achievements: [
      "Protected Prophet ﷺ from Quraysh",
      "Hero of Battle of Badr",
      "Martyred at Uhud",
      "Known for incredible bravery"
    ],
    quote: "I am the lion of Allah and His Messenger!",
    category: "Warriors"
  }
];

const sahabaQuiz = [
  {
    question: "Who was the first adult male to accept Islam?",
    options: ["Umar Ibn Al-Khattab", "Abu Bakr As-Siddiq", "Ali Ibn Abi Talib", "Uthman Ibn Affan"],
    correct: 1
  },
  {
    question: "Which Sahabi was known as 'Al-Farooq'?",
    options: ["Abu Bakr", "Ali", "Umar", "Hamza"],
    correct: 2
  },
  {
    question: "Who compiled the standardized Quran?",
    options: ["Abu Bakr", "Umar", "Uthman", "Ali"],
    correct: 2
  },
  {
    question: "Who was the first muezzin of Islam?",
    options: ["Abdullah Ibn Masud", "Bilal Ibn Rabah", "Zaid Ibn Haritha", "Salman Al-Farisi"],
    correct: 1
  },
  {
    question: "Which female Sahabi narrated the most hadiths?",
    options: ["Khadijah", "Fatima", "Aisha", "Hafsa"],
    correct: 2
  }
];

export default function Sahaba() {
  const [selectedSahabi, setSelectedSahabi] = useState<typeof sahabaList[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const categories = ["all", "Rashidun", "Early Muslims", "Women", "Warriors"];
  
  const filteredSahaba = selectedCategory === "all" 
    ? sahabaList 
    : sahabaList.filter(s => s.category === selectedCategory);

  const handleQuizAnswer = () => {
    if (selectedAnswer === sahabaQuiz[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < sahabaQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizComplete(false);
    setShowQuiz(false);
  };

  return (
    <section id="sahaba" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Companions of the Prophet ﷺ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the noble Sahaba who supported and spread the message of Islam
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat === "all" ? "All Companions" : cat}
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Test Your Knowledge 📝
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSahaba.map((sahabi) => (
            <div
              key={sahabi.id}
              onClick={() => setSelectedSahabi(sahabi)}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{sahabi.name}</h3>
                  <p className="text-emerald-600 font-medium">{sahabi.title}</p>
                </div>
                <span className="text-sm text-gray-500">{sahabi.period}</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{sahabi.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                  {sahabi.category}
                </span>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedSahabi && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedSahabi.name}</h3>
                  <p className="text-emerald-600 font-medium text-lg">{selectedSahabi.title}</p>
                  <p className="text-gray-500">{selectedSahabi.period}</p>
                </div>
                <button
                  onClick={() => setSelectedSahabi(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedSahabi.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {selectedSahabi.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {selectedSahabi.quote && (
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <p className="text-gray-700 italic">"{selectedSahabi.quote}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {showQuiz && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-8">
              {!quizComplete ? (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Sahaba Quiz</h3>
                      <button
                        onClick={resetQuiz}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full transition-all"
                        style={{ width: `${((currentQuestion + 1) / sahabaQuiz.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {sahabaQuiz[currentQuestion].question}
                    </h4>
                    
                    <div className="space-y-3">
                      {sahabaQuiz[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedAnswer(index)}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                            selectedAnswer === index
                              ? "border-emerald-600 bg-emerald-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleQuizAnswer}
                    disabled={selectedAnswer === null}
                    className={`w-full py-3 rounded-lg font-semibold ${
                      selectedAnswer !== null
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {currentQuestion < sahabaQuiz.length - 1 ? "Next Question" : "Finish Quiz"}
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {score >= 4 ? "🎉" : score >= 3 ? "👍" : "💪"}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-xl text-gray-700 mb-6">
                    You scored {score} out of {sahabaQuiz.length}
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}