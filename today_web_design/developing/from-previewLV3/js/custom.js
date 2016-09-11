$(function(){
    'use Strick';
    /*make the header fit the screen size*/
    $('header').height($(window).height());

    /*End make the header fit the screen size*/

    /* start trigger the nicescroll plugin*/
    $('html').niceScroll();
    /*End trigger the nicescroll plugin*/

   /*start adjust the chevron-down to point to the next section*/
    $('header .lnr-chevron-down-circle').click(function(){

        $('html,body').animate({
         scrollTop:$('.our-services').offset().top
        },2000);
    });
   /*start adjust the chevron-down to point to the next section*/

 /*start show more projects with the button (show more)*/
        $('.show-more').click(function(){
            $('.our-work .hidden').fadeIn(2000);
            $(this).fadeOut(1000);
            $('.our-work .projects').css("marginBottom","188px");
        });
 /*End show more projects with the button (show more)*/

 /* start manage the testmonials */
        var rightArrow=$('.lnr-chevron-right-circle'),
            leftArrow=$('.lnr-chevron-left-circle');
        //make a check function to check if the client is the first or last client
        //to hide the chevron-left oR chevron-right
        function checkClient(){
        $('.client:first').hasClass('active') ? leftArrow.fadeOut():leftArrow.fadeIn();
        //chevron-right

        $('.client:last').hasClass('active') ? rightArrow.fadeOut():rightArrow.fadeIn();

        }
     // End the funcion of client check
                                            //call the function
     checkClient();

     /*start keeping track of the testmonials */
           //Right arrow
     rightArrow.click(function(){
         $('.active').fadeOut(100,function(){
        $(this).removeClass('active').next('.client').addClass('active').fadeIn();
         checkClient();
         });

     });

     leftArrow.click(function(){
         $(' .active').fadeOut(100,function(){
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
          checkClient();
         });

     });


     /* End keeping track of the testmonials */

 /* End manage the testmonials */





});
