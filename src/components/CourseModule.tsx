"use client";

import { useState } from "react";

interface Lesson {
  id: number;
  title: string;
  content: string[];
  keyPoints: string[];
  quiz?: {
    question: string;
    options: string[];
    correct: number;
  };
}

interface CourseModuleProps {
  module: {
    id: number;
    title: string;
    description: string;
    lessons: number;
    duration: string;
    level: string;
    color: string;
    topics: string[];
  };
  onClose: () => void;
}

// Actual lesson content for each module
const moduleLessons: Record<number, Lesson[]> = {
  1: [ // Early Life & Childhood
    {
      id: 1,
      title: "Birth in the Year of the Elephant",
      content: [
        "Prophet Muhammad ﷺ was born in Mecca in the year 570 CE, known as the Year of the Elephant. This year got its name from a significant event - when Abraha, the Christian governor of Yemen, marched with an army that included war elephants to destroy the Kaaba.",
        "Allah protected the Kaaba by sending flocks of birds (Ababil) carrying small stones that destroyed Abraha's army. This miraculous event is mentioned in Surah Al-Fil in the Quran.",
        "Muhammad ﷺ was born on Monday, the 12th of Rabi' al-Awwal. His father, Abdullah, had passed away before his birth, making him an orphan from the start. His mother was Aminah bint Wahb, a noble woman of the Quraysh tribe.",
        "At birth, miraculous events occurred: a light shone from his mother that illuminated the palaces of Syria, idols fell in the Kaaba, and the fire of the Persians that had burned for 1000 years was extinguished."
      ],
      keyPoints: [
        "Born in 570 CE in Mecca",
        "Father Abdullah died before his birth",
        "Mother was Aminah bint Wahb",
        "Born in the Year of the Elephant",
        "Miraculous signs accompanied his birth"
      ],
      quiz: {
        question: "What event gave the 'Year of the Elephant' its name?",
        options: [
          "Elephants were brought to Mecca as gifts",
          "Abraha's army with elephants tried to destroy the Kaaba",
          "The Prophet ﷺ rode an elephant",
          "Elephants were first seen in Arabia"
        ],
        correct: 1
      }
    },
    {
      id: 2,
      title: "Life with Halima Sa'diyya",
      content: [
        "As was the custom among the noble Arabs, infant Muhammad ﷺ was sent to the desert to be nursed and raised in the pure environment away from the diseases of the city. This would also help him learn pure Arabic.",
        "Halima Sa'diyya from the tribe of Banu Sa'd became his foster mother. Initially reluctant because he was an orphan (and orphans couldn't provide much payment), she took him when no other child was available.",
        "From the moment Halima took Muhammad ﷺ, her life was filled with blessings (barakah). Her weak camel suddenly gave abundant milk, her goats produced more milk, and her family prospered.",
        "At age 4, while playing with other children, two angels came and opened his chest, removed his heart, washed it with Zamzam water, removed a black clot (Satan's portion), and filled it with wisdom and faith. This purification prepared him for prophethood."
      ],
      keyPoints: [
        "Sent to desert as per Arab custom",
        "Raised by Halima Sa'diyya",
        "Brought blessings to Halima's family",
        "Chest was opened and heart purified at age 4",
        "Learned pure Arabic in the desert"
      ],
      quiz: {
        question: "Why were Arab children sent to the desert?",
        options: [
          "To learn hunting",
          "To escape enemies",
          "For pure environment and to learn pure Arabic",
          "To tend to sheep"
        ],
        correct: 2
      }
    },
    {
      id: 3,
      title: "Becoming an Orphan",
      content: [
        "At age 6, Muhammad's ﷺ mother Aminah took him to Yathrib (later Medina) to visit relatives and his father's grave. On the return journey, she fell ill at a place called Abwa and passed away.",
        "The young Muhammad ﷺ was now a complete orphan - having lost both parents. His faithful servant, Umm Ayman (Barakah), brought him back to Mecca to his grandfather, Abdul Muttalib.",
        "Abdul Muttalib, the chief of Quraysh, loved Muhammad ﷺ dearly. He would allow him to sit on his special mat near the Kaaba, where even his own sons couldn't sit. He would say, 'Leave my grandson, for by Allah, he has a great future.'",
        "Abdul Muttalib cared for him for two years with great love and attention. However, when Muhammad ﷺ was 8 years old, his grandfather also passed away, leaving him in the care of his uncle, Abu Talib."
      ],
      keyPoints: [
        "Mother Aminah died when he was 6",
        "Raised by grandfather Abdul Muttalib",
        "Grandfather showed him special love and attention",
        "Abdul Muttalib died when he was 8",
        "Then raised by uncle Abu Talib"
      ],
      quiz: {
        question: "How old was Muhammad ﷺ when he became a complete orphan?",
        options: [
          "4 years old",
          "6 years old",
          "8 years old",
          "10 years old"
        ],
        correct: 1
      }
    },
    {
      id: 4,
      title: "Life with Abu Talib",
      content: [
        "Abu Talib, though poor, loved Muhammad ﷺ like his own son. Despite having many children of his own, he gave Muhammad ﷺ special care and attention. He would not eat unless Muhammad ﷺ was present.",
        "As a young boy, Muhammad ﷺ worked as a shepherd to help his uncle's family. Later, Allah's Messenger ﷺ would say, 'Every Prophet has tended sheep.' This humble work taught him patience, responsibility, and contemplation.",
        "At age 12, Muhammad ﷺ accompanied Abu Talib on a trade journey to Syria. During this trip, a Christian monk named Bahira recognized signs of prophethood in him and warned Abu Talib to protect him from those who might harm him.",
        "Throughout his youth, Muhammad ﷺ never participated in the ignorant practices of his people. He never worshipped idols, drank alcohol, or engaged in immoral behavior. Allah protected him from all evil practices of Jahiliyyah (pre-Islamic ignorance)."
      ],
      keyPoints: [
        "Abu Talib raised him with love despite poverty",
        "Worked as a shepherd in youth",
        "Traveled to Syria at age 12",
        "Monk Bahira recognized signs of prophethood",
        "Protected from evil practices of society"
      ],
      quiz: {
        question: "What work did young Muhammad ﷺ do to help his uncle?",
        options: [
          "Trading",
          "Shepherding",
          "Farming",
          "Blacksmithing"
        ],
        correct: 1
      }
    },
    {
      id: 5,
      title: "Early Character Traits",
      content: [
        "Even before prophethood, Muhammad ﷺ was known for his exceptional character. The people of Mecca called him 'Al-Amin' (The Trustworthy) and 'As-Sadiq' (The Truthful) because of his honesty and reliability.",
        "People would entrust their valuables to him for safekeeping, even those who later became his enemies. His word was considered absolutely reliable, and he never broke a promise or betrayed a trust.",
        "He was known for his modesty and would lower his gaze out of shyness. He spoke little but when he did, his words were full of wisdom. He never used foul language or raised his voice in anger.",
        "Muhammad ﷺ actively helped others: he would assist the poor, support the weak, maintain family ties, and stand up for justice. When the Kaaba was being rebuilt, he wisely resolved a dispute about who would place the Black Stone, preventing bloodshed between tribes."
      ],
      keyPoints: [
        "Known as Al-Amin (The Trustworthy)",
        "Called As-Sadiq (The Truthful)",
        "People trusted him with valuables",
        "Showed wisdom in resolving disputes",
        "Helped the poor and maintained family ties"
      ],
      quiz: {
        question: "What were Muhammad's ﷺ famous titles before prophethood?",
        options: [
          "Al-Hakim and Al-Adil",
          "Al-Amin and As-Sadiq",
          "Al-Karim and Al-Rashid",
          "Al-Qawi and Al-Shuja"
        ],
        correct: 1
      }
    }
  ],
  2: [ // Revelation & Early Islam
    {
      id: 1,
      title: "Cave of Hira",
      content: [
        "As Muhammad ﷺ approached his forties, he began to love solitude. He would take provisions and retreat to Cave Hira, a small cave in Mount Nur (Mountain of Light) about 3 miles from Mecca.",
        "In this cave, he would spend days and nights in contemplation and worship. He would practice 'tahannuth' - worship of Allah in the way of Prophet Ibrahim ﷺ, rejecting the idolatry of his people.",
        "He would stay for several nights, then return to Khadijah for more provisions, then go back. This continued for several years. During Ramadan, he would spend the entire month in the cave.",
        "True dreams began coming to him. Whatever he saw in his dreams would occur exactly as he had seen. These dreams were like the breaking of dawn - clear and unmistakable. This was Allah's way of preparing him for the great responsibility ahead."
      ],
      keyPoints: [
        "Retreated to Cave Hira for contemplation",
        "Located in Mount Nur, 3 miles from Mecca",
        "Practiced tahannuth (worship of Allah)",
        "Spent entire Ramadan in the cave",
        "Began seeing true dreams"
      ],
      quiz: {
        question: "What is the name of the mountain where Cave Hira is located?",
        options: [
          "Mount Uhud",
          "Mount Safa",
          "Mount Nur",
          "Mount Thawr"
        ],
        correct: 2
      }
    },
    {
      id: 2,
      title: "First Revelation",
      content: [
        "On the 27th night of Ramadan, when Muhammad ﷺ was 40 years old, Angel Jibreel (Gabriel) appeared to him in Cave Hira. The angel came in his true form, filling the horizon with his 600 wings.",
        "Jibreel embraced him tightly and commanded: 'Iqra!' (Read/Recite!). Muhammad ﷺ replied, 'I cannot read.' This happened three times, each time Jibreel squeezed him until he could bear it no more.",
        "Then Jibreel recited: 'Read in the name of your Lord who created. Created man from a clinging clot. Read, and your Lord is the Most Generous. Who taught by the pen. Taught man what he knew not.' (Quran 96:1-5)",
        "Muhammad ﷺ returned home trembling with fear, saying to Khadijah, 'Cover me! Cover me!' She comforted him, saying, 'Allah will never disgrace you. You maintain family ties, help the poor, serve guests, and assist those struck by calamity.'"
      ],
      keyPoints: [
        "First revelation on 27th night of Ramadan",
        "Muhammad ﷺ was 40 years old",
        "Angel Jibreel brought first verses of Quran",
        "First word revealed was 'Iqra' (Read)",
        "Khadijah comforted and supported him"
      ],
      quiz: {
        question: "What was the first word revealed to Prophet Muhammad ﷺ?",
        options: [
          "Allah",
          "Iqra (Read)",
          "Qul (Say)",
          "Rahman"
        ],
        correct: 1
      }
    },
    {
      id: 3,
      title: "Early Believers",
      content: [
        "Khadijah was the first person to accept Islam. She believed in Muhammad ﷺ immediately without any hesitation. Her support gave him strength during the difficult early days of his mission.",
        "Among men, Abu Bakr was the first to accept Islam. His immediate acceptance without questioning showed his deep trust in Muhammad ﷺ. He used his influence and wealth to bring others to Islam.",
        "Ali ibn Abi Talib, only 10 years old, was the first child to accept Islam. Living in Muhammad's ﷺ household, he witnessed his character firsthand and believed immediately.",
        "Zaid ibn Haritha, Muhammad's ﷺ freed slave who chose to stay with him over his own family, was among the first believers. Through Abu Bakr's efforts, Uthman, Zubair, Abdur Rahman ibn Awf, Sa'd ibn Abi Waqqas, and Talha also accepted Islam early."
      ],
      keyPoints: [
        "Khadijah - first person to accept Islam",
        "Abu Bakr - first man to accept Islam",
        "Ali - first child to accept Islam",
        "Zaid ibn Haritha - first freed slave",
        "Abu Bakr brought many early converts"
      ],
      quiz: {
        question: "Who was the first person to accept Islam?",
        options: [
          "Abu Bakr",
          "Ali ibn Abi Talib",
          "Khadijah",
          "Zaid ibn Haritha"
        ],
        correct: 2
      }
    },
    {
      id: 4,
      title: "Secret Preaching",
      content: [
        "For the first three years, the Prophet ﷺ preached Islam secretly. He would carefully select trustworthy individuals and invite them privately to worship One Allah and abandon idolatry.",
        "The early Muslims would gather secretly in the house of Al-Arqam ibn Abi Al-Arqam, located near Mount Safa. This house became the first Islamic center where Muslims learned about their faith.",
        "They would pray in hidden valleys outside Mecca to avoid detection. When Sa'd ibn Abi Waqqas was caught praying, he fought to defend himself, becoming the first to shed blood in defense of Islam.",
        "During this period, about 40 people accepted Islam, including both free people and slaves, men and women, young and old. They formed a close-knit community bound by faith rather than tribal ties."
      ],
      keyPoints: [
        "Secret preaching for first 3 years",
        "Gathered at house of Al-Arqam",
        "Prayed in hidden valleys",
        "About 40 early converts",
        "Formed close community of believers"
      ],
      quiz: {
        question: "Where did early Muslims secretly gather to learn about Islam?",
        options: [
          "Cave Hira",
          "House of Al-Arqam",
          "Kaaba",
          "Abu Bakr's house"
        ],
        correct: 1
      }
    },
    {
      id: 5,
      title: "Public Declaration",
      content: [
        "After three years, Allah commanded the Prophet ﷺ to proclaim the message publicly: 'Warn your closest kinsmen' (Quran 26:214). He first invited his clan, Banu Hashim, for a meal and called them to Islam.",
        "Then he climbed Mount Safa and called out to all the tribes of Quraysh. When they gathered, he asked, 'If I told you an army was behind this mountain ready to attack, would you believe me?' They said, 'Yes, we've never known you to lie.'",
        "He then declared: 'I am a warner to you before a severe punishment. I call you to testify that there is no god but Allah and I am His Messenger.' Abu Lahab, his own uncle, cursed him, leading to the revelation of Surah Al-Masad.",
        "The Quraysh were furious. They had tolerated the secret practice but public preaching threatened their religious authority, economic interests (from pilgrim trade), and social order. Thus began the period of open persecution."
      ],
      keyPoints: [
        "Public preaching began after 3 years",
        "Called his clan Banu Hashim first",
        "Announced from Mount Safa",
        "Abu Lahab openly opposed him",
        "Quraysh began systematic persecution"
      ],
      quiz: {
        question: "From which mountain did the Prophet ﷺ first publicly declare his message?",
        options: [
          "Mount Nur",
          "Mount Uhud",
          "Mount Safa",
          "Mount Marwa"
        ],
        correct: 2
      }
    },
    {
      id: 6,
      title: "Persecution in Mecca",
      content: [
        "The Quraysh tried everything to stop the spread of Islam. They offered Muhammad ﷺ wealth, kingship, and the most beautiful women if he would stop preaching. When he refused, they turned to violence.",
        "Wealthy Muslims like Abu Bakr and Uthman were mocked and faced economic boycotts. But the worst persecution fell on slaves and the poor who had no tribal protection.",
        "Bilal was laid on hot sand with a heavy rock on his chest, yet he kept saying 'Ahad, Ahad' (One, One). Ammar's family was tortured; his mother Sumayyah became the first martyr of Islam when Abu Jahl killed her.",
        "The Prophet ﷺ himself was not spared. They threw camel intestines on him while praying, attempted to strangle him, and Abu Lahab's wife would place thorns in his path. Yet he remained patient and continued his mission."
      ],
      keyPoints: [
        "Quraysh tried bribery first, then violence",
        "Slaves and poor faced worst persecution",
        "Bilal tortured but remained steadfast",
        "Sumayyah - first martyr of Islam",
        "Prophet ﷺ faced physical attacks"
      ],
      quiz: {
        question: "Who was the first martyr of Islam?",
        options: [
          "Bilal",
          "Ammar",
          "Sumayyah",
          "Yasir"
        ],
        correct: 2
      }
    }
  ],
  3: [ // Migration & Medina - Add similar detailed lessons
    {
      id: 1,
      title: "Planning the Hijrah",
      content: [
        "After 13 years of persecution in Mecca, Allah gave permission for the Muslims to migrate to Yathrib (later called Medina). The people of Yathrib had accepted Islam and pledged to protect the Prophet ﷺ.",
        "The Quraysh learned of the plan and decided to kill Muhammad ﷺ. They planned for a young man from each tribe to strike simultaneously, so blood revenge would be impossible against all tribes.",
        "Angel Jibreel informed the Prophet ﷺ of their plot. He asked Ali to sleep in his bed wearing his green cloak, and left reciting verses from Surah Yasin. Allah blinded the enemies as he passed through them.",
        "He went to Abu Bakr's house and they left through a back window. They hired Abdullah ibn Urayqit, a trustworthy non-Muslim guide, and took a southern route opposite to Medina to avoid pursuit."
      ],
      keyPoints: [
        "Migration after 13 years of persecution",
        "Quraysh plotted to kill Prophet ﷺ",
        "Ali slept in Prophet's bed as decoy",
        "Left with Abu Bakr secretly",
        "Took southern route to avoid capture"
      ]
    }
  ],
  4: [ // Major Battles - Add similar detailed lessons
    {
      id: 1,
      title: "Battle of Badr",
      content: [
        "The Battle of Badr took place in Ramadan, 2 AH (624 CE). The Muslims, numbering only 313, faced a Meccan army of 1000 warriors. This would be the first major confrontation between truth and falsehood.",
        "The Prophet ﷺ spent the night before battle in prayer, begging Allah for victory. He said, 'O Allah, if this small group perishes, You will not be worshipped on earth.'",
        "Despite being outnumbered and poorly equipped, the Muslims achieved a decisive victory. Allah sent angels to fight alongside them. 70 Meccans were killed including Abu Jahl, and 70 were captured.",
        "This victory established the Muslims as a force to be reckoned with. It strengthened the faith of believers and struck fear into the hearts of enemies. The Quran calls it 'Yawm al-Furqan' - the Day of Criterion."
      ],
      keyPoints: [
        "First major battle in Ramadan 2 AH",
        "313 Muslims vs 1000 Meccans",
        "Angels sent to help Muslims",
        "Decisive Muslim victory",
        "Called the Day of Criterion"
      ]
    }
  ],
  5: [ // Final Years & Legacy - Add similar detailed lessons
    {
      id: 1,
      title: "Farewell Pilgrimage",
      content: [
        "In the 10th year after Hijrah, the Prophet ﷺ performed his first and only Hajj after Islam, known as the Farewell Pilgrimage. Over 100,000 Muslims joined him from all over Arabia.",
        "On the 9th of Dhul Hijjah, at Mount Arafat, he delivered his Farewell Sermon. He declared the equality of all humans, rights of women, prohibition of interest, and sanctity of life and property.",
        "He announced: 'Today I have perfected your religion for you, completed My favor upon you, and chosen Islam as your religion.' He asked the crowd, 'Have I delivered the message?' They replied, 'Yes!'",
        "This pilgrimage established the rituals of Hajj for all time. Every action of the Prophet ﷺ was carefully observed and preserved. He said, 'Learn your rituals from me, for I may not perform Hajj after this year.'"
      ],
      keyPoints: [
        "Performed in 10th year after Hijrah",
        "Over 100,000 Muslims attended",
        "Delivered famous Farewell Sermon",
        "Religion was completed",
        "Established Hajj rituals forever"
      ]
    }
  ]
};

export default function CourseModule({ module, onClose }: CourseModuleProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lessons = moduleLessons[module.id] || [];
  const currentLesson = lessons[currentLessonIndex];

  const handleQuizSubmit = () => {
    if (currentLesson.quiz && selectedAnswer === currentLesson.quiz.correct) {
      setScore(score + 1);
    }
    setQuizComplete(true);
  };

  const handleNextLesson = () => {
    if (!completedLessons.includes(currentLessonIndex)) {
      setCompletedLessons([...completedLessons, currentLessonIndex]);
    }
    
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setShowQuiz(false);
      setQuizComplete(false);
      setSelectedAnswer(null);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setShowQuiz(false);
      setQuizComplete(false);
      setSelectedAnswer(null);
    }
  };

  const progressPercentage = ((completedLessons.length / lessons.length) * 100).toFixed(0);

  if (lessons.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-3xl w-full p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you comprehensive lessons for this module. Check back soon!
            </p>
            <button
              onClick={onClose}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className={`bg-gradient-to-br ${module.color} p-6 rounded-t-xl text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-90">
              Lesson {currentLessonIndex + 1} of {lessons.length}
            </span>
            <span className="text-sm opacity-90">
              Progress: {progressPercentage}%
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {!showQuiz ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {currentLesson.title}
              </h3>
              
              <div className="prose prose-lg max-w-none">
                {currentLesson.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 bg-emerald-50 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-900 mb-3">Key Points to Remember:</h4>
                <ul className="space-y-2">
                  {currentLesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Quiz
              </h3>
              
              {!quizComplete ? (
                <>
                  <div className="mb-6">
                    <p className="text-lg text-gray-800 mb-4">
                      {currentLesson.quiz?.question}
                    </p>
                    
                    <div className="space-y-3">
                      {currentLesson.quiz?.options.map((option, index) => (
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
                    onClick={handleQuizSubmit}
                    disabled={selectedAnswer === null}
                    className={`w-full py-3 rounded-lg font-semibold ${
                      selectedAnswer !== null
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Submit Answer
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">
                    {selectedAnswer === currentLesson.quiz?.correct ? "✅" : "❌"}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    {selectedAnswer === currentLesson.quiz?.correct 
                      ? "Correct! Well done!" 
                      : "Not quite right"}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    The correct answer was: {currentLesson.quiz?.options[currentLesson.quiz.correct || 0]}
                  </p>
                  <button
                    onClick={() => {
                      setShowQuiz(false);
                      setQuizComplete(false);
                      setSelectedAnswer(null);
                    }}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50 rounded-b-xl">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevLesson}
              disabled={currentLessonIndex === 0}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentLessonIndex === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex gap-3">
              {!showQuiz && currentLesson.quiz && (
                <button
                  onClick={() => setShowQuiz(true)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                >
                  Take Quiz 📝
                </button>
              )}
              
              {currentLessonIndex < lessons.length - 1 ? (
                <button
                  onClick={handleNextLesson}
                  className="flex items-center bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Next Lesson
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Complete Module ✓
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}