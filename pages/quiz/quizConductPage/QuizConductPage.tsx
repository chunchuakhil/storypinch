'use client';
import React from 'react';

import QuizQuestion from '@/components/quiz/question/QuizQuestion';
import quizData from '@/data/quiz/quizData.json';

const QuizConductPage: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export default QuizConductPage;
