'use client';

import '@mantine/core/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import React from 'react';

import { StoryLayout } from '@/layout/StoryLayout';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <StoryLayout>{children}</StoryLayout>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
