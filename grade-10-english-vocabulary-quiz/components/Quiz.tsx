import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import { CheckCircle, XCircle, HelpCircle } from './Icons';

interface QuizProps {
  questions: QuizQuestion[];
  options: string[];
  onAnswer: (questionId: number, isCorrect: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, options, onAnswer }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({});

  const handleSelectAnswer = (question: QuizQuestion, answer: string) => {
    if (selectedAnswers[question.id]) return;

    const isCorrect = question.answer === answer;
    onAnswer(question.id, isCorrect);
    
    setSelectedAnswers(prev => ({
      ...prev,
      [question.id]: answer,
    }));
  };

  const getButtonClass = (question: QuizQuestion, option: string) => {
    const selected = selectedAnswers[question.id];
    if (!selected) {
      return "bg-white hover:bg-indigo-50 border-gray-300 text-gray-700";
    }
    if (option === question.answer) {
      return "bg-green-100 border-green-400 text-green-800";
    }
    if (option === selected && option !== question.answer) {
      return "bg-red-100 border-red-400 text-red-800";
    }
    return "bg-white border-gray-300 text-gray-700 opacity-70";
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-indigo-500"/>
            Practice Questions
        </h3>
        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.id}>
              <p className="font-medium text-gray-700 mb-3">
                <span className="font-bold">Question {q.id}:</span> {q.question.split('_________')[0]}
                <span className="inline-block bg-gray-200 rounded-md px-4 py-1 mx-1 text-gray-400">...</span>
                {q.question.split('_________')[1]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {options.map((option) => {
                  const isSelected = selectedAnswers[q.id] === option;
                  const isCorrect = selectedAnswers[q.id] && option === q.answer;
                  const isIncorrect = isSelected && option !== q.answer;

                  return (
                    <button
                      key={option}
                      onClick={() => handleSelectAnswer(q, option)}
                      disabled={!!selectedAnswers[q.id]}
                      className={`w-full p-3 text-left rounded-lg border-2 font-medium transition-all duration-200 flex items-center justify-between ${getButtonClass(q, option)} disabled:cursor-not-allowed`}
                    >
                      <span>{option}</span>
                      {isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {isIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </button>
                  );
                })}
              </div>
              {selectedAnswers[q.id] && selectedAnswers[q.id] !== q.answer && (
                  <div className="mt-3 p-2 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
                      <strong>Correct Answer:</strong> {q.answer}
                  </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;