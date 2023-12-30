/* eslint-disable sort-imports */
import { Badge, Button, Card, Flex, Group, Image, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { gotoStoryIdPage } from '@/router/router';
import { type IStory } from '@/types/Story';
import ShowStoryIcon from '@/utils/ShowStoryIcon';

const StoryCard: React.FC<IStory> = ({ genre, story, title, id }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={250} mih={430}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Flex direction={'column'}>
          <Text mb={20} fw={500}>
            {title}
          </Text>
          <Badge leftSection={<ShowStoryIcon genre={genre} />} color="blue">
            {genre}
          </Badge>
        </Flex>
      </Group>

      <Flex direction={'column'} justify={'space-between'}>
        <Text size="sm" c="dimmed" lineClamp={5}>
          {story.join(' ')}
        </Text>
        <Link href={gotoStoryIdPage(id)}>
          <Button fullWidth mt="md" radius="md">
            Read more
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};
export default StoryCard;
