/* eslint-disable */

export default (name) => {
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  return `${name}${randomNumber}`;
};
