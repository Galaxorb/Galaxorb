window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


/*window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Nếu cuộn chuột xuống, thêm lớp active cho .why để hiển thị nó lên trên
        document.querySelector('.why').classList.add('active');
        // Loại bỏ lớp active khỏi .panel để ẩn nó đi
        document.querySelector('.panel').classList.remove('active');
    } else {
        // Nếu cuộn chuột lên, hiển thị lại .panel và ẩn .why
        document.querySelector('.panel').classList.add('active');
        document.querySelector('.why').classList.remove('active');
    }
});*/