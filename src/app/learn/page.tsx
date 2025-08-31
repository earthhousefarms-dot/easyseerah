"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookReader from "@/components/BookReader";
import { easySeerahMakkahBook } from "@/data/easyseerah-book";

type LearningTrack = "journey" | "books";

const modules = [
  {
    id: 1,
    title: "Early Life & Childhood",
    description: "Learn about the Prophet's birth, early years, and the society he grew up in",
    lessons: 5,
    duration: "30 mins",
    level: "Beginner",
    color: "from-blue-500 to-indigo-600",
    progress: 0,
    topics: [
      "Birth in the Year of the Elephant",
      "Life with Halima Sa'diyya",
      "Becoming an Orphan",
      "Life with Abu Talib",
      "Early Character Traits"
    ]
  },
  {
    id: 2,
    title: "Revelation & Early Islam",
    description: "Discover how the revelation began and the early days of Islam",
    lessons: 6,
    duration: "45 mins",
    level: "Beginner",
    color: "from-purple-500 to-pink-600",
    progress: 0,
    topics: [
      "Cave of Hira",
      "First Revelation",
      "Early Believers",
      "Secret Preaching",
      "Public Declaration",
      "Persecution in Mecca"
    ]
  },
  {
    id: 3,
    title: "Migration & Medina",
    description: "The historic journey to Medina and establishment of the Muslim community",
    lessons: 7,
    duration: "50 mins",
    level: "Intermediate",
    color: "from-green-500 to-teal-600",
    progress: 0,
    topics: [
      "Planning the Hijrah",
      "The Journey",
      "Cave of Thawr",
      "Arrival in Medina",
      "Building the Mosque",
      "Constitution of Medina",
      "Brotherhood System"
    ]
  },
  {
    id: 4,
    title: "Major Battles",
    description: "Understanding the defensive battles and their significance",
    lessons: 5,
    duration: "40 mins",
    level: "Intermediate",
    color: "from-red-500 to-orange-600",
    progress: 0,
    topics: [
      "Battle of Badr",
      "Battle of Uhud",
      "Battle of the Trench",
      "Treaty of Hudaybiyyah",
      "Conquest of Mecca"
    ]
  },
  {
    id: 5,
    title: "Final Years & Legacy",
    description: "The Prophet's final years and lasting impact on humanity",
    lessons: 4,
    duration: "35 mins",
    level: "Advanced",
    color: "from-amber-500 to-yellow-600",
    progress: 0,
    topics: [
      "Farewell Pilgrimage",
      "Final Sermon",
      "Illness and Passing",
      "Legacy and Impact"
    ]
  }
];

const books = [
  {
    id: "easyseerah-makkah",
    title: "EasySeerah: The Makkah Story",
    author: "For Young Readers",
    description: "A beautifully written children's book covering Prophet Muhammad's ﷺ life in Makkah",
    chapters: 19,
    readingTime: "2-3 hours",
    level: "Children (6-12)",
    color: "from-purple-500 to-pink-600",
    progress: 0,
    available: true
  },
  {
    id: "martin-lings",
    title: "Muhammad: His Life Based on the Earliest Sources",
    author: "Martin Lings",
    description: "A comprehensive biography based on 8th and 9th century sources",
    chapters: 85,
    readingTime: "15-20 hours",
    level: "Advanced",
    color: "from-blue-600 to-indigo-700",
    progress: 0,
    available: false
  },
  {
    id: "shamail",
    title: "Shamail al-Tirmidhi",
    author: "Imam al-Tirmidhi",
    description: "A collection describing the physical appearance and character of Prophet Muhammad ﷺ",
    chapters: 56,
    readingTime: "8-10 hours",
    level: "Intermediate",
    color: "from-green-600 to-teal-700",
    progress: 0,
    available: false
  },
  {
    id: "sealed-nectar",
    title: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)",
    author: "Safi-ur-Rahman al-Mubarakpuri",
    description: "Award-winning biography covering the complete life of the Prophet ﷺ",
    chapters: 30,
    readingTime: "10-12 hours",
    level: "Intermediate",
    color: "from-amber-600 to-orange-700",
    progress: 0,
    available: false
  }
];

const quizQuestions = [
  {
    question: "In which year was Prophet Muhammad ﷺ born?",
    options: ["570 CE", "580 CE", "590 CE", "600 CE"],
    correct: 0
  },
  {
    question: "What was the Prophet ﷺ known as even before prophethood?",
    options: ["Al-Kareem", "Al-Amin", "Al-Hakim", "Al-Rashid"],
    correct: 1
  },
  {
    question: "Where did the Prophet ﷺ receive his first revelation?",
    options: ["Cave Thawr", "Mount Uhud", "Cave Hira", "Mount Safa"],
    correct: 2
  },
  {
    question: "Who was the first adult male to accept Islam?",
    options: ["Umar ibn Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib", "Abu Bakr"],
    correct: 3
  },
  {
    question: "In which year did the Hijrah to Medina take place?",
    options: ["620 CE", "622 CE", "624 CE", "626 CE"],
    correct: 1
  }
];

export default function LearnPage() {
  const [selectedTrack, setSelectedTrack] = useState<LearningTrack>("journey");
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedLessons: 0,
    completedChapters: 0,
    totalPoints: 0,
    streak: 3,
    level: "Beginner"
  });

  const handleQuizAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Learning Journey
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose your path: structured modules or complete books
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 inline-flex">
              <button
                onClick={() => setSelectedTrack("journey")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedTrack === "journey"
                    ? "bg-white text-emerald-700"
                    : "text-white hover:bg-white/10"
                }`}
              >
                📚 Journey Track
              </button>
              <button
                onClick={() => setSelectedTrack("books")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedTrack === "books"
                    ? "bg-white text-emerald-700"
                    : "text-white hover:bg-white/10"
                }`}
              >
                📖 Book Track
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-3xl font-bold">
                {selectedTrack === "journey" ? userProgress.completedLessons : userProgress.completedChapters}
              </div>
              <div className="text-sm opacity-90">
                {selectedTrack === "journey" ? "Lessons Completed" : "Chapters Read"}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-3xl font-bold">{userProgress.totalPoints}</div>
              <div className="text-sm opacity-90">Total Points</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-3xl font-bold">{userProgress.streak} 🔥</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-3xl font-bold">{userProgress.level}</div>
              <div className="text-sm opacity-90">Current Level</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedTrack === "journey" ? (
          <>
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">Learning Modules</h2>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Take Quick Quiz 📝
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <div
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
                >
                  <div className={`h-32 bg-gradient-to-br ${module.color} rounded-t-xl flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-1">Module {module.id}</div>
                      <div className="text-sm opacity-90">{module.level}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>📚 {module.lessons} lessons</span>
                      <span>⏱️ {module.duration}</span>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-600">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${module.color} h-2 rounded-full`}
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                      Start Learning →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Library</h2>
              <p className="text-gray-600">Study complete books with integrated quizzes and progress tracking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className={`bg-white rounded-xl shadow-lg ${
                    book.available ? "hover:shadow-xl cursor-pointer transform transition-all hover:scale-105" : "opacity-75"
                  }`}
                  onClick={() => book.available && setSelectedBook(book.id)}
                >
                  <div className={`h-40 bg-gradient-to-br ${book.color} rounded-t-xl p-6 text-white relative`}>
                    {!book.available && (
                      <div className="absolute inset-0 bg-black/30 rounded-t-xl flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">Coming Soon</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                    <p className="text-sm opacity-90">by {book.author}</p>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {book.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Chapters</span>
                        <p className="font-semibold text-gray-900">{book.chapters}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration</span>
                        <p className="font-semibold text-gray-900">{book.readingTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Level</span>
                        <p className="font-semibold text-gray-900">{book.level}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-600">{book.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${book.color} h-2 rounded-full`}
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button 
                      className={`w-full py-2 rounded-lg transition-colors ${
                        book.available
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!book.available}
                    >
                      {book.available ? "Start Reading →" : "Coming Soon"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedTrack === "journey" ? "Recommended Learning Path" : "Featured Book"}
          </h3>
          
          {selectedTrack === "journey" ? (
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              {modules.map((module, index) => (
                <div key={module.id} className="relative flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center text-white font-bold text-xl z-10`}>
                    {index + 1}
                  </div>
                  <div className="ml-8 flex-1">
                    <h4 className="font-semibold text-gray-900">{module.title}</h4>
                    <p className="text-sm text-gray-600">{module.lessons} lessons • {module.duration}</p>
                  </div>
                  {module.progress === 100 && (
                    <span className="text-green-500 text-2xl">✓</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <div className={`w-32 h-48 bg-gradient-to-br ${easySeerahMakkahBook.coverColor} rounded-lg flex items-center justify-center text-white`}>
                <div className="text-center">
                  <div className="text-5xl mb-2">📖</div>
                  <div className="text-xs font-semibold">EasySeerah</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{easySeerahMakkahBook.title}</h4>
                <p className="text-gray-600 mb-4">{easySeerahMakkahBook.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📚 {easySeerahMakkahBook.totalChapters} chapters</span>
                  <span>⏱️ {easySeerahMakkahBook.readingTime}</span>
                  <span>👶 {easySeerahMakkahBook.ageGroup}</span>
                </div>
                <button 
                  onClick={() => setSelectedBook("easyseerah-makkah")}
                  className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Start Reading
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className={`h-32 bg-gradient-to-br ${selectedModule.color} rounded-t-xl flex items-center justify-center relative`}>
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">{selectedModule.title}</div>
                <div className="text-sm opacity-90">{selectedModule.level} • {selectedModule.duration}</div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                {selectedModule.description}
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Topics Covered:
              </h4>
              
              <div className="space-y-3 mb-8">
                {selectedModule.topics.map((topic, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-semibold text-sm mr-4">
                      {index + 1}
                    </div>
                    <span className="flex-1 text-gray-800">{topic}</span>
                    <span className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                  Start Module
                </button>
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedBook && (
        <BookReader 
          bookId={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}

      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            {!quizComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Quick Quiz</h3>
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
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {quizQuestions[currentQuestion].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === index
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleQuizAnswer}
                  disabled={selectedAnswer === null}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedAnswer !== null
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
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
                  You scored {score} out of {quizQuestions.length}
                </p>
                <div className="mb-6">
                  <div className="text-lg font-semibold text-emerald-600 mb-2">
                    {score === quizQuestions.length ? "Perfect Score!" : 
                     score >= 4 ? "Excellent!" : 
                     score >= 3 ? "Good Job!" : 
                     "Keep Learning!"}
                  </div>
                  <p className="text-gray-600">
                    {score >= 4 
                      ? "You have a great understanding of the Seerah!"
                      : "Review the modules to improve your knowledge."}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setSelectedAnswer(null);
                      setScore(0);
                      setQuizComplete(false);
                    }}
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}