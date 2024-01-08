import { Title } from '@mantine/core';
import React from 'react';

interface PageHeadingProps {
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Title order={2} mb={20}>
      {title}
    </Title>
  );
};

export default PageHeading;
