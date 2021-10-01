"use strict";

// navbar
const openNavBtn = document.querySelector("button.open-nav");
const navbar = document.querySelector("nav");
const closeNavBtn = document.querySelector("button.close-nav");
const navLinks = document.querySelectorAll("nav ul a");

openNavBtn.addEventListener("click", function () {
  navbar.classList.add("show");
  navLinks.forEach((item) => {
    item.addEventListener("click", function () {
      navbar.classList.remove("show");
    });
  });
});

closeNavBtn.addEventListener("click", function () {
  navbar.classList.remove("show");
});


// header shadow
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > header.offsetHeight + 50) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

// smooth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// dark mode
const body = document.querySelector("body");
const toggleThemeInput = document.querySelector("#dark-toggle");
const sunIcon = document.querySelector("i.the-sun");
const moonIcon = document.querySelector("i.the-moon");

window.onload = function () {
  sunIcon.classList.add("hide");
};

toggleThemeInput.addEventListener("click", function () {
  sunIcon.classList.toggle("hide");
  sunIcon.classList.toggle("show");
  moonIcon.classList.toggle("hide");

  body.id = body.id === "light-theme" ? "dark-theme" : "light-theme";
});
