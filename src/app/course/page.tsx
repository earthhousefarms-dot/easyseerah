"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courseSyllabus, courseWeeks, week1Content } from "@/data/courseContent";
import { CheckCircle, PlayCircle, FileText, MessageSquare, Edit, Award, Clock, Users, BookOpen, Target } from "lucide-react";

type TabType = 'overview' | 'syllabus' | 'weeks' | 'grades' | 'discussion';
type ContentType = 'video' | 'reading' | 'quiz' | 'assignment' | 'discussion';

export default function CourseraStyleCourse() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const currentWeek = courseWeeks[selectedWeek - 1];

  const getModuleIcon = (type: ContentType) => {
    switch(type) {
      case 'video': return <PlayCircle className="w-5 h-5" />;
      case 'reading': return <FileText className="w-5 h-5" />;
      case 'quiz': return <CheckCircle className="w-5 h-5" />;
      case 'assignment': return <Edit className="w-5 h-5" />;
      case 'discussion': return <MessageSquare className="w-5 h-5" />;
    }
  };

  const getModuleColor = (type: ContentType) => {
    switch(type) {
      case 'video': return 'text-blue-600 bg-blue-50';
      case 'reading': return 'text-purple-600 bg-purple-50';
      case 'quiz': return 'text-green-600 bg-green-50';
      case 'assignment': return 'text-orange-600 bg-orange-50';
      case 'discussion': return 'text-pink-600 bg-pink-50';
    }
  };

  const calculateProgress = () => {
    const totalModules = courseWeeks.reduce((acc, week) => acc + week.modules.length, 0);
    return Math.round((completedModules.length / totalModules) * 100);
  };

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{courseSyllabus.title}</h1>
              <p className="text-blue-100 mb-4">{courseSyllabus.institution} • {courseSyllabus.instructor}</p>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {courseSyllabus.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {courseSyllabus.effort}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {courseSyllabus.level}
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm text-blue-100 mb-1">Course Progress</div>
              <div className="text-3xl font-bold">{calculateProgress()}%</div>
              <div className="w-32 bg-blue-800 rounded-full h-2 mt-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all"
                  style={{ width: `${calculateProgress()}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 border-b border-blue-600">
            {['overview', 'syllabus', 'weeks', 'grades', 'discussion'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`py-3 px-1 capitalize font-medium transition-all ${
                  activeTab === tab 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                {tab === 'weeks' ? 'Course Content' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {courseSyllabus.courseDescription}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {courseSyllabus.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Course Structure</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {courseWeeks.slice(0, 6).map((week) => (
                    <div key={week.weekNumber} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-900">Week {week.weekNumber}</h3>
                      <p className="text-sm text-gray-600 mt-1">{week.title}</p>
                      <p className="text-xs text-gray-500 mt-2">{week.estimatedHours} hours</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-bold mb-4">Instructor</h3>
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{courseSyllabus.instructor}</p>
                    <p className="text-sm text-gray-600">Islamic Studies Department</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  PhD in Islamic History from Al-Azhar University. 20+ years teaching experience.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-bold mb-4">Prerequisites</h3>
                <p className="text-sm text-gray-600">{courseSyllabus.prerequisites}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-4">Assessment</h3>
                <div className="space-y-2">
                  {courseSyllabus.assessmentBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.component}</span>
                      <span className="font-semibold">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'syllabus' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
            
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Required Textbooks</h3>
              <ul className="space-y-2">
                {courseSyllabus.textbooks.filter(book => book.required).map((book, index) => (
                  <li key={index} className="flex items-start">
                    <BookOpen className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">{book.title}</span>
                      <span className="text-gray-600"> by {book.author}</span>
                      <span className="text-xs text-red-600 ml-2">Required</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Recommended Reading</h3>
              <ul className="space-y-2">
                {courseSyllabus.textbooks.filter(book => !book.required).map((book, index) => (
                  <li key={index} className="flex items-start">
                    <BookOpen className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">{book.title}</span>
                      <span className="text-gray-600"> by {book.author}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Weekly Schedule</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Week</th>
                      <th className="text-left py-2 px-4">Topic</th>
                      <th className="text-left py-2 px-4">Hours</th>
                      <th className="text-left py-2 px-4">Assignments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseWeeks.map((week) => (
                      <tr key={week.weekNumber} className="border-b">
                        <td className="py-2 px-4">{week.weekNumber}</td>
                        <td className="py-2 px-4">{week.title}</td>
                        <td className="py-2 px-4">{week.estimatedHours}</td>
                        <td className="py-2 px-4">
                          {week.modules.filter(m => m.type === 'assignment').length > 0 && 
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Assignment</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'weeks' && (
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all overflow-hidden`}>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold mb-4">Course Content</h3>
                <div className="space-y-1">
                  {courseWeeks.map((week) => (
                    <button
                      key={week.weekNumber}
                      onClick={() => setSelectedWeek(week.weekNumber)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedWeek === week.weekNumber 
                          ? 'bg-blue-50 border-l-4 border-blue-500' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Week {week.weekNumber}</p>
                          <p className="text-xs text-gray-600 mt-1">{week.title}</p>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 opacity-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Week {currentWeek.weekNumber}: {currentWeek.title}</h2>
                  <p className="text-gray-600">{currentWeek.overview}</p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span>📚 {currentWeek.modules.length} items</span>
                    <span>⏱️ {currentWeek.estimatedHours} hours</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {currentWeek.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Course Materials</h3>
                  <div className="space-y-3">
                    {currentWeek.modules.map((module) => {
                      const isCompleted = completedModules.includes(module.id);
                      return (
                        <div
                          key={module.id}
                          onClick={() => setSelectedModule(module)}
                          className="border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${getModuleColor(module.type)}`}>
                                {getModuleIcon(module.type)}
                              </div>
                              <div>
                                <p className="font-medium">{module.title}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                  <span>{module.type}</span>
                                  <span>•</span>
                                  <span>{module.duration}</span>
                                  {module.required && (
                                    <>
                                      <span>•</span>
                                      <span className="text-red-600">Required</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Grades</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Overall Grade</h3>
                  <span className="text-3xl font-bold text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Grade Breakdown</h3>
                <div className="space-y-3">
                  {courseSyllabus.assessmentBreakdown.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.component}</p>
                          <p className="text-sm text-gray-600">Weight: {item.percentage}%</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">--</p>
                          <p className="text-sm text-gray-600">Not graded yet</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'discussion' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Discussion Forums</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">Week 1: The Concept of Jahiliyyah</h3>
                    <p className="text-sm text-gray-600 mb-2">Critical perspectives on pre-Islamic Arabia</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>👥 24 participants</span>
                      <span>💬 18 posts</span>
                      <span>🕒 Last activity: 2 hours ago</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Active</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">General Course Discussion</h3>
                    <p className="text-sm text-gray-600 mb-2">Questions, comments, and peer support</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>👥 156 participants</span>
                      <span>💬 342 posts</span>
                      <span>🕒 Last activity: 5 minutes ago</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">New</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Module Viewer Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="border-b p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getModuleColor(selectedModule.type)}`}>
                    {getModuleIcon(selectedModule.type)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{selectedModule.title}</h2>
                    <p className="text-sm text-gray-600">{selectedModule.duration} • {selectedModule.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {selectedModule.type === 'video' && (
                <div>
                  <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-6">
                    <PlayCircle className="w-20 h-20 text-white opacity-80" />
                  </div>
                  {week1Content.lectures[selectedModule.id as keyof typeof week1Content.lectures] && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Transcript</h3>
                      <div className="space-y-4 text-gray-700">
                        {week1Content.lectures[selectedModule.id as keyof typeof week1Content.lectures].transcript.map((para, index) => (
                          <p key={index}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {selectedModule.type === 'reading' && week1Content.readings[selectedModule.id as keyof typeof week1Content.readings] && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{week1Content.readings[selectedModule.id as keyof typeof week1Content.readings].title}</h3>
                    <p className="text-sm text-gray-600">By {week1Content.readings[selectedModule.id as keyof typeof week1Content.readings].author}</p>
                    <p className="text-xs text-gray-500 mt-1">{week1Content.readings[selectedModule.id as keyof typeof week1Content.readings].source}</p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 mb-6">
                    {week1Content.readings[selectedModule.id as keyof typeof week1Content.readings].excerpt.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Discussion Questions</h4>
                    <ol className="space-y-2 list-decimal list-inside text-sm text-gray-600">
                      {week1Content.readings[selectedModule.id as keyof typeof week1Content.readings].discussionQuestions.map((question, index) => (
                        <li key={index}>{question}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
              
              {selectedModule.type === 'quiz' && (
                <div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      This assessment consists of 20 questions and must be completed in 30 minutes.
                      You may reference course materials during the quiz.
                    </p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Start Quiz
                  </button>
                </div>
              )}
              
              {selectedModule.type === 'assignment' && week1Content.assignments[selectedModule.id as keyof typeof week1Content.assignments] && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Assignment Instructions</h3>
                    <div className="whitespace-pre-line text-gray-700">
                      {week1Content.assignments[selectedModule.id as keyof typeof week1Content.assignments].instructions}
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Grading Rubric</h4>
                    <div className="space-y-3">
                      {week1Content.assignments[selectedModule.id as keyof typeof week1Content.assignments].rubric.map((item, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{item.criteria}</p>
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                            <span className="text-lg font-semibold">{item.points} pts</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedModule.type === 'discussion' && week1Content.discussions[selectedModule.id as keyof typeof week1Content.discussions] && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Discussion Prompt</h3>
                    <div className="whitespace-pre-line text-gray-700">
                      {week1Content.discussions[selectedModule.id as keyof typeof week1Content.discussions].prompt}
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Grading Criteria</h4>
                    <ul className="space-y-2">
                      {week1Content.discussions[selectedModule.id as keyof typeof week1Content.discussions].gradingCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Join Discussion
                  </button>
                </div>
              )}
            </div>
            
            <div className="border-t p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <button className="text-gray-600 hover:text-gray-800">
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    handleModuleComplete(selectedModule.id);
                    setSelectedModule(null);
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Mark as Complete
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}