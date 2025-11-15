
import type { VocabularyItem } from './types';

export const vocabularyData: VocabularyItem[] = [
  {
    id: 1,
    word: "research",
    pronunciation: "/rɪ'sɜ:rtʃ/",
    partOfSpeech: "noun",
    definition: "A detailed study of a subject, especially in order to discover new information or reach a new understanding.",
    synonyms: ["study", "investigation", "analysis"],
    collocations: [
      { id: 1, phrase: "do research", vietnamese: "thực hiện nghiên cứu", example: "Students must do research for their final projects." },
      { id: 2, phrase: "research finding", vietnamese: "kết quả nghiên cứu", example: "The research finding was published in a famous journal." },
      { id: 3, phrase: "research material", vietnamese: "tài liệu nghiên cứu", example: "The library provided a lot of research material." },
      { id: 4, phrase: "research a topic", vietnamese: "nghiên cứu một chủ đề", example: "She needs to research a topic for her Master's thesis." }
    ],
    quiz: [
      { id: 23, question: "Scientists around the world continue to _________ on finding a cure for the disease.", answer: "do research" },
      { id: 24, question: "Before writing the essay, you should carefully examine all the available _________ online.", answer: "research material" }
    ]
  },
  {
    id: 2,
    word: "opportunity",
    pronunciation: "/ˌɒpər'tju:nəti/",
    partOfSpeech: "noun",
    definition: "A time or set of circumstances that makes it possible to do something.",
    synonyms: ["chance", "occasion", "possibility"],
    collocations: [
      { id: 1, phrase: "miss an opportunity", vietnamese: "bỏ lỡ cơ hội", example: "Don't miss an opportunity to study abroad." },
      { id: 2, phrase: "seize an opportunity", vietnamese: "nắm bắt cơ hội", example: "She decided to seize an opportunity and start her own business." },
      { id: 3, phrase: "equal opportunity", vietnamese: "cơ hội bình đẳng", example: "The company promotes equal opportunity for all employees." },
      { id: 4, phrase: "career opportunity", vietnamese: "cơ hội nghề nghiệp", example: "The new economic zone offers many career opportunity." }
    ],
    quiz: [
      { id: 23, question: "The new investment brings the city plenty of excellent _________ for young graduates.", answer: "career opportunity" },
      { id: 24, question: "Students who study hard are more likely to _________ when applying to top universities.", answer: "seize an opportunity" }
    ]
  },
  {
    id: 3,
    word: "damage",
    pronunciation: "/'dæmɪdʒ/",
    partOfSpeech: "verb/noun",
    definition: "1. To harm or injure something. 2. Physical harm that is done to something.",
    synonyms: ["harm", "destroy", "hurt"],
    collocations: [
      { id: 1, phrase: "cause damage", vietnamese: "gây thiệt hại", example: "The storm is expected to cause damage across the coast." },
      { id: 2, phrase: "irreversible damage", vietnamese: "thiệt hại không thể phục hồi", example: "Pollution is causing irreversible damage to the coral reefs." },
      { id: 3, phrase: "suffer damage", vietnamese: "chịu đựng thiệt hại", example: "The house did not suffer damage from the fire." },
      { id: 4, phrase: "assess the damage", vietnamese: "đánh giá thiệt hại", example: "Insurance companies came to assess the damage after the flood." }
    ],
    quiz: [
      { id: 23, question: "After the earthquake, rescue teams immediately went out to _________ to buildings and infrastructure.", answer: "assess the damage" },
      { id: 24, question: "Smoking can _________ to your lungs and heart over time.", answer: "cause damage" }
    ]
  },
  {
    id: 4,
    word: "habit",
    pronunciation: "/'hæbɪt/",
    partOfSpeech: "noun",
    definition: "Something that you do often and regularly, sometimes without knowing that you are doing it.",
    synonyms: ["custom", "routine", "practice"],
    collocations: [
      { id: 1, phrase: "break a habit", vietnamese: "bỏ một thói quen", example: "It is hard to break a habit of staying up late." },
      { id: 2, phrase: "form a habit", vietnamese: "hình thành thói quen", example: "It takes about 21 days to form a habit." },
      { id: 3, phrase: "bad habit", vietnamese: "thói quen xấu", example: "Nail-biting is a nervous bad habit." },
      { id: 4, phrase: "force of habit", vietnamese: "sức mạnh của thói quen", example: "I went to my old office this morning out of force of habit." }
    ],
    quiz: [
      { id: 23, question: "To live a healthier life, you should try to _________ like eating fast food.", answer: "break a habit" },
      { id: 24, question: "Parents play a critical role in helping children _________ of reading.", answer: "form a habit" }
    ]
  },
  {
    id: 5,
    word: "progress",
    pronunciation: "/'proʊɡres/",
    partOfSpeech: "noun",
    definition: "1. Movement towards an improved or more developed state. 2. The process of developing or improving.",
    synonyms: ["improvement", "advance", "development"],
    collocations: [
      { id: 1, phrase: "make progress", vietnamese: "đạt được tiến bộ", example: "We are finally starting to make progress on the new building." },
      { id: 2, phrase: "rapid progress", vietnamese: "tiến bộ nhanh chóng", example: "Technology has made rapid progress in the last decade." },
      { id: 3, phrase: "progress report", vietnamese: "báo cáo tiến độ", example: "The manager gave a progress report at the end of the week." },
      { id: 4, phrase: "slow progress", vietnamese: "tiến bộ chậm", example: "We were disappointed by the slow progress of the negotiations." }
    ],
    quiz: [
      { id: 23, question: "Despite a few obstacles, the team continues to _________ toward completing the project.", answer: "make progress" },
      { id: 24, question: "The teacher sent home a _________ detailing the student's work over the semester.", answer: "progress report" }
    ]
  },
  {
    id: 6,
    word: "pressure",
    pronunciation: "/'preʃər/",
    partOfSpeech: "noun",
    definition: "1. The force that is produced when something presses or pushes against something else. 2. Difficult circumstances that cause worry or difficulty.",
    synonyms: ["stress", "burden", "tension"],
    collocations: [
      { id: 1, phrase: "under pressure", vietnamese: "chịu áp lực", example: "Students are often under pressure to get high scores." },
      { id: 2, phrase: "financial pressure", vietnamese: "áp lực tài chính", example: "They faced serious financial pressure after losing their jobs." },
      { id: 3, phrase: "put pressure on", vietnamese: "gây áp lực lên", example: "The government decided to put pressure on the polluting factories." },
      { id: 4, phrase: "blood pressure", vietnamese: "huyết áp", example: "The doctor advised him to monitor his blood pressure regularly." }
    ],
    quiz: [
      { id: 23, question: "The team performed well despite being _________ to win the championship.", answer: "under pressure" },
      { id: 24, question: "During the annual check-up, the nurse will check the patient's heart rate and _________.", answer: "blood pressure" }
    ]
  },
  {
    id: 7,
    word: "advice",
    pronunciation: "/əd'vaɪs/",
    partOfSpeech: "noun",
    definition: "Suggestions about what you should do or how you should act in a particular situation (Không đếm được).",
    synonyms: ["suggestion", "guidance", "recommendation"],
    collocations: [
      { id: 1, phrase: "give advice", vietnamese: "cho lời khuyên", example: "My teacher always gives advice on how to study effectively." },
      { id: 2, phrase: "ask for advice", vietnamese: "xin lời khuyên", example: "She decided to ask for advice from an experienced mentor." },
      { id: 3, phrase: "sound advice", vietnamese: "lời khuyên đúng đắn/hữu ích", example: "The lawyer offered him some very sound advice." },
      { id: 4, phrase: "piece of advice", vietnamese: "một lời khuyên - dùng để đếm", example: "Let me give you one piece of advice." }
    ],
    quiz: [
      { id: 23, question: "If you are unsure about your university choices, you should _________ from your parents or teachers.", answer: "ask for advice" },
      { id: 24, question: "The career counselor offered students _________ on finding the right job path.", answer: "sound advice" }
    ]
  },
  {
    id: 8,
    word: "impact",
    pronunciation: "/'ɪmpækt/",
    partOfSpeech: "noun/verb",
    definition: "The powerful effect that something has on someone or something.",
    synonyms: ["effect", "influence", "result"],
    collocations: [
      { id: 1, phrase: "have an impact", vietnamese: "có tác động", example: "The new policy will have an impact on the whole community." },
      { id: 2, phrase: "negative impact", vietnamese: "tác động tiêu cực", example: "The factory's waste had a negative impact on the river." },
      { id: 3, phrase: "measure the impact", vietnamese: "đo lường tác động", example: "It is difficult to measure the impact of social media on teenagers." },
      { id: 4, phrase: "minimize the impact", vietnamese: "giảm thiểu tác động", example: "We must find ways to minimize the impact of climate change." }
    ],
    quiz: [
      { id: 23, question: "The government is working hard to _________ of the economic slowdown on small businesses.", answer: "minimize the impact" },
      { id: 24, question: "We need to consider the long-term consequences that the construction might _________ on the local wildlife.", answer: "have an impact" }
    ]
  },
  {
    id: 9,
    word: "solution",
    pronunciation: "/sə'lu:ʃən/",
    partOfSpeech: "noun",
    definition: "A way of solving a problem or dealing with a difficult situation.",
    synonyms: ["answer", "resolution", "key"],
    collocations: [
      { id: 1, phrase: "find a solution", vietnamese: "tìm ra giải pháp", example: "We must quickly find a solution to the energy shortage." },
      { id: 2, phrase: "long-term solution", vietnamese: "giải pháp lâu dài", example: "Building a new dam is seen as a long-term solution to flooding." },
      { id: 3, phrase: "effective solution", vietnamese: "giải pháp hiệu quả", example: "Is remote working an effective solution for reducing traffic?" },
      { id: 4, phrase: "propose a solution", vietnamese: "đề xuất giải pháp", example: "The committee will propose a solution at the next meeting." }
    ],
    quiz: [
      { id: 23, question: "Instead of complaining, we should try to _________ that everyone can agree on.", answer: "find a solution" },
      { id: 24, question: "Experts agree that public transportation is the most _________ to the city's air pollution problem.", answer: "effective solution" }
    ]
  },
  {
    id: 10,
    word: "attention",
    pronunciation: "/ə'tenʃən/",
    partOfSpeech: "noun",
    definition: "The act of listening to, looking at, or thinking about something or someone carefully.",
    synonyms: ["focus", "concentration", "notice"],
    collocations: [
      { id: 1, phrase: "pay attention", vietnamese: "chú ý", example: "Please pay attention to the following instructions." },
      { id: 2, phrase: "draw attention to", vietnamese: "gây sự chú ý đến", example: "The advertisement aimed to draw attention to the issue of homelessness." },
      { id: 3, phrase: "capture attention", vietnamese: "thu hút sự chú ý", example: "The brilliant performance managed to capture attention of the whole audience." },
      { id: 4, phrase: "lack of attention", vietnamese: "thiếu sự chú ý", example: "The student's poor grades were due to a lack of attention in class." }
    ],
    quiz: [
      { id: 23, question: "The speaker used a powerful anecdote to _________ the need for urgent climate action.", answer: "draw attention to" },
      { id: 24, question: "If you want to understand the lesson, you must _________ to what the teacher is saying.", answer: "pay attention" }
    ]
  },
  {
    id: 11,
    word: "view",
    pronunciation: "/vju:/",
    partOfSpeech: "noun",
    definition: "1. What you can see from a particular place. 2. An opinion or way of thinking about something.",
    synonyms: ["opinion", "perspective", "scenery"],
    collocations: [
      { id: 1, phrase: "point of view", vietnamese: "quan điểm", example: "From my point of view, the decision was unfair." },
      { id: 2, phrase: "stunning view", vietnamese: "khung cảnh tuyệt đẹp", example: "The balcony offers a stunning view of the ocean." },
      { id: 3, phrase: "hold a view", vietnamese: "có một quan điểm", example: "Many people hold a view that stricter laws are necessary." },
      { id: 4, phrase: "landscape view", vietnamese: "khung cảnh thiên nhiên", example: "The window provided a beautiful landscape view of the mountains." }
    ],
    quiz: [
      { id: 23, question: "The hotel room was expensive, but it was worth it for the _________ of the city skyline.", answer: "stunning view" },
      { id: 24, question: "You should try to understand the problem from your opponent's _________ before judging them.", answer: "point of view" }
    ]
  },
  {
    id: 12,
    word: "choice",
    pronunciation: "/tʃɔɪs/",
    partOfSpeech: "noun",
    definition: "An act of choosing between two or more possibilities.",
    synonyms: ["selection", "option", "decision"],
    collocations: [
      { id: 1, phrase: "make a choice", vietnamese: "đưa ra lựa chọn", example: "You need to make a choice about your major soon." },
      { id: 2, phrase: "wide choice", vietnamese: "nhiều lựa chọn", example: "The supermarket offers a wide choice of imported goods." },
      { id: 3, phrase: "have no choice", vietnamese: "không có lựa chọn", example: "Since the buses were on strike, we have no choice but to walk." },
      { id: 4, phrase: "poor choice", vietnamese: "lựa chọn tồi", example: "Leaving the car unlocked was a poor choice." }
    ],
    quiz: [
      { id: 23, question: "After considering all the pros and cons, I finally managed to _________ for my final university application.", answer: "make a choice" },
      { id: 24, question: "In this competitive market, customers have a _________ of products and services.", answer: "wide choice" }
    ]
  },
  {
    id: 13,
    word: "access",
    pronunciation: "/'ækses/",
    partOfSpeech: "noun/verb",
    definition: "The opportunity or right to use something or to see someone.",
    synonyms: ["entry", "admission", "availability"],
    collocations: [
      { id: 1, phrase: "gain access", vietnamese: "có được quyền truy cập", example: "Only authorized personnel can gain access to the server." },
      { id: 2, phrase: "limited access", vietnamese: "tiếp cận hạn chế", example: "There is limited access to clean water in remote villages." },
      { id: 3, phrase: "free access", vietnamese: "truy cập miễn phí", example: "The library provides free access to the internet for all members." },
      { id: 4, phrase: "easy access", vietnamese: "dễ tiếp cận", example: "The new office is located near the station, offering easy access by train." }
    ],
    quiz: [
      { id: 23, question: "Students living far from the school often have _________ to quality educational resources.", answer: "limited access" },
      { id: 24, question: "With the correct password, you can _________ to your personal files from any computer.", answer: "gain access" }
    ]
  },
  {
    id: 14,
    word: "difference",
    pronunciation: "/'dɪfrəns/",
    partOfSpeech: "noun",
    definition: "The way in which two or more things are not like each other.",
    synonyms: ["distinction", "variation", "dissimilarity"],
    collocations: [
      { id: 1, phrase: "make a difference", vietnamese: "tạo ra sự khác biệt", example: "Volunteering can really make a difference in the community." },
      { id: 2, phrase: "tell the difference", vietnamese: "phân biệt", example: "It's hard to tell the difference between the fake and the original painting." },
      { id: 3, phrase: "cultural difference", vietnamese: "sự khác biệt văn hóa", example: "When traveling, one must respect the local cultural difference." },
      { id: 4, phrase: "noticeable difference", vietnamese: "sự khác biệt đáng chú ý", example: "After the renovation, there was a noticeable difference in the building's appearance." }
    ],
    quiz: [
      { id: 23, question: "After switching to a healthier diet, she noticed a _________ in her energy levels.", answer: "noticeable difference" },
      { id: 24, question: "Small actions, when done consistently, can _________ to the environment.", answer: "make a difference" }
    ]
  },
  {
    id: 15,
    word: "role",
    pronunciation: "/rəʊl/",
    partOfSpeech: "noun",
    definition: "The function or position that someone has in an organization, in society, or in a relationship.",
    synonyms: ["function", "part", "position"],
    collocations: [
      { id: 1, phrase: "play a role", vietnamese: "đóng vai trò", example: "Education must play a role in protecting the environment." },
      { id: 2, phrase: "leading role", vietnamese: "vai trò chủ đạo/vai chính", example: "She took the leading role in the school play this year." },
      { id: 3, phrase: "crucial role", vietnamese: "vai trò quan trọng", example: "Technology plays a crucial role in modern life." },
      { id: 4, phrase: "defining role", vietnamese: "vai trò xác định", example: "His early success played a defining role in his later career." }
    ],
    quiz: [
      { id: 23, question: "The school council is looking for a student to take the _________ in organizing the graduation ceremony.", answer: "leading role" },
      { id: 24, question: "Parents _________ in shaping their children's personalities and values.", answer: "play a role" }
    ]
  }
];
