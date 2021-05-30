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
const array = Store.getJobs();


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

document.getElementById('sidebar').addEventListener('click', (e) => {

  

  for (let i = 0; i < array.length; i += 1) {
    if (e.target.id === array[i].id) {
      const getFormTasks = document.getElementById('task-form');
      const getH1 = document.getElementById('h1')
      getH1.innerText = `${e.target.innerText} Project`
      getFormTasks.style.setProperty('display', 'inline-block');
      localStorage.setItem('Finder', i);
    }
  }
  e.preventDefault();
});


document.getElementById('task-form').addEventListener('submit', (e) => {
  const chore = document.getElementById('chore').value;
  const date = document.getElementById('date').value;
  const importance = document.getElementById('importance').value;
  if (chore && date && importance) {
    const task = new Task(chore, date, importance);
    Store.addTask(task, localStorage.getItem(localStorage.key(1)));
    e.preventDefault();
  }
});



document.addEventListener("DOMContentLoaded", UI.displayJobs);





  
