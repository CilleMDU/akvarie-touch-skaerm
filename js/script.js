"use strict";

// Nemo intro
const nemoIntro = document.getElementById("nemoIntro");
const introSound = new Audio("audio/introLyd.m4a");

// når man klikker på nemo afspilles lyden
nemoIntro.addEventListener("click", function () {
  introSound.play();

  // fade out og fjern intro efter 9 sekunder
  setTimeout(function () {
    nemoIntro.classList.add("fade-out");
    setTimeout(function () {
      nemoIntro.remove();
    }, 1000); // vent 1 sekund på fade out animation
  }, 9000);
});

// Skriv her Cille! :-)
const fishInfo = [];

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

const tangSound = new Audio();
tangSound.src = "audio/gudLyd.mp3";

const tang2Image = new Image();
// preload tang2 billedet
tang2Image.src = "img/tang2.png";

if (tang) {
  tang.addEventListener("click", function () {
    // skift mellem tang1.png og tang2.png
    if (tang.src.includes("tang1.png")) {
      tang.src = "img/tang2.png";
      tangSound.play();
    } else {
      tang.src = "img/tang1.png";
    }
  });
}

const mus = document.getElementById("seashell-closed");

const musOpen = new Image();
musOpen.src = "img/musOpen.png";

const musSound = new Audio();
musSound.src = "audio/burp-kort.mp3";

// funktion til at lave bobler fra muslingen
function createShellBubbles() {
  // lav 8 bobler
  for (let i = 0; i < 8; i++) {
    setTimeout(function () {
      const bubble = document.createElement("div");
      bubble.className = "shell-bubble";

      // lidt tilfældig position så de ikke alle kommer fra samme sted
      const randomOffset = Math.random() * 40 - 20;
      bubble.style.left = 80 + randomOffset + "px";

      // lidt tilfældig størrelse
      const randomSize = 10 + Math.random() * 15;
      bubble.style.width = randomSize + "px";
      bubble.style.height = randomSize + "px";

      // lidt tilfældig delay i animation
      bubble.style.animationDelay = Math.random() * 0.3 + "s";

      document.body.appendChild(bubble);

      // fjern boblen efter animation er færdig
      setTimeout(function () {
        bubble.remove();
      }, 2500);
    }, i * 100); // delay mellem hver boble
  }
}

if (mus) {
  mus.addEventListener("click", function () {
    // skift mellem musLuk.png og musOpen.png
    if (mus.src.includes("musLuk.png")) {
      mus.src = "img/musOpen.png";
      musSound.play();
      createShellBubbles(); // lav bobler når muslingen åbner
    } else {
      mus.src = "img/musLuk.png";
    }
  });
}

// De 3 const her, er fordi vi har 3 foreskellige puffer fish i vores HTML :`-)
const puffish = document.getElementById("puffish");
const puffish2 = document.getElementById("puffish2");
const puffish3 = document.getElementById("puffish3");

const bigPufferImage = new Image();
bigPufferImage.src = "img/big-pufferfish-swim.gif";

// Prut til purt fisk når den bliver lille
const puffSound = new Audio();
puffSound.src = "audio/prut.mp3";

if (puffish) {
  puffish.addEventListener("click", function () {
    // skift mellem flat og big pufferfish
    if (puffish.src.includes("flat-pufferfish-swim.gif")) {
      puffish.src = "img/big-pufferfish-swim.gif";
    } else {
      puffish.src = "img/flat-pufferfish-swim.gif";
      puffSound.play();
    }
  });
}

if (puffish2) {
  puffish2.addEventListener("click", function () {
    // skift mellem flat og big pufferfish
    if (puffish2.src.includes("flat-pufferfish-swim.gif")) {
      puffish2.src = "img/big-pufferfish-swim.gif";
    } else {
      puffish2.src = "img/flat-pufferfish-swim.gif";
      puffSound.play();
    }
  });
}

if (puffish3) {
  puffish3.addEventListener("click", function () {
    // skift mellem flat og big pufferfish
    if (puffish3.src.includes("flat-pufferfish-swim.gif")) {
      puffish3.src = "img/big-pufferfish-swim.gif";
    } else {
      puffish3.src = "img/flat-pufferfish-swim.gif";
      puffSound.play();
    }
  });
}
