// código do slide
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'),{
        slidesToShow: 1,
        slidesToScroll:1,
        draggable: true,
        dots: '.dots',
        duration: 0.25,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    })
});