/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import inputProject from "./modules/inputProject";
import bodyView from "./modules/bodyView";
import navBarView from "./modules/navbarView";
import Task from "./modules/task";
import createProject from "./modules/createProject";
import addCounter from "./modules/addCounter";
import deleteChild from "./modules/deleteChild";
import iFinder from "./modules/iFinder";
import { afterInput, realDetail } from "./modules/editMethod";
import {
  displayProjects,
  capitalize,
  clearField,
  addTaskToGeneralView,
  addNameToProject,
} from "./modules/UI";
import {
  findInLocal,
  setLocal,
  getLocal,
  removeLocal,
  removeChildren,
  setLocalObject,
} from "./modules/localStorage";
const getRoot = document.getElementById("root");
// const getNavbar = document.getElementById("navbar");

// getNavbar.appendChild(navBarView());
// getRoot.appendChild(bodyView());

inputProject();

localStorage.setItem("iFinder", 1);

getRoot.addEventListener("click", (e) => {
  const inputId = e.target.id;
  localStorage.setItem("iFinder", inputId);

  const getElement = document.getElementById(inputId);
  const inputVariable = localStorage.getItem(iFinder());

  findInLocal(inputId, "");

  if (inputVariable) {
    getElement.value = inputVariable;
  }

  getElement.addEventListener("input", afterI);
});

// const getElement = document.getElementById(iFinder());

// const inputVariable = localStorage.getItem(e.target.value);
// if (inputVariable) {
//   getElement.value = inputVariable;
// }

// getElement.addEventListener("input", afterI);

function afterI(e) {
  if (iFinder()) {
    localStorage.setItem(iFidner(), e.target.value);
  }
}
