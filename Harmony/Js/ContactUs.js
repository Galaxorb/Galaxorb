// ----------------sothongtin---------------
$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });
    // $(".icon1").click(function() {
    //     $(this).hide();
    //     $(this).siblings(".icon2").show();
    // });

    // // Xử lý khi click vào icon2
    // $(".icon2").click(function() {
    //     $(this).hide();
    //     $(this).siblings(".icon1").show();
    // });
});
// ----------------sothongtin---------------