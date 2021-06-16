$(function () {

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
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.slider__content-inner').slick({
    asNavFor: '.slider__images-inner',
    centerMode: true,
    focusOnSelect: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/icons/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/icons/arrows-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  // слайдер
  // плавний скрол
  $(".menu a, .footer__content-link").on("click", function (event) {
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
  // адаптивий бургер
  $('.burger, .menu a').click(function () {
    $('.menu__list').toggleClass("active");
    $('.burger').toggleClass("active");
  });
  // адаптивий бургер

  // аниация
  // gsap.from('.menu', { opacity: 0, duration: 2, delay: .1, x: 60 })
  gsap.from('.header__map-coordinates', { opacity: 0, duration: 2, delay: .5, y: 25 })
  gsap.from('.header__content-ingo, .header__content-text, .header__content-btn, .menu__item , .header__content-social__item', { opacity: 0, duration: 3, delay: .1, y: 30, ease: 'expo.out', stagger: .2 })
  // аниация
});