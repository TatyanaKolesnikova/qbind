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
    
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});