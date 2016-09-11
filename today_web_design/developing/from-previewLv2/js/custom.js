
$(function(){
    'use strict';
    /* change the active class for navbar li*/
    $('.links li a').click(function(){
$(this).parent().addClass("active").siblings().removeClass("active");
    });

    var myheader= $(".header");
    /*adjust header to appear for the first glance to every screen height*/
    myheader.height($(window).height());
    $(window).resize(function(){

    myheader.height($(window).height());
     /*adjust the li item of the bxslider*/
        $('.bxslider').each(function(){
                $(this).css('marginTop',(
                    $(window).height() - $('.bxslider li').height()
                )/2);
        });


    });
  /*adjust the li item of the bxslider*/
    $('.bxslider').each(function(){
        $(this).css('marginTop',(
            $(window).height()-$('.bxslider li').height()
        )/2);
    });

    /*triger the bxslider to work*/
    $('.bxslider').bxSlider({
         mode: 'fade',
        pager:false
    });
    /*start smooth scroll*/
    $('.links li a').click(function(){
        $('html, body').animate({
          scrollTop:$('#'+$(this).data('value')).offset().top

        },1000);

    });
    /*End  smooth scroll*/
    /*start my own auto-slider*/
    (function autoSlider(){
        $('.slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();

                     autoSlider();
                });
            }
            else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    /*End  my own auto-slider*/
    /* triger mixitup */
    $('#Container').mixItUp();
    /*triger the niceScroll */
    $("html").niceScroll({
        cursorcolor:'#94DEC9',
        cursorwidth:'10px',
        cursorborder:'none'

    });
    /*/////////////////// Don't touch this line under this line to avoid mistake */
});

