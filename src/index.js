/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import inputProject from "./modules/inputProject";
import createTask from "./modules/createTask";
import taskView from "./modules/tasksView";
import createId from "./modules/createId";
// import bodyView from "./modules/bodyView";
// import navBarView from "./modules/navbarView";
import Task from "./modules/task";
import Project from "./modules/project";
// import createProject from "./modules/createProject";
import addCounter from "./modules/addCounter";
// import deleteChild from "./modules/deleteChild";
// import iFinder from "./modules/iFinder";
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

  const newProject = new Project(inputId);

  setLocalObject(inputId, newProject);

  const inputVariable = JSON.parse(getLocal(inputId));

  if (inputVariable) inputVariable.chore = inputVariable;

  getElement.addEventListener("input", getInput);

  // const newTask = new Task();
  // let keyValue = addCounter(inputId);
  // console.log(keyValue);
  // findInLocal(`-${e.target.id}`, keyValue);
});

// function eraseLocal() {
//   let arr = getInputValues();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < localStorage.length; j++) {
//       console.log(arr[i] + ": arr");
//       console.log(localStorage.key(j) + ": localS");

//       if (arr[i] == localStorage.key(j)) {
//         localStorage.setItem(localStorage.key(j), "");
//       } else {
//         removeLocal(localStorage.key(j));
//       }
//     }
//   }
// }
displayProjects();

// function read(ele) {
//   console.log(ele);
// }

// function afterI(e) {
//   localStorage.setItem(e.target.id, e.target.value);
// }

// function viewInputVal() {
//   var elements = document.getElementsByTagName("input");

//   const filterInput = Object.entries(elements).filter((ele) => !!ele[1].value);
//   return filterInput;
// }

// function getInputValues() {
//   const elements = document.getElementsByTagName("input");
//   let arr = [];
//   for (var i = 0; i < elements.length; i++) {
//     if (elements[i].value) arr.push(elements[i].value);
//   }
//   return arr;
// }

// // document.addEventListener("DOMContentLoaded", dis());
