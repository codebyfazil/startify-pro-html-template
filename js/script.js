const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicbullets: true,
  },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  keyboard: { enabled: true, onlyInViewport: false },
  mousewheel: { invert: true },
  autoplay: { delay: 5000 },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
