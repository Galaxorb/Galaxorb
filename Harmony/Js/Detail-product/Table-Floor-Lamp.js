$(document).ready(function() {
    var images = [
        "../../Image/Detail_Img/Table Floor Lamp/png.png",
        "../../Image/Detail_Img/Table Floor Lamp/62_+Tray+Table+Floor+Lamp (3).png",
        "../../Image/Detail_Img/Table Floor Lamp/62_+Tray+Table+Floor+Lamp.png",
        "../../Image/Detail_Img/Table Floor Lamp/62_+Tray+Table+Floor+Lamp (1).png",
        "../../Image/Detail_Img/Table Floor Lamp/62_+Tray+Table+Floor+Lamp (2).png",
    ];

    var currentIndex = 0;
    
    function showImage(index) {
        $('#mainImage').attr('src', images[index]);
        $('.owl-carousel').trigger('to.owl.carousel', [index, 300]);
    }

    $('#nextBtn').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('#prevBtn').click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        center: true,
        responsiveClass: true,
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
                items: 5,
            },
        }
       
    });

   
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  
  });

  document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll("#smallimg .item img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function updateMainImage(index) {
      mainImage.src = thumbnails[index].src;
      thumbnails.forEach(thumb => thumb.classList.remove("active-thumbnail"));
      thumbnails[index].classList.add("active-thumbnail");
    }

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      updateMainImage(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      updateMainImage(currentIndex);
    });


  });

  $(document).ready(function() {
    $(".item .img-fluid").click(function(){
        var img = $(this).attr("src");
        $("#mainImage").attr("src", img)
    })
})


// ----------------sothongtin---------------
$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });
    $(".icon1").click(function() {
        $(this).hide();
        $(this).siblings(".icon2").show();
    });

    // Xử lý khi click vào icon2
    $(".icon2").click(function() {
        $(this).hide();
        $(this).siblings(".icon1").show();
    });
});
// ----------------sothongtin---------------



// Function to decrease quantity
function decreaseQuantity(id) {
    var quantity = document.getElementById(id);
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

// Function to increase quantity
function increaseQuantity(id) {
    var quantity = document.getElementById(id);
    quantity.value = parseInt(quantity.value) + 1;
}


$(document).ready(function(){
    var owl = $('.owl-carousel ');
    owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items: 3,
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
            items: 5,
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
// 
$(".popup-cart").hide()
$("#Overlay-PopupCart").hide()

$(".open-cart-popup").click(function(){
  $(".popup-cart").show()
  $("#Overlay-PopupCart").show()
})
$("#Overlay-PopupCart").click(function(){
  $(".popup-cart").hide()
  $(this).hide()
})
$(".close-popupcart").click(function(){
  $(".popup-cart").hide()
  $("#Overlay-PopupCart").hide()
})  

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


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


