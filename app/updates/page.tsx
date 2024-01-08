import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { gotoAppHomePage } from '@/router/router';

const page: React.FC = () => {
  return (
    <div>
      <span>All application updates will be shown here</span>

      <Link href={gotoAppHomePage()}>
        <Button color="blue" fullWidth mt="md" radius="md" w={'auto'}>
          Go to Home page
        </Button>
      </Link>
    </div>
  );
};

export default page;
