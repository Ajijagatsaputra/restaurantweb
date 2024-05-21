document.addEventListener("DOMContentLoaded", function() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>© 2024 My PLUGIN RESTO since 2018</p>
  `;
  document.getElementById('app').appendChild(footer);
});
