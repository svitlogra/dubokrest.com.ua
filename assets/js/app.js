console.log('file 1');


$(function() {

   /* Fixed Header */
    let header = $("#header");
    let hero = $("#hero");
    let heroH = hero.innerHeight();
    let scrollPos = $(window).scrollTop();
  
    
    checkScroll(scrollPos, heroH);

    $(window).on("scroll resize", function() {
        heroH = hero.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, heroH);
    });

    function checkScroll(scrollPos, heroH) {
        if( scrollPos > heroH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
      }
    });


/* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementId = $(this).data('scroll');
  
  
  let elementOffset = $(elementId).offset().top;
  console.log(elementOffset);
  // nav.removeClass("show");

  $("html, body").animate({
      scrollTop: elementOffset - 180
  }, 1500);
  
});

/* Nav Toggle */

let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
  event.preventDefault();

  nav.toggleClass("show");
});





AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//Swiper
import { Swiper, Parallax, Mousewheel, Pagination, Navigation, Scrollbar } from 'swiper'
  // import Swiper styles
Swiper.use ([ Parallax, Mousewheel, Pagination, Navigation, Scrollbar ])

document.addEventListener('DOMContentLoaded', () => {
  
  const swiperHotel = new Swiper('.hotel-room__slider', {
  
    speed:1500,  
    parallax:true,
    loop: true,
    grabCursor: true,
    

    mousewheel: {
      invert: false,
      },

    pagination: {
      el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
      },
   
  });
  
  const swiperRestrount = new Swiper('.restrount__slider', {
  
    speed:2000,  
    parallax:true,
    grabCursor: true,
    loop: true,
   
    mousewheel: {
      invert: false,
      },
    
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      
  });
  
  const swiperRooms = new Swiper('.rooms__inner', {
  
    speed:2000,  
    parallax:true,
    grabCursor: true,
    loop: false,
    slidesPerView: 'auto',
    
    spaceBetween: 20,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    mousewheel: {
      invert: false,
      },
    
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: true,
      // },
      
  });

});

 
  
  