$(document).ready(function () {
    //Mobile button collapse functionality
    $(".button-collapse").sideNav();


    $("li#nav").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 2000);
    });

    $(".hero").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 2000);
    });
});