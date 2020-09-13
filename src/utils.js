export const generateRandomInt = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const getRandomArrayElement = (array) => {
  return Math.floor(Math.random() * array.length);
};