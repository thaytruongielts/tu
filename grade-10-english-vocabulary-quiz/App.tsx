import React, { useState, useMemo } from 'react';
import { vocabularyData } from './data';
import type { VocabularyItem } from './types';
import Sidebar from './components/Sidebar';
import VocabularyCard from './components/VocabularyCard';
import Quiz from './components/Quiz';
import Header from './components/Header';
import { Menu, X } from './components/Icons';

const App: React.FC = () => {
  const [selectedWordId, setSelectedWordId] = useState<number>(vocabularyData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [quizProgress, setQuizProgress] = useState<Record<string, boolean>>({});

  const selectedWord = useMemo(() => {
    return vocabularyData.find(item => item.id === selectedWordId) || vocabularyData[0];
  }, [selectedWordId]);

  const totalQuestions = useMemo(() =>
    vocabularyData.reduce((sum, item) => sum + item.quiz.length, 0),
    []
  );

  const correctCount = useMemo(() =>
    Object.values(quizProgress).filter(isCorrect => isCorrect).length,
    [quizProgress]
  );

  const handleSelectWord = (id: number) => {
    setSelectedWordId(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    const uniqueQuestionKey = `${selectedWord.id}-${questionId}`;
    if (quizProgress.hasOwnProperty(uniqueQuestionKey)) {
      return;
    }
    setQuizProgress(prev => ({
      ...prev,
      [uniqueQuestionKey]: isCorrect,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header correctCount={correctCount} totalQuestions={totalQuestions} />
      
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-5 right-5 z-30 p-2 bg-white rounded-full shadow-lg text-gray-600"
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <div className="flex">
        <Sidebar 
          words={vocabularyData}
          selectedWordId={selectedWordId}
          onSelectWord={handleSelectWord}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64 transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <VocabularyCard word={selectedWord} />
            <Quiz 
              key={selectedWord.id}
              questions={selectedWord.quiz}
              options={selectedWord.collocations.map(c => c.phrase)}
              onAnswer={handleAnswer}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;