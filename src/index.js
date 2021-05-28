import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Job from "./modules/job";

const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBar());
getRoot.appendChild(bodyView());

class Store {
  static getJobs() {
    let jobs;
    if (localStorage.getItem("jobs") === null) {
      jobs = [];
    } else {
      jobs = JSON.parse(localStorage.getItem("jobs"));
    }
    return jobs;
  }

  static addJob(job) {
    const jobs = Store.getJobs();
    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
}
// console.log(Store.getJobs()[0]);

class UI {
  static displayJobs() {
    const jobs = Store.getJobs();
    jobs.forEach((task) => UI.addTaskToLibrary(task));
  }

  static addTaskToLibrary(task) {
    const list = document.getElementById("sidebar");

    const row = document.createElement("li");
    row.className = `list-group-item list-group-item-action`;
    row.innerHTML = `${task.job} `;
    row.id = `${task.id}`;
    list.appendChild(row);
  }
  static clearField() {
    return (document.getElementById("job").value = "");
  }
}
// document.addEventListener("DOMContentLoaded", UI.displayJobs);

document.getElementById("job-form").addEventListener("submit", (e) => {
  const add_job = document.getElementById("job").value;

  if (add_job) {
    const job = new Job(add_job);
    Store.addJob(job);
    // UI.displayJobs();
    UI.addTaskToLibrary(job);
    UI.displayJobs();
    UI.clearField();
  }

  e.preventDefault();
});

// localStorage.clear();

document.getElementById("sidebar").addEventListener("click", function (e) {
  let array = Store.getJobs();
  for (let index = 0; index < array.length; index++) {
    if (e.target.id == array[index].id) {
      const getFormTasks = document.getElementById("task-form");
      getFormTasks.style.setProperty("display", "inline-block");

      document.getElementById("task-form").addEventListener("submit", (e) => {
        const chore = document.getElementById("chore").value;
        const date = document.getElementById("date").value;
        const importance = document.getElementById("importance").value;

        if (chore && date && importance) {
          const task = new Chore(chore, date, importance);
          UI.addChoresToLibrary(task);
          StoreInn.addChore(task);
          UI.clearChore();
          // array[index].push(task);
          console.log(array[index].date);
          console.log(array[index].id);
        }
      });
    }
  }
});
