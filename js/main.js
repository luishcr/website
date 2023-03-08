// Función para mostar/ocultar menú de navegación responsive
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", showMenu);
const navLinks = document.querySelector("#nav-links");

function showMenu() {
  navLinks.classList.toggle("nav-links_hider");
  if (navLinks.classList.contains("nav-links_hider")) {
    navToggle.innerHTML = `<img src="img/toggle.png" alt="Burger Button"></img>`;
  } else {
    navToggle.innerHTML = `<img src="img/close.png" alt="Close Button"></img>`;
  }
}

// Switcher Dark-mode
const btnSwitch = document.querySelector(".bar-icons_item .switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Persistent Dark-mode
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Get actual-mode
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
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

/* BADGES */

// // HTB Stats
// fetch("https://www.hackthebox.com/badge/520034", {
//   headers: {
//     "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64)",
//   },

// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
