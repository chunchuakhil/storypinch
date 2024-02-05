import React from 'react';

import PageHeading from '@/components/pageHeading/PageHeading';
import QuizListView from '@/views/quiz/quizList/QuizListView';

const QuizPage: React.FC = () => {
  return (
    <>
      <PageHeading title="Quiz page" />
      <QuizListView />
    </>
  );
};

export default QuizPage;
