function createNav() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const restaurantName = document.createElement('a');
  restaurantName.classList.add('restaurant-name');
  restaurantName.href = '#';
  restaurantName.textContent = 'K DAY';

  const navbarLinksDiv = document.createElement('div');
  navbarLinksDiv.classList.add('navbar-links');

  navbar.appendChild(restaurantName);
  navbar.appendChild(navbarLinksDiv);
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  const homeLink = document.createElement('a');
  homeLink.innerHTML = 'Home';
  homeLink.href = '#';
  homeLink.classList.add('home-link');

  const menuLink = document.createElement('a');
  menuLink.textContent = 'Menu';
  menuLink.classList.add('menu-link');

  const aboutLink = document.createElement('a');
  aboutLink.textContent = 'About';
  aboutLink.classList.add('about-link');

  console.log(homeLink);

  ul.innerHTML = `
  <li>${homeLink.outerHTML}</li>
  <li>${menuLink.outerHTML}</li>
  <li>${aboutLink.outerHTML}</li>
  `;

  navbarLinksDiv.appendChild(ul);
  return navbar;
}

function mainBar() {
  const mainSection = document.createElement('section');
  mainSection.classList.add('main');
  const mainHeadingDiv = document.createElement('div');
  mainHeadingDiv.classList.add('main-heading');
  mainHeadingDiv.innerHTML = `
  <h1>It's a great time for K-Day</h1>
  <br />
  <h2>come and take a sit.</h2>
  `;
  mainSection.appendChild(mainHeadingDiv);

  return mainSection;
}

function initializeContent() {
  const content = document.getElementById('content');
  content.appendChild(createNav());
  content.appendChild(mainBar());
}

export default initializeContent;
