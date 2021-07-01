/* eslint-disable */

const editTaskMethod = (name, newDescription, property) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[property] = newDescription;

  localStorage.setItem(name, JSON.stringify(existing));
};

const editProjectMethod = (name, newDescription) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing.project = newDescription;

  localStorage.setItem(name, JSON.stringify(existing));
};

const realDetail = (val) => {
  if (val == "#") {
    return "chore";
  } else if (val == "%") {
    return "date";
  } else if (val == "-") {
    return "importance";
  } else if (val == "*") {
    return "description";
  }
};

const afterInput = (e) => {
  editTaskMethod(
    localStorage.getItem("+realName"),
    e.target.value,
    localStorage.getItem("+detail")
  );
};

const getInput = (e) => {
  editProjectMethod(e.target.id, e.target.value);
};

const getChildInput = (e) => {
  editTaskMethod(e.target.id, e.target.value);
};

export { getInput, realDetail, getChildInput, afterInput,editTaskMethod };
