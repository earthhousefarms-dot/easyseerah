"use client";

import { useState } from "react";
import { easySeerahMakkahBook } from "@/data/easyseerah-book";

interface BookReaderProps {
  bookId: string;
  onClose: () => void;
}

export default function BookReader({ bookId, onClose }: BookReaderProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  
  const book = easySeerahMakkahBook;
  const chapter = book.chapters[currentChapter];
  const chapterQuiz = book.quiz.find(q => q.chapter === chapter.id);

  const handleNextChapter = () => {
    if (currentChapter < book.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setShowQuiz(false);
      setQuizAnswers([]);
      setQuizScore(null);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setShowQuiz(false);
      setQuizAnswers([]);
      setQuizScore(null);
    }
  };

  const markChapterComplete = () => {
    if (!completedChapters.includes(chapter.id)) {
      setCompletedChapters([...completedChapters, chapter.id]);
    }
    if (chapterQuiz) {
      setShowQuiz(true);
    } else {
      handleNextChapter();
    }
  };

  const handleQuizSubmit = () => {
    if (chapterQuiz) {
      let score = 0;
      chapterQuiz.questions.forEach((q, index) => {
        if (quizAnswers[index] === q.correct) {
          score++;
        }
      });
      setQuizScore(score);
    }
  };

  const progress = ((currentChapter + 1) / book.chapters.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full h-[90vh] flex flex-col">
        <div className={`bg-gradient-to-r ${book.coverColor} p-6 rounded-t-xl text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
              <p className="opacity-90">{book.author}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Chapter {currentChapter + 1} of {book.chapters.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {!showQuiz ? (
            <>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Chapter {chapter.id}: {chapter.title}
              </h3>
              
              <div className="prose prose-lg max-w-none">
                {chapter.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>

              {chapter.keyPoints && (
                <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                    Key Points to Remember:
                  </h4>
                  <ul className="space-y-2">
                    {chapter.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-emerald-600 mr-2">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Chapter {chapter.id} Quiz
              </h3>
              
              {quizScore === null ? (
                <>
                  {chapterQuiz?.questions.map((q, qIndex) => (
                    <div key={qIndex} className="mb-6">
                      <p className="font-semibold text-gray-900 mb-3">
                        {qIndex + 1}. {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((option, oIndex) => (
                          <label
                            key={oIndex}
                            className={`block p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              quizAnswers[qIndex] === oIndex
                                ? 'border-emerald-600 bg-emerald-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              value={oIndex}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => {
                                const newAnswers = [...quizAnswers];
                                newAnswers[qIndex] = oIndex;
                                setQuizAnswers(newAnswers);
                              }}
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={handleQuizSubmit}
                    disabled={quizAnswers.length !== chapterQuiz?.questions.length}
                    className={`w-full py-3 rounded-lg font-semibold ${
                      quizAnswers.length === chapterQuiz?.questions.length
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit Quiz
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {quizScore === chapterQuiz?.questions.length ? '🎉' : '👍'}
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    You scored {quizScore} out of {chapterQuiz?.questions.length}!
                  </p>
                  <p className="text-gray-600 mb-6">
                    {quizScore === chapterQuiz?.questions.length 
                      ? 'Perfect! You\'ve mastered this chapter!' 
                      : 'Good effort! Keep learning!'}
                  </p>
                  <button
                    onClick={handleNextChapter}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
                  >
                    Continue to Next Chapter
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePreviousChapter}
              disabled={currentChapter === 0}
              className={`px-4 py-2 rounded-lg ${
                currentChapter === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ← Previous Chapter
            </button>
            
            <div className="flex gap-2">
              {book.chapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentChapter(index);
                    setShowQuiz(false);
                    setQuizAnswers([]);
                    setQuizScore(null);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === currentChapter
                      ? 'bg-emerald-600'
                      : completedChapters.includes(index + 1)
                      ? 'bg-emerald-400'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {!showQuiz ? (
              <button
                onClick={markChapterComplete}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                {chapterQuiz ? 'Take Quiz →' : 'Next Chapter →'}
              </button>
            ) : (
              <button
                onClick={() => setShowQuiz(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Back to Chapter
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}