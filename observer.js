"use strict";
//  ! HEADER
const nav = document.querySelector(".header__navigation");
const sectionOne = document.querySelector("header");
//  ! FEATURES
const faders = document.querySelectorAll(".fade-in");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
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

//  ! FEATURES AND OTHER SECTIONS
const appearOptions = {
  rootMargin: "0px 0px -10% 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      // appearOnScroll.unobserve(entry.target); // it tells to stop looking at it once it did the job
    } else {
      entry.target.classList.remove("appear");
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
