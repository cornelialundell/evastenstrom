const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 7000,
      },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });