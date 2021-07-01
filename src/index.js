import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.scss'
import './main.scss';
import createInputParent from './modules/inputProject';
import Project from './modules/project';
import {
  getInput,
  realDetail,
  afterInput,
  editTaskMethod
} from './modules/editMethod';
import {
  displayProjects,
  addTasksToProject,
  displayTaks,
  removeEmptyTasks,
} from './modules/UI';
import { setLocal, getLocal, setLocalObject } from './modules/localStorage';

createInputParent();
const getParentInput = document.getElementsByClassName('parent');
const getChildrenInput = document.getElementsByClassName('children');

for (let i = 0; i < getChildrenInput.length; i += 1) {
  getChildrenInput[i].addEventListener('click', (e) => {
    if (!e.target) return;
    const eValue = e.target.id;
    const realName = eValue.slice(0, -1);
    const taskSelect = eValue.slice(-1);
    setLocal('+realName', realName);
    setLocal('+detail', realDetail(taskSelect));
    const getElement = document.getElementById(eValue);

    const inputVariable = JSON.parse(getLocal(realName));

    inputVariable[realDetail(taskSelect)] = inputVariable;
    getElement.addEventListener('input', afterInput);

    const checkbox = document.getElementById(eValue);

    checkbox.addEventListener('change', e => {

      if(e.target.checked){
        console.log('checked')
        editTaskMethod(realName, 'VIP', realDetail(taskSelect))
      } 
  
  });
    
  });
}

for (let i = 0; i < getParentInput.length; i += 1) {
  getParentInput[i].addEventListener('click', (e) => {
    if (!e.target) return;
    const inputId = e.target.id;

    const getElement = document.getElementById(inputId);

    if (!getElement.value) {
      const newProject = new Project(inputId);
      setLocalObject(inputId, newProject);
      addTasksToProject(e.target.id);
    } else if (getElement.value) {
      addTasksToProject(e.target.id);
    }

    const inputVariable = JSON.parse(getLocal(inputId));

    if (inputVariable) inputVariable.chore = inputVariable;

    getElement.addEventListener('input', getInput);
  });
}

displayProjects();
displayTaks();
removeEmptyTasks();
