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
    var dots = $('.slider-paginator .slick-slide');
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.slider-paginator',
        dots: true,
        customPaging: function(slider, i) {
            return dots.eq(i);
        },
        
        //appendDots: $('.slider-nav'),
        appendArrows: $('.slider-nav'),
        prevArrow: '<span class="left"></span>',
        nextArrow: '<span class="right"></span>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    centerMode: true,
                    focusOnSelect: true,
                    dots: true,
                    appendDots: $('.slider-nav'),
                    customPaging : function(slider, i) {
                        return '<button type="button">' + (i+1) + '</button>';
                    }
                }
            },
            {
              breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    centerMode: true,
                    focusOnSelect: true,
                    dots: true,
                    appendDots: $('.slider-nav'),
                    customPaging : function(slider, i) {
                        return '<button type="button">' + (i+1) + '</button>';
                    }
                }
            },
            {
              breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    centerMode: true,
                    focusOnSelect: true,
                    dots: true,
                    appendDots: $('.slider-nav'),
                    customPaging : function(slider, i) {
                        return '<button type="button">' + (i+1) + '</button>';
                    }
                }
            }
          ]
    });

    var count = $(".slider-nav ul li").length;
    $('.slider-count').text('/'+count);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});