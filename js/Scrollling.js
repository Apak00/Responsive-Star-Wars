$(function(){
    $(window).on("load resize", function () {
        $(".fill-screen").css("height",window.innerHeight);
    });
    // $(".wall-paper").wallpaper({
    //     source: {
    //         poster: null,
    //        video: "//www.youtube.com/embed/QLkKmcNd-rk"
    //     }
    // });

    //add bootstrap scrollSPY
    $('body').scrollspy({
        target: ".navbar",
        offset: 200
    });

    $('nav a').bind("click" ,function () {
        $("html , body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 78},1500,"easeInOutExpo");
        event.preventDefault();
        });

    //Initialize WOW
    new WOW().init();

});

