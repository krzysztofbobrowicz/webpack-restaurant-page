export default function home() {
  const contentDiv = document.querySelector('#main');
  contentDiv.innerHTML = `
  <section class="header">
        <div class="navbar">
          <div class="restaurant-name" id="restaurantName"><a href="#">K DAY<a/></div>
          <div class="navbar-links">
            <ul>
              <li>
                <a href="" id="homeLink" class="home-link">Home</a>
              </li>
              <li>
                <a href="" id="menuLink" class="menu-link">Menu</a>
              </li>
              <li>
                <a href="" id="aboutLink" class="about-link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="main">
        <div class="main-heading">
          <h1>It's a great time for K-Day</h1>
          <br />
          <h2>come and take a sit.</h2>
        </div>
      </section>`;
}
