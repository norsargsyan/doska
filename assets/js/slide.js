$('.big-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.small-images',
  infinite: true,
  swipe: false,
  arrows: true,
});
$('.small-images').slick({
  vertical: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  verticalSwiping: true,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: '.big-image',
});
$('.small-images').on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

	$(document).ready(function() {
		$(".fancybox-item").fancybox();
	});
