$(function() {
    "use strict";
    //start sticky navabar
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
    //End sticky navbar
    //Start Adjust the top carousel in the page
$('.cover').width($(window).width());
    //End Adjust the top carousel in the page
//start mixitup
$('#Container').mixItUp();
//End mixitup
///*start smooth scroll*/
    $('.links li a').click(function(){
        $('html,body').animate({
             scrollTop:$($(this).data("value")).offset().top-40
        },1000);

    });
    /*End  smooth scroll*/


});
