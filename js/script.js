"use strict";

// Menu functionality
const spilMenuBtn = document.getElementById("spilMenuBtn");
const gameMenu = document.getElementById("gameMenu");
const closeMenuBtn = document.getElementById("closeMenu");

// åbner menu når man klikker på spil menu knappen:)
if (spilMenuBtn && gameMenu) {
  spilMenuBtn.addEventListener("click", function () {
    gameMenu.classList.add("active");
  });
}

// lukker menu når man klikker på kryds
if (closeMenuBtn && gameMenu) {
  closeMenuBtn.addEventListener("click", function () {
    gameMenu.classList.remove("active");
  });
}

//lukker menuen når man klikker udenfor menu conntet
if (gameMenu) {
  gameMenu.addEventListener("click", function (e) {
    if (e.target === gameMenu) {
      gameMenu.classList.remove("active");
    }
  });
}
const tang = document.getElementById("seaweed");

const tang2Image = new Image();
// preload tang2 billedet
tang2Image.src = "img/tang2.png";

if (tang) {
  tang.addEventListener("click", function () {
    // skift mellem tang1.png og tang2.png
    if (tang.src.includes("tang1.png")) {
      tang.src = "img/tang2.png";
    } else {
      tang.src = "img/tang1.png";
    }
  });
}

const mus = document.getElementById("seashell-closed");

const musOpen = new Image();
musOpen.src = "img/musOpen.png";

if (mus) {
  mus.addEventListener("click", function () {
    // skift mellem tang1.png og tang2.png
    if (mus.src.includes("musLuk.png")) {
      mus.src = "img/musOpen.png";
    } else {
      mus.src = "img/musLuk.png";
    }
  });
}