"use strict";

// Menu functionality
const spilMenuBtn = document.getElementById("spilMenuBtn");
const gameMenu = document.getElementById("gameMenu");
const closeMenuBtn = document.getElementById("closeMenu");

// Open menu
if (spilMenuBtn && gameMenu) {
  spilMenuBtn.addEventListener("click", function () {
    gameMenu.classList.add("active");
  });
}

// Close menu with X button
if (closeMenuBtn && gameMenu) {
  closeMenuBtn.addEventListener("click", function () {
    gameMenu.classList.remove("active");
  });
}

// Close menu when clicking outside
if (gameMenu) {
  gameMenu.addEventListener("click", function (e) {
    if (e.target === gameMenu) {
      gameMenu.classList.remove("active");
    }
  });
}
