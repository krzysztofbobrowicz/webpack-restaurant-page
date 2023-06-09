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
  content.appendChild(mainBar());
  return content;
}

export default initializeContent;
