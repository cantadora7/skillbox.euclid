const swiper = new Swiper('.swiper-container', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 3000,
  },

});
