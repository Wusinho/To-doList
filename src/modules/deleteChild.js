export default (ele) => {
  const e = document.getElementById(ele);

  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
};
