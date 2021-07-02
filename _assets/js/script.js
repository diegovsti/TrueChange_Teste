window.addEventListener('load', function(){
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    });
});