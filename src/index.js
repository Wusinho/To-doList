/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/bodyView";
import navBarView from "./modules/navbarView";
import Task from "./modules/task";
import createProject from "./modules/createProject";
import addCounter from "./modules/addCounter";
import deleteChild from "./modules/deleteChild";
import iFinder from "./modules/iFinder";
import {
  afterInputChore,
  afterInputDate,
  afterInputImportance,
  afterInputDescription,
} from "./modules/editMethod";
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
} from "./modules/localStorage";
const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBarView());
getRoot.appendChild(bodyView());

const getSidebar = document.getElementById("sidebar");
const getTaskForm = document.getElementById("task-form");
const getDeleteKey = document.getElementById("delete-key");
const getTaskList = document.getElementById("task-list");

document.getElementById("job-form").addEventListener("submit", (e) => {
  const addProject = document.getElementById("project").value;
  if (addProject) {
    createProject(capitalize(addProject));
    clearField();
  }
});

getSidebar.addEventListener("click", (e) => {
  setLocal("+iFinder", e.target.innerText);

  const getFormTasks = document.getElementById("task-form");
  const getBtnDanger = document.getElementById("danger-group");

  getBtnDanger.className = "d-flex";
  getFormTasks.className = "d-block ";

  addNameToProject(iFinder());

  deleteChild("task-list");

  // addTaskToGeneralView(iFinder());
  document.addEventListener(
    "DOMContentLoaded",
    addTaskToGeneralView(iFinder())
  );
  e.preventDefault();
});

getTaskForm.addEventListener("submit", (e) => {
  let keyValue = "+" + iFinder() + addCounter();

  const chore = capitalize(document.getElementById("chore").value);
  const date = document.getElementById("date").value;
  const importance = document.getElementById("importance").value;
  const description = capitalize(document.getElementById("description").value);
  if (chore && date && importance && description) {
    const task = new Task(chore, date, importance, description);
    findInLocal(keyValue, task);

    findInLocal(iFinder(), keyValue);
  }
  e.preventDefault();
});

getDeleteKey.addEventListener("click", (e) => {
  const deleteKey = getLocal("+iFinder");
  removeChildren(deleteKey);
  removeLocal(deleteKey);
  location.reload();
});

getTaskList.addEventListener("click", (e) => {
  const deleteKey = e.target.id;
  removeLocal(deleteKey);
});
document.addEventListener("DOMContentLoaded", displayProjects());

getTaskList.addEventListener("click", (e) => {
  const eValue = e.target.id;
  const realName = eValue.slice(0, -1);
  const taskSelect = eValue.slice(-1);
  setLocal("+realName", realName);

  const inputVariable = JSON.parse(getLocal(realName));

  if (taskSelect == "X") {
    inputVariable[0].chore = inputVariable;
    document
      .getElementById(e.target.id)
      .addEventListener("input", afterInputChore);
  } else if (taskSelect == "+") {
    inputVariable[0].date = inputVariable;
    document
      .getElementById(e.target.id)
      .addEventListener("input", afterInputDate);
  } else if (taskSelect == "-") {
    inputVariable[0].importance = inputVariable;
    document
      .getElementById(e.target.id)
      .addEventListener("input", afterInputImportance);
  } else if (taskSelect == "*") {
    inputVariable[0].description = inputVariable;
    document
      .getElementById(e.target.id)
      .addEventListener("input", afterInputDescription);
  }
});
