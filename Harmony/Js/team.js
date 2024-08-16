/*$(document).ready(function(){
    
    // Xử lý khi click vào icon1
    $(".layout1").click(function() {
        $(this).hide();
        $(this).siblings(".layout2").show();
    });

    // Xử lý khi click vào icon2
    $(".layout2").click(function() {
        $(this).hide();
        $(this).siblings(".layout1").show();
    });

    
});
*/
$(document).ready(function() {

    // Xử lý khi click vào layout1
    $(".layout1").click(function() {
        $(this).fadeOut(500, function() { // Mờ dần layout1
            $(this).siblings(".layout2").fadeIn(200); // Hiển thị layout2
        });
    });

    // Xử lý khi click vào layout2
    $(".layout2").click(function() {
        $(this).fadeOut(500, function() { // Mờ dần layout2
            $(this).siblings(".layout1").fadeIn(200); // Hiển thị layout1
        });
    });

});
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})