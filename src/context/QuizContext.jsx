import { createContext, useReducer } from 'react';
import { initialQuestions } from '../data/questions';
import { quizReducer } from './quizReducer';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, dispatch] = useReducer(quizReducer, initialQuestions);

  return (
    <QuizContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
