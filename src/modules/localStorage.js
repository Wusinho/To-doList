/* eslint-disable */

function findInLocal(name, item) {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : [];
  existing.push(item);
  localStorage.setItem(name, JSON.stringify(existing));
}

function setLocalObject(name, value) {
  // if (!name || !value) return;
  localStorage.setItem(name, JSON.stringify(value));
}

function setLocal(name, value) {
  localStorage.setItem(name, value);
}

function getLocal(name) {
  return localStorage.getItem(name);
}

function removeLocal(name) {
  localStorage.removeItem(name);
}

function removeChildren(finder) {
  const search = JSON.parse(getLocal(finder));
  if (!search) return finder;

  for (let i = 0; i < search.length; i++) {
    for (let j = 0; j < localStorage.length; j++) {
      const keyStorage = localStorage.key(j);
      if (keyStorage == search[i]) {
        removeLocal(keyStorage);
      }
    }
  }
}

export {
  findInLocal,
  setLocal,
  getLocal,
  removeLocal,
  removeChildren,
  setLocalObject,
};
