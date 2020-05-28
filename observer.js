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
    } else {
      nav.classList.remove("active");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
