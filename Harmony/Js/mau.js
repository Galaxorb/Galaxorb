$(document).ready(function(){



// Khi người dùng cuộn xuống 20px từ đầu trang, hiển thị nút
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Khi người dùng nhấp vào nút, quay lại đầu trang với hiệu ứng lướt mượt mà
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



    window.addEventListener('scroll', function() {
        var dropDownMenus = document.querySelectorAll('.drop-down');
        var yOffset = window.pageYOffset;

        dropDownMenus.forEach(function(dropDownMenu) {
            if (yOffset > 0) {
                dropDownMenu.style.top = '0px';
            } else {
                dropDownMenu.style.top = '170px';
            }
        });
    });
// Java navi
    





// Search
document.getElementById('triggle-search').addEventListener('click', function() {
    var formSearchLon = document.querySelector('.form-search-lon');
    var icon = document.getElementById('triggle-search');
    
    if (formSearchLon.classList.contains('active')) {
        formSearchLon.classList.remove('active');
        icon.classList.remove('fa-x');
        icon.classList.add('fa-magnifying-glass');
        setTimeout(function() {
            formSearchLon.style.display = 'none';
        }, 500); // Thời gian chờ khớp với thời gian chuyển động
    } else {
        formSearchLon.style.display = 'block';
        setTimeout(function() {
            formSearchLon.classList.add('active');
            icon.classList.remove('fa-magnifying-glass');
            icon.classList.add('fa-x');
        }, 10); // Thêm độ trễ nhỏ để chắc chắn transition hoạt động
    }
});

window.addEventListener('scroll', function() {
    var formSearchLon = document.querySelector('.form-search-lon');
    if (window.scrollY > 100) { // Điều chỉnh giá trị này tùy theo vị trí mong muốn
        formSearchLon.classList.add('fixed');
    } else {
        formSearchLon.classList.remove('fixed');
    }
});
// Search

$('#mySidenav').css('left','-100%');
$('#overlay').hide();

$("#click-here-to-open").click(function(){
    $('#mySidenav').show().animate({ left: '0' }, 100);
    $('#overlay').fadeIn();
    $('body').addClass('body-no-scroll'); // Khóa scroll
});

$("#overlay").click(function(){
    $('#mySidenav').animate({ left: '-100%' }, 450, function() {
        $('#mySidenav').hide(); // Ẩn khi đã hoàn thành animation
        $(".navbar-pannel").css("transform", "translateX(0)"); // Quay lại pannel-1 khi ẩn overlay
    });
    $('#overlay').fadeOut();
    $('body').removeClass('body-no-scroll'); // Mở khóa scroll
});
// Java naviMobi



    $("#btn-next-furnitures").click(function(e) {
        e.preventDefault();
        $(".navbar-pannel").css("transform", "translateX(-50%)"); // Chuyển đổi thành -50% để hiển thị pannel-2
    });

    $("#btn-back-furnitures").click(function(e) {
        e.preventDefault();
        $(".navbar-pannel").css("transform", "translateX(0)"); // Quay lại vị trí ban đầu
    });
// Java naviMobiMenu

document.addEventListener('scroll', function() {
    var footer = document.getElementById('bg-footer');
    var footerRect = footer.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (footerRect.top <= windowHeight / 2 && !footer.classList.contains('fullscreen-footer')) {
        // Khi phần footer xuất hiện 50% trên màn hình
        footer.classList.add('fullscreen-footer');
    } else if (footerRect.top > windowHeight / 2 && footer.classList.contains('fullscreen-footer')) {
        // Trở về trạng thái ban đầu khi cuộn lên
        footer.classList.remove('fullscreen-footer');
    }
});
// Java footer
// Đợi cho tài liệu HTML được tải hoàn toàn
})



//============================ Loading
document.addEventListener("DOMContentLoaded", function () {
    var loading = document.getElementById("loading");

    // Ẩn phần tử loading khi trang tải xong
    loading.style.display = "none";

    // Hiển thị hiệu ứng loading khi tải lại trang hoặc rời khỏi trang
    window.addEventListener("beforeunload", function (event) {
        loading.style.display = "flex";
    });

    // Hiển thị hiệu ứng loading khi mở file .html
    window.addEventListener("load", function () {
        loading.style.display = "flex";

        // Chuyển đổi opacity cho mượt mà
        setTimeout(function () {
            loading.style.opacity = "0"; // Bắt đầu làm mờ dần
            setTimeout(function () {
                loading.style.display = "none"; // Ẩn đi sau khi mờ dần
            }, 400); // Thời gian để hoàn thành chuyển đổi opacity
        }, 1700); // Thời gian để hiển thị hiệu ứng loading khi mở file
    });
    //============================ Loading
});





$(document).ready(function(){
// =============================Sign
const showPopupBtn = document.querySelector("#popup-icon");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const forgotPasswordLink = document.querySelector('.forgot-pass');
const forgotPasswordBox = document.querySelector('.form-box.forgot-password');
const loginBox = document.querySelector('.form-box.login');
const signupBox = document.querySelector('.form-box.signup');
const formDetails = document.querySelector('.form-details');
const forgotPasswordBackLink = document.querySelector('#forgot-password-link');

// Show popup on button click
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    // Reset to show login form when reopening
    if (document.body.classList.contains("show-popup")) {
        loginBox.style.display = 'flex';
        signupBox.style.display = 'none';
        forgotPasswordBox.style.display = 'none';
        formDetails.style.display = 'block';
    }
});

// Hide popup on close button click
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Toggle between login and signup forms
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
        if (link.id === "signup-link") {
            loginBox.style.display = 'none';
            forgotPasswordBox.style.display = 'none';
            signupBox.style.display = 'flex';
        } else {
            signupBox.style.display = 'none';
            forgotPasswordBox.style.display = 'none';
            loginBox.style.display = 'flex';
        }
        formDetails.style.display = 'block';  // Show the form details
    });
});

// Show forgot password form and hide login form
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    signupBox.style.display = 'none';
    forgotPasswordBox.style.display = 'block';
    formDetails.style.display = 'none'; // Hide the form details
});

// Show login form and hide forgot password form
forgotPasswordBackLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordBox.style.display = 'none';
    signupBox.style.display = 'none';
    loginBox.style.display = 'flex';
    formDetails.style.display = 'block'; // Show the form details
});

const signUpForm = document.querySelector('.form-box.signup form');
const resetPasswordForm = document.querySelector('.form-box.forgot-password form');

// Ngăn chặn hành vi mặc định của nút submit trong form đăng ký
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn chặn việc gửi form đi

    // Thực hiện chuyển hướng đến form đăng nhập
    loginBox.style.display = 'flex';
    signupBox.style.display = 'none';
    formDetails.style.display = 'block';
});

// Ngăn chặn hành vi mặc định của nút submit trong form reset mật khẩu
resetPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn chặn việc gửi form đi

    // Thực hiện chuyển hướng đến form đăng nhập
    loginBox.style.display = 'flex';
    forgotPasswordBox.style.display = 'none';
    formDetails.style.display = 'block';
});
// =============================Sign

})

// Hàm JavaScript để chuyển đổi sự hiển thị của container tin nhắn
function toggleMessages() {
    var messagesContainer = document.getElementById("messagesContainer");
    messagesContainer.classList.toggle("show-messages");
    $(".chat-button i").toggleClass("fa-comment fa-x");
}
// JavaScript function to close message container
function closeMessages() {
    var messagesContainer = document.getElementById("messagesContainer");
    messagesContainer.classList.remove("show-messages");
    $(".chat-button i").toggleClass("fa-x fa-comment");
}






// Link page
function navigateToPage1() {
    window.location.href = '../Src/Wishlist.html'; // Đường dẫn đến trang 1
}

function navigateToPage2() {
    window.location.href = '../Src/Account/account.html'; // Đường dẫn đến trang 1
}
function navigateToPage() {
    window.location.href = '../../Src/Wishlist.html'; // Đường dẫn đến trang 1
}