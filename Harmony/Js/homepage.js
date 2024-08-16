$(document).ready(function(){

// Khi người dùng nhấp vào nút, quay lại đầu trang với hiệu ứng lướt mượt mà
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




// Slider Swipper card 1
var TrandingSlider1 = new Swiper('.tranding-slider1', {
  autoplay: {
    delay: 2500, // Thời gian giữa các lần chuyển slide
    disableOnInteraction: false // Cho phép autoplay không dừng khi tương tác
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 30, // Điều chỉnh độ sâu của các phần tử bên ngoài trung tâm
    modifier: 4, // Điều chỉnh độ mờ của các phần tử bên ngoài trung tâm
  },
  pagination: {
    el: '.swiper-pagination1',
    type: "progressbar",
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  }
});

// Dừng autoplay khi rê chuột vào
document.querySelector('.tranding-slider1').addEventListener('mouseenter', function() {
  TrandingSlider1.autoplay.stop();
});

// Tiếp tục autoplay khi không còn rê chuột vào
document.querySelector('.tranding-slider1').addEventListener('mouseleave', function() {
  TrandingSlider1.autoplay.start();
});



// Slider Swipper card 2
var TrandingSlider2 = new Swiper('.tranding-slider', {
  autoplay: {
      delay: 2500,
      disableOnInteraction: false
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 30,
      modifier: 4,
  },
  pagination: {
      el: '.swiper-pagination',
      type: "progressbar",
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});

// Dừng autoplay khi rê chuột vào
document.querySelector('.tranding-slider').addEventListener('mouseenter', function () {
  TrandingSlider2.autoplay.stop();
});

// Tiếp tục autoplay khi không còn rê chuột vào
document.querySelector('.tranding-slider').addEventListener('mouseleave', function () {
  TrandingSlider2.autoplay.start();
});



// Image Prallax
const images = document.querySelectorAll(".imgzoom");
let currentIndex = 0;
const intervalTime = 3000; // thời gian giữa mỗi lần chuyển đổi hình ảnh (ms)
let autoChangeInterval;

function clearActiveImage() {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
}

function setActiveImage(index) {
    clearActiveImage();
    images[index].classList.add("active");
}

function startAutoChange() {
    autoChangeInterval = setInterval(autoChangeImage, intervalTime);
}

function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

function autoChangeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    setActiveImage(currentIndex);
}

images.forEach(function(image, index) {
    image.onclick = function(event) {
        event.stopPropagation(); // important to not call the clearActiveImage() on every click
        if (images[index].classList.contains("active")) {
            images[index].classList.remove("active");
            startAutoChange(); // restart auto change when user deactivates image
        } else {
            clearActiveImage();
            images[index].classList.add("active");
            stopAutoChange(); // stop auto change when user activates image
            currentIndex = index; // set currentIndex to the clicked image
        }
    };
});

// Start the auto change initially
startAutoChange();




    // ShopByBrand
    var owl = $('.owl-carousel ');
    owl.owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items: 2,
        },
        // breakpoint from 480 up
        576 : {
            items: 2,
        },
        // breakpoint from 768 up
        768 : {
            items: 3,
        },
        992 : {
            items: 4,
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
})









// ProductCard1-mb
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);










