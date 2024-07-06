const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },
  });

  document.querySelectorAll('.hover-underline').forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.classList.remove('after:!origin-right');
    });
    element.addEventListener('mouseleave', function () {
      element.classList.add('after:!origin-right');
    });
  });