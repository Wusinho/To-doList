/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Task from "./modules/task";
import Store from "./modules/store";
import UI from "./modules/UI";
import createKeys from "./modules/createJob"
import addCounter from "./modules/addCounter"
import deleteChild from "./modules/deleteChild"
import iFinder from "./modules/iFinder"

const getRoot = document.getElementById("root");
const getNavbar = document.getElementById("navbar");

getNavbar.appendChild(navBar());
getRoot.appendChild(bodyView());


localStorage.setItem('+Finder', 'Raul');
localStorage.setItem('+Counter', '0');

document.getElementById("job-form").addEventListener("submit", (e) => {
  const addjob = document.getElementById("job").value;
  if (addjob) {
    createKeys(addjob)
    UI.clearField();
  }
});





// const iFinder = () => {

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//     if(key == '+Finder')
//     return localStorage.getItem(key)
// }

// }


document.getElementById('sidebar').addEventListener('click', (e) => {
      const getFormTasks = document.getElementById('task-form');
      const getH1 = document.getElementById('h1')
      const getBtnDanger = document.getElementById('danger-group')
      
      getBtnDanger.className = 'd-flex'
      getFormTasks.className = 'visible'
      
      
      getH1.value = `${e.target.innerText} Project`


      localStorage.setItem('+Finder', e.target.innerText);
      deleteChild("task-list")

let arr = []
  for (let i = 0; i < localStorage.length; i++) {
    const key= localStorage.key(i);
    if (key == iFinder()) {
        arr.push(JSON.parse(localStorage.getItem(key)));
      for (let k = 0; k < arr[0].length; k++) {
        for (let j = 0; j < localStorage.length; j++) {
          const key2= localStorage.key(j);
          if (key2 == arr[0][k]){
           let task = (JSON.parse(localStorage.getItem(key2))[0]);
            UI.addTaskToMenu(task, key2)

          }
        }
      }
    }
}


});







document.getElementById('task-form').addEventListener('submit', (e) => {

  let keyValue = '+'+ iFinder() +  addCounter()

  const chore = document.getElementById('chore').value;
  const date = document.getElementById('date').value;
  const importance = document.getElementById('importance').value;
  if (chore && date && importance) {
    const task = new Task(chore, date, importance);
      Store.addInside(keyValue,task) 
      Store.addInside(iFinder(),keyValue)
  }
});


document.getElementById("delete-key").addEventListener("click", (e) => {
    const deleteKey = localStorage.getItem('+Finder')
  localStorage.removeItem(deleteKey)
  location.reload();
});

document.getElementById("task-list").addEventListener("click", (e) => {
  const deleteKey = e.target.id
  localStorage.removeItem(deleteKey)
  location.reload();
});
document.addEventListener("DOMContentLoaded", UI.displayJobs());