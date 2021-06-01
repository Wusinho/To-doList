/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import bodyView from "./modules/body";
import navBar from "./modules/navbar";
import Project from "./modules/project";
import Task from "./modules/task";
import Store from "./modules/store";
import UI from "./modules/UI";
import createKeys from "./modules/createKeys"
import createTasks from "./modules/createTasks"
import addCounter from "./modules/addCounter"

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




function deleteChild(ele) { 
  let e = document.getElementById(ele); 
  
  let child = e.lastElementChild;  
  while (child) { 
      e.removeChild(child); 
      child = e.lastElementChild; 
  } 
} 

const iFinder = () => {

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
    if(key == '+Finder')
    return localStorage.getItem(key)
}

}


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

document.addEventListener("DOMContentLoaded", UI.displayJobs());






// var time = "01:32:29";
// var array = time.split(":");
// var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

// console.log(seconds);
// document.addEventListener("DOMContentLoaded", UI.displayTasks(array[iFinder].task));


// createKeys('Raul')


// createTasks('Raul')
// createTasks('Pedro')

// const taskprueba = new Task('caballo', 'date', 'muy')


// Store.addInside('Ra1',taskprueba) 

// const loopLocalStorage = (arr) => {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     if (key != '+Finder') {
//      console.log(key);
      
//     }
//   }

// }

// loopLocalStorage()