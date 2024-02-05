export const gotoAppHomePage = (): string => {
  return '/dashboard';
};

// story section
export const gotoStoryHomePage = (): string => {
  return `/story`;
};
export const gotoStoryIdPage = (id: string): string => {
  return `/story/${id}`;
};

// quiz section
export const gotoQuizHomePage = (): string => {
  return '/quiz';
};
export const gotoQuizStartPage = (): string => {
  return '/quiz/start';
};

// updates section
export const gotoUpdatesHomePage = (): string => {
  return '/updates';
};

// auth section
export const gotoLoginPage = (): string => {
  return '/login';
};
