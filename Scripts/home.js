/*
A generic slideshow template script I copied from another of my projects to adapt for multiple pets
*/

"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("card");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    let slideToShow = slides[slideIndex-1];
    if (slideToShow.classList.contains("title")) {
        slideToShow.style.display = "flex";
    } else {
        slideToShow.style.display = "block";
    }
}