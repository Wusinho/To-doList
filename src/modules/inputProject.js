/* eslint-disable */

import views from "../views/inputProject.html";

export default () => {
  const divElement = document.createElement("div");

  divElement.innerHTML = views;

  return divElement;
};
