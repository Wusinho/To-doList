/* eslint-disable */
import views from "../views/tasks.html";
import Task from "./task";
import addCounter from "./addCounter";
import { setLocalObject, getLocalObject, removeLocal } from "./localStorage";

function displayProjects() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key[0] != "+" && key[0] != "-")
      document.getElementById(key).value = getLocalObject(key).project;
  }
}

function displayTaks() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key[0] == "-") {
      createFilledChildInputs(key, getLocalObject(key), key[1]);
      if (getLocalObject(key).chore == "") removeLocal(key);
    }
  }
}

function removeEmptyTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key[0] == "-") {
     getLocalObject(key).chore == "" ? removeLocal(key) : null
    }
  }
}




function addProjectToLibrary(task) {
  const list = document.getElementById("sidebar");
  const row = document.createElement("li");
  row.className = "list-group-item list-group-item-action my-2 px-5 border-0";
  row.innerHTML = task;
  let taskID = task.slice(0, 2);
  row.id = taskID;
  list.appendChild(row);
}

function addTasksToProject(ID) {
  const newTask = new Task();

  const getChildInput = document.getElementById(`children${ID}`);
  const token = addCounter();
  const keyValue = "-" + ID + token;
  setLocalObject(keyValue, newTask);

  const divElement = document.createElement("div");
  divElement.id = `-${ID}`;
  divElement.className = "input-group childInput";
  divElement.innerHTML = views;
  getChildInput.appendChild(divElement);

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");

  input1.value = newTask.chore || "";
  input1.id = "-" + ID + token + "#";

  input2.value = newTask.date || "";
  input2.id = "-" + ID + token + "%";

  input3.value = newTask.importance || "";
  input3.id = "-" + ID + token + "-";

  input4.value = newTask.description || '';
  input4.id = "-" + ID + token + "*";
  return divElement;
}

function createFilledChildInputs(ID, newTask, childrenID) {
  const getChildInput = document.getElementById(`children${childrenID}`);
  const divElement = document.createElement("div");
  divElement.id = `+${ID}`;
  divElement.className = "input-group childInput";
  divElement.innerHTML = views;
  getChildInput.appendChild(divElement);

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");

  input1.value = newTask.chore;
  input1.id = ID + "#";

  input2.value = newTask.date;
  input2.id = ID + "%";

    input3.checked = newTask.importance
    input3.id = ID + "-";
  

  input4.value = newTask.description;
  input4.id = ID + "*";
  return divElement;
}

export { displayProjects, addTasksToProject, displayTaks, removeEmptyTasks };
