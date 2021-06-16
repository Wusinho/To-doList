/* eslint-disable */
import { getLocal } from "./localStorage";
import views from "../views/tasks.html";

function displayProjects() {
  Object.keys(localStorage).forEach((val) => {
    if (val[0] != "+") addProjectToLibrary(val);
  });
}

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function addProjectToLibrary(task) {
  const list = document.getElementById("sidebar");
  const row = document.createElement("li");
  row.className = "list-group-item list-group-item-action my-2 px-5 border-0";
  row.innerHTML = `${task} `;
  let taskID = task.slice(0, 2);
  row.id = `${taskID}`;
  list.appendChild(row);
}

function addTaskToMenu(task, id) {
  const divElement = document.createElement("div");
  divElement.className = "input-group mb-3";
  divElement.innerHTML = views;

  const list = document.getElementById("task-list");
  list.appendChild(divElement);

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  const input5 = document.getElementById("input5");

  input1.value = task.chore;
  input1.id = id + "X";

  input2.value = task.date;
  input2.id = id + "+";

  input3.value = task.importance;
  input3.id = id + "-";

  input4.value = task.description;
  input4.id = id + "*";

  input5.id = id;
}

function addTaskToGeneralView(finder) {
  const search = JSON.parse(getLocal(finder));

  for (let i = 0; i < search.length; i++) {
    for (let j = 0; j < localStorage.length; j++) {
      const keyStorage = localStorage.key(j);
      if (keyStorage == search[i]) {
        const task = JSON.parse(getLocal(keyStorage))[0];
        addTaskToMenu(task, keyStorage);
      }
    }
  }
}

function clearField() {
  document.getElementById("job").value = "";
}

export { displayProjects, capitalize, clearField, addTaskToGeneralView };
