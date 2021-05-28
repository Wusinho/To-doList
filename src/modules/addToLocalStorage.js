export default (name, key, value) => {
  var existing = localStorage.getItem(name);

  existing = existing ? JSON.parse(existing) : {};

  existing.name = "" || key;
  existing.date = "" || value;
  existing.id = name.slice(0, 2);
  localStorage.setItem(name, JSON.stringify(existing));
};
