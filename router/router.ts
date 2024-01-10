export const gotoAppHomePage = (): string => {
  return '/private/dashboard';
};

// story section
export const gotoStoryHomePage = (): string => {
  return `/private/story`;
};
export const gotoStoryIdPage = (id: string): string => {
  return `/private/story/${id}`;
};

// quiz section
export const gotoQuizHomePage = (): string => {
  return '/private/quiz';
};

// updates section
export const gotoUpdatesHomePage = (): string => {
  return '/private/updates';
};

// auth section
export const gotoLoginPage = (): string => {
  return '/login';
};
