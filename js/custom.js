$(function(){
    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    //about video pop up;
    $('.venobox').venobox({
        closeColor: '#e23e38',
    });

    //team slider
    $('.team-slider').slick({
        arrows: false,
        slidesToShow: 4,
    });
});