(function($) {
    $(function() {
        var $header = $('header');
         
        $(window).scroll(function() {
            if ($(window).scrollTop() > 494) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        });
})(jQuery);