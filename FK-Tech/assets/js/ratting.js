var $item = $('.lema-star-rating');
$item.each(function(){
  var rating = ($(this).attr("data-rating")*20);
  var num = ($(this).attr("data-num"))
  $(this).children(".rating").css("width",""+rating+"%");
  $(this).siblings('.num_ratting').html('('+num+')')
  $(this).siblings('.score').html($(this).attr("data-rating"))
})