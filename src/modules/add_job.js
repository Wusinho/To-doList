import views from "../views/add_job.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
