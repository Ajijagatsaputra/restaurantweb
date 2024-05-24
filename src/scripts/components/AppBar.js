document.addEventListener("DOMContentLoaded", function () {
  const appBar = document.createElement("header");
  appBar.innerHTML = `
    <nav class = "hamburgermenu">
      <div class="logo">
        <div class="logo-text"></div>
      </div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="https://www.linkedin.com/in/aji-jagat-saputra-186b97227/">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  `;
  document.getElementById("app").appendChild(appBar);
});
