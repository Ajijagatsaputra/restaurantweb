document.addEventListener("DOMContentLoaded", () => {
  const appBar = document.createElement("nav");
  appBar.innerHTML = `
    <div class="logo">
      <div class="logo-text"></div>
    </div>
    <button class="hamburger">
      <img src="../public/images/heros/hero-image_2.jpg" alt="">
    </button>
  `;
  document.getElementById("app").appendChild(appBar);
});
