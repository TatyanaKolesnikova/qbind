$(document).ready(function () {
    
    setLanguage('en');
    $(document).on('click' , '.scroll-down' , function(e){
        var height = $(this).parent().outerHeight();
        $('body,html').animate({
            scrollTop: height
        }, 800);
        return false;
    });
    $(document).on('click', '.toogle-menu', function(e){
        $("body").toggleClass("open-nav");
        return false;
    });
    $(document).on('click', '.item-lang', function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).parents('.hold-lang').toggleClass("open-menu");
    });
    $(document).on('click', '.list-lang a', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var selectedLang = $(this).attr('data-lang');
        console.log(selectedLang);
        $('.item-lang').text($(this).text());
        $('.item-lang').attr('data-lang', selectedLang);
        $('.list-lang a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.hold-lang').removeClass("open-menu");
    
        setLanguage(selectedLang);
    });

    $('.slider-hold').each(function () {
        var dots = $(this).find('.slider-paginator .slick-slide');
        $(this).find('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
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
                        fade: false,
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
                        fade: false,
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
                        fade: false,
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
    Fancybox.bind("[data-fancybox]", {
        compact: false,
        on: {
            loaded: (fancybox, slide) => {
            var $closeButton = $('<button>').addClass('close-button');
            $('.fancybox__content').append($closeButton);
            $closeButton.on('click', function() {
                Fancybox.close();
            });
          },
        },
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


const translations = {
    en: {
        "Solutions": "Solutions",
    },
    es: {
        "Solutions": "Soluciones",
    }
};
function setLanguage(language) {
    const elements = $('h1, p, span, div, nav, ul, li, a');
    elements.each(function() {
        const text = $(this).text().trim();
        if (translations[language][text]) {
            $(this).text(translations[language][text]);
        }
    });
}
function langAttr() {
    const elements = $('h1, p, span, div, nav, ul, li, a');
    elements.each(function() {
        
    })
}