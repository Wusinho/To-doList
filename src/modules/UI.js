import Store from "./store";

class UI {
  static displayJobs() {
    const jobs = Store.getJobs();
    jobs.forEach((task) => UI.addTaskToLibrary(task));
  }
  static displayTasks() {
    const jobs = Store.getJobs();

    jobs.forEach((task) => UI.addTaskToMenu(task));
  }

  static addTaskToLibrary(task) {
    const list = document.getElementById("sidebar");

    const row = document.createElement("li");
    row.className = `list-group-item list-group-item-action`;
    row.innerHTML = `${task.job} `;
    row.id = `${task.id}`;
    list.appendChild(row);
  }

  static addTaskToMenu(task) {
    const list = document.getElementById("menu-details");

    const row = document.createElement("li");
    row.className = `list-group-item `;
    row.id = "menu-li";
    row.innerHTML = `${task.chore}  ${task.date} ${task.importance} `;
    list.appendChild(row);
  }

  static clearField() {
    return (document.getElementById("job").value = "");
  }
}
export default UI;
