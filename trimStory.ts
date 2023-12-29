export const getFirstWords = (text: string, numWords: number = 25): string => {
  const words: string[] = text.split(' '); // Split the text into words using space as a delimiter
  const firstWords: string[] = words.slice(0, numWords); // Take the first numWords words
  const result: string = firstWords.join(' '); // Join the words back into a string
  return result;
};
