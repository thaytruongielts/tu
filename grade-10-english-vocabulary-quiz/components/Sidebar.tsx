
import React from 'react';
import type { VocabularyItem } from '../types';

interface SidebarProps {
  words: VocabularyItem[];
  selectedWordId: number;
  onSelectWord: (id: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ words, selectedWordId, onSelectWord, isOpen, setIsOpen }) => {
  const sidebarContent = (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Vocabulary List</h2>
      <nav>
        <ul>
          {words.map((word) => (
            <li key={word.id}>
              <button
                onClick={() => onSelectWord(word.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                  selectedWordId === word.id
                    ? 'bg-indigo-700 text-white shadow-inner'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {word.id}. {word.word.charAt(0).toUpperCase() + word.word.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-30 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-gray-800 text-white pt-16">
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
