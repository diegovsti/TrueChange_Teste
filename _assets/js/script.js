window.addEventListener('load', function(){
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });          
});


// função para abrir e fechar o menu
window.onload = function(){
  document.querySelector(".m-mobile").addEventListener("click", function(){
      if(document.querySelector(".menu nav ul").style.display == "flex"){
          document.querySelector(".menu nav ul").style.display = "none";
      }else {
          document.querySelector(".menu nav ul").style.display = "flex";

      }
  });
}

//função está sendo chamada na tag a, para fechar o menu ao ser clicado
function FecharMenu(){
  var $menu = document.querySelector(".menu nav ul");

  if ($menu.style.display == "flex"){
      $menu.style.display = "none";
  }
}
