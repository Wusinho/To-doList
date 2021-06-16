import views from '../views/tasks.html';

export default () => {
  const divElement = document.createElement('ul');
  divElement.innerHTML = views;

  return divElement;
};
