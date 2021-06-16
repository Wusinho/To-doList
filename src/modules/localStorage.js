/* eslint-disable */



 

function findInLocal(name,item) {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : [];
  existing.push(item)
  localStorage.setItem(name, JSON.stringify(existing));
}

function setLocal (name, value) {
  localStorage.setItem(name, value);
}
function getLocal (name) {
  localStorage.getItem(name);
}
function removeLocal (name) {
  localStorage.removeItem(name);

}

export {
  findInLocal,
  setLocal,
  getLocal,
  removeLocal
}
