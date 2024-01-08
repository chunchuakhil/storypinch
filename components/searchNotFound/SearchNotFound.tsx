import { Paper, Title } from '@mantine/core';
import React from 'react';

interface SearchNotFoundProps {
  message: string;
}

const SearchNotFound: React.FC<SearchNotFoundProps> = ({ message }) => {
  return (
    <Paper shadow="lg" p="xl" w={'15rem'} display={'flex'}>
      <Title order={4} m={'auto'}>
        {message}
      </Title>
    </Paper>
  );
};

export default SearchNotFound;
