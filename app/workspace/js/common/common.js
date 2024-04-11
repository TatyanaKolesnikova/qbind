$(document).ready(function () {
    $(document).on('click', '.toogle-menu', function(e){
        $("body").toggleClass("open-nav");
        return false;
    });
    $(document).on('click', '.item-lang', function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).parents('.hold-lang').toggleClass("open-menu");
    });
    $(document).on('click', '.list-lang a', function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.item-lang').text($(this).text());
        $('.item-lang').attr('data-lang', $(this).attr('data-lang'));
        $('.list-lang a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.hold-lang').removeClass("open-menu");
    });


    $('.slider-hold-paginator').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider'
    });
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-hold-paginator',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        appendDots: $('.slider-nav'),
        appendArrows: $('.slider-nav'),
        prevArrow: '<span class="slick-arrow_custom-left"></span>',
        nextArrow: '<span class="slick-arrow_custom-right"></span>',
        dotsClass: 'slick-custom-dots',
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});