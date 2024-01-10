import '@mantine/core/styles.css';
import '../globals.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import { StoryLayout } from '@/layout/StoryLayout';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <MantineProvider>
      <StoryLayout>{children}</StoryLayout>
    </MantineProvider>
  );
};

export default RootLayout;
