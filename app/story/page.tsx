import React from 'react';

import PageHeading from '@/components/pageHeading/PageHeading';
import StoryListView from '@/views/story/storieList/StoryListView';

const StoryPage: React.FC = () => {
  return (
    <>
      <PageHeading title="Story Page" />
      <StoryListView />
    </>
  );
};

export default StoryPage;
