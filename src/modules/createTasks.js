/* eslint-disable */


export default (name) => {
  let counter = parseInt(localStorage.getItem('Counter'))
    let newname = '+' + name.slice(0,2) + counter
    
    counter++
    console.log(counter)
    localStorage.setItem('Counter', counter)
    localStorage.setItem(newname, []);
  };
  

  