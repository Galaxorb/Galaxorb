$(document).ready(function(){
    var owl = $('.owl-carousel ');
    owl.owlCarousel({
    loop: true,
    margin: 10,
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
