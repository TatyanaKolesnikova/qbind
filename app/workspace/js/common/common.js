$(document).ready(function () {
    $(".toogle-menu").click(function () {
        $("body").toggleClass("open-nav");
        return false;
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