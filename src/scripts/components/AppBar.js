document.addEventListener("DOMContentLoaded", () => {
  const appBar = document.createElement("nav");
  appBar.innerHTML = `
    <div class="logo">
      <div class="logo-text">Resto Plugin</div>
    </div>
    <button class="hamburger">
      <img src="../images/heros/burger-bar.png" alt="menu-hamburger">
    </button>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="https://www.linkedin.com/in/aji-jagat-saputra-186b97227/">About us</a></li>
      <li><a href="#">Favorite</a></li>
    </ul>
  `;
  document.getElementById("app").appendChild(appBar);
  const jumbotron = document.createElement("section");
  jumbotron.innerHTML = `
  <img src = "../images/heros/hero-image_2.jpg" alt ="hero">
  `
  jumbotron.classList.add('hero');
  document.getElementById("app").appendChild(jumbotron)
});
