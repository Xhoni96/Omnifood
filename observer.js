"use strict";
const nav = document.querySelector(".header__navigation");
const sectionOne = document.querySelector("header");
const img = document.querySelector(".header__logo");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("active");
      img.src = "img/logo.png"
    } else {
      nav.classList.remove("active");
      img.src = "img/logo-white.png"
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
