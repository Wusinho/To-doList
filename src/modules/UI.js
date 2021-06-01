/* eslint-disable */
import jobView from "../views/job.html"
import Store from "./store";

class UI {
  // static displayJobs() {
  //   const jobs = Store.getJobs();
  //   jobs.forEach((task) => UI.addTaskToLibrary(task));
  // }

  static displayTasks(jobs) {
    
    jobs.forEach((task) => UI.addTaskToMenu(task));
  }

  static displayJobs() {

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
   
          if (key[0] != '+') {
            UI.addTaskToLibrary(key); 
          }   
          
      
    }
  }

  static addTaskToLibrary(task) {
    const list = document.getElementById("sidebar");
    const row = document.createElement("li");
    row.className = "list-group-item list-group-item-action";
    row.innerHTML = `${task} `;
    let taskID = task.slice(0, 2)
    row.id = `${taskID}`;
    list.appendChild(row);
  }



  // static addTaskToLibrary(task) {
  //   const list = document.getElementById("sidebar");
  //   const row = document.createElement('div');
  //   row.className = 'input-group';
  //   row.innerHTML = jobView;
  //   // row.innerHTML = `${task.job} `;
  //   row.id = `${task.id}`;
  //   list.appendChild(row);
  // }

  static addTaskToMenu(task, id) {
    const list = document.getElementById('task-list');
    const row = document.createElement("li");
    row.className = "list-group-item ";
    row.innerHTML = `${task.chore}  ${task.date} ${task.importance} `;
    row.id = id
    list.appendChild(row);
  }

  static clearField() {
    document.getElementById("job").value = "";
  }
}

export default UI;
