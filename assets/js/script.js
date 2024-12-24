const mobileMenu = document.getElementById("mobileMenu");

const navigation = document.getElementById("navigation");
mobileMenu.addEventListener("click", function () {
  // console.log('click')
  navigation.classList.toggle("toggle");
});

$(document).ready(function () {
  $(".slide-container").owlCarousel({
    margin: 0,
    responsiveClass: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    loop: true,
    
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true
      },
    },
  });
  
  $(".tastimonial-container").owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    loop: true,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: true,
        
      },
      600: {
        items: 3,
        dotsEach: true
      },
      1400: {
        items: 4,
        dotsEach: true
      },
    },
  });
});
