"use strict";

function slideShow() {

  var slides       =  document.querySelectorAll(".slide");
  var currentSlide =  1;
  var next         =  document.querySelector(".next");
  var prev         =  document.querySelector(".prev");
  var dots         =  document.querySelectorAll(".dot");

  showSlide(currentSlide);

  function addSlide(n) {
    showSlide(currentSlide += n);
  }

  function showSlide(n) {
    var i = 0;
    if ( n > slides.length ) { currentSlide = 1; }
    if ( n < 1) { currentSlide = slides.length; }
    for ( i; i < slides.length; i++ ) {
      slides[i].className = "slide";
    }
    slides[currentSlide-1].className += "  --current";
  }

  next.addEventListener("click", function() {
    addSlide(+1);
  });
  prev.addEventListener("click", function() {
    addSlide(-1);
  });
}

slideShow();