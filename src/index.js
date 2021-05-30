/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Project from "./modules/project";
import Task from "./modules/task";
import Store from "./modules/store";
import UI from "./modules/UI";

const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBar());
getRoot.appendChild(bodyView());

document.getElementById("job-form").addEventListener("submit", (e) => {
  const addjob = document.getElementById("job").value;

  if (addjob) {
    const job = new Project(addjob);
    Store.addJob(job);
    UI.addTaskToLibrary(job);
    UI.clearField();
  }

  e.preventDefault();
});

document.getElementById("sidebar").addEventListener("click", (e) => {
  const array = Store.getJobs();

  for (let i = 0; i < array.length; i += 1) {
    if (e.target.id === array[i].id) {
      const getFormTasks = document.getElementById("task-form");
      getFormTasks.style.setProperty("display", "inline-block");
      // const getMenuli = document.getElementById("menu-li");

      // getMenuli.style.setProperty("display", "inline-block");

      document.getElementById("task-form").addEventListener("submit", (e) => {
        const chore = document.getElementById("chore").value;
        const date = document.getElementById("date").value;
        const importance = document.getElementById("importance").value;
        if (chore && date && importance) {
          const task = new Task(chore, date, importance);
          Store.addTask(task, i);
          UI.addTaskToMenu(task);
          const getMenuli = document.getElementById("menu-li");

          getMenuli.style.setProperty("display", "inline-block");
        }
        e.preventDefault();
      });
    }
  }
  e.preventDefault();
});

// document.addEventListener("DOMContentLoaded", UI.displayJobs);

// document.addEventListener("DOMContentLoaded", UI.displayTasks);

// localStorage.clear();
