document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.changePageItem-login');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.href = '#';  // Đường dẫn đến trang mới
        });
    });
});