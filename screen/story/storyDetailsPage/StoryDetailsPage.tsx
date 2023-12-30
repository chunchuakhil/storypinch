'use client';

import { Paper, Text, Title } from '@mantine/core';
import React from 'react';

import storyData from '@/data/story/story.json';

const StoryDetailsPage: React.FC = () => {
  const paramsStoryId = '1';
  if (typeof paramsStoryId !== 'string') {
    // Handle the case where storyId is not a string
    return <div>Invalid story ID</div>;
  }

  const selectedStory = storyData.find((story) => story.id === paramsStoryId);

  if (selectedStory?.title == null) {
    return <Title order={2}>Story not found !</Title>;
  }

  return (
    <Paper shadow="xs" radius="xs" p="xl" m={'xl'}>
      <Title order={2} mb={30}>
        {selectedStory?.title}
      </Title>
      {selectedStory?.story.map((paragraph, index) => {
        return (
          <Text mb={20} key={index}>
            {paragraph}
          </Text>
        );
      })}
    </Paper>
  );
};

export default StoryDetailsPage;
