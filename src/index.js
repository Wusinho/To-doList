import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./routes/route";
import bodyView from "./modules/body";
import addJob from "./modules/add_job";
// import addTask from "./modules/add_tasks";

// router(window.location.hash);
// window.addEventListener("hashchange", () => {
//   router(window.location.hash);
// });

let counter = 0;

const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getRoot.appendChild(bodyView());
getNavbar.appendChild(addJob());

class Job {
  constructor(job) {
    let countconst = 0;
    this.job = job;
    this.id = job.slice(0, 2) + countconst;

    this.innerObj = {};
  }
}

class Chore {
  constructor(chore, date, importance) {
    this.chore = chore;
    this.date = date;
    this.importance = importance;
  }
}
class Store {
  static getJobs() {
    let jobs;
    if (localStorage.getItem("jobs") === null) {
      jobs = [];
    } else {
      jobs = JSON.parse(localStorage.getItem("jobs"));
      // console.log((jobs[10].id = 100));
      // console.log(jobs[10]);
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

class StoreInn {
  static getChores() {
    let chores;
    if (localStorage.getItem("chores") === null) {
      chores = [];
    } else {
      chores = JSON.parse(localStorage.getItem("chores"));
    }
    return chores;
  }
  static addChore(chore) {
    const chores = StoreInn.getChores();
    chores.push(chore);

    localStorage.setItem("chores", JSON.stringify(chores));
  }
}

class UI {
  static displayJobs() {
    const jobs = Store.getJobs();
    jobs.forEach((task) => UI.addTaskToLibrary(task));
  }

  static displayChores() {
    const chores = StoreInn.getChores();
    chores.forEach((chore) => UI.addChoresToLibrary(chore));
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
  static clearChore() {
    return (document.getElementById("chore").value = "");
  }

  static addChoresToLibrary(chores) {
    const list = document.getElementById("list-details");

    const row = document.createElement("li");
    row.className = `list-group-item list-group-item-action`;
    row.innerHTML = `${chores.chore} ${chores.date} ${chores.importance} `;

    list.appendChild(row);
  }
}

document.getElementById("job-form").addEventListener("submit", (e) => {
  const add_job = document.getElementById("job").value;

  if (add_job) {
    const job = new Job(add_job);
    UI.addTaskToLibrary(job);
    UI.clearField();
    Store.addJob(job);
  }

  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", UI.displayJobs);

// localStorage.clear();

document.getElementById("sidebar").addEventListener("click", function (e) {
  if (e.target && e.target.matches("li.list-group-item-action")) {
    const getFormTasks = document.getElementById("form-tasks");
    getFormTasks.style.setProperty("display", "inline-block");

    document.getElementById("task-form").addEventListener("submit", (e) => {
      const chore = document.getElementById("chore").value;
      const date = document.getElementById("date").value;
      const importance = document.getElementById("importance").value;

      if (chore && date && importance) {
        const add_details = new Chore(chore, date, importance);
        if (add_details) {
          const task = new Chore(chore, date, importance);
          StoreInn.addChore(task);
          e.target.push(task);
        }
      }
    });
  }
});
