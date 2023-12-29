import { Button, Flex, Group, Paper, Radio } from '@mantine/core';
import React from 'react';

const Quiz: React.FC = () => {
  return (
    <Paper>
      <Radio.Group
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description=""
      >
        <Group mt="xs">
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Radio value="react" label="React" />
            <Radio value="svelte" label="Svelte" />
            <Radio value="ng" label="Angular" />
            <Radio value="vue" label="Vue" />
          </Flex>
        </Group>
      </Radio.Group>
      <Button variant="filled" mt={'sm'}>
        Submit
      </Button>
    </Paper>
  );
};

export default Quiz;
