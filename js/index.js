// Función para mostar/ocultar menú de navegación en móbiles
let navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", showmenu);

function showmenu() {
  document.getElementById("id-links").classList.toggle("nav-links_hider");
}
