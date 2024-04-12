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

    $('.slider-hold').each(function () {
        var dots = $(this).find('.slider-paginator .slick-slide');
        $(this).find('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function(slider, i) {
                return dots.eq(i);
            },
            appendArrows: $(this).find('.slider-nav'),
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
                        appendDots: $(this).find('.slider-nav'),
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
                        appendDots: $(this).find('.slider-nav'),
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
                        appendDots: $(this).find('.slider-nav'),
                        customPaging : function(slider, i) {
                            return '<button type="button">' + (i+1) + '</button>';
                        }
                    }
                }
            ]
        });

        var count = $(this).find(".slider-nav ul li").length;
        $(this).find('.slider-count').text('/'+count);
    })
    Fancybox.bind("[data-fancybox]");
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});