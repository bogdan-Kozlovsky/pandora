$(function () {
  // плавний скрол
  $(".menu a, .footer__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  // плавний скрол
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $('.scroll-btn').addClass("show");
    } else {
      $('.scroll-btn').removeClass("show");
    }
  });
  $('.scroll-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });
  // иконка наверх
  // слайдер
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
    autoplay: true,
    autoplaySpeed: 3000,
  });
  // слайдер
});