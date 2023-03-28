import initializeContent from './initialPageLoad';
import showMenu from './menu';
const content = document.getElementById('content');
function component() {
  initializeContent();
  const element = document.createElement('div');

  const navbar = document.querySelectorAll('.navbar-links');

  navbar.forEach(link => {
    link.addEventListener('click', e => {
      if (e.target.outerText == 'Menu') {
        content.innerHTML = '';
        showMenu();
      }
      if (e.target.outerText == 'Home') {
        content.innerHTML = '';
        initializeContent();
      }
    });
  });

  return element;
}

document.body.appendChild(component());
