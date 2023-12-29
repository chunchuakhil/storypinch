import { Container, Title } from '@mantine/core';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Container size="lg">
        <Title order={1} mb={30}>
          Welcome to Learn with dopamine
        </Title>
      </Container>
    </main>
  );
};

export default Home;
