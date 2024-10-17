import { QuestionData, questionsData } from "../data/questionsData";

// Function to generate responses based on the user's question
export const generateResponse = (question: string): string => {
  const match: QuestionData | undefined = questionsData.find(
    (q) => q.question === question,
  );
  // Return the corresponding response if found, otherwise return a default message
  return match ? match.answer : "Sorry, I don't understand the question.";
};
