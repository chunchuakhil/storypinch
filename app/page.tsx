import { Title } from '@mantine/core';
import React from 'react';

import StoryListPage from '@/pages/storieListPage/StoryListPage';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Title order={2} mb={30}>
        Story Gallery
      </Title>

      {/* <Button component="a">Next link button</Button> */}
      <StoryListPage />
    </main>
  );
};

export default Home;
