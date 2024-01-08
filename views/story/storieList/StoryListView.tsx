'use client';

import { Flex, TextInput } from '@mantine/core';
import React, { useState } from 'react';

import SearchNotFound from '@/components/searchNotFound/SearchNotFound';
import StoryCard from '@/components/story/storyCard/StoryCard';
import storyList from '@/data/story/story.json';
import { type IStory } from '@/types/Story';

const StoryListView: React.FC = () => {
  const [filteredList, setfilteredList] = useState<IStory[]>(storyList);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = storyList.filter((story) =>
      story.genre.toLowerCase().includes(searchValue),
    );
    setfilteredList(filtered);
  };

  return (
    <>
      <TextInput
        label="Search"
        placeholder="Search genre ..."
        size="md"
        mx={'auto'}
        w={'30rem'}
        mb={'3rem'}
        onChange={handleSearch}
      />
      <Flex
        gap="xl"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        {filteredList.length === 0 ? (
          <SearchNotFound message="Not found!" />
        ) : (
          filteredList.map((story) => {
            return (
              <StoryCard
                id={story.id}
                genre={story.genre}
                story={story.story}
                title={story.title}
                key={story.id}
              />
            );
          })
        )}
      </Flex>
    </>
  );
};

export default StoryListView;
