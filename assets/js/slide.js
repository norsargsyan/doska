// slide gallery

$('.big-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
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
  responsive: [
  {
    breakpoint: 580,
    settings: {
      vertical: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      verticalSwiping: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.big-image',
    }
  },
  {
    breakpoint: 500,
    settings: {
      vertical: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      verticalSwiping: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.big-image',
    }
  },
  {
    breakpoint: 400,
    settings: {
      vertical: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      verticalSwiping: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.big-image',
    }
  },
],
});

// scroll image change

$('.small-images').on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

// image zoom

	$(document).ready(function() {
		$(".fancybox-item").fancybox();
	});
