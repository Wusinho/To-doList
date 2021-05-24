import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./routes/route";
router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

class Task {
  constructor(chore, date, importace) {
    this.chore = chore;
    this.date = date;
    this.importace = importace;
  }
}

class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

class UI {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => UI.addTaskToLibrary(task));
  }

  static addTaskToLibrary(task) {
    const list = document.getElementById("contenedor");
    const row = document.createElement("ul");

    row.innerHTML = `
          <li class="has-text-centered">${task.chore} ${task.date} ${task.importace}</li>
      `;
    list.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#chore").value = "Buying Groceries";
  }
}
document.addEventListener("DOMContentLoaded", UI.displayTasks);

document.getElementById("task-form").addEventListener("submit", (e) => {
  const chore = document.getElementById("chore").value;
  const date = document.getElementById("date").value;
  const importance = document.getElementById("importance").value;

  if (chore && importance) {
    const task = new Task(chore, date, importance);
    UI.addTaskToLibrary(task);
    Store.addTask(task);
    UI.clearFields();
  }

  console.log(chore);
  e.preventDefault();
});
