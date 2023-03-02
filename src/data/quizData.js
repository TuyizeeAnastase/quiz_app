export const questions = [
  {
    id: 0,
    question: `Who is the father of C language?`,
    options: [
      { answer: "Dennis Ritchie", isCorrect: true },
      { answer: "Steve Jobs", isCorrect: false },
      { answer: "James Gosling", isCorrect: false },
      { answer: "Rasmus Lerdorf", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: `Which of the following is not a valid C variable name`,
    options: [
      { answer: " int number", isCorrect: false },
      { answer: "float rate", isCorrect: false },
      { answer: "int $main", isCorrect: true },
      { answer: "int variable_count", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: `Which is valid C expression?`,
    options: [
      { answer: " int my_num = 100000", isCorrect: true },
      { answer: "int my_num = 100,000;", isCorrect: false },
      { answer: "int my num = 1000", isCorrect: false },
      { answer: "int $my_num = 10000", isCorrect: false },
    ],
  },
];
