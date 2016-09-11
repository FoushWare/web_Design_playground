$(function(){

    "use strict";
    //for links in the navbar to give clicked-one the class active
    $('.navbar-default .navbar-nav > li > a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // make some animation in the mobile with clicking the toggle button
    $('.navbar-default .navbar-toggle ').click(function(){
        $(this).toggleClass("active");
    });

    // adjust the carousel time interval
    $('.carousel').carousel({
        interval:4000
    });

    //make bounce for icons of soicial-icons
    $('.wobble').hover(function(){
         $(this).toggleClass("wobble");
    });

    /* start trigger the nicescroll plugin*/
    $('html').niceScroll({
        cursorcolor:"#6FDA44",
        cursorwidth:"8px",
        cursorborder:"1px solid #6FDA44",
    });
    /*End trigger the nicescroll plugin*/

//start  change color of the templete with the gear-box
    $('.gear-box').click(function(){
         $('.option-box .color-option').fadeToggle();
    });
    // start coloring the li of ul of color-option
    // cashing the  li
      var colorLi=$('.color-option ul li');

                         colorLi
                             .eq(0)
                             .css("background","#6fda44").end()
                             .eq(1)
                             .css("background","#b544da").end()
                             .eq(2)
                             .css("background","#E91E63").end()
                             .eq(3)
                             .css("background","#03a9f4");

                         // start coloring the li of ul of color-option

                         //start chage the color when click the color
                         $(colorLi).click(function(){
                             // console.log($(this).attr("data-value"));
                             // console.log( $("link[href*='theme']"));
                              $("link[href*='theme']").attr("href",$(this).attr('data-value'));
                         });

                          //End  chage the color when click the color


//End  change color of the templete with the gear-box

    //start configure the To-Top button

            //start show the button on scroll the page

            $(window).scroll(function(){

              $(this).scrollTop()>=700?$('.To-Top').show():$('.To-Top').hide();
            console.log($('body,html').scrollTop());
            });
            //End show the button on scroll the page

            // start Go to top on clicking the button
            $('.To-Top').click(function(){
                $('body,html').animate({
                    scrollTop:0
                },1500);
            });
            //End Go to top on clicking the button

  //End configure the To-Top button

            //  start animated-loading
            $(function(){
                $(".loading").fadeOut(3000,function(){
                $(this).remove();
                $('body').css("overflow","auto");

            });

            });

            // End animated-loading



// DON'T touch this blow
});
