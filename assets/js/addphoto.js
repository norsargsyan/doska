// add photo
let slideIndex = 3;
  $('.upload__img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  dots: true,
});
$('.input-file').on('click', function() {
  slideIndex++;
  if(slideIndex < 11){
    $('.upload__img').slick('slickAdd','<div class="image-item"><input type="file" /></div>');
  }
});
