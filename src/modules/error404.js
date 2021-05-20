import views from "../views/error404.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;
  return divElement;
};
