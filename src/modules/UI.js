/* eslint-disable */

class UI {
 

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




  static addTaskToMenu(task, id) {
    const list = document.getElementById('task-list');
    const row = document.createElement("form");
    row.className = "input-group py-1";
    

    const input1 = document.createElement("input")
    input1.className = "form-control"
    input1.value = task.chore
    input1.id = id + 'X'
    row.appendChild(input1);

    const input2 = document.createElement("input")
    input2.type = 'date'
    input2.className = 'form-control'
    input2.value = task.date
    input2.id = id + '+'
    row.appendChild(input2)
  
    const inputSelect = document.createElement("select")
    inputSelect.id = id + '-'
    inputSelect.className = "custom-select form-control"
    const choosenSelect = document.createElement("option")
    choosenSelect.text = task.importance
    inputSelect.appendChild(choosenSelect)

    const selectIF = document.createElement("option")

    task.importance == 'Very Important' ? selectIF.text = 'Normal' :  selectIF.text = 'Very Important'
  
    inputSelect.appendChild(selectIF)

    row.appendChild(inputSelect)
    
    const btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-danger'
    btnDelete.innerText = 'Delete'
    btnDelete.id = id
    row.appendChild(btnDelete)
  
    list.appendChild(row);
  }


static  addTaskToGeneral(finder){

  let arr = []
  for (let i = 0; i < localStorage.length; i++) {
    const key= localStorage.key(i);
    if (key == finder) {
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

}














  static clearField() {
    document.getElementById("job").value = "";
  }
}

export default UI;
