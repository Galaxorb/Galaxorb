document.addEventListener("DOMContentLoaded", function() {
    // Khởi tạo ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // Lấy tất cả các phần tử có lớp 'motion'
    var sections = document.querySelectorAll('.motion');

    // Tạo cảnh cho mỗi phần tử
    sections.forEach(function(section) {
        // Lấy các phần tử khác ngoài phần tử hiện tại
        var otherSections = Array.from(sections).filter(function(sec) {
            return sec !== section;
        });

        // Tạo cảnh cho phần tử hiện tại
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.5, // Kích hoạt khi phần tử ở giữa viewport
            duration: "100%"
        })
        .on("enter", function () {
            // Làm rõ phần tử hiện tại và giảm tỷ lệ cho các phần tử khác
            gsap.to(section, {filter: "blur(0px)", scale: 1.0});
            otherSections.forEach(function(sec) {
                gsap.to(sec, {filter: "blur(10px)", scale: 0.5});
            });
        })
        .on("leave", function () {
            // Khôi phục trạng thái khi rời khỏi phần tử hiện tại
            gsap.to(section, {filter: "blur(10px)", scale: 0.5});
            otherSections.forEach(function(sec) {
                gsap.to(sec, {filter: "blur(0px)", scale: 1.0});
            });
        })
        .addTo(controller);
    });
});