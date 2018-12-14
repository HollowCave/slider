$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1,
    asNavFor: '.slider-for',
    swipeToSlide: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true
  });

//   Second Carousel
$('.carousel2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 4,
  centerMode: true,
  touchMove: false
});