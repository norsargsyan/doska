let getText = true, elem;
$( document ).ready(function(){
  $('.product-text__more').click(function(){
    if(getText){
      $('.d_hidden').show(700);
      $('.product-text__description').css('max-height', '100%');
      $('.grad-back').hide(300);
      getText = false;
    }
    else{
      $('.d_hidden').hide(700);
      $('.grad-back').show(300);
      getText = true;
    }
  });
});
