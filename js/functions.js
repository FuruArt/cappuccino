"use strict";

function sideMenu() {

// [0] First Effect - Basic slide from left edge
// [1] Second Effect - First Effect + shadow on site
// [2] Third Effect - First Effect + push content
// [3] Fourth Effect - Push content and show menu

  // var trigger  = document.querySelector(".--open"),         // [0] trigger
  //     /*trigger2 = document.querySelector(".--open-2"),       // [1] trigger
  //     trigger3 = document.querySelector(".--open-3"),       // [2] trigger
  //     trigger4 = document.querySelector(".--open-4"),       // [3] trigger*/
  //     close    = document.querySelector(".--close"),        // [ALL] close trigger

  //     mask     = document.querySelector(".mask"),
  //     //pusher   = document.querySelector(".section__container"),
  //     menuBody = "section__menu-body",
  //     menu     = document.querySelector("." + menuBody),
  //     // pushMenu = document.querySelector(".--pushed"),
  //     wrapper  = document.querySelector(".wrapper"),
  //     // html     = document.querySelector("html"),
  //     // nextSlide = document.querySelector("#nextSlide"),
      
  //     // [0] Showing menu
  //     show =
  //       function showMenu() {
  //         menu.className += "  --active";
  //         mask.className += "  --shadow";
  //         wrapper.className += "  --push";
  //         // html.className += "  --noScroll";
  //       },

  //     // [1] Show menu with shadow on content
  //     // showShadow = 
  //     //   function showMenuWithShadow() {
  //     //     show();
  //     //     mask.className += "  --shadow";
  //     //   },

  //     // [2] Show menu with push content
  //     // showPush = 
  //     //   function showMenuPush() {
  //     //     show();
  //     //     pusher.className += "  --push";
  //     //   },

  //     // [3] Push content and show menu
  //     // pushBeforeShow =
  //     //   function menuPush() {
  //     //     wrapper[1].style.marginLeft = 240 + "px";
  //     //   },
      
  //     // [ALL] Hide menu with all effects
  //     hide = 
  //       function hideMenu() {
  //         menu.className = menuBody;
  //         mask.className = "mask";
  //         wrapper.className = "wrapper";
  //         // pusher.className = "section__container";
  //         // wrapper[1].style.marginLeft = 0;
  //       };

  //     // changeSlide =
  //     //   function newSlide() {
  //     //     wrapper[0].className += "  --fadeIn  --currentSlide";
  //     //     wrapper[0].style.visibility = "hidden";
  //     //     wrapper[1].className += "  --currentSlide";
  //     //   },
      
  //     // removeSlide =
  //     //   function backSlide() {
  //     //     wrapper[1].className += "  --backSlide";
  //     //   };

  // trigger.addEventListener("click", show);          // [0] Show menu event

  // // trigger2.addEventListener("click", showShadow);   // [1] Show menu event
  
  // // trigger3.addEventListener("click", showPush);     // [2] Show menu event

  // // trigger4.addEventListener("click", pushBeforeShow); // [3] Push content before show

  // // nextSlide.addEventListener("click", changeSlide);

  // close.addEventListener("click", hide);            // [ALL] Hide menu event

  // mask.addEventListener("click", hide);             // [1] Hide menu event

}

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

sideMenu();
slideShow();