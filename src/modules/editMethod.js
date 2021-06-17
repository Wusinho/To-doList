/* eslint-disable */

const editTask = (name, newDescription, detail) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[detail] = newDescription;

  localStorage.setItem(name, JSON.stringify(existing));
};

const realDetail = (val) => {
  if (val == "X") {
    return "chore";
  } else if (val == "+") {
    return "date";
  } else if (val == "-") {
    return "importance";
  } else if (val == "*") {
    return "description";
  }
};

const afterInput = (e) => {
  editTask(
    localStorage.getItem("+realName"),
    e.target.value,
    localStorage.getItem("+detail")
  );
};

export { afterInput, realDetail };
