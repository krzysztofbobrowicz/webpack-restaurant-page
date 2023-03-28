function mainBar() {
  const mainSection = document.createElement('section');
  mainSection.classList.add('main');
  const mainHeadingDiv = document.createElement('div');
  mainHeadingDiv.classList.add('main-heading');
  mainHeadingDiv.innerHTML = `
  <h1>Eat our dishes</h1>
  <br />
  <h2>They are healthy and delicious.</h2>
  `;
  mainSection.appendChild(mainHeadingDiv);

  return mainSection;
}

function showMenu() {
  const content = document.getElementById('content');

  content.appendChild(mainBar());
}

export default showMenu;
