/* eslint-disable */

import views from "../views/tasks.html";

export default (ID) => {
  const divElement = document.createElement("ul");
  divElement.id = `+${ID}`;
  divElement.className = "input-group m-0";
  divElement.innerHTML = views;

  return divElement;
};
