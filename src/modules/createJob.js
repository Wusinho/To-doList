/* eslint-disable */

export default (name) => {
  let existing = localStorage.getItem(name);

  existing = existing ? JSON.parse(existing) : [];

  localStorage.setItem(name, JSON.stringify(existing));
};
