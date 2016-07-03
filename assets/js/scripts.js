(function ($) {
  $(document).ready(function() {

  $('nav.main-nav').prepend('<div class="hamburger-menu"><div class="bar"></div></div>');
  $('nav.main-nav ul').addClass('hide');
  $(".hamburger-menu").click(function(){
        $("nav.main-nav ul").toggleClass('hide');
        $(".hamburger-menu").toggleClass('close');
    });

  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
  })
  
  // if(Modernizr.mq('only all')) {
  //   $('html').addClass('mq');
  // } else {
  //   $('html').addClass('no-mq');
  // };


  });
})(jQuery);
