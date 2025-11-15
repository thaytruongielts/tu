
import React from 'react';
import type { VocabularyItem } from '../types';
import { Volume2, BookText } from './Icons';

interface VocabularyCardProps {
  word: VocabularyItem;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ word }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8 transform hover:scale-[1.01] transition-transform duration-300">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
          <div>
            <h2 className="text-4xl font-extrabold text-indigo-600 capitalize">{word.word}</h2>
            <p className="text-gray-500 flex items-center mt-1">
              <Volume2 className="w-4 h-4 mr-2" />
              <span>{word.pronunciation}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="italic">{word.partOfSpeech}</span>
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            {word.synonyms.map((synonym) => (
              <span key={synonym} className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {synonym}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{word.definition}</p>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <BookText className="w-5 h-5 mr-2 text-indigo-500" />
            Common Collocations
          </h3>
          <ul className="space-y-4">
            {word.collocations.map((collocation) => (
              <li key={collocation.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800">
                  {collocation.phrase}
                  <span className="text-gray-500 font-normal ml-2">({collocation.vietnamese})</span>
                </p>
                <p className="text-gray-600 mt-1 text-sm italic">
                  Ex: "{collocation.example}"
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
