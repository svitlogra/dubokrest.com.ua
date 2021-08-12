console.log('file 1');


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
import { Swiper, Parallax, Mousewheel, Pagination } from 'swiper'
  // import Swiper styles
Swiper.use([ Parallax, Mousewheel, Pagination ])

document.addEventListener('DOMContentLoaded', () => {
  
  const swiperHotel = new Swiper('.hotel-room__slider', {
  
  speed:1500,  
  parallax:true,
  // direction: 'vertical',
  // loop: true,
  
  // grabCursor: true,
  
  mousewheel: {
    invert: false,
    
    },
  
  pagination: {
    el: '.swiper-pagination',
      type: 'bullets',
      // clickable: true,
    dynamicBullets: true,
    },
    
      
    
    
  });
  
  const swiperRestrount = new Swiper ('.restrount__slider', {
    speed:1500,  
    parallax:true,
    grabCursor: true,
    // direction: 'vertical',
    // loop: true,
   
    mousewheel: {
      invert: false,
      
      },
    
    pagination: {
      el: '.swiper-pagination',
        type: 'bullets',
        // clickable: true,
      dynamicBullets: true,
      },
      
    
  })

});

 
  
  