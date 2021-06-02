/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Task from "./modules/task";
import Store from "./modules/store";
import UI from "./modules/UI";
import createKeys from "./modules/createJob";
import addCounter from "./modules/addCounter";
import deleteChild from "./modules/deleteChild";
import iFinder from "./modules/iFinder";
import {
  afterInputChore,
  afterInputDate,
  afterInputImportance,
  afterInputDescription,
} from "./modules/editMethod";
const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBar());
getRoot.appendChild(bodyView());

localStorage.setItem("+iFinder", "Raul");
localStorage.setItem("+Counter", "0");

document.getElementById("job-form").addEventListener("submit", (e) => {
  const addjob = document.getElementById("job").value;
  if (addjob) {
    createKeys(UI.capitalize(addjob));
    UI.clearField();
  }
});

// function myFunction(target) {
//   var x = document.getElementById(target);
//   if (x.style.backgroundColor === "red") {
//     x.style.backgroundColor = "lightgrey";
//   } else {
//     x.style.backgroundColor = "red";
//   }
// }

document.getElementById("sidebar").addEventListener("click", (e) => {
  // console.log(e.currentTarget);
  const getFormTasks = document.getElementById("task-form");
  const getH1 = document.getElementById("h1");
  const getBtnDanger = document.getElementById("danger-group");
  const getMenu = document.getElementById("menu");

  const liID = e.target.innerText.slice(0, 2);

  const getliID = document.getElementById(liID);
  console.log(liID);
  // myFunction(liID);
  getMenu.style.backgroundColor = "white";
  getBtnDanger.className = "d-flex";
  getFormTasks.className = "visible  my-4 ";

  getH1.value = `${e.target.innerText} Project`;

  localStorage.setItem("+iFinder", e.target.innerText);
  deleteChild("task-list");

  UI.addTaskToGeneral(iFinder());
  e.preventDefault();
});

document.getElementById("task-form").addEventListener("submit", (e) => {
  let keyValue = "+" + iFinder() + addCounter();

  const chore = document.getElementById("chore").value;
  const date = document.getElementById("date").value;
  const importance = document.getElementById("importance").value;
  const description = document.getElementById("description").value;
  if (chore && date && importance && description) {
    const task = new Task(chore, date, importance, description);
    Store.addInside(keyValue, task);
    Store.addInside(iFinder(), keyValue);
  }
});

document.getElementById("delete-key").addEventListener("click", (e) => {
  const deleteKey = localStorage.getItem("+iFinder");
  localStorage.removeItem(deleteKey);
  location.reload();
});

document.getElementById("task-list").addEventListener("click", (e) => {
  const deleteKey = e.target.id;
  localStorage.removeItem(deleteKey);
});
document.addEventListener("DOMContentLoaded", UI.displayJobs());

document.getElementById("task-list").addEventListener("click", (e) => {
  const eVal = e.target.id;
  const realName = eVal.slice(0, -1);
  const taskSelect = eVal.slice(-1);
  localStorage.setItem("+realName", realName);

  const inputVariable = JSON.parse(localStorage.getItem(realName));

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

function myFunction(elem) {
  var x = document.getElementById("js-description");
  var description = elem.getAttribute("data-description");
  x.innerHTML = description;

  var button = document.getElementsByClassName("js-button");

  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("active-button");
  }

  elem.classList.add("active-button");
}
