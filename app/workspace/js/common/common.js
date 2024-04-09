//* -- CODE DEVELOPED BY WEBFULLSET TEAM  -- //*
//* -- OUR CONTACTS -- //*
//* -- https://webfullset.com/  -- //*
//* -- info@webfullset.com -- //*
//* -- Skype: hjvf_07 -- //*
//* -- https://www.freelancer.com/u/markupcoders --//*

var speed = 300;
var speed2 = 2000;
var body = $('body');

jQuery(window).on('load' ,function(){
    WebFullSetInit.init();
});

var WebFullSetInit = {
    init: function(){
        this.WebFullSetStart();
        this.goTo();
    },

    WebFullSetStart: function() {
        $(".simplebox").simplebox();
    },

    goTo: function(){
        $('body').each(function(){
            var hold = $(this);
            var link = hold.find('#nav a');
            var linkTop = hold.find('.btn-up');
            var linkTopWidth = linkTop.outerWidth();
            var to;
            var position, windH;

            linkTop.click(function(){
                $('html, body').animate({scrollTop: 0}, {queue:false, duration: 1300});

                return false;
            });

            link.click(function(){
                if($(this).attr('href').substring(0,2) === '/#' ){

                    to = hold.find($(this).attr('href').substring(1, $(this).attr('href').length)).offset().top;

                    $('html, body').animate({scrollTop: to}, {queue:false, duration: 1300});

                    return false;
                }
            });

            function all(){
                position = $(window).scrollTop();
                windH = $(window).height();

                if(position > windH/2){
                    if(!linkTop.hasClass('visible')){
                        linkTop.addClass('visible');
                    }
                }
                else {
                    if(linkTop.hasClass('visible')){
                        linkTop.removeClass('visible');
                    }
                }
            }
            all();
            $(window).resize(function(){
                all();
            });
            $(window).scroll(function(){
                all();
            })
        });
    }
};