const changeChore = (name, newChore) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[0].chore = newChore;

  localStorage.setItem(name, JSON.stringify(existing));
};

const changeDate = (name, newDate) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[0].date = newDate;

  localStorage.setItem(name, JSON.stringify(existing));
};

const changeImportance = (name, newImportance) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[0].importance = newImportance;

  localStorage.setItem(name, JSON.stringify(existing));
};

const afterInputChore = (e) => {
  changeChore(localStorage.getItem('+realName'), e.target.value);
};

const afterInputDate = (e) => {
  changeDate(localStorage.getItem('+realName'), e.target.value);
};
const afterInputImportance = (e) => {
  changeImportance(localStorage.getItem('+realName'), e.target.value);
};
export {
  afterInputChore,
  afterInputDate,
  afterInputImportance,
  changeChore,
  changeDate,
  changeImportance,
};
