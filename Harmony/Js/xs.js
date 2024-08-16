$(document).ready(function() {
    var originalParent = $(".container-xs").parent(); // Lưu trữ phần tử gốc
    var container = $(".container-xs");
    var section01 = $("#section-01");

    function moveContainer() {
        if ($(window).width() <= 576) { // Kiểm tra kích thước màn hình xs
            if (container.length && section01.length) {
                // Di chuyển phần tử vào section-01
                container.appendTo(section01);
            }
        } else { // Khi kích thước màn hình lớn hơn xs
            if (container.length && originalParent.length) {
                // Di chuyển phần tử trở lại phần tử gốc
                container.appendTo(originalParent);
            }
        }
    }

    // Gọi hàm khi tài liệu đã sẵn sàng
    moveContainer();

    // Cập nhật khi kích thước cửa sổ thay đổi
    $(window).resize(function() {
        moveContainer();
    });
});