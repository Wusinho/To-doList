import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./routes/route";
import bodyView from "./modules/body";
import addJob from "./modules/add_job";

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
    this.job = job;
  }
}

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

class UI {
  static displayJobs() {
    const jobs = Store.getJobs();
    jobs.forEach((task) => UI.addTaskToLibrary(task));
  }

  static addTaskToLibrary(task) {
    counter++;
    const list = document.getElementById("sidebar");

    const row = document.createElement("a");
    row.className = `list-group-item list-group-item-action ${counter}`;
    row.innerHTML = `${task.job} `;

    list.appendChild(row);
  }
  static clearField() {
    return (document.getElementById("job").value = "");
  }
}

document.getElementById("job-form").addEventListener("submit", (e) => {
  const add_job = document.getElementById("job").value;
  // console.log(add_job);
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
