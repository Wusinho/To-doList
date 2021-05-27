import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./routes/route";
import bodyView from "./modules/body";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

const getRoot = document.getElementById("root");
getRoot.appendChild(bodyView());

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
    const list = document.getElementById("sidebar");
    console.log(list);
    const row = document.createElement("div");

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
