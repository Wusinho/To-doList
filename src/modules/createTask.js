/* eslint-disable */

import views from "../views/createTask.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.className = "childInput";
  divElement.innerHTML = views;

  return divElement;
};
