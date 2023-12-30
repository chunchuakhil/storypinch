import { Button, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { gotoAppHomePage } from '@/router/router';
import StoryListPage from '@/screen/story/storieListPage/StoryListPage';

const StoryPage: React.FC = () => {
  return (
    <div>
      <Title order={2} mb={30}>
        Story Gallery
      </Title>
      <StoryListPage />

      <Link href={gotoAppHomePage()}>
        <Button color="blue" fullWidth mt="md" radius="md" w={'auto'}>
          Go to Home page
        </Button>
      </Link>
    </div>
  );
};

export default StoryPage;
