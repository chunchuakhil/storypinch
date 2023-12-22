'use client';
// eslint-disable-next-line sort-imports
import { Badge, Button, Card, Group, Image, rem, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import React from 'react';

const StoryCard: React.FC = () => {
  const icon = <IconHeartFilled style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={250}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge leftSection={icon} color="blue">
          Nature
        </Badge>
      </Group>
      {/* <Badge color="blue">Badge</Badge> */}

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Read more
      </Button>
    </Card>
  );
};
export default StoryCard;
