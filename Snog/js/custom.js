$( function() {
    wow = new WOW(
    {
        mobile: true
    });
    wow.init();
})

function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#delivery').parallax("100%", 0.2);
    $('#story').parallax("100%", 0.3);
    $('#specials').parallax("100%", 0.1);
}
initParallax();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:3,
    // autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
