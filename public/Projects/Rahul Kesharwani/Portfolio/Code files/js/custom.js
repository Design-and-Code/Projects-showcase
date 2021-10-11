/*
--------------------------------------------------------------------------
* Template Name    : Morioka - Startup Agency and SasS Business Template * 
* Author           : CreataThemes                                        *
* Version          : 1.0.0                                               *
* Created          : Feb 2020                                           * 
* File Description : Main JS file of the template                        *
*-------------------------------------------------------------------------
*/

$(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), 

$(document).on("click", ".navbar-collapse.show", function(a) {
    $(a.target).is("a") && $(this).collapse("hide")
}), 

$(".navbar-nav a, .scroll_down a").on("click", function(a) {
    var o = $(this);
    $("html, body").stop().animate({
        scrollTop: $(o.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), a.preventDefault()
}), 

$("#navbarCollapse").scrollspy({
    offset: 20
}), 

$(".element").each(function() {
    var a = $(this);
    a.typed({
        strings: a.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), 

$(window).on("load", function() {
    var a = $(".work-filter"),
        o = $("#menu-filter");
    a.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), o.find("a").on("click", function() {
        var e = $(this).attr("data-filter");
        return o.find("a").removeClass("active"), $(this).addClass("active"), a.isotope({
            filter: e,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), 

$(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
}), 

$("#owl-demo").owlCarousel({
    autoPlay: 7e3,
    stopOnHover: !0,
    navigation: !1,
    paginationSpeed: 1e3,
    goToFirstSpeed: 2e3,
    singleItem: !0,
    autoHeight: !0
}), 

$("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
    overflow: "visible"
}), 

$(window).on("scroll", function() {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), 

$(".back_top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
});






