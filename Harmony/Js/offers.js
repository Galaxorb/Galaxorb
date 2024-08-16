$(document).ready(function(){
    var owl = $('.owl-carousel ');
    owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items: 2,
        },
        // breakpoint from 480 up
        576 : {
            items: 3,
        },
        // breakpoint from 768 up
        768 : {
            items: 4,
        },
        992 : {
            items: 5,
        },
        1200 : {
            items: 6,
        },
    }
});
    // Custom Navigation Events
    $('.mui-ten #prevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('.mui-ten #nextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
})

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hover-img');
    
    images.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.dataset.originalSrc = img.src;
            img.src = img.dataset.hover;
        });
  
        img.addEventListener('mouseout', function() {
            img.src = img.dataset.originalSrc;
        });
    });
  });


