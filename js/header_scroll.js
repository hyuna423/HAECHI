$(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    console.log(navbar);
    var $header = $('header');
    if(navbar > 860){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
  })
})