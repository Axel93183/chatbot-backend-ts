// A dictionary of predefined question-answer pairs
export interface QuestionData {
  question: string;
  answer: string;
}

export const questionsData: QuestionData[] = [
  {
    question: "What is your name?",
    answer: "I am a generic chatbot.",
  },
  {
    question: "How are you?",
    answer: "I am fine, thank you! And you?",
  },
  {
    question: "What can you do?",
    answer: "I can answer your questions and provide information.",
  },
  {
    question: "Tell me a joke.",
    answer:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  // Add more question-response pairs here as needed
];
