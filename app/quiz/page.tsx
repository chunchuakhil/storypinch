import React from 'react';

import PageHeading from '@/components/pageHeading/PageHeading';
import QuizConductView from '@/views/quiz/quizConduct/QuizConductView';

const QuizPage: React.FC = () => {
  return (
    <>
      <PageHeading title="Quiz page" />
      <QuizConductView />;
    </>
  );
};

export default QuizPage;
