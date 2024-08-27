$('body').on('click','.popup_product', function(){
    $('.product_popup_windown').removeClass('popup_hide');
    $('.product_popup_windown').addClass('popup_show');
})
$('.product_popup_windown').on('click','.close_button', function(){
    $('.product_popup_windown').removeClass('popup_show');
    $('.product_popup_windown').addClass('popup_hide');
})