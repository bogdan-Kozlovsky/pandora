$(function () {
  $('.studio__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/icons/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/icons/arrows-right.svg" alt=""></button>',
  });
  $('.slider__images-inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider__content-inner',
    // centerMode: true,
    // centerPadding: '0',
    // cssEase: 'linear',
  });
  $('.slider__content-inner').slick({
    asNavFor: '.slider__images-inner',
    centerMode: true,
    focusOnSelect: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/icons/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/icons/arrows-right.svg" alt=""></button>',
    // autoplay: true,
    // autoplaySpeed: 3000,

  });
});