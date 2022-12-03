$('.modal-basket').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
       $(this).fadeOut()
    }
})
$('.close').on('click', function(){
    $(this).parents('.modal-basket').fadeOut()
})
$('#open-basket').on('click', function(){
    $(this).children('.header_basket').toggleClass('basket-color')
    $(this).children('.basket_omg').children('path').toggleClass('basket-color')
    $('.modal-basket').fadeIn();
})
$('.modal-add_cart').on('click', function(e){
    if($(e.target).closest('.modal-add').length == 0){
       $(this).fadeOut()
    }
})
$('.open-cart').on('click', function(){
    $('.modal-add_cart').fadeIn();
})