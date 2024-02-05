'use client';
import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { gotoQuizStartPage } from '@/router/router';

const QuizCard: React.FC = () => {
  return (
    <div>
      <Link href={gotoQuizStartPage()}>
        <Button>Start Quiz</Button>
      </Link>
    </div>
  );
};

export default QuizCard;
