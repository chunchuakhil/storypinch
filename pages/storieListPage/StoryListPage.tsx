import { Flex } from '@mantine/core';
import React from 'react';

import StoryCard from '@/components/storyCard/StoryCard';

const StoryListPage: React.FC = () => {
  return (
    <Flex
      gap="xl"
      justify="center"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {[1, 2, 3, 4, 5, 6].map((_, index) => {
        return <StoryCard key={index} />;
      })}
    </Flex>
  );
};

export default StoryListPage;
