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
  
  if(Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  };


    var popupH = $("#iribbon-container").height();
    $("header.site-header").css("paddingTop", popupH);
    $('#iribbon-title').on('click', function(e) {
        $('#iribbon-container, body').toggleClass('show');
        if ($("#iribbon-container").hasClass('show')) {
            popupH = $("#iribbon-container").height() + $("#iribbon-detail")[0].scrollHeight;
        } else {
            popupH = $("#iribbon-container").height();
        }
        $(".outer").animate({ marginTop: popupH }, 500)
    });

     // Hide long default descriptions on exposed filters //
    $('#views-exposed-form-directory-page .description').hide();  


  });
})(jQuery);

(function ($) {
Drupal.behaviors.betterExposedFilters = {
   attach: function(context, settings) {   
      $(document).ajaxComplete(function(event, jqXHR, settings) {
        // Hide long default descriptions on exposed filters after ajax has run//
        $('#views-exposed-form-directory-page .description').hide();  
      });
  }}
})(jQuery);