'use client';

import { AppShell, Group, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface StoryLayoutProps {
  children: React.ReactNode;
}

export const StoryLayout: React.FC<StoryLayoutProps> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      aside={{
        width: 200,
        breakpoint: 'md',
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Image src="/light-bulb.png" alt="logo" width={40} height={40} />
          <Title order={3}>Story Pinch</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        {/* Aside is hidden on on md breakpoint and cannot be opened when it is
        collapsed */}
        {children}
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};
