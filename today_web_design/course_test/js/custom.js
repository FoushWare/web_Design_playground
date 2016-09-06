$(function(){
    //for links in the navbar to give clicked-one the class active
    $('.navbar-default .navbar-nav > li > a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // make some animation in the mobile with clicking the toggle button
    $('.navbar-default .navbar-toggle ').click(function(){
        $(this).toggleClass("active");
    });

    //make bounce for icons of soicial-icons
    $('.wobble').hover(function(){
         $(this).toggleClass("wobble");
    });







// DON'T touch this blow
});
