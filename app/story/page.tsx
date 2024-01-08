'use client'

import storyList from '@/data/story/story.json';
import { gotoAppHomePage } from '@/router/router';
import StoryListPage from '@/screen/story/storieListPage/StoryListPage';
import { Button, Input, Title } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';

export interface IStory {

  id: string;
  title: string;
  genre: string;
  story: string[];

}

const StoryPage: React.FC = () => {



  const [filteredList, setfilteredList] = useState<IStory[]>(storyList);

  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = storyList.filter((story) =>
      story.title.toLowerCase().includes(searchValue),
    );
    setfilteredList(filtered);
  };


  return (
    <div>
      <Title order={2} mb={30}>
        Story Gallery
      </Title>
      <Input placeholder="Search stories..."
        // style={{ marginBottom: '20px' }}
        size='sm'
        radius="md"
        style={{ marginBottom: '20px', width: '200px' }}
        // value={input}
        // onChange={(e)=>setInput(e.target.value)}

        onChange={handleSearch}
      />
      <StoryListPage storyList={filteredList} />
      <Link href={gotoAppHomePage()}>
        <Button color="blue" fullWidth mt="md" radius="md" w={'auto'}>
          Go to Home page
        </Button>
      </Link>
    </div>
  );
};

export default StoryPage;
