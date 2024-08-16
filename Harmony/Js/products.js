

$(document).ready(function(){
    $(".overlay").hide();
    
    // Xử lý khi click vào popup
    $("#popup").click(function(){
        openNav();
        $(".overlay").fadeIn();
    });

    // Xử lý khi click vào overlay
    $(".overlay").click(function(){
        closeNav();
        $(this).fadeOut();
    });

    // Xử lý khi click vào icon1
    $(".icon1").click(function() {
        $(this).hide();
        $(this).siblings(".icon2").show();
    });

    // Xử lý khi click vào icon2
    $(".icon2").click(function() {
        $(this).hide();
        $(this).siblings(".icon1").show();
    });


    // Xử lý khi click vào apply1 file tu sữa
    $(".apply1").click(function() {
        $(this).hide();
        $(this).siblings(".apply2").show();
    });

    // Xử lý khi click vào apply1 file tự sữa
    $(".apply2").click(function() {
        $(this).hide();
        $(this).siblings(".apply1").show();
    });




        // Xử lý khi click vào icon1
        $(".icon1").click(function() {
            $(this).hide();
            $(this).siblings(".icon2").show();
        });
    
        // Xử lý khi click vào icon2
        $(".icon2").click(function() {
            $(this).hide();
            $(this).siblings(".icon1").show();
        });
    
// Xử lý swipe trên màn hình cảm ứng
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

function handleGesture(event) {
    touchEndX = event.changedTouches[0].screenX;
    if (isSwiping) {
        if (touchEndX > touchStartX) { // Đổi dấu từ '<' sang '>'
            closeNav();
            $(".overlay").fadeOut();
        } else if (touchEndX < touchStartX) { // Đổi dấu từ '>' sang '<'
            openNav();
            $(".overlay").fadeIn();
        }
    }
    isSwiping = false;
}

document.addEventListener('touchstart', function(event) {
    if (!event.target.closest('.no-swipe')) {
        touchStartX = event.changedTouches[0].screenX;
        isSwiping = true;
    } else {
        isSwiping = false;
    }
}, false);

document.addEventListener('touchend', function(event) {
    handleGesture(event);
}, false);

// ================================= Price Input ================================= //
const priceBars = document.querySelectorAll(".price-bar");

priceBars.forEach(priceBar => {
    priceBar.classList.add('no-swipe');
    
    const rangeInput = priceBar.querySelectorAll(".range-input input"),
        priceInput = priceBar.querySelectorAll(".price-input input"),
        range = priceBar.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });
    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            if ((maxVal - minVal) < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });
});
// ================================= Price Input ================================= //
});


// Hiêu ứng trượt trang
function openNav() {
    $("#nav").css("width", "280px");
}

function closeNav() {
    $("#nav").css("width", "0");
}



// ----------------sothongtin---------------
$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });
});
// ----------------sothongtin---------------



// Khi bấm icon trái tim sẽ ko chuyển sang trang khác
document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach(function(heart) {
        heart.addEventListener('click', function(event) {
            event.preventDefault();
            // Thực hiện các hành động khác khi bấm vào heart nếu cần
        });
    });
});





// ----------------------- Auto Chuyển Trang Khi Sp quá nhiều
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.productcard');
    const paginationLinks = document.querySelectorAll('.page-link');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const productsPerPage = 10; // Number of products per page
    let currentPage = 1;

    const showPage = (page) => {
        currentPage = page;
        let start = (page - 1) * productsPerPage;
        let end = page * productsPerPage;
        
        products.forEach((product, index) => {
            if (index >= start && index < end) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });

        paginationLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.getAttribute('data-page')) === page) {
                link.classList.add('active');
            }
        });

        updatePaginationButtons();
    };

    const updatePaginationButtons = () => {
        prevButton.style.display = currentPage === 1 ? 'none' : 'inline-block';
        nextButton.style.display = currentPage === Math.ceil(products.length / productsPerPage) ? 'none' : 'inline-block';
    };

    const applyPagination = () => {
        if (window.matchMedia('(max-width: 767px)').matches) {
            if (products.length > productsPerPage) {
                // Show the first page initially
                showPage(currentPage);

                paginationLinks.forEach(link => {
                    link.style.display = 'inline-block';
                    link.addEventListener('click', handlePageClick);
                });
                prevButton.addEventListener('click', handlePrevClick);
                nextButton.addEventListener('click', handleNextClick);
            } else {
                // Hide page 2 if there aren't enough products
                paginationLinks[1].style.display = 'none';
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            }
        } else {
            products.forEach(product => {
                product.style.display = 'block';
            });

            // Hide all pagination except page 1
            paginationLinks.forEach((link, index) => {
                if (index !== 0) {
                    link.style.display = 'none';
                }
                link.removeEventListener('click', handlePageClick);
            });
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    };

    const handlePageClick = (e) => {
        e.preventDefault();
        let page = parseInt(e.target.getAttribute('data-page'));
        showPage(page);
    };

    const handlePrevClick = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            showPage(currentPage + 1);
        }
    };

    applyPagination();
    window.addEventListener('resize', applyPagination);
});
// ----------------------- Auto Chuyển Trang Khi Sp quá nhiều




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



  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button.fade-in');
    const contentBelow = document.getElementById('content-below-banner');

    button.addEventListener('click', function() {
        contentBelow.style.display = 'block'; // Hiển thị nội dung phía dưới
        contentBelow.scrollIntoView({ behavior: 'smooth' }); // Cuộn xuống mượt
    });
});
