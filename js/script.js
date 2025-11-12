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

// Åbner for tanget, og viser kiste.


const tang = document.getElementById("seaweed");
new Image().src = "img/tang2.png";

if (tang) {
  tang.addEventListener("click", () => {
    tang.classList.toggle("tang2");
  });
}
