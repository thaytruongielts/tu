import React from 'react';
import { BookOpen, Trophy } from './Icons';

interface HeaderProps {
  correctCount: number;
  totalQuestions: number;
}

const Header: React.FC<HeaderProps> = ({ correctCount, totalQuestions }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
              Grade 10 English Vocabulary
            </h1>
          </div>
          <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full">
            <Trophy className="h-6 w-6 text-amber-500" />
            <span className="font-bold text-lg text-gray-700 tabular-nums">
              {correctCount} / {totalQuestions}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;