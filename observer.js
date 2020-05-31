"use strict";
//  ! HEADER
const nav = document.querySelector(".header__navigation");
const sectionOne = document.querySelector("header");
//  ! FEATURES
const faders = document.querySelector(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

//  ! FEATURES
const appearOptions = {
  // threshold: 1, // Sigurohet qe te jete i shfaqur i  gjithe seksioni para se ta shfaqi ose ta heqi
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target); // it tells to stop looking at it once it did the job
    } else {
      entry.target.classList.remove("appear");
    }
  });
},
appearOptions);

appearOnScroll.observe(faders);
/* faders.forEach(fader => {
  appearOnScroll.observe(fader)
}) */

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
