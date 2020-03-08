$(function () {
  $('.header__btn').on('click', function () {
    $('.modal').addClass('modal-active');
  });
  $('.modal__close').on('click', function () {
    $('.modal').removeClass('modal-active');
  });

  var btn = $('#up');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('up-show');
    } else {
      btn.removeClass('up-show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  new WOW().init();
});