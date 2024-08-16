$(document).ready(function(){
    $('.Gudies-Slick').slick({
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'<span class="prev_arrow"><i class="fa-light fa-angle-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-light fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    });
});