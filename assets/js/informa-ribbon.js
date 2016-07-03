// JavaScript Document

(function ($) {
  $(document).ready(function() {
    var popupH = $("#iribbon-container").height();
    $("header.site-header").css("marginTop", popupH);
    $('#iribbon-title').on('click', function(e) {
        $('#iribbon-container, body').toggleClass('show');
        if ($("#iribbon-container").hasClass('show')) {
            popupH = $("#iribbon-container").height() + $("#iribbon-detail")[0].scrollHeight;
        } else {
            popupH = $("#iribbon-container").height();
        }
        $(".outer").animate({ marginTop: popupH }, 500)
    });

  });
})(jQuery);