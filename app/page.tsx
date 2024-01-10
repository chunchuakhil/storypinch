import React from 'react';

import LoginView from '@/views/login/LoginView';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <LoginView />
    </main>
  );
};

export default Home;
