// Comprehensive Coursera-style Seerah Course Content

export interface CourseWeek {
  weekNumber: number;
  title: string;
  overview: string;
  learningObjectives: string[];
  estimatedHours: number;
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment' | 'discussion';
  duration: string;
  content?: any;
  required: boolean;
}

export interface VideoLecture {
  title: string;
  duration: string;
  transcript: string[];
  keyConcepts: string[];
  slides?: string[];
}

export interface Reading {
  title: string;
  author: string;
  source: string;
  excerpt: string[];
  citations: string[];
  discussionQuestions: string[];
}

export interface Assignment {
  title: string;
  instructions: string;
  rubric: RubricItem[];
  peerReview: boolean;
  dueWeek: number;
}

export interface RubricItem {
  criteria: string;
  points: number;
  description: string;
}

export const courseSyllabus = {
  title: "The Life of Prophet Muhammad ﷺ: A Comprehensive Study",
  institution: "Easy Seerah Academy",
  instructor: "Dr. Ahmad Hassan",
  duration: "12 weeks",
  effort: "8-10 hours/week",
  level: "Intermediate",
  prerequisites: "Basic knowledge of Islamic terminology helpful but not required",
  
  courseDescription: `
    This comprehensive course examines the life of Prophet Muhammad ﷺ through historical, 
    theological, and sociological lenses. Students will engage with primary sources, 
    classical Islamic scholarship, and contemporary academic research to develop a nuanced 
    understanding of the Prophet's life, his message, and his lasting impact on world history.
  `,
  
  learningOutcomes: [
    "Analyze the historical context of 7th century Arabia and its influence on early Islam",
    "Evaluate primary sources and classical biographical literature (kutub al-sīrah)",
    "Critically examine the major events of the Prophet's life and their significance",
    "Assess the development of the early Muslim community and its institutions",
    "Apply lessons from the Seerah to contemporary ethical and social challenges",
    "Demonstrate understanding through written analysis and peer discussion"
  ],
  
  assessmentBreakdown: [
    { component: "Weekly Quizzes", percentage: 20 },
    { component: "Discussion Participation", percentage: 15 },
    { component: "Written Assignments (4)", percentage: 40 },
    { component: "Final Project", percentage: 25 }
  ],
  
  textbooks: [
    {
      title: "Muhammad: His Life Based on the Earliest Sources",
      author: "Martin Lings",
      required: true
    },
    {
      title: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)",
      author: "Safi-ur-Rahman al-Mubarakpuri",
      required: true
    },
    {
      title: "In the Footsteps of the Prophet",
      author: "Tariq Ramadan",
      recommended: true
    }
  ]
};

export const courseWeeks: CourseWeek[] = [
  {
    weekNumber: 1,
    title: "Pre-Islamic Arabia: Historical and Social Context",
    overview: "Explore the religious, political, and social landscape of Arabia before Islam, understanding the environment that shaped early Islamic history.",
    learningObjectives: [
      "Describe the tribal structure and political dynamics of pre-Islamic Arabia",
      "Analyze the religious practices and beliefs of the Arabian Peninsula",
      "Evaluate the economic and trade systems of 6th century Arabia",
      "Assess the position of Mecca in the broader Middle Eastern context"
    ],
    estimatedHours: 9,
    modules: [
      {
        id: "w1-intro",
        title: "Course Introduction and Overview",
        type: "video",
        duration: "15 min",
        required: true
      },
      {
        id: "w1-lecture1",
        title: "The Arabian Peninsula: Geography and Demographics",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w1-reading1",
        title: "Tribal Society and the Bedouin Way of Life",
        type: "reading",
        duration: "60 min",
        required: true
      },
      {
        id: "w1-lecture2",
        title: "Religious Landscape: Paganism, Christianity, and Judaism",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w1-reading2",
        title: "Primary Sources: Pre-Islamic Poetry and Historical Accounts",
        type: "reading",
        duration: "90 min",
        required: true
      },
      {
        id: "w1-discussion",
        title: "The Concept of Jahiliyyah: Critical Perspectives",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w1-quiz",
        title: "Week 1 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 2,
    title: "Birth to Prophethood (570-610 CE): The Making of a Prophet",
    overview: "Examine the first 40 years of Muhammad's life, analyzing the events and experiences that prepared him for his prophetic mission.",
    learningObjectives: [
      "Chronicle the major events of Muhammad's early life",
      "Analyze the significance of his orphanhood in Arabian society",
      "Evaluate the influence of his trade experiences on his later teachings",
      "Assess the importance of his reputation as Al-Amin (The Trustworthy)"
    ],
    estimatedHours: 10,
    modules: [
      {
        id: "w2-lecture1",
        title: "The Year of the Elephant and Abraha's Campaign",
        type: "video",
        duration: "40 min",
        required: true
      },
      {
        id: "w2-reading1",
        title: "Classical Sources on the Prophet's Genealogy and Birth",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w2-lecture2",
        title: "Childhood and Youth: From Orphanhood to Adulthood",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w2-lecture3",
        title: "Marriage to Khadijah: A Partnership of Equals",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w2-reading2",
        title: "The Rebuilding of the Kaaba and the Black Stone Arbitration",
        type: "reading",
        duration: "60 min",
        required: true
      },
      {
        id: "w2-assignment",
        title: "Essay: The Role of Mentorship in the Prophet's Development",
        type: "assignment",
        duration: "120 min",
        required: true
      },
      {
        id: "w2-quiz",
        title: "Week 2 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 3,
    title: "Revelation and the Meccan Period I (610-615 CE)",
    overview: "Study the beginning of revelation, early converts, and the initial challenges faced by the nascent Muslim community.",
    learningObjectives: [
      "Describe the experience of the first revelation and its immediate aftermath",
      "Analyze the content and themes of early Meccan revelations",
      "Evaluate the conversion patterns of early Muslims",
      "Assess the Quraysh's initial responses to Muhammad's message"
    ],
    estimatedHours: 11,
    modules: [
      {
        id: "w3-lecture1",
        title: "The Cave of Hira and the First Revelation",
        type: "video",
        duration: "60 min",
        required: true
      },
      {
        id: "w3-reading1",
        title: "Analyzing Surah Al-Alaq: The First Revealed Verses",
        type: "reading",
        duration: "90 min",
        required: true
      },
      {
        id: "w3-lecture2",
        title: "The Period of Secret Preaching",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w3-lecture3",
        title: "Early Converts: A Sociological Analysis",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w3-reading2",
        title: "The House of Al-Arqam: Islam's First Institution",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w3-discussion",
        title: "Women in Early Islam: Khadijah's Revolutionary Role",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w3-quiz",
        title: "Week 3 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 4,
    title: "Meccan Period II: Persecution and Resilience (615-619 CE)",
    overview: "Examine the intensification of opposition, the migrations to Abyssinia, and the social boycott of Banu Hashim.",
    learningObjectives: [
      "Analyze the methods and motivations of Qurayshi persecution",
      "Evaluate the strategic decision to migrate to Abyssinia",
      "Assess the impact of the social and economic boycott",
      "Understand the significance of the Year of Sorrow"
    ],
    estimatedHours: 10,
    modules: [
      {
        id: "w4-lecture1",
        title: "Systematic Persecution: Methods and Targets",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w4-reading1",
        title: "The Abyssinian Migrations: Diplomatic and Religious Dimensions",
        type: "reading",
        duration: "80 min",
        required: true
      },
      {
        id: "w4-lecture2",
        title: "The Boycott of Banu Hashim: Economic Warfare",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w4-lecture3",
        title: "The Year of Sorrow: Personal Loss and Spiritual Resilience",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w4-assignment",
        title: "Research Paper: Comparative Analysis of Religious Persecution",
        type: "assignment",
        duration: "180 min",
        required: true
      },
      {
        id: "w4-quiz",
        title: "Week 4 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 5,
    title: "The Miraculous Journey and Search for Support (619-622 CE)",
    overview: "Study the Isra and Mi'raj, the mission to Ta'if, and the strategic preparations for the Hijrah.",
    learningObjectives: [
      "Interpret the spiritual and theological significance of the Night Journey",
      "Analyze the Prophet's outreach strategies beyond Mecca",
      "Evaluate the Pledges of Aqaba and their constitutional importance",
      "Assess the planning and execution of the Hijrah"
    ],
    estimatedHours: 9,
    modules: [
      {
        id: "w5-lecture1",
        title: "Al-Isra wal-Mi'raj: Theological and Historical Perspectives",
        type: "video",
        duration: "60 min",
        required: true
      },
      {
        id: "w5-reading1",
        title: "The Journey to Ta'if: Rejection and Divine Comfort",
        type: "reading",
        duration: "70 min",
        required: true
      },
      {
        id: "w5-lecture2",
        title: "The Aws and Khazraj: Medina's Preparation for Islam",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w5-lecture3",
        title: "The Pledges of Aqaba: Foundation of Islamic Governance",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w5-discussion",
        title: "The Hijrah: Forced Migration or Strategic Relocation?",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w5-quiz",
        title: "Week 5 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 6,
    title: "Establishing the Medinan State (622-624 CE)",
    overview: "Analyze the formation of the first Islamic state, including constitutional arrangements, economic reforms, and social integration.",
    learningObjectives: [
      "Examine the Constitution of Medina as a political document",
      "Analyze the brotherhood system and its social implications",
      "Evaluate the economic challenges and solutions in early Medina",
      "Assess the integration of diverse religious and tribal groups"
    ],
    estimatedHours: 11,
    modules: [
      {
        id: "w6-lecture1",
        title: "The Constitution of Medina: A Pluralistic Charter",
        type: "video",
        duration: "65 min",
        required: true
      },
      {
        id: "w6-reading1",
        title: "Primary Source Analysis: The Medinan Constitution",
        type: "reading",
        duration: "90 min",
        required: true
      },
      {
        id: "w6-lecture2",
        title: "The Muhajirun-Ansar Brotherhood: Social Engineering",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w6-lecture3",
        title: "Building Institutions: The Mosque as Community Center",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w6-reading2",
        title: "Economic Transformation: From Tribal to Islamic Economy",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w6-assignment",
        title: "Case Study: Conflict Resolution in Multi-Religious Societies",
        type: "assignment",
        duration: "150 min",
        required: true
      },
      {
        id: "w6-quiz",
        title: "Week 6 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 7,
    title: "Military Campaigns and Strategic Thinking (624-627 CE)",
    overview: "Study the major battles of Badr, Uhud, and the Trench, analyzing military strategy, leadership, and lessons learned.",
    learningObjectives: [
      "Analyze the strategic and tactical dimensions of early Islamic warfare",
      "Evaluate the Prophet's military leadership and decision-making",
      "Assess the impact of military outcomes on community morale and faith",
      "Understand the evolution of Islamic military ethics"
    ],
    estimatedHours: 10,
    modules: [
      {
        id: "w7-lecture1",
        title: "Badr: David vs. Goliath in the Arabian Desert",
        type: "video",
        duration: "60 min",
        required: true
      },
      {
        id: "w7-reading1",
        title: "Military Intelligence and Planning in Early Islam",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w7-lecture2",
        title: "Uhud: Leadership Crisis and Lessons in Discipline",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w7-lecture3",
        title: "The Battle of the Trench: Innovation in Defensive Warfare",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w7-reading2",
        title: "Rules of War: Developing Islamic Military Ethics",
        type: "reading",
        duration: "70 min",
        required: true
      },
      {
        id: "w7-discussion",
        title: "Just War Theory: Islamic and Contemporary Perspectives",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w7-quiz",
        title: "Week 7 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 8,
    title: "Diplomacy and Treaties (627-629 CE)",
    overview: "Examine the Prophet's diplomatic initiatives, including the Treaty of Hudaybiyyah and letters to world leaders.",
    learningObjectives: [
      "Analyze the negotiation and terms of the Treaty of Hudaybiyyah",
      "Evaluate the Prophet's diplomatic correspondence with world leaders",
      "Assess the strategic benefits of peace treaties and alliances",
      "Understand the role of diplomacy in Islamic expansion"
    ],
    estimatedHours: 9,
    modules: [
      {
        id: "w8-lecture1",
        title: "Hudaybiyyah: The Victory Disguised as Defeat",
        type: "video",
        duration: "60 min",
        required: true
      },
      {
        id: "w8-reading1",
        title: "Diplomatic Letters: Inviting World Leaders to Islam",
        type: "reading",
        duration: "80 min",
        required: true
      },
      {
        id: "w8-lecture2",
        title: "International Relations in 7th Century Middle East",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w8-lecture3",
        title: "The Expedition to Khaybar: Military and Economic Dimensions",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w8-assignment",
        title: "Treaty Analysis: Comparing Historical and Modern Agreements",
        type: "assignment",
        duration: "120 min",
        required: true
      },
      {
        id: "w8-quiz",
        title: "Week 8 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 9,
    title: "The Conquest of Mecca and Consolidation (629-630 CE)",
    overview: "Study the peaceful conquest of Mecca, the destruction of idols, and the integration of former enemies.",
    learningObjectives: [
      "Analyze the strategic planning of the Conquest of Mecca",
      "Evaluate the Prophet's amnesty policy and reconciliation efforts",
      "Assess the transformation of the Kaaba and Meccan society",
      "Understand the Battles of Hunayn and Ta'if"
    ],
    estimatedHours: 10,
    modules: [
      {
        id: "w9-lecture1",
        title: "The March on Mecca: Strategy and Psychological Warfare",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w9-reading1",
        title: "The General Amnesty: Justice, Mercy, and Political Wisdom",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w9-lecture2",
        title: "Purifying the Kaaba: Religious Reform and Continuity",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w9-lecture3",
        title: "Hunayn and Ta'if: Consolidating the Victory",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w9-discussion",
        title: "Forgiveness and Reconciliation: Lessons for Conflict Resolution",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w9-quiz",
        title: "Week 9 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 10,
    title: "The Final Years (630-632 CE)",
    overview: "Examine the Farewell Pilgrimage, the completion of the Islamic message, and the Prophet's final days.",
    learningObjectives: [
      "Analyze the Farewell Sermon as a constitutional document",
      "Evaluate the delegations period and mass conversions",
      "Assess the Prophet's succession planning and final instructions",
      "Understand the completion of the Quranic revelation"
    ],
    estimatedHours: 10,
    modules: [
      {
        id: "w10-lecture1",
        title: "The Year of Delegations: Arabia Embraces Islam",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w10-lecture2",
        title: "The Farewell Pilgrimage: A Complete Model",
        type: "video",
        duration: "60 min",
        required: true
      },
      {
        id: "w10-reading1",
        title: "The Farewell Sermon: Text and Commentary",
        type: "reading",
        duration: "90 min",
        required: true
      },
      {
        id: "w10-lecture3",
        title: "The Prophet's Illness and Final Days",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w10-reading2",
        title: "Succession Crisis: The Gathering at Saqifa",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w10-quiz",
        title: "Week 10 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 11,
    title: "The Prophet's Character and Daily Life",
    overview: "Deep dive into the Prophet's personal characteristics, family life, and daily practices.",
    learningObjectives: [
      "Examine detailed accounts of the Prophet's physical appearance and demeanor",
      "Analyze his roles as husband, father, and community leader",
      "Evaluate his daily routine and spiritual practices",
      "Understand his teaching methods and interpersonal relations"
    ],
    estimatedHours: 9,
    modules: [
      {
        id: "w11-lecture1",
        title: "The Shamail: Physical and Character Description",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w11-reading1",
        title: "Family Life: The Prophet as Husband and Father",
        type: "reading",
        duration: "80 min",
        required: true
      },
      {
        id: "w11-lecture2",
        title: "Daily Routine: Worship, Work, and Social Life",
        type: "video",
        duration: "45 min",
        required: true
      },
      {
        id: "w11-lecture3",
        title: "Teaching Methods and Communication Strategies",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w11-discussion",
        title: "Prophetic Emotional Intelligence: Leadership Lessons",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w11-quiz",
        title: "Week 11 Assessment",
        type: "quiz",
        duration: "30 min",
        required: true
      }
    ]
  },
  {
    weekNumber: 12,
    title: "Legacy and Contemporary Relevance",
    overview: "Assess the Prophet's lasting impact on world history and explore applications of Seerah lessons to contemporary challenges.",
    learningObjectives: [
      "Evaluate the Prophet's influence on law, ethics, and governance",
      "Analyze the spread of Islam after the Prophet's death",
      "Apply Seerah lessons to modern ethical dilemmas",
      "Develop a personal framework for continued Seerah study"
    ],
    estimatedHours: 11,
    modules: [
      {
        id: "w12-lecture1",
        title: "Historical Impact: Transforming Civilizations",
        type: "video",
        duration: "55 min",
        required: true
      },
      {
        id: "w12-reading1",
        title: "The Seerah in Contemporary Islamic Thought",
        type: "reading",
        duration: "75 min",
        required: true
      },
      {
        id: "w12-lecture2",
        title: "Prophetic Ethics in Modern Contexts",
        type: "video",
        duration: "50 min",
        required: true
      },
      {
        id: "w12-assignment",
        title: "Final Project: Applying Seerah Lessons",
        type: "assignment",
        duration: "240 min",
        required: true
      },
      {
        id: "w12-discussion",
        title: "Course Reflection and Future Learning",
        type: "discussion",
        duration: "60 min",
        required: true
      },
      {
        id: "w12-quiz",
        title: "Final Comprehensive Assessment",
        type: "quiz",
        duration: "60 min",
        required: true
      }
    ]
  }
];

// Detailed content for Week 1 as example
export const week1Content = {
  lectures: {
    "w1-intro": {
      title: "Course Introduction and Overview",
      duration: "15 min",
      transcript: [
        "Welcome to this comprehensive study of the Life of Prophet Muhammad ﷺ. I'm Dr. Ahmad Hassan, and I'll be your instructor for this 12-week journey through one of history's most influential lives.",
        
        "This course is designed not merely as a chronological narrative, but as an analytical exploration of the Prophet's life within its historical context, examining its theological significance and contemporary relevance.",
        
        "We'll be using multiple methodological approaches: historical-critical analysis to examine sources, sociological perspectives to understand community dynamics, and comparative religious studies to place Islam within the broader Abrahamic tradition.",
        
        "Our primary sources will include the Quran, hadith collections, and classical seerah works like Ibn Ishaq's Sirat Rasul Allah, Ibn Hisham's redaction, and al-Waqidi's Maghazi. We'll also engage with contemporary scholarship from both Muslim and non-Muslim academics.",
        
        "Each week, you'll engage with video lectures, primary source readings, scholarly articles, and participate in discussions with your peers. Assignments are designed to develop critical thinking and analytical writing skills.",
        
        "Remember, this is an academic course that respects the sacred nature of the subject while maintaining scholarly rigor. We encourage questions, critical thinking, and respectful dialogue."
      ],
      keyConcepts: [
        "Course methodology and approach",
        "Primary and secondary sources",
        "Academic expectations",
        "Respectful scholarly discourse"
      ]
    },
    "w1-lecture1": {
      title: "The Arabian Peninsula: Geography and Demographics",
      duration: "45 min",
      transcript: [
        "To understand the life of Prophet Muhammad ﷺ, we must first understand the world into which he was born. The Arabian Peninsula of the 6th century was not an isolated desert, but a crucial crossroads of ancient civilizations.",
        
        "Geographically, the Peninsula spans approximately 3 million square kilometers, bordered by the Red Sea to the west, the Arabian Sea to the south, and the Persian Gulf to the east. This positioning made it a natural bridge between Africa, Asia, and Europe.",
        
        "The harsh desert climate created distinct settlement patterns. The majority of Arabs were Bedouins (Bedu), nomadic pastoralists who moved with their herds seeking water and pasture. Their lifestyle shaped Arabian values: hospitality, courage, loyalty to tribe, and eloquence in poetry.",
        
        "Urban centers existed primarily along trade routes. Mecca, located in the Hijaz region, was strategically positioned on the incense route from Yemen to Syria. Ta'if, in the mountains, provided agricultural products. Yathrib (later Medina) was an agricultural oasis with a mixed population of Arabs and Jews.",
        
        "The population was tribally organized. Tribes (qaba'il) were divided into clans (banu), which were further subdivided into families. This structure provided identity, protection, and law in the absence of central government. The tribe was everything - it determined one's allies, enemies, and life prospects.",
        
        "Linguistically, Arabic had developed into a highly sophisticated language, with poetry serving as the primary medium of cultural expression. Poets were the journalists, historians, and propagandists of their time. The seven Mu'allaqat (suspended poems) represent the pinnacle of pre-Islamic Arabic literature.",
        
        "Economically, long-distance trade was the lifeblood of urban centers. Meccan merchants organized biannual caravans: the winter journey to Yemen and the summer journey to Syria. This trade created a merchant aristocracy and exposed Arabs to diverse cultures and ideas.",
        
        "Understanding this context is crucial because Islam didn't emerge in a vacuum. It addressed specific social problems, reformed existing practices, and built upon Arabian cultural foundations while transcending tribal limitations."
      ],
      keyConcepts: [
        "The significance of tribal society",
        "The role of trade in cultural exchange",
        "Linguistic sophistication of pre-Islamic Arabs",
        "Geographic determinism in Arabian society"
      ]
    }
  },
  
  readings: {
    "w1-reading1": {
      title: "Tribal Society and the Bedouin Way of Life",
      author: "Dr. Patricia Crone",
      source: "Meccan Trade and the Rise of Islam, Princeton University Press",
      excerpt: [
        "The Bedouin ethos dominated Arabian culture even in settled areas. Their values - muruwwa (manliness), which encompassed bravery, patience, persistence, and generosity - became the ideal for all Arabs.",
        
        "The tribal system operated on 'asabiyya (group solidarity). This wasn't mere loyalty; it was an existential necessity. Without tribal protection, an individual was vulnerable to attack, unable to seek justice, and excluded from economic opportunities.",
        
        "Justice operated through the law of retaliation (qisas) and blood money (diya). If a tribe member was killed, the tribe would seek either the execution of the killer or compensation. This system maintained rough equilibrium between tribes and discouraged warfare.",
        
        "Women's status varied considerably. While they couldn't inherit in most tribes and were sometimes treated as property, influential women existed. Khadijah's successful business and Hind bint Utbah's political influence demonstrate that exceptional women could transcend limitations.",
        
        "The practice of female infanticide, while documented, wasn't universal. It occurred primarily during economic hardship or to avoid the shame of daughters being captured in raids. The Quran's condemnation of this practice (81:8-9) addressed a real but not ubiquitous problem.",
        
        "Slavery was integral to the economy. Slaves were acquired through raids, trade, and debt. Manumission was practiced and seen as meritorious. Islam would later regulate but not immediately abolish slavery, encouraging gradual emancipation through various mechanisms."
      ],
      citations: [
        "Crone, Patricia. Meccan Trade and the Rise of Islam. Princeton: Princeton University Press, 1987.",
        "Hoyland, Robert G. Arabia and the Arabs: From the Bronze Age to the Coming of Islam. London: Routledge, 2001.",
        "Peters, F.E. The Arabs and Arabia on the Eve of Islam. Aldershot: Ashgate, 1999."
      ],
      discussionQuestions: [
        "How did tribal solidarity ('asabiyya) both benefit and limit Arabian society?",
        "What role did women play in pre-Islamic Arabian economy and society?",
        "How did the justice system maintain inter-tribal balance?",
        "Why might female infanticide have been practiced, and what does its condemnation tell us about Islamic reform?"
      ]
    }
  },
  
  assignments: {
    "w2-assignment": {
      title: "Essay: The Role of Mentorship in the Prophet's Development",
      instructions: `
        Write a 1500-word analytical essay examining the various mentors and influences in Prophet Muhammad's ﷺ early life and their impact on his character development and future leadership.
        
        Your essay should:
        1. Identify at least four significant mentor figures (e.g., Abd al-Muttalib, Abu Talib, Waraqah ibn Nawfal, Khadijah)
        2. Analyze their specific contributions to his development
        3. Evaluate how these relationships prepared him for prophethood
        4. Use at least 5 scholarly sources (provided in course readings)
        5. Follow academic citation standards (Chicago or MLA)
        
        Structure:
        - Introduction with clear thesis statement (150 words)
        - Body paragraphs with topic sentences and evidence (1200 words)
        - Conclusion synthesizing insights (150 words)
        
        Grading will assess:
        - Thesis clarity and argumentation (25%)
        - Use of evidence and sources (25%)
        - Critical analysis and originality (25%)
        - Writing quality and structure (25%)
      `,
      rubric: [
        {
          criteria: "Thesis and Argument",
          points: 25,
          description: "Clear, specific thesis; logical progression of ideas; persuasive argumentation"
        },
        {
          criteria: "Evidence and Sources",
          points: 25,
          description: "Effective use of primary and secondary sources; proper citations; integration of quotes"
        },
        {
          criteria: "Critical Analysis",
          points: 25,
          description: "Original insights; nuanced understanding; engagement with complexity"
        },
        {
          criteria: "Writing Quality",
          points: 25,
          description: "Clear prose; proper grammar; effective structure; academic tone"
        }
      ],
      peerReview: true,
      dueWeek: 2
    }
  },
  
  discussions: {
    "w1-discussion": {
      title: "The Concept of Jahiliyyah: Critical Perspectives",
      prompt: `
        The term 'Jahiliyyah' (Age of Ignorance) has been used to describe pre-Islamic Arabia. However, modern scholars have questioned this characterization, noting the sophisticated poetry, complex trade networks, and functional social systems of pre-Islamic Arabs.
        
        For this discussion:
        1. Read the provided excerpt from Toshihiko Izutsu's "God and Man in the Quran" on the semantic field of Jahiliyyah
        2. Consider both traditional Islamic and revisionist scholarly perspectives
        
        Initial Post (300 words minimum):
        - How should we understand the term Jahiliyyah?
        - Was it complete ignorance or specific moral/spiritual deficiencies?
        - What evidence supports your interpretation?
        
        Responses (2 required, 150 words each):
        - Engage substantively with peers' arguments
        - Provide additional evidence or alternative perspectives
        - Ask probing questions to deepen discussion
      `,
      gradingCriteria: [
        "Demonstrates understanding of multiple perspectives",
        "Uses specific evidence from readings",
        "Engages respectfully with controversial topics",
        "Contributes original insights to discussion"
      ]
    }
  },
  
  quizzes: {
    "w1-quiz": {
      title: "Week 1 Assessment",
      instructions: "30 minutes, 20 questions. You may reference course materials.",
      questions: [
        {
          type: "multiple-choice",
          question: "The tribal structure of pre-Islamic Arabia served all of the following functions EXCEPT:",
          options: [
            "Providing legal framework through customary law",
            "Ensuring economic cooperation through shared resources",
            "Establishing centralized governmental authority",
            "Offering protection through collective security"
          ],
          correct: 2,
          explanation: "Pre-Islamic Arabia lacked centralized government. Tribes operated as independent units with their own customary laws."
        },
        {
          type: "multiple-choice",
          question: "The concept of 'asabiyya in tribal society primarily refers to:",
          options: [
            "Religious devotion to tribal deities",
            "Group solidarity and collective identity",
            "Economic cooperation in trade",
            "Poetic traditions and oral history"
          ],
          correct: 1,
          explanation: "'Asabiyya encompasses group solidarity, loyalty, and the collective identity that bound tribe members together."
        },
        {
          type: "short-answer",
          question: "Explain the role of poetry in pre-Islamic Arabian society. Provide at least two specific functions.",
          sampleAnswer: "Poetry served multiple crucial functions: 1) Historical record-keeping through oral transmission of tribal histories and genealogies, 2) Political propaganda in inter-tribal conflicts and negotiations, 3) Social commentary and moral instruction, 4) Entertainment and cultural expression at markets and gatherings."
        },
        {
          type: "essay",
          question: "Analyze the economic significance of Mecca's location. How did geography influence its religious and commercial development?",
          rubric: "Strong answers will mention: strategic position on trade routes, lack of agricultural resources necessitating trade, the Kaaba attracting pilgrims and commerce, protection from invasion due to harsh surrounding desert, intersection of Yemen-Syria trade route."
        }
      ]
    }
  }
};

// Additional detailed content for other weeks would follow the same pattern...
// This includes transcripts, readings, assignments, and assessments for all 12 weeks