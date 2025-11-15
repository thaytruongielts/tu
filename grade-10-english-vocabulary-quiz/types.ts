
export interface Collocation {
  id: number;
  phrase: string;
  vietnamese: string;
  example: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface VocabularyItem {
  id: number;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  synonyms: string[];
  collocations: Collocation[];
  quiz: QuizQuestion[];
}
