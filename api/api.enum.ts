import { type AxiosResponse } from 'axios';

import { api } from './api';

export interface IQuizQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const getApiQuizQuestions = async (): Promise<IQuizQuestion[]> => {
  const response: AxiosResponse<IQuizQuestion[]> = await api.get(
    '/api.php?amount=10&category=9&type=multiple',
  );
  // Assuming your API returns an array of QuizQuestion objects
  return response.data;
};
