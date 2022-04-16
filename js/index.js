// Función para mostar/ocultar menú de navegación en móbiles
let navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", showmenu);

function showmenu() {
  document.getElementById("id-links").classList.toggle("nav-links_hider");
}

// Zoom en certificados
let certificateItem = document.querySelectorAll(
  ".main-certificates__item > img"
);
certificateItem[0].addEventListener("click", zoomItem);

function zoomItem() {
  console.log("Zoom!");
}
