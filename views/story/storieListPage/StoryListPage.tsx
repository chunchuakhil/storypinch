'use client';

import { Flex } from '@mantine/core';
import React from 'react';

import StoryCard from '@/components/story/storyCard/StoryCard';
import { type IStory } from '@/types/Story';

interface IStoryListPageProps {
  storyList: IStory[];
}

const StoryListPage: React.FC<IStoryListPageProps> = ({ storyList }) => {
  return (
    <Flex
      gap="xl"
      justify="center"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {storyList.map((story) => {
        return (
          <StoryCard
            id={story.id}
            genre={story.genre}
            story={story.story}
            title={story.title}
            key={story.id}
          />
        );
      })}
    </Flex>
  );
};

export default StoryListPage;
