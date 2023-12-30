'use client';

import { AppShell, Burger, Group, Paper, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrain,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconHome2,
} from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  gotoAppHomePage,
  gotoQuizHomePage,
  gotoStoryHomePage,
  gotoUpdatesHomePage,
} from '@/router/router';

interface StoryLayoutProps {
  children: React.ReactNode;
}

const appSideBarNavigation = [
  { icon: IconHome2, label: 'Home', goto: gotoAppHomePage() },
  { icon: IconBrain, label: 'Quiz', goto: gotoQuizHomePage() },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Stories',
    goto: gotoStoryHomePage(),
  },
  { icon: IconCalendarStats, label: 'Updates', goto: gotoUpdatesHomePage() },
];

export const StoryLayout: React.FC<StoryLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 230, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{
        width: 200,
        breakpoint: 'md',
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {appSideBarNavigation.map((item, index) => {
          return (
            <Link
              href={item.goto}
              key={index}
              onClick={() => {
                setActive(index);
              }}
            >
              <Paper
                shadow="xs"
                p="xs"
                bg={index === active ? 'blue' : ''}
                mb={'xs'}
              >
                <Text>{item.label}</Text>
              </Paper>
            </Link>
          );
        })}
      </AppShell.Navbar>
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
