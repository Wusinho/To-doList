/* eslint-disable */

export default () => {
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  localStorage.setItem("+Counter", randomNumber);
  return randomNumber;
};
