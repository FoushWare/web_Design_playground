(function($) {
    "use strict";

    var $navbar = $("#sticky-navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed-top").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed-top").clearQueue().animate({
                top: 0
            }, 0);
        }
    });

})(jQuery, undefined);
