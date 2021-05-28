import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Project from "./modules/project";
import Task from "./modules/task";
import Store from "./modules/store";
import addToLocalStorage from "./modules/addToLocalStorage";
const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBar());
getRoot.appendChild(bodyView());

// class Store {
//   static getJobs() {
//     let jobs;
//     if (localStorage.getItem("jobs") === null) {
//       jobs = [];
//     } else {
//       jobs = JSON.parse(localStorage.getItem("jobs"));
//     }
//     return jobs;
//   }

//   static addJob(job) {
//     const jobs = Store.getJobs();
//     jobs.push(job);

//     localStorage.setItem("jobs", JSON.stringify(jobs));
//   }

//   static addTask(tasks, index) {
//     const jobs = Store.getJobs();
//     jobs[index].task.push(tasks);
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//   }
// }

class UI {
  static displayJobs() {
    const jobs = Store.getJobs();
    jobs.forEach((task) => UI.addTaskToLibrary(task));
  }

  // static displayTasks() {
  //   const jobs = Store.getJobs();
  //   jobs.forEach((task) => UI.addTaskToMenu(task));
  // }

  static addTaskToLibrary(task) {
    const list = document.getElementById("sidebar");

    const row = document.createElement("li");
    row.className = `list-group-item list-group-item-action`;
    row.innerHTML = `${task.job} `;
    row.id = `${task.id}`;
    list.appendChild(row);
  }

  // static addTaskToMenu(task) {
  //   const list = document.getElementById("menu-details");

  //   const row = document.createElement("li");
  //   row.id = "menu-li";
  //   row.innerHTML = `${task.task[0].date} `;
  //   // row.innerHTML = `${task.date} `;
  //   // row.innerHTML = `${task.importance} `;
  //   list.appendChild(row);
  // }
  static clearField() {
    return (document.getElementById("job").value = "");
  }
}
document.addEventListener("DOMContentLoaded", UI.displayJobs);

document.getElementById("job-form").addEventListener("submit", (e) => {
  const add_job = document.getElementById("job").value;

  if (add_job) {
    const job = new Project(add_job);
    Store.addJob(job);
    UI.addTaskToLibrary(job);
    UI.clearField();
  }

  e.preventDefault();
});

document.getElementById("sidebar").addEventListener("click", function (e) {
  var existing = localStorage.getItem("jobs");
  var array = JSON.parse(existing);

  for (let i = 0; i < array.length; i++) {
    if (e.target.id == array[i].id) {
      const getFormTasks = document.getElementById("task-form");
      // const getMenuli = document.getElementById("menu-li");

      // getMenuli.style.setProperty("display", "inline-block");
      getFormTasks.style.setProperty("display", "inline-block");

      document.getElementById("task-form").addEventListener("submit", (e) => {
        const chore = document.getElementById("chore").value;
        const date = document.getElementById("date").value;
        const importance = document.getElementById("importance").value;
        if (chore && date && importance) {
          const task = new Task(chore, date, importance);
          // Store.addTask(task, i);
          // UI.addTaskToMenu(task);
        }
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", UI.displayTasks);

// localStorage.clear();
