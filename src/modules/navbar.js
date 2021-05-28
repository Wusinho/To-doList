import views from "../views/navbar.html";

export default () => {
  const divElement = document.createElement("div");

  divElement.innerHTML = views;

  return divElement;
};
