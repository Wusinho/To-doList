import views from "../views/body.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
