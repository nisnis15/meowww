var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.5,
    slideShadows: false,
  },

  navigation: {
    nextEl: "#arrow-right-list",
    prevEl: "#arrow-left-list",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  initialSlide: 2, // Hanako must be third in HTML
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
