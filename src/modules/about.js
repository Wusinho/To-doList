import views from "../views/about.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
