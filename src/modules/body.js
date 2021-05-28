import views from '../views/body.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.className = 'row';
  divElement.innerHTML = views;

  return divElement;
};
