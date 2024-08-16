function togglePopups(sectionId, toggleId) {
    const section = document.getElementById(sectionId);
    const toggle = document.getElementById(toggleId);
    const popups = section.getElementsByClassName('popup-main');

    if (toggle.checked) {
        for (let i = 0; i < popups.length; i++) {
            popups[i].classList.add('show');
        }
    } else {
        for (let i = 0; i < popups.length; i++) {
            popups[i].classList.remove('show');
        }
    }
}


$(document).ready(function(){

// script.js
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

    $("")


    $("#RoomAll-Btn").addClass("active");

    $("#RoomAll-Btn").click(function() {
        $("#Seb-Bed").show()
        $("#madison-bed").show()
        $("#DiningRoom-1").show()
        $("#DiningRoom-2").show()
        $("#LivingRoom-1").show()
        $("#LivingRoom-2").show()
    });
    $("#DiningRoom-Btn").click(function() {
        $("#Seb-Bed").hide()
        $("#madison-bed").hide()
        $("#DiningRoom-1").show()
        $("#DiningRoom-2").show()
        $("#LivingRoom-1").hide()
        $("#LivingRoom-2").hide()
    });
    $("#BedRoom-Btn").click(function() {
        $("#Seb-Bed").show()
        $("#madison-bed").show()
        $("#DiningRoom-1").hide()
        $("#DiningRoom-2").hide()
        $("#LivingRoom-1").hide()
        $("#LivingRoom-2").hide()
    });
    $("#Living-Btn").click(function() {
        $("#Seb-Bed").hide()
        $("#madison-bed").hide()
        $("#DiningRoom-1").hide()
        $("#DiningRoom-2").hide()
        $("#LivingRoom-1").show()
        $("#LivingRoom-2").show()
    });
    $(".Cus-Btn button").click(function() {
        // Remove 'active' class from all buttons
        $(".Cus-Btn button").removeClass("active");
        
        // Add 'active' class to the clicked button
        $(this).addClass("active");
    });



    $("#RoomAll-Btn-mb").addClass("active");

    $("#RoomAll-Btn-mb").click(function() {
        $("#Seb-Bed-mb").show()
        $("#madison-bed").show()
        $("#DiningRoom-1").show()
        $("#DiningRoom-2").show()
        $("#LivingRoom-1").show()
        $("#LivingRoom-2").show()
    });
    $("#DiningRoom-Btn-mb").click(function() {
        $("#Seb-Bed").hide()
        $("#madison-bed").hide()
        $("#DiningRoom-1").show()
        $("#DiningRoom-2").show()
        $("#LivingRoom-1").hide()
        $("#LivingRoom-2").hide()
    });
    $("#BedRoom-Btn-mb").click(function() {
        $("#Seb-Bed").show()
        $("#madison-bed").show()
        $("#DiningRoom-1").hide()
        $("#DiningRoom-2").hide()
        $("#LivingRoom-1").hide()
        $("#LivingRoom-2").hide()
    });
    $("#Living-Btn-mb").click(function() {
        $("#Seb-Bed").hide()
        $("#madison-bed").hide()
        $("#DiningRoom-1").hide()
        $("#DiningRoom-2").hide()
        $("#LivingRoom-1").show()
        $("#LivingRoom-2").show()
    });





    // $(".Menu-Product").hide()
    // $("#Overlay-MenuProduct").hide()
    // $(".open-product-list").click(function() {
    //     $(".Menu-Product").slideDown()
    //     $("#Overlay-MenuProduct").fadeIn()
    // });
    // $(".close-product-list").click(function() {
    //     $(".Menu-Product").slideUp()
    //     $("#Overlay-MenuProduct").fadeOut()
    // });
    // $("#Overlay-MenuProduct").click(function() {
    //     $(".Menu-Product").slideUp()
    //     $(this).fadeOut()
    // });

    document.querySelectorAll('.open-product-list').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            document.getElementById('Overlay-MenuProduct').style.display = 'block';
            document.querySelector('body').classList.add('no-scroll'); // Prevent body scroll
            document.querySelectorAll('.Menu-Product').forEach(menu => {
                if (menu.id === targetId) {
                    menu.classList.remove('hide');
                    menu.classList.add('show');
                    menu.style.display = 'flex'; // Ensure it's visible during the animation
                } else {
                    menu.classList.remove('show');
                    menu.classList.add('hide');
                    setTimeout(() => {
                        menu.style.display = 'none'; // Hide it after the animation
                    }, 300); // Duration of the animation
                }
            });
        });
    });
    
    document.querySelectorAll('.close-product-list').forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.closest('.Menu-Product');
            menu.classList.remove('show');
            menu.classList.add('hide');
            setTimeout(() => {
                menu.style.display = 'none'; // Hide it after the animation
                document.getElementById('Overlay-MenuProduct').style.display = 'none';
                document.querySelector('body').classList.remove('no-scroll'); // Allow body scroll
            }, 300); // Duration of the animation
        });
    });
    
    document.getElementById('Overlay-MenuProduct').addEventListener('click', () => {
        document.querySelectorAll('.Menu-Product').forEach(menu => {
            menu.classList.remove('show');
            menu.classList.add('hide');
            setTimeout(() => {
                menu.style.display = 'none'; // Hide it after the animation
                document.getElementById('Overlay-MenuProduct').style.display = 'none';
                document.querySelector('body').classList.remove('no-scroll'); // Allow body scroll
            }, 300); // Duration of the animation
        });
    });



    var owl = $('.owl-carousel ');
    owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:['<i class="fa-light fa-angle-left"></i>','<i class="fa-light fa-angle-right"></i>'],
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
            items: 3,
        },

        }
    });

        function togglePopups(sectionId, toggleId) {
            const section = document.getElementById(sectionId);
            const toggle = document.getElementById(toggleId);
            const isChecked = toggle.checked;
            section.querySelectorAll('.ripple-container').forEach(container => {
                container.style.display = isChecked ? 'block' : 'none';
            });
        }

})
