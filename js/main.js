// Función para mostar/ocultar menú de navegación responsive
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", showMenu);

function showMenu() {
  document.querySelector("#nav-links").classList.toggle("nav-links_hider");
}

// Ocultar/mostrar logos blancos
const yellowLogos = document.querySelectorAll(".yellow-logos");
const whiteLogos = document.querySelectorAll(".white-logos");

yellowLogos.forEach((logo) => {
  logo.addEventListener("mouseover", () => {
    whiteLogos.forEach((logo) => {
      logo.style.visibility = "hidden";
    });
  });
  logo.addEventListener("mouseout", () => {
    whiteLogos.forEach((logo) => {
      logo.style.visibility = "visible";
    });
  });
});

// Zoom en certificados
const bntImgClose = document.querySelector("#btn-img_close");
const bntImgForward = document.querySelector("#btn-img_forward");
const bntImgBackbard = document.querySelector("#btn-img_backward");
const certificateImgs = document.querySelectorAll(
  ".main-certificates__item > img"
);
const lightbox = document.querySelector(".certificate__principal-container");
const imgActive = document.querySelector(".main-certificates #img-active");

let imgNumber = 0;

// Abre lightbox
const openLightbox = (event) => {
  imgActive.src = event.target.src;
  lightbox.style.display = "flex";
  imgNumber = Array.from(certificateImgs).indexOf(event.target);
};

certificateImgs.forEach((certificate) => {
  certificate.addEventListener("click", openLightbox);
});

// Cierra lightbox
bntImgClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Avanza lightbox
const certificateForward = () => {
  if (imgNumber === certificateImgs.length - 1) {
    imgNumber = -1;
  }
  imgActive.src = certificateImgs[imgNumber + 1].src;
  imgNumber++;
};
bntImgForward.addEventListener("click", certificateForward);

// Retrocede lightbox
const certificateBackward = () => {
  if (imgNumber === 0) {
    imgNumber = certificateImgs.length;
  }

  imgActive.src = certificateImgs[imgNumber - 1].src;
  imgNumber--;
};
bntImgBackbard.addEventListener("click", certificateBackward);
