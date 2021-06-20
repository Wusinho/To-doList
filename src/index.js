/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import inputProject from "./modules/inputProject";
import taskView from "./modules/tasksView";
import createId from "./modules/createId";
import Task from "./modules/task";
import Project from "./modules/project";
// import createProject from "./modules/createProject";
import addCounter from "./modules/addCounter";
// import deleteChild from "./modules/deleteChild";
import { getInput, realDetail } from "./modules/editMethod";
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
  getLocalObject,
} from "./modules/localStorage";
const getRoot = document.getElementById("root");

inputProject();

getRoot.addEventListener("click", (e) => {
  const inputId = e.target.id;

  const getElement = document.getElementById(inputId);

  if (!getLocal(inputId)) {
    const newProject = new Project(inputId);
    setLocalObject(inputId, newProject);
  }

  const inputVariable = JSON.parse(getLocal(inputId));

  if (inputVariable) inputVariable.chore = inputVariable;

  getElement.addEventListener("input", getInput);
});

displayProjects();
