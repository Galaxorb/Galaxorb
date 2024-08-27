$(document).ready(function(){
    $(".select_togle~.option").hide();
    $('.mega-menu .mega-menu-item').removeClass('hide');
    $(".dropdown_menu .dropdown_item").hide();
    let pixel = $(window).scrollTop();
    if(pixel > 30){
      $('.header').addClass('fixed-menu');
    } else {
      $('.header').removeClass('fixed-menu');
    }
})
$('.select_togle').on('click', function(){
    // console.log('click');
    $(this).siblings('.option').slideToggle(300) ;
    // $(this).closest('.option').slideToggle();
});

$(window).scroll(function(){
    let pixel = $(window).scrollTop();
    if(pixel > 30){
      $('.header').addClass('fixed-menu');
    } else {
      $('.header').removeClass('fixed-menu');
    }
  });
//megamenu desktop
$('.mega-menu .mega-menu-item').hide();
$('.mega-menu').on('mouseenter', function(){
    $(this).find('.mega-menu-item').slideDown(200) ;
}).on('mouseleave', function(){
    $(this).find('.mega-menu-item').slideUp(200) ;
});
//search form desktop
$('.header_search').on('click','.active', function(){
    $(this).siblings('.search_form').removeClass('hide_search').addClass('flex show_search');
    $(this).hide();
    $(this).siblings('.close').show();
}).on('click','.close', function(){
    $(this).siblings('.search_form').removeClass('show_search').addClass('hide_search');
    setTimeout(() => {
        $(this).siblings('.search_form').removeClass('flex')
    }, 300);
    $(this).hide();
    $(this).siblings('.active').show();
})
//dropdown mobile menu
$('.dropdown_header').on('click', function(){
    $(this).toggleClass('active')
    $(this).siblings('.dropdown_item').first().slideToggle(300) ;
    $(this).find('i').first().toggleClass('rotate_90');
})

//mobile menu show
$('.mobile_menu_nav').on('click', function(){
    $('.header_mobile').removeClass('hide_header');
    $('.header_mobile').find('.row').first().addClass('show_mobile_mobile');
    $('.header_mobile').find('.row').first().removeClass('hide_mobile_mobile');
    $('.header_mobile').find('.bg_overlay').animate({ opacity: 1 }, 300);
})
$('.header_mobile').on('click','.close_button', function(){
    $('.header_mobile').find('.row').first().removeClass('show_mobile_mobile');
    $('.header_mobile').find('.row').first().addClass('hide_mobile_mobile');
    $('.header_mobile').find('.bg_overlay').animate({ opacity: 0 }, 300);
    setTimeout(() => {
        $('.header_mobile').addClass('hide_header');
    }, 290);
})

//cart show
$('.active_cart').on('click', function(){
    $('.vitual_cart').removeClass('hide_cart');
    $('.vitual_cart').find('.row').first().addClass('show_cart');
    $('.vitual_cart').find('.row').first().removeClass('hide_cart');
    $('.vitual_cart').find('.bg_overlay').animate({ opacity: 1 }, 300);
})
$('.close_cart').on('click', function(){
    $('.vitual_cart').find('.row').first().removeClass('show_cart');
    $('.vitual_cart').find('.row').first().addClass('hide_cart');
    $('.vitual_cart').find('.bg_overlay').animate({ opacity: 0 }, 300);
    setTimeout(() => {
        $('.vitual_cart').addClass('hide_cart');
    }, 290);
})

