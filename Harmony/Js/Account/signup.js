document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.changePageItem');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.href = '../../Src/Account/signin.html';  // Đường dẫn đến trang mới
        });
    });
});