$(document).ready(function(){
    $('.slider').slick({
        zIndex: 2,
        fade: true,
        speed: 600,
        autoplay: true,
        appendDots: $('.slider__dots'),
        dots: true,
    });


    $('.order__image-box1').slick({
        zIndex: 2,
        fade: true,
        appendDots: $('.order__dots1'),
        dots: true,
        draggable: false,
    });
    $('.order__image-box2').slick({
        zIndex: 2,
        fade: true,
        appendDots: $('.order__dots2'),
        dots: true,
        draggable: false,
    });
    $('.order__image-box3').slick({
        zIndex: 2,
        fade: true,
        appendDots: $('.order__dots3'),
        dots: true,
        draggable: false,
    });
    $('.order__image-box4').slick({
        zIndex: 2,
        fade: true,
        appendDots: $('.order__dots4'),
        dots: true,
        draggable: false,
    });
});