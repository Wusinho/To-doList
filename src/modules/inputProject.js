/* eslint-disable */

import views from "../views/inputProject.html";

export default () => {
  const getElement = document.getElementById("root");
  getElement.innerHTML = views;

  return getElement;
};
