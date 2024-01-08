'use client';
import React from 'react';

import QuizQuestion from '@/components/quiz/question/QuizQuestion';
import quizData from '@/data/quiz/quizData.json';

const QuizConductView: React.FC = () => {
  return (
    <>
      {quizData.map((item, index) => {
        return (
          <QuizQuestion
            key={index}
            question={item.question}
            options={item.options}
            answer={item.answer}
          />
        );
      })}
    </>
  );
};

export default QuizConductView;
