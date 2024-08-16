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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

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


  
});



// Popup Cart Quatity
function decreaseQuantity() {
  var quantity = document.getElementById('quantity');
  if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;
  }
}

function increaseQuantity() {
  var quantity = document.getElementById('quantity');
  quantity.value = parseInt(quantity.value) + 1;
}



function handleAddToCart(button) {
  // Thêm mã để xử lý hành động "Add to cart"
  // Ví dụ: Gửi yêu cầu AJAX hoặc cập nhật giao diện người dùng
  console.log('Add to cart action triggered');
}

function handleRemoveItem(button) {
  // Thêm mã để xử lý hành động "Remove"
  // Ví dụ: Gửi yêu cầu AJAX hoặc cập nhật giao diện người dùng
  console.log('Remove action triggered');
}


