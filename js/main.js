$(function(){
    const $header = $('.header');
    window.addEventListener('scroll', function () {
      var position = window.scrollY;
          if (position > 400) { 
              $header.addClass('header-fixed');
          } else {
              $header.removeClass('header-fixed');
          }
  });
});