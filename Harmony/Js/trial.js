$(document).ready(function(){
    // Ẩn overlay và panel khi tải trang
    $(".overlay").hide();
    $('#mySidenav').css('left', '-100%');

    // Xử lý khi click để mở navi và hiển thị overlay
    $("#popup").click(function(){
        openNav();
        $(".overlay").fadeIn();
    });

    // Xử lý khi click overlay để đóng navi và ẩn overlay
    $(".overlay").click(function(){
        closeNav();
        $(this).fadeOut();
    });

    // Xử lý khi click để mở navi mobile và hiển thị overlay
    $("#click-here-to-open").click(function(){
        openNavMobile();
    });

    // Xử lý khi click overlay để đóng navi mobile và ẩn overlay
    $("#overlay").click(function(){
        closeNavMobile();
    });

    // Xử lý chuyển đổi giữa các panel
    $("#btn-next-furnitures").click(function(e) {
        e.preventDefault();
        $(".navbar-pannel").css("transform", "translateX(-50%)"); // Chuyển đổi thành -50% để hiển thị pannel-2
    });

    $("#btn-back-furnitures").click(function(e) {
        e.preventDefault();
        $(".navbar-pannel").css("transform", "translateX(0)"); // Quay lại vị trí ban đầu
    });

    // Xử lý khi scroll để hiển thị footer fullscreen
    window.addEventListener('scroll', function() {
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

    // Hiệu ứng loading khi chuyển trang và tải lại trang
    var loading = document.getElementById("loading");

    // Ẩn phần tử loading khi trang tải xong
    loading.style.display = "none";

    // Hiển thị hiệu ứng loading khi người dùng bấm vào thẻ a dẫn đến file .html
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            var href = this.getAttribute('href');
            if (href && href.endsWith('.html')) {
                event.preventDefault();
                loading.style.display = "flex";
                setTimeout(function() {
                    window.location.href = href;
                }, 2000); // Giả lập thời gian tải trang là 2 giây
            }
        });
    });

    // Hiển thị hiệu ứng loading khi tải lại trang hoặc rời khỏi trang
    window.addEventListener("beforeunload", function(event) {
        loading.style.display = "flex";
    });

    // Hiển thị hiệu ứng loading khi mở file .html
    window.addEventListener("load", function() {
        loading.style.display = "flex";
        setTimeout(function() {
            loading.style.display = "none";
        }, 2000); // Thời gian để hiển thị hiệu ứng loading khi mở file
    });

    // Hàm mở navi
    function openNav() {
        $("#nav").css("width", "250px");
    }

    // Hàm đóng navi
    function closeNav() {
        $("#nav").css("width", "0");
    }

    // Hàm mở navi mobile và hiển thị overlay
    function openNavMobile() {
        $('#mySidenav').show().animate({ left: '0' }, 100);
        $('#overlay').fadeIn();
        document.getElementById("main").style.transform = "translateX(30%)";
        $('body').addClass('body-no-scroll'); // Khóa scroll
    }

    // Hàm đóng navi mobile và ẩn overlay
    function closeNavMobile() {
        $('#mySidenav').animate({ left: '-100%' }, 450, function() {
            $('#mySidenav').hide(); // Ẩn khi đã hoàn thành animation
            $(".navbar-pannel").css("transform", "translateX(0)"); // Quay lại pannel-1 khi ẩn overlay
        });
        document.getElementById("main").style.transform = "translateX(0)";
        $('#overlay').fadeOut();
        $('body').removeClass('body-no-scroll'); // Mở khóa scroll
    }
});