$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
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
  touchThreshold: 20,
  centerMode: true,
  touchMove: false
});